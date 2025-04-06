
import { getAnimals, Animal } from "@/data/animalsData";
import Fuse from 'fuse.js';

// Configure the fuzzy search options
const fuseOptions = {
  keys: [
    { name: 'name', weight: 2 },
    { name: 'breed', weight: 1.5 },
    { name: 'color', weight: 1 },
    { name: 'description', weight: 1 },
    { name: 'characteristics', weight: 1 },
    { name: 'gender', weight: 0.8 },
    { name: 'size', weight: 0.8 },
    'type',
    'age',
    'goodWith'
  ],
  includeScore: true,
  threshold: 0.4, // Lower threshold means stricter matching
  ignoreLocation: true,
};

// Initialize Fuse instance with animal data
let fuseInstance: Fuse<Animal> | null = null;

// Lazy initialization of Fuse instance
const getFuseInstance = () => {
  if (!fuseInstance) {
    const animals = getAnimals();
    fuseInstance = new Fuse(animals, fuseOptions);
  }
  return fuseInstance;
};

// Reset Fuse instance (useful when animal data changes)
export const resetSearchIndex = () => {
  fuseInstance = null;
};

// Search function that returns matching animals
export const searchAnimals = (query: string): Animal[] => {
  if (!query.trim()) return [];
  
  const fuse = getFuseInstance();
  const results = fuse.search(query);
  
  // Return animals sorted by relevance score
  return results.map(result => result.item);
};

// Get animal profile URL
export const getAnimalProfileUrl = (animal: Animal): string => {
  return animal.type === "pes" 
    ? `/pes/${animal.id}` 
    : `/macka/${animal.id}`;
};

// Get search URL with query parameter
export const getSearchUrl = (query: string): string => {
  return `/iskanje?query=${encodeURIComponent(query)}`;
};
