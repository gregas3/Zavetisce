export interface Story {
  id: string;
  name: string;
  text: string;
  image: string;
  type: 'adopter' | 'volunteer' | 'dog-walker';
  animalImage?: string; 
  videoUrl?: string;
  featured?: boolean; // For highlighting on homepage
}

export const stories: Story[] = [
  {
    id: "story1",
    name: "Ana Kovač",
    text: "Ko sem prvič videla Mikija v zavetišču, sem vedela, da sva si usojena. Bilo je, kot da bi me poznal že vse življenje. Danes je Miki nepogrešljiv član naše družine in niti predstavljati si ne morem življenja brez njega.",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    animalImage: "/lovable-uploads/d17c98e9-d9a9-4e46-947c-373b929f0b53.png",
    type: "adopter",
    featured: true
  },
  {
    id: "story2",
    name: "Marko Novak",
    text: "Kot prostovoljec v zavetišču sem spoznal nešteto čudovitih psov in njihovih zgodb. Vsak teden, ko pridem na sprehod z njimi, dobim več, kot dajem. To je ena najbolj izpolnjujočih stvari, ki sem jih kdaj počel.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    animalImage: "/lovable-uploads/906ab7e3-5336-465c-af1c-f705e6e8bedf.png",
    type: "dog-walker",
    featured: true
  },
  {
    id: "story3",
    name: "Nina Horvat",
    text: "Že pet let prostovoljno pomagam v zavetišču in doživela sem ogromno ganljivih trenutkov. Ko vidiš, kako pes, ki je bil prej prestrašen in nedostopen, začne zaupati ljudem - to je nepopisno lepo doživetje.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    animalImage: "/lovable-uploads/cd9908b3-76f2-4fd9-a3d9-b739d1b8721f.png",
    type: "volunteer",
    featured: true
  },
  {
    id: "story4",
    name: "Janez Hrovat",
    text: "Posvojitev mačke Muce je bila ena najboljših odločitev v mojem življenju. Zdaj me vsak dan pričaka pri vratih, ko pridem iz službe, in skupaj preživiva večere ob gledanju televizije.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    animalImage: "/lovable-uploads/855c1f57-5893-4641-9022-ed413de55b90.png",
    type: "adopter"
  },
  {
    id: "story5",
    name: "Petra Kranjc",
    text: "Kot sprehajalka psov v zavetišču sem spoznala Rex-a, ki je bil na začetku zelo sramežljiv in prestrašen. Po nekaj mesecih rednih sprehodov sva razvila posebno vez, in zdaj me vedno pozdravi z mahajočim repom.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    animalImage: "/lovable-uploads/2c83f5ef-126f-466b-b39a-e3b59e673a45.png",
    type: "dog-walker"
  },
  {
    id: "story6",
    name: "Matej Zajc",
    text: "Posvojitev starejšega psa je bila najboljša odločitev. Reks je že imel 8 let, ko je prišel k nam, a je prinesel toliko ljubezni in modrosti v naš dom. Starejši psi so res posebni in hvaležni.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    animalImage: "/lovable-uploads/d154fae5-9f35-4f95-9308-55b5d9599de4.png",
    type: "adopter",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// Function to get random featured stories for homepage
export const getRandomFeaturedStories = (count: number = 3): Story[] => {
  const featuredStories = stories.filter(story => story.featured);
  
  // If we have fewer featured stories than requested, return all featured stories
  if (featuredStories.length <= count) return featuredStories;
  
  // Otherwise, return a random selection
  const shuffled = [...featuredStories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to get stories by type
export const getStoriesByType = (type: Story['type'] | 'all'): Story[] => {
  if (type === 'all') return stories;
  return stories.filter(story => story.type === type);
};
