
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Dog, Cat, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarActions } from "./NavbarActions";
import { NavbarBranding } from "./NavbarBranding";

type MobileNavigationProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  toggleSearch: () => void;
  handleHomeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const MobileNavigation = ({ 
  isOpen, 
  toggleMenu, 
  closeMenu, 
  toggleSearch, 
  handleHomeClick 
}: MobileNavigationProps) => {
  return (
    <>
      <div className="lg:hidden flex items-center gap-2">
        <NavbarBranding />
        
        <NavbarActions 
          toggleSearch={toggleSearch} 
          handleHomeClick={handleHomeClick} 
          isMobile={true} 
        />
        
        <button 
          className="text-white p-2 rounded-full hover:bg-teal-600/50 transition-normal" 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Zapri meni" : "Odpri meni"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-[2px] z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`} 
        style={{ top: "60px" }}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-4">
          <MobileNavItem title="Posvojitev" hasSubmenu>
            <Link to="/posvojitev/psi" onClick={closeMenu} className="flex items-center gap-2 py-2 transition-normal text-teal-700 hover:text-teal-500">
              <Dog size={16} className="text-teal-500" />
              Psi
            </Link>
            <Link to="/posvojitev/mačke" onClick={closeMenu} className="flex items-center gap-2 py-2 transition-normal text-teal-700 hover:text-teal-500">
              <Cat size={16} className="text-teal-500" />
              Mačke
            </Link>
            <Link to="/posvojitev/postopek" onClick={closeMenu} className="flex items-center gap-2 py-2 transition-normal text-teal-700 hover:text-teal-500">
              <Heart size={16} className="text-teal-500" />
              Postopek posvojitve
            </Link>
          </MobileNavItem>
          
          <Link to="/izgubljeni-najdeni" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Izgubljeni in Najdeni
          </Link>
          <Link to="/prostovoljstvo" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Prostovoljstvo
          </Link>
          <Link to="/kontakt" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Kontakt
          </Link>
          <Link to="/termini" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Termini
          </Link>
          <Link to="/o-nas" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            O nas
          </Link>
          
          <Button size="lg" asChild variant="teal" className="mt-6 shadow-md">
            <Link to="/donacije" onClick={closeMenu}>Doniraj</Link>
          </Button>
        </nav>
      </div>
    </>
  );
};

type MobileNavItemProps = {
  title: string;
  hasSubmenu?: boolean;
  children?: React.ReactNode;
};

export const MobileNavItem = ({ title, hasSubmenu = false, children }: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSubmenu = (e: React.MouseEvent) => {
    if (hasSubmenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <div className="border-b border-teal-100">
      <button 
        className="flex items-center justify-between w-full text-lg py-3 font-medium text-left text-teal-800 hover:text-teal-600" 
        onClick={toggleSubmenu}
      >
        <span>{title}</span>
        {hasSubmenu && <ChevronDown size={18} className="text-teal-500" />}
      </button>
      {hasSubmenu && (
        <div className={`pl-4 pb-3 space-y-2 ${isOpen ? "" : "hidden"}`}>
          {children}
        </div>
      )}
    </div>
  );
};
