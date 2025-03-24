
import { Link } from "react-router-dom";

export const NavbarBranding = () => {
  return (
    <Link to="https://snaga-mb.si/" target="_blank" rel="noopener noreferrer" className="ml-4">
      <img 
        src="/lovable-uploads/072fa08a-6143-4c19-8c93-afd108144826.png" 
        alt="Skupina JHMB" 
        className="h-12 lg:h-14 object-contain" 
      />
    </Link>
  );
};
