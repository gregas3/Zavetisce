
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Heart } from "lucide-react";

type NavbarLogoProps = {
  closeMenu: () => void;
};

export const NavbarLogo = ({
  closeMenu
}: NavbarLogoProps) => {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    closeMenu();
    
    // If already on home page, scroll to top
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Link 
      to="/" 
      className="text-2xl font-display font-bold text-white flex items-center gap-2 transition-normal hover-scale" 
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm p-2 rounded-full">
        <Heart className="h-6 w-6 text-white" />
      </div>
      <span className="hidden md:inline-block">Zavetišče Maribor</span>
    </Link>
  );
};
