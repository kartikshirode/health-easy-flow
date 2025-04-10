
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Clock, MapPin, Phone, Mail, Award, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-b from-health-light to-white">
        <div className="health-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-4">
              About Dr. Sarah Johnson
            </h1>
            <p className="text-lg text-gray-700">
              Dedicated to providing personalized, comprehensive healthcare for over 15 years
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. Sarah Johnson in medical office" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-lg">
                Dr. Sarah Johnson is a board-certified physician specializing in family medicine. With a patient-centered approach, she is committed to providing comprehensive care that addresses both immediate health concerns and long-term wellness goals.
              </p>
              <p>
                After graduating with honors from Johns Hopkins University School of Medicine, Dr. Johnson completed her residency at Mayo Clinic, where she developed expertise in preventive health, chronic disease management, and acute care.
              </p>
              <p>
                Her philosophy centers on building lasting relationships with patients and taking the time to understand their unique health needs, preferences, and concerns.
              </p>
              <Button asChild size="lg" className="bg-health-primary hover:bg-health-primary/90">
                <Link to="/booking">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="health-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-health-dark">
            Education & Credentials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="p-3 bg-health-light rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-health-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <ul className="space-y-4">
                      <li>
                        <div className="font-medium">Johns Hopkins University School of Medicine</div>
                        <div className="text-gray-600">Doctor of Medicine, 2005-2009</div>
                      </li>
                      <li>
                        <div className="font-medium">Stanford University</div>
                        <div className="text-gray-600">B.S. in Biology, 2001-2005</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="p-3 bg-health-light rounded-full mr-4">
                    <Award className="h-6 w-6 text-health-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                    <ul className="space-y-4">
                      <li>
                        <div className="font-medium">Board Certification in Family Medicine</div>
                        <div className="text-gray-600">American Board of Family Medicine</div>
                      </li>
                      <li>
                        <div className="font-medium">Advanced Cardiac Life Support (ACLS)</div>
                        <div className="text-gray-600">American Heart Association</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="health-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-health-dark">
            Specializations
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-t-4 border-t-health-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Preventive Care</h3>
                <p className="text-gray-600">
                  Regular health screenings, vaccinations, and lifestyle counseling to prevent illness before it starts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-health-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Chronic Disease Management</h3>
                <p className="text-gray-600">
                  Comprehensive care for conditions like diabetes, hypertension, and asthma with personalized treatment plans.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-health-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Women's Health</h3>
                <p className="text-gray-600">
                  Specialized care addressing the unique health needs of women at every stage of life.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-health-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Geriatric Care</h3>
                <p className="text-gray-600">
                  Dedicated services focused on the complex health needs of older adults.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-health-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Mental Health</h3>
                <p className="text-gray-600">
                  Supportive care for anxiety, depression, and stress management as part of holistic treatment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-health-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Acute Care</h3>
                <p className="text-gray-600">
                  Prompt attention and treatment for sudden illnesses, injuries, and infections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="health-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-health-dark">
              Our Practice
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Located in the heart of Healthville, our modern facility is designed to offer a comfortable and welcoming environment for all patients.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Medical office waiting room" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-health-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-health-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">123 Medical Center Drive</p>
                    <p className="text-gray-600">Healthville, CA 90210</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-health-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Contact</h3>
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                    <p className="text-gray-600">Fax: (123) 456-7891</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-health-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">appointments@healthclinic.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-health-primary text-white">
        <div className="health-container text-center space-y-6">
          <Heart className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Ready to prioritize your health?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Book your appointment with Dr. Sarah Johnson today and take the first step towards comprehensive, personalized healthcare.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-4">
            <Link to="/booking">Book an Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
