
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const DogProfileError = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-10">
        <div className="container text-center py-10">
          <h1 className="text-2xl font-bold mb-4">Pes ni bil najden</h1>
          <p className="mb-6">Oprostite, iskani pes ne obstaja ali pa je bil odstranjen.</p>
          <Button asChild>
            <Link to="/posvojitev/psi">Nazaj na seznam psov</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DogProfileError;
