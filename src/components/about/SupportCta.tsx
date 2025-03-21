
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupportCta = () => {
  return (
    <section className="bg-gradient-to-b from-teal-600 to-teal-700 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedWrapper animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Podprite naše poslanstvo</h2>
            <p className="text-lg text-white/90 mb-8">
              Pomagajte nam zagotoviti boljše življenje zapuščenim živalim. Vsak prispevek šteje, ne glede na to, kako majhen je.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="primary" size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                <Link to="/donacije">
                  Donirajte
                </Link>
              </Button>
              <Button asChild variant="lightTeal" size="lg">
                <Link to="/prostovoljstvo">
                  Postanite prostovoljec
                </Link>
              </Button>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default SupportCta;
