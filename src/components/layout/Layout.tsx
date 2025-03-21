
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
  const isHomePage = location.pathname === "/";
  
  // Ensure page scrolls to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Log when Layout is mounting to help debug
  useEffect(() => {
    console.log('Layout mounted, pathname:', location.pathname);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow" id="top">
        {children}
      </main>
      {isHomePage && <FloatingContactButton />}
      {/* Only render one Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
