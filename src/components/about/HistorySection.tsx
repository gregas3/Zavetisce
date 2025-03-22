
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Flag, Clock } from "lucide-react";

const TimelineItem = ({ 
  year, 
  content, 
  delay, 
  icon: Icon = Flag 
}: { 
  year: string; 
  content: string; 
  delay: number; 
  icon?: React.ElementType 
}) => (
  <div className="relative mb-10 last:mb-0">
    <div className="flex">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <AnimatedWrapper animation="bounce-slow" delay={delay}>
          <div className="bg-teal-400 rounded-full p-2 flex items-center justify-center z-10">
            <Icon className="h-4 w-4 text-white" />
          </div>
        </AnimatedWrapper>
        {/* Vertical line, except for the last item */}
        <div className="w-0.5 h-full bg-teal-300 -mt-2"></div>
      </div>
      
      {/* Content */}
      <div className="ml-4 pb-8">
        <h3 className="text-xl font-semibold mb-2 text-teal-800">{year}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  </div>
);

const HistorySection = () => {
  const timelineData = [
    {
      year: "1987",
      content: "Ustanovljeno je bilo prvo zavetišče za živali v Mariboru, eno prvih na območju nekdanje Jugoslavije, s strani Društva za zaščito živali Maribor.",
      icon: Flag
    },
    {
      year: "1991",
      content: "Zavetišče se je preselilo na novo lokacijo v Zrkovcih, na naslov Na terasi 2a, kjer je bil tudi sedež društva.",
      icon: Clock
    },
    {
      year: "1993",
      content: "Občina Maribor je Društvu za zaščito živali Maribor dodelila zemljišče v Zrkovcih za delovanje zavetišča.",
      icon: Flag
    },
    {
      year: "2009",
      content: "Na Teznu je bilo zgrajeno novo sodobno zavetišče, odprto 17. oktobra 2009, ki je omogočilo boljše pogoje za oskrbo zapuščenih živali.",
      icon: Clock
    },
    {
      year: "15. februar 2012",
      content: "Upravljanje Zavetišča Maribor je prevzelo podjetje Snaga d.o.o., ki nadaljuje z zgledno tradicijo oskrbe in ravnanja z zapuščenimi živalmi na območju Maribora in okolice.",
      icon: Flag
    },
    {
      year: "Danes",
      content: "Zavetišče deluje na lokaciji Avtomobilska ulica 25 v Mariboru, kjer zagotavlja strokovno veterinarsko oskrbo, socializacijo živali in izobraževanje lokalne skupnosti.",
      icon: Clock
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-4">
      <AnimatedWrapper animation="fade-in" delay={100}>
        <div className="relative pl-0">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              content={item.content}
              delay={100 + (index * 100)}
              icon={item.icon}
            />
          ))}
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default HistorySection;
