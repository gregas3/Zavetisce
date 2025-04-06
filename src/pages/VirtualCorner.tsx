
import { Helmet } from 'react-helmet';
import { Video, ExternalLink, Cat, Eye } from 'lucide-react';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { useEffect, useRef } from 'react';

const VirtualCorner = () => {
  // Reference to the container where we'll inject the Kuula script
  const kuulaContainerRef = useRef<HTMLDivElement>(null);

  // Effect to load the Kuula script after component mounts
  useEffect(() => {
    if (kuulaContainerRef.current) {
      // Clear any existing content
      kuulaContainerRef.current.innerHTML = '';
      
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://static.kuula.io/embed.js';
      script.setAttribute('data-kuula', 'https://kuula.co/share/hFQwW?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1');
      script.setAttribute('data-width', '100%');
      script.setAttribute('data-height', '640px');
      
      // Append script to container
      kuulaContainerRef.current.appendChild(script);
    }
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (kuulaContainerRef.current) {
        kuulaContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Virtualen kotiček | Zavetišče za živali Maribor</title>
        <meta name="description" content="Doživite zavetišče skozi oči psa s 360° izkušnjo." />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <Section title="Virtualen kotiček" description="Doživite zavetišče na nov način" centered className="pt-6 md:pt-8" animation="fade-in-up">
          {/* 360° Dog Experience */}
          <AnimatedWrapper animation="fade-in" delay={300} className="mb-16">
            <Card className="glass-card overflow-hidden relative max-w-5xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-teal-500" />
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Video className="text-teal-600" />
                  <CardTitle className="text-2xl font-bold text-teal-800">Doživite zavetišče skozi pasje oči (360° izkušnja)</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Vstopite v tačke naših zavetiških psov in spoznajte njihov vsakdan.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Zahvaljujoč 360° kameri lahko doživite zavetišče iz perspektive psa, tudi znotraj njihovega boksa.
                  Ta edinstvena izkušnja ljudem pomaga razumeti realnost življenja živali in spodbuja empatijo ter podporo.
                </p>
                
                {/* Kuula 360° Video Embed */}
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-inner">
                  <div 
                    ref={kuulaContainerRef} 
                    className="w-full h-full min-h-[400px] bg-black/5 rounded-lg overflow-hidden border border-teal-100"
                    aria-label="360° virtualni ogled zavetišča"
                  />
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700">
                    Ta imerzivna izkušnja vam ponuja edinstven vpogled v vsakdanje življenje naših psov. Tako boste bolje razumeli, zakaj je pomembno, da najdemo ljubeči dom za vsakega od njih.
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center border-t border-teal-100 pt-6">
                <Button 
                  variant="outline" 
                  className="text-teal-700 border-teal-200"
                  onClick={() => window.open('https://kuula.co/share/hFQwW?fs=1', '_blank')}
                >
                  <ExternalLink size={18} className="mr-2" />
                  Ogled v celozaslonskem načinu
                </Button>
              </CardFooter>
            </Card>
          </AnimatedWrapper>

          {/* 360° Cat Experience */}
          <AnimatedWrapper animation="fade-in" delay={400} className="mb-16">
            <Card className="glass-card overflow-hidden relative max-w-5xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-teal-500" />
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Cat className="text-teal-600" />
                  <CardTitle className="text-2xl font-bold text-teal-800">Doživite zavetišče skozi mačje oči (360° izkušnja)</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Vstopite v svet naših mačk in raziščite njihov življenjski prostor z edinstvene perspektive – skozi njihove oči. Kliknite za 360° izkušnjo! 🐾
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Zahvaljujoč 360° kameri lahko doživite zavetišče iz perspektive mačke. Doživite njihovo igrivo naravo in vsakodnevne aktivnosti iz prve roke.
                </p>
                
                {/* Video Viewer */}
                <div className="aspect-video w-full bg-black/5 rounded-lg overflow-hidden shadow-inner flex items-center justify-center border border-teal-100">
                  <div className="text-center p-8">
                    <Video className="w-16 h-16 mx-auto text-teal-500 mb-4 opacity-70" />
                    <p className="text-teal-700 font-medium">360° video bo kmalu na voljo.</p>
                    <p className="text-sm text-teal-600 mt-2">Preverite ponovno v nekaj dneh!</p>
                  </div>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700">
                    Ta edinstvena izkušnja vam omogoča, da vidite svet skozi oči naših mačk in bolje razumete njihove potrebe in vedenje v zavetišču.
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center border-t border-teal-100 pt-6">
                <Button variant="outline" className="text-teal-700 border-teal-200" disabled>
                  <ExternalLink size={18} className="mr-2" />
                  Ogled v celozaslonskem načinu bo kmalu na voljo
                </Button>
              </CardFooter>
            </Card>
          </AnimatedWrapper>
        </Section>
      </main>
    </Layout>
  );
};

export default VirtualCorner;
