import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { FileText, Users, ClipboardCheck, Calendar, Home, ArrowRight, Info, MessageCircle, HeartHandshake, CheckCircle2, Dog, Cat } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
const AdoptionProcess = () => {
  const [activeSection, setActiveSection] = useState("browse");
  return <>
      <Helmet>
        <title>Postopek posvojitve | Zavetišče za živali Maribor</title>
        <meta name="description" content="Spoznajte celoten postopek posvojitve živali iz Zavetišča za živali Maribor - od izbire živali do odhoda v nov dom." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16">
        <Section title="Postopek posvojitve" description="Posvojitev živali iz zavetišča je pomembna odločitev in odgovornost. Tukaj vam predstavljamo celoten postopek posvojitve, da boste vedeli, kaj pričakovati." className="bg-[url('/paw-pattern-light.svg')] bg-fixed bg-opacity-5">
          {/* Process Timeline */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              <ProcessStep icon={<FileText className="h-6 w-6" />} title="Pregled živali" description="Oglejte si profile živali, ki iščejo dom" isActive={activeSection === "browse"} onClick={() => setActiveSection("browse")} step={1} />
              <ProcessStep icon={<Calendar className="h-6 w-6" />} title="Rezervacija termina" description="Dogovorite se za obisk izbrane živali" isActive={activeSection === "visit"} onClick={() => setActiveSection("visit")} step={2} />
              <ProcessStep icon={<MessageCircle className="h-6 w-6" />} title="Spoznavanje" description="Spoznajte žival v živo" isActive={activeSection === "meet"} onClick={() => setActiveSection("meet")} step={3} />
              <ProcessStep icon={<ClipboardCheck className="h-6 w-6" />} title="Vprašalnik in odobritev" description="Izpolnite vprašalnik in opravite pogovor" isActive={activeSection === "approval"} onClick={() => setActiveSection("approval")} step={4} />
              <ProcessStep icon={<Home className="h-6 w-6" />} title="Posvojitev" description="Odpeljite novega člana družine domov" isActive={activeSection === "adoption"} onClick={() => setActiveSection("adoption")} step={5} />
            </div>

            {/* Detailed section content */}
            <Card className="border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                {activeSection === "browse" && <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                      <FileText className="h-6 w-6" /> Korak 1: Pregled živali
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="mb-4">
                          Na naši spletni strani si lahko ogledate vse živali, ki so trenutno na voljo za posvojitev. Vsaka žival ima svoj profil z opisom značaja, starosti, zdravstvenega stanja in drugih pomembnih informacij.
                        </p>
                        <p className="mb-4">
                          Pomembno je, da dobro razmislite o tem, kakšna žival bi se najbolje ujemala z vašim življenjskim slogom, domačim okoljem in izkušnjami. Razmislite o:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Velikosti stanovanja/hiše in okolice</li>
                          <li>Količini časa, ki ga lahko posvetite živali</li>
                          <li>Izkušnjah z živalmi</li>
                          <li>Drugih članih gospodinjstva (otroci, starejši, druge živali)</li>
                          <li>Finančnih zmožnostih za oskrbo živali</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-xl overflow-hidden">
                          
                        </div>
                        <div className="flex justify-center gap-8 mt-6">
                          <Link to="/posvojitev/psi" className="flex flex-col items-center group transition-transform hover:scale-105">
                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                              <Dog className="h-14 w-14 text-primary" />
                            </div>
                            <span className="font-medium text-primary">Oglej si pse</span>
                          </Link>
                          <Link to="/posvojitev/mačke" className="flex flex-col items-center group transition-transform hover:scale-105">
                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                              <Cat className="h-14 w-14 text-primary" />
                            </div>
                            <span className="font-medium text-primary">Oglej si mačke</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>}

                {activeSection === "visit" && <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                      <Calendar className="h-6 w-6" /> Korak 2: Rezervacija termina
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="mb-4">
                          Ko ste izbrali žival, ki bi jo želeli spoznati, morate rezervirati termin za obisk. Rezervacija termina je pomembna, saj tako omogočimo, da ima vsak obiskovalec dovolj časa za spoznavanje živali.
                        </p>
                        <p className="mb-4">
                          Termin lahko rezervirate:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Preko naše spletne strani v razdelku "Termini"</li>
                          <li>Po telefonu na številko <span className="font-semibold">+386 2 480 16 60</span></li>
                          <li>Po e-pošti na naslov <span className="font-semibold">info@zavetisce-maribor.si</span></li>
                        </ul>
                        <p>
                          Ob rezervaciji navedite, katero žival bi želeli spoznati, in predlagajte nekaj terminov, ki vam ustrezajo.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-card rounded-xl border p-4">
                          <h4 className="font-bold mb-2">Delovni čas za obiske:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <p className="font-medium">Ponedeljek - Petek:</p>
                              <p>11:00 - 18:00</p>
                            </div>
                            <div>
                              <p className="font-medium">Sobota:</p>
                              <p>10:00 - 16:00</p>
                            </div>
                            <div>
                              <p className="font-medium">Nedelja in prazniki:</p>
                              <p>Zaprto</p>
                            </div>
                          </div>
                        </div>
                        <Button asChild className="w-full">
                          <Link to="/termini">Rezerviraj termin za obisk</Link>
                        </Button>
                      </div>
                    </div>
                  </div>}

                {activeSection === "meet" && <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                      <MessageCircle className="h-6 w-6" /> Korak 3: Spoznavanje
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="mb-4">
                          Ob dogovorjenem terminu vas bo sprejel naš osebje, ki vam bo predstavil izbrano žival. Srečanje poteka v posebnem prostoru, kjer se lahko v miru spoznate z živaljo.
                        </p>
                        <p className="mb-4">
                          Med spoznavanjem boste:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Spoznali značaj in navade živali</li>
                          <li>Izvedeli več o njeni zgodovini in posebnih potrebah</li>
                          <li>Imeli priložnost opazovati, kako se žival odziva na vas</li>
                          <li>Lahko postavili vprašanja našemu osebju</li>
                        </ul>
                        <p className="mb-4">
                          To je čas, da ugotovite, ali je žival pravi izbor za vas. Včasih je potrebnih več srečanj, preden se dokončno odločite za posvojitev.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-xl overflow-hidden">
                          <img src="/lovable-uploads/0e7e3534-b460-499c-9caa-9d12dbfd38e8.png" alt="Spoznavanje živali" className="w-full h-auto rounded-xl object-cover" />
                        </div>
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                          <h4 className="font-bold flex items-center gap-2 mb-2">
                            <Info className="h-4 w-4 text-primary" /> Pomembno
                          </h4>
                          <p className="text-sm">
                            Na srečanje lahko pripeljete tudi druge člane družine, vključno z otroki. Če imate doma druge živali in želite preveriti, kako se bodo razumele z novo živaljo, se o tem predhodno posvetujte z našim osebjem.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>}

                {activeSection === "approval" && <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                      <ClipboardCheck className="h-6 w-6" /> Korak 4: Vprašalnik in odobritev
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="mb-4">
                          Če se odločite za posvojitev, boste morali izpolniti vprašalnik za posvojitev. Vprašalnik nam pomaga zagotoviti, da bo žival dobila primeren dom in da ste pripravljeni na odgovornost, ki jo prinaša skrb za novo žival.
                        </p>
                        <p className="mb-4">
                          Naše osebje bo pregledalo vaš vprašalnik in z vami opravilo pogovor. Namen pogovora je:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Preveriti, ali je vaš dom primeren za izbrano žival</li>
                          <li>Odgovoriti na vsa vaša vprašanja glede oskrbe</li>
                          <li>Zagotoviti, da razumete odgovornost posvojitve</li>
                          <li>Seznaniti vas s posebnimi potrebami živali</li>
                        </ul>
                        <p>
                          Po pogovoru in pregledu vprašalnika bo naše osebje odločilo o odobritvi posvojitve. V večini primerov je odgovor znan takoj, včasih pa je potrebno dodatno preverjanje.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-card rounded-xl border p-5">
                          <h4 className="font-bold mb-3">Vprašalnik vsebuje:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>Osebne podatke (ime, naslov, kontakt)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>Podatke o vašem domu in okolici</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>Informacije o drugih članih gospodinjstva</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>Vprašanja o izkušnjah z živalmi</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>Vprašanja o vaših pričakovanjih in načrtih</span>
                            </li>
                          </ul>
                        </div>
                        <Button asChild className="w-full">
                          <Link to="/posvojitev/vprašalnik">Izpolni vprašalnik za posvojitev</Link>
                        </Button>
                      </div>
                    </div>
                  </div>}

                {activeSection === "adoption" && <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                      <Home className="h-6 w-6" /> Korak 5: Posvojitev
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="mb-4">
                          Ko je posvojitev odobrena, se dogovorimo za datum, ko boste žival odpeljali domov. Ob posvojitvi:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>Podpišete posvojitveno pogodbo</li>
                          <li>Plačate pristojbino za posvojitev, ki pokriva stroške oskrbe, zdravljenja in sterilizacije/kastracije</li>
                          <li>Prejmete potni list živali in zdravstveno dokumentacijo</li>
                          <li>Dobite osnovne napotke za oskrbo v prvih dneh</li>
                        </ul>
                        <div className="bg-card rounded-xl border p-4 mb-4">
                          <h4 className="font-bold mb-2">Pristojbine za posvojitev:</h4>
                          <ul className="space-y-1">
                            <li>Pes: 150€</li>
                            <li>Mačka: 100€</li>
                            <li>Starejše živali (nad 7 let): 80€</li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2">
                            Pristojbina vključuje: čipiranje, cepljenje, zdravniški pregled, sterilizacijo/kastracijo, in osnovno oskrbo.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                          <h4 className="font-bold flex items-center gap-2 mb-3">
                            <HeartHandshake className="h-5 w-5 text-primary" /> Podpora po posvojitvi
                          </h4>
                          <p className="mb-4">
                            Naša skrb za posvojene živali se ne konča, ko zapustijo zavetišče. Na voljo vam bomo za:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>Svetovanje pri oskrbi in vzgoji</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>Pomoč pri reševanju morebitnih težav</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>Informacije o veterinarski oskrbi</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-4">
                          <h4 className="font-bold mb-2">Kaj prinesti ob prevzemu:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Transportni boks za mačko</li>
                            <li>Povodec in oprsnico za psa</li>
                            <li>Veljavni osebni dokument</li>
                            <li>Potrdilo o plačilu pristojbine</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>}
              </CardContent>
            </Card>
          </div>

          {/* FAQs */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Pogosta vprašanja</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Koliko časa traja celoten postopek posvojitve?</AccordionTrigger>
                <AccordionContent>
                  Celoten postopek posvojitve lahko traja od enega dneva do enega tedna, odvisno od vaše pripravljenosti, razpoložljivosti terminov za obisk in časa, ki ga potrebujete za odločitev. V nekaterih primerih, zlasti pri bolj zahtevnih živalih ali pri posvojiteljih brez izkušenj, lahko traja tudi dlje.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Ali lahko posvojim več živali hkrati?</AccordionTrigger>
                <AccordionContent>
                  Da, lahko posvojite več živali hkrati, vendar vam priporočamo, da dobro premislite o tem. Skrb za več živali hkrati zahteva več časa, energije in finančnih sredstev. V primeru posvojitve več živali boste morali izpolniti vprašalnik za vsako žival posebej.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Ali lahko posvojim žival, če nimam lastne hiše/stanovanja?</AccordionTrigger>
                <AccordionContent>
                  Da, lahko posvojite žival tudi če živite v najemu, vendar potrebujemo pisno dovoljenje lastnika nepremičnine, da se strinja s prisotnostjo živali v stanovanju. Nekatere živali so bolj primerne za življenje v stanovanju kot druge, zato vam bomo pri izbiri ustrezno svetovali.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Kaj storiti, če se žival ne prilagodi na nov dom?</AccordionTrigger>
                <AccordionContent>
                  Prilagajanje na nov dom lahko traja od nekaj dni do nekaj mesecev, odvisno od živali. V tem času vam nudimo podporo in svetovanje. Če kljub vsem poskusom žival ne more ostati pri vas, jo lahko vrnete v zavetišče. Pomembno je, da nas o težavah obvestite čim prej, da vam lahko pomagamo.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Ali so vse živali cepljene in sterilizirane/kastrirane?</AccordionTrigger>
                <AccordionContent>
                  Da, vse živali, ki so na voljo za posvojitev, so cepljene proti osnovnim boleznim in sterilizirane/kastrirane, razen če so premladi za poseg. V tem primeru je sterilizacija/kastracija vključena v pristojbino za posvojitev in jo morate opraviti, ko žival doseže primerno starost.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 bg-card rounded-xl border p-6 text-center">
            <h3 className="text-2xl font-bold mb-3">Pripravljeni na posvojitev?</h3>
            <p className="mb-8 max-w-xl mx-auto">
              Začnite svoj posvojitveni proces danes in pomagajte živali najti za vedno dom. Vaša nova žival vam bo hvaležna za vso ljubezen in skrb.
            </p>
            <div className="flex flex-wrap gap-12 justify-center">
              <Link to="/posvojitev/psi" className="flex flex-col items-center group transition-transform hover:scale-105">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Dog className="h-20 w-20 text-primary" />
                </div>
                <span className="font-medium text-lg text-primary">Posvoji psa</span>
              </Link>
              <Link to="/posvojitev/mačke" className="flex flex-col items-center group transition-transform hover:scale-105">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Cat className="h-20 w-20 text-primary" />
                </div>
                <span className="font-medium text-lg text-primary">Posvoji mačko</span>
              </Link>
              <Button asChild size="lg" variant="secondary" className="self-center">
                <Link to="/termini">Rezerviraj termin</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>;
};
interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  step: number;
}
const ProcessStep = ({
  icon,
  title,
  description,
  isActive,
  onClick,
  step
}: ProcessStepProps) => {
  return <div className={`relative flex flex-col items-center text-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${isActive ? "bg-primary/10 border border-primary/30" : "hover:bg-accent"}`} onClick={onClick}>
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors ${isActive ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
        {icon}
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
      
      {/* Step number badge */}
      <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
        {step}
      </div>
      
      {/* Connection line (hidden on mobile) */}
      {step < 5 && <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
          <ArrowRight className="text-muted-foreground" size={16} />
        </div>}
    </div>;
};
export default AdoptionProcess;