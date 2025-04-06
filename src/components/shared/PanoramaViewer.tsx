
import React, { useEffect, useRef, useState } from 'react';

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
  const imageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX - (containerRef.current?.offsetLeft || 0));
      setScrollLeft(containerRef.current?.scrollLeft || 0);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const container = containerRef.current;
    if (!container) return;
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const x = e.touches[0].clientX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
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
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
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
        Povlecite za ogled 360° pogleda zavetišča skozi pasje oči
      </div>
    </div>
  );
};

export default PanoramaViewer;
