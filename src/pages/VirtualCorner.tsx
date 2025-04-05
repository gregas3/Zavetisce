import { Helmet } from 'react-helmet';
import { Video, ExternalLink } from 'lucide-react';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

const VirtualCorner = () => {
  return (
    <Layout>
      <Helmet>
        <title>Virtualen kotiček | Zavetišče za živali Maribor</title>
        <meta name="description" content="Doživite zavetišče skozi oči psa s 360° izkušnjo." />
      </Helmet>

      <main className="min-h-screen pt-24 py-0">
        {/* Hero Section */}
        <Section title="Virtualen kotiček" description="Doživite zavetišče na nov način" centered className="pt-24 md:pt-32" animation="fade-in-up">
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
                  Vstopite v tačke naših zavetniških psov in spoznajte njihov vsakdan.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Zahvaljujoč 360° kameri lahko doživite zavetišče iz perspektive psa, tudi znotraj njihovega boksa.
                  Ta edinstvena izkušnja ljudem pomaga razumeti realnost življenja živali in spodbuja empatijo ter podporo.
                </p>
                
                {/* Video Viewer */}
                <div className="aspect-video w-full bg-black/5 rounded-lg overflow-hidden shadow-inner flex items-center justify-center border border-teal-100">
                  <div className="text-center p-8">
                    <Video className="w-16 h-16 mx-auto text-teal-500 mb-4 opacity-70" />
                    <p className="text-teal-700 font-medium">360° video bo kmalu na voljo.</p>
                    <p className="text-sm text-teal-600 mt-2">Preverite ponovno v nekaj dneh!</p>
                  </div>
                  
                  {/* Placeholder for actual 360° video iframe */}
                  {/* 
                   <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="360° pogled iz pasje perspektive v zavetišču" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                   ></iframe> 
                   */}
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700">
                    Ta imerzivna izkušnja vam ponuja edinstven vpogled v vsakdanje življenje naših psov. Tako boste bolje razumeli, zakaj je pomembno, da najdemo ljubeči dom za vsakega od njih.
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

          {/* 360° Cat Experience */}
          <AnimatedWrapper animation="fade-in" delay={400} className="mb-16">
            <Card className="glass-card overflow-hidden relative max-w-5xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-teal-500" />
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Video className="text-teal-600" />
                  <CardTitle className="text-2xl font-bold text-teal-800">Cat's World Through Feline Eyes</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Step into the world of our cats and explore their living space from a unique perspective – through their eyes. Click to experience the 360° view!
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
                  
                  {/* Placeholder for actual 360° video iframe */}
                  {/* 
                   <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="360° pogled iz mačje perspektive v zavetišču" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                   ></iframe> 
                   */}
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
