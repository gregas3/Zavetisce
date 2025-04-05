
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type EmptySearchStateProps = {
  query: string;
  onClearSearch: () => void;
};

export const EmptySearchState = ({ query, onClearSearch }: EmptySearchStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-teal-800">
          Ni zadetkov za iskano besedo "{query}"
        </h3>
        <Button variant="ghost" size="sm" onClick={onClearSearch} className="text-teal-600 hover:text-teal-700">
          <X size={18} />
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Poskusite spremeniti iskalni niz ali preverite spodnje predloge
        </p>
        
        <ul className="text-sm text-gray-500 list-disc text-left inline-block mb-6">
          <li>Preverite, če je besedilo pravilno zapisano</li>
          <li>Uporabite bolj splošne besede</li>
          <li>Poskusite z manj besedami</li>
          <li>Iščite po kategorijah: psi, mačke, posvojitev</li>
        </ul>
        
        <Button onClick={onClearSearch} variant="outline" className="mt-2">
          Počisti iskanje
        </Button>
      </div>
    </div>
  );
};
