
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/shared/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { dogs, Dog } from "@/data/dogsData";
import DogCard from "@/components/dogs/DogCard";

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

export default DogsAdoption;
