
import React, { useState } from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Navigation, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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

  const handleClosePopover = () => {
    setOpen(false);
  };

  return (
    <TooltipProvider>
      <Popover open={open} onOpenChange={setOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button 
                variant="primary" 
                size="icon" 
                className="fixed right-4 bottom-16 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-700 animate-pulse" 
                aria-label="Contact Us"
              >
                <Phone className="w-6 h-6" />
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={4}>
            <p>Kontaktne informacije</p>
          </TooltipContent>
        </Tooltip>
        
        <PopoverContent 
          side="top"
          align="end"
          alignOffset={20}
          sideOffset={16}
          className="w-80 p-0 bg-white border-2 border-teal-200 shadow-lg rounded-xl z-[100] relative"
          onInteractOutside={handleClosePopover}
          onEscapeKeyDown={handleClosePopover}
        >
          <div className="absolute right-2 top-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-full hover:bg-teal-100" 
              onClick={handleClosePopover}
            >
              <X className="h-4 w-4 text-teal-700" />
            </Button>
          </div>
          
          <div className="p-4 bg-white rounded-t-xl border-b border-teal-100">
            <h3 className="font-semibold text-lg text-teal-800 mb-3">
              Kontaktne informacije
            </h3>
            
            <div className="font-semibold text-teal-700 mb-3">
              Zavetišče za živali Maribor
            </div>

            <div className="space-y-3 text-sm">
              <button onClick={navigateToLocation} className="flex items-center w-full text-left gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
                <div className="bg-teal-100 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex flex-col">
                  <span>Avtomobilska ulica 25, 2000 Maribor, Slovenia</span>
                  <span className="text-xs text-teal-600 flex items-center gap-1 mt-1">
                    <Navigation size={12} /> Pridobi navigacijo
                  </span>
                </div>
              </button>

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

          {/* Adding a visual arrow pointer that connects to the button */}
          <div className="absolute bottom-[-8px] right-[56px] w-4 h-4 bg-white border-r-2 border-b-2 border-teal-200 transform rotate-45"></div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
};

export default FloatingContactButton;
