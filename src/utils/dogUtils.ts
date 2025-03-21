
import { dogs } from "@/data/dogsData";

// Function to synchronize dog data between the profile view and list view
export const syncDogData = (dogId: number, mainImage: string) => {
  // Find the dog in the shared data
  const dogIndex = dogs.findIndex(dog => dog.id === dogId);
  
  if (dogIndex !== -1) {
    // Update the image in the shared data
    dogs[dogIndex].image = mainImage;
    console.log(`Updated dog ${dogId} image to ${mainImage}`);
    return true;
  }
  
  console.log(`Dog with ID ${dogId} not found in shared data`);
  return false;
};
