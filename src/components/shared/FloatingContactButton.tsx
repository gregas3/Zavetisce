
import React, { useState } from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigateToLocation = () => {
    // For mobile devices, open in maps app with navigation
    if (isMobile) {
      window.open('https://www.google.com/maps/dir/?api=1&destination=Avtomobilska+ulica+25,+2000+Maribor,+Slovenia&travelmode=driving', '_blank');
    } else {
      // For desktop, just open Google Maps with the location
      window.open('https://www.google.com/maps/place/Avtomobilska+ulica+25,+2000+Maribor,+Slovenia', '_blank');
    }
  };

  return <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="primary" size="icon" className="fixed right-4 bottom-20 md:bottom-16 z-50 rounded-full w-12 h-12 md:w-14 md:h-14 shadow-lg hover:shadow-xl transition-all duration-700 animate-pulse" aria-label="Contact Us">
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent side={isMobile ? "top" : "left"} sideOffset={isMobile ? 16 : 30} align={isMobile ? "end" : "center"} className="w-[280px] md:w-80 p-0 bg-white border-2 border-teal-200 shadow-lg rounded-xl">
        <div className="p-3 md:p-4 bg-white rounded-t-xl border-b border-teal-100">
          <h3 className="font-semibold text-base md:text-lg text-teal-800 mb-2 md:mb-3">
            Kontaktne informacije
          </h3>
          
          <div className="font-semibold text-sm md:text-base text-teal-700 mb-2 md:mb-3">
            Zavetišče za živali Maribor
          </div>

          <div className="space-y-2 md:space-y-3 text-sm">
            <button onClick={navigateToLocation} className="flex items-start w-full text-left gap-2 md:gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-1.5 md:p-2 rounded-full mt-0.5">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>Avtomobilska ulica 25, 2000 Maribor, Slovenia</span>
                <span className="text-xs text-teal-600 flex items-center gap-1 mt-1">
                  <Navigation size={12} /> Pridobi navigacijo
                </span>
              </div>
            </button>

            <a href="tel:024801660" className="flex items-start gap-2 md:gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-1.5 md:p-2 rounded-full mt-0.5">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>02 480 16 60</span>
                <span className="text-xs text-muted-foreground">Telefonska številka</span>
              </div>
            </a>

            <a href="tel:031788822" className="flex items-start gap-2 md:gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-1.5 md:p-2 rounded-full mt-0.5">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>031-788-822</span>
                <span className="text-xs text-muted-foreground">Številka za nujne primere</span>
              </div>
            </a>

            <a href="mailto:zavetisce.mb@snaga-mb.si" className="flex items-start gap-2 md:gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-1.5 md:p-2 rounded-full mt-0.5">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
              </div>
              <span>zavetisce.mb@snaga-mb.si</span>
            </a>
            
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=100064510547105" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-1.5 md:p-2 rounded-full hover:bg-teal-200 transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
              </a>
              <a href="https://www.instagram.com/zavetisce_za_zivali_maribor/" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-1.5 md:p-2 rounded-full hover:bg-teal-200 transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
              </a>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>;
};

export default FloatingContactButton;
