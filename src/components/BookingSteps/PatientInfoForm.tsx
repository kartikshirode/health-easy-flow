
import React from 'react';
import { useAppointment } from '@/context/AppointmentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { User, Mail, Phone, MapPin, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const PatientInfoForm = () => {
  const {
    patientInfo,
    updatePatientInfo,
    setCurrentStep,
    medicalIssues
  } = useAppointment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const isFormValid = () => {
    const {
      name,
      age,
      mobile,
      email,
      address,
      issue
    } = patientInfo;
    return name.trim() !== '' && age.trim() !== '' && mobile.trim() !== '' && email.trim() !== '' && address.trim() !== '' && issue.trim() !== '';
  };

  // Animation variants
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6 space-y-4 rounded-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-6"
          >
            Patient Information
          </motion.h2>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-5"
          >
            <motion.div variants={item} className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-health-primary" />
                Full Name
              </Label>
              <Input 
                id="name"
                value={patientInfo.name}
                onChange={e => updatePatientInfo({ name: e.target.value })}
                placeholder="Enter your full name"
                className="transition-all duration-300 focus:shadow-md"
                required
              />
            </motion.div>
            
            <motion.div variants={item} className="space-y-2">
              <Label htmlFor="age" className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 text-health-primary text-center font-bold">
                  #
                </span>
                Age
              </Label>
              <Input
                id="age"
                type="number"
                min="1"
                max="120"
                value={patientInfo.age}
                onChange={e => updatePatientInfo({ age: e.target.value })}
                placeholder="Enter your age"
                className="transition-all duration-300 focus:shadow-md"
                required
              />
            </motion.div>
            
            <motion.div variants={item} className="space-y-2">
              <Label htmlFor="mobile" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-health-primary" />
                Mobile Number
              </Label>
              <Input
                id="mobile"
                type="tel"
                value={patientInfo.mobile}
                onChange={e => updatePatientInfo({ mobile: e.target.value })}
                placeholder="Enter your mobile number"
                className="transition-all duration-300 focus:shadow-md"
                required
              />
            </motion.div>
            
            <motion.div variants={item} className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-health-primary" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={patientInfo.email}
                onChange={e => updatePatientInfo({ email: e.target.value })}
                placeholder="Enter your email address"
                className="transition-all duration-300 focus:shadow-md"
                required
              />
            </motion.div>
            
            <motion.div variants={item} className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-health-primary" />
                Address
              </Label>
              <Textarea
                id="address"
                value={patientInfo.address}
                onChange={e => updatePatientInfo({ address: e.target.value })}
                placeholder="Enter your address"
                className="transition-all duration-300 focus:shadow-md"
                required
              />
            </motion.div>
            
            <motion.div variants={item} className="space-y-2">
              <Label htmlFor="issue" className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-health-primary" />
                Medical Issue
              </Label>
              <Select
                value={patientInfo.issue}
                onValueChange={value => updatePatientInfo({ issue: value })}
                required
              >
                <SelectTrigger className="transition-all duration-300 focus:shadow-md">
                  <SelectValue placeholder="Select your medical issue" />
                </SelectTrigger>
                <SelectContent>
                  {medicalIssues.map(issue => (
                    <SelectItem key={issue.id} value={issue.name}>
                      {issue.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div 
              variants={item}
              className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            >
              <p className="text-sm text-blue-800 dark:text-blue-200">
                All your information is secure and will only be used for appointment purposes. We ensure HIPAA compliance for all patient data.
              </p>
            </motion.div>
          </motion.div>
        </CardContent>
        
        <CardFooter className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Button 
              type="submit" 
              disabled={!isFormValid()}
              className={`transition-all duration-300 ${isFormValid() ? 'animate-pulse' : ''}`}
            >
              Next: Select Time Slot
            </Button>
          </motion.div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PatientInfoForm;
