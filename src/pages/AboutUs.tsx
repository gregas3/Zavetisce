
import { Helmet } from 'react-helmet';
import Layout from "@/components/layout/Layout";
import Section from "@/components/shared/Section";
import AboutHero from "@/components/about/AboutHero";
import AboutShelter from "@/components/about/AboutShelter";
import HistorySection from "@/components/about/HistorySection";
import MissionVision from "@/components/about/MissionVision";
import GoalsSection from "@/components/about/GoalsSection";
import ReportsSection from "@/components/about/ReportsSection";
import SupportCta from "@/components/about/SupportCta";

const AboutUs = () => {
  return (
    <Layout>
      <Helmet>
        <title>O nas | Zavetišče za živali Maribor</title>
        <meta name="description" content="Informacije o zavetišču za živali Maribor, našem poslanstvu, viziji in ciljih. Spoznajte našo zgodovino in delovanje zavetišča za zapuščene živali." />
      </Helmet>
      
      <main className="min-h-screen pt-12">
        {/* Hero Section */}
        <AboutHero />
        
        {/* About Section */}
        <Section title="O zavetišču" animation="fade-in">
          <AboutShelter />
        </Section>
        
        {/* History Section */}
        <Section 
          className="bg-teal-50/50" 
          title="Naša zgodovina" 
          animation="slide-up"
          backgroundImage="/lovable-uploads/060e39f4-153d-459c-ab6c-323995a50012.png"
          backgroundOverlay="rgba(226, 245, 237, 0.92)"
          backgroundFilter="brightness(1.05)"
        >
          <HistorySection />
        </Section>
        
        {/* Mission and Vision Section */}
        <Section title="Poslanstvo in vizija" subtitle="Kaj nas vodi pri našem delu" animation="fade-in">
          <MissionVision />
        </Section>
        
        {/* Goals Section */}
        <Section className="bg-teal-50/50" title="Naši cilji" subtitle="Z vizijo postati idealno zavetišče zasledujemo naslednje cilje" animation="fade-in">
          <GoalsSection />
        </Section>
        
        {/* Reports Section */}
        <Section title="Poročila o delu" subtitle="Transparentnost je za nas pomembna" animation="fade-in">
          <ReportsSection />
        </Section>
        
        {/* CTA Section */}
        <SupportCta />
      </main>
    </Layout>
  );
};

export default AboutUs;
