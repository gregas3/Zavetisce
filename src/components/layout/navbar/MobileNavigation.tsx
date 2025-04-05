
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Dog, Cat, Heart, Calendar, Users, Phone, HelpCircle, PawPrint, AlertCircle, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarActions } from "./NavbarActions";
import { NavbarBranding } from "./NavbarBranding";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { MobileNavItem } from "./MobileNavItem";

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
  return <>
      <div className="lg:hidden flex items-center gap-2">
        <NavbarBranding />
        
        <NavbarActions toggleSearch={toggleSearch} handleHomeClick={handleHomeClick} isMobile={true} />
        
        <button className="text-white p-2 rounded-full hover:bg-teal-600/50 transition-normal" onClick={toggleMenu} aria-label={isOpen ? "Zapri meni" : "Odpri meni"}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay and Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" onClick={closeMenu}></div>
        
        <div className={`absolute top-[60px] right-0 bottom-0 w-[70%] max-w-[250px] bg-gradient-to-b from-white to-teal-50 rounded-l-2xl shadow-xl transition-transform duration-300 overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`} style={{
        height: "calc(100vh - 60px)"
      }}>
          <nav className="flex flex-col h-full overflow-y-auto">
            <div className="flex flex-col space-y-0.5 flex-1 px-0 py-[6px] bg-green-100 rounded-sm my-0">
              <AnimatedWrapper animation="fade-in" delay={50} className="mb-1">
                <MobileNavItem title="Posvojitve" hasSubmenu icon={<Heart size={18} className="text-teal-500" />}>
                  <Link to="/posvojitev/psi" onClick={closeMenu} className="flex items-center gap-2 py-1.5 px-3 transition-normal text-teal-700 hover:text-teal-500 rounded-lg hover:bg-teal-50/80">
                    <Dog size={15} className="text-teal-500" />
                    <span className="font-medium text-sm">Psi</span>
                  </Link>
                  <Link to="/posvojitev/mačke" onClick={closeMenu} className="flex items-center gap-2 py-1.5 px-3 transition-normal text-teal-700 hover:text-teal-500 rounded-lg hover:bg-teal-50/80">
                    <Cat size={15} className="text-teal-500" />
                    <span className="font-medium text-sm">Mačke</span>
                  </Link>
                  <Link to="/posvojitev/postopek" onClick={closeMenu} className="flex items-center gap-2 py-1.5 px-3 transition-normal text-teal-700 hover:text-teal-500 rounded-lg hover:bg-teal-50/80">
                    <Heart size={15} className="text-teal-500" />
                    <span className="font-medium text-sm">Postopek posvojitve</span>
                  </Link>
                  <Link to="/termini" onClick={closeMenu} className="flex items-center gap-2 py-1.5 px-3 transition-normal text-teal-700 hover:text-teal-500 rounded-lg hover:bg-teal-50/80">
                    <Calendar size={15} className="text-teal-500" />
                    <span className="font-medium text-sm">Ogledi</span>
                  </Link>
                  <Link to="/vprasalnik" onClick={closeMenu} className="flex items-center gap-2 py-1.5 px-3 transition-normal text-teal-700 hover:text-teal-500 rounded-lg hover:bg-teal-50/80">
                    <FileQuestion size={15} className="text-teal-500" />
                    <span className="font-medium text-sm">Vprašalnik</span>
                  </Link>
                </MobileNavItem>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={100}>
                <Link to="/izgubljeni-najdeni" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                  <AlertCircle size={16} className="text-teal-500" />
                  <span>Izgubljene in najdene živali</span>
                </Link>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={150}>
                <Link to="/prostozivece-macke" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                  <Cat size={16} className="text-teal-500" />
                  <span>Prostoživeče mačke</span>
                </Link>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={200}>
                <Link to="/prostovoljstvo" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                  <Users size={16} className="text-teal-500" />
                  <span>Prostovoljstvo</span>
                </Link>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={250}>
                <Link to="/kontakt" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                  <Phone size={16} className="text-teal-500" />
                  <span>Kontakt</span>
                </Link>
              </AnimatedWrapper>
              
              <AnimatedWrapper animation="fade-in" delay={300}>
                <Link to="/o-nas" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                  <HelpCircle size={16} className="text-teal-500" />
                  <span>O nas</span>
                </Link>
              </AnimatedWrapper>
            </div>
            
            <AnimatedWrapper animation="fade-in" delay={350}>
              <div className="p-3">
                {/* Footer content here if needed */}
              </div>
            </AnimatedWrapper>
          </nav>
        </div>
      </div>
    </>;
};
