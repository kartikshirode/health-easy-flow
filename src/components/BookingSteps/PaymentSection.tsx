
import React, { useState } from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, CreditCard, Calendar, Clock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const PaymentSection = () => {
  const { patientInfo, setCurrentStep, bookAppointment, loading } = useAppointment();
  const [processingPayment, setProcessingPayment] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleBack = () => {
    setCurrentStep(2);
  };

  const handlePayment = async () => {
    try {
      setProcessingPayment(true);
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      const appointment = await bookAppointment();
      
      toast({
        title: "Appointment Confirmed!",
        description: `Your appointment has been scheduled for ${appointment.date} at ${appointment.selectedSlot}`,
        variant: "default",
      });
      
      // Redirect to confirmation page
      navigate('/booking/confirmation');
      
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setProcessingPayment(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Complete Your Booking</CardTitle>
        <CardDescription>Appointment details and payment</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2">Appointment Summary</h3>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-2 text-health-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Date</p>
                <p className="text-muted-foreground">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-2 text-health-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Time</p>
                <p className="text-muted-foreground">{patientInfo.selectedSlot}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 text-health-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Service</p>
                <p className="text-muted-foreground">{patientInfo.issue}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-3">Patient Information</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Name</p>
              <p className="font-medium">{patientInfo.name}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Age</p>
              <p className="font-medium">{patientInfo.age}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Mobile</p>
              <p className="font-medium">{patientInfo.mobile}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Email</p>
              <p className="font-medium">{patientInfo.email}</p>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="font-medium text-lg mb-3">Payment Details</h3>
          <div className="flex justify-between mb-2">
            <span>Consultation Fee</span>
            <span className="font-medium">$50.00</span>
          </div>
          <div className="flex justify-between mb-2 text-muted-foreground">
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>$50.00</span>
          </div>
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 text-amber-500" />
          <p className="text-sm">This is a demo application. No actual payment will be processed.</p>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleBack} disabled={processingPayment}>
          Back
        </Button>
        <Button 
          onClick={handlePayment} 
          disabled={processingPayment || loading}
          className="bg-health-accent hover:bg-health-accent/90"
        >
          {processingPayment ? (
            <>Processing...</>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" /> Pay $50.00
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentSection;
