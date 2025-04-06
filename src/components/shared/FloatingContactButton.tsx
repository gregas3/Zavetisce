
import React, { useState } from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useIsMobile } from '@/hooks/use-mobile';
import TikTokIcon from '@/components/shared/TikTokIcon';

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
        <Button variant="primary" size="icon" className="fixed right-4 bottom-16 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-700 animate-pulse" aria-label="Contact Us">
          <Phone className="w-6 h-6" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent side={isMobile ? "top" : "left"} sideOffset={isMobile ? 16 : 30} align={isMobile ? "end" : "center"} className="w-auto max-w-[340px] p-0 bg-white border-2 border-teal-200 shadow-lg rounded-xl transform-none" style={{ transform: 'none' }}>
        <div className="p-4 bg-white rounded-t-xl border-b border-teal-100">
          <h3 className="font-semibold text-lg text-teal-800 mb-3">
            Kontaktne informacije
          </h3>
          
          <div className="font-semibold text-teal-700 mb-3">
            Zavetišče za živali Maribor
          </div>

          <div className="space-y-3 text-sm">
            <button onClick={navigateToLocation} className="flex items-center w-full text-left gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-2 rounded-full flex items-center justify-center min-w-[40px] min-h-[40px]">
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
              <div className="bg-teal-100 p-2 rounded-full flex items-center justify-center min-w-[40px] min-h-[40px]">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>02 480 16 60</span>
                <span className="text-xs text-muted-foreground">Telefonska številka</span>
              </div>
            </a>

            <a href="tel:031788822" className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-2 rounded-full flex items-center justify-center min-w-[40px] min-h-[40px]">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span>031-788-822</span>
                <span className="text-xs text-muted-foreground">Številka za nujne primere</span>
              </div>
            </a>

            <a href="mailto:zavetisce.mb@snaga-mb.si" className="flex items-center gap-3 p-2 rounded-md hover:bg-teal-50 transition-colors">
              <div className="bg-teal-100 p-2 rounded-full flex items-center justify-center min-w-[40px] min-h-[40px]">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <span>zavetisce.mb@snaga-mb.si</span>
            </a>
            
            <div className="flex justify-center gap-5 mt-4 py-2">
              <a href="https://www.facebook.com/profile.php?id=100064510547105" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-3 rounded-full hover:bg-teal-200 transition-colors flex items-center justify-center w-12 h-12">
                <Facebook className="w-5 h-5 text-teal-600" />
              </a>
              <a href="https://www.instagram.com/zavetisce_za_zivali_maribor/" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-3 rounded-full hover:bg-teal-200 transition-colors flex items-center justify-center w-12 h-12">
                <Instagram className="w-5 h-5 text-teal-600" />
              </a>
              <a href="https://www.tiktok.com/@zavetisce" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-3 rounded-full hover:bg-teal-200 transition-colors flex items-center justify-center w-12 h-12">
                <TikTokIcon className="w-5 h-5 text-teal-600" />
              </a>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>;
};

export default FloatingContactButton;
