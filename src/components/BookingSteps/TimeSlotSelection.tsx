
import React from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Clock } from 'lucide-react';

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

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center mb-6">Select Appointment Time</h2>
        <p className="text-gray-600 text-center mb-6">
          Please select an available time slot for your appointment on {new Date().toLocaleDateString()}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
          {timeSlots.map((slot) => (
            <Button
              key={slot.id}
              variant={patientInfo.selectedSlot === slot.time ? "default" : "outline"}
              className={`h-auto py-4 ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => slot.available && handleSlotSelection(slot.id, slot.time)}
              disabled={!slot.available}
            >
              <div className="flex flex-col items-center">
                <Clock className="h-5 w-5 mb-1" />
                <span>{slot.time}</span>
              </div>
            </Button>
          ))}
        </div>

        {!patientInfo.selectedSlot && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Please select an available time slot to continue
          </p>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!patientInfo.selectedSlot}>
          Next: Payment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TimeSlotSelection;
