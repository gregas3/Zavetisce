
import React from "react";
import { Phone } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            size="icon" 
            variant="darkTeal" 
            className="h-14 w-14 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            aria-label="Contact Shelter"
          >
            <Phone className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 p-0 bg-white border border-teal-100 shadow-xl rounded-xl overflow-hidden"
          sideOffset={16}
          align="end"
        >
          <div className="bg-teal-500 text-white p-4">
            <h3 className="font-medium text-lg">Zavetišče za živali Maribor</h3>
          </div>
          
          <div className="p-4 space-y-3 text-teal-900">
            <a 
              href="https://maps.google.com/?q=Avtomobilska+ulica+25,+Maribor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start hover:text-teal-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Avtomobilska ulica 25, Maribor</span>
            </a>
            
            <a 
              href="tel:+38624801660" 
              className="flex items-center hover:text-teal-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>02 480 16 60</span>
            </a>
            
            <a 
              href="tel:+38631788822" 
              className="flex items-center hover:text-teal-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-medium">Nujni klic: 031-788-822</span>
            </a>
            
            <a 
              href="mailto:zavetisce.mb@snaga-mb.si" 
              className="flex items-center hover:text-teal-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>zavetisce.mb@snaga-mb.si</span>
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingContactButton;
