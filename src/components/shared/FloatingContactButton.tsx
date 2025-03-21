
import React, { useState } from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed right-4 bottom-16 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-700 
                    bg-white border-2 border-teal-400 text-teal-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-500" 
          aria-label="Contact Us"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent side={isMobile ? "top" : "left"} sideOffset={isMobile ? 16 : 30} align={isMobile ? "end" : "center"} className="w-80 p-0 bg-white border-2 border-teal-200 shadow-lg rounded-xl">
        <div className="p-4 bg-white rounded-t-xl border-b border-teal-100">
          <h3 className="font-semibold text-lg text-teal-800 mb-3">
            Kontaktne informacije
          </h3>
          
          <div className="font-semibold text-teal-700 mb-3">
            Zavetišče za živali Maribor
          </div>

          <div className="space-y-3 text-sm">
            <a href="https://www.google.com/maps/place/Avtomobilska+ulica+25,+2000+Maribor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-2 rounded-full">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <span>Avtomobilska ulica 25, 2000 Maribor</span>
            </a>

            <a href="tel:024801660" className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>02 480 16 60</span>
                <span className="text-xs text-muted-foreground">Telefonska številka</span>
              </div>
            </a>

            <a href="tel:031788822" className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>031-788-822</span>
                <span className="text-xs text-muted-foreground">Številka za nujne primere</span>
              </div>
            </a>

            <a href="mailto:zavetisce.mb@snaga-mb.si" className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-2 rounded-full">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <span>zavetisce.mb@snaga-mb.si</span>
            </a>
            
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=100064510547105" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-2 rounded-full hover:bg-teal-200 transition-colors">
                <Facebook className="w-5 h-5 text-teal-600" />
              </a>
              <a href="https://www.instagram.com/zavetisce_za_zivali_maribor/" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-2 rounded-full hover:bg-teal-200 transition-colors">
                <Instagram className="w-5 h-5 text-teal-600" />
              </a>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>;
};

export default FloatingContactButton;
