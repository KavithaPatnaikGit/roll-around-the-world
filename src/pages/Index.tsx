import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accessibility, Star, MapPin, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Index = () => {
  const navigate = useNavigate();

  const countries = [
    {
      id: 1,
      name: 'Netherlands',
      city: 'Amsterdam',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=400&fit=crop',
      description: 'Exceptional wheelchair accessibility with flat terrain, accessible public transport, and world-class facilities.',
      highlights: ['100% accessible trams', 'Flat cycling paths', 'Accessible museums', 'Wheelchair-friendly hotels']
    },
    {
      id: 2,
      name: 'Japan',
      city: 'Tokyo',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop',
      description: 'Modern infrastructure with excellent accessibility features, tactile guidance systems, and accessible public transport.',
      highlights: ['Accessible JR trains', 'Tactile paving', 'Universal design', 'Accessible temples']
    },
    {
      id: 3,
      name: 'Australia',
      city: 'Sydney',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      description: 'Strong disability rights with accessible beaches, transport, and attractions throughout the country.',
      highlights: ['Beach wheelchairs', 'Accessible ferries', 'Disability-friendly venues', 'Clear accessibility info']
    },
    {
      id: 4,
      name: 'United Kingdom',
      city: 'London',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop',
      description: 'Good accessibility standards with step-free access to many attractions and improving public transport.',
      highlights: ['Step-free tube stations', 'Accessible black cabs', 'Historic sites with ramps', 'Clear signage']
    },
    {
      id: 5,
      name: 'Germany',
      city: 'Berlin',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1587330979470-3205a7938067?w=800&h=400&fit=crop',
      description: 'Excellent public transport accessibility and well-maintained infrastructure for wheelchair users.',
      highlights: ['Low-floor buses', 'Accessible U-Bahn', 'Ramped entrances', 'Audio announcements']
    },
    {
      id: 6,
      name: 'Canada',
      city: 'Vancouver',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      description: 'Beautiful accessible nature experiences with well-designed urban infrastructure.',
      highlights: ['Accessible trails', 'SkyTrain accessibility', 'Inclusive attractions', 'Disability services']
    },
    {
      id: 7,
      name: 'Singapore',
      city: 'Singapore',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=400&fit=crop',
      description: 'Ultra-modern city-state with universal design principles and exceptional accessibility.',
      highlights: ['Barrier-free MRT', 'Accessible hawker centers', 'Universal design', 'Clear wayfinding']
    },
    {
      id: 8,
      name: 'Sweden',
      city: 'Stockholm',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&h=400&fit=crop',
      description: 'Progressive accessibility standards with beautiful accessible architecture and nature access.',
      highlights: ['Accessible archipelago', 'Modern public transport', 'Inclusive design', 'Accessible museums']
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Navigation />
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Accessible Travel Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's most wheelchair-accessible destinations with detailed guides, 
            transport information, and traveler experiences.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <Card key={country.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <img
                  src={country.image}
                  alt={`${country.city}, ${country.name}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <Accessibility className="w-4 h-4 mr-1" />
                    Accessible
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{country.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {country.city}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(country.rating)}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{country.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {country.highlights.slice(0, 2).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {country.highlights.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{country.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Button 
                  className="w-full"
                  onClick={() => navigate(`/country/${country.id}`)}
                >
                  Explore destination
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
