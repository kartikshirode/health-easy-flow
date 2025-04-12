
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900 dark:border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-health-primary text-xl font-bold dark:text-white">MediFlow Connect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'text-health-primary dark:text-health-primary' 
                  : 'text-gray-700 hover:text-health-primary dark:text-gray-300 dark:hover:text-health-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') 
                  ? 'text-health-primary dark:text-health-primary' 
                  : 'text-gray-700 hover:text-health-primary dark:text-gray-300 dark:hover:text-health-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/admin" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/admin') 
                  ? 'text-health-primary dark:text-health-primary' 
                  : 'text-gray-700 hover:text-health-primary dark:text-gray-300 dark:hover:text-health-primary'
              }`}
            >
              Admin
            </Link>
            <div className="flex items-center space-x-2">
              <Button asChild className="ml-4">
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <ModeToggle />
            </div>
          </div>
          
          <div className="flex md:hidden items-center">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-700 hover:text-health-primary focus:outline-none dark:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'bg-health-light text-health-primary dark:bg-gray-800 dark:text-health-primary' 
                  : 'text-gray-700 hover:bg-health-light hover:text-health-primary dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? 'bg-health-light text-health-primary dark:bg-gray-800 dark:text-health-primary' 
                  : 'text-gray-700 hover:bg-health-light hover:text-health-primary dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/admin"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/admin') 
                  ? 'bg-health-light text-health-primary dark:bg-gray-800 dark:text-health-primary' 
                  : 'text-gray-700 hover:bg-health-light hover:text-health-primary dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              Admin
            </Link>
            <div className="pt-2">
              <Link
                to="/booking"
                className="block px-3 py-2 rounded-md text-base font-medium bg-health-primary text-white hover:bg-health-primary/90"
                onClick={toggleMenu}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
