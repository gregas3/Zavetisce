import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavbarLogo } from "./navbar/NavbarLogo";
import { DesktopNavigation } from "./navbar/DesktopNavigation";
import { MobileNavigation } from "./navbar/MobileNavigation";
import { SearchBar } from "./navbar/SearchBar";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsScrolling(true);
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        setShowNavbar(true);
      }, 300);
      
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true);
        setShowNavbar(true);
      } else {
        setScrollingUp(false);
        if (!isOpen && currentScrollY > 100) {
          setShowNavbar(false);
        }
      }
      
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setShowNavbar(true);
      }
      
      if (windowHeight + currentScrollY >= documentHeight - 50) {
        setAtBottom(true);
        setShowNavbar(true);
      } else {
        setAtBottom(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [lastScrollY, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowNavbar(true);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };
  
  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShowNavbar(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatedWrapper 
      animation="none" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen 
          ? "py-2 bg-gradient-to-b from-teal-700/95 to-teal-800/85 backdrop-blur-md shadow-md"
          : scrolled 
            ? isScrolling && !scrollingUp && !atBottom && !showNavbar
              ? "py-0 -translate-y-full opacity-0"
              : "py-2 bg-gradient-to-b from-teal-700/90 to-teal-800/80 backdrop-blur-md shadow-md"
            : "py-3 bg-gradient-to-b from-teal-700/80 to-teal-800/70 backdrop-blur-md"
      }`}
      style={{ borderBottom: 'none' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavbarLogo closeMenu={closeMenu} />

          <DesktopNavigation 
            closeMenu={closeMenu} 
            toggleSearch={toggleSearch} 
            handleHomeClick={handleHomeClick} 
          />

          <MobileNavigation 
            isOpen={isOpen} 
            toggleMenu={toggleMenu} 
            closeMenu={closeMenu} 
            toggleSearch={toggleSearch} 
            handleHomeClick={handleHomeClick} 
          />
        </div>
      </div>

      <SearchBar searchActive={searchActive} />
    </AnimatedWrapper>
  );
}
