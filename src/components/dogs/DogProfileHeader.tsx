
import React from "react";
import { PawPrint } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DogProfileHeaderProps {
  name: string;
  status: string;
}

const DogProfileHeader = ({ name, status }: DogProfileHeaderProps) => {
  return (
    <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
      <PawPrint className="text-primary" size={28} />
      {name}
      <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
        {status}
      </Badge>
    </h1>
  );
};

export default DogProfileHeader;
