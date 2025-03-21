
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <AnimatedWrapper animation="fade-in" delay={100}>
        <Card className="h-full">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800">Naše poslanstvo</h3>
            </div>
            <p className="text-lg">
              Zapuščenim živalim z vašo pomočjo zagotoviti topel in ljubeč prehodni dom ter jim čim prej poiskati nove lastnike.
            </p>
          </CardContent>
        </Card>
      </AnimatedWrapper>
      
      <AnimatedWrapper animation="fade-in" delay={200}>
        <Card className="h-full">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800">Naša vizija</h3>
            </div>
            <p className="text-lg">
              Idealno zavetišče – torej prazno zavetišče. Prizadevamo si za svet, kjer nobena žival ne bi bila zapuščena ali zavržena.
            </p>
          </CardContent>
        </Card>
      </AnimatedWrapper>
    </div>
  );
};

export default MissionVision;
