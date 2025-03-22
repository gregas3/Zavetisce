
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Flag, Clock } from "lucide-react";

const HistorySection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedWrapper animation="fade-in" delay={100}>
        {/* 1987 */}
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
            Ustanovljeno je bilo prvo zavetišče za živali v Mariboru, eno prvih na območju nekdanje Jugoslavije, s strani Društva za zaščito živali Maribor.
          </p>
        </div>
        
        {/* 1991 */}
        <div className="relative pl-8 border-l-2 border-teal-300 mb-12">
          <AnimatedWrapper animation="bounce-slow" delay={200}>
            <div className="absolute -left-3 top-0">
              <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                <Clock className="h-3 w-3 text-white" />
              </div>
            </div>
          </AnimatedWrapper>
          <h3 className="text-xl font-semibold mb-2 text-teal-800">1991</h3>
          <p className="text-gray-700">
            Zavetišče se je preselilo na novo lokacijo v Zrkovcih, na naslov Na terasi 2a, kjer je bil tudi sedež društva.
          </p>
        </div>
        
        {/* 1993 */}
        <div className="relative pl-8 border-l-2 border-teal-300 mb-12">
          <AnimatedWrapper animation="bounce-slow" delay={300}>
            <div className="absolute -left-3 top-0">
              <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                <Flag className="h-3 w-3 text-white" />
              </div>
            </div>
          </AnimatedWrapper>
          <h3 className="text-xl font-semibold mb-2 text-teal-800">1993</h3>
          <p className="text-gray-700">
            Občina Maribor je Društvu za zaščito živali Maribor dodelila zemljišče v Zrkovcih za delovanje zavetišča.
          </p>
        </div>
        
        {/* 2009 */}
        <div className="relative pl-8 border-l-2 border-teal-300 mb-12">
          <AnimatedWrapper animation="bounce-slow" delay={400}>
            <div className="absolute -left-3 top-0">
              <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                <Clock className="h-3 w-3 text-white" />
              </div>
            </div>
          </AnimatedWrapper>
          <h3 className="text-xl font-semibold mb-2 text-teal-800">2009</h3>
          <p className="text-gray-700">
            Na Teznu je bilo zgrajeno novo sodobno zavetišče, odprto 17. oktobra 2009, ki je omogočilo boljše pogoje za oskrbo zapuščenih živali.
          </p>
        </div>
        
        {/* 15. februar 2012 */}
        <div className="relative pl-8 border-l-2 border-teal-300 mb-12">
          <AnimatedWrapper animation="bounce-slow" delay={500}>
            <div className="absolute -left-3 top-0">
              <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                <Flag className="h-3 w-3 text-white" />
              </div>
            </div>
          </AnimatedWrapper>
          <h3 className="text-xl font-semibold mb-2 text-teal-800">15. februar 2012</h3>
          <p className="text-gray-700">
            Upravljanje Zavetišča Maribor je prevzelo podjetje Snaga d.o.o., ki nadaljuje z zgledno tradicijo oskrbe in ravnanja z zapuščenimi živalmi na območju Maribora in okolice.
          </p>
        </div>
        
        {/* Danes */}
        <div className="relative pl-8 border-l-2 border-teal-300">
          <AnimatedWrapper animation="bounce-slow" delay={600}>
            <div className="absolute -left-3 top-0">
              <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                <Clock className="h-3 w-3 text-white" />
              </div>
            </div>
          </AnimatedWrapper>
          <h3 className="text-xl font-semibold mb-2 text-teal-800">Danes</h3>
          <p className="text-gray-700">
            Zavetišče deluje na lokaciji Avtomobilska ulica 25 v Mariboru, kjer zagotavlja strokovno veterinarsko oskrbo, socializacijo živali in izobraževanje lokalne skupnosti.
          </p>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default HistorySection;
