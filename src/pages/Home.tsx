
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, Clock, UserRound, Award, Phone, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-health-light to-white dark:from-health-dark dark:to-background py-16 md:py-24">
        <div className="health-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-health-dark dark:text-white">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
                Schedule your appointment with Dr. Sarah Johnson, a board-certified specialist with over 15 years of experience. 
                No login required - book your visit in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-health-primary hover:bg-health-primary/90">
                  <Link to="/booking">Book an Appointment</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <img 
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=2574&auto=format&fit=crop" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="health-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-health-dark dark:text-gray-200">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <CalendarDays className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Easy Scheduling</h3>
                  <p className="text-gray-600 dark:text-gray-300">Book appointments online without creating an account</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <Clock className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Minimal Wait Time</h3>
                  <p className="text-gray-600 dark:text-gray-300">Respect for your schedule with punctual appointments</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <UserRound className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Personalized Care</h3>
                  <p className="text-gray-600 dark:text-gray-300">Treatment plans tailored to your specific needs</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <Award className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Expert Physician</h3>
                  <p className="text-gray-600 dark:text-gray-300">Board-certified with years of specialized experience</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="health-container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. Sarah Johnson" 
                className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-white dark:border-gray-700 shadow-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold text-health-dark dark:text-white">Meet Dr. Sarah Johnson</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Dr. Sarah Johnson is a board-certified physician specializing in family medicine. With over 15 years of experience, she provides comprehensive care for patients of all ages.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Dr. Johnson completed her medical degree at Johns Hopkins University School of Medicine and her residency at Mayo Clinic. She is committed to providing patient-centered care with a focus on preventive health and chronic disease management.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-health-primary" />
                  <span className="dark:text-gray-300">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-health-primary" />
                  <span className="dark:text-gray-300">123 Medical Center Drive, Healthville</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-health-primary text-white">
        <div className="health-container text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Schedule Your Visit?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Book your appointment today and take the first step towards better health.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-4">
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
