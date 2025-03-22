
import { Link } from "react-router-dom";
import { Dog, Cat, Heart, Calendar } from "lucide-react";
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
  return <div className="hidden lg:flex items-center gap-2">
      <NavigationMenu className="mr-0">
        <NavigationMenuList className="space-x-0.5">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white data-[state=open]:bg-teal-600/50 h-8 px-3 py-1">
              Posvojitve
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-3 md:w-[200px] bg-white border border-teal-100 shadow-lg rounded-lg">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/posvojitev/psi" className="flex items-center gap-2 p-1.5 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                      <Dog size={14} className="text-teal-500" />
                      <span className="text-sm">Psi</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/posvojitev/mačke" className="flex items-center gap-2 p-1.5 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                      <Cat size={14} className="text-teal-500" />
                      <span className="text-sm">Mačke</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/posvojitev/postopek" className="flex items-center gap-2 p-1.5 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                      <Heart size={14} className="text-teal-500" />
                      <span className="text-sm">Postopek posvojitve</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/termini" className="flex items-center gap-2 p-1.5 text-teal-800 hover:bg-teal-50 rounded-md transition-normal" onClick={closeMenu}>
                      <Calendar size={14} className="text-teal-500" />
                      <span className="text-sm">Ogledi</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white h-8 px-3 py-1")}>
              <Link to="/izgubljeni-najdeni">Najdeno in Pogrešano</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white h-8 px-3 py-1")}>
              <Link to="/prostovoljstvo">Prostovoljstvo</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white h-8 px-3 py-1")}>
              <Link to="/kontakt">Kontakt</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium text-white hover:bg-teal-600/50 hover:text-white h-8 px-3 py-1")}>
              <Link to="/o-nas">O nas</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center gap-2 ml-2">
        <NavbarActions toggleSearch={toggleSearch} handleHomeClick={handleHomeClick} isMobile={false} />
        <NavbarBranding />
      </div>
    </div>;
};
