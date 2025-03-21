
import React from "react";
import { Cat } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CatProfileHeaderProps {
  name: string;
  status: string;
}

const CatProfileHeader = ({ name, status }: CatProfileHeaderProps) => {
  return (
    <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
      <Cat className="text-primary" size={28} />
      {name}
      <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
        {status}
      </Badge>
    </h1>
  );
};

export default CatProfileHeader;
