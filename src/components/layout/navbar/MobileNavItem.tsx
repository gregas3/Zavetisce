
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Measure content height when contents or open state changes
  useEffect(() => {
    if (contentRef.current && isOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, children]);
  
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
        aria-expanded={isOpen}
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
          className={`pl-2 overflow-hidden transition-all duration-300 ${
            isOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ 
            maxHeight: isOpen ? `${Math.min(contentHeight, 200)}px` : 0 
          }}
        >
          <ScrollArea 
            className={`${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}
          >
            <div ref={contentRef} className="space-y-0.5 pb-1.5">
              {children}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};
