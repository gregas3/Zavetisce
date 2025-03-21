
import React from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";

interface CatAboutTabProps {
  name: string;
  description: string;
  suitableFor: string;
  notSuitableFor: string;
  additionalInfo: string;
}

const CatAboutTab = ({ 
  name, 
  description, 
  suitableFor, 
  notSuitableFor, 
  additionalInfo 
}: CatAboutTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>O mački {name}</CardTitle>
        <CardDescription>
          Spoznajte {name} in ugotovite, ali je prava mačka za vas.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="font-semibold mb-2">Primeren/a za:</h3>
            <p className="text-sm">{suitableFor}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Ni primeren/a za:</h3>
            <p className="text-sm">{notSuitableFor}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Dodatne informacije</h3>
          <p className="text-sm">{additionalInfo}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CatAboutTab;
