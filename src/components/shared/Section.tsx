
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
}: SectionProps) {
  const content = (
    <section id={id} className={`py-10 md:py-14 relative ${className}`} tabIndex={-1}>
      <div className="container mx-auto px-4">
        {(title || description || subtitle) && (
          <div className={`mb-8 md:mb-10 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
            {title && (
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${titleClassName}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className={`text-lg md:text-xl font-medium mb-3 text-teal-600 ${centered ? 'mx-auto' : ''}`}>
                {subtitle}
              </h3>
            )}
            {description && (
              <p className={`text-base text-muted-foreground max-w-3xl ${centered ? 'mx-auto' : ''} ${descriptionClassName}`}>
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
