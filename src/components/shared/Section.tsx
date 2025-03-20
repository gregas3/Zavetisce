
import { ReactNode } from 'react';
import AnimatedWrapper from './AnimatedWrapper';

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  subtitle?: string; // Added subtitle prop
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children: ReactNode;
  centered?: boolean;
  animate?: boolean;
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
}: SectionProps) {
  const content = (
    <section id={id} className={`section-padding relative ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description || subtitle) && (
          <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleClassName}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className={`text-xl md:text-2xl font-medium mb-4 text-teal-600 ${centered ? 'mx-auto' : ''}`}>
                {subtitle}
              </h3>
            )}
            {description && (
              <p className={`text-lg text-muted-foreground max-w-3xl ${centered ? 'mx-auto' : ''} ${descriptionClassName}`}>
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
    <AnimatedWrapper animation="fade-in">
      {content}
    </AnimatedWrapper>
  ) : content;
}
