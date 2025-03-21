import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Heart } from 'lucide-react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/shared/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Mock data for dogs
const dogs = [
  {
    id: 7,
    name: "Ajša",
    breed: "Mešanec",
    age: "6 mesecev",
    gender: "samica",
    size: "srednja",
    image: "/lovable-uploads/99f635b5-3797-485c-be8f-e76012c87d6f.png",
    description: "Ajša je 6 mesecev stara psička, izredno igriva, čuječa in ljubezniva, seveda zaradi let tudi nagajiva, kar je popolnoma normalno za njeno starost. Trenutno tehta 20 kg, bo še zrasla in postala večja psička. Išče odgovoren in ljubeč dom, kjer ji bodo nudili dovolj pozornosti, sprehodov in igre.",
    characteristics: ["igriva", "čuječa", "ljubezniva", "nagajiva"],
    vaccinated: true,
    neutered: true,
    goodWith: ["otroci", "drugi psi"]
  },
  {
    id: 1,
    name: "Reks",
    breed: "Mešanec",
    age: "2 leti",
    gender: "samec",
    size: "srednje velik",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Reks je prijazen in energičen pes z veliko ljubezni. Rad ima dolge sprehode in igranje. Išče aktivno družino, ki mu bo nudila dovolj gibanja in pozornosti.",
    characteristics: ["prijazen", "energičen", "igriv", "družaben"],
    vaccinated: true,
    neutered: true,
    goodWith: ["otroci", "drugi psi"]
  },
  {
    id: 2,
    name: "Lara",
    breed: "Mešanec",
    age: "7 mesecev",
    gender: "samica",
    size: "manjša",
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
    description: "Lara je mladič poln energije in radovednosti, ki išče aktivno družino. Zelo je živahna in rada raziskuje novo okolico. Potrebuje veliko gibanja in stimulacije.",
    characteristics: ["živahna", "radovedna", "prijazna", "učljiva"],
    vaccinated: true,
    neutered: false,
    goodWith: ["otroci", "drugi psi", "mačke"]
  },
  {
    id: 3,
    name: "Bela",
    breed: "Labrador",
    age: "3 leta",
    gender: "samica",
    size: "velika",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Bela je prijazna in mirna psička, ki obožuje družbo in crkljanje. Zelo je nežna in potrpežljiva. Rada se crklja in uživa v mirnem okolju.",
    characteristics: ["mirna", "nežna", "potrpežljiva", "ljubeča"],
    vaccinated: true,
    neutered: true,
    goodWith: ["otroci", "starejši", "drugi psi", "mačke"]
  },
  {
    id: 4,
    name: "Max",
    breed: "Nemški ovčar",
    age: "4 leta",
    gender: "samec",
    size: "velik",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f98c748d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Max je inteligenten in zaščitniški pes, ki je zelo zvest. Je zelo pameten in se hitro uči. Potrebuje dosledno vodenje in redno aktivnost.",
    characteristics: ["inteligenten", "zvest", "zaščitniški", "aktiven"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "izkušeni lastniki"]
  },
  {
    id: 5,
    name: "Piki",
    breed: "Jack Russell terier",
    age: "1 leto",
    gender: "samec",
    size: "majhen",
    image: "https://images.unsplash.com/photo-1563321769-3100f782c24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Piki je izjemno živahen in energičen terier, ki potrebuje veliko aktivnosti. Je zelo igriv in vedno pripravljen na akcijo. Potrebuje aktivnega lastnika.",
    characteristics: ["energičen", "igriv", "inteligentan", "pogumen"],
    vaccinated: true,
    neutered: false,
    goodWith: ["aktivni ljudje", "izkušeni lastniki"]
  },
  {
    id: 6,
    name: "Luna",
    breed: "Border collie",
    age: "2 leti",
    gender: "samica",
    size: "srednja",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80",
    description: "Luna je izjemno inteligentna in delovna psička, ki potrebuje mentalne izzive. Je zelo učljiva in potrebuje veliko mentalne stimulacije. Primerna za aktivne lastnike.",
    characteristics: ["inteligentna", "delovna", "učljiva", "aktivna"],
    vaccinated: true,
    neutered: true,
    goodWith: ["aktivni ljudje", "odrasli", "drugi psi"]
  }
];

const DogsAdoption = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDogs, setFilteredDogs] = useState(dogs);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (!query) {
      setFilteredDogs(dogs);
      return;
    }
    
    const filtered = dogs.filter(
      dog => 
        dog.name.toLowerCase().includes(query) || 
        dog.breed.toLowerCase().includes(query) ||
        dog.description.toLowerCase().includes(query) ||
        dog.characteristics.some(char => char.toLowerCase().includes(query))
    );
    
    setFilteredDogs(filtered);
  };

  return (
    <>
      <Helmet>
        <title>Posvojitev psov | Zavetišče za živali Maribor</title>
        <meta name="description" content="Spoznajte pse, ki so na voljo za posvojitev v Zavetišču za živali Maribor. Najdite svojega novega štirinožnega prijatelja." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-16">
        <Section
          title="Posvojitev psa"
          description="Spoznajte naše pse, ki iščejo ljubeč dom. Vsak pes ima svojo zgodbo in posebne lastnosti. Pomagajte jim najti za vedno dom."
          className="bg-[url('/dog-pattern-light.svg')] bg-fixed bg-opacity-5"
        >
          <div className="mb-8">
            <Tabs defaultValue="vsi" className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
                <TabsList className="bg-card/50 backdrop-blur-sm">
                  <TabsTrigger value="vsi">Vsi psi</TabsTrigger>
                  <TabsTrigger value="mladiči">Mladiči</TabsTrigger>
                  <TabsTrigger value="odrasli">Odrasli psi</TabsTrigger>
                </TabsList>
                
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Išči pse..."
                    className="pl-9 w-full sm:w-64"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </div>
              
              <TabsContent value="vsi" className="m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDogs.length > 0 ? (
                    filteredDogs.map(dog => (
                      <DogCard key={dog.id} dog={dog} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground mb-2">Ni psov, ki bi ustrezali vašemu iskanju.</p>
                      <Button variant="outline" onClick={() => {
                        setSearchQuery('');
                        setFilteredDogs(dogs);
                      }}>
                        Počisti iskanje
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="mladiči" className="m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDogs
                    .filter(dog => dog.age.includes('mesec'))
                    .map(dog => (
                      <DogCard key={dog.id} dog={dog} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="odrasli" className="m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDogs
                    .filter(dog => dog.age.includes('let'))
                    .map(dog => (
                      <DogCard key={dog.id} dog={dog} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-card rounded-xl border border-border p-6 mt-12">
            <h3 className="text-xl font-bold mb-4">Postopek posvojitve</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Oglejte si profile psov in izberite tistega, ki vam je najbolj všeč.</li>
              <li>Rezervirajte termin za obisk in spoznavanje izbranega psa <Link to="/termini" className="text-primary hover:underline">preko našega sistema za rezervacije</Link>.</li>
              <li>Obiščite zavetišče ob dogovorjenem terminu in spoznajte psa.</li>
              <li>Izpolnite vprašalnik za posvojitev in opravite pogovor z našim osebjem.</li>
              <li>Po odobritvi posvojitve in plačilu pristojbine lahko odpeljete svojega novega družinskega člana domov.</li>
            </ol>
            <div className="mt-6">
              <Button asChild>
                <Link to="/posvojitev/postopek">Več o postopku posvojitve</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
};

interface DogCardProps {
  dog: {
    id: number;
    name: string;
    breed: string;
    age: string;
    gender: string;
    size: string;
    image: string;
    description: string;
    characteristics: string[];
    vaccinated: boolean;
    neutered: boolean;
    goodWith: string[];
  };
}

const DogCard = ({ dog }: DogCardProps) => {
  return (
    <Card className="overflow-hidden group hover-lift transition-normal h-full">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={dog.image}
          alt={dog.name}
          className="object-cover w-full h-full transition-normal group-hover:scale-105"
          loading="lazy"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90 hover:text-primary"
          aria-label="Dodaj med priljubljene"
        >
          <Heart size={18} />
        </Button>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-normal">
            {dog.name}
          </h3>
          <Badge variant={dog.gender === 'samec' ? 'default' : 'secondary'}>
            {dog.gender}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground mb-3">
          {dog.breed} • {dog.age} • {dog.size}
        </div>
        <p className="line-clamp-3 mb-4 text-muted-foreground">
          {dog.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {dog.characteristics.slice(0, 3).map((char, i) => (
            <Badge key={i} variant="outline" className="bg-primary/5">
              {char}
            </Badge>
          ))}
          {dog.characteristics.length > 3 && (
            <Badge variant="outline" className="bg-primary/5">
              +{dog.characteristics.length - 3}
            </Badge>
          )}
        </div>
        <Button asChild className="w-full">
          <Link to={`/posvojitev/psi/${dog.id}`}>
            Več informacij
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DogsAdoption;
