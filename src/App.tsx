
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ScrollToTop from "./components/shared/ScrollToTop";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DogsAdoption from "./pages/DogsAdoption";
import DogProfile from "./pages/DogProfile";
import CatsAdoption from "./pages/CatsAdoption";
import CatProfile from "./pages/CatProfile";
import Appointments from "./pages/Appointments";
import Questionnaire from "./pages/Questionnaire";
import AdoptionProcess from "./pages/AdoptionProcess";
import Donations from "./pages/Donations";
import Volunteer from "./pages/Volunteer";
import Kontakt from "./pages/Kontakt";
import AboutUs from "./pages/AboutUs";
import LostAndFound from "./pages/LostAndFound";
import StrayCats from "./pages/StrayCats";
import VeterinaryCorner from "./pages/about/VeterinaryCorner";
import AnimalCare from "./pages/about/AnimalCare";

const queryClient = new QueryClient();

const App = () => {
  // Set up scroll restoration to 'manual' at app level
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Zavetišče Maribor – Pomoč za živali</title>
        <meta name="description" content="Spletni portal za posvojitve, donacije in informacije o živalih v Zavetišču Maribor." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Adoption routes */}
            <Route path="/posvojitev/psi" element={<DogsAdoption />} />
            <Route path="/posvojitev/psi/:id" element={<DogProfile />} />
            <Route path="/posvojitev/mačke" element={<CatsAdoption />} />
            <Route path="/posvojitev/mačke/:id" element={<CatProfile />} />
            <Route path="/posvojitev/postopek" element={<AdoptionProcess />} />
            
            {/* Questionnaire route - adding both paths for compatibility */}
            <Route path="/vprasalnik" element={<Questionnaire />} />
            <Route path="/posvojitev/vprašalnik" element={<Questionnaire />} />
            
            {/* Stray cats route */}
            <Route path="/prostozivece-macke" element={<StrayCats />} />
            
            {/* Appointments route */}
            <Route path="/termini" element={<Appointments />} />
            
            {/* Donations route */}
            <Route path="/donacije" element={<Donations />} />
            
            {/* Volunteer route */}
            <Route path="/prostovoljstvo" element={<Volunteer />} />
            
            {/* Contact route */}
            <Route path="/kontakt" element={<Kontakt />} />
            
            {/* About us routes */}
            <Route path="/o-nas" element={<AboutUs />} />
            <Route path="/about/veterinarski-koticek" element={<VeterinaryCorner />} />
            <Route path="/about/oskrba-zivali" element={<AnimalCare />} />
            
            {/* Lost and Found route */}
            <Route path="/izgubljeni-najdeni" element={<LostAndFound />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
