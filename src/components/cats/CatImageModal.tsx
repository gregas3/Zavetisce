
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CatImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  catName: string;
}

const CatImageModal = ({ isOpen, onClose, imageUrl, catName }: CatImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] p-0 bg-transparent border-0 shadow-none">
        <div className="relative">
          <Button 
            onClick={onClose} 
            variant="outline" 
            size="icon" 
            className="absolute top-2 right-2 z-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <X className="h-4 w-4" />
          </Button>
          <img 
            src={imageUrl} 
            alt={`${catName} full size`} 
            className="w-full h-auto rounded-lg object-contain max-h-[80vh]"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CatImageModal;
