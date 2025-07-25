
import { Link } from "react-router-dom";
import { Dog, Cat, Heart, Calendar, Users, Phone, HelpCircle, FileQuestion, Stethoscope, Scissors, Sparkles, Quote, Newspaper } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavbarActions } from "./NavbarActions";
import { NavbarBranding } from "./NavbarBranding";

type DesktopNavigationProps = {
  closeMenu: () => void;
  toggleSearch: () => void;
  handleHomeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const DesktopNavigation = ({
  closeMenu,
  toggleSearch,
  handleHomeClick
}: DesktopNavigationProps) => {
  return <div className="hidden lg:flex items-center gap-3">
      {/* Create separate NavigationMenu components for each dropdown to fix positioning */}
      <div className="flex">
        {/* First dropdown - Posvojitve */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white data-[state=open]:bg-teal-600/50">
                <span className="flex items-center gap-1">
                  <Heart size={16} />
                  Posvojitve
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[200px] bg-white border border-teal-100 shadow-lg rounded-lg">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/posvojitev/psi" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Dog size={16} className="text-teal-500" />
                        <span>Psi</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/posvojitev/mačke" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Cat size={16} className="text-teal-500" />
                        <span>Mačke</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/termini" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Calendar size={16} className="text-teal-500" />
                        <span>Prijava na ogled</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/vprasalnik" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <FileQuestion size={16} className="text-teal-500" />
                        <span>Izpolni vprašalnik</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/posvojitev/postopek" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Heart size={16} className="text-teal-500" />
                        <span>Postopek posvojitve</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/posvojitev/napotki" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Heart size={16} className="text-teal-500" />
                        <span>Napotki po posvojitvi</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Single menu items */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white")}>
                <Link to="/izgubljeni-najdeni">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    Najdeno in Pogrešano
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Prostoživeče mačke dropdown - MODIFIED */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white data-[state=open]:bg-teal-600/50">
                <span className="flex items-center gap-1">
                  <Cat size={16} />
                  Prostoživeče mačke
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[220px] bg-white border border-teal-100 shadow-lg rounded-lg">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/prostozivece-macke" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Cat size={16} className="text-teal-500" />
                        <span>Prostoživeče mačke</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/steriliziraj-kastriraj" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Scissors size={16} className="text-teal-500" />
                        <span>Steriliziraj & kastriraj</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white")}>
                <Link to="/prostovoljstvo">
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    Prostovoljstvo
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* O nas dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white data-[state=open]:bg-teal-600/50">
                <span className="flex items-center gap-1">
                  <HelpCircle size={16} />
                  O nas
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[230px] bg-white border border-teal-100 shadow-lg rounded-lg">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/about/virtualni-koticek" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Sparkles size={16} className="text-teal-500" />
                        <span>Virtualen kotiček</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/about/veterinarski-koticek" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Stethoscope size={16} className="text-teal-500" />
                        <span>Veterinarski kotiček</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/about/oskrba-zivali" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Scissors size={16} className="text-teal-500" />
                        <span>Oskrba živali po sprejemu</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/about/zgodbe-ljudi" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Quote size={16} className="text-teal-500" />
                        <span>Zgodbe ljudi</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/about/novice-dogodki" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <Newspaper size={16} className="text-teal-500" />
                        <span>Novice & Dogodki</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/o-nas" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                        <HelpCircle size={16} className="text-teal-500" />
                        <span>O nas</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Kontakt */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white")}>
                <Link to="/kontakt">
                  <span className="flex items-center gap-1">
                    <Phone size={16} />
                    Kontakt
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <div className="flex items-center gap-3 ml-3">
        <NavbarActions toggleSearch={toggleSearch} handleHomeClick={handleHomeClick} isMobile={false} />
        
        <NavbarBranding />
      </div>
    </div>;
};
