
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accessibility, Star, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Country } from '@/data/countryData';

interface CountryHeroProps {
  country: Country;
}

const CountryHero = ({ country }: CountryHeroProps) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section className="relative" role="banner">
      <img
        src={country.image}
        alt={`Scenic view of ${country.city}, ${country.name} showing accessible tourism destinations`}
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{country.name}</h1>
          <p className="text-2xl mb-4">{country.city}</p>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex" role="img" aria-label={`${rating} out of 5 stars accessibility rating`}>
              {renderStars(country.rating)}
            </div>
            <span className="text-lg ml-2 sr-only">
              Accessibility rating: {country.rating} out of 5 stars
            </span>
            <span className="text-lg ml-2" aria-hidden="true">Accessibility Rating</span>
          </div>
          <Badge className="bg-green-600 hover:bg-green-700 text-lg px-4 py-2">
            <Accessibility className="w-5 h-5 mr-2" aria-hidden="true" />
            Wheelchair Accessible
          </Badge>
        </div>
      </div>
      <Button
        className="absolute top-6 left-6 bg-white/90 text-gray-800 hover:bg-white focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        onClick={() => navigate('/')}
        aria-label="Go back to destinations list"
      >
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
        Back to destinations
      </Button>
    </section>
  );
};

export default CountryHero;
