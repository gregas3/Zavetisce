
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavbarLogo } from "./navbar/NavbarLogo";
import { DesktopNavigation } from "./navbar/DesktopNavigation";
import { MobileNavigation } from "./navbar/MobileNavigation";
import { SearchBar } from "./navbar/SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (windowHeight + currentScrollY >= documentHeight - 50) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? scrollingUp || atBottom 
            ? "py-3 bg-gradient-to-b from-teal-700/75 to-teal-800/65 backdrop-blur-md border-b border-teal-600/20" // Scrolling up or at bottom - visible with blur
            : "py-2 bg-transparent -translate-y-full" // Scrolling down - hide navbar
          : "py-4 bg-gradient-to-b from-teal-700/60 to-teal-800/50 backdrop-blur-md" // At top - fully visible with lighter background
      }`}
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
    </header>
  );
}
