
import React, { useEffect } from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import PatientInfoForm from '@/components/BookingSteps/PatientInfoForm';
import TimeSlotSelection from '@/components/BookingSteps/TimeSlotSelection';
import PaymentSection from '@/components/BookingSteps/PaymentSection';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Calendar, Clock, CreditCard } from 'lucide-react';

const Booking = () => {
  const { currentStep } = useAppointment();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  const stepLabels = ["Patient Info", "Select Slot", "Payment"];
  const stepIcons = [
    <CheckCircle className="h-6 w-6" key="patient" />,
    <Clock className="h-6 w-6" key="time" />,
    <CreditCard className="h-6 w-6" key="payment" />
  ];

  // Images for the background
  const backgroundImages = [
    "url('https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=2592&ixlib=rb-4.0.3')",
    "url('https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3')",
    "url('https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3')"
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div 
        className="max-w-5xl mx-auto"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.95)), 
            ${backgroundImages[currentStep - 1]}
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '2rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
          padding: '2rem',
        }}
      >
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
          className="flex justify-center mb-20 relative"
        >
          <div className="flex items-center relative z-10">
            {[1, 2, 3].map((step, index) => (
              <React.Fragment key={step}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    backgroundColor: currentStep >= step ? 'var(--health-primary)' : 'var(--muted)'
                  }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center
                    ${currentStep >= step ? 'bg-health-primary text-white' : 'bg-gray-200 text-gray-500'}
                    shadow-md transition-all duration-500`}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {stepIcons[index]}
                </motion.div>
                {index < 2 && (
                  <div 
                    className={`w-24 h-1 ${
                      currentStep > step ? 'bg-health-primary' : 'bg-gray-300'
                    } transition-all duration-500`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="absolute top-20 left-0 right-0 flex justify-center">
            <div className="flex w-full max-w-md justify-between px-2">
              {stepLabels.map((label, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  className={`text-center w-24 ${
                    currentStep >= index + 1 
                      ? "text-health-primary font-medium" 
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
            key={currentStep}
            className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden step-transition py-0 my-[36px] rounded-2xl"
          >
            {currentStep === 1 && <PatientInfoForm />}
            {currentStep === 2 && <TimeSlotSelection />}
            {currentStep === 3 && <PaymentSection />}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          <p>Need assistance? Contact our support team at <span className="text-health-primary font-medium">support@healtheasyflow.com</span></p>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
