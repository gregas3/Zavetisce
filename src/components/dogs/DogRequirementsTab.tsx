
import React from "react";
import { Info } from "lucide-react";
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
  adoptionRequirements
}: DogRequirementsTabProps) => {
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
      </CardFooter>
    </Card>
  );
};

export default DogRequirementsTab;
