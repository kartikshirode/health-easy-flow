
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AdminHeader from '@/components/Admin/AdminHeader';
import AdminStats from '@/components/Admin/AdminStats';
import AppointmentTable from '@/components/Admin/AppointmentTable';
import EnhancedFilter from '@/components/Admin/EnhancedFilter';
import { auth } from '@/lib/firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import {
  getAppointments,
  getAppointmentsByPhone,
  filterAppointmentsByDate,
  filterAppointmentsByIssue,
  deleteAppointment,
  FirebaseAppointment
} from '@/services/appointmentService';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, 
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter, 
  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

const Admin = () => {
  const [appointments, setAppointments] = useState<FirebaseAppointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<FirebaseAppointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (!user) {
          navigate('/admin-login');
          return;
        }
        
        fetchAppointments();
      });
    };
    
    checkAuth();
  }, [navigate]);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const allAppointments = await getAppointments();
      setAppointments(allAppointments);
      setFilteredAppointments(allAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast({
        title: "Error",
        description: "Failed to load appointments",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (filterType: string, value: string) => {
    setLoading(true);
    setIsFiltering(true);
    
    try {
      let filtered;
      
      switch (filterType) {
        case 'mobile':
          filtered = await getAppointmentsByPhone(value);
          break;
        case 'date':
          filtered = await filterAppointmentsByDate(value);
          break;
        case 'issue':
          filtered = await filterAppointmentsByIssue(value);
          break;
        case 'name':
          filtered = appointments.filter(app => 
            app.name.toLowerCase().includes(value.toLowerCase())
          );
          break;
        case 'email':
          filtered = appointments.filter(app => 
            app.email.toLowerCase().includes(value.toLowerCase())
          );
          break;
        default:
          filtered = appointments;
      }
      
      setFilteredAppointments(filtered);
      toast({
        title: "Filtered Results",
        description: `Found ${filtered.length} appointments`,
      });
    } catch (error) {
      console.error("Error filtering appointments:", error);
      toast({
        title: "Error",
        description: "Failed to filter appointments",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setFilteredAppointments(appointments);
    setIsFiltering(false);
    toast({
      title: "Filters Cleared",
      description: "Showing all appointments",
    });
  };

  const downloadCSV = () => {
    const headers = ['ID', 'Name', 'Age', 'Mobile', 'Email', 'Issue', 'Date', 'Time', 'Status', 'Payment'];
    
    const csvData = filteredAppointments.map(app => [
      app.id,
      app.name,
      app.age,
      app.mobile,
      app.email,
      app.issue,
      app.date,
      app.selectedSlot,
      app.status,
      app.paymentStatus
    ]);
    
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `appointments-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Complete",
      description: "The appointments data has been downloaded as CSV",
    });
  };

  const deleteFilteredAppointments = async () => {
    try {
      setLoading(true);
      
      // Delete each appointment in the filtered list
      for (const app of filteredAppointments) {
        if (app.id) {
          await deleteAppointment(app.id);
        }
      }
      
      toast({
        title: "Deletion Successful",
        description: `${filteredAppointments.length} appointments have been deleted`,
      });
      
      // Refresh the appointment list
      fetchAppointments();
      setIsFiltering(false);
    } catch (error) {
      console.error("Error deleting appointments:", error);
      toast({
        title: "Error",
        description: "Failed to delete appointments",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AdminHeader downloadCSV={downloadCSV} />
        <AdminStats 
          appointments={appointments} 
          isLoading={loading} 
        />
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <EnhancedFilter 
              onFilter={handleFilter}
              onClearFilters={clearFilters}
              onDeleteFiltered={() => {
                // This will trigger the alert dialog
                document.getElementById('delete-filtered-trigger')?.click();
              }}
            />
            
            <div className="mt-6">
              <AppointmentTable 
                appointments={filteredAppointments}
                isLoading={loading} 
              />
            </div>
            
            {/* Hidden trigger for delete confirmation */}
            <AlertDialog>
              <AlertDialogTrigger id="delete-filtered-trigger" className="hidden">
                Delete
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will permanently delete {filteredAppointments.length} appointments
                    from the database. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={deleteFilteredAppointments}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
