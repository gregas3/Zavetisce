
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { type DogData } from "@/services/dogService";
import DogProfileHeader from "./DogProfileHeader";
import DogImageCarousel from "./DogImageCarousel";
import DogBasicInfo from "./DogBasicInfo";
import DogAboutTab from "./DogAboutTab";
import DogRequirementsTab from "./DogRequirementsTab";
import DogHealthTab from "./DogHealthTab";
import DogContactInfo from "./DogContactInfo";
import DogProfileBreadcrumb from "./DogProfileBreadcrumb";

interface DogProfileContentProps {
  dog: DogData;
}

const DogProfileContent = ({ dog }: DogProfileContentProps) => {
  const navigate = useNavigate();

  const handleScheduleAppointment = () => {
    navigate(`/termini?animalId=${dog?.id}&animalName=${dog?.name}&animalType=Pes`);
    toast({
      title: "Termin za ogled",
      description: `Ustvarjanje termina za ogled psa ${dog?.name}`,
    });
  };
  
  const handleFillQuestionnaire = () => {
    navigate(`/posvojitev/vprašalnik?animalName=${dog?.name}&animalType=Pes`);
    toast({
      title: "Vprašalnik za posvojitev",
      description: `Izpolnjevanje vprašalnika za posvojitev psa ${dog?.name}`,
    });
  };

  return (
    <div className="container max-w-5xl px-3">
      <DogProfileBreadcrumb dogName={dog.name} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DogProfileHeader name={dog.name} status={dog.status} />
          
          <DogImageCarousel 
            dogName={dog.name} 
            images={dog.images} 
            videos={dog.videos}
            isDetailPage
          />

          <Tabs defaultValue="about" className="mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about" className="text-xs py-1">O psu</TabsTrigger>
              <TabsTrigger value="requirements" className="text-xs py-1">Posvojitev</TabsTrigger>
              <TabsTrigger value="health" className="text-xs py-1">Zdravje</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-3">
              <DogAboutTab 
                name={dog.name}
                description={dog.description}
                suitableFor={dog.suitableFor}
                notSuitableFor={dog.notSuitableFor}
                additionalInfo={dog.additionalInfo}
              />
            </TabsContent>
            
            <TabsContent value="requirements" className="mt-3">
              <DogRequirementsTab 
                name={dog.name}
                adoptionRequirements={dog.adoptionRequirements}
                handleFillQuestionnaire={handleFillQuestionnaire}
              />
            </TabsContent>
            
            <TabsContent value="health" className="mt-3">
              <DogHealthTab 
                name={dog.name}
                vaccinated={dog.vaccinated}
                neutered={dog.neutered}
                microchipped={dog.microchipped}
                gender={dog.gender}
              />
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-col mt-4 space-y-2">
            <Button size="sm" className="w-full text-xs" onClick={handleScheduleAppointment}>
              Rezerviraj termin za obisk
            </Button>
            <Button size="sm" variant="teal" className="w-full text-xs" onClick={handleFillQuestionnaire}>
              <FileText className="mr-1.5 h-4 w-4" />
              Izpolni vprašalnik
            </Button>
            <Button size="sm" asChild variant="outline" className="w-full text-xs">
              <Link to="/posvojitev/psi">
                Nazaj na seznam psov
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <DogBasicInfo 
            age={dog.age}
            breed={dog.breed}
            gender={dog.gender}
            size={dog.size}
            color={dog.color}
            dateArrived={dog.dateArrived}
          />
          
          <DogContactInfo 
            name={dog.name}
            contactInfo={dog.contactInfo}
            handleScheduleAppointment={handleScheduleAppointment}
          />
        </div>
      </div>
    </div>
  );
};

export default DogProfileContent;
