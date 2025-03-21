
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReportsSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <AnimatedWrapper animation="fade-in" delay={100}>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-teal-100 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-teal-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <span className="text-lg font-medium">Letno poročilo 2023</span>
            </div>
            <Button variant="lightTeal" size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Prenesi
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-teal-100 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-teal-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <span className="text-lg font-medium">Letno poročilo 2022</span>
            </div>
            <Button variant="lightTeal" size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Prenesi
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-teal-100 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-teal-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <span className="text-lg font-medium">Letno poročilo 2021</span>
            </div>
            <Button variant="lightTeal" size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Prenesi
            </Button>
          </div>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default ReportsSection;
