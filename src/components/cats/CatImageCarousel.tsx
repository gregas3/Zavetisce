
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CatImageCarouselProps {
  images: string[];
}

const CatImageCarousel = ({ images }: CatImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative rounded-lg overflow-hidden border border-border">
      <Carousel
        className="w-full"
        onSelect={(index) => setCurrentImage(index)}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={image}
                  alt={`Slika mačke ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </>
        )}
      </Carousel>
      
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {images.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-2 h-2 rounded-full p-0 ${
                currentImage === index
                  ? "bg-primary"
                  : "bg-primary/30"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatImageCarousel;
