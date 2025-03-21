
import { Helmet } from 'react-helmet';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import QuickLinks from "@/components/home/QuickLinks";
import FeaturedAnimals from "@/components/home/FeaturedAnimals";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsSection from "@/components/home/StatsSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Zavetišče za živali Maribor</title>
        <meta name="description" content="Zavetišče za zapuščene živali v Mariboru nudi dom izgubljenim, zapuščenim in odvzetim živalim. Posvojitev psov in mačk, prijava izgubljene ali najdene živali." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-24">
        <HeroSection />
        <FeaturedAnimals />
        <QuickLinks />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
