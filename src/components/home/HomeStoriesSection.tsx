
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "../shared/Section";
import AnimatedWrapper from "../shared/AnimatedWrapper";
import { getRandomFeaturedStories, Story } from "@/data/storiesData";

export default function HomeStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stories, setStories] = useState<Story[]>([]);
  
  useEffect(() => {
    // Get 3 random featured stories for the homepage
    const randomStories = getRandomFeaturedStories(3);
    setStories(randomStories);
  }, []);
  
  const nextStory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  if (stories.length === 0) return null;

  return (
    <Section className="bg-gradient-to-b from-[#f0f9f7]/90 to-[#e8f6f4]/90">
      <div className="max-w-4xl mx-auto">
        <AnimatedWrapper animation="fade-in">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-800">Zgodbe ljudi</h2>
            <p className="text-lg text-teal-700/90 max-w-3xl mx-auto">
              Spoznajte resnične zgodbe ljudi, ki so posvojili živali iz našega zavetišča ali pomagajo kot prostovoljci.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="relative bg-white rounded-xl p-8 md:p-10 shadow-sm border border-teal-100">
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
                src={stories[activeIndex].image} 
                alt={stories[activeIndex].name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-primary/10 object-cover"
              />
            </div>
            <p className="text-lg md:text-xl italic mb-6 text-foreground">
              "{stories[activeIndex].text}"
            </p>
            <p className="font-bold text-foreground">{stories[activeIndex].name}</p>
          </AnimatedWrapper>
          
          {stories.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-sm"
                onClick={prevStory}
              >
                <ChevronLeft size={20} />
                <span className="sr-only">Prejšnja</span>
              </Button>
              
              <div className="flex items-center gap-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-normal ${
                      activeIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Pojdi na zgodbo ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full shadow-sm"
                onClick={nextStory}
              >
                <ChevronRight size={20} />
                <span className="sr-only">Naslednja</span>
              </Button>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Link 
              to="/about/zgodbe-ljudi" 
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Preberi več zgodb
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
