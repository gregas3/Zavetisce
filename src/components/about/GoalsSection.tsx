
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { BookOpen, Users, Building, Syringe } from "lucide-react";

const GoalsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AnimatedWrapper animation="fade-in" delay={100}>
        <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-teal-100">
          <div className="mt-1">
            <div className="bg-teal-100 p-2 rounded-full">
              <Syringe className="w-5 h-5 text-teal-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Veterinarska oskrba</h3>
            <p className="text-gray-700">
              Zapuščenim živalim ponuditi strokovno in hitro veterinarsko oskrbo na najvišji ravni.
            </p>
          </div>
        </div>
      </AnimatedWrapper>
      
      <AnimatedWrapper animation="fade-in" delay={200}>
        <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-teal-100">
          <div className="mt-1">
            <div className="bg-teal-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-teal-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Posvojitve</h3>
            <p className="text-gray-700">
              Socializirati ali resocializirati zapuščene živali in jim poiskati nove lastnike.
            </p>
          </div>
        </div>
      </AnimatedWrapper>
      
      <AnimatedWrapper animation="fade-in" delay={300}>
        <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-teal-100">
          <div className="mt-1">
            <div className="bg-teal-100 p-2 rounded-full">
              <BookOpen className="h-5 w-5 text-teal-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Izobraževanje</h3>
            <p className="text-gray-700">
              Izobraževati lokalno skupnost s ciljem zmanjšanja števila brezdomnih živali.
            </p>
          </div>
        </div>
      </AnimatedWrapper>
      
      <AnimatedWrapper animation="fade-in" delay={400}>
        <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-teal-100">
          <div className="mt-1">
            <div className="bg-teal-100 p-2 rounded-full">
              <Building className="w-5 h-5 text-teal-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Prostor skupnosti</h3>
            <p className="text-gray-700">
              Lokacijo zavetišča preoblikovati v prostor, ki bo združil ljubitelje in lastnike živali.
            </p>
          </div>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default GoalsSection;
