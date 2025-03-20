
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Routes for future implementation */}
          <Route path="/posvojitev/psi" element={<NotFound />} />
          <Route path="/posvojitev/mačke" element={<NotFound />} />
          <Route path="/posvojitev/postopek" element={<NotFound />} />
          <Route path="/izgubljeni-najdeni" element={<NotFound />} />
          <Route path="/prostovoljstvo" element={<NotFound />} />
          <Route path="/donacije" element={<NotFound />} />
          <Route path="/prosto-zivece-macke" element={<NotFound />} />
          <Route path="/termini" element={<NotFound />} />
          <Route path="/o-nas" element={<NotFound />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
