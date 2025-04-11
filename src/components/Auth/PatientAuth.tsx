
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { sendOTP, verifyOTP, createUserProfile } from '@/services/authService';
import { useNavigate } from 'react-router-dom';

const PatientAuth = () => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Formatting phone number for international format if needed
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
      await sendOTP(formattedPhone);
      setStep('otp');
      toast({
        title: "OTP Sent",
        description: "Please check your phone for the verification code",
      });
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast({
        title: "Failed to send OTP",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const user = await verifyOTP(otp);
      // Create/update user profile
      await createUserProfile(user, {
        phoneNumber: user.phoneNumber,
        lastLogin: new Date(),
      });
      
      toast({
        title: "Authentication Successful",
        description: "You have been successfully authenticated",
      });
      
      // Redirect to dashboard or booking
      navigate('/booking');
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast({
        title: "Failed to verify OTP",
        description: "The code you entered is invalid. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Patient Authentication</CardTitle>
          <CardDescription>
            {step === 'phone' 
              ? 'Enter your phone number to receive a verification code' 
              : 'Enter the 6-digit code sent to your phone'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 'phone' ? (
            <div className="space-y-4">
              <Input
                placeholder="Phone Number (e.g. +1234567890)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
              />
              <div id="recaptcha-container"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center py-4">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Didn't receive the code?{" "}
                <Button 
                  variant="link" 
                  className="p-0 h-auto" 
                  onClick={() => setStep('phone')}
                >
                  Try again
                </Button>
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {step === 'phone' ? (
            <Button 
              className="w-full" 
              onClick={handleSendOTP}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Verification Code"}
            </Button>
          ) : (
            <Button 
              className="w-full" 
              onClick={handleVerifyOTP}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default PatientAuth;
