
import React from 'react';
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
  
  // By moving the Footer component outside of individual pages and only including it here,
  // we ensure it only appears once across the entire application
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {isHomePage && <FloatingContactButton />}
      <Footer />
    </div>
  );
};

export default Layout;
