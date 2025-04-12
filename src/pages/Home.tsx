import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, Clock, UserRound, Award, Phone, MapPin, GraduationCap, FileText, HeartPulse, Stethoscope, BookOpen, Globe, Users, Star, Book } from 'lucide-react';
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-health-light to-white dark:from-health-dark dark:to-background py-16 md:py-24">
        <div className="health-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6 animate-fade-in">
              <div className="flex items-center space-x-2 mb-2">
                <div className="badge">PhD, MD</div>
                <div className="badge">Board Certified</div>
                <div className="badge">15+ Years</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-health-dark dark:text-white leading-tight">
                Advanced Medical Care by a Leading Specialist
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
                Schedule your consultation with Dr. Parikshit Shirode, PhD, a board-certified specialist with extensive research experience and over 15 years of clinical practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary bg-health-primary hover:bg-health-primary/90">
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl">
                  <Link to="/about">View Credentials</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2978&auto=format&fit=crop" alt="Dr. Parikshit Shirode in professional setting" className="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
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
            <div className="flex items-center bg-health-light dark:bg-gray-800 px-6 py-3 rounded-full">
              <Users className="h-5 w-5 text-health-primary mr-2" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">10,000+ Patients Treated</span>
            </div>
          </div>
          
          {/* Available Times */}
          
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-background">
        <div className="health-container">
          <h2 className="text-3xl font-bold text-center mb-4 text-health-dark dark:text-gray-200">Expert Medical Care</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Dr. Parikshit Shirode brings together cutting-edge research, clinical experience, and personalized care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 card-hover rounded-2xl overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <Stethoscope className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Advanced Diagnostics</h3>
                  <p className="text-gray-600 dark:text-gray-300">Utilizing state-of-the-art technology for precise diagnoses based on the latest research findings.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 card-hover rounded-2xl overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <BookOpen className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Research-Backed Care</h3>
                  <p className="text-gray-600 dark:text-gray-300">Treatment protocols derived from peer-reviewed studies and the latest medical research advancements.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 card-hover rounded-2xl overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <Globe className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Global Perspective</h3>
                  <p className="text-gray-600 dark:text-gray-300">International training and collaboration with leading medical institutions worldwide.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 card-hover rounded-2xl overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-health-light dark:bg-health-primary/20 rounded-full">
                    <Award className="h-8 w-8 text-health-primary" />
                  </div>
                  <h3 className="font-semibold text-xl dark:text-white">Academic Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300">Bringing rigorous academic standards to everyday clinical practice with evidence-based approaches.</p>
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
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" alt="Dr. Parikshit Shirode" className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-white dark:border-gray-700 shadow-lg" />
              <div className="flex justify-center mt-4 space-x-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-400">4.9 out of 5 from 200+ patients</p>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold text-health-dark dark:text-white">Meet Dr. Parikshit Shirode, PhD</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Dr. Parikshit Shirode is a distinguished board-certified physician and researcher specializing in advanced diagnostics and treatment. With a PhD in Medical Sciences from Johns Hopkins University, he merges clinical expertise with cutting-edge research methodologies.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Following his medical training at Mayo Clinic, Dr. Shirode pursued advanced research, publishing over 120 peer-reviewed papers and frequently speaking at international medical conferences. His approach emphasizes evidence-based, patient-centered care with particular focus on preventive health strategies and chronic disease management.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <Phone className="mr-3 h-5 w-5 text-health-primary" />
                  <span className="dark:text-gray-300">(123) 456-7890</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <MapPin className="mr-3 h-5 w-5 text-health-primary" />
                  <span className="dark:text-gray-300">123 Medical Center Drive</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <Clock className="mr-3 h-5 w-5 text-health-primary" />
                  <span className="dark:text-gray-300">Available Mon-Sat</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <Book className="mr-3 h-5 w-5 text-health-primary" />
                  <span className="dark:text-gray-300">120+ Publications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-background">
        <div className="health-container">
          <h2 className="text-3xl font-bold text-center mb-4 text-health-dark dark:text-white">Patient Testimonials</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Hear what our patients have to say about their experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{
            name: "Robert Chen",
            role: "Patient for 3 years",
            comment: "Dr. Shirode's expertise in integrative medicine has completely transformed my approach to managing my chronic condition."
          }, {
            name: "Anita Patel",
            role: "Research Collaborator",
            comment: "Working with Dr. Shirode on multiple clinical studies has been enlightening. His methodical approach and insights are invaluable."
          }, {
            name: "Michael Johnson",
            role: "Patient",
            comment: "The personalized care plan Dr. Shirode developed for me was comprehensive and effective. I'm grateful for his thorough approach."
          }].map((testimonial, idx) => <Card key={idx} className="text-left shadow-md dark:bg-gray-800 rounded-2xl overflow-hidden border-none">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="italic text-gray-700 dark:text-gray-300 mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-health-primary/20 flex items-center justify-center text-health-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="health-container text-center">
          <h2 className="text-3xl font-bold mb-4 text-health-dark dark:text-white">Recent Publications</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Dr. Shirode's contributions to medical research
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-left shadow-md dark:bg-gray-800 rounded-2xl overflow-hidden border-none card-hover">
              <CardContent className="pt-6">
                <div className="text-xs text-health-primary font-semibold mb-2">Journal of Medical Imaging, 2024</div>
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Advances in Diagnostic Imaging Techniques</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">A comprehensive review of emerging technologies in medical imaging with clinical applications.</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>Full text available</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-left shadow-md dark:bg-gray-800 rounded-2xl overflow-hidden border-none card-hover">
              <CardContent className="pt-6">
                <div className="text-xs text-health-primary font-semibold mb-2">New England Journal of Medicine, 2023</div>
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Novel Approaches to Chronic Disease Management</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Research findings on integrative approaches to managing complex chronic conditions.</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>Full text available</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-left shadow-md dark:bg-gray-800 rounded-2xl overflow-hidden border-none card-hover">
              <CardContent className="pt-6">
                <div className="text-xs text-health-primary font-semibold mb-2">Digital Health Quarterly, 2023</div>
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Preventive Medicine in the Digital Age</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Exploring the intersection of technology and preventive healthcare practices.</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>Full text available</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Button variant="outline" className="mt-8 rounded-2xl">
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button asChild size="lg" variant="secondary" className="rounded-2xl bg-white text-health-primary hover:bg-gray-100">
              <Link to="/booking">Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;