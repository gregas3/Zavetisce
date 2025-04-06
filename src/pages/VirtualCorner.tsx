
import { Helmet } from 'react-helmet';
import { Video, ExternalLink, Cat, Eye } from 'lucide-react';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { useEffect, useRef, useState } from "react";

const VirtualCorner = () => {
  const dogVideoRef = useRef<HTMLDivElement>(null);
  const catVideoRef = useRef<HTMLDivElement>(null);
  const [is360Loaded, setIs360Loaded] = useState(false);
  const [isCat360Loaded, setIsCat360Loaded] = useState(false);
  
  useEffect(() => {
    // Load Kuula embeds after component mounts
    // Dog video embed
    if (dogVideoRef.current) {
      dogVideoRef.current.innerHTML = ''; // Clear any existing content
      
      // Create an iframe for better rendering control
      const iframe = document.createElement('iframe');
      iframe.src = 'https://kuula.co/share/hFQst?logo=1&info=1&fs=1&vr=1&gyro=1&alpha=0.60&keys=0&sd=1&thumbs=1';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = 'none';
      iframe.allowFullscreen = true;
      iframe.allow = 'xr-spatial-tracking; gyroscope; accelerometer; magnetometer';
      iframe.onload = () => setIs360Loaded(true);
      
      dogVideoRef.current.appendChild(iframe);
    }
    
    // Cat video embed
    if (catVideoRef.current) {
      catVideoRef.current.innerHTML = ''; // Clear any existing content
      
      // Create an iframe for better rendering control
      const iframe = document.createElement('iframe');
      iframe.src = 'https://kuula.co/share/hFQwW?logo=1&info=1&fs=1&vr=1&gyro=1&alpha=0.60&keys=0&sd=1&thumbs=1';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = 'none';
      iframe.allowFullscreen = true;
      iframe.allow = 'xr-spatial-tracking; gyroscope; accelerometer; magnetometer';
      iframe.onload = () => setIsCat360Loaded(true);
      
      catVideoRef.current.appendChild(iframe);
    }
    
    // Cleanup function
    return () => {
      if (dogVideoRef.current) {
        dogVideoRef.current.innerHTML = '';
      }
      if (catVideoRef.current) {
        catVideoRef.current.innerHTML = '';
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
                
                {/* 360° Video Embed */}
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-inner border border-teal-100 relative bg-teal-50/50">
                  {!is360Loaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
                    </div>
                  )}
                  <div 
                    ref={dogVideoRef}
                    className="w-full h-full min-h-[400px] md:min-h-[500px]" 
                    aria-label="360° pogled iz pasje perspektive v zavetišču"
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
                  onClick={() => window.open('https://kuula.co/share/hFQst?logo=1&info=1&fs=1&vr=1&gyro=1', '_blank')}
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
                
                {/* 360° Video Embed */}
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-inner border border-teal-100 relative bg-teal-50/50">
                  {!isCat360Loaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
                    </div>
                  )}
                  <div 
                    ref={catVideoRef}
                    className="w-full h-full min-h-[400px] md:min-h-[500px]" 
                    aria-label="360° pogled iz mačje perspektive v zavetišču"
                  />
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700">
                    Ta edinstvena izkušnja vam omogoča, da vidite svet skozi oči naših mačk in bolje razumete njihove potrebe in vedenje v zavetišču.
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center border-t border-teal-100 pt-6">
                <Button 
                  variant="outline" 
                  className="text-teal-700 border-teal-200"
                  onClick={() => window.open('https://kuula.co/share/hFQwW?logo=1&info=1&fs=1&vr=1&gyro=1', '_blank')}
                >
                  <ExternalLink size={18} className="mr-2" />
                  Ogled v celozaslonskem načinu
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
