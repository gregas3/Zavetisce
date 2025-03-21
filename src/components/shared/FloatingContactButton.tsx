
import React, { useState } from 'react';
import { Phone, MapPin, Mail, X } from 'lucide-react';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger, 
} from "@/components/ui/popover";
import { Button } from '@/components/ui/button';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            size="icon"
            variant="primary" 
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce-slow"
          >
            <Phone className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 p-0 border-teal-200 shadow-lg rounded-xl" 
          sideOffset={16}
          align="end"
        >
          <div className="glass p-5 rounded-xl">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-display font-semibold text-teal-800 text-lg">
                Zavetišče za živali Maribor
              </h3>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-teal-600 hover:text-teal-800 hover:bg-teal-50"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3 text-sm">
              <a 
                href="https://maps.google.com/?q=Avtomobilska+ulica+25,+Maribor" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 p-2 -ml-2 rounded-md hover:bg-teal-50 transition-colors"
              >
                <MapPin className="h-5 w-5 text-teal-600 mt-0.5" />
                <span className="text-gray-700">
                  Avtomobilska ulica 25, Maribor
                </span>
              </a>
              
              <a 
                href="tel:024801660" 
                className="flex items-center gap-3 p-2 -ml-2 rounded-md hover:bg-teal-50 transition-colors"
              >
                <Phone className="h-5 w-5 text-teal-600" />
                <div className="flex flex-col">
                  <span className="text-gray-700">02 480 16 60</span>
                  <span className="text-gray-500 text-xs">Splošna številka</span>
                </div>
              </a>
              
              <a 
                href="tel:031788822" 
                className="flex items-center gap-3 p-2 -ml-2 rounded-md hover:bg-teal-50 transition-colors"
              >
                <Phone className="h-5 w-5 text-teal-600" />
                <div className="flex flex-col">
                  <span className="text-gray-700">031-788-822</span>
                  <span className="text-gray-500 text-xs">Urgentna številka</span>
                </div>
              </a>
              
              <a 
                href="mailto:zavetisce.mb@snaga-mb.si" 
                className="flex items-center gap-3 p-2 -ml-2 rounded-md hover:bg-teal-50 transition-colors"
              >
                <Mail className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">zavetisce.mb@snaga-mb.si</span>
              </a>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingContactButton;
