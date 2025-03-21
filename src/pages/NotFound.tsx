
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-32">
        <div className="text-center max-w-md animate-fade-in">
          <div className="mb-6">
            <div className="relative inline-block">
              <span className="text-9xl font-bold text-primary/20">404</span>
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" 
                alt="Žalostna mačka" 
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-24 object-cover rounded-full border-4 border-background shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 mt-6">Stran ni bila najdena</h1>
          <p className="text-muted-foreground mb-8">
            Oprostite, strani, ki jo iščete, ni mogoče najti. Morda je bila premaknjena ali izbrisana.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Nazaj na domačo stran
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
