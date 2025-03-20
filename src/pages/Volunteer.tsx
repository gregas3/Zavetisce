import { Helmet } from 'react-helmet';
import { ArrowRight, Clock, CalendarDays, Map, CheckCircle, Info, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import Section from "@/components/shared/Section";

const Volunteer = () => {
  return (
    <>
      <Helmet>
        <title>Prostovoljstvo | Zavetišče za živali Maribor</title>
        <meta 
          name="description" 
          content="Postanite prostovoljec v Zavetišču za živali Maribor in pomagajte živalim do boljšega življenja. Sprehajanje psov, pomoč pri oskrbi, sodelovanje na dogodkih in druge možnosti prostovoljstva." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">Prostovoljstvo</h1>
              <p className="text-lg md:text-xl text-teal-700 mb-8">
                Postanite del naše skupnosti prostovoljcev in pomagajte živalim do boljšega življenja. 
                Z vašo pomočjo lahko živalim omogočimo več gibanja, socializacije in ljubezni.
              </p>
            </div>
          </div>
        </section>
        
        {/* Dog Walking Section */}
        <Section title="Sprehajanje psov" subtitle="Našim kosmatincem omogočite gibanje in socializacijo">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedWrapper animation="fade-in" delay={100}>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Zavetišče omogoča prostovoljcem, da prihajajo sprehajat zavetiške pse, s čimer psom nudijo prepotrebno dnevno gibanje in socializacijo. 
                    To je izjemno pomembno za dobro počutje naših varovancev in njihovo pripravo na nov dom.
                  </p>
                  
                  <h3 className="text-teal-700 font-semibold text-xl mt-6">Kdo lahko postane prostovoljec sprehajalec?</h3>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Prostovoljec mora biti <strong>polnoleten</strong> in mora v zavetišču podpisati pristopno izjavo, da sprehaja pse na lastno odgovornost.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Zaželeno je, da ima vsaj nekaj izkušenj z ravnanjem psov.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Dobrodošli so prostovoljci, ki lahko prihajajo med tednom dopoldne, ker je takrat največja potreba po sprehajalcih (med vikendi jih imamo dovolj).</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-teal-700 font-semibold text-xl mt-6">Kako poteka sprehajanje?</h3>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Sprehajanje poteka vsak delovnik med 7.00 in 13.00, ob sobotah, nedeljah in praznikih med 8.00 in 12.00.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Prostovoljec ob prihodu javi svojo prisotnost osebju, nato mu skrbnik živali preda psa v sprehod in da morebitna posebna navodila.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Med sprehodom prostovoljec skrbi za varnost, omogoči psu, da opravi potrebe in se razgiba, nato pa z njim izvaja nekaj vaj poslušnosti.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Po sprehodu psa vrne in poroča osebju o počutju psa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span>V vročih poletjih ali ob močnem deževju sprehajanje ne poteka, oziroma se prilagodi razmeram.</span>
                    </li>
                  </ul>
                </div>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={200} className="mt-8">
                <Link to="/termini">
                  <Button variant="primary" size="lg" className="gap-2">
                    Rezerviraj termin za sprehod <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </AnimatedWrapper>
            </div>
            
            <div className="lg:col-span-1">
              <AnimatedWrapper animation="fade-in" delay={300}>
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="/lovable-uploads/fc093f6e-e6ea-4ac7-bb9f-755468edeed0.png" 
                      alt="Prostovoljec sprehaja psa v gozdu" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-teal-800 mb-4">Kako se prijavim?</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Pencil className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Podpis pristopne izjave</h4>
                          <p className="text-sm text-gray-600">Podpis opravi v sprejemni pisarni zavetišča v času uradnih ur.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <CalendarDays className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Urnik sprehajanja</h4>
                          <p className="text-sm text-gray-600">Delovniki: 7.00 - 13.00<br />Vikendi in prazniki: 8.00 - 12.00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Map className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Lokacija</h4>
                          <p className="text-sm text-gray-600">Avtobusna postaja 030, Tezno</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button asChild variant="lightTeal" className="w-full">
                        <Link to="/kontakt">
                          Kontaktirajte nas za več informacij
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            </div>
          </div>
        </Section>
        
        {/* Other Ways to Help Section */}
        <Section className="bg-teal-50/50" title="Druge oblike prostovoljstva" subtitle="Pomagajte na različne načine">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedWrapper animation="fade-in-up" delay={100}>
              <Card className="h-full">
                <div className="p-6">
                  <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <img src="/lovable-uploads/0674c8f5-b223-455c-8b15-0fa594099fad.png" alt="" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-800">Pomoč pri oskrbi</h3>
                  <p className="text-gray-700 mb-4">
                    Pomagajte pri vsakodnevni oskrbi živali, čiščenju, hranjenju in drugih opravilih, ki so nujno potrebna za dobro počutje naših varovancev.
                  </p>
                </div>
              </Card>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in-up" delay={200}>
              <Card className="h-full">
                <div className="p-6">
                  <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <img src="/lovable-uploads/0674c8f5-b223-455c-8b15-0fa594099fad.png" alt="" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-800">Sodelovanje na dogodkih</h3>
                  <p className="text-gray-700 mb-4">
                    Pomagajte pri organizaciji in izvedbi dogodkov, promocijskih aktivnostih, zbiranju sredstev in ozaveščanju javnosti o pomenu odgovornega skrbništva.
                  </p>
                </div>
              </Card>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in-up" delay={300}>
              <Card className="h-full">
                <div className="p-6">
                  <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <img src="/lovable-uploads/0674c8f5-b223-455c-8b15-0fa594099fad.png" alt="" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-teal-800">Začasni dom</h3>
                  <p className="text-gray-700 mb-4">
                    Ponudite začasni dom živalim, ki potrebujejo posebno oskrbo, mladičem ali živalim, ki se pripravljajo na posvojitev v nov stalni dom.
                  </p>
                </div>
              </Card>
            </AnimatedWrapper>
          </div>
        </Section>
        
        {/* CTA Section - Become a volunteer */}
        <section className="bg-teal-600 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedWrapper animation="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Postani prostovoljec</h2>
                <p className="text-lg text-white/90 mb-8">
                  Izpolnite kratek obrazec in nam sporočite, kako bi želeli pomagati. Kontaktirali vas bomo s podrobnostmi.
                </p>
                
                <form className="max-w-xl mx-auto space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ime in priimek" 
                        className="w-full p-3 rounded-md border border-teal-400/30 bg-white/90 focus:border-white focus:ring-1 focus:ring-white"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="E-poštni naslov" 
                        className="w-full p-3 rounded-md border border-teal-400/30 bg-white/90 focus:border-white focus:ring-1 focus:ring-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Telefonska številka" 
                      className="w-full p-3 rounded-md border border-teal-400/30 bg-white/90 focus:border-white focus:ring-1 focus:ring-white"
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Kako bi želeli pomagati? Povejte nam nekaj o sebi in svojih izkušnjah."
                      className="w-full p-3 rounded-md border border-teal-400/30 bg-white/90 focus:border-white focus:ring-1 focus:ring-white min-h-[120px]"
                    />
                  </div>
                  
                  <div>
                    <Button type="submit" variant="primary" size="lg" className="w-full bg-white text-teal-600 hover:bg-teal-50">
                      Pošlji prijavo
                    </Button>
                  </div>
                </form>
              </AnimatedWrapper>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Volunteer;
