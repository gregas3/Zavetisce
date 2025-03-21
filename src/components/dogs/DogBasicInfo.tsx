
import React from "react";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DogBasicInfoProps {
  age: string;
  breed: string;
  gender: string;
  size: string;
  color: string;
  dateArrived: string;
}

const DogBasicInfo = ({ 
  age, 
  breed, 
  gender, 
  size, 
  color, 
  dateArrived 
}: DogBasicInfoProps) => {
  const formattedDate = dateArrived 
    ? format(new Date(dateArrived), 'dd. MM. yyyy')
    : 'Ni podatka';

  return (
    <div className="space-y-4">
      <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
        <Calendar className="h-3 w-3" />
        V zavetišču od {formattedDate}
      </Badge>
      
      <div className="grid grid-cols-2 gap-y-2">
        <div>
          <p className="text-sm text-muted-foreground">Starost</p>
          <p className="font-medium">{age}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Pasma</p>
          <p className="font-medium">{breed}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Spol</p>
          <p className="font-medium">{gender}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Velikost</p>
          <p className="font-medium">{size}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Barva</p>
          <p className="font-medium">{color}</p>
        </div>
      </div>
    </div>
  );
};

export default DogBasicInfo;
