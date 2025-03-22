
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CatImageModal from "./CatImageModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CatImageCarouselProps {
  images: string[];
  catName?: string;
}

const CatImageCarousel = ({ images, catName = "Cat" }: CatImageCarouselProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video bg-muted flex items-center justify-center rounded-lg">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <>
      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          loop={images.length > 1}
          className="rounded-lg overflow-hidden cursor-pointer"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} onClick={() => handleImageClick(image)}>
              <div className="relative aspect-[4/3] w-full bg-muted">
                <img
                  src={image}
                  alt={`${catName} - image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      <CatImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={currentImage}
        catName={catName}
      />
    </>
  );
};

export default CatImageCarousel;
