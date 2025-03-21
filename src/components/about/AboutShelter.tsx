
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Card, CardContent } from "@/components/ui/card";

const AboutShelter = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <AnimatedWrapper animation="fade-in" delay={100}>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg">
              Zavetišče za zapuščene živali je prehoden dom za vse izgubljene, zavržene in mučene živali. V zavetišču živali, med katerimi je največ psov in muc, žival sprejmemo, jo zdravstveno oskrbimo, steriliziramo ali kastriramo in ji skušamo čim prej najti nove lastnike, ki ji bodo ponudili topli in ljubeč dom. Med začasnim bivanjem živali v zavetišču posebej psom nudimo dnevno gibanje s sprehajanjem.
            </p>
            <p className="text-lg mt-4">
              Po zakonu mora imeti vsaka občina v Sloveniji urejeno oskrbo izgubljenih in zavrženih živali. Tako lahko zgradijo svojega ali pa z enim od slovenskih zavetišč podpišejo pogodbo o sodelovanju.
            </p>
          </div>
        </AnimatedWrapper>
      </div>
      
      <div className="lg:col-span-1">
        <AnimatedWrapper animation="fade-in" delay={200}>
          <Card className="h-full overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img alt="Slika zavetišča za živali" className="w-full h-full object-cover" src="/lovable-uploads/69eaa918-00b6-41e4-9410-12c9ec80b03a.jpg" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Uradne ure</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Ponedeljek - Petek:</span>
                  <span className="font-medium">8:00 - 16:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sobota:</span>
                  <span className="font-medium">8:00 - 13:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Nedelja in prazniki:</span>
                  <span className="font-medium">8:00 - 12:00</span>
                </p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Zavetišče je v času uradnih ur na voljo obiskovalcem.
              </p>
            </CardContent>
          </Card>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default AboutShelter;
