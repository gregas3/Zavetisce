
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

type MobileNavItemProps = {
  title: string;
  hasSubmenu?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

export const MobileNavItem = ({
  title,
  hasSubmenu = false,
  children,
  icon
}: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSubmenu = (e: React.MouseEvent) => {
    if (hasSubmenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <div className="rounded-lg overflow-hidden hover:bg-teal-50/80 transition-normal">
      <button 
        className="flex items-center justify-between w-full text-sm py-2.5 px-3 font-medium text-left text-teal-800 hover:text-teal-600 transition-normal" 
        onClick={toggleSubmenu}
      >
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>
        {hasSubmenu && (
          <ChevronDown 
            size={16} 
            className={`text-teal-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        )}
      </button>
      
      {hasSubmenu && (
        <div 
          className={`pl-2 space-y-0.5 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[200px] opacity-100 pb-1.5" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
