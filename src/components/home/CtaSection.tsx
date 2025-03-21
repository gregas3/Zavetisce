
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "../shared/AnimatedWrapper";

export default function CtaSection() {
  return (
    <div className="bg-gradient-to-b from-[#e2f3f2]/70 to-[#e0f1f0]/60 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-primary relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-full h-full opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          
          {/* Bottom wave shape */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-primary fill-current">
              <path 
                fillOpacity="0.3" 
                d="M0,160L48,138.7C96,117,192,75,288,69.3C384,64,480,96,576,128C672,160,768,192,864,186.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedWrapper animation="fade-in">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  Skupaj za živali
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Potrebujemo vašo pomoč
                </h2>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  Postanite del naše skupnosti, ki pomaga zapuščenim živalim. Podarite svoj čas kot prostovoljec, 
                  posvojite žival ali podprite naše delo z donacijo.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg" 
                    asChild 
                    className="rounded-full font-medium text-base bg-white text-primary hover:bg-white/90"
                  >
                    <Link to="/prostovoljstvo">
                      Postani prostovoljec <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    asChild 
                    className="rounded-full font-medium text-base bg-transparent border-white hover:bg-white/20"
                  >
                    <Link to="/donacije">
                      Podpri nas
                    </Link>
                  </Button>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
