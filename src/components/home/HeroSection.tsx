
import { ArrowRight, ChevronDown, Dog, Cat, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "../shared/AnimatedWrapper";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const isMobile = useIsMobile();
  
  const scrollToNextSection = () => {
    // Specifically target the FeaturedAnimals section by ID
    const featuredAnimalsSection = document.getElementById('featured-animals-section');
    if (featuredAnimalsSection) {
      featuredAnimalsSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Fallback if the element is not found
      const sections = document.querySelectorAll('section');
      if (sections.length > 0) {
        sections[0].scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        // If no sections are found, scroll down 100vh
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
          backgroundPosition: "center 40%",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a2d]/90 via-[#0f2a2d]/70 to-[#0f2a2d]/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block bg-teal-500/20 text-teal-100 px-2 py-0.5 rounded-full text-xs font-medium">
                Zavetišče za živali Maribor
              </span>
              <AnimatedWrapper animation="bounce-slow" className="h-8 w-auto">
                <img src="/lovable-uploads/48b0f5a4-0bee-4f96-af30-5157149e0517.png" alt="Zavetišče za živali Maribor Logo" className="h-8 w-auto drop-shadow-md" />
              </AnimatedWrapper>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-white">
              Pomagajte nam ustvariti srečne zgodbe za zapuščene živali
            </h1>
            <p className="text-sm md:text-base text-teal-100/80 mb-5 max-w-xl">
              V našem zavetišču nudimo dom izgubljenim, zapuščenim in odvzetim živalim. 
              Vsaka žival si zasluži ljubeč dom in z vašo pomočjo lahko to uresničimo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 md:mb-20 max-w-xl mx-auto sm:mx-0">
              {/* First row: "Posvoji me" buttons */}
              <Button size="lg" variant="teal" asChild className="button-pulse glow-button rounded-full font-medium text-base">
                <Link to="/posvojitev/psi">
                  Posvoji me <Dog className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="teal" asChild className="button-pulse glow-button rounded-full font-medium text-base">
                <Link to="/posvojitev/mačke">
                  Posvoji me <Cat className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              {/* Second row: "Podpri zavetišče" and "Postani član" buttons */}
              <Button size="lg" variant="darkTeal" asChild className="rounded-full font-medium text-base">
                <Link to="/donacije">
                  Podpri zavetišče <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="darkTeal" asChild className="rounded-full font-medium text-base">
                <Link to="/clanstvo">
                  Postani član <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll button - only shown on desktop */}
      {!isMobile && (
        <button 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 animate-bounce" 
          onClick={scrollToNextSection} 
          aria-label="Scroll down"
        >
          <div className="w-16 h-16 rounded-full bg-teal-700/80 flex items-center justify-center shadow-lg backdrop-blur-sm border border-teal-600/40 hover:bg-teal-600/90 transition-all duration-300">
            <ChevronDown className="h-10 w-10 text-teal-200" />
          </div>
        </button>
      )}
    </div>
  );
}
