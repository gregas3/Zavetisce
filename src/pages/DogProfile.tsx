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

interface DogData {
  id: string;
  name: string;
  images: string[];
  videos?: {
    thumbnail: string;
    url: string;
    title: string;
  }[];
  age: string;
  breed: string;
  gender: string;
  size: string;
  color: string;
  status: string;
  microchipped: boolean;
  neutered: boolean;
  vaccinated: boolean;
  description: string;
  suitableFor: string;
  notSuitableFor: string;
  additionalInfo: string;
  dateArrived: string;
  adoptionRequirements: string;
  contactInfo: {
    phone: string;
    email: string;
  };
}

const dogsDatabase: Record<string, DogData> = {
  "7": {
    id: "7",
    name: "Ajša",
    images: [
      "/lovable-uploads/99f635b5-3797-485c-be8f-e76012c87d6f.png", 
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "/lovable-uploads/99f635b5-3797-485c-be8f-e76012c87d6f.png",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Ajša se igra"
      }
    ],
    age: "6 mesecev",
    breed: "Mešanec",
    gender: "Samica",
    size: "Srednja",
    color: "Rjava",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Ajša je 6 mesecev stara psička, izredno igriva, čuječa in ljubezniva, seveda zaradi let tudi nagajiva, kar je popolnoma normalno za njeno starost. Trenutno tehta 20 kg, bo še zrasla in postala večja psička. Išče odgovoren in ljubeč dom, kjer ji bodo nudili dovolj pozornosti, sprehodov in igre.",
    suitableFor: "Aktivne družine, dom z vrtom, izkušeni lastniki psov",
    notSuitableFor: "Majhna stanovanja brez dostopa do vrta, zelo zaposleni ljudje",
    additionalInfo: "Ajša je bila najdena zapuščena. Zelo je navezana na ljudi in se dobro razume z drugimi psi.",
    dateArrived: "2024-01-15",
    adoptionRequirements: "- Izkušnje z mladimi psi\n- Dovolj časa za aktivnosti in šolanje\n- Ograjen vrt ali reden dostop do zelenih površin\n- Pripravljenost na vzgojo mladega psa",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "1": {
    id: "1",
    name: "Reks",
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Reks se igra"
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
    description: "Reks je prijazen in energičen pes z veliko ljubezni. Rad ima dolge sprehode in igranje. Išče aktivno družino, ki mu bo nudila dovolj gibanja in pozornosti.",
    suitableFor: "Aktivne družine, dom z vrtom",
    notSuitableFor: "Majhna stanovanja, starejši ljudje s težavami z mobilnostjo",
    additionalInfo: "Reks je bil najden zapuščen ob cesti. Potreboval je nekaj časa, da se je navadil na zavetišče, vendar je zdaj zelo družaben in prijateljski.",
    dateArrived: "2023-06-15",
    adoptionRequirements: "- Predhodne izkušnje s psi\n- Ograjen vrt\n- Redni sprehodi in aktivnosti\n- Potrpežljivost in čas za urjenje",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "2": {
    id: "2",
    name: "Lara",
    images: [
      "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Lara raziskuje"
      }
    ],
    age: "7 mesecev",
    breed: "Mešanec",
    gender: "Samica",
    size: "Manjša",
    color: "Črno-bela",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: false,
    vaccinated: true,
    description: "Lara je mladič poln energije in radovednosti, ki išče aktivno družino. Zelo je živahna in rada raziskuje novo okolico. Potrebuje veliko gibanja in stimulacije.",
    suitableFor: "Aktivne družine, družine z otroki, dom z drugimi živalmi",
    notSuitableFor: "Stanovanja brez dostopa do zunanjih površin, zelo zaposleni lastniki",
    additionalInfo: "Lara je bila najdena skupaj s svojimi brati in sestrami. Je edina, ki še išče dom.",
    dateArrived: "2023-11-10",
    adoptionRequirements: "- Čas za igro in treninge\n- Dostop do zunanjih površin\n- Pripravljenost za socializacijo in šolanje\n- Potrpežljivost pri vzgoji mladega psa",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "3": {
    id: "3",
    name: "Bela",
    images: [
      "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Bela počiva"
      }
    ],
    age: "3 leta",
    breed: "Labrador",
    gender: "Samica",
    size: "Velika",
    color: "Bela",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Bela je prijazna in mirna psička, ki obožuje družbo in crkljanje. Zelo je nežna in potrpežljiva. Rada se crklja in uživa v mirnem okolju.",
    suitableFor: "Družine z otroki, starejši ljudje, domovi z drugimi živalmi",
    notSuitableFor: "Zelo aktivni ljudje, ki bi pričakovali veliko fizične aktivnosti",
    additionalInfo: "Bela je predana in ljubeča psička, ki uživa v človeški družbi in se dobro razume z drugimi živalmi.",
    dateArrived: "2023-03-20",
    adoptionRequirements: "- Dovolj prostora za velikega psa\n- Redni sprehodi\n- Čas za druženje in crkljanje\n- Potrpežljivost in nežnost",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "4": {
    id: "4",
    name: "Max",
    images: [
      "https://images.unsplash.com/photo-1589941013453-ec89f98c748d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1589941013453-ec89f98c748d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Max na treningu"
      }
    ],
    age: "4 leta",
    breed: "Nemški ovčar",
    gender: "Samec",
    size: "Velik",
    color: "Črno-rjava",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Max je inteligenten in zaščitniški pes, ki je zelo zvest. Je zelo pameten in se hitro uči. Potrebuje dosledno vodenje in redno aktivnost.",
    suitableFor: "Izkušeni lastniki psov, aktivne družine brez majhnih otrok",
    notSuitableFor: "Začetniki, družine z majhnimi otroki, majhna stanovanja",
    additionalInfo: "Max je bil šolan za stražarskega psa, vendar zaradi svoje prijazne narave ni bil primeren za to delo.",
    dateArrived: "2022-10-05",
    adoptionRequirements: "- Izkušnje z delovnimi pasmami\n- Čas za treninge in mentalno stimulacijo\n- Ograjen vrt\n- Dosledno vodenje",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "5": {
    id: "5",
    name: "Piki",
    images: [
      "https://images.unsplash.com/photo-1563321769-3100f782c24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1563321769-3100f782c24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Piki skače"
      }
    ],
    age: "1 leto",
    breed: "Jack Russell terier",
    gender: "Samec",
    size: "Majhen",
    color: "Belo-rjava",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: false,
    vaccinated: true,
    description: "Piki je izjemno živahen in energičen terier, ki potrebuje veliko aktivnosti. Je zelo igriv in vedno pripravljen na akcijo. Potrebuje aktivnega lastnika.",
    suitableFor: "Aktivni ljudje, družine z večjimi otroki, izkušeni lastniki terierjev",
    notSuitableFor: "Starejši ljudje, sedeč življenjski slog, družine z mačkami",
    additionalInfo: "Piki je bil odvzet prejšnjemu lastniku zaradi neprimernih življenjskih pogojev. Kljub temu ostaja prijateljski do ljudi.",
    dateArrived: "2023-08-12",
    adoptionRequirements: "- Veliko fizične aktivnosti\n- Mentalna stimulacija in igre\n- Doslednost pri vzgoji\n- Razumevanje terierske narave",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "6": {
    id: "6",
    name: "Luna",
    images: [
      "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Luna rešuje naloge"
      }
    ],
    age: "2 leti",
    breed: "Border collie",
    gender: "Samica",
    size: "Srednja",
    color: "Črno-bela",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Luna je izjemno inteligentna in delovna psička, ki potrebuje mentalne izzive. Je zelo učljiva in potrebuje veliko mentalne stimulacije. Primerna za aktivne lastnike.",
    suitableFor: "Aktivni ljudje, izkušeni lastniki colliejev, ljudje s pašniki ali velikimi posestmi",
    notSuitableFor: "Stanovanja, sedeč življenjski slog, neizkušeni lastniki",
    additionalInfo: "Luna je bila vzgojena na kmetiji, kjer je pomagala pri paši ovac. Zaradi starosti lastnika je bila predana v zavetišče.",
    dateArrived: "2023-05-18",
    adoptionRequirements: "- Veliko fizične aktivnosti\n- Mentalni izzivi in delovne naloge\n- Izkušnje z delovnimi pasmami\n- Doslednost in poštenost pri šolanju",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  }
};

const fetchDogById = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const dog = dogsDatabase[id];
  if (!dog) {
    throw new Error(`Dog with id ${id} not found`);
  }
  return dog;
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

              <Carousel className="mb-8" opts={{ loop: true }}>
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
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

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
                      <Phone size={16} />
                      {dog.contactInfo.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} />
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
                    <Button 
                      variant="outline" 
                      asChild 
                      disabled={Number(id) <= 1}
                    >
                      <Link 
                        to={Number(id) > 1 ? `/posvojitev/psi/${Number(id) - 1}` : "#"} 
                        className="flex items-center"
                      >
                        <ArrowLeft size={16} className="mr-2" />
                        Prejšnji pes
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild 
                      disabled={Number(id) >= Object.keys(dogsDatabase).length}
                    >
                      <Link 
                        to={Number(id) < Object.keys(dogsDatabase).length ? `/posvojitev/psi/${Number(id) + 1}` : "#"} 
                        className="flex items-center"
                      >
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
