
import React from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import PatientInfoForm from '@/components/BookingSteps/PatientInfoForm';
import TimeSlotSelection from '@/components/BookingSteps/TimeSlotSelection';
import PaymentSection from '@/components/BookingSteps/PaymentSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, CreditCard, CalendarCheck } from 'lucide-react';

const Booking = () => {
  const { currentStep } = useAppointment();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  // Icons for each step
  const stepIcons = [
    <User className="h-5 w-5" key="user" />,
    <Clock className="h-5 w-5" key="clock" />,
    <CreditCard className="h-5 w-5" key="credit-card" />
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-center text-health-dark dark:text-white mb-3">
            Book Your Appointment
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Complete the steps below to schedule your visit with Dr. Sarah Johnson
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex justify-center mb-10 relative"
        >
          <div className="flex items-center relative z-10">
            {[1, 2, 3].map((step, index) => (
              <React.Fragment key={step}>
                <div className={`flex items-center justify-center h-12 w-12 rounded-full ${
                  currentStep >= step ? 'bg-health-primary shadow-lg' : 'bg-gray-300'
                } text-white font-bold transition-all duration-300`}>
                  {currentStep > step ? (
                    <CalendarCheck className="h-6 w-6" />
                  ) : (
                    <React.Fragment>
                      {stepIcons[index]}
                    </React.Fragment>
                  )}
                </div>
                {index < 2 && (
                  <div className={`w-20 h-1 ${
                    currentStep > step ? 'bg-health-primary' : 'bg-gray-300'
                  } transition-all duration-500`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 flex w-full justify-between px-12 max-w-md">
            <span className={currentStep >= 1 ? "text-health-primary font-medium" : ""}>Patient Info</span>
            <span className={currentStep >= 2 ? "text-health-primary font-medium" : ""}>Select Time</span>
            <span className={currentStep >= 3 ? "text-health-primary font-medium" : ""}>Payment</span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden step-transition"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
            key={currentStep}
          >
            {currentStep === 1 && <PatientInfoForm />}
            {currentStep === 2 && <TimeSlotSelection />}
            {currentStep === 3 && <PaymentSection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Booking;
