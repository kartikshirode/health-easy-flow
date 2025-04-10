
import React, { useEffect } from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, User, Phone } from 'lucide-react';

const Confirmation = () => {
  const { resetPatientInfo, patientInfo } = useAppointment();

  useEffect(() => {
    // Ensure this page is only accessible if they have patient info
    if (!patientInfo.name || !patientInfo.selectedSlot) {
      resetPatientInfo();
    }
    
    // Reset patient info when navigating away from this page
    return () => {
      resetPatientInfo();
    };
  }, []);

  if (!patientInfo.name || !patientInfo.selectedSlot) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Invalid Access</h2>
        <p className="text-gray-600 mb-6">
          Please complete the booking process to access this page.
        </p>
        <Button asChild>
          <Link to="/booking">Go to Booking</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Appointment Confirmed!</h1>
        <p className="text-gray-600 mt-2">
          Your appointment has been successfully scheduled. We've sent the details to your email.
        </p>
      </div>

      <Card className="shadow-lg border-t-4 border-t-health-primary">
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-3 text-health-primary" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-3 text-health-primary" />
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">{patientInfo.selectedSlot}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <User className="h-5 w-5 mr-3 text-health-primary" />
              <div>
                <p className="text-sm text-gray-500">Patient</p>
                <p className="font-medium">{patientInfo.name}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-health-primary" />
              <div>
                <p className="text-sm text-gray-500">Mobile</p>
                <p className="font-medium">{patientInfo.mobile}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Appointment Instructions</h3>
            <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
              <li>Please arrive 15 minutes before your scheduled time.</li>
              <li>Bring any previous medical records if available.</li>
              <li>Wear a mask for your safety and others.</li>
              <li>Payment has been confirmed and receipt sent to your email.</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button variant="outline" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild>
              <Link to="/booking">Book Another Appointment</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Confirmation;
