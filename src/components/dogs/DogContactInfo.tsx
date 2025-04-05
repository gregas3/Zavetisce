
import React from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent
} from "@/components/ui/card";

interface DogContactInfoProps {
  name: string;
  contactInfo: {
    phone: string;
    email: string;
  };
}

const DogContactInfo = ({ 
  name, 
  contactInfo
}: DogContactInfoProps) => {
  return (
    <Card className="mx-auto w-full">
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
    </Card>
  );
};

export default DogContactInfo;
