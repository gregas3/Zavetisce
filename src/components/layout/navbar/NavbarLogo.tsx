
import { Link } from "react-router-dom";

type NavbarLogoProps = {
  closeMenu: () => void;
};

export const NavbarLogo = ({ closeMenu }: NavbarLogoProps) => {
  return (
    <Link to="/" className="relative flex items-center gap-2 transition-all duration-300 hover:scale-105" onClick={closeMenu}>
      <span className="sr-only">Zavetišče za živali Maribor</span>
      <div className="relative group">
        {/* Light glow effect behind the logo */}
        <div className="absolute inset-0 bg-amber-300/20 blur-xl rounded-full scale-90 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <img 
          alt="Logo" 
          className="h-16 md:h-20 drop-shadow-lg relative z-10 transition-all duration-300" 
          src="/lovable-uploads/4538ce4d-c476-48c3-ad21-89aa38c7c769.png" 
        />
      </div>
      {/* Add text logo part */}
      <div className="hidden lg:block">
        <span className="text-xl font-semibold text-amber-300 tracking-wide">Zavetišče za živali</span>
        <span className="block text-white text-lg">Maribor</span>
      </div>
    </Link>
  );
};
