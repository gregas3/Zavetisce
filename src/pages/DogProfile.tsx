import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PawPrint, Heart, Calendar, ArrowLeft, ArrowRight, CheckCircle, Info, Phone, Mail, FileText, Play, X } from "lucide-react";
import { format } from "date-fns";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { dogs } from "@/data/dogsData";
import { syncDogData } from "@/utils/dogUtils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  "8": {
    id: "8",
    name: "Roki",
    images: [
      "/lovable-uploads/d154fae5-9f35-4f95-9308-55b5d9599de4.png",
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "/lovable-uploads/d154fae5-9f35-4f95-9308-55b5d9599de4.png",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Roki na sprehodu"
      }
    ],
    age: "8 let",
    breed: "Mešanec",
    gender: "Samec",
    size: "Srednji",
    color: "Črno-rjava",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Roki je zaradi smrti svoje lastnice pristal v zavetišču. Star je dobrih 8 let, je kastriran in osnovno veterinarsko urejen. Je zelo prijazen in lepo vodljiv, navajen je notranjega bivanja v družbi ljudi. Z drugimi psi se ne razume najbolje. Roki išče ljubečo in odgovorno družino, ki mu bo ponudila miren dom.",
    suitableFor: "Ljudje, ki iščejo zvestega in umirjenega psa, starejši, odrasli brez drugih psov",
    notSuitableFor: "Družine z drugimi psi, zelo aktivni ljudje, ki bi pričakovali veliko fizične aktivnosti",
    additionalInfo: "Roki je bil ves čas svojega življenja navajen na notranje bivanje in družbo ljudi. Rad ima mirne sprehode in crkljanje.",
    dateArrived: "2023-12-23",
    adoptionRequirements: "- Mirno domače okolje\n- Brez drugih psov v gospodinjstvu\n- Redni krajši sprehodi\n- Čas za druženje in crkljanje\n- Potrpežljivost in razumevanje starejšega psa",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "7": {
    id: "7",
    name: "Ajša",
    images: [
      "/lovable-uploads/9ec09e1c-3793-4fa6-8dd5-808040227dae.png", 
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "/lovable-uploads/9ec09e1c-3793-4fa6-8dd5-808040227dae.png",
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
  
  const numericId = parseInt(id);
  const sharedDog = dogs.find(d => d.id === numericId);
  
  if (sharedDog) {
    if (dog.images[0] !== sharedDog.image) {
      dog.images[0] = sharedDog.image;
      
      if (dog.videos && dog.videos.length > 0) {
        dog.videos[0].thumbnail = sharedDog.image;
      }
    }
  }
  
  return dog;
};

const DogProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
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
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="w-full h-full p-0 m-0 bg-transparent border-0 cursor-pointer">
                              <img
                                src={image}
                                alt={`${dog.name} - slika ${index + 1}`}
                                className="object-cover w-full h-full hover:opacity-95 transition-opacity"
                              />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-5xl p-1 bg-transparent border-0">
                            <div className="relative">
                              <DialogClose className="absolute top-2 right-2 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80">
                                <X size={20} />
                              </DialogClose>
                              <img 
                                src={image} 
                                alt={`${dog.name} - slika ${index + 1}`} 
                                className="w-full h-auto max-h-[85vh] object-contain rounded-md" 
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
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
                        <h3 className="font-semibold mb-2">Dodatne
