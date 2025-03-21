
// Dogs database shared between pages
export interface Dog {
  id: number;
  name: string;
  breed: string;
  age: string;
  gender: string;
  size: string;
  image: string;
  description: string;
  characteristics: string[];
  vaccinated: boolean;
  neutered: boolean;
  goodWith: string[];
}

export const dogs: Dog[] = [
  {
    id: 12,
    name: "Bono",
    breed: "Mešanec",
    age: "4 leta",
    gender: "samec",
    size: "velik",
    image: "/lovable-uploads/d17c98e9-d9a9-4e46-947c-373b929f0b53.png",
    description: "Bono je večji samec. Na sprehodu je lepo vodljiv, poslušen in umirjen. Potrebuje odločnega in izkušenega skrbnika, ki se bo z njim aktivno ukvarjal. Ni primeren za družine z majhnimi otroki.",
    characteristics: ["vodljiv", "poslušen", "umirjen", "potrebuje izkušenega lastnika"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "izkušeni lastniki", "aktivni ljudje"]
  },
  {
    id: 11,
    name: "Bolt",
    breed: "Mešanec",
    age: "2 leti",
    gender: "samec",
    size: "velik",
    image: "/lovable-uploads/2c83f5ef-126f-466b-b39a-e3b59e673a45.png",
    description: "Bolt je dvoletni samec večje rasti, ki te s svojim videzom takoj očara. Je prijazen, igriv, razposajen in hkrati tudi odličen spremljevalec na sprehodih. Je kastriran.",
    characteristics: ["prijazen", "igriv", "razposajen", "čipiran"],
    vaccinated: true,
    neutered: true,
    goodWith: ["aktivni ljudje", "izkušeni lastniki", "družine"]
  },
  {
    id: 10,
    name: "Zum",
    breed: "Sibirski haski",
    age: "3 leta",
    gender: "samec",
    size: "velik",
    image: "/lovable-uploads/906ab7e3-5336-465c-af1c-f705e6e8bedf.png",
    description: "Zum je samec v tipu pasme sibirski haski. Star je približno tri leta in je čipiran, cepljen ter kastriran. Potrebuje aktivnega skrbnika, ker pa je plašne narave in potrebuje nekaj časa, da se navadi novih ljudi, se od posvojiteljev pričakuje tudi umirjenost in potrpežljivost.",
    characteristics: ["aktiven", "plašen", "potrpežljiv", "čipiran"],
    vaccinated: true,
    neutered: true,
    goodWith: ["aktivni ljudje", "potrpežljivi lastniki", "izkušeni lastniki"]
  },
  {
    id: 9,
    name: "Bella",
    breed: "Mešanec",
    age: "2 leti",
    gender: "samica",
    size: "velika",
    image: "/lovable-uploads/cd9908b3-76f2-4fd9-a3d9-b739d1b8721f.png",
    description: "Skoraj dve leti stara psička, večje rasti je polna energije. Obožuje igro, aktivne sprehode, zaradi svoje energičnosti pa se najbolje ujame z psi, ki uživajo v energičnih igrah. Potrebuje nekoga, ki ji bo zagotavljal dovolj gibanja in mentalnih izzivov. Je sterilizirana, čipirana, cepljena.",
    characteristics: ["energična", "aktivna", "igriva", "družabna"],
    vaccinated: true,
    neutered: true,
    goodWith: ["aktivni ljudje", "drugi psi", "izkušeni lastniki"]
  },
  {
    id: 8,
    name: "Roki",
    breed: "Mešanec",
    age: "8 let",
    gender: "samec",
    size: "srednji",
    image: "/lovable-uploads/d154fae5-9f35-4f95-9308-55b5d9599de4.png",
    description: "Roki je zaradi smrti svoje lastnice pristal v zavetišču. Star je dobrih 8 let, je kastriran in osnovno veterinarsko urejen. Je zelo prijazen in lepo vodljiv, navajen je notranjega bivanja v družbi ljudi. Z drugimi psi se ne razume najbolje. Roki išče ljubečo in odgovorno družino, ki mu bo ponudila miren dom.",
    characteristics: ["prijazen", "vodljiv", "navajen notranjega bivanja", "starejši"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "starejši"]
  },
  {
    id: 7,
    name: "Ajša",
    breed: "Mešanec",
    age: "6 mesecev",
    gender: "samica",
    size: "srednja",
    image: "/lovable-uploads/9ec09e1c-3793-4fa6-8dd5-808040227dae.png",
    description: "Ajša je 6 mesecev stara psička, izredno igriva, čuječa in ljubezniva, seveda zaradi let tudi nagajiva, kar je popolnoma normalno za njeno starost. Trenutno tehta 20 kg, bo še zrasla in postala večja psička. Išče odgovoren in ljubeč dom, kjer ji bodo nudili dovolj pozornosti, sprehodov in igre.",
    characteristics: ["igriva", "čuječa", "ljubezniva", "nagajiva"],
    vaccinated: true,
    neutered: true,
    goodWith: ["otroci", "drugi psi"]
  },
  {
    id: 1,
    name: "Reks",
    breed: "Mešanec",
    age: "2 leti",
    gender: "samec",
    size: "srednje velik",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Reks je prijazen in energičen pes z veliko ljubezni. Rad ima dolge sprehode in igranje. Išče aktivno družino, ki mu bo nudila dovolj gibanja in pozornosti.",
    characteristics: ["prijazen", "energičen", "igriv", "družaben"],
    vaccinated: true,
    neutered: true,
    goodWith: ["otroci", "drugi psi"]
  },
  {
    id: 2,
    name: "Lara",
    breed: "Mešanec",
    age: "7 mesecev",
    gender: "samica",
    size: "manjša",
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
    description: "Lara je mladič poln energije in radovednosti, ki išče aktivno družino. Zelo je živahna in rada raziskuje novo okolico. Potrebuje veliko gibanja in stimulacije.",
    characteristics: ["živahna", "radovedna", "prijazna", "učljiva"],
    vaccinated: true,
    neutered: false,
    goodWith: ["otroci", "drugi psi", "mačke"]
  },
  {
    id: 3,
    name: "Bela",
    breed: "Labrador",
    age: "3 leta",
    gender: "samica",
    size: "velika",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Bela je prijazna in mirna psička, ki obožuje družbo in crkljanje. Zelo je nežna in potrpežljiva. Rada se crklja in uživa v mirnem okolju.",
    characteristics: ["mirna", "nežna", "potrpežljiva", "ljubeča"],
    vaccinated: true,
    neutered: true,
    goodWith: ["otroci", "starejši", "drugi psi", "mačke"]
  },
  {
    id: 4,
    name: "Max",
    breed: "Nemški ovčar",
    age: "4 leta",
    gender: "samec",
    size: "velik",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f98c748d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Max je inteligenten in zaščitniški pes, ki je zelo zvest. Je zelo pameten in se hitro uči. Potrebuje dosledno vodenje in redno aktivnost.",
    characteristics: ["inteligenten", "zvest", "zaščitniški", "aktiven"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "izkušeni lastniki"]
  },
  {
    id: 5,
    name: "Piki",
    breed: "Jack Russell terier",
    age: "1 leto",
    gender: "samec",
    size: "majhen",
    image: "https://images.unsplash.com/photo-1563321769-3100f782c24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Piki je izjemno živahen in energičen terier, ki potrebuje veliko aktivnosti. Je zelo igriv in vedno pripravljen na akcijo. Potrebuje aktivnega lastnika.",
    characteristics: ["energičen", "igriv", "inteligentan", "pogumen"],
    vaccinated: true,
    neutered: false,
    goodWith: ["aktivni ljudje", "izkušeni lastniki"]
  },
  {
    id: 6,
    name: "Luna",
    breed: "Border collie",
    age: "2 leti",
    gender: "samica",
    size: "srednja",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80",
    description: "Luna je izjemno inteligentna in delovna psička, ki potrebuje mentalne izzive. Je zelo učljiva in potrebuje veliko mentalne stimulacije. Primerna za aktivne lastnike.",
    characteristics: ["inteligentna", "delovna", "učljiva", "aktivna"],
    vaccinated: true,
    neutered: true,
    goodWith: ["aktivni ljudje", "odrasli", "drugi psi"]
  }
];
