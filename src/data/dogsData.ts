export interface Dog {
  id: number;
  name: string;
  gender: 'samec' | 'samica';
  breed: string;
  age: string;
  size: string;
  description: string;
  characteristics: string[];
  image: string;
  images?: string[]; // Add support for multiple images
  vaccination?: string;
  castration?: string;
  chip?: string;
  health?: string;
  requirements?: string[];
  adoptionProcess?: string;
  videos?: {
    thumbnail: string;
    url: string;
    title: string;
  }[];
}

export const dogs: Dog[] = [
  {
    id: 1,
    name: 'Bim',
    gender: 'samec',
    breed: 'Mešanec',
    age: '2 leti',
    size: 'Srednji',
    description: 'Bim je prijazen in igriv pes, ki išče ljubeč dom. Je zelo energičen in potrebuje veliko gibanja.',
    characteristics: ['Prijazen', 'Iglriv', 'Energičen', 'Inteligenten'],
    image: '/lovable-uploads/0674c8f5-b223-455c-8b15-0fa594099fad.png',
    vaccination: 'cepljen',
    castration: 'kastriran',
    chip: 'čipiran',
    health: 'zdrav',
    requirements: ['Veliko gibanja', 'Prijazen lastnik'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe',
    videos: [
      {
        thumbnail: '/placeholder-dog-video-thumbnail.png',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Bim se igra'
      }
    ]
  },
  {
    id: 2,
    name: 'Luna',
    gender: 'samica',
    breed: 'Labradorec',
    age: '1 leto',
    size: 'Velik',
    description: 'Luna je nežna in ljubezniva psička, ki obožuje otroke. Je zelo poslušna in hitro učljiva.',
    characteristics: ['Nežna', 'Ljubezniva', 'Poslušna', 'Učljiva'],
    image: '/lovable-uploads/072fa08a-6143-4c19-8c93-afd108144826.png',
    vaccination: 'cepljena',
    castration: 'sterilizirana',
    chip: 'čipirana',
    health: 'zdrava',
    requirements: ['Dostop do vrta', 'Igre z otroki'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  },
  {
    id: 3,
    name: 'Rex',
    gender: 'samec',
    breed: 'Nemški ovčar',
    age: '3 leta',
    size: 'Velik',
    description: 'Rex je zvest in zaščitniški pes, ki potrebuje izkušenega lastnika. Je zelo inteligenten in potrebuje veliko mentalne stimulacije.',
    characteristics: ['Zvest', 'Zaščitniški', 'Inteligenten', 'Potrebuje izkušenega lastnika'],
    image: '/lovable-uploads/098b937d-c365-4e7b-b760-6b167ee1a376.png',
    vaccination: 'cepljen',
    castration: 'kastriran',
    chip: 'čipiran',
    health: 'zdrav',
    requirements: ['Izkušen lastnik', 'Veliko mentalne stimulacije'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  },
  {
    id: 4,
    name: 'Mici',
    gender: 'samica',
    breed: 'Mešanka',
    age: '6 mesecev',
    size: 'Majhen',
    description: 'Mici je majhna in prikupna psička, ki išče topel dom. Je zelo igriva in rada se crklja.',
    characteristics: ['Prikupna', 'Iglriva', 'Crkljiva'],
    image: '/lovable-uploads/104a72ef-7c74-4656-b79d-5995c98a84cf.png',
    vaccination: 'cepljena',
    castration: 'še ni sterilizirana',
    chip: 'čipirana',
    health: 'zdrava',
    requirements: ['Topel dom', 'Veliko ljubezni'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  },
  {
    id: 5,
    name: 'Max',
    gender: 'samec',
    breed: 'Borderski škotski ovčar',
    age: '5 let',
    size: 'Srednji',
    description: 'Max je izredno inteligenten pes, ki potrebuje veliko aktivnosti. Primeren je za lastnike, ki imajo izkušnje s pasjo poslušnostjo in agility.',
    characteristics: ['Inteligenten', 'Aktiven', 'Potrebuje izkušnje', 'Agility'],
    image: '/lovable-uploads/12345678-1234-1234-1234-123456789012.png',
     vaccination: 'cepljen',
    castration: 'kastriran',
    chip: 'čipiran',
    health: 'zdrav',
    requirements: ['Izkušnje s pasjo poslušnostjo', 'Veliko aktivnosti'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  },
  {
    id: 6,
    name: 'Bella',
    gender: 'samica',
    breed: 'Zlati prinašalec',
    age: '4 leta',
    size: 'Velik',
    description: 'Bella je prijazna in ljubezniva psica, ki obožuje družbo ljudi. Je potrpežljiva in primerna za družine z otroki.',
    characteristics: ['Prijazna', 'Ljubezniva', 'Potrpežljiva', 'Primerna za otroke'],
    image: '/lovable-uploads/22223333-4444-5555-6666-777788889999.png',
    vaccination: 'cepljena',
    castration: 'sterilizirana',
    chip: 'čipirana',
    health: 'zdrava',
    requirements: ['Družba ljudi', 'Potrpežljivost'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  },
  {
    id: 7,
    name: 'Charlie',
    gender: 'samec',
    breed: 'Jack Russell terier',
    age: '1 leto',
    size: 'Majhen',
    description: 'Charlie je energičen in igriv pes, ki potrebuje veliko gibanja. Je inteligenten in rad se uči novih trikov.',
    characteristics: ['Energičen', 'Iglriv', 'Inteligenten', 'Rad se uči'],
    image: '/lovable-uploads/33334444-5555-6666-7777-888899990000.png',
    vaccination: 'cepljen',
    castration: 'kastriran',
    chip: 'čipiran',
    health: 'zdrav',
    requirements: ['Veliko gibanja', 'Učenje novih trikov'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  },
  {
    id: 8,
    name: 'Lola',
    gender: 'samica',
    breed: 'Francoski buldog',
    age: '3 leta',
    size: 'Majhen',
    description: 'Lola je prijazna in ljubezniva psica, ki obožuje crkljanje. Je potrpežljiva in primerna za življenje v stanovanju.',
    characteristics: ['Prijazna', 'Ljubezniva', 'Crkljanje', 'Primerna za stanovanje'],
    image: '/lovable-uploads/44445555-6666-7777-8888-999900001111.png',
    vaccination: 'cepljena',
    castration: 'sterilizirana',
    chip: 'čipirana',
    health: 'zdrava',
    requirements: ['Crkljanje', 'Življenje v stanovanju'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  },
  {
    id: 9,
    name: 'Rocky',
    gender: 'samec',
    breed: 'Staffordshire bull terier',
    age: '2 leti',
    size: 'Srednji',
    description: 'Rocky je močan in energičen pes, ki potrebuje izkušenega lastnika. Je zvest in zaščitniški do svoje družine.',
    characteristics: ['Močan', 'Energičen', 'Potrebuje izkušnje', 'Zvest', 'Zaščitniški'],
    image: '/lovable-uploads/55556666-7777-8888-9999-000011112222.png',
    vaccination: 'cepljen',
    castration: 'kastriran',
    chip: 'čipiran',
    health: 'zdrav',
    requirements: ['Izkušen lastnik', 'Zvestoba', 'Zaščita'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  },
  {
    id: 10,
    name: 'Daisy',
    gender: 'samica',
    breed: 'Shih Tzu',
    age: '5 let',
    size: 'Majhen',
    description: 'Daisy je prijazna in ljubezniva psica, ki obožuje družbo ljudi. Je potrpežljiva in primerna za starejše ljudi.',
    characteristics: ['Prijazna', 'Ljubezniva', 'Potrpežljiva', 'Primerna za starejše'],
    image: '/lovable-uploads/66667777-8888-9999-0000-111122223333.png',
    vaccination: 'cepljena',
    castration: 'sterilizirana',
    chip: 'čipirana',
    health: 'zdrava',
    requirements: ['Družba ljudi', 'Potrpežljivost', 'Primerna za starejše'],
    adoptionProcess: 'Obisk v zavetišču, pogovor, podpis pogodbe'
  }
];

// For each dog in the dogs array, add an 'images' property that includes the main image plus additional dummy images
const dogsWithMultipleImages = dogs.map(dog => {
  // Generate array with the main image and additional sample images
  // This is just a temporary solution for demonstration purposes
  const additionalImages = [
    "/lovable-uploads/0674c8f5-b223-455c-8b15-0fa594099fad.png",
    "/lovable-uploads/072fa08a-6143-4c19-8c93-afd108144826.png",
    "/lovable-uploads/098b937d-c365-4e7b-b760-6b167ee1a376.png"
  ];
  
  // Create a unique set of images for each dog by selecting different additional images
  const uniqueAdditionalImages = additionalImages.filter((_, index) => 
    index % (dog.id % 3 + 1) === 0  // This formula creates variety in image selection
  );
  
  return {
    ...dog,
    images: [dog.image, ...uniqueAdditionalImages].slice(0, 3) // Limit to 3 images total
  };
});

// Replace the original dogs array with the new one that includes multiple images
export const dogsData = dogsWithMultipleImages;
