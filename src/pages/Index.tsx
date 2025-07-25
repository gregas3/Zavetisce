
import { Helmet } from 'react-helmet';
import HeroSection from "@/components/home/HeroSection";
import QuickLinks from "@/components/home/QuickLinks";
import FeaturedAnimals from "@/components/home/FeaturedAnimals";
import HomeStoriesSection from "@/components/home/HomeStoriesSection";
import StatsSection from "@/components/home/StatsSection";
import CtaSection from "@/components/home/CtaSection";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Zavetišče za živali Maribor</title>
        <meta name="description" content="Zavetišče za zapuščene živali v Mariboru nudi dom izgubljenim, zapuščenim in odvzetim živalim. Posvojitev psov in mačk, prijava izgubljene ali najdene živali." />
        <meta name="keywords" content="zavetišče, živalsko zavetišče, posvojitev živali, posvojitev psov, posvojitev mačk, Maribor, zapuščene živali, donacije za živali, prostovoljstvo" />
      </Helmet>
      
      <HeroSection />
      <div className="bg-gradient-to-b from-[#e2efed]/80 to-[#dfecea]/80">
        <div className="pt-0">
          <FeaturedAnimals />
        </div>
        <QuickLinks />
        <HomeStoriesSection />
        <StatsSection />
        <CtaSection />
      </div>
    </Layout>
  );
};

export default Index;
