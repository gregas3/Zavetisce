
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          
          {/* Adoption routes */}
          <Route path="/posvojitev/psi" element={<Layout><DogsAdoption /></Layout>} />
          <Route path="/posvojitev/psi/:id" element={<Layout><DogProfile /></Layout>} />
          <Route path="/posvojitev/mačke" element={<Layout><CatsAdoption /></Layout>} />
          <Route path="/posvojitev/mačke/:id" element={<Layout><CatProfile /></Layout>} />
          <Route path="/posvojitev/vprašalnik" element={<Layout><Questionnaire /></Layout>} />
          <Route path="/posvojitev/postopek" element={<Layout><AdoptionProcess /></Layout>} />
          
          {/* Appointments route */}
          <Route path="/termini" element={<Layout><Appointments /></Layout>} />
          
          {/* Donations route */}
          <Route path="/donacije" element={<Layout><Donations /></Layout>} />
          
          {/* Volunteer route */}
          <Route path="/prostovoljstvo" element={<Layout><Volunteer /></Layout>} />
          
          {/* Contact route */}
          <Route path="/kontakt" element={<Layout><Kontakt /></Layout>} />
          
          {/* About us route */}
          <Route path="/o-nas" element={<Layout><AboutUs /></Layout>} />
          
          {/* Lost and Found route */}
          <Route path="/izgubljeni-najdeni" element={<Layout><LostAndFound /></Layout>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
