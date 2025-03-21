
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
  }
];
