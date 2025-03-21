
import { Link } from "react-router-dom";
import { Search, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavbarActionsProps = {
  toggleSearch: () => void;
  handleHomeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isMobile: boolean;
};

export const NavbarActions = ({ toggleSearch, handleHomeClick, isMobile }: NavbarActionsProps) => {
  return (
    <div className={`flex items-center gap-${isMobile ? '2' : '3'} ${!isMobile ? 'ml-3' : ''}`}>
      <button 
        onClick={handleHomeClick}
        className="p-2 text-white rounded-full transition-all duration-300 hover:bg-teal-600/50 hover:scale-110"
        aria-label="Domov"
      >
        <Home size={isMobile ? 20 : 20} className="transition-transform" />
      </button>
      
      <button 
        onClick={toggleSearch} 
        className="p-2 text-white rounded-full transition-all duration-300 hover:bg-teal-600/50 hover:scale-110" 
        aria-label="Search"
      >
        <Search size={20} className="transition-transform" />
      </button>
      
      {!isMobile && (
        <Button 
          size="sm" 
          asChild 
          variant="teal" 
          className="shadow-lg hover:shadow-teal-200/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
        >
          <Link to="/donacije">Doniraj</Link>
        </Button>
      )}
    </div>
  );
};
