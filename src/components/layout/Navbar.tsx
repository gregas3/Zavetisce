
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Heart, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

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

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-[#0f2a2d]/95 backdrop-blur-md shadow-lg" 
          : "py-4 bg-[#0f2a2d]/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold text-teal-400 flex items-center gap-2 transition-normal hover-scale" 
            onClick={closeMenu}
          >
            <span className="sr-only">Zavetišče za živali Maribor</span>
            <img 
              alt="Logo" 
              className="h-14 transition-normal drop-shadow-md" 
              src="/lovable-uploads/4538ce4d-c476-48c3-ad21-89aa38c7c769.png" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-800/70 hover:text-teal-300")}
                  >
                    <Link to="/">Domov</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-medium text-white hover:bg-teal-800/70 hover:text-teal-300">
                    Posvojitev
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px] bg-[#164942] border border-teal-700/50">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/posvojitev/psi"
                            className="flex items-center gap-2 p-2 text-white hover:bg-teal-800/50 rounded-md transition-normal hover:text-teal-300"
                            onClick={closeMenu}
                          >
                            <PawPrint size={16} className="text-teal-400" />
                            <span>Psi</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/posvojitev/mačke"
                            className="flex items-center gap-2 p-2 text-white hover:bg-teal-800/50 rounded-md transition-normal hover:text-teal-300"
                            onClick={closeMenu}
                          >
                            <PawPrint size={16} className="text-teal-400" />
                            <span>Mačke</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/posvojitev/postopek"
                            className="flex items-center gap-2 p-2 text-white hover:bg-teal-800/50 rounded-md transition-normal hover:text-teal-300"
                            onClick={closeMenu}
                          >
                            <Heart size={16} className="text-teal-400" />
                            <span>Postopek posvojitve</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-800/70 hover:text-teal-300")}
                  >
                    <Link to="/izgubljeni-najdeni">Izgubljeni in Najdeni</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-800/70 hover:text-teal-300")}
                  >
                    <Link to="/prostovoljstvo">Prostovoljstvo</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-800/70 hover:text-teal-300")}
                  >
                    <Link to="/prosto-zivece-macke">Prosto živeče mačke</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-800/70 hover:text-teal-300")}
                  >
                    <Link to="/termini">Termini</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-800/70 hover:text-teal-300")}
                  >
                    <Link to="/o-nas">O nas</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-3 ml-3">
              <button 
                onClick={toggleSearch} 
                className="p-2 text-teal-400 rounded-full transition-colors hover:bg-teal-800/80 hover:text-teal-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <Button 
                size="sm" 
                asChild 
                variant="teal"
                className="shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link to="/donacije">Doniraj</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleSearch} 
              className="p-2 text-teal-400 rounded-full transition-colors hover:bg-teal-800/70"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-teal-400 p-2 rounded-full hover:bg-teal-800/70 transition-normal" 
              onClick={toggleMenu} 
              aria-label={isOpen ? "Zapri meni" : "Odpri meni"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar - Shows when active */}
      <div 
        className={`container mx-auto px-4 overflow-hidden transition-all duration-300 ${
          searchActive ? "max-h-16 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative">
          <input 
            type="text" 
            placeholder="Išči..." 
            className="w-full py-2 px-4 pl-10 rounded-lg border border-teal-700 bg-teal-900/60 text-white placeholder-teal-300/60 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-normal"
          />
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#0f2a2d]/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`} 
        style={{ top: "60px" }}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-4">
          <Link to="/" className="text-lg py-3 block font-medium border-b border-teal-800 text-white hover:text-teal-300 transition-normal" onClick={closeMenu}>
            Domov
          </Link>
          
          <div className="border-b border-teal-800">
            <button className="flex items-center justify-between w-full text-lg py-3 font-medium text-left text-white hover:text-teal-300" onClick={(e) => {
              const el = e.currentTarget.nextElementSibling;
              if (el) el.classList.toggle('hidden');
            }}>
              <span>Posvojitev</span> 
              <ChevronDown size={18} className="text-teal-400" />
            </button>
            <div className="hidden pl-4 pb-3 space-y-2">
              <Link to="/posvojitev/psi" onClick={closeMenu} className="block py-2 transition-normal text-teal-100 hover:text-teal-300">
                Psi
              </Link>
              <Link to="/posvojitev/mačke" onClick={closeMenu} className="block py-2 transition-normal text-teal-100 hover:text-teal-300">
                Mačke
              </Link>
              <Link to="/posvojitev/postopek" onClick={closeMenu} className="block py-2 transition-normal text-teal-100 hover:text-teal-300">
                Postopek posvojitve
              </Link>
            </div>
          </div>
          
          <Link to="/izgubljeni-najdeni" className="text-lg py-3 block font-medium border-b border-teal-800 text-white hover:text-teal-300 transition-normal" onClick={closeMenu}>
            Izgubljeni in Najdeni
          </Link>
          <Link to="/prostovoljstvo" className="text-lg py-3 block font-medium border-b border-teal-800 text-white hover:text-teal-300 transition-normal" onClick={closeMenu}>
            Prostovoljstvo
          </Link>
          <Link to="/prosto-zivece-macke" className="text-lg py-3 block font-medium border-b border-teal-800 text-white hover:text-teal-300 transition-normal" onClick={closeMenu}>
            Prosto živeče mačke
          </Link>
          <Link to="/termini" className="text-lg py-3 block font-medium border-b border-teal-800 text-white hover:text-teal-300 transition-normal" onClick={closeMenu}>
            Termini
          </Link>
          <Link to="/o-nas" className="text-lg py-3 block font-medium border-b border-teal-800 text-white hover:text-teal-300 transition-normal" onClick={closeMenu}>
            O nas
          </Link>
          
          <Button 
            size="lg" 
            asChild 
            variant="teal"
            className="mt-6 shadow-md"
          >
            <Link to="/donacije" onClick={closeMenu}>Doniraj</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
