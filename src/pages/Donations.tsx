import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, SmartphoneNfc, ShoppingBag, AlertCircle, Copy, Check, Bitcoin, Wallet, CreditCard, Users, Gift } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { toast } from "@/components/ui/use-toast";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import CardDonationForm from "@/components/donations/CardDonationForm";
import { Separator } from "@/components/ui/separator";

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

const CryptoAddresses = [
  {
    currency: "Bitcoin (BTC)",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    icon: Bitcoin
  },
  {
    currency: "Ethereum (ETH)",
    address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    icon: Wallet
  }
];

const Donations = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState<'card' | 'bank'>('card');
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [bankDetailsCopied, setBankDetailsCopied] = useState<string | null>(null);
  const [highlightMembership, setHighlightMembership] = useState(false);
  const location = useLocation();
  
  const bankDetails = {
    recipient: 'Javno podjetje Snaga d.o.o.',
    iban: 'SI56 0451 5000 0175 787',
    purposeCode: 'CHAR',
    reference: 'Donacija zavetišču'
  };

  useEffect(() => {
    if (location.hash === '#clanarina') {
      const membershipSection = document.getElementById('clanarina');
      if (membershipSection) {
        setTimeout(() => {
          membershipSection.scrollIntoView({ behavior: 'smooth' });
          setHighlightMembership(true);
          setTimeout(() => setHighlightMembership(false), 2000);
        }, 100);
      }
    }
  }, [location.hash]);

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

  const handleStripePayment = () => {
    setPaymentInProgress(true);

    setTimeout(() => {
      setPaymentInProgress(false);
      toast({
        title: "Plačilo uspešno",
        description: "Hvala za vašo podporo! Prejeli boste potrdilo po e-pošti.",
        variant: "default"
      });
    }, 1500);
  };

  return (
    <Layout>
      <Helmet>
        <title>Donacije | Zavetišče za živali Maribor</title>
        <meta name="description" content="Podprite zavetišče za živali Maribor z denarnimi in materialnimi donacijami. Vsak prispevek pomaga živalim v stiski." />
      </Helmet>
      
      <main className="min-h-screen pt-24 pb-16">
        <Section 
          title="Donacije" 
          description="Vaša podpora je za nas zelo pomembna. S pomočjo donacij lahko zagotovimo boljše pogoje za živali v našem zavetišču ter jim nudimo ustrezno oskrbo."
          centered
          className="pt-12 pb-8"
        >
          <Tabs defaultValue="material" className="w-full max-w-4xl mx-auto">
            <TabsList className="w-full mb-8 h-auto p-1 flex flex-wrap">
              <TabsTrigger value="material" className="flex-1 py-3">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Materialne donacije
              </TabsTrigger>
              <TabsTrigger value="financial" className="flex-1 py-3">
                <Heart className="mr-2 h-4 w-4" />
                Finančne donacije
              </TabsTrigger>
              <TabsTrigger value="sms" className="flex-1 py-3">
                <SmartphoneNfc className="mr-2 h-4 w-4" />
                SMS donacije
              </TabsTrigger>
              <TabsTrigger value="crypto" className="flex-1 py-3">
                <Bitcoin className="mr-2 h-4 w-4" />
                Kripto donacije
              </TabsTrigger>
            </TabsList>
            
            <AnimatedWrapper animation="fade-in">
              <TabsContent value="material">
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
                    
                    <div className="bg-[#f0f9f7] p-6 rounded-lg border border-[#dff0ed]">
                      <h3 className="text-lg font-semibold mb-2">Doniraj s kartico</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Donirajte enostavno s svojo kartico – hitro, varno in neposredno preko spleta.
                      </p>
                      
                      {showCardForm ? (
                        <CardDonationForm />
                      ) : (
                        <Button 
                          onClick={() => setShowCardForm(true)}
                          variant="primary"
                          className="w-full sm:w-auto"
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Doniraj s kartico
                        </Button>
                      )}
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
              
              <TabsContent value="crypto" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Kripto donacije</CardTitle>
                    <CardDescription>
                      Podprite naše zavetišče z donacijami v kriptovalutah. Preprosto skenirajte QR kodo ali kopirajte naslov denarnice.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {CryptoAddresses.map((crypto, index) => (
                        <div key={index} className="bg-[#f3fbef] p-6 rounded-lg border border-[#e4f4df]">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-full bg-teal-100">
                              <crypto.icon className="h-6 w-6 text-teal-700" />
                            </div>
                            <h3 className="font-semibold text-lg">{crypto.currency}</h3>
                          </div>
                          
                          <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-1">
                              <p className="text-sm text-muted-foreground">Naslov denarnice:</p>
                              <div className="flex items-center gap-2">
                                <p className="font-mono text-xs md:text-sm break-all bg-white p-2 rounded border">{crypto.address}</p>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="h-8 p-2 flex-shrink-0"
                                  onClick={() => handleCopy(crypto.address, crypto.currency)}
                                >
                                  {copied === crypto.currency ? <Check size={16} /> : <Copy size={16} />}
                                </Button>
                              </div>
                            </div>
                            
                            <div className="flex justify-center mt-4">
                              <div className="bg-white p-4 rounded-lg border">
                                <img 
                                  src={`https://chart.googleapis.com/chart?cht=qr&chl=${crypto.address}&chs=200x200&choe=UTF-8&chld=L|2`} 
                                  alt={`QR koda za ${crypto.currency}`}
                                  className="w-32 h-32"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="rounded-lg border p-4 bg-amber-50 border-amber-100 mt-6">
                      <div className="flex gap-3">
                        <div className="mt-0.5">
                          <AlertCircle className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-800">Pomembno obvestilo</h3>
                          <p className="text-sm text-amber-700 mt-1">
                            Pred izvedbo kripto donacije preverite, ali je naslov pravilen. Za več informacij o donacijah v kriptovalutah nas lahko kontaktirate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </AnimatedWrapper>
          </Tabs>
          
          <AnimatedWrapper animation="fade-in" delay={300}>
            <Card 
              id="clanarina" 
              className={`mt-16 overflow-hidden relative max-w-4xl mx-auto border-teal-100 bg-white/95 transition-all duration-1000 ${
                highlightMembership ? 'shadow-xl shadow-teal-200/60 border-teal-300 ring-2 ring-teal-300/50' : ''
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-teal-500 ${
                highlightMembership ? 'h-2' : ''
              }`} />
              
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-teal-800">
                  <Users className="text-teal-600" />
                  Postanite član Zavetišča za živali Maribor
                </CardTitle>
                <CardDescription className="text-base">
                  Postanite del našega poslanstva in podpirajte živali Zavetišča za živali Maribor s članstvom.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-6 items-center">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg w-full border border-teal-200 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                      <div className="bg-teal-600 text-white px-5 py-6 rounded-lg text-center shadow-md">
                        <div className="font-bold text-4xl">30€</div>
                        <div className="text-sm uppercase mt-1 font-medium">Letna članarina</div>
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-lg font-medium text-teal-800 mb-3">
                          Vaša letna članarina neposredno podpira oskrbo, hrano in zdravljenje naših živali v zavetišču.
                        </p>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-md border border-teal-200">
                          <Gift className="text-teal-600 flex-shrink-0 h-5 w-5" />
                          <p className="text-sm font-medium text-teal-700">
                            Ob včlanitvi vsak član prejme <span className="font-bold">darilno majico</span> z logotipom našega zavetišča kot znak zahvale.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center py-6">
                    <div className={`relative group membership-badge ${highlightMembership ? 'animate-bounce-once' : ''}`}>
                      <img 
                        src="/public/lovable-uploads/209e6d66-b0ab-4f03-aa3d-ac5958ea9e7b.png" 
                        alt="Official 2025 Member Badge – Animal Shelter Maribor" 
                        className={`w-[200px] md:w-[240px] max-w-full h-auto transition-transform duration-300 ${
                          highlightMembership ? 'scale-110' : ''
                        }`}
                      />
                      <div className="absolute inset-0 rounded-full bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                
                <style>{`
                  @keyframes gentle-pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                  }
                  
                  @keyframes bounce-once {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-20px); }
                    60% { transform: translateY(-10px); }
                  }
                  
                  .membership-badge {
                    animation: gentle-pulse 3s infinite ease-in-out;
                  }
                  
                  .animate-bounce-once {
                    animation: bounce-once 1.5s ease-in-out;
                  }
                  
                  .membership-badge:hover {
                    animation-play-state: paused;
                  }
                `}</style>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-4 flex items-center gap-2">
                    <CreditCard className="text-teal-600" />
                    Plačilne možnosti
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
                      <h4 className="text-lg font-medium mb-3 text-teal-800">Plačilna kartica</h4>
                      <p className="mb-4">
                        Za hitro in enostavno plačilo z uporabo kreditne ali debetne kartice kliknite spodaj.
                      </p>
                      <div className="flex justify-center mt-4">
                        <Button variant="teal" size="lg" onClick={handleStripePayment} disabled={paymentInProgress}>
                          <CreditCard className="mr-2" /> 
                          {paymentInProgress ? "Obdelava..." : "Plačaj s kartico"}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
                      <h4 className="text-lg font-medium mb-3 text-teal-800">Bančno nakazilo</h4>
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
                            {bankDetailsCopied === 'Prejemnik' ? <Check size={18} /> : <Copy size={18} />}
                          </Button>
                        </div>
                        
                        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                          <div>
                            <p className="text-sm text-gray-600">IBAN:</p>
                            <p className="font-medium font-mono">{bankDetails.iban}</p>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.iban, 'IBAN')} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                            {bankDetailsCopied === 'IBAN' ? <Check size={18} /> : <Copy size={18} />}
                          </Button>
                        </div>
                        
                        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                          <div>
                            <p className="text-sm text-gray-600">Namen plačila:</p>
                            <p className="font-medium">{bankDetails.purposeCode}</p>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.purposeCode, 'Namen plačila')} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                            {bankDetailsCopied === 'Namen plačila' ? <Check size={18} /> : <Copy size={18} />}
                          </Button>
                        </div>
                        
                        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                          <div>
                            <p className="text-sm text-gray-600">Sklic:</p>
                            <p className="font-medium">{bankDetails.reference}</p>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.reference, 'Sklic')} className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                            {bankDetailsCopied === 'Sklic' ? <Check size={18} /> : <Copy size={18} />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-teal-50 p-3 rounded-md text-sm text-teal-700">
                        <p>Po izvedbi nakazila nam prosimo pošljite potrdilo na <strong>zavetisce.mb@snaga-mb.si</strong>, da vam lahko pošljemo darilno majico.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </Section>
      </main>
    </Layout>
  );
};

export default Donations;
