
import { Link } from "react-router-dom";
import AnimatedWrapper from "../../shared/AnimatedWrapper";

type NavbarLogoProps = {
  closeMenu: () => void;
};

export const NavbarLogo = ({
  closeMenu
}: NavbarLogoProps) => {
  return (
    <Link to="/" className="text-2xl font-display font-bold text-teal-600 flex items-center gap-2 transition-normal hover-scale" onClick={closeMenu}>
      <span className="sr-only">Zavetišče za živali Maribor</span>
      <AnimatedWrapper animation="float" className="h-16 md:h-20">
        <img 
          alt="Logo" 
          className="h-full w-auto transition-normal drop-shadow-md" 
          src="/lovable-uploads/ee94c529-e10a-4267-8d61-be0c492d6b50.png" 
        />
      </AnimatedWrapper>
    </Link>
  );
};
