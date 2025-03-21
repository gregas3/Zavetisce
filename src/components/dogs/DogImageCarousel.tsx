
import React from "react";
import { Play, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface DogVideo {
  thumbnail: string;
  url: string;
  title: string;
}

interface DogImageCarouselProps {
  dogName: string;
  images: string[];
  videos?: DogVideo[];
  dogId?: string | number;
  isDetailPage?: boolean;
}

const DogImageCarousel = ({ 
  dogName, 
  images, 
  videos, 
  dogId, 
  isDetailPage = false 
}: DogImageCarouselProps) => {
  const navigate = useNavigate();

  const handleImageClick = (e: React.MouseEvent) => {
    if (!isDetailPage && dogId) {
      e.preventDefault();
      navigate(`/posvojitev/psi/${dogId}`);
    }
  };

  return (
    <Carousel className="mb-8 w-full" opts={{ loop: true }}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={`image-${index}`}>
            <div className="overflow-hidden rounded-xl">
              {isDetailPage ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-full p-0 m-0 bg-transparent border-0 cursor-pointer">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img
                          src={image}
                          alt={`${dogName} - slika ${index + 1}`}
                          className="object-contain w-full h-full hover:opacity-95 transition-opacity"
                        />
                      </AspectRatio>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-5xl p-1 bg-transparent border-0">
                    <div className="relative">
                      <DialogClose className="absolute top-2 right-2 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80">
                        <X size={20} />
                      </DialogClose>
                      <img 
                        src={image} 
                        alt={`${dogName} - slika ${index + 1}`} 
                        className="w-full h-auto max-h-[85vh] object-contain rounded-md" 
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <button 
                  className="w-full h-full p-0 m-0 bg-transparent border-0 cursor-pointer"
                  onClick={handleImageClick}
                >
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={image}
                      alt={`${dogName} - slika ${index + 1}`}
                      className="object-contain w-full h-full hover:opacity-95 transition-opacity"
                    />
                  </AspectRatio>
                </button>
              )}
            </div>
          </CarouselItem>
        ))}
        
        {videos && videos.map((video, index) => (
          <CarouselItem key={`video-${index}`}>
            <div className="overflow-hidden rounded-xl relative group">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                  src={video.thumbnail}
                  alt={`${dogName} - ${video.title}`}
                  className="object-contain w-full h-full"
                />
                {isDetailPage ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white transform transition-transform group-hover:scale-110">
                          <Play size={32} fill="white" />
                        </div>
                        <span className="absolute bottom-4 left-4 text-white font-medium px-3 py-1 bg-black/50 rounded-lg">
                          {video.title}
                        </span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{dogName} - {video.title}</DialogTitle>
                        <DialogDescription>Video posnetek psa</DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video w-full">
                        <video 
                          src={video.url} 
                          controls
                          className="w-full h-full rounded-md"
                          autoPlay
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <button 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all"
                    onClick={handleImageClick}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white transform transition-transform group-hover:scale-110">
                      <Play size={32} fill="white" />
                    </div>
                    <span className="absolute bottom-4 left-4 text-white font-medium px-3 py-1 bg-black/50 rounded-lg">
                      {video.title}
                    </span>
                  </button>
                )}
              </AspectRatio>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default DogImageCarousel;
