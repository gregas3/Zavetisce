
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Dog, Cat, Heart, Calendar, Users, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarActions } from "./NavbarActions";
import { NavbarBranding } from "./NavbarBranding";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

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

      {/* Overlay and Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
          onClick={closeMenu}
        ></div>
        
        <div 
          className={`absolute top-[60px] right-0 bottom-0 w-[60%] max-w-[200px] bg-gradient-to-b from-white to-teal-50 rounded-l-2xl shadow-xl transition-transform duration-300 overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ height: "calc(100vh - 60px)" }}
        >
          <nav className="flex flex-col h-full overflow-y-auto">
            <div className="px-1.5 py-2 flex flex-col space-y-0.5 flex-1">
              <AnimatedWrapper animation="fade-in" delay={50} className="mb-1">
                <MobileNavItem 
                  title="Posvojitev" 
                  hasSubmenu 
                  icon={<Heart size={16} className="text-teal-500" />}
                >
                  <Link 
                    to="/posvojitev/psi" 
                    onClick={closeMenu} 
                    className="flex items-center gap-1.5 py-1 px-2.5 transition-normal text-teal-700 hover:text-teal-500 rounded-lg hover:bg-teal-50/80"
                  >
                    <Dog size={14} className="text-teal-500" />
                    <span className="font-medium text-xs">Psi</span>
                  </Link>
                  <Link 
                    to="/posvojitev/mačke" 
                    onClick={closeMenu} 
                    className="flex items-center gap-1.5 py-1 px-2.5 transition-normal text-teal-700 hover:text-teal-500 rounded-lg hover:bg-teal-50/80"
                  >
                    <Cat size={14} className="text-teal-500" />
                    <span className="font-medium text-xs">Mačke</span>
                  </Link>
                  <Link 
                    to="/posvojitev/postopek" 
                    onClick={closeMenu} 
                    className="flex items-center gap-1.5 py-1 px-2.5 transition-normal text-teal-700 hover:text-teal-500 rounded-lg hover:bg-teal-50/80"
                  >
                    <Heart size={14} className="text-teal-500" />
                    <span className="font-medium text-xs">Postopek posvojitve</span>
                  </Link>
                </MobileNavItem>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={100}>
                <Link 
                  to="/izgubljeni-najdeni" 
                  className="flex items-center gap-1.5 text-xs py-2 px-2.5 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" 
                  onClick={closeMenu}
                >
                  <HelpCircle size={14} className="text-teal-500" />
                  <span>Izgubljeni in Najdeni</span>
                </Link>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={150}>
                <Link 
                  to="/prostovoljstvo" 
                  className="flex items-center gap-1.5 text-xs py-2 px-2.5 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" 
                  onClick={closeMenu}
                >
                  <Users size={14} className="text-teal-500" />
                  <span>Prostovoljstvo</span>
                </Link>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={200}>
                <Link 
                  to="/kontakt" 
                  className="flex items-center gap-1.5 text-xs py-2 px-2.5 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" 
                  onClick={closeMenu}
                >
                  <Phone size={14} className="text-teal-500" />
                  <span>Kontakt</span>
                </Link>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={250}>
                <Link 
                  to="/termini" 
                  className="flex items-center gap-1.5 text-xs py-2 px-2.5 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" 
                  onClick={closeMenu}
                >
                  <Calendar size={14} className="text-teal-500" />
                  <span>Termini</span>
                </Link>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={300}>
                <Link 
                  to="/o-nas" 
                  className="flex items-center gap-1.5 text-xs py-2 px-2.5 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" 
                  onClick={closeMenu}
                >
                  <Users size={14} className="text-teal-500" />
                  <span>O nas</span>
                </Link>
              </AnimatedWrapper>
            </div>
            
            <AnimatedWrapper animation="fade-in" delay={350}>
              <div className="px-2 py-2 border-t border-teal-100">
                <Button size="sm" asChild variant="teal" className="w-full shadow-md rounded-xl text-xs py-1">
                  <Link to="/donacije" onClick={closeMenu}>Doniraj</Link>
                </Button>
              </div>
            </AnimatedWrapper>
          </nav>
        </div>
      </div>
    </>
  );
};

type MobileNavItemProps = {
  title: string;
  hasSubmenu?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

export const MobileNavItem = ({ title, hasSubmenu = false, children, icon }: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSubmenu = (e: React.MouseEvent) => {
    if (hasSubmenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <div className="rounded-lg overflow-hidden hover:bg-teal-50/80 transition-normal">
      <button 
        className="flex items-center justify-between w-full text-xs py-2 px-2.5 font-medium text-left text-teal-800 hover:text-teal-600 transition-normal" 
        onClick={toggleSubmenu}
      >
        <span className="flex items-center gap-1.5">
          {icon}
          {title}
        </span>
        {hasSubmenu && (
          <ChevronDown 
            size={14} 
            className={`text-teal-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        )}
      </button>
      {hasSubmenu && (
        <div 
          className={`pl-1.5 space-y-0.5 overflow-hidden transition-all duration-300 ${
            isOpen 
              ? "max-h-[200px] opacity-100 pb-1" 
              : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
