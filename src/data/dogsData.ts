
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
