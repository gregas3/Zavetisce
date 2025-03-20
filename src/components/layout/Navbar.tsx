
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-display font-bold text-primary flex items-center gap-2"
            onClick={closeMenu}
          >
            <span className="sr-only">Zavetišče za živali Maribor</span>
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks closeMenu={closeMenu} />
            <Button 
              size="sm" 
              asChild 
              className="ml-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
            >
              <Link to="/donacije">Doniraj</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Zapri meni" : "Odpri meni"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          <NavLinks closeMenu={closeMenu} isMobile={true} />
          <Button 
            size="lg" 
            asChild 
            className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
          >
            <Link to="/donacije" onClick={closeMenu}>Doniraj</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

interface NavLinksProps {
  closeMenu: () => void;
  isMobile?: boolean;
}

function NavLinks({ closeMenu, isMobile = false }: NavLinksProps) {
  const linkClass = isMobile
    ? "text-lg py-3 block font-medium border-b border-border"
    : "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-normal";

  return (
    <>
      <Link to="/" className={linkClass} onClick={closeMenu}>
        Domov
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className={`${linkClass} flex items-center gap-1`}>
          <span>Posvojitev</span> <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuItem asChild>
            <Link to="/posvojitev/psi" onClick={closeMenu} className="w-full">
              Psi
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/posvojitev/mačke" onClick={closeMenu} className="w-full">
              Mačke
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/posvojitev/postopek" onClick={closeMenu} className="w-full">
              Postopek posvojitve
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link to="/izgubljeni-najdeni" className={linkClass} onClick={closeMenu}>
        Izgubljeni in Najdeni
      </Link>
      <Link to="/prostovoljstvo" className={linkClass} onClick={closeMenu}>
        Prostovoljstvo
      </Link>
      <Link to="/prosto-zivece-macke" className={linkClass} onClick={closeMenu}>
        Prosto živeče mačke
      </Link>
      <Link to="/termini" className={linkClass} onClick={closeMenu}>
        Termini
      </Link>
      <Link to="/o-nas" className={linkClass} onClick={closeMenu}>
        O nas
      </Link>
    </>
  );
}
