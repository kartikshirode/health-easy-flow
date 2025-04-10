
import React from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import PatientInfoForm from '@/components/BookingSteps/PatientInfoForm';
import TimeSlotSelection from '@/components/BookingSteps/TimeSlotSelection';
import PaymentSection from '@/components/BookingSteps/PaymentSection';

const Booking = () => {
  const { currentStep } = useAppointment();

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-health-dark mb-2">
          Book Your Appointment
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Complete the steps below to schedule your visit with Dr. Sarah Johnson
        </p>

        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center h-10 w-10 rounded-full ${
              currentStep >= 1 ? 'bg-health-primary' : 'bg-gray-300'
            } text-white font-bold`}>
              1
            </div>
            <div className={`w-16 h-1 ${
              currentStep >= 2 ? 'bg-health-primary' : 'bg-gray-300'
            }`}></div>
            <div className={`flex items-center justify-center h-10 w-10 rounded-full ${
              currentStep >= 2 ? 'bg-health-primary' : 'bg-gray-300'
            } text-white font-bold`}>
              2
            </div>
            <div className={`w-16 h-1 ${
              currentStep >= 3 ? 'bg-health-primary' : 'bg-gray-300'
            }`}></div>
            <div className={`flex items-center justify-center h-10 w-10 rounded-full ${
              currentStep >= 3 ? 'bg-health-primary' : 'bg-gray-300'
            } text-white font-bold`}>
              3
            </div>
          </div>
        </div>

        <div className="step-transition">
          {currentStep === 1 && <PatientInfoForm />}
          {currentStep === 2 && <TimeSlotSelection />}
          {currentStep === 3 && <PaymentSection />}
        </div>
      </div>
    </div>
  );
};

export default Booking;
