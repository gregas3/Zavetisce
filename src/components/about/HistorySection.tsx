
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Flag } from "lucide-react";

const HistorySection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <AnimatedWrapper animation="fade-in" delay={100}>
        <div className="relative pl-8 border-l-2 border-teal-300 mb-12">
          <AnimatedWrapper animation="bounce-slow" delay={100}>
            <div className="absolute -left-3 top-0">
              <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                <Flag className="h-3 w-3 text-white" />
              </div>
            </div>
          </AnimatedWrapper>
          <h3 className="text-xl font-semibold mb-2 text-teal-800">1987</h3>
          <p className="text-gray-700">
            Začetki zavetišča za živali v Mariboru segajo v leto 1987.
          </p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-teal-300">
          <AnimatedWrapper animation="bounce-slow" delay={200}>
            <div className="absolute -left-3 top-0">
              <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                <Flag className="h-3 w-3 text-white" />
              </div>
            </div>
          </AnimatedWrapper>
          <h3 className="text-xl font-semibold mb-2 text-teal-800">15. februar 2012</h3>
          <p className="text-gray-700">
            Zavetišče Maribor je prevzelo podjetje Snaga d.o.o., ki nadaljuje z zgledno tradicijo ravnanja z zapuščenimi živalmi na območju Maribora in okolice.
          </p>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default HistorySection;
