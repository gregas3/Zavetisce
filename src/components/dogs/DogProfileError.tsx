
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DogProfileError = () => {
  return (
    <div className="container text-center py-10">
      <h1 className="text-2xl font-bold mb-4">Pes ni bil najden</h1>
      <p className="mb-6">Oprostite, iskani pes ne obstaja ali pa je bil odstranjen.</p>
      <Button asChild>
        <Link to="/posvojitev/psi">Nazaj na seznam psov</Link>
      </Button>
    </div>
  );
};

export default DogProfileError;
