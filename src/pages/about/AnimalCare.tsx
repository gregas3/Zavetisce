
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Dog, Cat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AnimalCare() {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <Layout>
      <Helmet>
        <title>Oskrba živali po sprejemu | Zavetišče za živali Maribor</title>
        <meta name="description" content="Informacije o postopku oskrbe živali po sprejemu v Zavetišče za živali Maribor." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-teal-700 to-teal-800 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <AnimatedWrapper animation={isLoaded ? "fade-in" : "none"} delay={100}>
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600/40 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-teal-100" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Oskrba živali po sprejemu
              </h1>
              <div className="w-24 h-1 bg-teal-400 rounded mb-6"></div>
              <p className="text-teal-100 max-w-3xl text-center">
                Seznanite se s postopkom oskrbe, ki ga prejme vsaka žival po sprejemu v naše zavetišče.
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
                <h2 className="text-2xl font-bold text-teal-800 mb-4">Proces oskrbe po sprejemu</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  V veterinarski ambulanti vse živali, ki pridejo v zavetišče, primerno oskrbimo. Postopek se izvaja po naslednjem vrstnem redu:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span className="text-gray-700">vpis živali v evidenco</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span className="text-gray-700">preverjanje med pogrešanimi živalmi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span className="text-gray-700">preverjanje nezamenljivih označb (iskanje čipa)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span className="text-gray-700">postopek za živali, ki jim nismo našli lastnika</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</span>
                    <span className="text-gray-700">oskrba živali v skladu s predpisi in internimi akti Zavetišča Maribor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">6</span>
                    <span className="text-gray-700">živalim v roku 24 ur nudimo primerno veterinarsko oskrbo</span>
                  </li>
                </ul>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ob sprejemu vsako žival veterinarsko pregledamo in stehtamo.
                </p>
                
                <Separator className="my-6 bg-teal-100" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                    <div className="flex items-center mb-4">
                      <Dog className="h-6 w-6 text-teal-600 mr-3" />
                      <h3 className="text-lg font-semibold text-teal-700">Psi na voljo za posvojitev</h3>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Veterinarski pregled</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Cepljeni proti kužnim boleznim</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Psi starejši od 3 mesecev so cepljeni proti steklini</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Sterilizirane psičke</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Mikročipirani</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Imajo EU potni list</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Zajamčena sredstva proti zajedalcem</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                    <div className="flex items-center mb-4">
                      <Cat className="h-6 w-6 text-teal-600 mr-3" />
                      <h3 className="text-lg font-semibold text-teal-700">Mačke na voljo za posvojitev</h3>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Veterinarski pregled</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Cepljene proti kužnim boleznim</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Sredstva proti zajedalcem</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Mikročipirane</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Sterilizirane / kastrirani samci</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">EU potni list</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Mačke nad 6 mesecev pregledane na FIV (mačji AIDS)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Uporabljajo mačje stranišče</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation={isLoaded ? "fade-in" : "none"} delay={300}>
              <div className="flex justify-center">
                <Button asChild variant="outline" className="bg-white border-teal-200 hover:bg-teal-50">
                  <Link to="/about/veterinarski-koticek" className="flex items-center gap-2">
                    <span>Preberi več o veterinarskem kotičku</span>
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
