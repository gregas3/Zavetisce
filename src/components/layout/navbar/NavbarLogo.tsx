
import { Link } from "react-router-dom";
import { Cat } from "lucide-react";

type NavbarLogoProps = {
  closeMenu: () => void;
};

export const NavbarLogo = ({ closeMenu }: NavbarLogoProps) => {
  return (
    <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
      <div className="bg-teal-700 rounded-md p-1.5 flex items-center justify-center">
        <Cat size={20} className="text-white" />
      </div>
      <span className="text-white text-lg font-semibold">Zavetišče</span>
    </Link>
  );
};
