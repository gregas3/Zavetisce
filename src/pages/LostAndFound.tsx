import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, PawPrint, Calendar, Info, Plus, Cat, Dog, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import LostAnimalForm from "@/components/forms/LostAnimalForm";
import FoundAnimalForm from "@/components/forms/FoundAnimalForm";

// Sample data for lost pets
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

// Sample data for found pets
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
  const [formType, setFormType] = useState<"lost" | "found" | null>(null);
  
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

  const handleReportButtonClick = (type: "lost" | "found") => {
    setFormType(type);
    setActiveTab("report");
    window.scrollTo(0, 0);
  };

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
                  variant="teal" 
                  size="lg" 
                  className="flex-1 py-8 flex-col h-auto"
                  onClick={() => handleReportButtonClick("lost")}
                >
                  <PawPrint size={32} className="mb-2" />
                  <span className="text-lg font-medium">Prijavi izgubljeno žival</span>
                </Button>
                <Button 
                  variant="lightTeal" 
                  size="lg" 
                  className="flex-1 py-8 flex-col h-auto"
                  onClick={() => handleReportButtonClick("found")}
                >
                  <Search size={32} className="mb-2" />
                  <span className="text-lg font-medium">Prijavi najdeno žival</span>
                </Button>
              </div>
              
              <p className="text-gray-600 text-center mb-6">
                Izberite vrsto prijave, ki jo želite oddati. 
                Nato vas bomo vodili skozi preprost obrazec.
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
            <TabsTrigger 
              value="report" 
              className="flex-1 data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800"
            >
              Oddaj prijavo
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="listings">
            <AnimatedWrapper animation="fade-in-up" className="mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <div className="w-full md:w-1/2">
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
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`${filterType === 'all' ? 'bg-teal-100 text-teal-800 border-teal-200' : ''}`}
                    onClick={() => setFilterType('all')}
                  >
                    <PawPrint size={16} />
                    Vse živali
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`${filterType === 'dog' ? 'bg-teal-100 text-teal-800 border-teal-200' : ''}`}
                    onClick={() => setFilterType('dog')}
                  >
                    <Dog size={16} />
                    Psi
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`${filterType === 'cat' ? 'bg-teal-100 text-teal-800 border-teal-200' : ''}`}
                    onClick={() => setFilterType('cat')}
                  >
                    <Cat size={16} />
                    Mačke
                  </Button>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fade-in">
              <div className="mb-8">
                <Tabs defaultValue="lost" className="w-full">
                  <TabsList className="w-full sm:w-auto mb-6 bg-teal-50">
                    <TabsTrigger value="lost" className="flex-1 sm:flex-initial data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800">Izgubljene živali</TabsTrigger>
                    <TabsTrigger value="found" className="flex-1 sm:flex-initial data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800">Najdene živali</TabsTrigger>
                  </TabsList>
                  
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
                                      <ArrowUpRight size={16} />
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
                                      <ArrowUpRight size={16} />
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
              <Button 
                variant="primary" 
                size="lg"
                className="gap-2 shadow-md"
                onClick={() => setActiveTab("report")}
              >
                <Plus size={18} />
                Oddaj novo prijavo
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="report">
            <div className="max-w-3xl mx-auto">
              {!formType ? (
                <div className="bg-white p-8 rounded-xl shadow-sm border border-teal-100 text-center mb-8">
                  <h3 className="text-xl font-semibold text-teal-800 mb-6">Izberite vrsto prijave</h3>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Button 
                      variant="teal" 
                      size="lg" 
                      className="flex-1 py-6 flex-col h-auto"
                      onClick={() => setFormType("lost")}
                    >
                      <PawPrint size={28} className="mb-2" />
                      <span className="font-medium">Prijavi izgubljeno žival</span>
                    </Button>
                    <Button 
                      variant="lightTeal" 
                      size="lg" 
                      className="flex-1 py-6 flex-col h-auto"
                      onClick={() => setFormType("found")}
                    >
                      <Search size={28} className="mb-2" />
                      <span className="font-medium">Prijavi najdeno žival</span>
                    </Button>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab("listings")}
                    className="mt-4"
                  >
                    Nazaj na seznam
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setFormType(null)}
                    >
                      Izberi drugo vrsto prijave
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setActiveTab("listings")}
                    >
                      Nazaj na seznam
                    </Button>
                  </div>
                  
                  {formType === "lost" ? <LostAnimalForm /> : <FoundAnimalForm />}
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Section 
        className="py-16 bg-teal-50"
        title="Kako lahko pomagamo?"
        description="Izgubljena ali najdena žival potrebuje našo pomoč. Tukaj so koristni napotki, ki lahko pomagajo."
        centered
        animation="fade-in"
      >
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <AnimatedWrapper animation="fade-in-up" delay={100} className="bg-white rounded-xl p-6 shadow-sm border border-teal-100">
            <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
              <Dog size={24} className="mr-2 text-teal-600" />
              Če najdete žival
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="mt-1 bg-teal-100 rounded-full p-1 shrink-0">
                  <Info size={14} className="text-teal-600" />
                </div>
                <span>Preverite, ali ima žival ovratnico z identifikacijsko oznako ali mikročip.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 bg-teal-100 rounded-full p-1 shrink-0">
                  <Info size={14} className="text-teal-600" />
                </div>
                <span>Če je mogoče, žival varno zadržite, vendar bodite previdni pri prestrašenih ali poškodovanih živalih.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 bg-teal-100 rounded-full p-1 shrink-0">
                  <Info size={14} className="text-teal-600" />
                </div>
                <span>Kontaktirajte najbližje zavetišče ali veterinarsko postajo za nadaljnje informacije.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 bg-teal-100 rounded-full p-1 shrink-0">
                  <Info size={14} className="text-teal-600" />
                </div>
                <span>Uporabite družbena omrežja in lokalne skupine za objavo najdbe.</span>
              </li>
            </ul>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="fade-in-up" delay={200} className="bg-white rounded-xl p-6 shadow-sm border border-teal-100">
            <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
              <Cat size={24} className="mr-2 text-teal-600" />
              Če izgubite žival
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="mt-1 bg-teal-100 rounded-full p-1 shrink-0">
                  <Info size={14} className="text-teal-600" />
                </div>
                <span>Najprej temeljito preiščite svoj dom in bližnjo okolico, tudi ponoči z baterijo.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 bg-teal-100 rounded-full p-1 shrink-0">
                  <Info size={14} className="text-teal-600" />
                </div>
                <span>Pripravite fotografije in podroben opis svoje živali ter kontaktne podatke.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 bg-teal-100 rounded-full p-1 shrink-0">
                  <Info size={14} className="text-teal-600" />
                </div>
                <span>Obvestite vsa lokalna zavetišča, veterinarske postaje in trgovine za hišne ljubljenčke.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 bg-teal-100 rounded-full p-1 shrink-0">
                  <Info size={14} className="text-teal-600" />
                </div>
                <span>Na mestu, kjer je bila žival nazadnje videna, pustite znane predmete, hrano in vodo.</span>
              </li>
            </ul>
          </AnimatedWrapper>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="teal" size="lg" className="shadow-md hover:shadow-teal-200/50">
            <Link to="/kontakt">Kontaktirajte nas za pomoč</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
