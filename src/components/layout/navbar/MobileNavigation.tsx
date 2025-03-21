
import { Menu, X } from "lucide-react";
import { NavbarActions } from "./NavbarActions";
import { NavbarBranding } from "./NavbarBranding";
import { MobileMenuOverlay } from "./MobileMenuOverlay";

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
        
        <NavbarActions toggleSearch={toggleSearch} handleHomeClick={handleHomeClick} isMobile={true} />
        
        <button 
          className="text-white p-2 rounded-full hover:bg-teal-600/50 transition-normal" 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Zapri meni" : "Odpri meni"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenuOverlay isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
};
