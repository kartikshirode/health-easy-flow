
import React, { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { useNavigate } from 'react-router-dom';
import { signOutUser, getUserProfile } from '@/services/authService';
import { getPatientAppointments } from '@/services/appointmentService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Phone, LogOut } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { FirebaseAppointment } from '@/services/appointmentService';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState<FirebaseAppointment[]>([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState<FirebaseAppointment[]>([]);
  const [pastAppointments, setPastAppointments] = useState<FirebaseAppointment[]>([]);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            // Get user profile
            const profile = await getUserProfile(user.uid);
            setUserProfile(profile);
            
            // Get appointments
            const patientAppointments = await getPatientAppointments(user.uid);
            setAppointments(patientAppointments);
            
            // Filter appointments
            const today = new Date().toISOString().split('T')[0];
            const upcoming = patientAppointments.filter(app => app.date >= today);
            const past = patientAppointments.filter(app => app.date < today);
            
            setUpcomingAppointments(upcoming);
            setPastAppointments(past);
          } catch (error) {
            console.error("Error fetching patient data:", error);
            toast({
              title: "Error",
              description: "Failed to load your appointments",
              variant: "destructive",
            });
          } finally {
            setLoading(false);
          }
        } else {
          // Not authenticated, redirect to login
          navigate('/login');
        }
      });
    };
    
    checkAuth();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate('/');
      toast({
        title: "Signed out",
        description: "You have been successfully signed out",
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p>Loading your appointments...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-health-dark dark:text-white">Patient Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome back, {userProfile?.name || auth.currentUser?.phoneNumber}
            </p>
          </div>
          <Button variant="outline" onClick={handleSignOut} className="mt-4 sm:mt-0">
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming Appointments</TabsTrigger>
            <TabsTrigger value="past">Past Appointments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {upcomingAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">You have no upcoming appointments</p>
                  <Button onClick={() => navigate('/booking')}>Book an Appointment</Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} isPast />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">You have no past appointments</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface AppointmentCardProps {
  appointment: FirebaseAppointment;
  isPast?: boolean;
}

const AppointmentCard = ({ appointment, isPast = false }: AppointmentCardProps) => {
  return (
    <Card className={`transition-shadow hover:shadow-md ${
      isPast ? 'border-gray-200' : 'border-l-4 border-l-health-primary'
    }`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex justify-between items-center">
          <span>{appointment.issue}</span>
          <span className={`text-sm px-2 py-1 rounded ${
            appointment.status === 'confirmed' 
              ? 'bg-green-100 text-green-800' 
              : appointment.status === 'cancelled'
              ? 'bg-red-100 text-red-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {appointment.status}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-3 text-health-primary" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">{appointment.date}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-3 text-health-primary" />
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-medium">{appointment.selectedSlot}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <User className="h-5 w-5 mr-3 text-health-primary" />
            <div>
              <p className="text-sm text-gray-500">Patient</p>
              <p className="font-medium">{appointment.name}</p>
            </div>
          </div>
          
          {!isPast && (
            <Button variant="outline" className="w-full mt-4">
              View Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientDashboard;
