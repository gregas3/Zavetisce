
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Search, Filter, PawPrint, Cat, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { Animal } from "@/data/animalsData";
import { searchAnimals, getAnimalProfileUrl } from "@/utils/searchUtils";
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");
  const [searchInput, setSearchInput] = useState(query);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        // Set search input to current query
        setSearchInput(query);
        
        // Get search results
        const searchResults = searchAnimals(query);
        setResults(searchResults);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ query: searchInput });
    }
  };

  // Filter results based on selected animal type
  const filteredResults = results.filter(animal => {
    if (filterType === "all") return true;
    return animal.type === filterType;
  });

  return (
    <Layout>
      <Helmet>
        <title>Iskanje: {query} | Zavetišče za živali Maribor</title>
        <meta name="description" content={`Rezultati iskanja za "${query}" - Zavetišče za živali Maribor`} />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12">
        <Section>
          <AnimatedWrapper animation="fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-2">
                  Rezultati iskanja
                </h1>
                <p className="text-gray-600">
                  {query ? 
                    `Iskalni niz: "${query}"` : 
                    "Vnesite iskalni niz za iskanje po živalih"}
                </p>
              </div>

              <form onSubmit={handleSearch} className="mb-8">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Išči po imenu, pasmi, značilnostih..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="pl-10 pr-4 py-2"
                    />
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
                  </div>
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                    Išči
                  </Button>
                </div>
              </form>

              <div className="mb-6">
                <ToggleGroup 
                  type="single" 
                  value={filterType} 
                  onValueChange={(value) => value && setFilterType(value)} 
                  className={`flex ${isMobile ? 'flex-wrap justify-center mb-4' : 'gap-2 justify-center'}`}
                >
                  <ToggleGroupItem 
                    value="all" 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 ${isMobile ? 'flex-grow my-1 min-w-[80px] h-10' : 'min-w-24 px-4 rounded-md'} ${filterType === 'all' ? 'bg-teal-100 text-teal-800 border-teal-200' : 'bg-white'}`}
                  >
                    <PawPrint size={16} />
                    <span>Vse živali</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="pes" 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 ${isMobile ? 'flex-grow my-1 min-w-[80px] h-10' : 'min-w-24 px-4 rounded-md'} ${filterType === 'pes' ? 'bg-teal-100 text-teal-800 border-teal-200' : 'bg-white'}`}
                  >
                    <Dog size={16} />
                    <span>Psi</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="mačka" 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 ${isMobile ? 'flex-grow my-1 min-w-[80px] h-10' : 'min-w-24 px-4 rounded-md'} ${filterType === 'mačka' ? 'bg-teal-100 text-teal-800 border-teal-200' : 'bg-white'}`}
                  >
                    <Cat size={16} />
                    <span>Mačke</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <Skeleton className="h-48 w-full" />
                      <CardContent className="p-4">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2 mb-1" />
                        <Skeleton className="h-4 w-2/3 mb-1" />
                        <Skeleton className="h-4 w-full mt-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : filteredResults.length > 0 ? (
                <div>
                  <p className="text-gray-600 mb-4">
                    Najdenih rezultatov: <strong>{filteredResults.length}</strong>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResults.map((animal) => (
                      <AnimatedWrapper key={`${animal.type}-${animal.id}`} animation="fade-in" className="h-full">
                        <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <div className="relative h-48 overflow-hidden bg-teal-50">
                            <img 
                              src={animal.image} 
                              alt={animal.name}
                              className="w-full h-full object-cover"
                            />
                            <Badge 
                              variant="secondary" 
                              className={`absolute top-2 right-2 ${
                                animal.type === "pes" ? "bg-blue-100 text-blue-800" : "bg-pink-100 text-pink-800"
                              }`}
                            >
                              {animal.type === "pes" ? "Pes" : "Mačka"}
                            </Badge>
                          </div>
                          
                          <CardContent className="p-4">
                            <h3 className="text-xl font-bold text-teal-800 mb-1">
                              {animal.name}
                            </h3>
                            
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-3 text-sm">
                              {animal.breed && (
                                <div>
                                  <span className="text-gray-500">Pasma:</span> {animal.breed}
                                </div>
                              )}
                              <div>
                                <span className="text-gray-500">Starost:</span> {animal.age}
                              </div>
                              <div>
                                <span className="text-gray-500">Spol:</span> {animal.gender}
                              </div>
                              <div>
                                <span className="text-gray-500">Barva:</span> {animal.color}
                              </div>
                            </div>
                            
                            <p className="text-gray-600 mb-3 line-clamp-2">
                              {animal.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                              {animal.characteristics.slice(0, 3).map((trait, i) => (
                                <Badge key={i} variant="outline" className="bg-teal-50">
                                  {trait}
                                </Badge>
                              ))}
                              {animal.characteristics.length > 3 && (
                                <Badge variant="outline" className="bg-teal-50">
                                  +{animal.characteristics.length - 3}
                                </Badge>
                              )}
                            </div>
                            
                            <Button 
                              variant="default" 
                              size="sm" 
                              className="w-full mt-2"
                              onClick={() => window.location.href = getAnimalProfileUrl(animal)}
                            >
                              Oglej si profil
                            </Button>
                          </CardContent>
                        </Card>
                      </AnimatedWrapper>
                    ))}
                  </div>
                </div>
              ) : (
                <AnimatedWrapper animation="fade-in" className="text-center py-12">
                  <div className="flex justify-center mb-4">
                    <Search size={48} className="text-gray-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Ni rezultatov za '{query}'
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Poskusite z drugim imenom ali opisom.
                  </p>
                  <Button variant="outline" onClick={() => setSearchParams({})}>
                    Ponastavi iskanje
                  </Button>
                </AnimatedWrapper>
              )}
            </div>
          </AnimatedWrapper>
        </Section>
      </div>
    </Layout>
  );
};

export default SearchResults;
