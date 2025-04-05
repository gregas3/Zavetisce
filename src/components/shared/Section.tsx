
import { ReactNode } from 'react';
import AnimatedWrapper from './AnimatedWrapper';

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children: ReactNode;
  centered?: boolean;
  animate?: boolean;
  animation?: 'fade-in' | 'zoom-in' | 'slide-up' | 'slide-in-right' | 'fade-in-up' | 'none' | 'float' | 'bounce-slow' | 'shake';
  backgroundImage?: string;
  backgroundOverlay?: string;
  backgroundFilter?: string;
}

export default function Section({
  id,
  title,
  description,
  subtitle,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  children,
  centered = false,
  animate = true,
  animation = 'fade-in',
  backgroundImage,
  backgroundOverlay = 'rgba(255, 255, 255, 0.85)',
  backgroundFilter = '',
}: SectionProps) {
  const content = (
    <section 
      id={id} 
      className={`py-8 md:py-12 px-4 md:px-0 relative ${className}`} 
      tabIndex={-1}
      style={{
        position: 'relative',
      }}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: backgroundFilter || undefined,
          }}
        />
      )}
      
      {backgroundImage && backgroundOverlay && (
        <div 
          className="absolute inset-0 z-0" 
          style={{ backgroundColor: backgroundOverlay }}
        />
      )}
      
      <div className="container mx-auto relative z-10">
        {(title || description || subtitle) && (
          <div className={`mb-6 md:mb-8 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
            {title && (
              <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-2.5 ${titleClassName}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className={`text-base md:text-lg font-medium mb-2.5 text-teal-600 ${centered ? 'mx-auto' : ''}`}>
                {subtitle}
              </h3>
            )}
            {description && (
              <p className={`text-sm md:text-base text-muted-foreground max-w-3xl ${centered ? 'mx-auto' : ''} ${descriptionClassName}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );

  return animate ? (
    <AnimatedWrapper animation={animation}>
      {content}
    </AnimatedWrapper>
  ) : content;
}
