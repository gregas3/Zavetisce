
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
import { dogs, Dog } from "@/data/dogsData";
import ShareAnimalDialog from "@/components/shared/ShareAnimalDialog";

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
    <Layout>
      <Helmet>
        <title>Posvojitev psov | Zavetišče za živali Maribor</title>
        <meta name="description" content="Spoznajte pse, ki so na voljo za posvojitev v Zavetišču za živali Maribor. Najdite svojega novega štirinožnega prijatelja." />
      </Helmet>
      
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
    </Layout>
  );
};

interface DogCardProps {
  dog: Dog;
}

const DogCard = ({ dog }: DogCardProps) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/posvojitev/psi/${dog.id}`);
  };

  // Determine if the dog has a video (for demo purposes, we'll show it for some dogs)
  const hasVideo = dog.id % 2 === 0;
  
  return (
    <Card 
      className="overflow-hidden group hover-lift transition-normal h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={dog.image}
          alt={dog.name}
          className="object-cover w-full h-full transition-normal group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <div onClick={(e) => e.stopPropagation()}>
            <ShareAnimalDialog
              animalName={dog.name}
              animalType="pes"
              animalId={dog.id}
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
          <Link to={`/posvojitev/psi/${dog.id}`} onClick={(e) => e.stopPropagation()}>
            Več informacij
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DogsAdoption;
