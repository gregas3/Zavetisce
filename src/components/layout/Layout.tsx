
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactButton from '../shared/FloatingContactButton';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;  // Adding the optional className prop
};

const Layout = ({ children, className = '' }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDogProfile = location.pathname.includes("/posvojitev/psi/");
  const isCatProfile = location.pathname.includes("/posvojitev/mačke/");
  const isDonationsPage = location.pathname === "/donacije";
  
  // Ensure page scrolls to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Handle hash scroll after page loads
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Add highlight animation
          element.classList.add('highlight-section');
          // Remove highlight animation after it completes
          setTimeout(() => {
            element.classList.remove('highlight-section');
          }, 2000);
        }, 300);
      }
    }
  }, [location]);
  
  return (
    <div className={`flex flex-col min-h-screen w-full overflow-x-hidden ${className}`}>
      <Navbar />
      <main className={`flex-grow w-full pt-14 md:pt-16 ${(isDogProfile || isCatProfile) ? 'pb-16' : 'pb-10'}`} id="top">
        {children}
      </main>
      {(isHomePage || isDonationsPage) && <FloatingContactButton />}
      <Footer />
    </div>
  );
};

export default Layout;
