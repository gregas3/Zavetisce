
import React from "react";
import { CheckCircle } from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CatHealthTabProps {
  name: string;
  vaccinated: boolean;
  neutered: boolean;
  microchipped: boolean;
  gender: string;
}

const CatHealthTab = ({ 
  name, 
  vaccinated, 
  neutered, 
  microchipped, 
  gender 
}: CatHealthTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Zdravstveno stanje</CardTitle>
        <CardDescription>
          Zdravstvene informacije o mački {name}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg flex items-center gap-3 ${vaccinated ? "bg-green-50" : "bg-gray-100"}`}>
            <div className={`rounded-full p-2 ${vaccinated ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}>
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <Badge variant="outline" className={vaccinated ? "bg-green-100 text-green-700 border-0" : "bg-gray-100"}>
                {vaccinated ? "Da" : "Ne"}
              </Badge>
              <p className="text-sm font-medium mt-1">Cepljen/a</p>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg flex items-center gap-3 ${neutered ? "bg-green-50" : "bg-gray-100"}`}>
            <div className={`rounded-full p-2 ${neutered ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}>
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <Badge variant="outline" className={neutered ? "bg-green-100 text-green-700 border-0" : "bg-gray-100"}>
                {neutered ? "Da" : "Ne"}
              </Badge>
              <p className="text-sm font-medium mt-1">
                {gender === "samec" ? "Kastriran" : "Sterilizirana"}
              </p>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg flex items-center gap-3 ${microchipped ? "bg-green-50" : "bg-gray-100"}`}>
            <div className={`rounded-full p-2 ${microchipped ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}>
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <Badge variant="outline" className={microchipped ? "bg-green-100 text-green-700 border-0" : "bg-gray-100"}>
                {microchipped ? "Da" : "Ne"}
              </Badge>
              <p className="text-sm font-medium mt-1">Čipiran/a</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-muted-foreground">
            Vse mačke v našem zavetišču so pred oddajo veterinarsko pregledane, cepljene, mikročipirane ter tretirane proti notranjim in zunanjim zajedavcem.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CatHealthTab;
