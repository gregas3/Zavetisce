
import { dogs } from "@/data/dogsData";
import { dogsDatabase, DogData } from "@/data/dogDatabase";

/**
 * Creates a filtered database of dogs that exist in both the shared dogs data
 * and the detailed dogs database
 */
export const createFilteredDogsDatabase = (): Record<string, DogData> => {
  const result: Record<string, DogData> = {};
  
  const sharedDogsMap = new Map(
    dogs.map(dog => [dog.id.toString(), dog])
  );
  
  for (const [id, dog] of Object.entries(dogsDatabase)) {
    if (sharedDogsMap.has(id)) {
      result[id] = {
        ...dog,
        images: [
          sharedDogsMap.get(id)!.image,
          ...dog.images.slice(1)
        ]
      };
      
      if (dog.videos && dog.videos.length > 0) {
        result[id].videos = [{
          ...dog.videos[0],
          thumbnail: sharedDogsMap.get(id)!.image
        }, ...dog.videos.slice(1)];
      }
    }
  }
  
  return result;
};

// Pre-computed filtered database
export const filteredDogsDatabase = createFilteredDogsDatabase();

/**
 * Fetches a dog by ID from the filtered database
 */
export const fetchDogById = async (id: string): Promise<DogData> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const dog = filteredDogsDatabase[id];
  if (!dog) {
    throw new Error(`Dog with id ${id} not found`);
  }
  
  return dog;
};

/**
 * Finds adjacent dog IDs for navigation
 */
export const findAdjacentDogIds = (currentId: string) => {
  const allDogIds = Object.keys(filteredDogsDatabase).sort((a, b) => parseInt(a) - parseInt(b));
  const currentIndex = allDogIds.indexOf(currentId);
  
  const prevDogId = currentIndex > 0 ? allDogIds[currentIndex - 1] : undefined;
  const nextDogId = currentIndex < allDogIds.length - 1 ? allDogIds[currentIndex + 1] : undefined;
  
  return { prevDogId, nextDogId };
};
