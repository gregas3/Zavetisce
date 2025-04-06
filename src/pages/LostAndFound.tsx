import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, PawPrint, Calendar, Info, Plus, Cat, Dog, Mail, Building, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import LostAnimalForm from "@/components/forms/LostAnimalForm";
import FoundAnimalForm from "@/components/forms/FoundAnimalForm";
import { useIsMobile } from "@/hooks/use-mobile";

const lostPets = [
  {
    id: 1,
    name: "Max",
    type: "dog",
    breed: "Mešanec",
    color: "Rjava",
    gender: "Samec",
    age: "3 leta",
    location: "Maribor, Tabor",
    date: "2023-05-15",
    description: "Prijazen pes srednje velikosti. Ima modro ovratnico in slabo vidi na desno oko.",
    contact: "031 123 456",
    image: "/lovable-uploads/fae33d55-4b17-4bdf-b61b-c5aeb6510ffb.png",
    isFound: false
  },
  {
    id: 2,
    name: "Luna",
    type: "cat",
    breed: "Evropska kratka dlaka",
    color: "Siva tigrastа",
    gender: "Samica",
    age: "1 leto",
    location: "Maribor, Pobrežje",
    date: "2023-06-02",
    description: "Manjša mačka z belimi tačkami. Je plašna in nima ovratnice.",
    contact: "041 987 654",
    image: "/lovable-uploads/098b937d-c365-4e7b-b760-6b167ee1a376.png",
    isFound: false
  },
  {
    id: 3,
    name: "Reks",
    type: "dog",
    breed: "Nemški ovčar",
    color: "Črno-rjava",
    gender: "Samec",
    age: "5 let",
    location: "Maribor, Center",
    date: "2023-05-28",
    description: "Velik pes z rdečo ovratnico. Je prijazen, a nekoliko plašen.",
    contact: "070 456 789",
    image: "/lovable-uploads/d154fae5-9f35-4f95-9308-55b5d9599de4.png",
    isFound: true
  },
];

const foundPets = [
  {
    id: 4,
    type: "cat",
    breed: "Neznana",
    color: "Črno-bela",
    gender: "Samica",
    age: "Odrasla",
    location: "Maribor, Studenci",
    date: "2023-06-05",
    description: "Manjša mačka z belim trebuščkom in črnim hrbtom. Najdena pri trgovini Mercator.",
    contact: "051 123 789",
    image: "/lovable-uploads/855c1f57-5893-4641-9022-ed413de55b90.png",
    isFound: false
  },
  {
    id: 5,
    type: "dog",
    breed: "Mešanec manjše rasti",
    color: "Bela z rjavimi lisami",
    gender: "Samec",
    age: "Starejši",
    location: "Maribor, Tezno",
    date: "2023-06-08",
    description: "Manjši pes z modro ovratnico. Najden v parku pri osnovni šoli.",
    contact: "031 456 123",
    image: "/lovable-uploads/9ec09e1c-3793-4fa6-8dd5-808040227dae.png",
    isFound: false
  },
];

export default function LostAndFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [activeTab, setActiveTab] = useState("listings");
  const [isLostFormOpen, setIsLostFormOpen] = useState(false);
  const [isFoundFormOpen, setIsFoundFormOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const filteredLostPets = lostPets.filter(pet => {
    const matchesQuery = pet.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        pet.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        pet.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === "all") return matchesQuery;
    if (filterType === "dog") return pet.type === "dog" && matchesQuery;
    if (filterType === "cat") return pet.type === "cat" && matchesQuery;
    return matchesQuery;
  });
  
  const filteredFoundPets = foundPets.filter(pet => {
    const matchesQuery = pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        pet.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        pet.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === "all") return matchesQuery;
    if (filterType === "dog") return pet.type === "dog" && matchesQuery;
    if (filterType === "cat") return pet.type === "cat" && matchesQuery;
    return matchesQuery;
  });

  const urlParams = new URLSearchParams(window.location.search);
  const formParam = urlParams.get('form');
  
  return (
    <Layout>
      <Helmet>
        <title>Izgubljene in najdene živali | Zavetišče za živali Maribor</title>
        <meta name="description" content="Prijavite izgubljeno ali najdeno žival. Pomagamo vam najti vašega hišnega ljubljenčka ali njegov novi dom." />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 bg-gradient-to-b from-teal-50 to-teal-100/30">
        <Section
          title="Izgubljene in najdene živali"
          description="Prijavite izgubljeno ali najdeno žival. Morda lahko pomagamo vašemu hišnemu ljubljenčku najti pot domov."
          centered
          className="pb-8"
        >
          <AnimatedWrapper animation="fade-in" className="max-w-3xl mx-auto mt-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-lg border border-teal-100">
              <h3 className="text-xl font-semibold text-teal-800 mb-6">Prijavite izgubljeno ali najdeno žival</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="flex-1 py-8 flex-col h-auto bg-teal-500 hover:bg-teal-600 text-center"
                  onClick={() => setIsLostFormOpen(true)}
                >
                  <PawPrint size={32} className="mb-2" />
                  <span className="text-lg font-medium">Prijavi izgubljeno žival</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 py-8 flex-col h-auto border-teal-200 bg-white hover:bg-teal-50 text-teal-800 text-center"
                  onClick={() => setIsFoundFormOpen(true)}
                >
                  <Search size={32} className="mb-2 text-teal-600" />
                  <span className="text-lg font-medium">Prijavi najdeno žival</span>
                </Button>
              </div>
              
              <p className="text-gray-600 text-center mb-6">
                Izberite vrsto prijave, ki jo želite oddati.
              </p>
              
              <div className="text-sm text-gray-500 border-t border-teal-100 pt-4">
                <p className="mb-2">Za nujne primere pokličite našo telefonsko številko: <a href="tel:+38624801660" className="text-teal-600 font-medium">02 480 16 60</a> ali <a href="tel:+386031788822" className="text-teal-600 font-medium">031-788-822</a> (za nujne primere)</p>
                <p>Pridite do nas na naslovu: <strong>Avtomobilska ulica 25, 2000 Maribor, Slovenia</strong></p>
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-in" className="max-w-3xl mx-auto mt-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-lg border border-teal-100">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Hitri napotki za izgubljene živali:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-teal-100 rounded-full p-1">
                    <PawPrint size={16} className="text-teal-600" />
                  </div>
                  <span>Takoj obvestite najbližje zavetišče za živali in veterinarje v vaši okolici.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-teal-100 rounded-full p-1">
                    <MapPin size={16} className="text-teal-600" />
                  </div>
                  <span>Preiščite okolico, posebej tam, kjer se žival običajno zadržuje.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-teal-100 rounded-full p-1">
                    <Info size={16} className="text-teal-600" />
                  </div>
                  <span>Objavite objavo na družbenih omrežjih in lokalnih skupinah.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-teal-100 rounded-full p-1">
                    <Calendar size={16} className="text-teal-600" />
                  </div>
                  <span>Nastavite hrano in vodo na mestu, kjer je žival nazadnje videna.</span>
                </li>
              </ul>
            </div>
          </AnimatedWrapper>
        </Section>
      </div>

      <Section className="py-12">
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-teal-50">
            <TabsTrigger 
              value="listings" 
              className="flex-1 data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800"
            >
              Seznam izgubljenih in najdenih
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="listings">
            <AnimatedWrapper animation="fade-in-up" className="mb-8">
              <div className="flex flex-col gap-4 mb-8">
                <div className="w-full">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Išči po lokaciji, pasmi, opisu..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
                  </div>
                </div>
                <div className="w-full">
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
                      value="dog" 
                      variant="outline" 
                      size="sm" 
                      className={`flex items-center gap-1 ${isMobile ? 'flex-grow my-1 min-w-[80px] h-10' : 'min-w-24 px-4 rounded-md'} ${filterType === 'dog' ? 'bg-teal-100 text-teal-800 border-teal-200' : 'bg-white'}`}
                    >
                      <Dog size={16} />
                      <span>Psi</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem 
                      value="cat" 
                      variant="outline" 
                      size="sm" 
                      className={`flex items-center gap-1 ${isMobile ? 'flex-grow my-1 min-w-[80px] h-10' : 'min-w-24 px-4 rounded-md'} ${filterType === 'cat' ? 'bg-teal-100 text-teal-800 border-teal-200' : 'bg-white'}`}
                    >
                      <Cat size={16} />
                      <span>Mačke</span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fade-in">
              <div className="mb-8">
                <Tabs defaultValue="lost" className="w-full">
                  <ScrollArea className="w-full pb-4 z-0">
                    <div className="min-w-full overflow-visible">
                      <TabsList className="inline-flex mb-6 bg-teal-50 min-w-full">
                        <TabsTrigger 
                          value="lost" 
                          className="flex-1 py-3 px-4 min-w-[150px] data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800"
                        >
                          Izgubljene živali
                        </TabsTrigger>
                        <TabsTrigger 
                          value="found" 
                          className="flex-1 py-3 px-4 min-w-[150px] data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800"
                        >
                          Najdene živali
                        </TabsTrigger>
                      </TabsList>
                    </div>
                  </ScrollArea>
                  
                  <TabsContent value="lost" className="focus-visible:outline-none focus-visible:ring-0">
                    <AnimatedWrapper animation="fade-in">
                      {filteredLostPets.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {filteredLostPets.map((pet) => (
                            <AnimatedWrapper key={pet.id} animation="fade-in" className="h-full">
                              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden bg-teal-50">
                                  {pet.isFound && (
                                    <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 z-10 font-medium rounded-bl-lg">
                                      Najden
                                    </div>
                                  )}
                                  <img 
                                    src={pet.image} 
                                    alt={pet.name || "Izgubljena žival"} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                
                                <CardContent className="p-5">
                                  <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-teal-800">
                                      {pet.name || (pet.type === "dog" ? "Pes" : "Mačka")}
                                    </h3>
                                    <span className="flex items-center text-gray-600 text-sm">
                                      <Calendar size={14} className="mr-1" />
                                      {new Date(pet.date).toLocaleDateString('sl-SI')}
                                    </span>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
                                    <div>
                                      <span className="text-gray-500">Vrsta:</span> {pet.type === "dog" ? "Pes" : "Mačka"}
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Spol:</span> {pet.gender}
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Pasma:</span> {pet.breed}
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Starost:</span> {pet.age}
                                    </div>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <div className="flex items-start gap-1 text-gray-700 mb-2">
                                      <MapPin size={16} className="shrink-0 mt-1 text-teal-500" />
                                      <span>{pet.location}</span>
                                    </div>
                                    <p className="text-gray-600 line-clamp-2">{pet.description}</p>
                                  </div>
                                  
                                  <div className="pt-2 border-t border-gray-100">
                                    <Button variant="lightTeal" size="sm" className="w-full gap-1">
                                      <span>Več informacij</span>
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            </AnimatedWrapper>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <p className="text-gray-500 mb-4">Ni najdenih rezultatov za iskalni niz.</p>
                          <Button variant="outline" onClick={() => {setSearchQuery(""); setFilterType("all")}}>
                            Ponastavi iskanje
                          </Button>
                        </div>
                      )}
                    </AnimatedWrapper>
                  </TabsContent>
                  
                  <TabsContent value="found" className="focus-visible:outline-none focus-visible:ring-0">
                    <AnimatedWrapper animation="fade-in">
                      {filteredFoundPets.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {filteredFoundPets.map((pet) => (
                            <AnimatedWrapper key={pet.id} animation="fade-in" className="h-full">
                              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden bg-teal-50">
                                  <img 
                                    src={pet.image} 
                                    alt={"Najdena žival"} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                
                                <CardContent className="p-5">
                                  <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-teal-800">
                                      {pet.type === "dog" ? "Najden pes" : "Najdena mačka"}
                                    </h3>
                                    <span className="flex items-center text-gray-600 text-sm">
                                      <Calendar size={14} className="mr-1" />
                                      {new Date(pet.date).toLocaleDateString('sl-SI')}
                                    </span>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
                                    <div>
                                      <span className="text-gray-500">Vrsta:</span> {pet.type === "dog" ? "Pes" : "Mačka"}
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Spol:</span> {pet.gender}
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Pasma:</span> {pet.breed}
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Starost:</span> {pet.age}
                                    </div>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <div className="flex items-start gap-1 text-gray-700 mb-2">
                                      <MapPin size={16} className="shrink-0 mt-1 text-teal-500" />
                                      <span>{pet.location}</span>
                                    </div>
                                    <p className="text-gray-600 line-clamp-2">{pet.description}</p>
                                  </div>
                                  
                                  <div className="pt-2 border-t border-gray-100">
                                    <Button variant="lightTeal" size="sm" className="w-full gap-1">
                                      <span>Več informacij</span>
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            </AnimatedWrapper>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <p className="text-gray-500 mb-4">Ni najdenih rezultatov za iskalni niz.</p>
                          <Button variant="outline" onClick={() => {setSearchQuery(""); setFilterType("all")}}>
                            Ponastavi iskanje
                          </Button>
                        </div>
                      )}
                    </AnimatedWrapper>
                  </TabsContent>
                </Tabs>
              </div>
            </AnimatedWrapper>
            
            <div className="flex justify-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="gap-2 shadow-md"
                  onClick={() => setIsLostFormOpen(true)}
                >
                  <PawPrint size={18} />
                  Prijavi izgubljeno žival
                </Button>
                <Button 
                  variant="lightTeal" 
                  size="lg"
                  className="gap-2 shadow-md"
                  onClick={() => setIsFoundFormOpen(true)}
                >
                  <Search size={18} />
                  Prijavi najdeno žival
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Sheet open={isLostFormOpen} onOpenChange={setIsLostFormOpen}>
        <SheetContent className="w-full sm:max-w-md md:max-w-xl overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-2xl font-bold text-teal-800 flex items-center gap-2">
              <PawPrint className="text-teal-600" />
              Prijava izgubljene živali
            </SheetTitle>
            <SheetDescription>
              Izpolnite obrazec za prijavo izgubljene živali
            </SheetDescription>
          </SheetHeader>
          <LostAnimalForm onSuccess={() => setIsLostFormOpen(false)} />
        </SheetContent>
      </Sheet>

      <Sheet open={isFoundFormOpen} onOpenChange={setIsFoundFormOpen}>
        <SheetContent className="w-full sm:max-w-md md:max-w-xl overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-2xl font-bold text-teal-800 flex items-center gap-2">
              <Search className="text-teal-600" />
              Prijava najdene živali
            </SheetTitle>
            <SheetDescription>
              Izpolnite obrazec za prijavo najdene živali
            </SheetDescription>
          </SheetHeader>
          <FoundAnimalForm onSuccess={() => setIsFoundFormOpen(false)} />
        </SheetContent>
      </Sheet>

      <Section className="py-12 bg-teal-50/50">
        <AnimatedWrapper animation="fade-in" className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-lg border border-teal-100">
            <h3 className="flex items-center text-2xl font-semibold text-teal-800 mb-6 gap-2">
              <Building className="text-teal-600" size={24} />
              Občine, ki je pokriva Zavetišče za živali Maribor
            </h3>
            <p className="text-gray-600 mb-8">Seznam občin in kontaktni e-naslovi:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Duplek</div>
                    <a href="mailto:obcina.duplek@duplek.si" className="text-teal-600 hover:underline">
                      obcina.duplek@duplek.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Lenart</div>
                    <a href="mailto:obcina@lenart.si" className="text-teal-600 hover:underline">
                      obcina@lenart.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Miklavž na Drav. polj.</div>
                    <a href="mailto:obcina.miklavz@miklavz.si" className="text-teal-600 hover:underline">
                      obcina.miklavz@miklavz.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Selnica ob Dravi</div>
                    <a href="mailto:info@selnica.si" className="text-teal-600 hover:underline">
                      info@selnica.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Hoče - Slivnica</div>
                    <a href="mailto:obcina@hoce-slivnica.si" className="text-teal-600 hover:underline">
                      obcina@hoce-slivnica.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Destrnik</div>
                    <a href="mailto:obcina.destrnik@destrnik.si" className="text-teal-600 hover:underline">
                      obcina.destrnik@destrnik.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Rače - Fram</div>
                    <a href="mailto:info@race-fram.si" className="text-teal-600 hover:underline">
                      info@race-fram.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Poljčane</div>
                    <a href="mailto:obcina@poljcane.si" className="text-teal-600 hover:underline">
                      obcina@poljcane.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Maribor</div>
                    <a href="mailto:mestna.obcina@maribor.si" className="text-teal-600 hover:underline">
                      mestna.obcina@maribor.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Slovenske Konjice</div>
                    <span className="text-gray-500">(ni podanega e-naslova)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Kungota</div>
                    <a href="mailto:obcina@kungota.si" className="text-teal-600 hover:underline">
                      obcina@kungota.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Lovrenc na Pohorju</div>
                    <a href="mailto:obcina@lovrenc.si" className="text-teal-600 hover:underline">
                      obcina@lovrenc.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Ruše</div>
                    <a href="mailto:obcina@ruse.si" className="text-teal-600 hover:underline">
                      obcina@ruse.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Starše</div>
                    <a href="mailto:obcina@starse.si" className="text-teal-600 hover:underline">
                      obcina@starse.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Videm</div>
                    <a href="mailto:info@videm.si" className="text-teal-600 hover:underline">
                      info@videm.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Zreče</div>
                    <a href="mailto:info@zrece.eu" className="text-teal-600 hover:underline">
                      info@zrece.eu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Pesnica</div>
                    <a href="mailto:obcina.pesnica@pesnica.si" className="text-teal-600 hover:underline">
                      obcina.pesnica@pesnica.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-teal-600 shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Šentilj</div>
                    <a href="mailto:obcina@sentilj.si" className="text-teal-600 hover:underline">
                      obcina@sentilj.si
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </Section>
    </Layout>
  );
}
