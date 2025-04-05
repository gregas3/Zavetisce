
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Play } from 'lucide-react';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cats } from "@/data/catsData";
import ShareAnimalDialog from "@/components/shared/ShareAnimalDialog";

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
        cat.color.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query) ||
        cat.characteristics.some(char => char.toLowerCase().includes(query))
    );
    
    setFilteredCats(filtered);
  };

  return (
    <Layout>
      <Helmet>
        <title>Posvojitev mačk | Zavetišče za živali Maribor</title>
        <meta name="description" content="Spoznajte mačke, ki so na voljo za posvojitev v Zavetišču za živali Maribor. Najdite svojega novega mucka ali muco." />
      </Helmet>
      
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
    </Layout>
  );
};

interface CatCardProps {
  cat: {
    id: number;
    name: string;
    color: string;
    age: string;
    gender: string;
    image: string;
    description: string;
    characteristics: string[];
    vaccinated: boolean;
    neutered: boolean;
    goodWith: string[];
    videos?: {
      thumbnail: string;
      url: string;
      title: string;
    }[];
  };
}

const CatCard = ({ cat }: CatCardProps) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/posvojitev/mačke/${cat.id}`);
  };
  
  // Check if the cat has videos
  const hasVideo = cat.videos && cat.videos.length > 0;
  
  return (
    <Card 
      className="overflow-hidden group hover-lift transition-normal h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={cat.image}
          alt={cat.name}
          className="object-cover w-full h-full transition-normal group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <div onClick={(e) => e.stopPropagation()}>
            <ShareAnimalDialog
              animalName={cat.name}
              animalType="mačka"
              animalId={cat.id}
            />
          </div>
        </div>
        
        {hasVideo && (
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-primary/90 backdrop-blur-sm text-white flex items-center gap-1 hover:bg-primary cursor-pointer px-3 py-1">
              <Play size={14} />
              Video
            </Badge>
          </div>
        )}
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
          {cat.color} • {cat.age}
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
          <Link to={`/posvojitev/mačke/${cat.id}`} onClick={(e) => e.stopPropagation()}>
            Več informacij
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatsAdoption;
