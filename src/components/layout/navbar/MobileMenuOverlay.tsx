
import React from "react";
import { Link } from "react-router-dom";
import { Dog, Cat, Heart, Calendar, Users, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { MobileNavItem } from "./MobileNavItem";

type MobileMenuOverlayProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

export const MobileMenuOverlay = ({ isOpen, closeMenu }: MobileMenuOverlayProps) => {
  return (
    <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" onClick={closeMenu}></div>
      
      <div className={`absolute top-[60px] right-0 bottom-0 w-[60%] max-w-[200px] bg-gradient-to-b from-white to-teal-50 rounded-l-2xl shadow-xl transition-transform duration-300 overflow-hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`} 
        style={{
          height: "calc(100vh - 60px)"
        }}
      >
        <nav className="flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col space-y-0.5 flex-1 my-0 px-0 py-[6px] bg-green-100 rounded-sm">
            <AnimatedWrapper animation="fade-in" delay={50} className="mb-1">
              <MobileNavItem title="Posvojitev" hasSubmenu icon={<Heart size={18} className="text-teal-500" />}>
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
              </MobileNavItem>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={100}>
              <Link to="/izgubljeni-najdeni" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                <HelpCircle size={16} className="text-teal-500" />
                <span>Izgubljeni in Najdeni</span>
              </Link>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={150}>
              <Link to="/prostovoljstvo" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                <Users size={16} className="text-teal-500" />
                <span>Prostovoljstvo</span>
              </Link>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={200}>
              <Link to="/kontakt" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                <Phone size={16} className="text-teal-500" />
                <span>Kontakt</span>
              </Link>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={250}>
              <Link to="/termini" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                <Calendar size={16} className="text-teal-500" />
                <span>Termini</span>
              </Link>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="fade-in" delay={300}>
              <Link to="/o-nas" className="flex items-center gap-2 text-sm py-2.5 px-3 font-medium text-teal-800 hover:text-teal-600 rounded-lg hover:bg-teal-50/80 transition-normal" onClick={closeMenu}>
                <Users size={16} className="text-teal-500" />
                <span>O nas</span>
              </Link>
            </AnimatedWrapper>
          </div>
          
          <AnimatedWrapper animation="fade-in" delay={350}>
            <div className="px-3 py-3 border-t border-teal-100">
              <Button size="sm" asChild variant="teal" className="w-full shadow-md rounded-xl text-sm">
                <Link to="/donacije" onClick={closeMenu}>Doniraj</Link>
              </Button>
            </div>
          </AnimatedWrapper>
        </nav>
      </div>
    </div>
  );
};
