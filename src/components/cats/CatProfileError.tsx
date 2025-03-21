
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const CatProfileError = () => {
  return (
    <Layout>
      <div className="container text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Mačka ni bila najdena</h1>
        <p className="mb-6">Oprostite, iskana mačka ne obstaja ali pa je bila odstranjena.</p>
        <Button asChild>
          <Link to="/posvojitev/mačke">Nazaj na seznam mačk</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default CatProfileError;
