import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from "@/components/layout/Layout";
import { stories, Story } from "@/data/storiesData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dog, Heart, Users, Quote } from "lucide-react";
import StoryCard from "@/components/stories/StoryCard";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";
const ZgodbeLjudi = () => {
  const [filter, setFilter] = useState<'all' | 'adopter' | 'volunteer' | 'dog-walker'>('all');
  const filteredStories = filter === 'all' ? stories : stories.filter(story => story.type === filter);
  const getIconForType = (type: Story['type']) => {
    switch (type) {
      case 'adopter':
        return <Heart size={16} className="text-pink-500" />;
      case 'volunteer':
        return <Users size={16} className="text-indigo-500" />;
      case 'dog-walker':
        return <Dog size={16} className="text-amber-500" />;
      default:
        return null;
    }
  };
  const getTagLabelForType = (type: Story['type']) => {
    switch (type) {
      case 'adopter':
        return 'Posvojitelj';
      case 'volunteer':
        return 'Prostovoljec';
      case 'dog-walker':
        return 'Sprehajalec psov';
      default:
        return '';
    }
  };
  return <Layout className="bg-gradient-to-b from-[#f0f9f7]/90 to-[#e8f6f4]/90">
      <Helmet>
        <title>Zgodbe ljudi | Zavetišče za živali Maribor</title>
        <meta name="description" content="Resnične zgodbe ljudi, ki so posvojili živali, prostovoljcev in sprehajalcev psov iz Zavetišča za živali Maribor." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <AnimatedWrapper animation="fade-in" className="mb-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">Zgodbe ljudi</h1>
            <p className="text-teal-700/90 text-lg">Spoznajte zgodbe ljudi, ki so posvojili živali iz našega zavetišča, naših prostovoljcev in sprehajalcev psov. Delite tudi svojo zgodbo z nami!</p>
          </div>
        </AnimatedWrapper>
        
        <AnimatedWrapper animation="fade-in" delay={150} className="mb-12">
          <Tabs defaultValue="all" className="max-w-xl mx-auto">
            <TabsList className="grid grid-cols-4 bg-teal-50 border-teal-100">
              <TabsTrigger value="all" onClick={() => setFilter('all')} className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Vsi
              </TabsTrigger>
              <TabsTrigger value="adopter" onClick={() => setFilter('adopter')} className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                <Heart size={16} className="mr-2" />
                Posvojitelji
              </TabsTrigger>
              <TabsTrigger value="volunteer" onClick={() => setFilter('volunteer')} className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
                <Users size={16} className="mr-2" />
                Prostovoljci
              </TabsTrigger>
              <TabsTrigger value="dog-walker" onClick={() => setFilter('dog-walker')} className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                <Dog size={16} className="mr-2" />
                Sprehajalci
              </TabsTrigger>
            </TabsList>
            
            {/* Content for all tabs is the same, but with different filtering */}
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStories.map(story => <StoryCard key={story.id} story={story} />)}
              </div>
            </TabsContent>
            <TabsContent value="adopter" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStories.map(story => <StoryCard key={story.id} story={story} />)}
              </div>
            </TabsContent>
            <TabsContent value="volunteer" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStories.map(story => <StoryCard key={story.id} story={story} />)}
              </div>
            </TabsContent>
            <TabsContent value="dog-walker" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStories.map(story => <StoryCard key={story.id} story={story} />)}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedWrapper>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-teal-800 mb-6">Delite svojo zgodbo z nami</h2>
          <p className="text-teal-700/80 max-w-2xl mx-auto mb-8">
            Ste posvojili žival iz našega zavetišča ali ste naš prostovoljec? 
            Pošljite nam svojo zgodbo in fotografije, da jih bomo lahko delili z drugimi.
          </p>
          <a href="mailto:zavetisce.mb@snaga-mb.si?subject=Moja%20zgodba%20za%20Zgodbe%20ljudi" className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-all hover:scale-105 inline-flex items-center gap-2">
            <Quote size={18} />
            Pošljite svojo zgodbo
          </a>
        </div>
      </div>
    </Layout>;
};
export default ZgodbeLjudi;