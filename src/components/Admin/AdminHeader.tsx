
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface AdminHeaderProps {
  downloadCSV: () => void;
}

const AdminHeader = ({ downloadCSV }: AdminHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Manage patient appointments</p>
      </div>
      <div className="mt-4 sm:mt-0">
        <Button onClick={downloadCSV} variant="outline" className="flex items-center">
          <Download className="mr-2 h-4 w-4" /> Export CSV
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
