
import { ReactNode, useEffect, useRef, CSSProperties } from 'react';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'zoom-in' | 'slide-up' | 'slide-in-right' | 'fade-in-up' | 'none' | 'float' | 'bounce-slow' | 'shake';
  delay?: number;
  threshold?: number;
  style?: CSSProperties;
}

export default function AnimatedWrapper({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  style,
}: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              if (animation === 'zoom-in') {
                entry.target.classList.add('scale-100');
              } else if (animation === 'slide-up' || animation === 'fade-in-up') {
                entry.target.classList.add('translate-y-0');
              } else if (animation === 'slide-in-right') {
                entry.target.classList.add('translate-x-0');
              } else if (animation === 'float' || animation === 'bounce-slow' || animation === 'shake') {
                // These animations are handled by CSS animation classes
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '10px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, threshold]);

  let animationClasses = '';
  
  if (animation === 'fade-in') {
    animationClasses = 'opacity-0 transition-opacity duration-700 ease-out';
  } else if (animation === 'zoom-in') {
    animationClasses = 'opacity-0 scale-95 transition-all duration-700 ease-out';
  } else if (animation === 'slide-up') {
    animationClasses = 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
  } else if (animation === 'fade-in-up') {
    animationClasses = 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
  } else if (animation === 'slide-in-right') {
    animationClasses = 'opacity-0 translate-x-10 transition-all duration-700 ease-out';
  } else if (animation === 'float') {
    animationClasses = 'animate-float';
  } else if (animation === 'bounce-slow') {
    animationClasses = 'animate-bounce-slow';
  } else if (animation === 'shake') {
    animationClasses = 'animate-shake';
  }

  return (
    <div ref={ref} className={`${animationClasses} ${className}`} style={style}>
      {children}
    </div>
  );
}
