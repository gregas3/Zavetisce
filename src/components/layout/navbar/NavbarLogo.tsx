
import { Link } from "react-router-dom";

type NavbarLogoProps = {
  closeMenu: () => void;
};

export const NavbarLogo = ({
  closeMenu
}: NavbarLogoProps) => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]" 
      onClick={closeMenu}
    >
      <span className="sr-only">Zavetišče za živali Maribor</span>
      <img 
        src="/lovable-uploads/05f2fc83-29c9-401c-bc6c-0847f10b16db.png" 
        alt="Zavetišče za živali Maribor" 
        className="h-12 md:h-14 transition-normal drop-shadow-md" 
      />
      <span className="hidden md:inline-block text-lg font-medium text-white/90">
        Zavetišče za živali Maribor
      </span>
    </Link>
  );
};
