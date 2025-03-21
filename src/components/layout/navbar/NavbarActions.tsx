
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
    <div className={`flex items-center gap-${isMobile ? '1' : '3'} ${!isMobile ? 'ml-3' : ''}`}>
      <button 
        onClick={handleHomeClick}
        className={`p-2 text-white rounded-full transition-colors hover:bg-teal-600/50 ${!isMobile ? 'hover:text-white' : ''}`}
        aria-label="Domov"
      >
        <Home size={isMobile ? 22 : 20} />
      </button>
      
      <button 
        onClick={toggleSearch} 
        className={`p-2 text-white rounded-full transition-colors hover:bg-teal-600/50 ${!isMobile ? 'hover:text-white' : ''}`} 
        aria-label="Search"
      >
        <Search size={isMobile ? 22 : 20} />
      </button>
      
      {!isMobile && (
        <Button size="sm" asChild variant="teal" className="shadow-md hover:shadow-teal-200/50 transition-all duration-300 hover:-translate-y-0.5">
          <Link to="/donacije">Doniraj</Link>
        </Button>
      )}
    </div>
  );
};
