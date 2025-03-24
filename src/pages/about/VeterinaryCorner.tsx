
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Stethoscope, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export default function VeterinaryCorner() {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <Layout>
      <Helmet>
        <title>Veterinarski kotiček | Zavetišče za živali Maribor</title>
        <meta name="description" content="Informacije o veterinarski oskrbi živali v Zavetišču za živali Maribor." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-teal-700 to-teal-800 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <AnimatedWrapper animation={isLoaded ? "fade-in" : "none"} delay={100}>
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600/40 rounded-full mb-4">
                <Stethoscope className="h-8 w-8 text-teal-100" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Veterinarski kotiček
              </h1>
              <div className="w-24 h-1 bg-teal-400 rounded mb-6"></div>
              <p className="text-teal-100 max-w-3xl text-center">
                V zavetišču imamo veterinarsko ambulanto, kjer skrbno oskrbimo vse živali, ki jih sprejmemo.
              </p>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-[#e2efed]/80 to-[#dfecea]/80 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedWrapper animation={isLoaded ? "fade-in" : "none"} delay={200}>
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-teal-800 mb-4">Interna veterinarska ambulanta</h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  V zavetišču imamo organizirano interno veterinarsko ambulanto, v kateri oskrbimo vse živali, ki pridejo v zavetišče.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ambulanta je namenjena samo zdravljenju in obravnavi živali, ki so sprejete v zavetišče, saj je slovenska zakonodaja na tem področju izjemno stroga in ne dopušča mešanja lastniških in izgubljenih živali.
                </p>
                
                <Separator className="my-6 bg-teal-100" />
                
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Naše storitve</h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  V naši ambulanti opravljamo vse posege, ki jih po pravilniku o pogojih za zavetišča za izgubljene živali moramo, večje in zahtevnejše posege pa izvedejo v partnerski kliniki, s katero sodelujemo:
                </p>
                
                <div className="mt-6 p-5 bg-teal-50 rounded-lg border border-teal-100 hover:bg-teal-100/80 transition-colors group">
                  <a 
                    href="https://www.mz-vet.si/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <ExternalLink className="h-5 w-5 text-teal-600 mr-3" />
                      <span className="font-medium text-teal-700">MZVet Pesnica Veterinary Clinic</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-teal-500 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation={isLoaded ? "fade-in" : "none"} delay={300}>
              <div className="flex justify-center">
                <Button asChild variant="outline" className="bg-white border-teal-200 hover:bg-teal-50">
                  <Link to="/about/oskrba-zivali" className="flex items-center gap-2">
                    <span>Preberi več o oskrbi živali</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
}
