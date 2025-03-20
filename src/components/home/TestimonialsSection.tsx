
import { useState } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "../shared/Section";
import AnimatedWrapper from "../shared/AnimatedWrapper";

const testimonials = [
  {
    id: 1,
    name: "Mateja Novak",
    text: "Pred dvema letoma smo posvojili Reksa iz zavetišča in postal je najljubši član naše družine. Hvala celotnemu osebju za vso pomoč in podporo pri posvojitvi.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Janez Kovač",
    text: "Ko smo izgubili našega psa, so nam v zavetišču takoj pomagali pri objavi in iskanju. Njihova hitrost in predanost je bila izjemna. Srečni smo, da smo ga našli, hvala vam!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Nina Horvat",
    text: "Kot prostovoljka v zavetišču lahko z gotovostjo trdim, da osebje dela s srcem. Njihova skrb za živali je neverjetna in vedno se trudijo najti najboljši dom za vsako žival.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section className="bg-muted">
      <div className="max-w-4xl mx-auto">
        <AnimatedWrapper animation="fade-in">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kaj pravijo naši posvojitelji</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Spoznajte zgodbe ljudi, ki so posvojili živali iz našega zavetišča in jim spremenili življenja.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="relative bg-card rounded-xl p-8 md:p-10 shadow-md">
          <Quote 
            size={70} 
            className="absolute top-8 left-8 text-primary/10 -z-10" 
            strokeWidth={1}
          />
          
          <AnimatedWrapper 
            key={activeIndex} 
            animation="fade-in" 
            className="text-center"
          >
            <div className="mb-8">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-primary/10 object-cover"
              />
            </div>
            <p className="text-lg md:text-xl italic mb-6 text-foreground">
              "{testimonials[activeIndex].text}"
            </p>
            <p className="font-bold text-foreground">{testimonials[activeIndex].name}</p>
          </AnimatedWrapper>
          
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-sm"
                onClick={prevTestimonial}
              >
                <ChevronLeft size={20} />
                <span className="sr-only">Prejšnja</span>
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-normal ${
                      activeIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Pojdi na pričevanje ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-sm"
                onClick={nextTestimonial}
              >
                <ChevronRight size={20} />
                <span className="sr-only">Naslednja</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
