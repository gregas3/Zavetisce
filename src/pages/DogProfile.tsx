
import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PawPrint, Heart, Calendar, ArrowLeft, ArrowRight, CheckCircle, Info, Phone, Mail, FileText, Play } from "lucide-react";
import { format } from "date-fns";
import { Helmet } from "react-helmet";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fetchDogById = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id,
    name: "Rex",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "/placeholder.svg",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Rex se igra"
      }
    ],
    age: "2 leti",
    breed: "Mešanec",
    gender: "Samec",
    size: "Srednje velik",
    color: "Rjava",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Rex je prijazni in energičen pes, ki obožuje igro in sprehode. Je zelo inteligenten in se hitro uči. Išče aktiven dom z veliko ljubezni in prostora za igro.",
    suitableFor: "Aktivna družina, dom z vrtom",
    notSuitableFor: "Stanovanje, družine z majhnimi otroki",
    additionalInfo: "Rex je bil najden zapuščen ob cesti. Potreboval je nekaj časa, da se je navadil na zavetišče, vendar je zdaj zelo družaben in prijateljski.",
    dateArrived: "2023-06-15",
    adoptionRequirements: "- Predhodne izkušnje s psi\n- Ograjen vrt\n- Redni sprehodi in aktivnosti\n- Potrpežljivost in čas za urjenje",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "info@zavetisce-mb.si"
    }
  };
};

const DogProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const { data: dog, isLoading, error } = useQuery({
    queryKey: ["dog", id],
    queryFn: () => fetchDogById(id || ""),
    enabled: !!id,
  });

  const handleScheduleAppointment = () => {
    navigate(`/termini?animalId=${dog?.id}&animalName=${dog?.name}&animalType=Pes`);
  };
  
  const handleFillQuestionnaire = () => {
    navigate(`/posvojitev/vprašalnik?animalName=${dog?.name}&animalType=Pes`);
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="pt-20 pb-10">
          <div className="container">
            <div className="animate-pulse space-y-6">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="h-48 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !dog) {
    return (
      <>
        <Navbar />
        <main className="pt-20 pb-10">
          <div className="container text-center py-10">
            <h1 className="text-2xl font-bold mb-4">Pes ni bil najden</h1>
            <p className="mb-6">Oprostite, iskani pes ne obstaja ali pa je bil odstranjen.</p>
            <Button asChild>
              <Link to="/posvojitev/psi">Nazaj na seznam psov</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{dog.name} | Zavetišče za živali Maribor</title>
        <meta name="description" content={`Spoznajte ${dog.name} - ${dog.breed}, ${dog.age}. ${dog.description}`} />
      </Helmet>

      <Navbar />

      <main className="pt-20 pb-10">
        <div className="container">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Domov</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/posvojitev/psi">Psi</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{dog.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <PawPrint className="text-primary" size={28} />
                {dog.name}
                <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                  {dog.status}
                </Badge>
              </h1>

              <Carousel className="mb-8">
                <CarouselContent>
                  {dog.images.map((image, index) => (
                    <CarouselItem key={`image-${index}`}>
                      <div className="aspect-video w-full overflow-hidden rounded-xl">
                        <img
                          src={image}
                          alt={`${dog.name} - slika ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                  
                  {dog.videos && dog.videos.map((video, index) => (
                    <CarouselItem key={`video-${index}`}>
                      <div className="aspect-video w-full overflow-hidden rounded-xl relative group">
                        <img
                          src={video.thumbnail}
                          alt={`${dog.name} - ${video.title}`}
                          className="object-cover w-full h-full"
                        />
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all">
                              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white transform transition-transform group-hover:scale-110">
                                <Play size={32} fill="white" />
                              </div>
                              <span className="absolute bottom-4 left-4 text-white font-medium px-3 py-1 bg-black/50 rounded-lg">
                                {video.title}
                              </span>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>{dog.name} - {video.title}</DialogTitle>
                              <DialogDescription>Video posnetek psa</DialogDescription>
                            </DialogHeader>
                            <div className="aspect-video w-full">
                              <video 
                                src={video.url} 
                                controls
                                className="w-full h-full rounded-md"
                                autoPlay
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              {dog.videos && dog.videos.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-4">
                  <h3 className="w-full text-lg font-semibold mb-2">Video posnetki</h3>
                  {dog.videos.map((video, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div className="relative w-40 rounded-md overflow-hidden cursor-pointer hover-lift">
                          <div className="aspect-video">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors flex items-center justify-center">
                              <Play size={24} className="text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black/60 text-white text-xs truncate">
                            {video.title}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{dog.name} - {video.title}</DialogTitle>
                          <DialogDescription>Video posnetek psa</DialogDescription>
                        </DialogHeader>
                        <div className="aspect-video w-full">
                          <video 
                            src={video.url} 
                            controls
                            className="w-full h-full rounded-md"
                            autoPlay
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              )}

              <Tabs defaultValue="about" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">O psu</TabsTrigger>
                  <TabsTrigger value="requirements">Posvojitev</TabsTrigger>
                  <TabsTrigger value="health">Zdravje</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>O {dog.name}</CardTitle>
                      <CardDescription>
                        Spoznajte {dog.name} in ugotovite, ali je pravi pes za vas.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>{dog.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h3 className="font-semibold mb-2">Primeren za:</h3>
                          <p className="text-sm">{dog.suitableFor}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Ni primeren za:</h3>
                          <p className="text-sm">{dog.notSuitableFor}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="font-semibold mb-2">Dodatne informacije:</h3>
                        <p className="text-sm">{dog.additionalInfo}</p>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="font-semibold mb-2">V zavetišču od:</h3>
                        <p className="text-sm">{format(new Date(dog.dateArrived), "d. MMMM yyyy")}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="requirements" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Zahteve za posvojitev</CardTitle>
                      <CardDescription>
                        Pred posvojitvijo {dog.name} morate izpolnjevati naslednje pogoje.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="whitespace-pre-line font-sans text-sm">
                        {dog.adoptionRequirements}
                      </pre>
                      
                      <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <h3 className="font-semibold flex items-center gap-2 text-amber-800">
                          <Info size={18} />
                          Postopek posvojitve
                        </h3>
                        <ol className="mt-2 space-y-2 text-sm text-amber-800 list-decimal pl-5">
                          <li>Rezervirajte termin za obisk in spoznavanje psa</li>
                          <li>Ob obisku se pogovorite z osebjem o vaših pogojih za psa</li>
                          <li>Izpolnite vlogo za posvojitev</li>
                          <li>Po odobritvi vloge sledi podpis pogodbe o posvojitvi</li>
                          <li>Plačilo stroškov posvojitve (cepljenje, čipiranje, sterilizacija)</li>
                          <li>Odpeljete novega družinskega člana domov</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="health" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Zdravstveno stanje</CardTitle>
                      <CardDescription>
                        Zdravstvene informacije in oskrba, ki jo je {dog.name} že prejel.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle size={18} className={dog.microchipped ? "text-green-500" : "text-gray-300"} />
                          <span className={dog.microchipped ? "text-green-700" : "text-gray-500"}>
                            {dog.microchipped ? "Čipiran" : "Ni čipiran"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={18} className={dog.neutered ? "text-green-500" : "text-gray-300"} />
                          <span className={dog.neutered ? "text-green-700" : "text-gray-500"}>
                            {dog.neutered ? "Kastriran/Steriliziran" : "Ni kastriran/steriliziran"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={18} className={dog.vaccinated ? "text-green-500" : "text-gray-300"} />
                          <span className={dog.vaccinated ? "text-green-700" : "text-gray-500"}>
                            {dog.vaccinated ? "Cepljen" : "Ni cepljen"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Osnovne informacije</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">Pasma:</span>
                      <span className="font-medium">{dog.breed}</span>
                    </li>
                    <li className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">Starost:</span>
                      <span className="font-medium">{dog.age}</span>
                    </li>
                    <li className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">Spol:</span>
                      <span className="font-medium">{dog.gender}</span>
                    </li>
                    <li className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-600">Velikost:</span>
                      <span className="font-medium">{dog.size}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Barva:</span>
                      <span className="font-medium">{dog.color}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Posvojite {dog.name}</CardTitle>
                  <CardDescription>Pomagajte {dog.name} najti nov dom za vedno.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleScheduleAppointment} className="w-full" size="lg">
                    <Calendar className="mr-2" size={18} />
                    Rezerviraj termin za ogled
                  </Button>
                  <Button onClick={handleFillQuestionnaire} variant="secondary" className="w-full" size="lg">
                    <FileText className="mr-2" size={18} />
                    Izpolni posvojitveni vprašalnik
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Heart className="mr-2" size={18} />
                    Dodaj med priljubljene
                  </Button>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="text-sm text-muted-foreground mb-2">Za več informacij:</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone />
                      {dog.contactInfo.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail />
                      {dog.contactInfo.email}
                    </p>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Drugi psi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link to={`/posvojitev/psi/${Number(id) - 1}`} className="flex items-center">
                        <ArrowLeft size={16} className="mr-2" />
                        Prejšnji pes
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/posvojitev/psi/${Number(id) + 1}`} className="flex items-center">
                        Naslednji pes
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                  <Button variant="secondary" asChild className="w-full">
                    <Link to="/posvojitev/psi">
                      Nazaj na seznam psov
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DogProfile;
