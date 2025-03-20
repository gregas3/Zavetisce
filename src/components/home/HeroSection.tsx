
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Zavetišče za živali Maribor
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Pomagajte nam ustvariti srečne zgodbe za zapuščene živali
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              V našem zavetišču nudimo dom izgubljenim, zapuščenim in odvzetim živalim. 
              Vsaka žival si zasluži ljubeč dom in z vašo pomočjo lahko to uresničimo.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                asChild 
                className="rounded-full font-medium text-base animate-fade-in delay-100"
              >
                <Link to="/posvojitev/psi">
                  Posvoji zdaj <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="rounded-full font-medium text-base animate-fade-in delay-200"
              >
                <Link to="/donacije">
                  Podpri zavetišče
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-14 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground/60 rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
