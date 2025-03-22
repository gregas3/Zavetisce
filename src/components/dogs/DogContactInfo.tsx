
import React from "react";
import { Phone, Mail, Calendar, FileText, Dog } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
}

const DogContactInfo = ({ 
  name, 
  contactInfo, 
  handleScheduleAppointment 
}: DogContactInfoProps) => {
  const navigate = useNavigate();

  const handleFillQuestionnaire = () => {
    navigate(`/posvojitev/vprašalnik?animalName=${name}&animalType=Pes`);
  };

  const handleVolunteerClick = () => {
    navigate('/prostovoljstvo');
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
          Prijava na ogled
        </Button>
        <Button onClick={handleFillQuestionnaire} variant="teal" className="w-full">
          <FileText className="mr-2 h-4 w-4" />
          Izpolni vprašalnik
        </Button>
        <Button onClick={handleVolunteerClick} variant="lightTeal" className="w-full">
          <Dog className="mr-2 h-4 w-4" />
          Postani prostovoljec sprehajalec
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DogContactInfo;
