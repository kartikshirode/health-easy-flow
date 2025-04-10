
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
}

export type MedicalIssue = {
  id: string;
  name: string;
  description: string;
}

export type PatientInfo = {
  name: string;
  age: string;
  mobile: string;
  email: string;
  address: string;
  issue: string;
  selectedSlot: string;
}

export type Appointment = PatientInfo & {
  id: string;
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: string;
}

interface AppointmentContextType {
  patientInfo: PatientInfo;
  updatePatientInfo: (info: Partial<PatientInfo>) => void;
  resetPatientInfo: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  timeSlots: TimeSlot[];
  medicalIssues: MedicalIssue[];
  appointments: Appointment[];
  bookAppointment: () => Promise<Appointment>;
  loading: boolean;
  error: string | null;
}

const defaultPatientInfo: PatientInfo = {
  name: '',
  age: '',
  mobile: '',
  email: '',
  address: '',
  issue: '',
  selectedSlot: '',
};

// Create the context
const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

// Sample data for development
const sampleTimeSlots: TimeSlot[] = [
  { id: '1', time: '09:00 AM', available: true },
  { id: '2', time: '10:00 AM', available: true },
  { id: '3', time: '11:00 AM', available: false },
  { id: '4', time: '12:00 PM', available: true },
  { id: '5', time: '02:00 PM', available: true },
  { id: '6', time: '03:00 PM', available: true },
  { id: '7', time: '04:00 PM', available: false },
  { id: '8', time: '05:00 PM', available: true },
];

const sampleMedicalIssues: MedicalIssue[] = [
  { id: '1', name: 'General Checkup', description: 'Routine health examination' },
  { id: '2', name: 'Fever and Cold', description: 'Symptoms related to fever, cold or flu' },
  { id: '3', name: 'Stomach Issues', description: 'Problems related to digestion or stomach pain' },
  { id: '4', name: 'Joint Pain', description: 'Issues related to joints, muscles or bone pain' },
  { id: '5', name: 'Skin Problems', description: 'Conditions affecting the skin' },
  { id: '6', name: 'Other', description: 'Any other medical issue not listed above' },
];

const sampleAppointments: Appointment[] = [
  {
    id: '1',
    name: 'John Doe',
    age: '35',
    mobile: '9876543210',
    email: 'john@example.com',
    address: '123 Main St, City',
    issue: 'General Checkup',
    selectedSlot: '09:00 AM',
    date: '2025-04-11',
    status: 'confirmed',
    paymentStatus: 'completed',
    createdAt: '2025-04-10T08:30:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: '28',
    mobile: '8765432109',
    email: 'jane@example.com',
    address: '456 Oak Ave, Town',
    issue: 'Fever and Cold',
    selectedSlot: '02:00 PM',
    date: '2025-04-11',
    status: 'confirmed',
    paymentStatus: 'completed',
    createdAt: '2025-04-10T10:15:00Z'
  },
];

// Provider component
export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>(defaultPatientInfo);
  const [currentStep, setCurrentStep] = useState(1);
  const [timeSlots] = useState<TimeSlot[]>(sampleTimeSlots);
  const [medicalIssues] = useState<MedicalIssue[]>(sampleMedicalIssues);
  const [appointments] = useState<Appointment[]>(sampleAppointments);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updatePatientInfo = (info: Partial<PatientInfo>) => {
    setPatientInfo(prev => ({ ...prev, ...info }));
  };

  const resetPatientInfo = () => {
    setPatientInfo(defaultPatientInfo);
    setCurrentStep(1);
  };

  // Mock appointment booking function
  const bookAppointment = async (): Promise<Appointment> => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call to Firebase
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      const newAppointment: Appointment = {
        ...patientInfo,
        id: `app-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        status: 'confirmed',
        paymentStatus: 'completed',
        createdAt: new Date().toISOString()
      };
      
      // In a real app, we'd add this to Firebase
      console.log('Appointment booked:', newAppointment);
      
      return newAppointment;
    } catch (err) {
      setError('Failed to book appointment. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    patientInfo,
    updatePatientInfo,
    resetPatientInfo,
    currentStep,
    setCurrentStep,
    timeSlots,
    medicalIssues,
    appointments,
    bookAppointment,
    loading,
    error
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};

// Custom hook for using the context
export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};
