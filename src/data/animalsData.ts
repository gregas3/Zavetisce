
import { dogs, Dog } from "./dogsData";
import { cats, Cat } from "./catsData";

export type AnimalType = "pes" | "mačka";

export interface Animal extends Omit<Dog | Cat, 'id'> {
  id: number;
  type: AnimalType;
  breed?: string; // Optional since cats don't have breed anymore
  color: string; // All animals now have color
}

// Convert dogs and cats arrays to the unified Animal type
export const getAnimals = (): Animal[] => {
  const dogsWithType: Animal[] = dogs.map(dog => ({
    ...dog,
    type: "pes"
  }));

  const catsWithType: Animal[] = cats.map(cat => ({
    ...cat,
    type: "mačka"
  }));

  // Combine and return all animals
  return [...dogsWithType, ...catsWithType];
};

// Get featured animals
export const getFeaturedAnimals = (limit: number = 6): Animal[] => {
  const allAnimals = getAnimals();
  
  // Shuffle the animals to randomize selections
  const shuffled = [...allAnimals].sort(() => 0.5 - Math.random());
  
  // Take the specified number and ensure we have a mix of dogs and cats
  // by ensuring at least one of each type if available
  const dogs = shuffled.filter(animal => animal.type === "pes");
  const cats = shuffled.filter(animal => animal.type === "mačka");
  
  if (dogs.length > 0 && cats.length > 0) {
    // Ensure at least one dog and one cat
    const featuredAnimals = [dogs[0], cats[0]];
    
    // Fill the rest with random animals
    const remainingAnimals = shuffled.filter(
      animal => animal.id !== dogs[0].id && animal.id !== cats[0].id
    );
    
    return [...featuredAnimals, ...remainingAnimals.slice(0, limit - 2)];
  }
  
  // If we don't have both types, just return the first 'limit' animals
  return shuffled.slice(0, limit);
};

// Function to get animal by ID
export const getAnimalById = (id: number, type: AnimalType): Animal | undefined => {
  const allAnimals = getAnimals();
  return allAnimals.find(animal => animal.id === id && animal.type === type);
};
