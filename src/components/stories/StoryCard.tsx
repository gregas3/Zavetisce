
import React, { useState } from 'react';
import { Story } from '@/data/storiesData';
import { Dog, Heart, Users, ExternalLink, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
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
  
  const getTagColorForType = (type: Story['type']) => {
    switch (type) {
      case 'adopter':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'volunteer':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'dog-walker':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return '';
    }
  };
  
  // Use the story's animalImage for the card display if available, otherwise use the regular image
  const displayImage = story.animalImage || story.image;
  
  return (
    <AnimatedWrapper animation="fade-in">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card 
            className="overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] cursor-pointer bg-white border-teal-100"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative">
              <div className="overflow-hidden" style={{ height: '200px' }}>
                <img 
                  src={displayImage} 
                  alt={`Animal related to ${story.name}'s story`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 border ${getTagColorForType(story.type)}`}>
                  {getIconForType(story.type)}
                  {getTagLabelForType(story.type)}
                </span>
              </div>
            </div>
            
            <CardContent className="pt-6">
              <blockquote className="italic text-gray-700 mb-4">"{story.text.length > 100 ? `${story.text.substring(0, 100)}...` : story.text}"</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-medium text-teal-900">{story.name}</p>
              </div>
              
              <div className="mt-4 text-teal-600 hover:text-teal-800 text-sm flex items-center gap-1.5 font-medium transition-colors">
                <ExternalLink size={14} />
                Preberi več
              </div>
              
              {story.videoUrl && (
                <div className="mt-2 flex items-center gap-2 text-rose-600">
                  <Play size={16} />
                  <span className="text-sm">Video</span>
                </div>
              )}
            </CardContent>
          </Card>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5 border ${getTagColorForType(story.type)}`}>
                  {getIconForType(story.type)}
                  {getTagLabelForType(story.type)}
                </span>
              </div>
              
              <blockquote className="italic text-gray-700 mb-4 text-lg">"{story.text}"</blockquote>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-medium text-teal-900 text-lg">{story.name}</p>
              </div>
              
              {story.videoUrl && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Video</h3>
                  <div className="relative bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={story.videoUrl}
                      className="absolute top-0 left-0 w-full h-full"
                      title={`Video zgodbe ${story.name}`}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
            
            {story.animalImage && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Fotografija</h3>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={story.animalImage} 
                    alt={`Žival od ${story.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </AnimatedWrapper>
  );
};

export default StoryCard;
