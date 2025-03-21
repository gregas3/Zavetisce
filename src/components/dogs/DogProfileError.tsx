
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const DogProfileError = () => {
  return (
    <Layout>
      <div className="container text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Pes ni bil najden</h1>
        <p className="mb-6">Oprostite, iskani pes ne obstaja ali pa je bil odstranjen.</p>
        <Button asChild>
          <Link to="/posvojitev/psi">Nazaj na seznam psov</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default DogProfileError;
