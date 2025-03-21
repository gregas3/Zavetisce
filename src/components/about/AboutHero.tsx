
import React from 'react';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">O nas</h1>
          <p className="text-lg md:text-xl text-teal-700 mb-8">
            Spoznajte naše zavetišče, naše poslanstvo in našo vizijo za prihodnost zapuščenih živali.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
