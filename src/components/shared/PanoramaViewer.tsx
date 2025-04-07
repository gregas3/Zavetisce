
import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Expand, Smartphone } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PanoramaViewerProps {
  imagePath: string;
  alt: string;
  className?: string;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ 
  imagePath, 
  alt,
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullscreenContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const fullscreenImageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [gyroscopeEnabled, setGyroscopeEnabled] = useState(false);
  const [rotation, setRotation] = useState(0);
  const isMobile = useIsMobile();

  // Handle device orientation for gyroscope controls
  useEffect(() => {
    let orientationHandler: ((event: DeviceOrientationEvent) => void) | null = null;
    
    if (isFullscreen && isMobile) {
      // Request permission for device orientation if needed (iOS)
      const requestPermission = async () => {
        if (typeof DeviceOrientationEvent !== 'undefined' && 
            typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
          try {
            const permission = await (DeviceOrientationEvent as any).requestPermission();
            if (permission === 'granted') {
              setGyroscopeEnabled(true);
              
              // Set up the orientation handler
              orientationHandler = (event: DeviceOrientationEvent) => {
                if (event.gamma) {
                  // Use gamma (left to right tilt) for horizontal rotation
                  // Map the gamma range (-90 to 90 degrees) to a reasonable scroll range
                  const newRotation = event.gamma * 10; // Adjust sensitivity as needed
                  setRotation(newRotation);
                  
                  if (fullscreenContainerRef.current && fullscreenImageRef.current) {
                    const maxScroll = fullscreenImageRef.current.scrollWidth - fullscreenContainerRef.current.clientWidth;
                    // Map rotation to scroll position (0-180 degrees maps to 0-maxScroll)
                    const scrollPos = ((newRotation + 90) / 180) * maxScroll;
                    fullscreenContainerRef.current.scrollLeft = Math.max(0, Math.min(maxScroll, scrollPos));
                  }
                }
              };
              
              window.addEventListener('deviceorientation', orientationHandler);
            }
          } catch (error) {
            console.error('Error requesting device orientation permission:', error);
          }
        } else if (typeof window.DeviceOrientationEvent !== 'undefined') {
          // For devices that don't require permission
          setGyroscopeEnabled(true);
          
          orientationHandler = (event: DeviceOrientationEvent) => {
            if (event.gamma) {
              const newRotation = event.gamma * 10;
              setRotation(newRotation);
              
              if (fullscreenContainerRef.current && fullscreenImageRef.current) {
                const maxScroll = fullscreenImageRef.current.scrollWidth - fullscreenContainerRef.current.clientWidth;
                const scrollPos = ((newRotation + 90) / 180) * maxScroll;
                fullscreenContainerRef.current.scrollLeft = Math.max(0, Math.min(maxScroll, scrollPos));
              }
            }
          };
          
          window.addEventListener('deviceorientation', orientationHandler);
        }
      };
      
      requestPermission();
    }
    
    return () => {
      if (orientationHandler) {
        window.removeEventListener('deviceorientation', orientationHandler);
      }
    };
  }, [isFullscreen, isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Center the scroll position initially
    const handleImageLoad = () => {
      if (container && imageRef.current) {
        const scrollAmount = (imageRef.current.scrollWidth - container.clientWidth) / 2;
        container.scrollLeft = scrollAmount;
        setScrollLeft(scrollAmount);
        setImageLoaded(true);
      }
    };

    if (imageRef.current) {
      if (imageRef.current.complete) {
        handleImageLoad();
      } else {
        imageRef.current.addEventListener('load', handleImageLoad);
        return () => {
          imageRef.current?.removeEventListener('load', handleImageLoad);
        };
      }
    }
  }, []);

  // Center the fullscreen image when opened
  useEffect(() => {
    if (isFullscreen && fullscreenContainerRef.current && fullscreenImageRef.current) {
      const scrollAmount = (fullscreenImageRef.current.scrollWidth - fullscreenContainerRef.current.clientWidth) / 2;
      fullscreenContainerRef.current.scrollLeft = scrollAmount;
    }
  }, [isFullscreen]);

  const handleMouseDown = (e: React.MouseEvent, isFullscreenView = false) => {
    setIsDragging(true);
    const container = isFullscreenView ? fullscreenContainerRef.current : containerRef.current;
    setStartX(e.pageX - (container?.offsetLeft || 0));
    setScrollLeft(container?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent, isFullscreenView = false) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      const container = isFullscreenView ? fullscreenContainerRef.current : containerRef.current;
      setStartX(e.touches[0].clientX - (container?.offsetLeft || 0));
      setScrollLeft(container?.scrollLeft || 0);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent, isFullscreenView = false) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const container = isFullscreenView ? fullscreenContainerRef.current : containerRef.current;
    if (!container) return;
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent, isFullscreenView = false) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    const container = isFullscreenView ? fullscreenContainerRef.current : containerRef.current;
    if (!container) return;
    
    const x = e.touches[0].clientX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-lg">
          <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="w-full overflow-x-auto overflow-y-hidden flex cursor-grab active:cursor-grabbing rounded-lg relative"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={(e) => handleMouseMove(e)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onClick={openFullscreen}
      >
        <img 
          ref={imageRef}
          src={imagePath} 
          alt={alt}
          className="h-auto min-w-max object-cover"
          style={{ maxHeight: "500px" }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="text-center mt-2 text-sm text-teal-600 font-medium">
        Povlecite ali zavrtite telefon za ogled 360° pogleda zavetišča
      </div>

      {/* Fullscreen button */}
      <div className="mt-4 flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-teal-700 border-teal-200"
                onClick={openFullscreen}
              >
                <Expand size={18} />
                Ogled si v celozaslonskem načinu
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Kliknite za celozaslonski način</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] p-0 overflow-hidden">
          <div className="relative w-full h-full flex flex-col">
            {/* Gyroscope info tooltip for mobile */}
            {isMobile && (
              <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5">
                <Smartphone size={14} />
                Zavrtite s telefonom ali povlecite za raziskovanje prostora
              </div>
            )}
            
            <div 
              ref={fullscreenContainerRef}
              className="w-full h-full overflow-x-auto overflow-y-hidden flex cursor-grab active:cursor-grabbing"
              style={{ 
                scrollBehavior: 'smooth', 
                WebkitOverflowScrolling: 'touch', 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                flex: 1
              }}
              onMouseDown={(e) => handleMouseDown(e, true)}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={(e) => handleMouseMove(e, true)}
              onTouchStart={(e) => handleTouchStart(e, true)}
              onTouchEnd={handleTouchEnd}
              onTouchMove={(e) => handleTouchMove(e, true)}
            >
              <img 
                ref={fullscreenImageRef}
                src={imagePath}
                alt={alt}
                className="h-full min-w-max object-cover"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PanoramaViewer;
