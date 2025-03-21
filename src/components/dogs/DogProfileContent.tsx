
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
    <div className="container">
      <DogProfileBreadcrumb dogName={dog.name} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <DogProfileHeader name={dog.name} status={dog.status} />
          
          <DogImageCarousel 
            dogName={dog.name} 
            images={dog.images} 
            videos={dog.videos}
            isDetailPage
          />

          <Tabs defaultValue="about" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">O psu</TabsTrigger>
              <TabsTrigger value="requirements">Posvojitev</TabsTrigger>
              <TabsTrigger value="health">Zdravje</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-4">
              <DogAboutTab 
                name={dog.name}
                description={dog.description}
                suitableFor={dog.suitableFor}
                notSuitableFor={dog.notSuitableFor}
                additionalInfo={dog.additionalInfo}
              />
            </TabsContent>
            
            <TabsContent value="requirements" className="mt-4">
              <DogRequirementsTab 
                name={dog.name}
                adoptionRequirements={dog.adoptionRequirements}
                handleFillQuestionnaire={handleFillQuestionnaire}
              />
            </TabsContent>
            
            <TabsContent value="health" className="mt-4">
              <DogHealthTab 
                name={dog.name}
                vaccinated={dog.vaccinated}
                neutered={dog.neutered}
                microchipped={dog.microchipped}
                gender={dog.gender}
              />
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-col mt-6 space-y-4">
            <Button className="w-full" onClick={handleScheduleAppointment}>
              Rezerviraj termin za obisk
            </Button>
            <Button variant="teal" className="w-full" onClick={handleFillQuestionnaire}>
              <FileText className="mr-2 h-5 w-5" />
              Izpolni vprašalnik
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/posvojitev/psi">
                Nazaj na seznam psov
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
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
