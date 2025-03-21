
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CatProfileError = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-10">
        <div className="container text-center py-10">
          <h1 className="text-2xl font-bold mb-4">Mačka ni bila najdena</h1>
          <p className="mb-6">Oprostite, iskana mačka ne obstaja ali pa je bila odstranjena.</p>
          <Button asChild>
            <Link to="/posvojitev/mačke">Nazaj na seznam mačk</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CatProfileError;
