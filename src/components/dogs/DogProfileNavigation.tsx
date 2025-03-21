
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { findAdjacentDogIds } from "@/services/dogService";
import { DogData } from "@/data/dogDatabase";

interface DogProfileNavigationProps {
  dog: DogData;
  onNavigate?: (navigationInfo: {
    prevDogId?: string;
    nextDogId?: string;
    handleScheduleAppointment: () => void;
    handleFillQuestionnaire: () => void;
  }) => void;
}

const DogProfileNavigation: React.FC<DogProfileNavigationProps> = ({ dog, onNavigate }) => {
  const navigate = useNavigate();
  const { prevDogId, nextDogId } = findAdjacentDogIds(dog.id);
  
  const handleScheduleAppointment = () => {
    navigate(`/termini?animalId=${dog.id}&animalName=${dog.name}&animalType=Pes`);
    toast({
      title: "Termin za ogled",
      description: `Ustvarjanje termina za ogled psa ${dog.name}`,
    });
  };
  
  const handleFillQuestionnaire = () => {
    navigate(`/posvojitev/vprašalnik?animalName=${dog.name}&animalType=Pes`);
    toast({
      title: "Vprašalnik za posvojitev",
      description: `Izpolnjevanje vprašalnika za posvojitev psa ${dog.name}`,
    });
  };
  
  // Use the callback if provided, otherwise this component doesn't render anything visible
  React.useEffect(() => {
    if (onNavigate) {
      onNavigate({
        prevDogId,
        nextDogId,
        handleScheduleAppointment,
        handleFillQuestionnaire
      });
    }
  }, [dog.id, onNavigate]);
  
  // This component doesn't render anything visible - it just provides functionality
  return null;
};

export default DogProfileNavigation;
