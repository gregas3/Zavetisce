
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

// Mock data for cats
const cats = [
  {
    id: 1,
    name: "Muri",
    breed: "Evropska kratka dlaka",
    age: "1 leto",
    gender: "samec",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    description: "Muri je igriv in radoveden mlad maček, ki se rad stiska in prede. Išče dom, kjer bo dobil veliko ljubezni in pozornosti.",
    characteristics: ["igriv", "prijazen", "radoveden", "družaben"],
    vaccinated: true,
    neutered: true,
    goodWith: ["otroci", "drugi mački"]
  },
  {
    id: 2,
    name: "Črnko",
    breed: "Evropska kratka dlaka",
    age: "2 leti",
    gender: "samec",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    description: "Črnko je eleganten črn maček, ki je samostojen, a hkrati ljubeč do ljudi. Rad opazuje okolico iz mirnega kotička.",
    characteristics: ["samostojen", "miren", "nežen", "ljubeč"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "mirno okolje"]
  },
  {
    id: 3,
    name: "Liza",
    breed: "Evropska kratka dlaka",
    age: "5 let",
    gender: "samica",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80",
    description: "Liza je umirjena odrasla mačka, ki išče miren dom, kjer bo lahko kraljevala. Rada se crklja in uživa v mirnem okolju.",
    characteristics: ["mirna", "ljubeča", "samostojna", "dostojanstvena"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "starejši", "mirno okolje"]
  },
  {
    id: 4,
    name: "Puhko",
    breed: "Perzijska mačka",
    age: "3 leta",
    gender: "samec",
    image: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Puhko je puhast in eleganten maček, ki obožuje crkljanje in mirno življenje. Potrebuje redno nego zaradi dolge dlake.",
    characteristics: ["puhast", "miren", "ljubeč", "razvajen"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "mirno okolje", "izkušeni lastniki"]
  },
  {
    id: 5,
    name: "Miša",
    breed: "Evropska kratka dlaka",
    age: "8 mesecev",
    gender: "samica",
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
    description: "Miša je živahna mlada mačka, polna energije in radovednosti. Zelo rada se igra in raziskuje. Išče aktivno družino.",
    characteristics: ["živahna", "igriva", "radovedna", "prijazna"],
    vaccinated: true,
    neutered: false,
    goodWith: ["družine", "otroci", "drugi mački"]
  },
  {
    id: 6,
    name: "Tiger",
    breed: "Evropska kratka dlaka",
    age: "1 leto",
    gender: "samec",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Tiger je energičen mlad maček s čudovitim tigrasto obarvanim kožuhom. Je zelo igriv in rad skače ter pleza.",
    characteristics: ["energičen", "igriv", "radoveden", "atletski"],
    vaccinated: true,
    neutered: true,
    goodWith: ["aktivni ljudje", "drugi mački", "otroci"]
  }
];

const CatsAdoption = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCats, setFilteredCats] = useState(cats);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (!query) {
      setFilteredCats(cats);
      return;
    }
    
    const filtered = cats.filter(
      cat => 
        cat.name.toLowerCase().includes(query) || 
        cat.breed.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query) ||
        cat.characteristics.some(char => char.toLowerCase().includes(query))
    );
    
    setFilteredCats(filtered);
  };

  return (
    <>
      <Helmet>
        <title>Posvojitev mačk | Zavetišče za živali Maribor</title>
        <meta name="description" content="Spoznajte mačke, ki so na voljo za posvojitev v Zavetišču za živali Maribor. Najdite svojega novega mucka ali muco." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-16">
        <Section
          title="Posvojitev mačke"
          description="Spoznajte naše mačke, ki iščejo ljubeč dom. Vsaka mačka ima svojo osebnost in posebne lastnosti. Pomagajte jim najti za vedno dom."
          className="bg-[url('/cat-pattern-light.svg')] bg-fixed bg-opacity-5"
        >
          <div className="mb-8">
            <Tabs defaultValue="vsi" className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
                <TabsList className="bg-card/50 backdrop-blur-sm">
                  <TabsTrigger value="vsi">Vse mačke</TabsTrigger>
                  <TabsTrigger value="mladiči">Mladiči</TabsTrigger>
                  <TabsTrigger value="odrasli">Odrasle mačke</TabsTrigger>
                </TabsList>
                
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Išči mačke..."
                    className="pl-9 w-full sm:w-64"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </div>
              
              <TabsContent value="vsi" className="m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCats.length > 0 ? (
                    filteredCats.map(cat => (
                      <CatCard key={cat.id} cat={cat} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground mb-2">Ni mačk, ki bi ustrezale vašemu iskanju.</p>
                      <Button variant="outline" onClick={() => {
                        setSearchQuery('');
                        setFilteredCats(cats);
                      }}>
                        Počisti iskanje
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="mladiči" className="m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCats
                    .filter(cat => cat.age.includes('mesec'))
                    .map(cat => (
                      <CatCard key={cat.id} cat={cat} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="odrasli" className="m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCats
                    .filter(cat => cat.age.includes('let'))
                    .map(cat => (
                      <CatCard key={cat.id} cat={cat} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-card rounded-xl border border-border p-6 mt-12">
            <h3 className="text-xl font-bold mb-4">Postopek posvojitve</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Oglejte si profile mačk in izberite tisto, ki vam je najbolj všeč.</li>
              <li>Rezervirajte termin za obisk in spoznavanje izbrane mačke <Link to="/termini" className="text-primary hover:underline">preko našega sistema za rezervacije</Link>.</li>
              <li>Obiščite zavetišče ob dogovorjenem terminu in spoznajte mačko.</li>
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

interface CatCardProps {
  cat: {
    id: number;
    name: string;
    breed: string;
    age: string;
    gender: string;
    image: string;
    description: string;
    characteristics: string[];
    vaccinated: boolean;
    neutered: boolean;
    goodWith: string[];
  };
}

const CatCard = ({ cat }: CatCardProps) => {
  return (
    <Card className="overflow-hidden group hover-lift transition-normal h-full">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={cat.image}
          alt={cat.name}
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
            {cat.name}
          </h3>
          <Badge variant={cat.gender === 'samec' ? 'default' : 'secondary'}>
            {cat.gender}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground mb-3">
          {cat.breed} • {cat.age}
        </div>
        <p className="line-clamp-3 mb-4 text-muted-foreground">
          {cat.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {cat.characteristics.slice(0, 3).map((char, i) => (
            <Badge key={i} variant="outline" className="bg-primary/5">
              {char}
            </Badge>
          ))}
          {cat.characteristics.length > 3 && (
            <Badge variant="outline" className="bg-primary/5">
              +{cat.characteristics.length - 3}
            </Badge>
          )}
        </div>
        <Button asChild className="w-full">
          <Link to={`/posvojitev/mačke/${cat.id}`}>
            Več informacij
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatsAdoption;
