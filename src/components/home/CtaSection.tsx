
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Heart, HelpingHand } from 'lucide-react';

const CtaSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pomagajte nam pomagati</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Vaša podpora omogoča, da lahko še naprej pomagamo živalim v stiski. Prispevajte z donacijo, 
          prostovoljstvom ali posvojitvijo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="secondary" 
            className="bg-white text-teal-700 hover:bg-gray-100 py-6 px-8 text-lg gap-2 rounded-full"
            onClick={() => navigate('/donacije')}
          >
            <Heart className="h-5 w-5" />
            Doniraj
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-teal-700 py-6 px-8 text-lg gap-2 rounded-full"
            onClick={() => navigate('/prostovoljstvo')}
          >
            <HelpingHand className="h-5 w-5" />
            Postani prostovoljec
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
