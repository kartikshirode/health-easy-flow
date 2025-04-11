
import React, { useState } from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { Card, CardContent } from '@/components/ui/card';
import AdminHeader from '@/components/Admin/AdminHeader';
import AdminStats from '@/components/Admin/AdminStats';
import SearchAndFilter from '@/components/Admin/SearchAndFilter';
import AppointmentTable from '@/components/Admin/AppointmentTable';

const Admin = () => {
  const { appointments } = useAppointment();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAppointments = appointments.filter(
    (app) =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.mobile.includes(searchQuery) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AdminHeader downloadCSV={downloadCSV} />
        <AdminStats appointments={appointments} />
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <SearchAndFilter 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            <AppointmentTable appointments={filteredAppointments} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
