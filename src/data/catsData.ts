
// Cats database shared between pages
export interface Cat {
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

export const cats: Cat[] = [
  {
    id: 1,
    name: "Muri",
    breed: "Evropska kratka dlaka",
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
    breed: "Evropska kratka dlaka",
    age: "2 leti",
    gender: "samec",
    size: "srednji",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e",
    description: "Črnko je eleganten črn maček, ki je samostojen, a hkrati ljubeč do ljudi.",
    characteristics: ["eleganten", "samostojen", "ljubeč", "miren"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "drugi mačke"]
  },
  {
    id: 3,
    name: "Liza",
    breed: "Evropska kratka dlaka",
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
