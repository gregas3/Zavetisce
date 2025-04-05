
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactButton from '../shared/FloatingContactButton';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isDogProfile = location.pathname.includes("/posvojitev/psi/");
  const isCatProfile = location.pathname.includes("/posvojitev/mačke/");
  
  // Ensure page scrolls to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className={`flex-grow w-full pt-14 md:pt-16 ${(isDogProfile || isCatProfile) ? 'pb-16' : 'pb-10'}`} id="top">
        {children}
      </main>
      <FloatingContactButton />
      <Footer />
    </div>
  );
};

export default Layout;
