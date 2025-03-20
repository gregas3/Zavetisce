
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  ChevronLeft, 
  Calendar, 
  Heart, 
  Share2, 
  Check, 
  Info, 
  MessageCircle,
  PawPrint,
  Syringe,
  Scissors
} from 'lucide-react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

// This would typically come from an API
const getDogById = (id: number) => {
  const dogs = [
    {
      id: 1,
      name: "Reks",
      breed: "Mešanec",
      age: "2 leti",
      gender: "samec",
      size: "srednje velik",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      images: [
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ],
      video: null,
      description: "Reks je prijazen in energičen pes z veliko ljubezni. Rad ima dolge sprehode in igranje. Išče aktivno družino, ki mu bo nudila dovolj gibanja in pozornosti.",
      story: "Reks je bil najden v okolici Maribora, kjer je taval sam in brez ovratnice. Ko so ga pripeljali v zavetišče, je bil nekoliko prestrašen, a se je hitro navadil na novo okolje in začel kazati svojo prijazno naravo. Reks je izredno prijazen do ljudi in se dobro razume z večino drugih psov.",
      characteristics: ["prijazen", "energičen", "igriv", "družaben", "radoveden", "zvest"],
      vaccinated: true,
      neutered: true,
      microchipped: true,
      healthStatus: "Zdrav, brez posebnosti",
      goodWith: ["otroci", "drugi psi"],
      notGoodWith: ["mačke"],
      requiresExperience: false,
      arrivalDate: "15.04.2023",
    },
    // ... add more dogs with same structure as needed
  ];
  
  return dogs.find(dog => dog.id === id) || null;
};

const DogProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  // In a real app, this would fetch data from an API
  const dog = id ? getDogById(Number(id)) : null;
  
  if (!dog) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Pes ni bil najden</h2>
          <p className="text-muted-foreground mb-6">Žal nismo našli psa s to identifikacijsko številko.</p>
          <Button asChild>
            <Link to="/posvojitev/psi">Nazaj na seznam psov</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{dog.name} | Posvojitev psa | Zavetišče za živali Maribor</title>
        <meta name="description" content={`Spoznajte ${dog.name}, ${dog.age} ${dog.breed} ${dog.gender}, ki išče nov dom. ${dog.description.substring(0, 100)}...`} />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Domov</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/posvojitev/psi">Posvojitev psov</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{dog.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col">
              <div className="aspect-video bg-accent rounded-xl overflow-hidden mb-3">
                <img 
                  src={dog.images[activeImage]} 
                  alt={`${dog.name} - ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2">
                {dog.images.map((img, index) => (
                  <button
                    key={index}
                    className={`rounded-lg overflow-hidden flex-shrink-0 transition-all ${activeImage === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${dog.name} thumbnail ${index + 1}`} 
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
                
                {/* If there's a video, show it as last thumbnail */}
                {dog.video && (
                  <button
                    className={`rounded-lg overflow-hidden flex-shrink-0 relative transition-all ${activeImage === dog.images.length ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'}`}
                    onClick={() => setActiveImage(dog.images.length)}
                  >
                    <img 
                      src={dog.images[0]} 
                      alt={`${dog.name} video thumbnail`} 
                      className="w-20 h-20 object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/80 rounded-full p-1">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-3 items-center mb-4">
                <h1 className="text-3xl sm:text-4xl font-bold">{dog.name}</h1>
                <Badge variant={dog.gender === 'samec' ? 'default' : 'secondary'} className="text-sm">
                  {dog.gender}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-6 mb-6 text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Pasma:</span> {dog.breed}
                </div>
                <div>
                  <span className="font-medium text-foreground">Starost:</span> {dog.age}
                </div>
                <div>
                  <span className="font-medium text-foreground">Velikost:</span> {dog.size}
                </div>
                <div>
                  <span className="font-medium text-foreground">Datum prihoda:</span> {dog.arrivalDate}
                </div>
              </div>
              
              <p className="text-lg mb-6">{dog.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {dog.characteristics.map((char, i) => (
                  <Badge key={i} className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    {char}
                  </Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-green-50 text-green-500 p-2 rounded-full">
                    <Syringe size={16} />
                  </div>
                  <span className={dog.vaccinated ? "text-green-700" : "text-muted-foreground line-through"}>
                    Cepljen
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-green-50 text-green-500 p-2 rounded-full">
                    <Scissors size={16} />
                  </div>
                  <span className={dog.neutered ? "text-green-700" : "text-muted-foreground line-through"}>
                    Steriliziran/Kastriran
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-green-50 text-green-500 p-2 rounded-full">
                    <Check size={16} />
                  </div>
                  <span className={dog.microchipped ? "text-green-700" : "text-muted-foreground line-through"}>
                    Čipiran
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild className="flex-1">
                  <Link to="/termini">
                    <Calendar className="mr-2 h-5 w-5" />
                    Rezerviraj termin za obisk
                  </Link>
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="info" className="mb-10">
            <TabsList className="mb-6">
              <TabsTrigger value="info">Podrobnosti</TabsTrigger>
              <TabsTrigger value="story">Zgodba</TabsTrigger>
              <TabsTrigger value="adoption">Posvojitev</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    Se dobro razume z
                  </h3>
                  <ul className="space-y-2">
                    {dog.goodWith.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {dog.notGoodWith && dog.notGoodWith.length > 0 && (
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Info className="mr-2 h-5 w-5 text-amber-500" />
                      Ni primeren za
                    </h3>
                    <ul className="space-y-2">
                      {dog.notGoodWith.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Info className="h-4 w-4 text-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-4">Zdravstveno stanje</h3>
                <p>{dog.healthStatus}</p>
                
                {dog.requiresExperience && (
                  <div className="mt-4 bg-amber-50 text-amber-800 p-4 rounded-lg">
                    <div className="font-medium mb-1">Opomba:</div>
                    <p>Ta pes potrebuje izkušenega lastnika z znanjem o psih.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="story">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-4">Zgodba {dog.name}</h3>
                <p className="whitespace-pre-line">{dog.story}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="adoption">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-4">Postopek posvojitve</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Rezervirajte termin za obisk in spoznavanje psa.</li>
                  <li>Obiščite zavetišče ob dogovorjenem terminu in spoznajte psa.</li>
                  <li>Izpolnite vprašalnik za posvojitev in opravite pogovor z našim osebjem.</li>
                  <li>Po odobritvi posvojitve in plačilu pristojbine lahko odpeljete svojega novega družinskega člana domov.</li>
                </ol>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Pristojbina za posvojitev</h4>
                  <p>Pristojbina za posvojitev psa znaša 90€ in vključuje:</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center gap-2">
                      <PawPrint className="h-4 w-4 text-primary" />
                      Mikročipiranje in vpis v centralni register
                    </li>
                    <li className="flex items-center gap-2">
                      <Syringe className="h-4 w-4 text-primary" />
                      Cepljenje proti steklini
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Razparazitenje
                    </li>
                    <li className="flex items-center gap-2">
                      <Scissors className="h-4 w-4 text-primary" />
                      Sterilizacijo/kastracijo (ali bon za storitev)
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="flex-1">
                    <Link to="/termini">
                      <Calendar className="mr-2 h-5 w-5" />
                      Rezerviraj termin za obisk
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg" asChild className="flex-1">
                    <Link to="/posvojitev/postopek">
                      <Info className="mr-2 h-5 w-5" />
                      Več o posvojitvi
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/posvojitev/psi">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Nazaj na seznam psov
              </Link>
            </Button>
            
            <Button variant="default" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Kontaktirajte nas
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default DogProfile;
