
import React from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./Home";
import { ModeToggle } from "@/components/mode-toggle";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="health-theme-preference">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <Home />
    </ThemeProvider>
  );
};

export default Index;
