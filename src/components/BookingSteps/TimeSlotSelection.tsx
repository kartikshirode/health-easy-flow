
import React from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const TimeSlotSelection = () => {
  const { patientInfo, updatePatientInfo, setCurrentStep, timeSlots } = useAppointment();

  const handleSlotSelection = (slotId: string, time: string) => {
    updatePatientInfo({ selectedSlot: time });
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleNext = () => {
    if (patientInfo.selectedSlot) {
      setCurrentStep(3);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-3">Select Appointment Time</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
            Please select an available time slot for your appointment
          </p>
          <div className="flex items-center justify-center gap-2 text-health-primary mb-8 border border-health-primary/20 bg-health-primary/5 py-3 px-4 rounded-lg">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5 mb-6">
          <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-4">Morning Slots</h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {timeSlots.filter(slot => slot.time.includes('AM')).map((slot) => (
              <motion.div key={slot.id} variants={item}>
                <Button
                  variant={patientInfo.selectedSlot === slot.time ? "default" : "outline"}
                  className={`h-auto py-4 w-full ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => slot.available && handleSlotSelection(slot.id, slot.time)}
                  disabled={!slot.available}
                >
                  <div className="flex flex-col items-center w-full">
                    <Clock className="h-5 w-5 mb-1" />
                    <span className="text-base">{slot.time}</span>
                    {patientInfo.selectedSlot === slot.time && 
                      <CheckCircle2 className="h-4 w-4 mt-1 text-green-500" />
                    }
                  </div>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5">
          <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-4">Afternoon Slots</h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {timeSlots.filter(slot => slot.time.includes('PM')).map((slot) => (
              <motion.div key={slot.id} variants={item}>
                <Button
                  variant={patientInfo.selectedSlot === slot.time ? "default" : "outline"}
                  className={`h-auto py-4 w-full ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => slot.available && handleSlotSelection(slot.id, slot.time)}
                  disabled={!slot.available}
                >
                  <div className="flex flex-col items-center w-full">
                    <Clock className="h-5 w-5 mb-1" />
                    <span className="text-base">{slot.time}</span>
                    {patientInfo.selectedSlot === slot.time && 
                      <CheckCircle2 className="h-4 w-4 mt-1 text-green-500" />
                    }
                  </div>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {!patientInfo.selectedSlot && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Please select an available time slot to continue
          </p>
        )}
      </CardContent>

      <CardFooter className="flex justify-between mt-4 pt-4 border-t">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button 
          onClick={handleNext} 
          disabled={!patientInfo.selectedSlot}
          className={patientInfo.selectedSlot ? "animate-pulse" : ""}
        >
          Next: Payment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TimeSlotSelection;
