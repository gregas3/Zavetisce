
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedAnimals from '@/components/home/FeaturedAnimals';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import QuickLinks from '@/components/home/QuickLinks';
import AnimatedWrapper from '@/components/shared/AnimatedWrapper';

export default function Index() {
  // Remove any duplicate Footer if it was here
  return (
    <AnimatedWrapper>
      <HeroSection />
      <QuickLinks />
      <FeaturedAnimals />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </AnimatedWrapper>
  );
}
