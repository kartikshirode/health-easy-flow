
import React from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const PatientInfoForm = () => {
  const { patientInfo, updatePatientInfo, setCurrentStep, medicalIssues } = useAppointment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const isFormValid = () => {
    const { name, age, mobile, email, address, issue } = patientInfo;
    return (
      name.trim() !== '' && 
      age.trim() !== '' && 
      mobile.trim() !== '' && 
      email.trim() !== '' && 
      address.trim() !== '' && 
      issue.trim() !== ''
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6 space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6">Patient Information</h2>
          
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={patientInfo.name}
              onChange={(e) => updatePatientInfo({ name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              min="1"
              max="120"
              value={patientInfo.age}
              onChange={(e) => updatePatientInfo({ age: e.target.value })}
              placeholder="Enter your age"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              value={patientInfo.mobile}
              onChange={(e) => updatePatientInfo({ mobile: e.target.value })}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={patientInfo.email}
              onChange={(e) => updatePatientInfo({ email: e.target.value })}
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              value={patientInfo.address}
              onChange={(e) => updatePatientInfo({ address: e.target.value })}
              placeholder="Enter your address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="issue">Medical Issue</Label>
            <Select
              value={patientInfo.issue}
              onValueChange={(value) => updatePatientInfo({ issue: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your medical issue" />
              </SelectTrigger>
              <SelectContent>
                {medicalIssues.map((issue) => (
                  <SelectItem key={issue.id} value={issue.name}>
                    {issue.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={!isFormValid()}>
            Next: Select Time Slot
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PatientInfoForm;
