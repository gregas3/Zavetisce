
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Flag, Clock, MapPin, Building, Truck, Heart } from "lucide-react";

// Create a better timeline item component with proper alignment
const TimelineItem = ({ 
  year, 
  content, 
  delay, 
  icon: Icon = Flag,
  isLast = false
}: { 
  year: string; 
  content: string; 
  delay: number; 
  icon?: React.ElementType;
  isLast?: boolean;
}) => (
  <div className="relative mb-10 last:mb-0">
    <div className="flex">
      {/* Timeline line with icon */}
      <div className="flex flex-col items-center mr-5">
        <AnimatedWrapper animation="bounce-slow" delay={delay}>
          <div className="bg-teal-500 rounded-full p-2 flex items-center justify-center z-10">
            <Icon className="h-5 w-5 text-white" />
          </div>
        </AnimatedWrapper>
        {/* Vertical line, except for the last item */}
        {!isLast && (
          <div className="w-0.5 h-full bg-teal-200 -mt-2"></div>
        )}
      </div>
      
      {/* Content - now properly aligned and sized */}
      <div className="flex-1 pb-6">
        <h3 className="text-xl font-semibold mb-1.5 text-teal-800">{year}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{content}</p>
      </div>
    </div>
  </div>
);

const HistorySection = () => {
  // Updated timeline data with more variety in icons
  const timelineData = [
    {
      year: "1987",
      content: "Ustanovljeno je bilo prvo zavetišče za živali v Mariboru, eno prvih na območju nekdanje Jugoslavije, s strani Društva za zaščito živali Maribor.",
      icon: Flag
    },
    {
      year: "1991",
      content: "Zavetišče se je preselilo na novo lokacijo v Zrkovcih, na naslov Na terasi 2a, kjer je bil tudi sedež društva.",
      icon: MapPin
    },
    {
      year: "1993",
      content: "Občina Maribor je Društvu za zaščito živali Maribor dodelila zemljišče v Zrkovcih za delovanje zavetišča.",
      icon: Building
    },
    {
      year: "2009",
      content: "Na Teznu je bilo zgrajeno novo sodobno zavetišče, odprto 17. oktobra 2009, ki je omogočilo boljše pogoje za oskrbo zapuščenih živali.",
      icon: Heart
    },
    {
      year: "15. februar 2012",
      content: "Upravljanje Zavetišča Maribor je prevzelo podjetje Snaga d.o.o., ki nadaljuje z zgledno tradicijo oskrbe in ravnanja z zapuščenimi živalmi na območju Maribora in okolice.",
      icon: Truck
    },
    {
      year: "Danes",
      content: "Zavetišče deluje na lokaciji Avtomobilska ulica 25 v Mariboru, kjer zagotavlja strokovno veterinarsko oskrbo, socializacijo živali in izobraževanje lokalne skupnosti.",
      icon: Clock
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-6">
      <AnimatedWrapper animation="fade-in" delay={100}>
        <div className="relative pl-0">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              content={item.content}
              delay={100 + (index * 100)}
              icon={item.icon}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default HistorySection;
