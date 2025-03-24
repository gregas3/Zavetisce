
import { Link } from "react-router-dom";
import { Building } from "lucide-react";

export const NavbarBranding = () => {
  return (
    <Link to="/o-nas" className="ml-4 flex items-center gap-2 text-white/90 hover:text-white transition-colors">
      <Building size={20} />
      <span className="text-sm font-medium hidden md:block">Javni zavod</span>
    </Link>
  );
};
