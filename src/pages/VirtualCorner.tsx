
import { Helmet } from 'react-helmet';
import { Video, ExternalLink, Cat, Eye } from 'lucide-react';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import PanoramaViewer from "@/components/shared/PanoramaViewer";

const VirtualCorner = () => {
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
                  <Eye className="text-teal-600" />
                  <CardTitle className="text-2xl font-bold text-teal-800">Doživite zavetišče skozi pasje oči (360° izkušnja)</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Vstopite v tačke naših zavetiških psov in spoznajte njihov vsakdan.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Zahvaljujoč 360° pogledu lahko doživite zavetišče iz perspektive psa. Povlecite sliko levo ali desno za raziskovanje prostora.
                </p>
                
                {/* 360° Panorama Viewer */}
                <PanoramaViewer 
                  imagePath="/lovable-uploads/15207a8a-8146-4ffc-9666-89fdceeea46c.png" 
                  alt="360° panoramski pogled iz pasje perspektive v zavetišču"
                  className="aspect-video w-full rounded-lg overflow-hidden border border-teal-100 shadow-inner"
                />
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700">
                    Ta imerzivna izkušnja vam ponuja edinstven vpogled v vsakdanje življenje naših psov. Tako boste bolje razumeli, zakaj je pomembno, da najdemo ljubeči dom za vsakega od njih.
                  </p>
                </div>
              </CardContent>
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
                
                {/* 360° Cat Panorama Viewer */}
                <PanoramaViewer 
                  imagePath="/lovable-uploads/99306117-866d-44a1-8f2c-55bb72a92ef7.png" 
                  alt="360° panoramski pogled iz mačje perspektive v zavetišču"
                  className="aspect-video w-full rounded-lg overflow-hidden border border-teal-100 shadow-inner"
                />
                
                <div className="text-center mt-2 text-sm text-teal-600 font-medium">
                  Povlecite ali zavrtite telefon za ogled 360° pogleda zavetišča skozi mačje oči
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700">
                    Ta edinstvena izkušnja vam omogoča, da vidite svet skozi oči naših mačk in bolje razumete njihove potrebe in vedenje v zavetišču.
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center border-t border-teal-100 pt-6">
                <Button variant="outline" className="text-teal-700 border-teal-200" onClick={() => {}}>
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
