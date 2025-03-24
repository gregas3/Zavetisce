
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
      className="text-2xl font-display font-bold text-teal-600 flex items-center gap-2 transition-normal hover-scale" 
      onClick={handleClick}
    >
      <span className="sr-only">Zavetišče za živali Maribor</span>
      <img 
        alt="Logo" 
        className="h-16 md:h-20 w-auto transition-normal drop-shadow-md" 
        src="/lovable-uploads/ee94c529-e10a-4267-8d61-be0c492d6b50.png" 
      />
    </Link>
  );
};
