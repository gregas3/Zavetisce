
import { Helmet } from 'react-helmet';
import { BookOpen, Calendar, Target, Flag, Users, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import Section from "@/components/shared/Section";

const AboutUs = () => {
  return (
    <Layout>
      <Helmet>
        <title>O nas | Zavetišče za živali Maribor</title>
        <meta name="description" content="Informacije o zavetišču za živali Maribor, našem poslanstvu, viziji in ciljih. Spoznajte našo zgodovino in delovanje zavetišča za zapuščene živali." />
      </Helmet>
      
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">O nas</h1>
              <p className="text-lg md:text-xl text-teal-700 mb-8">
                Spoznajte naše zavetišče, naše poslanstvo in našo vizijo za prihodnost zapuščenih živali.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <Section title="O zavetišču" animation="fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedWrapper animation="fade-in" delay={100}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg">
                    Zavetišče za zapuščene živali je prehoden dom za vse izgubljene, zavržene in mučene živali. V zavetišču živali, med katerimi je največ psov in muc, žival sprejmemo, jo zdravstveno oskrbimo, steriliziramo ali kastriramo in ji skušamo čim prej najti nove lastnike, ki ji bodo ponudili topli in ljubeč dom. Med začasnim bivanjem živali v zavetišču posebej psom nudimo dnevno gibanje s sprehajanjem.
                  </p>
                  <p className="text-lg mt-4">
                    Po zakonu mora imeti vsaka občina v Sloveniji urejeno oskrbo izgubljenih in zavrženih živali. Tako lahko zgradijo svojega ali pa z enim od slovenskih zavetišč podpišejo pogodbo o sodelovanju.
                  </p>
                </div>
              </AnimatedWrapper>
            </div>
            
            <div className="lg:col-span-1">
              <AnimatedWrapper animation="fade-in" delay={200}>
                <Card className="h-full overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="/lovable-uploads/673ed8ab-0773-4bd3-bfa4-7ecd1fe63215.png" 
                      alt="Slika zavetišča za živali" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-teal-800 mb-4">Uradne ure</h3>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span>Ponedeljek - Petek:</span>
                        <span className="font-medium">8:00 - 16:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sobota:</span>
                        <span className="font-medium">8:00 - 13:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Nedelja in prazniki:</span>
                        <span className="font-medium">8:00 - 12:00</span>
                      </p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Zavetišče je v času uradnih ur na voljo obiskovalcem.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            </div>
          </div>
        </Section>
        
        {/* History Section */}
        <Section className="bg-teal-50/50" title="Naša zgodovina" animation="slide-up">
          <div className="max-w-3xl mx-auto">
            <AnimatedWrapper animation="fade-in" delay={100}>
              <div className="relative pl-8 border-l-2 border-teal-300 mb-12">
                <AnimatedWrapper animation="bounce-slow" delay={100}>
                  <div className="absolute -left-3 top-0">
                    <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                      <Flag className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </AnimatedWrapper>
                <h3 className="text-xl font-semibold mb-2 text-teal-800">1987</h3>
                <p className="text-gray-700">
                  Začetki zavetišča za živali v Mariboru segajo v leto 1987.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-teal-300">
                <AnimatedWrapper animation="bounce-slow" delay={200}>
                  <div className="absolute -left-3 top-0">
                    <div className="bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center">
                      <Flag className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </AnimatedWrapper>
                <h3 className="text-xl font-semibold mb-2 text-teal-800">15. februar 2012</h3>
                <p className="text-gray-700">
                  Zavetišče Maribor je prevzelo podjetje Snaga d.o.o., ki nadaljuje z zgledno tradicijo ravnanja z zapuščenimi živalmi na območju Maribora in okolice.
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </Section>
        
        {/* Mission and Vision Section */}
        <Section title="Poslanstvo in vizija" subtitle="Kaj nas vodi pri našem delu" animation="fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedWrapper animation="fade-in" delay={100}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-teal-800">Naše poslanstvo</h3>
                  </div>
                  <p className="text-lg">
                    Zapuščenim živalim z vašo pomočjo zagotoviti topel in ljubeč prehodni dom ter jim čim prej poiskati nove lastnike.
                  </p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={200}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Target className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-teal-800">Naša vizija</h3>
                  </div>
                  <p className="text-lg">
                    Idealno zavetišče – torej prazno zavetišče. Prizadevamo si za svet, kjer nobena žival ne bi bila zapuščena ali zavržena.
                  </p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          </div>
        </Section>
        
        {/* Goals Section */}
        <Section className="bg-teal-50/50" title="Naši cilji" subtitle="Z vizijo postati idealno zavetišče zasledujemo naslednje cilje" animation="fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedWrapper animation="fade-in" delay={100}>
              <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-teal-100">
                <div className="mt-1">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <img src="/lovable-uploads/0674c8f5-b223-455c-8b15-0fa594099fad.png" alt="" className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-800">Veterinarska oskrba</h3>
                  <p className="text-gray-700">
                    Zapuščenim živalim ponuditi strokovno in hitro veterinarsko oskrbo na najvišji ravni.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={200}>
              <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-teal-100">
                <div className="mt-1">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-800">Posvojitve</h3>
                  <p className="text-gray-700">
                    Socializirati ali resocializirati zapuščene živali in jim poiskati nove lastnike.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={300}>
              <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-teal-100">
                <div className="mt-1">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-800">Izobraževanje</h3>
                  <p className="text-gray-700">
                    Izobraževati lokalno skupnost s ciljem zmanjšanja števila brezdomnih živali.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={400}>
              <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-teal-100">
                <div className="mt-1">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <img src="/lovable-uploads/0674c8f5-b223-455c-8b15-0fa594099fad.png" alt="" className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-800">Prostor skupnosti</h3>
                  <p className="text-gray-700">
                    Lokacijo zavetišča preoblikovati v prostor, ki bo združil ljubitelje in lastnike živali.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </Section>
        
        {/* Reports Section */}
        <Section title="Poročila o delu" subtitle="Transparentnost je za nas pomembna" animation="fade-in">
          <div className="max-w-3xl mx-auto">
            <AnimatedWrapper animation="fade-in" delay={100}>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-teal-100 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-lg font-medium">Letno poročilo 2023</span>
                  </div>
                  <Button variant="lightTeal" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Prenesi
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-teal-100 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-lg font-medium">Letno poročilo 2022</span>
                  </div>
                  <Button variant="lightTeal" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Prenesi
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-teal-100 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-lg font-medium">Letno poročilo 2021</span>
                  </div>
                  <Button variant="lightTeal" size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> Prenesi
                  </Button>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </Section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-b from-teal-600 to-teal-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedWrapper animation="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Podprite naše poslanstvo</h2>
                <p className="text-lg text-white/90 mb-8">
                  Pomagajte nam zagotoviti boljše življenje zapuščenim živalim. Vsak prispevek šteje, ne glede na to, kako majhen je.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="primary" size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                    <Link to="/donacije">
                      Donirajte
                    </Link>
                  </Button>
                  <Button asChild variant="lightTeal" size="lg">
                    <Link to="/prostovoljstvo">
                      Postanite prostovoljec
                    </Link>
                  </Button>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutUs;
