// Dog database with detailed information
export interface DogData {
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

export const dogsDatabase: Record<string, DogData> = {
  "11": {
    id: "11",
    name: "Bolt",
    images: [
      "/lovable-uploads/2c83f5ef-126f-466b-b39a-e3b59e673a45.png",
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "/lovable-uploads/2c83f5ef-126f-466b-b39a-e3b59e673a45.png",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Bolt na sprehodu"
      }
    ],
    age: "2 leti",
    breed: "Mešanec",
    gender: "Samec",
    size: "Velik",
    color: "Svetlo rjava",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Bolt je dvoletni samec večje rasti, ki te s svojim videzom takoj očara. Je prijazen, igriv, razposajen in hkrati tudi odličen spremljevalec na sprehodih. Je kastriran.",
    suitableFor: "Aktivne družine, izkušeni lastniki psov, dom z veliko prostora za igro",
    notSuitableFor: "Stanovanja brez dostopa do vrta, neaktivni lastniki",
    additionalInfo: "Bolt je bil sprejet v zavetišču 26. 09. 2024. Rojen je bil 26. 12. 2022.",
    dateArrived: "2024-09-26",
    adoptionRequirements: "- Aktivno gospodinjstvo\n- Dovolj časa za sprehode in igro\n- Izkušnje s psi z veliko energije\n- Vrt ali reden dostop do odprtih površin",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
  "10": {
    id: "10",
    name: "Zum",
    images: [
      "/lovable-uploads/906ab7e3-5336-465c-af1c-f705e6e8bedf.png",
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "/lovable-uploads/906ab7e3-5336-465c-af1c-f705e6e8bedf.png",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        title: "Zum na sprehodu"
      }
    ],
    age: "3 leta",
    breed: "Sibirski haski",
    gender: "Samec",
    size: "Velik",
    color: "Črno-bela",
    status: "Na voljo za posvojitev",
    microchipped: true,
    neutered: true,
    vaccinated: true,
    description: "Zum je samec v tipu pasme sibirski haski. Star je približno tri leta in je čipiran, cepljen ter kastriran. Potrebuje aktivnega skrbnika, ker pa je plašne narave in potrebuje nekaj časa, da se navadi novih ljudi, se od posvojiteljev pričakuje tudi umirjenost in potrpežljivost.",
    suitableFor: "Aktivni lastniki, izkušeni s pasmami kot je haski, potrpežljivi ljudje, ki so pripravljeni mu dati čas za prilagoditev",
    notSuitableFor: "Družine z majhnimi otroki, nepotrpežljivi lastniki, stanovanja brez dostopa do zunanjih površin",
    additionalInfo: "Zum je bil sprejet v zavetišču 20. 10. 2024. Rojen je bil 29. 08. 2021. Zaradi plašne narave potrebuje skrbnika, ki bo razumel njegove potrebe.",
    dateArrived: "2024-10-20",
    adoptionRequirements: "- Izkušnje s srednje do velikimi psi\n- Aktivni življenjski slog\n- Dovolj časa za sprehode in aktivnosti\n- Potrpežljivost pri vzpostavljanju zaupanja\n- Mirno domače okolje\n- Ograjen vrt",
    contactInfo: {
      phone: "+386 (0)2 480 16 60",
      email: "zavetisce.mb@snaga-mb.si"
    }
  },
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
    additionalInfo: "Bella je bila sprejeta v zavetišču 14. 11. 2024. Rojena je bila 15. 04. 2023. Uživa v dolgih sprehodih in igri z drugimi psi.",
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
    notSuitableFor: "Stanovanja brez dostopa do vrta, domovi z drugimi psi",
    additionalInfo: "Roki je bil sprejet v zavetišču 10. 10. 2023. Potrebuje redno jemanje zdravil za sklepe.",
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
  },
  "12": {
    id: "12",
    name: "Bono",
    images: [
      "/lovable-uploads/d17c98e9-d9a9-4e46-947c-373b929f0b53.png",
      "/lovable-uploads/a7799912-98d9-440e-b3cf-332a1d3bffd8.png", 
      "/placeholder.svg"
    ],
    videos: [
      {
        thumbnail: "/lovable-uploads/d17c98e9-d9a9-4e46-947c-3
