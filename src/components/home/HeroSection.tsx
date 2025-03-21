
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.section-padding');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left section */}
          <div className="hidden md:block w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 animate-fade-in">
            <h3 className="text-xl font-semibold text-white mb-4">Delovni čas</h3>
            <div className="space-y-3 text-teal-100/90">
              <div className="flex justify-between">
                <span>Ponedeljek - Petek</span>
                <span>9:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sobota</span>
                <span>9:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Nedelja in prazniki</span>
                <span>Zaprto</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Lokacija</h3>
              <p className="text-teal-100/90">
                Avtomobilska ulica 25<br />
                2000 Maribor
              </p>
            </div>
          </div>
          
          {/* Right content section */}
          <div className="max-w-3xl md:w-2/3">
            <div className="animate-fade-in">
              {/* Logo and text aligned together */}
              <div className="flex flex-col items-start mb-8">
                <img alt="Zavetišče za živali Maribor" className="h-28 md:h-36 object-contain mb-2" src="/lovable-uploads/57b6cf18-7b1a-48a3-9341-5bd8d46dc3f4.png" />
                <span className="inline-block bg-teal-500/20 text-teal-100 px-4 py-1.5 rounded-full text-sm font-medium">
                  Zavetišče za živali Maribor
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                Pomagajte nam ustvariti srečne zgodbe za zapuščene živali
              </h1>
              <p className="text-lg md:text-xl text-teal-100/80 mb-8 max-w-2xl">
                V našem zavetišču nudimo dom izgubljenim, zapuščenim in odvzetim živalim. 
                Vsaka žival si zasluži ljubeč dom in z vašo pomočjo lahko to uresničimo.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16 md:mb-0">
                <Button size="lg" variant="darkTeal" asChild className="rounded-full font-medium text-base">
                  <Link to="/donacije">
                    Podpri zavetišče
                  </Link>
                </Button>
                <Button size="lg" variant="teal" asChild className="rounded-full font-medium text-base animate-fade-in delay-100 button-pulse">
                  <Link to="/posvojitev/psi">
                    Posvoji zdaj <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated arrow replacing scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToNextSection} aria-label="Scroll down">
        <div className="w-16 h-16 rounded-full bg-teal-400/20 flex items-center justify-center border border-teal-400/30 shadow-lg backdrop-blur-sm">
          <ChevronDown className="h-12 w-12 text-teal-300 animate-bounce" />
        </div>
      </div>
    </div>;
}
