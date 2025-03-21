
import React, { useState } from 'react';
import { Phone, X, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="primary"
        size="icon"
        className="fixed right-4 bottom-16 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-slow"
        aria-label="Contact Us"
      >
        <Phone className="w-6 h-6" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md glass border-teal-200 shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-teal-800">
              Kontaktne informacije
            </DialogTitle>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-full p-1.5 bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors">
            <X className="h-4 w-4" />
            <span className="sr-only">Zapri</span>
          </DialogClose>

          <div className="space-y-4 py-2">
            <div className="font-semibold text-lg text-teal-700">
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
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingContactButton;
