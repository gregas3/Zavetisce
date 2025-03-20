
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, SmartphoneNfc, ShoppingBag, AlertCircle, Copy, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/shared/Section";
import { toast } from "@/components/ui/use-toast";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

const DonationNeeds = [
  {
    category: "Medicinski pripomočki",
    items: [
      "Povojem v rolah (8-10cm široki)",
      "Sterilne gaze (različnih velikosti)",
      "Povoji za enkratno uporabo",
      "Fiziološka raztopina (9%)",
      "Brizge (10ml, 20ml)"
    ]
  },
  {
    category: "Tekstil",
    items: [
      "Odeje",
      "Brisače",
      "Rjuhe",
      "Posteljnina",
      "Manjše blazine brez polnila"
    ]
  },
  {
    category: "Hrana",
    items: [
      "Suha hrana za pse in mačke",
      "Konzerve za pse in mačke",
      "Priboljški za trening psov",
      "Posebna dietna hrana (po posvetu)"
    ]
  },
  {
    category: "Ostalo",
    items: [
      "Igrače za pse in mačke",
      "Peskoski za mačke",
      "Posode za hrano in vodo",
      "Transporterji",
      "Povodci in ovratnice"
    ]
  }
];

const Donations = () => {
  const [copied, setCopied] = useState<string | null>(null);
  
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast({
      title: "Kopirano v odložišče!",
      description: "Podatki so pripravljeni za uporabo.",
    });
    
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Donacije | Zavetišče za živali Maribor</title>
        <meta name="description" content="Podprite zavetišče za živali Maribor z denarnimi in materialnimi donacijami. Vsak prispevek pomaga živalim v stiski." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <Section 
          title="Donacije" 
          description="Vaša podpora je za nas zelo pomembna. S pomočjo donacij lahko zagotovimo boljše pogoje za živali v našem zavetišču ter jim nudimo ustrezno oskrbo."
          centered
          className="pt-12 pb-8"
        >
          <Tabs defaultValue="financial" className="w-full max-w-4xl mx-auto">
            <TabsList className="w-full mb-8 h-auto p-1 flex flex-wrap">
              <TabsTrigger value="financial" className="flex-1 py-3">
                <Heart className="mr-2 h-4 w-4" />
                Finančne donacije
              </TabsTrigger>
              <TabsTrigger value="sms" className="flex-1 py-3">
                <SmartphoneNfc className="mr-2 h-4 w-4" />
                SMS donacije
              </TabsTrigger>
              <TabsTrigger value="material" className="flex-1 py-3">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Materialne donacije
              </TabsTrigger>
            </TabsList>
            
            <AnimatedWrapper animation="fade-in">
              <TabsContent value="financial" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Finančne donacije</CardTitle>
                    <CardDescription>
                      S finančnimi donacijami nam pomagate pri nakupu zdravil, hrane in opreme za oskrbo živali.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-[#f3fbef] p-6 rounded-lg border border-[#e4f4df]">
                      <h3 className="text-lg font-semibold mb-2">Nakazilo na transakcijski račun</h3>
                      <div className="space-y-4">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm text-muted-foreground">Prejemnik:</p>
                          <p className="font-medium">Javno podjetje Snaga d.o.o.</p>
                        </div>
                        
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm text-muted-foreground">TRR:</p>
                          <div className="flex items-center gap-2">
                            <p className="font-mono font-medium">SI56 0451 5000 0175 787</p>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 p-2"
                              onClick={() => handleCopy("SI56 0451 5000 0175 787", "account")}
                            >
                              {copied === "account" ? <Check size={16} /> : <Copy size={16} />}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm text-muted-foreground">Koda namena:</p>
                          <p className="font-medium">CHAR</p>
                        </div>
                        
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm text-muted-foreground">Namen:</p>
                          <p className="font-medium">Donacija zavetišču</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4 bg-amber-50 border-amber-100">
                      <div className="flex gap-3">
                        <div className="mt-0.5">
                          <AlertCircle className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-800">Donacije za specifično žival</h3>
                          <p className="text-sm text-amber-700 mt-1">
                            Če želite donirati sredstva za specifično žival, prosimo, da v namen plačila navedete ime živali.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sms" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>SMS donacije</CardTitle>
                    <CardDescription>
                      Podprite nas s preprosto SMS donacijo, ki se obračuna preko vašega mobilnega operaterja.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-[#f3fbef] p-6 rounded-lg border border-[#e4f4df] text-center mb-6">
                      <p className="text-lg mb-4">Pošljite SMS s ključno besedo</p>
                      <div className="inline-block bg-teal-100 px-4 py-2 rounded-md font-mono text-xl font-bold text-teal-800 mb-4">
                        AZILMB5
                      </div>
                      <p className="text-lg mb-4">na številko</p>
                      <div className="inline-block bg-teal-800 px-4 py-2 rounded-md font-mono text-xl font-bold text-white">
                        1919
                      </div>
                    </div>
                    
                    <div className="text-center mb-8">
                      <p className="text-muted-foreground">Z enim SMS sporočilom donirate <strong>5 EUR</strong> za zavetišče</p>
                    </div>
                    
                    <div className="rounded-lg border p-4 bg-blue-50 border-blue-100">
                      <div className="flex gap-3">
                        <div className="mt-0.5">
                          <AlertCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-blue-800">Operaterji</h3>
                          <p className="text-sm text-blue-700 mt-1">
                            Storitev SMS donacij je omogočena v mobilnih omrežjih Telekom Slovenije, A1, Telemach in T-2.
                          </p>
                          <p className="text-sm text-blue-700 mt-1">
                            Cena sporočila je 5 EUR. Davek je vključen v ceno.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="material" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Materialne donacije</CardTitle>
                    <CardDescription>
                      Materialne donacije lahko kadarkoli predate v košaro pred vhodnimi vrati zavetišča. Tekstil sprejemamo samo po potrebi tako, da predhodno pokličite.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <h3 className="text-lg font-semibold">Trenutne potrebe</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {DonationNeeds.map((category, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-white">
                          <h4 className="font-medium text-lg mb-3 flex items-center">
                            <Badge variant="outline" className="mr-2 bg-teal-50 text-teal-800 hover:bg-teal-100 border-teal-200">
                              {category.category}
                            </Badge>
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="h-5 w-5 flex-shrink-0 text-teal-500">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    <div className="rounded-lg border p-4 bg-amber-50 border-amber-100 mt-6">
                      <div className="flex gap-3">
                        <div className="mt-0.5">
                          <AlertCircle className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-800">Opomba o tekstilnih donacijah</h3>
                          <p className="text-sm text-amber-700 mt-1">
                            Tekstil sprejemamo samo po potrebi. Pred donacijo tekstila nas prosimo kontaktirajte preko telefona ali elektronske pošte.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </AnimatedWrapper>
          </Tabs>
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

export default Donations;
