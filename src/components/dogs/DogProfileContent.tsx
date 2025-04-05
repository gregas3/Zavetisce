
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Dog } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type DogData } from "@/services/dogService";
import DogProfileHeader from "./DogProfileHeader";
import DogImageCarousel from "./DogImageCarousel";
import DogBasicInfo from "./DogBasicInfo";
import DogAboutTab from "./DogAboutTab";
import DogRequirementsTab from "./DogRequirementsTab";
import DogHealthTab from "./DogHealthTab";
import DogContactInfo from "./DogContactInfo";
import DogProfileBreadcrumb from "./DogProfileBreadcrumb";
import { useToast } from "@/components/ui/use-toast";
import ShareModal from "@/components/shared/ShareModal";

interface DogProfileContentProps {
  dog: DogData;
}

const DogProfileContent = ({ dog }: DogProfileContentProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

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

  const handleVolunteerClick = () => {
    navigate('/prostovoljstvo');
  };

  return (
    <div className="container">
      <DogProfileBreadcrumb dogName={dog.name} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <DogProfileHeader name={dog.name} status={dog.status} />
            
            <ShareModal 
              animalName={dog.name} 
              animalType="pes" 
              animalId={dog.id}
              trigger={
                <Button variant="outline" size="icon" className="rounded-full">
                  <span className="sr-only">Deli žival</span>
                </Button>
              }
            />
          </div>
          
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
          
          {/* Action buttons moved here, between basic info and contact */}
          <div className="flex flex-col gap-2 p-3 bg-teal-50/80 rounded-lg shadow-sm border border-teal-100">
            <Button asChild variant="outline" size="sm" className="h-8 justify-start text-sm">
              <Link to="/posvojitev/psi">
                Nazaj na seznam psov
              </Link>
            </Button>
            
            <Button 
              variant="teal" 
              size="sm" 
              className="h-8 justify-start text-black text-sm" 
              onClick={handleScheduleAppointment}
            >
              Prijava na ogled
            </Button>
            
            <Button 
              variant="teal" 
              size="sm" 
              className="h-8 justify-start text-sm" 
              onClick={handleFillQuestionnaire}
            >
              <FileText className="mr-2 h-3.5 w-3.5" />
              Izpolni vprašalnik
            </Button>
            
            <Button 
              variant="lightTeal" 
              size="sm" 
              className="h-8 justify-start text-teal-800 text-sm" 
              onClick={handleVolunteerClick}
            >
              <Dog className="mr-2 h-3.5 w-3.5" />
              Postani sprehajalec
            </Button>
          </div>
          
          <DogContactInfo 
            name={dog.name}
            contactInfo={dog.contactInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default DogProfileContent;
