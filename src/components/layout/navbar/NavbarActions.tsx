
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
        className={`p-2 text-white rounded-full transition-all duration-300 hover:bg-teal-600/50 hover:scale-110 ${!isMobile ? 'hover:text-white' : ''}`}
        aria-label="Domov"
      >
        <Home size={isMobile ? 20 : 20} className="transform transition-transform hover:rotate-6" />
      </button>
      
      <button 
        onClick={toggleSearch} 
        className={`p-2 text-white rounded-full transition-all duration-300 hover:bg-teal-600/50 hover:scale-110 ${!isMobile ? 'hover:text-white' : ''}`} 
        aria-label="Search"
      >
        <Search size={20} className="transform transition-transform hover:rotate-6" />
      </button>
      
      {!isMobile && (
        <Button 
          size="sm" 
          asChild 
          variant="teal" 
          className="shadow-md relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
        >
          <Link to="/donacije" className="relative z-10">
            <span className="relative z-10">Doniraj</span>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal-200 group-hover:w-full transition-all duration-300"></div>
          </Link>
        </Button>
      )}
    </div>
  );
};
