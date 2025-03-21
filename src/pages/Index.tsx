
import { Helmet } from 'react-helmet';
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
      
      <main className="min-h-screen pb-16 bg-white">
        <HeroSection />
        <div className="bg-gradient-to-b from-[#e2efed]/80 to-[#dfecea]/80 py-8">
          <FeaturedAnimals />
        </div>
        <QuickLinks />
        <StatsSection />
        <CtaSection />
        <TestimonialsSection />
      </main>
    </>
  );
};

export default Index;
