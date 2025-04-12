
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, Clock, UserRound, Award, Phone, MapPin, GraduationCap, FileText, HeartPulse, Stethoscope } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-health-light to-white dark:from-health-dark dark:to-background py-16 md:py-24">
        <div className="health-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-health-dark dark:text-white">
                Advanced Care from a Leading Specialist
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
                Schedule your consultation with Dr. Parikshit Shirode, PhD, a board-certified specialist with extensive research background and over 15 years of clinical experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-health-primary hover:bg-health-primary/90">
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/about">View Credentials</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional doctor in clinic" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="health-container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-health-light dark:bg-gray-800 px-6 py-3 rounded-full">
              <GraduationCap className="h-5 w-5 text-health-primary mr-2" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">PhD in Medical Sciences</span>
            </div>
            <div className="flex items-center bg-health-light dark:bg-gray-800 px-6 py-3 rounded-full">
              <FileText className="h-5 w-5 text-health-primary mr-2" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">120+ Published Research Papers</span>
            </div>
            <div className="flex items-center bg-health-light dark:bg-gray-800 px-6 py-3 rounded-full">
              <HeartPulse className="h-5 w-5 text-health-primary mr-2" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">15+ Years of Practice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-background">
        <div className="health-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-health-dark dark:text-gray-200">Expert Medical Care</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <Stethoscope className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Advanced Diagnostics</h3>
                  <p className="text-gray-600 dark:text-gray-300">Using state-of-the-art technology for accurate diagnosis</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <Clock className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Punctual Consultations</h3>
                  <p className="text-gray-600 dark:text-gray-300">Respecting your schedule with on-time appointments</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <UserRound className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Research-Backed Care</h3>
                  <p className="text-gray-600 dark:text-gray-300">Treatment protocols based on latest medical research</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <Award className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Academic Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300">Bringing academic rigor to clinical practice</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="health-container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2978&auto=format&fit=crop" 
                alt="Dr. Parikshit Shirode" 
                className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-white dark:border-gray-700 shadow-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold text-health-dark dark:text-white">Meet Dr. Parikshit Shirode, PhD</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Dr. Parikshit Shirode is a board-certified physician and researcher specializing in advanced diagnostics and treatment. With a PhD in Medical Sciences from Johns Hopkins University, he brings both clinical expertise and research acumen to patient care.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                After completing his medical training at Mayo Clinic, Dr. Shirode pursued advanced research in his field, publishing over 120 peer-reviewed papers and speaking at international conferences. He is committed to evidence-based, patient-centered care with a focus on preventive health and chronic disease management.
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

      {/* Research Publications Section */}
      <section className="py-16 bg-gray-50 dark:bg-background">
        <div className="health-container text-center">
          <h2 className="text-3xl font-bold mb-8 text-health-dark dark:text-white">Recent Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-left shadow-md dark:bg-gray-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Advances in Diagnostic Imaging Techniques</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Journal of Medical Imaging, 2024</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">A comprehensive review of emerging technologies in medical imaging with clinical applications.</p>
              </CardContent>
            </Card>
            <Card className="text-left shadow-md dark:bg-gray-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Novel Approaches to Chronic Disease Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">New England Journal of Medicine, 2023</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Research findings on integrative approaches to managing complex chronic conditions.</p>
              </CardContent>
            </Card>
            <Card className="text-left shadow-md dark:bg-gray-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Preventive Medicine in the Digital Age</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Digital Health Quarterly, 2023</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Exploring the intersection of technology and preventive healthcare practices.</p>
              </CardContent>
            </Card>
          </div>
          <Button variant="outline" className="mt-8">
            View All Publications
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-health-primary text-white">
        <div className="health-container text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Consult with Dr. Shirode?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Schedule your consultation today and benefit from evidence-based, research-backed medical care.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-4">
            <Link to="/booking">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
