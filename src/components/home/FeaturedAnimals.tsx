
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Play, Info, Cat, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedWrapper from "../shared/AnimatedWrapper";
import Section from "../shared/Section";
import { getFeaturedAnimals, Animal } from "@/data/animalsData";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

export default function FeaturedAnimals() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [featuredAnimals, setFeaturedAnimals] = useState<Animal[]>([]);
  
  useEffect(() => {
    // Get featured animals when component mounts
    setFeaturedAnimals(getFeaturedAnimals(6));
  }, []);
  
  return (
    <Section
      title="Spoznajte naše živali"
      description="Tukaj so nekatere izmed živali, ki trenutno čakajo na svoj za vedno dom. Kliknite na žival za več informacij."
      centered
      className="pb-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onSelect={(idx) => setActiveSlide(idx)}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredAnimals.map((animal, index) => (
              <CarouselItem key={`${animal.type}-${animal.id}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <AnimatedWrapper
                  animation="zoom-in"
                  delay={index * 100}
                  className="h-full"
                >
                  <Link
                    to={`/posvojitev/${animal.type === 'pes' ? 'psi' : 'mačke'}/${animal.id}`}
                    className="group flex flex-col h-full rounded-xl overflow-hidden border border-border bg-card hover-lift"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={animal.image}
                        alt={animal.name}
                        className="object-cover w-full h-full transition-normal group-hover:scale-105"
                        loading="lazy"
                      />
                      <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground flex items-center gap-1.5">
                        {animal.type === 'pes' ? <Dog size={14} /> : <Cat size={14} />}
                        {animal.type === 'pes' ? 'Pes' : 'Mačka'}
                      </Badge>
                      
                      {/* Video badge only shown as an example, would need real video data */}
                      {index % 3 === 0 && (
                        <div className="absolute bottom-3 right-3">
                          <Badge className="bg-primary/90 backdrop-blur-sm text-white flex items-center gap-1 hover:bg-primary cursor-pointer px-3 py-1">
                            <Play size={14} />
                            Video
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-normal">
                        {animal.name}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-3">
                        {animal.breed} • {animal.age} • {animal.gender}
                      </div>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {animal.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm flex items-center gap-1 text-primary font-medium">
                          <Info size={14} />
                          Več informacij
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedWrapper>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 h-12 w-12 bg-background/80 border-primary/20 text-primary hover:bg-primary hover:text-white shadow-md rounded-full -translate-x-1/4" />
            <CarouselNext className="right-0 h-12 w-12 bg-background/80 border-primary/20 text-primary hover:bg-primary hover:text-white shadow-md rounded-full translate-x-1/4" />
          </div>
        </Carousel>
        
        {/* Pagination dots for mobile and visual reference */}
        <div className="flex justify-center gap-2 mt-6">
          {featuredAnimals.slice(0, Math.ceil(featuredAnimals.length / 3)).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-normal ${
                Math.floor(activeSlide / 3) === index ? "w-8 bg-primary" : "w-2 bg-muted"
              }`}
              aria-label={`Pojdi na diapozitiv ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8"> 
        <Button asChild size="lg" className="rounded-full">
          <Link to="/posvojitev/psi">
            Ogled vseh živali
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
