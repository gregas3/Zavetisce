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
    animalImage: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "adopter",
    featured: true
  },
  {
    id: "story2",
    name: "Marko Novak",
    text: "Kot prostovoljec v zavetišču sem spoznal nešteto čudovitih psov in njihovih zgodb. Vsak teden, ko pridem na sprehod z njimi, dobim več, kot dajem. To je ena najbolj izpolnjujočih stvari, ki sem jih kdaj počel.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    type: "dog-walker",
    featured: true
  },
  {
    id: "story3",
    name: "Nina Horvat",
    text: "Že pet let prostovoljno pomagam v zavetišču in doživela sem ogromno ganljivih trenutkov. Ko vidiš, kako pes, ki je bil prej prestrašen in nedostopen, začne zaupati ljudem - to je nepopisno lepo doživetje.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    type: "volunteer",
    featured: true
  },
  {
    id: "story4",
    name: "Janez Hrovat",
    text: "Posvojitev mačke Muce je bila ena najboljših odločitev v mojem življenju. Zdaj me vsak dan pričaka pri vratih, ko pridem iz službe, in skupaj preživiva večere ob gledanju televizije.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    animalImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "adopter"
  },
  {
    id: "story5",
    name: "Petra Kranjc",
    text: "Kot sprehajalka psov v zavetišču sem spoznala Rex-a, ki je bil na začetku zelo sramežljiv in prestrašen. Po nekaj mesecih rednih sprehodov sva razvila posebno vez, in zdaj me vedno pozdravi z mahajočim repom.",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    type: "dog-walker"
  },
  {
    id: "story6",
    name: "Matej Zajc",
    text: "Posvojitev starejšega psa je bila najboljša odločitev. Reks je že imel 8 let, ko je prišel k nam, a je prinesel toliko ljubezni in modrosti v naš dom. Starejši psi so res posebni in hvaležni.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    animalImage: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
