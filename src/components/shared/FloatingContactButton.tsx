
import React, { useState } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="primary"
          size="icon"
          className="fixed right-4 bottom-16 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-700"
          aria-label="Contact Us"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent 
        side="left" 
        sideOffset={16} 
        className="w-80 p-0 bg-[#f5fcfb] border-teal-200 shadow-md rounded-xl"
      >
        <div className="p-4">
          <h3 className="font-semibold text-lg text-teal-800 mb-3">
            Kontaktne informacije
          </h3>
          
          <div className="font-semibold text-teal-700 mb-3">
            Zavetišče za živali Maribor
          </div>

          <div className="space-y-3 text-sm">
            <a 
              href="https://www.google.com/maps/place/Avtomobilska+ulica+25,+Maribor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors"
            >
              <div className="bg-teal-100 p-2 rounded-full">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <span>Avtomobilska ulica 25, Maribor</span>
            </a>

            <a 
              href="tel:024801660" 
              className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors"
            >
              <div className="bg-teal-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>02 480 16 60</span>
                <span className="text-xs text-muted-foreground">Telefonska številka</span>
              </div>
            </a>

            <a 
              href="tel:031788822" 
              className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors"
            >
              <div className="bg-teal-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>031-788-822</span>
                <span className="text-xs text-muted-foreground">Številka za nujne primere</span>
              </div>
            </a>

            <a 
              href="mailto:zavetisce.mb@snaga-mb.si" 
              className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors"
            >
              <div className="bg-teal-100 p-2 rounded-full">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <span>zavetisce.mb@snaga-mb.si</span>
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FloatingContactButton;
