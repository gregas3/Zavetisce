import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import AboutUs from "@/pages/AboutUs";
import Kontakt from "@/pages/Kontakt";
import DogsAdoption from "@/pages/DogsAdoption";
import CatsAdoption from "@/pages/CatsAdoption";
import DogProfile from "@/pages/DogProfile";
import CatProfile from "@/pages/CatProfile";
import Volunteer from "@/pages/Volunteer";
import Donations from "@/pages/Donations";
import ZgodbeLjudi from "@/pages/ZgodbeLjudi";
import AdoptionProcess from "@/pages/AdoptionProcess";
import Questionnaire from "@/pages/Questionnaire";
import LostAndFound from "@/pages/LostAndFound";
import VirtualCorner from "@/pages/VirtualCorner";
import VeterinaryCorner from "@/pages/VeterinaryCorner";
import StrayCats from "@/pages/StrayCats";
import AnimalCare from "@/pages/AnimalCare";
import Appointments from "@/pages/Appointments";
import SearchResults from "@/pages/SearchResults"; // Add this import
import NotFound from "@/pages/NotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/o-nas" element={<AboutUs />} />
      <Route path="/kontakt" element={<Kontakt />} />
      
      {/* Adoption Routes */}
      <Route path="/posvojitev-psov" element={<DogsAdoption />} />
      <Route path="/posvojitev-mack" element={<CatsAdoption />} />
      <Route path="/postopek-posvojitve" element={<AdoptionProcess />} />
      <Route path="/vprasalnik" element={<Questionnaire />} />
      
      {/* Animal Profiles */}
      <Route path="/pes/:id" element={<DogProfile />} />
      <Route path="/macka/:id" element={<CatProfile />} />
      
      {/* Other Features */}
      <Route path="/prostovoljstvo" element={<Volunteer />} />
      <Route path="/donacije" element={<Donations />} />
      <Route path="/zgodbe-ljudi" element={<ZgodbeLjudi />} />
      <Route path="/izgubljeni-najdeni" element={<LostAndFound />} />
      <Route path="/virtualni-koticek" element={<VirtualCorner />} />
      <Route path="/veterinarski-koticek" element={<VeterinaryCorner />} />
      <Route path="/proste-macke" element={<StrayCats />} />
      <Route path="/oskrba-zivali" element={<AnimalCare />} />
      <Route path="/termini" element={<Appointments />} />
      
      {/* Search Results */}
      <Route path="/iskanje" element={<SearchResults />} />
      
      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
