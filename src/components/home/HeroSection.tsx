
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

export default function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.section-padding');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a2d]/90 via-[#0f2a2d]/70 to-[#0f2a2d]/50 mx-0 py-0 my-0"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block bg-teal-500/20 text-teal-100 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Zavetišče za živali Maribor
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Pomagajte nam ustvariti srečne zgodbe za zapuščene živali
            </h1>
            <p className="text-lg md:text-xl text-teal-100/80 mb-8 max-w-2xl">
              V našem zavetišču nudimo dom izgubljenim, zapuščenim in odvzetim živalim. 
              Vsaka žival si zasluži ljubeč dom in z vašo pomočjo lahko to uresničimo.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* Updated with a different animation */}
              <AnimatedWrapper animation="float" className="inline-block">
                <Button size="lg" variant="darkTeal" asChild className="rounded-full font-medium text-base">
                  <Link to="/donacije">
                    Podpri zavetišče
                  </Link>
                </Button>
              </AnimatedWrapper>
              <Button size="lg" variant="teal" asChild className="rounded-full font-medium text-base animate-fade-in delay-100 button-pulse">
                <Link to="/posvojitev/psi">
                  Posvoji zdaj <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - improved with onClick handler */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer" 
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <div className="w-8 h-14 rounded-full border-2 border-teal-400/30 flex justify-center hover:border-teal-400/60 transition-normal">
          <div className="w-1.5 h-3 bg-teal-400/60 rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>;
}
