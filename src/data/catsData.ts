
// Cats database shared between pages
export interface Cat {
  id: number;
  name: string;
  color: string;
  age: string;
  gender: string;
  size: string;
  image: string;
  images?: string[];
  description: string;
  characteristics: string[];
  vaccinated: boolean;
  neutered: boolean;
  goodWith: string[];
  videos?: {
    thumbnail: string;
    url: string;
    title: string;
  }[];
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
    images: [
      "/lovable-uploads/355994ff-7034-4e34-8839-91a36ab6fd78.png", 
      "/lovable-uploads/7b2c4865-1b60-480f-be1b-230a93bb1b78.png"
    ],
    description: "Bor je odrasel, cartljiv muc, sprejet s poškodovanim očesom. Poškodovano oko smo amputirali, na življenje z eno očko pa se je lepo navadil. Rojen 09. 12. 2021, v zavetišče sprejet 08. 12. 2024.",
    characteristics: ["cartljiv", "prijazen", "pogumen", "prilagodljiv"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "starejši", "mirno okolje"],
    videos: [
      {
        thumbnail: "/lovable-uploads/7b2c4865-1b60-480f-be1b-230a93bb1b78.png",
        url: "https://assets.mixkit.co/videos/preview/mixkit-cat-playing-with-a-ball-of-wool-4459-large.mp4",
        title: "Bor se igra"
      }
    ]
  },
  {
    id: 4,
    name: "Carta",
    color: "Črna",
    age: "1.5 leta",
    gender: "samica",
    size: "srednja",
    image: "/lovable-uploads/855c1f57-5893-4641-9022-ed413de55b90.png",
    images: [
      "/lovable-uploads/855c1f57-5893-4641-9022-ed413de55b90.png"
    ],
    description: "Za najbolj cartljivo muco se spodobi, da dobi tudi ime, ki jo najbolje opisuje.. Carta. Puhasta, mehka in nežna Carta je stara leto in pol. Po nekaj težavah s prebavo smo prilagodili njeno prehrano na surovo meso (konj) in se je stanje zdaj že povsem normaliziralo. Potrebuje skrbne in odgovorne lastnike, ki ji bodo omogočili mirno in srečno življenje.",
    characteristics: ["cartljiva", "puhasta", "mehka", "nežna"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "odgovorni lastniki", "mirno okolje"]
  },
  {
    id: 2,
    name: "Črnko",
    color: "Črna",
    age: "2 leti",
    gender: "samec",
    size: "srednji",
    image: "/lovable-uploads/e65f84fb-fb7c-4a55-bbb4-9d89d93ae2df.png",
    images: [
      "/lovable-uploads/e65f84fb-fb7c-4a55-bbb4-9d89d93ae2df.png",
      "/lovable-uploads/355994ff-7034-4e34-8839-91a36ab6fd78.png"
    ],
    description: "Črnko je eleganten črn maček, ki je samostojen, a hkrati ljubeč do ljudi.",
    characteristics: ["eleganten", "samostojen", "ljubeč", "miren"],
    vaccinated: true,
    neutered: true,
    goodWith: ["odrasli", "drugi mačke"],
    videos: [
      {
        thumbnail: "/lovable-uploads/e65f84fb-fb7c-4a55-bbb4-9d89d93ae2df.png",
        url: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-cat-looking-at-camera-4823-large.mp4",
        title: "Črnko raziskuje"
      }
    ]
  }
];
