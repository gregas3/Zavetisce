
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FaqItem = {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
};

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, className = "" }) => {
  return (
    <div className={`w-full rounded-xl bg-teal-50/50 backdrop-blur-sm p-4 border border-teal-100/40 shadow-sm ${className}`}>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-teal-100/70 last:border-b-0">
            <AccordionTrigger className="text-teal-800 hover:text-teal-600 py-4 flex items-center">
              <div className="flex items-center gap-3">
                {item.icon && <span className="text-teal-500 flex-shrink-0">{item.icon}</span>}
                <span className="text-left font-medium">{item.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-slate-700 pl-8">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
