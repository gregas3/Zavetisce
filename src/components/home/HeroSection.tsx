
import { ArrowRight, ChevronDown, Dog, Cat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "../shared/AnimatedWrapper";

export default function HeroSection() {
  const scrollToFeaturedAnimals = () => {
    // Find the "Spoznajte naše živali" section with a more specific selector
    const featuredAnimalsSection = document.querySelector('h2:contains("Spoznajte naše živali")') || 
                                   document.querySelector('section h2') || 
                                   document.getElementById('featured-animals');
    
    if (featuredAnimalsSection) {
      // If found, scroll to it
      featuredAnimalsSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Fallback: scroll to the second section which should be the FeaturedAnimals
      const sections = document.querySelectorAll('section');
      if (sections.length > 1) {
        sections[1].scrollIntoView({ behavior: 'smooth' });
      } else {
        // Last resort fallback: scroll down 100vh
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return <div className="relative pt-24 min-h-[100vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a2d]/90 via-[#0f2a2d]/70 to-[#0f2a2d]/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 my-auto">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block bg-teal-500/20 text-teal-100 px-4 py-1.5 rounded-full text-lg font-medium">
                Zavetišče za živali Maribor
              </span>
              <AnimatedWrapper 
                animation="bounce-slow" 
                className="h-12 w-auto" 
              >
                <img 
                  src="/lovable-uploads/48b0f5a4-0bee-4f96-af30-5157149e0517.png" 
                  alt="Zavetišče za živali Maribor Logo" 
                  className="h-12 w-auto drop-shadow-md" 
                />
              </AnimatedWrapper>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Pomagajte nam ustvariti srečne zgodbe za zapuščene živali
            </h1>
            <p className="text-xl md:text-2xl text-teal-100/80 mb-8 max-w-2xl">
              V našem zavetišču nudimo dom izgubljenim, zapuščenim in odvzetim živalim. 
              Vsaka žival si zasluži ljubeč dom in z vašo pomočjo lahko to uresničimo.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16 md:mb-0">
              <Button size="lg" variant="darkTeal" asChild className="rounded-full font-medium text-base">
                <Link to="/donacije">
                  Podpri zavetišče
                </Link>
              </Button>
              <Button size="lg" variant="teal" asChild className="rounded-full font-medium text-base">
                <Link to="/posvojitev/psi">
                  Posvoji me: <Dog className="ml-2 h-8 w-8" />
                </Link>
              </Button>
              <Button size="lg" variant="teal" asChild className="rounded-full font-medium text-base">
                <Link to="/posvojitev/mačke">
                  Posvoji me: <Cat className="ml-2 h-8 w-8" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Larger and more visible scroll button */}
      <button 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 animate-bounce animation-duration-2000"
        onClick={scrollToFeaturedAnimals}
        aria-label="Scroll to Spoznajte naše živali"
      >
        <div className="w-16 h-16 rounded-full bg-teal-600/90 flex items-center justify-center shadow-lg backdrop-blur-sm border border-teal-500/50 transition-all duration-300 hover:bg-teal-500 hover:scale-110">
          <ChevronDown className="h-10 w-10 text-white" />
        </div>
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-white text-sm font-medium bg-teal-700/70 px-3 py-1 rounded-full whitespace-nowrap">
          Spoznajte naše živali
        </span>
      </button>
    </div>;
}
