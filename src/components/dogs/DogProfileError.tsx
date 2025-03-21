
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const DogProfileError = () => {
  return (
    <div className="container py-20 text-center">
      <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
      <h1 className="text-2xl font-bold mb-4">Pes ni bil najden</h1>
      <p className="mb-6 text-muted-foreground">
        Oprostite, iskani pes ne obstaja ali pa je bil odstranjen.
      </p>
      <Button asChild>
        <Link to="/posvojitev/psi">Nazaj na seznam psov</Link>
      </Button>
    </div>
  );
};

export default DogProfileError;
