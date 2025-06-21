
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accessibility, Star, ArrowLeft, Share2, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Country } from '@/data/types';
import ReadAloudButton from './ReadAloudButton';

interface DestinationHeroProps {
  destination: Country;
}

const DestinationHero = ({ destination }: DestinationHeroProps) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const heroText = `${destination.name}, ${destination.city}. ${destination.description} Accessibility rating: ${destination.rating} out of 5 stars. Fully accessible destination.`;

  return (
    <div className="relative h-[60vh] min-h-[500px]">
      <img
        src={destination.image}
        alt={`${destination.city}, ${destination.name}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      {/* Navigation buttons */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
        <Button
          className="bg-white/90 text-gray-800 hover:bg-white backdrop-blur-sm"
          onClick={() => navigate('/destinations')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to destinations
        </Button>
        
        <div className="flex gap-2">
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="bg-green-600 hover:bg-green-700 text-white mb-4">
              <Accessibility className="w-4 h-4 mr-2" />
              Fully Accessible
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            
            <p className="text-2xl text-white/90 mb-4">{destination.city}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                {renderStars(destination.rating)}
                <span className="text-white text-lg ml-2">
                  {destination.rating}/5 Accessibility Rating
                </span>
              </div>
            </div>

            <p className="text-lg text-white/90 max-w-2xl leading-relaxed mb-4">
              {destination.description}
            </p>

            <ReadAloudButton 
              text={heroText}
              label="Read destination info"
              variant="secondary"
              className="bg-white/90 text-gray-800 hover:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationHero;
