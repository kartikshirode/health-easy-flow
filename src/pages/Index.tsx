
import React from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./Home";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="health-theme-preference">
      <Home />
    </ThemeProvider>
  );
};

export default Index;

