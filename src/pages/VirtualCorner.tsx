import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { CreditCard, Users, Video, Gift, Copy, CheckCircle, ExternalLink } from 'lucide-react';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { useToast } from "@/hooks/use-toast";
const VirtualCorner = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState<'card' | 'bank'>('card');
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [bankDetailsCopied, setBankDetailsCopied] = useState<string | null>(null);
  const {
    toast
  } = useToast();

  // Bank transfer details
  const bankDetails = {
    recipient: 'Javno podjetje Snaga d.o.o.',
    iban: 'SI56 0451 5000 0175 787',
    purposeCode: 'CHAR',
    reference: 'Donacija zavetišču'
  };
  const handleStripePayment = () => {
    setPaymentInProgress(true);

    // Simulate payment process
    setTimeout(() => {
      setPaymentInProgress(false);
      toast({
        title: "Plačilo uspešno",
        description: "Hvala za vašo podporo! Prejeli boste potrdilo po e-pošti.",
        variant: "default"
      });
    }, 1500);
  };
  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setBankDetailsCopied(field);
    toast({
      title: "Kopirano",
      description: `${field} je bil kopiran v odložišče.`,
      variant: "default"
    });
    setTimeout(() => setBankDetailsCopied(null), 3000);
  };
  return <Layout>
      <Helmet>
        <title>Virtualen kotiček | Zavetišče za živali Maribor</title>
        <meta name="description" content="Postanite član Zavetišča za živali Maribor in podprite naše živali. Doživite zavetišče skozi oči psa s 360° izkušnjo." />
      </Helmet>

      <main className="min-h-screen pt-24 py-0">
        {/* Hero Section */}
        <Section title="Virtualen kotiček" description="Doživite zavetišče na nov način in podprite naše poslanstvo" centered className="pt-24 md:pt-32" animation="fade-in-up">
          {/* Membership Section */}
          <AnimatedWrapper animation="fade-in" delay={100}>
            <Card className="glass-card mb-16 overflow-hidden relative max-w-5xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-teal-500" />
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="text-teal-600" />
                  <CardTitle className="text-2xl font-bold text-teal-800">Postanite član Zavetišča za živali Maribor</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Postanite del našega poslanstva in podpirajte živali Zavetišča za živali Maribor s članstvom.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-teal-50/70 p-5 rounded-lg">
                  <p className="text-lg mb-4">
                    Vaša letna članarina v višini 30€ neposredno podpira oskrbo, hrano in zdravljenje naših živali v zavetišču.
                  </p>
                  <div className="flex items-center gap-3 bg-teal-100/50 p-3 rounded-md">
                    <Gift className="text-teal-600 flex-shrink-0" />
                    <p className="font-medium">
                      Ob včlanitvi vsak član prejme darilno majico z logotipom našega zavetišča kot znak zahvale.
                    </p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-4 flex items-center gap-2">
                    <CreditCard className="text-teal-600" />
                    Plačilne možnosti
                  </h3>
                  
                  <Tabs value={activePaymentMethod} onValueChange={value => setActivePaymentMethod(value as 'card' | 'bank')} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="card" className="text-base">Plačilna kartica</TabsTrigger>
                      <TabsTrigger value="bank" className="text-base">Bančno nakazilo</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="card">
                      <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm space-y-4">
                        <p>
                          Za hitro in enostavno plačilo z uporabo kreditne ali debetne kartice kliknite spodaj.
                        </p>
                        <div className="flex justify-center mt-4">
                          <Button variant="teal" size="lg" className="w-full md:w-auto" onClick={handleStripePayment} disabled={paymentInProgress}>
                            <CreditCard className="mr-2" /> 
                            {paymentInProgress ? "Obdelava..." : "Plačaj s kartico"}
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="bank">
                      <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
                        <p className="mb-4">
                          Za bančno nakazilo uporabite spodnje podatke:
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                            <div>
                              <p className="text-sm text-gray-600">Prejemnik:</p>
                              <p className="font-medium">{bankDetails.recipient}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.recipient, 'Prejemnik')} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                              {bankDetailsCopied === 'Prejemnik' ? <CheckCircle size={18} /> : <Copy size={18} />}
                            </Button>
                          </div>
                          
                          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                            <div>
                              <p className="text-sm text-gray-600">IBAN:</p>
                              <p className="font-medium font-mono">{bankDetails.iban}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.iban, 'IBAN')} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                              {bankDetailsCopied === 'IBAN' ? <CheckCircle size={18} /> : <Copy size={18} />}
                            </Button>
                          </div>
                          
                          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                            <div>
                              <p className="text-sm text-gray-600">Namen plačila:</p>
                              <p className="font-medium">{bankDetails.purposeCode}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.purposeCode, 'Namen plačila')} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                              {bankDetailsCopied === 'Namen plačila' ? <CheckCircle size={18} /> : <Copy size={18} />}
                            </Button>
                          </div>
                          
                          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                            <div>
                              <p className="text-sm text-gray-600">Sklic:</p>
                              <p className="font-medium">{bankDetails.reference}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.reference, 'Sklic')} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                              {bankDetailsCopied === 'Sklic' ? <CheckCircle size={18} /> : <Copy size={18} />}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="bg-teal-50 p-3 rounded-md text-sm text-teal-700">
                          <p>Po izvedbi nakazila nam prosimo pošljite potrdilo na <strong>zavetisce.mb@snaga-mb.si</strong>, da vam lahko pošljemo darilno majico.</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>

          {/* 360° Experience Section */}
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
        </Section>
      </main>
    </Layout>;
};
export default VirtualCorner;