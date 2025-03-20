
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Heart, Dog, Cat } from "lucide-react";
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
  const [scrollingUp, setScrollingUp] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Determine scroll direction
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      
      // Determine if page is scrolled
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check if at bottom of page (within 50px threshold)
      if ((windowHeight + currentScrollY) >= documentHeight - 50) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? (scrollingUp || atBottom)
            ? "py-3 bg-gradient-to-b from-teal-50/95 to-teal-50/80 backdrop-blur-[2px]" // Scrolling up or at bottom - visible
            : "py-2 bg-transparent" // Scrolling down - transparent
          : "py-4 bg-gradient-to-b from-teal-50/95 to-teal-50/80 backdrop-blur-[2px]" // At top - fully visible
      }`}
      style={{ borderBottom: 'none' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold text-teal-600 flex items-center gap-2 transition-normal hover-scale" 
            onClick={closeMenu}
          >
            <span className="sr-only">Zavetišče za živali Maribor</span>
            <img 
              alt="Logo" 
              className="h-20 transition-normal drop-shadow-md" 
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
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-teal-800 hover:bg-teal-100 hover:text-teal-700")}
                  >
                    <Link to="/">Domov</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-medium text-teal-800 hover:bg-teal-100 hover:text-teal-700 data-[state=open]:bg-teal-100">
                    Posvojitev
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px] bg-white border border-teal-100 shadow-lg rounded-lg">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/posvojitev/psi"
                            className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal"
                            onClick={closeMenu}
                          >
                            <Dog size={16} className="text-teal-500" />
                            <span>Psi</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/posvojitev/mačke"
                            className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal"
                            onClick={closeMenu}
                          >
                            <Cat size={16} className="text-teal-500" />
                            <span>Mačke</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/posvojitev/postopek"
                            className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal"
                            onClick={closeMenu}
                          >
                            <Heart size={16} className="text-teal-500" />
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
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-teal-800 hover:bg-teal-100 hover:text-teal-700")}
                  >
                    <Link to="/izgubljeni-najdeni">Izgubljeni in Najdeni</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-teal-800 hover:bg-teal-100 hover:text-teal-700")}
                  >
                    <Link to="/prostovoljstvo">Prostovoljstvo</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-teal-800 hover:bg-teal-100 hover:text-teal-700")}
                  >
                    <Link to="/prosto-zivece-macke">Prosto živeče mačke</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-teal-800 hover:bg-teal-100 hover:text-teal-700")}
                  >
                    <Link to="/termini">Termini</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    asChild 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-teal-800 hover:bg-teal-100 hover:text-teal-700")}
                  >
                    <Link to="/o-nas">O nas</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-3 ml-3">
              <button 
                onClick={toggleSearch} 
                className="p-2 text-teal-600 rounded-full transition-colors hover:bg-teal-100 hover:text-teal-800"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <Button 
                size="sm" 
                asChild 
                variant="teal"
                className="shadow-md hover:shadow-teal-200/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link to="/donacije">Doniraj</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleSearch} 
              className="p-2 text-teal-600 rounded-full transition-colors hover:bg-teal-100"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-teal-600 p-2 rounded-full hover:bg-teal-100 transition-normal" 
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
            className="w-full py-2 px-4 pl-10 rounded-lg border border-teal-200 bg-white text-teal-800 placeholder-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-normal"
          />
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-[2px] z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`} 
        style={{ top: "60px" }}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-4">
          <Link to="/" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Domov
          </Link>
          
          <div className="border-b border-teal-100">
            <button className="flex items-center justify-between w-full text-lg py-3 font-medium text-left text-teal-800 hover:text-teal-600" onClick={(e) => {
              const el = e.currentTarget.nextElementSibling;
              if (el) el.classList.toggle('hidden');
            }}>
              <span>Posvojitev</span> 
              <ChevronDown size={18} className="text-teal-500" />
            </button>
            <div className="hidden pl-4 pb-3 space-y-2">
              <Link to="/posvojitev/psi" onClick={closeMenu} className="flex items-center gap-2 py-2 transition-normal text-teal-700 hover:text-teal-500">
                <Dog size={16} className="text-teal-500" />
                Psi
              </Link>
              <Link to="/posvojitev/mačke" onClick={closeMenu} className="flex items-center gap-2 py-2 transition-normal text-teal-700 hover:text-teal-500">
                <Cat size={16} className="text-teal-500" />
                Mačke
              </Link>
              <Link to="/posvojitev/postopek" onClick={closeMenu} className="flex items-center gap-2 py-2 transition-normal text-teal-700 hover:text-teal-500">
                <Heart size={16} className="text-teal-500" />
                Postopek posvojitve
              </Link>
            </div>
          </div>
          
          <Link to="/izgubljeni-najdeni" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Izgubljeni in Najdeni
          </Link>
          <Link to="/prostovoljstvo" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Prostovoljstvo
          </Link>
          <Link to="/prosto-zivece-macke" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Prosto živeče mačke
          </Link>
          <Link to="/termini" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
            Termini
          </Link>
          <Link to="/o-nas" className="text-lg py-3 block font-medium border-b border-teal-100 text-teal-800 hover:text-teal-600 transition-normal" onClick={closeMenu}>
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
