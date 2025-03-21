
// Cats database shared between pages
export interface Cat {
  id: number;
  name: string;
  color: string;
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

export const cats: Cat[] = [
  {
    id: 5,
    name: "Bor",
    color: "Črna",
    age: "3 leta",
    gender: "samec",
    size: "srednja",
    image: "/lovable-uploads/355994ff-7034-4e34-8839-91a36ab6fd78.png",
    description: "Bor je odrasel, cartljiv muc, sprejet s poškodovanim očesom. Poškodovano oko smo amputirali, na življenje z eno očko pa se je lepo navadil. Rojen 09. 12. 2021, v zavetišče sprejet 08. 12. 2024.",
    characteristics: ["cartljiv", "prijazen", "pogumen", "prilagodljiv"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "starejši", "mirno okolje"]
  },
  {
    id: 4,
    name: "Carta",
    color: "Črna",
    age: "1.5 leta",
    gender: "samica",
    size: "srednja",
    image: "/lovable-uploads/855c1f57-5893-4641-9022-ed413de55b90.png",
    description: "Za najbolj cartljivo muco se spodobi, da dobi tudi ime, ki jo najbolje opisuje.. Carta. Puhasta, mehka in nežna Carta je stara leto in pol. Po nekaj težavah s prebavo smo prilagodili njeno prehrano na surovo meso (konj) in se je stanje zdaj že povsem normaliziralo. Potrebuje skrbne in odgovorne lastnike, ki ji bodo omogočili mirno in srečno življenje.",
    characteristics: ["cartljiva", "puhasta", "mehka", "nežna"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "odgovorni lastniki", "mirno okolje"]
  },
  {
    id: 1,
    name: "Muri",
    color: "Črno-bela",
    age: "1 leto",
    gender: "samec",
    size: "srednji",
    image: "/lovable-uploads/43430fe9-3d3a-406d-bde2-ac740dabf168.png",
    description: "Muri je igriv in radoveden mlad maček, ki se rad stiska in prede.",
    characteristics: ["igriv", "radoveden", "prijazen", "nežen"],
    vaccinated: true,
    neutered: true,
    goodWith: ["otroci", "starejši", "drugi mačke"]
  },
  {
    id: 2,
    name: "Črnko",
    color: "Črna",
    age: "2 leti",
    gender: "samec",
    size: "srednji",
    image: "/lovable-uploads/e65f84fb-fb7c-4a55-bbb4-9d89d93ae2df.png",
    description: "Črnko je eleganten črn maček, ki je samostojen, a hkrati ljubeč do ljudi.",
    characteristics: ["eleganten", "samostojen", "ljubeč", "miren"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "drugi mačke"]
  },
  {
    id: 3,
    name: "Liza",
    color: "Siva tigrasta",
    age: "5 let",
    gender: "samica",
    size: "majhna",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
    description: "Liza je umirjena odrasla mačka, ki išče miren dom, kjer bo lahko kraljevala.",
    characteristics: ["umirjena", "nežna", "samostojna", "dostojanstvena"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "starejši", "mirno okolje"]
  }
];
