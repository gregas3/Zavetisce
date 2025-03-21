
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { findAdjacentDogIds } from "@/services/dogService";
import { DogData } from "@/data/dogDatabase";

interface DogProfileNavigationProps {
  dog: DogData;
}

const DogProfileNavigation: React.FC<DogProfileNavigationProps> = ({ dog }) => {
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
  
  return {
    handleScheduleAppointment,
    handleFillQuestionnaire,
    prevDogId,
    nextDogId
  };
};

export default DogProfileNavigation;
