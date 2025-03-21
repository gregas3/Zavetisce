
import React from "react";
import { Phone, Mail, Calendar, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";

interface DogContactInfoProps {
  name: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  handleScheduleAppointment: () => void;
  prevDogId?: string;
  nextDogId?: string;
}

const DogContactInfo = ({ 
  name, 
  contactInfo, 
  handleScheduleAppointment,
  prevDogId,
  nextDogId
}: DogContactInfoProps) => {
  const navigate = useNavigate();

  const handleFillQuestionnaire = () => {
    navigate(`/posvojitev/vprašalnik?animalName=${name}&animalType=Pes`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kontakt</CardTitle>
        <CardDescription>
          Za več informacij o psu {name} nas kontaktirajte
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
            <Phone className="h-4 w-4" />
          </Button>
          <div>
            <p className="text-sm text-muted-foreground">Telefon</p>
            <p className="font-medium">{contactInfo.phone}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
            <Mail className="h-4 w-4" />
          </Button>
          <div>
            <p className="text-sm text-muted-foreground">E-pošta</p>
            <p className="font-medium">{contactInfo.email}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button onClick={handleScheduleAppointment} className="w-full text-black">
          <Calendar className="mr-2 h-4 w-4" />
          Rezerviraj termin za obisk
        </Button>
        <Button onClick={handleFillQuestionnaire} variant="teal" className="w-full text-black">
          <FileText className="mr-2 h-4 w-4" />
          Izpolni vprašalnik
        </Button>
        
        {/* Navigation buttons */}
        <div className="flex justify-between w-full mt-2">
          {prevDogId ? (
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
            >
              <Link to={`/posvojitev/psi/${prevDogId}`}>
                <ChevronLeft className="h-4 w-4" />
                Prejšnji pes
              </Link>
            </Button>
          ) : (
            <div></div> /* Empty placeholder to maintain flex spacing */
          )}
          
          {nextDogId ? (
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
            >
              <Link to={`/posvojitev/psi/${nextDogId}`}>
                Naslednji pes
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <div></div> /* Empty placeholder to maintain flex spacing */
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default DogContactInfo;
