
import { Link } from "react-router-dom";
import { Dog, Cat, Heart, Calendar, PawPrint, Users, Phone, HelpCircle, Search, Map, AlertCircle, FileQuestion } from "lucide-react";
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
                    <Link to="/posvojitev/postopek" className="flex items-center gap-2 p-2 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                      <Heart size={16} className="text-teal-500" />
                      <span>Postopek posvojitve</span>
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
                      <span>Vprašalnik</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white")}>
              <Link to="/izgubljeni-najdeni">
                <span className="flex items-center gap-1">
                  <AlertCircle size={16} />
                  Najdeno in Pogrešano
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white")}>
              <Link to="/prostozivece-macke">
                <span className="flex items-center gap-1">
                  <Cat size={16} />
                  Prostoživeče mačke
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
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
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white")}>
              <Link to="/o-nas">
                <span className="flex items-center gap-1">
                  <HelpCircle size={16} />
                  O nas
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center gap-3 ml-3">
        <NavbarActions toggleSearch={toggleSearch} handleHomeClick={handleHomeClick} isMobile={false} />
        
        <NavbarBranding />
      </div>
    </div>;
};
