
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
import { Badge } from "@/components/ui/badge";

interface CatVideo {
  thumbnail: string;
  url: string;
  title: string;
}

interface CatImageCarouselProps {
  catName: string;
  images: string[];
  videos?: CatVideo[];
  catId?: string | number;
  isDetailPage?: boolean;
}

const CatImageCarousel = ({ 
  catName, 
  images, 
  videos, 
  catId, 
  isDetailPage = false 
}: CatImageCarouselProps) => {
  const navigate = useNavigate();

  // If only one image is provided, convert it to an array
  const imageArray = Array.isArray(images) ? images : [images];

  const handleImageClick = (e: React.MouseEvent) => {
    if (!isDetailPage && catId) {
      e.preventDefault();
      navigate(`/posvojitev/mačke/${catId}`);
    }
  };

  return (
    <Carousel className="mb-8 w-full" opts={{ loop: true }}>
      <CarouselContent>
        {imageArray.map((image, index) => (
          <CarouselItem key={`image-${index}`}>
            <div className="overflow-hidden rounded-xl">
              {isDetailPage ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-full p-0 m-0 bg-transparent border-0 cursor-pointer">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img
                          src={image}
                          alt={`${catName} - slika ${index + 1}`}
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
                        alt={`${catName} - slika ${index + 1}`} 
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
                  <AspectRatio ratio={4 / 3} className="bg-muted">
                    <img
                      src={image}
                      alt={`${catName} - slika ${index + 1}`}
                      className="object-cover w-full h-full hover:opacity-95 transition-opacity"
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
                  alt={`${catName} - ${video.title}`}
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
                        <DialogTitle>{catName} - {video.title}</DialogTitle>
                        <DialogDescription>Video posnetek mačke</DialogDescription>
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
      {(imageArray.length > 1 || (videos && videos.length > 0)) && (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      )}
    </Carousel>
  );
};

export default CatImageCarousel;
