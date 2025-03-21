
import { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Detect scrolling activity
      setIsScrolling(true);
      
      // Determine scroll direction
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true);
        setIsVisible(true); // Always show when scrolling up
      } else if (currentScrollY > lastScrollY) {
        setScrollingUp(false);
        // Only hide when actively scrolling down and not at top or bottom
        if (currentScrollY > 10 && windowHeight + currentScrollY < documentHeight - 50) {
          setIsVisible(false);
        }
      }
      
      // Handle scrolled state
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setIsVisible(true); // Always show navbar when at top of page
      }
      
      // Handle bottom of page
      if (windowHeight + currentScrollY >= documentHeight - 50) {
        setAtBottom(true);
        setIsVisible(true); // Always show navbar when at bottom of page
      } else {
        setAtBottom(false);
      }
      
      setLastScrollY(currentScrollY);
      
      // Reset the timeout on every scroll event
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set a timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true); // Show navbar when scrolling stops
      }, 400); // Even shorter timeout for better responsiveness
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  // Add another effect to ensure navbar shows when user is stationary
  useEffect(() => {
    if (!isScrolling) {
      setIsVisible(true);
    }
  }, [isScrolling]);

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
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? scrollingUp || atBottom || !isScrolling
            ? "py-3 bg-gradient-to-b from-teal-700/80 to-teal-800/70 backdrop-blur-[4px]" // Scrolling up or at bottom or not scrolling - visible, but lighter
            : "py-2 bg-transparent" // Scrolling down - transparent
          : "py-4 bg-gradient-to-b from-teal-700/70 to-teal-800/60 backdrop-blur-[4px]" // At top - fully visible, but lighter
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
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
    </header>
  );
}
