
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '@/data/destinationData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DestinationHero from '@/components/DestinationHero';
import DestinationOverview from '@/components/DestinationOverview';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import EmergencyNumbers from '@/components/EmergencyNumbers';
import QuickTips from '@/components/QuickTips';
import WheelchairServices from '@/components/WheelchairServices';
import AttractionsListing from '@/components/AttractionsListing';
import TravelerExperienceForm from '@/components/TravelerExperienceForm';
import TravelerExperiencesList from '@/components/TravelerExperiencesList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';

interface TravelerExperience {
  id: string;
  name: string;
  email: string;
  shareContactPublic: boolean;
  experience: string;
  blogPosts: string;
  photos: File[];
  countryId: number;
  submittedAt: string;
}

const DestinationDetail = () => {
  const { destinationId, countryId } = useParams();
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<TravelerExperience[]>([]);

  // Support both new destinationId and legacy countryId parameters
  const id = destinationId || countryId;
  
  // Find destination including cities within categories
  const findDestination = (id: string) => {
    const numId = parseInt(id);
    
    // First check top-level destinations
    let destination = destinations.find(d => d.id === numId);
    if (destination) return destination;
    
    // Then check cities within categories
    for (const dest of destinations) {
      if (dest.cities) {
        const city = dest.cities.find(c => c.id === numId);
        if (city) return city;
      }
    }
    
    return null;
  };

  const destination = findDestination(id || '0');

  useEffect(() => {
    const storedExperiences = localStorage.getItem('travelerExperiences');
    if (storedExperiences) {
      const allExperiences = JSON.parse(storedExperiences);
      const destinationExperiences = allExperiences.filter(
        (exp: TravelerExperience) => exp.countryId === parseInt(id || '0')
      );
      setExperiences(destinationExperiences);
    }
  }, [id]);

  const handleExperienceSubmit = (experience: TravelerExperience) => {
    const storedExperiences = localStorage.getItem('travelerExperiences');
    const allExperiences = storedExperiences ? JSON.parse(storedExperiences) : [];
    
    const updatedExperiences = [...allExperiences, experience];
    localStorage.setItem('travelerExperiences', JSON.stringify(updatedExperiences));
    
    const destinationExperiences = updatedExperiences.filter(
      (exp: TravelerExperience) => exp.countryId === parseInt(id || '0')
    );
    setExperiences(destinationExperiences);
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Destination not found</h1>
            <button 
              onClick={() => navigate('/destinations')} 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Back to destinations
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If it's a category page, show city overview
  if (destination.isCategory && destination.cities) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Navigation />
        <DestinationHero destination={destination} />

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <DestinationOverview destination={destination} />
            
            {/* Cities Grid */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cities in {destination.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.cities.map((city) => (
                  <Card 
                    key={city.id} 
                    className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                    onClick={() => navigate(`/destination/${city.id}`)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={city.image}
                        alt={`${city.city}, ${city.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        {city.rating && (
                          <Badge className="bg-green-600 text-white">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            {city.rating}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        {city.city}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 line-clamp-3">{city.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {city.highlights?.slice(0, 2).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {city.highlights && city.highlights.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{city.highlights.length - 2} more
                          </Badge>
                        )}
                      </div>
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        Explore {city.city}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <AccessibilityFeatures destination={destination} />
            <EmergencyNumbers 
              emergencyNumbers={destination.emergencyNumbers} 
              cityName={destination.name} 
            />
            <QuickTips 
              quickTips={destination.quickTips} 
              cityName={destination.name} 
              countryId={destination.id} 
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Regular city page
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      <DestinationHero destination={destination} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <DestinationOverview destination={destination} />
          <AccessibilityFeatures destination={destination} />
          <AttractionsListing 
            attractions={destination.wheelchairAccessibleAttractions} 
            cityName={destination.city} 
          />
          <EmergencyNumbers 
            emergencyNumbers={destination.emergencyNumbers} 
            cityName={destination.city} 
          />
          <QuickTips 
            quickTips={destination.quickTips} 
            cityName={destination.city} 
            countryId={destination.id} 
          />
          <WheelchairServices 
            services={destination.wheelchairServices} 
            cityName={destination.city} 
          />

          <div className="space-y-8">
            <TravelerExperienceForm 
              countryId={destination.id} 
              onSubmit={handleExperienceSubmit}
            />
            
            <TravelerExperiencesList 
              experiences={experiences}
              countryName={destination.name}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
