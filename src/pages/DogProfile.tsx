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
  "9": {
    id: "9",
    name: "Bella",
    images: [
      "/lovable-uploads/cd9908b3-76f2-4fd9-a3d9-b739d1b8721f.png",
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "/lovable-uploads/cd9908b3-76f2-4fd9-a3d9-b739d1b8721f.png",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Bella na sprehodu"
      }
    ],
    age: "2 leti",
    breed: "Mešanec",
    gender: "Samica",
    size: "Velika",
    color: "Bež z belimi in črnimi lisami",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Skoraj dve leti stara psička, večje rasti je polna energije. Obožuje igro, aktivne sprehode, zaradi svoje energičnosti pa se najbolje ujema z psi, ki uživajo v energičnih igrah. Potrebuje nekoga, ki ji bo zagotavljal dovolj gibanja in mentalnih izzivov. Je sterilizirana, čipirana, cepljena.",
    suitableFor: "Aktivne družine, izkušeni lastniki psov, dom z veliko prostora za igro",
    notSuitableFor: "Stanovanja brez dostopa do vrta, starejši ljudje, neaktivni lastniki",
    additionalInfo: "Bella je bila sprejeta v zavetišče 14. 11. 2024. Rojena je bila 15. 04. 2023. Uživa v dolgih sprehodih in igri z drugimi psi.",
    dateArrived: "2024-11-14",
    adoptionRequirements: "- Aktivno gospodinjstvo\n- Dovolj časa za sprehode in igro\n- Izkušnje s psi z veliko energije\n- Vrt ali reden dostop do odprtih površin\n- Potrpežljivost in doslednost pri vzgoji",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "8": {
    id: "8",
    name: "Roki",
    images: [
      "/lovable-uploads/d154fae5-9f35-4f95-9308-55b5d9599de4.png",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    age: "8 let",
    breed: "Mešanec",
    gender: "Samec",
    size: "Srednji",
    color: "Rjav z belimi lisami",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Roki je zaradi smrti svoje lastnice pristal v zavetišču. Star je dobrih 8 let, je kastriran in osnovno veterinarsko urejen. Je zelo prijazen in lepo vodljiv, navajen je notranjega bivanja v družbi ljudi. Z drugimi psi se ne razume najbolje. Roki išče ljubečo in odgovorno družino, ki mu bo ponudila miren dom.",
    suitableFor: "Mirne družine, starejši ljudje, dom brez drugih psov",
    notSuitableFor: "Družine z majhnimi otroki, domovi z drugimi psi",
    additionalInfo: "Roki je bil sprejet v zavetišče 10. 10. 2023. Potrebuje redno jemanje zdravil za sklepe.",
    dateArrived: "2023-10-10",
    adoptionRequirements: "- Mirno okolje\n- Redni, a ne predolgi sprehodi\n- Brez drugih psov\n- Pripravljenost na stroške zdravljenja",
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
    color: "Črna z belimi lisami",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Ajša je 6 mesecev stara psička, izredno igriva, čuječa in ljubezniva, seveda zaradi let tudi nagajiva, kar je popolnoma normalno za njeno starost. Trenutno tehta 20 kg, bo še zrasla in postala večja psička. Išče odgovoren in ljubeč dom, kjer ji bodo nudili dovolj pozornosti, sprehodov in igre.",
    suitableFor: "Aktivne družine, družine z otroki, domovi z drugimi psi",
    notSuitableFor: "Stanovanja brez dostopa do vrta, neaktivni lastniki",
    additionalInfo: "Ajša je bila sprejeta v zavetišče 15. 9. 2023. Rojena je bila 15. 5. 2023.",
    dateArrived: "2023-09-15",
    adoptionRequirements: "- Aktivno gospodinjstvo\n- Dovolj časa za vzgojo in socializacijo\n- Izkušnje z mladimi psi\n- Vrt ali reden dostop do odprtih površin",
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
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1624&q=80",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Reks na sprehodu"
      }
    ],
    age: "2 leti",
    breed: "Mešanec",
    gender: "Samec",
    size: "Srednje velik",
    color: "Rjav z belimi lisami",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Reks je prijazen in energičen pes z veliko ljubezni. Rad ima dolge sprehode in igranje. Išče aktivno družino, ki mu bo nudila dovolj gibanja in pozornosti.",
    suitableFor: "Aktivne družine, družine z otroki, domovi z drugimi psi",
    notSuitableFor: "Stanovanja brez dostopa do vrta, neaktivni lastniki",
    additionalInfo: "Reks je bil sprejet v zavetišče 15. 1. 2023. Rojen je bil 10. 3. 2021.",
    dateArrived: "2023-01-15",
    adoptionRequirements: "- Aktivno gospodinjstvo\n- Dovolj časa za sprehode in igro\n- Vrt ali reden dostop do odprtih površin",
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
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    age: "7 mesecev",
    breed: "Mešanec",
    gender: "Samica",
    size: "Manjša",
    color: "Bela s črnimi lisami",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: false,
    vaccinated: true,
    description: "Lara je mladič poln energije in radovednosti, ki išče aktivno družino. Zelo je živahna in rada raziskuje novo okolico. Potrebuje veliko gibanja in stimulacije.",
    suitableFor: "Aktivne družine, družine z otroki, domovi z drugimi živalmi",
    notSuitableFor: "Stanovanja brez dostopa do vrta, neaktivni lastniki",
    additionalInfo: "Lara je bila sprejeta v zavetišče 1. 6. 2023. Rojena je bila 1. 1. 2023.",
    dateArrived: "2023-06-01",
    adoptionRequirements: "- Aktivno gospodinjstvo\n- Dovolj časa za vzgojo in socializacijo\n- Izkušnje z mladimi psi\n- Vrt ali reden dostop do odprtih površin",
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
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Bela se crklja"
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
    notSuitableFor: "Zelo aktivni lastniki, ki bi od nje pričakovali veliko fizične aktivnosti",
    additionalInfo: "Bela je bila sprejeta v zavetišče 10. 3. 2022. Rojena je bila 5. 5. 2020.",
    dateArrived: "2022-03-10",
    adoptionRequirements: "- Ljubeče okolje\n- Redni, a ne predolgi sprehodi\n- Dovolj časa za crkljanje",
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
      "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    age: "4 leta",
    breed: "Nemški ovčar",
    gender: "Samec",
    size: "Velik",
    color: "Črno-rjav",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Max je inteligenten in zaščitniški pes, ki je zelo zvest. Je zelo pameten in se hitro uči. Potrebuje dosledno vodenje in redno aktivnost.",
    suitableFor: "Izkušeni lastniki, aktivne družine brez majhnih otrok",
    notSuitableFor: "Neizkušeni lastniki, družine z majhnimi otroki, domovi z mačkami",
    additionalInfo: "Max je bil sprejet v zavetišče 20. 5. 2022. Rojen je bil 15. 6. 2019.",
    dateArrived: "2022-05-20",
    adoptionRequirements: "- Izkušnje z delovnimi pasmami\n- Dovolj časa za trening in aktivnosti\n- Dosledno vodenje\n- Vrt z visoko ograjo",
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
      "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1589&q=80"
    ],
    age: "1 leto",
    breed: "Jack Russell terier",
    gender: "Samec",
    size: "Majhen",
    color: "Bel s rjavimi lisami",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: false,
    vaccinated: true,
    description: "Piki je izjemno živahen in energičen terier, ki potrebuje veliko aktivnosti. Je zelo igriv in vedno pripravljen na akcijo. Potrebuje aktivnega lastnika.",
    suitableFor: "Zelo aktivni lastniki, izkušeni lastniki terierjev",
    notSuitableFor: "Stanovanja brez dostopa do vrta, neaktivni lastniki, družine z majhnimi otroki",
    additionalInfo: "Piki je bil sprejet v zavetišče 5. 8. 2023. Rojen je bil 10. 8. 2022.",
    dateArrived: "2023-08-05",
    adoptionRequirements: "- Zelo aktivno gospodinjstvo\n- Izkušnje s terierji\n- Dovolj časa za trening in aktivnosti\n- Vrt z visoko ograjo",
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
      "https://images.unsplash.com/photo-1517662613602-4b8e02886677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Luna kaže trike"
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
    suitableFor: "Aktivni lastniki, izkušeni lastniki, družine brez majhnih otrok",
    notSuitableFor: "Neaktivni lastniki, družine z majhnimi otroki, stanovanja brez dostopa do vrta",
    additionalInfo: "Luna je bila sprejeta v zavetišče 10. 2. 2023. Rojena je bila 5. 3. 2021.",
    dateArrived: "2023-02-10",
    adoptionRequirements: "- Aktivno gospodinjstvo\n- Izkušnje z delovnimi pasmami\n- Dovolj časa za trening in aktivnosti\n- Pripravljenost za mentalno stimulacijo",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  }
};

// Function to fetch dog data by ID
const fetchDogById = async (id: string): Promise<DogData> => {
  // Simulate API call with a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dog = dogsDatabase[id];
      if (dog) {
        resolve(dog);
      } else {
        reject(new Error("Pes ni bil najden"));
      }
    }, 500);
  });
};

// Function to get next and previous dog IDs
const getAdjacentDogIds = (currentId: string): { prev: string | null; next: string | null } => {
  const ids = Object.keys(dogsDatabase).sort((a, b) => parseInt(a) - parseInt(b));
  const currentIndex = ids.indexOf(currentId);
  
  return {
    prev: currentIndex > 0 ? ids[currentIndex - 1] : null,
    next: currentIndex < ids.length - 1 ? ids[currentIndex + 1] : null
  };
};

const DogProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  
  // Get dog data
  const { data: dog, isLoading, isError } = useQuery({
    queryKey: ['dog', id],
    queryFn: () => fetchDogById(id || '1'),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  
  // Get adjacent dog IDs
  const adjacentDogs = id ? getAdjacentDogIds(id) : { prev: null, next: null };
  
  // Handle navigation to adjacent dogs
  const navigateToAdjacentDog = (adjacentId: string | null) => {
    if (adjacentId) {
      navigate(`/posvojitev/psi/${adjacentId}`);
    }
  };
  
  // Sync the main image with the shared dogs data
  if (dog && dog.images.length > 0) {
    syncDogData(parseInt(dog.id), dog.images[0]);
  }
  
  // Handle loading state
  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-16 pb-12">
          <div className="container max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-center items-center h-96">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-full bg-primary/20 h-24 w-24 mb-4 flex items-center justify-center">
                  <PawPrint className="h-12 w-12 text-primary/40" />
                </div>
                <div className="h-8 bg-primary/20 rounded w-64 mb-4"></div>
                <div className="h-4 bg-primary/10 rounded w-48"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  // Handle error state
  if (isError || !dog) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-16 pb-12">
          <div className="container max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center h-96 text-center">
              <PawPrint className="h-16 w-16 text-muted-foreground mb-4" />
              <h1 className="text-2xl font-bold mb-2">Pes ni bil najden</h1>
              <p className="text-muted-foreground mb-6">Žal ne najdemo podatkov o tem psu.</p>
              <Button asChild>
                <Link to="/posvojitev/psi">Nazaj na seznam psov</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  // Format date for display
  const formattedDate = dog.dateArrived 
    ? format(new Date(dog.dateArrived), 'dd. MM. yyyy')
    : 'Ni podatka';
  
  return (
    <>
      <Helmet>
        <title>{dog.name} | Zavetišče za živali Maribor</title>
        <meta name="description" content={`Spoznajte ${dog.name}, ${dog.gender.toLowerCase()} ${dog.breed.toLowerCase()}, ki išče nov dom. ${dog.description.substring(0, 100)}...`} />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-16 pb-12">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">Domov</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/posvojitev/psi">Psi za posvojitev</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{dog.name}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border">
                <img 
                  src={dog.images[activeImageIndex]} 
                  alt={`${dog.name} - slika ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Video play button */}
                {dog.videos && dog.videos.length > 0 && (
                  <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="default" 
                        size="icon"
                        className="absolute bottom-4 right-4 rounded-full bg-primary/90 hover:bg-primary text-white shadow-lg"
                        onClick={() => setActiveVideoIndex(0)}
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] p-0 bg-background/95 backdrop-blur-sm">
                      <DialogHeader className="p-4 pb-0">
                        <DialogTitle className="flex items-center justify-between">
                          <span>{dog.videos[activeVideoIndex].title}</span>
                          <DialogClose asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                              <X className="h-4 w-4" />
                            </Button>
                          </DialogClose>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-4">
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <video 
                            src={dog.videos[activeVideoIndex].url} 
                            controls 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                
                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white px-3 py-1 text-sm">
                    {dog.status}
                  </Badge>
                </div>
                
                {/* Favorite button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90 hover:text-primary"
                  aria-label="Dodaj med priljubljene"
                >
                  <Heart size={18} />
                </Button>
              </div>
              
              {/* Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {dog.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImageIndex === index 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <div className="w-20 h-20">
                      <img 
                        src={image} 
                        alt={`${dog.name} - thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                ))}
                
                {/* Video thumbnails */}
                {dog.videos && dog.videos.map((video, index) => (
                  <Dialog key={`video-${index}`}>
                    <DialogTrigger asChild>
                      <button
                        className="relative rounded-lg overflow-hidden border-2 border-border hover:border-primary/50 flex-shrink-0"
                        onClick={() => {
                          setIsVideoDialogOpen(true);
                          setActiveVideoIndex(index);
                        }}
                      >
                        <div className="w-20 h-20 relative">
                          <img 
                            src={video.thumbnail} 
                            alt={`${dog.name} - video thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>
                  </Dialog>
                ))}
              </div>
            </div>
            
            {/* Right column - Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold">{dog.name}</h1>
                  <p className="text-muted-foreground">{dog.breed} • {dog.age} • {dog.gender}</p>
                </div>
                <div className="flex space-x-2">
                  {adjacentDogs.prev && (
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => navigateToAdjacentDog(adjacentDogs.prev)}
                      aria-label="Prejšnji pes"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  )}
                  {adjacentDogs.next && (
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => navigateToAdjacentDog(adjacentDogs.next)}
                      aria-label="Naslednji pes"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  V zavetišču od {formattedDate}
                </Badge>
                {dog.microchipped && (
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Čipiran
                  </Badge>
                )}
                {dog.vaccinated && (
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Cepljen
                  </Badge>
                )}
                {dog.neutered && (
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    {dog.gender === "Samec" ? "Kastriran" : "Sterilizirana"}
                  </Badge>
                )}
              </div>
              
              <Tabs defaultValue="about" className="mb-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">O psu</TabsTrigger>
                  <TabsTrigger value="requirements">Zahteve</TabsTrigger>
                  <TabsTrigger value="contact">Kontakt</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Opis</h3>
                    <p className="text-muted-foreground">{dog.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Osnovne informacije</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Starost:</span>
                          <span className="font-medium">{dog.age}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Pasma:</span>
                          <span className="font-medium">{dog.breed}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Spol:</span>
                          <span className="font-medium">{dog.gender}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Velikost:</span>
                          <span className="font-medium">{dog.size}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Barva:</span>
                          <span className="font-medium">{dog.color}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Primeren za</h3>
                      <p className="text-muted-foreground mb-4">{dog.suitableFor}</p>
                      
                      <h3 className="text-lg font-semibold mb-2">Ni primeren za</h3>
                      <p className="text-muted-foreground">{dog.notSuitableFor}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Dodatne informacije</h3>
                    <p className="text-muted-foreground">{dog.additionalInfo}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="requirements" className="space-y-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Zahteve za posvojitev</CardTitle>
                      <CardDescription>
                        Pred posvojitvijo {dog.name} prosimo, da upoštevate naslednje zahteve
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="whitespace-pre-line text-muted-foreground">
                        {dog.adoptionRequirements}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                      <div className="bg-primary/5 rounded-lg p-4 w-full">
                        <div className="flex items-start gap-2">
                          <Info className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="font-medium">Postopek posvojitve</h4>
                            <p className="text-sm text-muted-foreground">
                              Pred posvojitvijo je potrebno izpolniti vprašalnik in opraviti razgovor z našim osebjem.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 w-full">
                        <Button asChild className="flex-1">
                          <Link to="/posvojitev/vprašalnik">
                            <FileText className="mr-2 h-4 w-4" />
                            Izpolni vprašalnik
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link to="/posvojitev/postopek">
                            Več o postopku
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="contact" className="space-y-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Kontaktne informacije</CardTitle>
                      <CardDescription>
                        Za več informacij o {dog.name} nas lahko kontaktirate
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <div>
                          <p className="text-sm text-muted-foreground">Telefon</p>
                          <p className="font-medium">{dog.contactInfo.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <div>
                          <p className="text-sm text-muted-foreground">E-pošta</p>
                          <p className="font-medium">{dog.contactInfo.email}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to="/termini">
                          <Calendar className="mr-2 h-4 w-4" />
                          Rezerviraj termin za obisk
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1">
                  <Link to="/termini">
                    Rezerviraj termin za obisk
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to="/posvojitev/psi">
                    Nazaj na seznam psov
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default DogProfile;
