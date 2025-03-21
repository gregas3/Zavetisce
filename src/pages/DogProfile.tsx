
import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { syncDogData } from "@/utils/dogUtils";
import { fetchDogById } from "@/services/dogService";
import DogProfileSkeleton from "@/components/dogs/DogProfileSkeleton";
import DogProfileError from "@/components/dogs/DogProfileError";
import DogProfileBreadcrumb from "@/components/dogs/DogProfileBreadcrumb";
import DogProfileHeader from "@/components/dogs/DogProfileHeader";
import DogImageCarousel from "@/components/dogs/DogImageCarousel";
import DogBasicInfo from "@/components/dogs/DogBasicInfo";
import DogAboutTab from "@/components/dogs/DogAboutTab";
import DogRequirementsTab from "@/components/dogs/DogRequirementsTab";
import DogHealthTab from "@/components/dogs/DogHealthTab";
import DogContactInfo from "@/components/dogs/DogContactInfo";
import { FileText } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import DogProfileNavigation from "@/components/dogs/DogProfileNavigation";

const DogProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const { data: dog, isLoading, error } = useQuery({
    queryKey: ["dog", id],
    queryFn: () => fetchDogById(id || ""),
    enabled: !!id,
  });

  const handleScheduleAppointment = () => {
    if (!dog) return;
    
    navigate(`/termini?animalId=${dog.id}&animalName=${dog.name}&animalType=Pes`);
    toast({
      title: "Termin za ogled",
      description: `Ustvarjanje termina za ogled psa ${dog.name}`,
    });
  };
  
  const handleFillQuestionnaire = () => {
    if (!dog) return;
    
    navigate(`/posvojitev/vprašalnik?animalName=${dog.name}&animalType=Pes`);
    toast({
      title: "Vprašalnik za posvojitev",
      description: `Izpolnjevanje vprašalnika za posvojitev psa ${dog.name}`,
    });
  };

  if (isLoading) {
    return <DogProfileSkeleton />;
  }

  if (error || !dog) {
    return <DogProfileError />;
  }

  // Sync dog data with the shared store
  if (dog.images.length > 0) {
    syncDogData(parseInt(dog.id), dog.images[0]);
  }

  // Get navigation data
  const navigation = DogProfileNavigation({ dog });
  const { prevDogId, nextDogId } = navigation;

  return (
    <>
      <Helmet>
        <title>{dog.name} | Zavetišče za živali Maribor</title>
        <meta name="description" content={`Spoznajte ${dog.name} - ${dog.breed}, ${dog.age}. ${dog.description}`} />
      </Helmet>

      <main className="pt-20 pb-10">
        <div className="container">
          <DogProfileBreadcrumb dogName={dog.name} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <DogProfileHeader name={dog.name} status={dog.status} />
              
              <DogImageCarousel 
                dogName={dog.name} 
                images={dog.images} 
                videos={dog.videos} 
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
                <Button className="w-full text-black" onClick={handleScheduleAppointment}>
                  Rezerviraj termin za obisk
                </Button>
                <Button variant="teal" className="w-full text-black" onClick={handleFillQuestionnaire}>
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
                prevDogId={prevDogId}
                nextDogId={nextDogId}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DogProfile;
