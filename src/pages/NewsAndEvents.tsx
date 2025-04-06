import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, CalendarCheck, CalendarDays, Newspaper, PawPrint, ExternalLink } from "lucide-react";
import Section from "@/components/shared/Section";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface NewsOrEventItem {
  date: string;
  title: string;
  summary: string;
  id: string;
  source?: {
    name: string;
    url: string;
  };
}

const NewsAndEvents = () => {
  const [email, setEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);

  const upcomingEvents: NewsOrEventItem[] = [];
  
  const pastEvents: NewsOrEventItem[] = [
    {
      date: "4. april 2025",
      title: "Parada tačk »Spoznaj me!«",
      summary: "Na svetovni dan zapuščenih živali je zavetišče pripravilo sprehode psov, voden ogled zavetišča in predstavitev živali. Dogodek je potekal od 11.00 do 17.00.",
      id: "event-1"
    },
    {
      date: "18. december 2024",
      title: "Dobrodelni srečelov",
      summary: "Študentje FKBV so organizirali zbiranje sredstev za zavetišče. Obiskovalci so prejeli nagrade in darila v zameno za donacije.",
      id: "event-2"
    },
    {
      date: "4. oktober 2024",
      title: "Dan odprtih vrat",
      summary: "Zavetišče je obiskovalcem odprlo vrata in predstavilo življenje živali v zavetišču ter možnosti posvojitve in prostovoljstva.",
      id: "event-3"
    }
  ];
  
  const newsItems: NewsOrEventItem[] = [
    {
      date: "Marec 2025",
      title: "Zavetišče opozarja na spremembe zakona",
      summary: "Vodstvo zavetišča opozarja, da nove zakonske spremembe lahko ogrozijo zaščito živali in kakovost posvojitev.",
      id: "news-1",
      source: {
        name: "Večer",
        url: "https://www.vecer.com/slovenija/zavetisce-pozor-zakon-2025"
      }
    },
    {
      date: "Februar 2025",
      title: "Kritike glede posvojitev",
      summary: "V medijih so se pojavile kritike na dolge postopke posvojitev. Zavetišče je pojasnilo, da gre za zagotavljanje varnosti in zdravja živali.",
      id: "news-2",
      source: {
        name: "Maribor24",
        url: "https://maribor24.si/lokalno/kritike-na-posvojitve-psi-maribor"
      }
    },
    {
      date: "Julij 2024",
      title: "Prenapolnjenost z mačkami",
      summary: "V zavetišču je bilo več kot 67 mačk – dvakrat več od zmogljivosti. Zavetišče je začasno omejilo sprejem novih mačk.",
      id: "news-3",
      source: {
        name: "Lokalec",
        url: "https://www.lokalec.si/novice/zavetisce-maribor-polno-mack/"
      }
    },
    {
      date: "Julij 2024",
      title: "SMS Donacije",
      summary: "Za podporo živali je bil zagnan SMS program z geslom \"AZILMB5\" na 1919 (donacija 5 €).",
      id: "news-4"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Prosimo, vnesite svoj e-naslov.");
      return;
    }
    
    if (!gdprConsent) {
      toast.error("Potrebujemo vaše soglasje za obdelavo osebnih podatkov.");
      return;
    }
    
    toast.success("Uspešno ste se prijavili na e-novice!");
    setEmail("");
    setGdprConsent(false);
  };

  const shareItem = (item: NewsOrEventItem, platform: string) => {
    const url = window.location.href;
    const text = `${item.title} - Zavetišče za živali Maribor`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          toast.success("Povezava kopirana v odložišče!");
        }).catch(() => {
          toast.error("Kopiranje povezave ni uspelo.");
        });
        break;
      default:
        break;
    }
  };

  const sharePage = () => {
    const url = window.location.href;
    const text = "Novice & Dogodki - Zavetišče za živali Maribor";
    
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Povezava kopirana v odložišče!");
    }).catch(() => {
      toast.error("Kopiranje povezave ni uspelo.");
    });
  };
  
  return (
    <Layout>
      <Section className="bg-white">
        <AnimatedWrapper animation="fade-in" delay={100}>
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-6">
              <Newspaper className="w-6 h-6 text-teal-600 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-teal-800">Novice & Dogodki</h1>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="dogodki" className="w-full">
                  <TabsList className="w-full bg-teal-50 mb-6">
                    <TabsTrigger value="dogodki" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-teal-700">
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      Dogodki
                    </TabsTrigger>
                    <TabsTrigger value="novice" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-teal-700">
                      <Newspaper className="w-4 h-4 mr-2" />
                      Novice
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="dogodki" className="bg-white rounded-lg p-6 shadow-sm border border-teal-100">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-teal-800 flex items-center">
                        <CalendarDays className="w-5 h-5 text-teal-600 mr-2" />
                        Prihajajoči dogodki
                      </h2>
                      
                      {upcomingEvents.length > 0 ? (
                        <div className="mt-4 space-y-4">
                          {upcomingEvents.map((event) => (
                            <div key={event.id} className="p-4 border border-teal-100 rounded-lg hover:border-teal-200 transition-colors">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-semibold text-teal-800 flex items-center">
                                    <Calendar className="w-4 h-4 text-teal-500 mr-2" />
                                    {event.date}
                                  </div>
                                  <h3 className="text-lg font-bold mt-1 mb-2">{event.title}</h3>
                                  <p className="text-gray-700">{event.summary}</p>
                                </div>
                              </div>
                              <div className="mt-3 flex space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => shareItem(event, 'facebook')} 
                                  className="text-blue-600 border-blue-200 hover:bg-blue-50"
                                >
                                  <Facebook className="w-4 h-4 mr-1" />
                                  Deli
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => shareItem(event, 'twitter')} 
                                  className="text-sky-500 border-sky-200 hover:bg-sky-50"
                                >
                                  <Twitter className="w-4 h-4 mr-1" />
                                  Tweet
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => shareItem(event, 'copy')}
                                >
                                  Kopiraj povezavo
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 p-5 bg-teal-50 rounded-lg text-center">
                          <p className="text-teal-800">
                            Trenutno ni napovedanih dogodkov. Vabimo vas, da se prijavite na e-novice in ostanete na tekočem!
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div>
                      <h2 className="text-xl font-bold text-teal-800 flex items-center">
                        <Calendar className="w-5 h-5 text-teal-600 mr-2" />
                        Pretekli dogodki
                      </h2>
                      
                      <div className="mt-4 space-y-4">
                        {pastEvents.map((event) => (
                          <div key={event.id} className="p-4 border border-teal-100 rounded-lg hover:border-teal-200 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold text-teal-700 flex items-center">
                                  <PawPrint className="w-4 h-4 text-teal-500 mr-2" />
                                  {event.date}
                                </div>
                                <h3 className="text-lg font-bold mt-1 mb-2">{event.title}</h3>
                                <p className="text-gray-700">{event.summary}</p>
                              </div>
                            </div>
                            <div className="mt-3 flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => shareItem(event, 'facebook')} 
                                className="text-blue-600 border-blue-200 hover:bg-blue-50"
                              >
                                <Facebook className="w-4 h-4 mr-1" />
                                Deli
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => shareItem(event, 'twitter')} 
                                className="text-sky-500 border-sky-200 hover:bg-sky-50"
                              >
                                <Twitter className="w-4 h-4 mr-1" />
                                Tweet
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => shareItem(event, 'copy')}
                              >
                                Kopiraj povezavo
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="novice" className="bg-white rounded-lg p-6 shadow-sm border border-teal-100">
                    <h2 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                      <Newspaper className="w-5 h-5 text-teal-600 mr-2" />
                      Medijske novice
                    </h2>
                    
                    <div className="space-y-4">
                      {newsItems.map((item) => (
                        <div key={item.id} className="p-4 border border-teal-100 rounded-lg hover:border-teal-200 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold text-teal-700 flex items-center">
                                <Calendar className="w-4 h-4 text-teal-500 mr-2" />
                                {item.date}
                              </div>
                              <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
                              <p className="text-gray-700">{item.summary}</p>
                              
                              {item.source && (
                                <a 
                                  href={item.source.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="mt-2 mb-3 inline-flex items-center text-teal-600 hover:text-teal-800 hover:font-semibold transition-all"
                                >
                                  <Newspaper className="w-4 h-4 mr-1" />
                                  Vir: {item.source.name}
                                  <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                              )}
                            </div>
                          </div>
                          <div className="mt-3 flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => shareItem(item, 'facebook')} 
                              className="text-blue-600 border-blue-200 hover:bg-blue-50"
                            >
                              <Facebook className="w-4 h-4 mr-1" />
                              Deli
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => shareItem(item, 'twitter')} 
                              className="text-sky-500 border-sky-200 hover:bg-sky-50"
                            >
                              <Twitter className="w-4 h-4 mr-1" />
                              Tweet
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => shareItem(item, 'copy')}
                            >
                              Kopiraj povezavo
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="text-right mt-6">
                  <Button onClick={sharePage} variant="outline" className="text-teal-700 border-teal-200">
                    Deli to stran
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                  <h3 className="text-xl font-bold text-teal-800 mb-4">Prijava na e-novice</h3>
                  <p className="text-teal-700 mb-4">Bodite obveščeni o vseh dogodkih in novicah iz zavetišča.</p>
                  
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Vnesite svoj e-naslov"
                        className="w-full px-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="gdpr"
                        className="mt-1"
                        checked={gdprConsent}
                        onChange={() => setGdprConsent(!gdprConsent)}
                      />
                      <label htmlFor="gdpr" className="ml-2 text-sm text-gray-700">
                        Strinjam se s pogoji uporabe in dovoljujem obdelavo osebnih podatkov za namen prejemanja e-novic.
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      Prijavi se na e-novice
                    </Button>
                  </form>
                </div>
                
                <div className="mt-6 bg-white p-6 rounded-lg border border-teal-100 shadow-sm">
                  <h3 className="text-xl font-bold text-teal-800 mb-4">Povezane vsebine</h3>
                  
                  <ul className="space-y-3">
                    <li>
                      <a href="/o-nas" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <PawPrint className="w-4 h-4 mr-2" />
                        O nas
                      </a>
                    </li>
                    <li>
                      <a href="/kontakt" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <PawPrint className="w-4 h-4 mr-2" />
                        Kontaktirajte nas
                      </a>
                    </li>
                    <li>
                      <a href="/donacije" className="text-teal-600 hover:text-teal-800 flex items-center">
                        <PawPrint className="w-4 h-4 mr-2" />
                        Kako pomagati
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </Section>
    </Layout>
  );
};

export default NewsAndEvents;
