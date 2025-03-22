
import React from "react";
import { FileText, Info, Dog } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";

interface DogRequirementsTabProps {
  name: string;
  adoptionRequirements: string;
  handleFillQuestionnaire: () => void;
}

const DogRequirementsTab = ({ 
  name, 
  adoptionRequirements, 
  handleFillQuestionnaire 
}: DogRequirementsTabProps) => {
  const navigate = useNavigate();
  
  const handleScheduleAppointment = () => {
    navigate(`/termini?animalName=${name}&animalType=Pes`);
  };
  
  const handleVolunteerClick = () => {
    navigate('/prostovoljstvo');
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Zahteve za posvojitev</CardTitle>
        <CardDescription>
          Pred posvojitvijo {name} prosimo, da upoštevate naslednje zahteve
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="whitespace-pre-line text-muted-foreground">
          {adoptionRequirements}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="bg-primary/5 rounded-lg p-4 w-full">
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="font-medium">Postopek posvojitve</h4>
              <p className="text-sm text-muted-foreground">
                Pred posvojitvijo je potrebno izpolniti vprašalnik in opraviti razgovor z našim osebjem.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button asChild variant="outline" className="w-full">
            <Link to="/posvojitev/psi">
              Nazaj na seznam psov
            </Link>
          </Button>
          
          <Button onClick={handleScheduleAppointment} className="w-full text-black">
            Prijava na ogled
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button className="w-full" onClick={handleFillQuestionnaire} variant="teal">
            <FileText className="mr-2 h-4 w-4" />
            Izpolni vprašalnik
          </Button>
          
          <Button onClick={handleVolunteerClick} variant="lightTeal" className="w-full">
            <Dog className="mr-2 h-4 w-4" />
            Postani sprehajalec
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DogRequirementsTab;
