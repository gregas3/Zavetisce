
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
  
  // Check if the children already have a Footer component
  const hasNestedFooter = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === Footer
  );
  
  // Ensure page scrolls to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow" id="top">
        {children}
      </main>
      {isHomePage && <FloatingContactButton />}
      {!hasNestedFooter && <Footer />}
    </div>
  );
};

export default Layout;
