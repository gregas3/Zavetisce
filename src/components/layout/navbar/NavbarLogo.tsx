
import { Link } from "react-router-dom";

type NavbarLogoProps = {
  closeMenu: () => void;
};

export const NavbarLogo = ({ closeMenu }: NavbarLogoProps) => {
  return (
    <Link to="/" className="text-2xl font-display font-bold text-teal-600 flex items-center gap-2 transition-normal hover-scale" onClick={closeMenu}>
      <span className="sr-only">Zavetišče za živali Maribor</span>
      <img 
        alt="Logo" 
        className="h-16 md:h-20 transition-normal drop-shadow-md" 
        src="/lovable-uploads/4538ce4d-c476-48c3-ad21-89aa38c7c769.png" 
      />
    </Link>
  );
};
