
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Heart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedWrapper from "../shared/AnimatedWrapper";
import Section from "../shared/Section";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

// Updated mock data for featured animals - removed hasVideo and videoUrl properties
const featuredAnimals = [
  {
    id: 1,
    name: "Reks",
    type: "pes",
    breed: "Mešanec",
    age: "2 leti",
    gender: "samec",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Reks je prijazna in energična mešanka z veliko ljubezni. Rad ima dolge sprehode in igranje."
  },
  {
    id: 2,
    name: "Muri",
    type: "mačka",
    breed: "Evropska kratka dlaka",
    age: "1 leto",
    gender: "samec",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    description: "Muri je igriv in radoveden mlad maček, ki se rad stiska in prede."
  },
  {
    id: 3,
    name: "Bela",
    type: "pes",
    breed: "Labrador",
    age: "3 leta",
    gender: "samica",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Bela je prijazna in mirna psička, ki obožuje družbo in crkljanje."
  },
  {
    id: 4,
    name: "Črnko",
    type: "mačka",
    breed: "Evropska kratka dlaka",
    age: "2 leti",
    gender: "samec",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    description: "Črnko je eleganten črn maček, ki je samostojen, a hkrati ljubeč do ljudi."
  },
  {
    id: 5,
    name: "Lara",
    type: "pes",
    breed: "Mešanec",
    age: "7 mesecev",
    gender: "samica",
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
    description: "Lara je mladiček poln energije in radovednosti, ki išče aktivno družino."
  },
  {
    id: 6,
    name: "Liza",
    type: "mačka",
    breed: "Evropska kratka dlaka",
    age: "5 let",
    gender: "samica",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80",
    description: "Liza je umirjena odrasla mačka, ki išče miren dom, kjer bo lahko kraljevala."
  }
];

export default function FeaturedAnimals() {
  const [activeSlide, setActiveSlide] = useState(0);
  
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
              <CarouselItem key={animal.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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
                      <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground">
                        {animal.type === 'pes' ? 'Pes' : 'Mačka'}
                      </Badge>
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
                        <button 
                          className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-normal" 
                          aria-label="Dodaj med priljubljene"
                        >
                          <Heart size={16} />
                        </button>
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
