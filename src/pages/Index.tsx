import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accessibility, Star, MapPin, Search, Plane, Heart } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState('all');

  const countries = [
    {
      id: 1,
      name: 'Netherlands',
      city: 'Amsterdam',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop',
      description: 'Exceptional wheelchair accessibility with flat terrain, accessible public transport, and world-class facilities.',
      highlights: ['100% accessible trams', 'Flat cycling paths', 'Accessible museums', 'Wheelchair-friendly hotels']
    },
    {
      id: 2,
      name: 'Japan',
      city: 'Tokyo',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
      description: 'Modern infrastructure with excellent accessibility features, tactile guidance systems, and accessible public transport.',
      highlights: ['Accessible JR trains', 'Tactile paving', 'Universal design', 'Accessible temples']
    },
    {
      id: 3,
      name: 'Australia',
      city: 'Sydney',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Strong disability rights with accessible beaches, transport, and attractions throughout the country.',
      highlights: ['Beach wheelchairs', 'Accessible ferries', 'Disability-friendly venues', 'Clear accessibility info']
    },
    {
      id: 4,
      name: 'United Kingdom',
      city: 'London',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
      description: 'Good accessibility standards with step-free access to many attractions and improving public transport.',
      highlights: ['Step-free tube stations', 'Accessible black cabs', 'Historic sites with ramps', 'Clear signage']
    },
    {
      id: 5,
      name: 'Germany',
      city: 'Berlin',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1587330979470-3205a7938067?w=400&h=300&fit=crop',
      description: 'Excellent public transport accessibility and well-maintained infrastructure for wheelchair users.',
      highlights: ['Low-floor buses', 'Accessible U-Bahn', 'Ramped entrances', 'Audio announcements']
    },
    {
      id: 6,
      name: 'Canada',
      city: 'Vancouver',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Beautiful accessible nature experiences with well-designed urban infrastructure.',
      highlights: ['Accessible trails', 'SkyTrain accessibility', 'Inclusive attractions', 'Disability services']
    },
    {
      id: 7,
      name: 'Singapore',
      city: 'Singapore',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop',
      description: 'Ultra-modern city-state with universal design principles and exceptional accessibility.',
      highlights: ['Barrier-free MRT', 'Accessible hawker centers', 'Universal design', 'Clear wayfinding']
    },
    {
      id: 8,
      name: 'Sweden',
      city: 'Stockholm',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=300&fit=crop',
      description: 'Progressive accessibility standards with beautiful accessible architecture and nature access.',
      highlights: ['Accessible archipelago', 'Modern public transport', 'Inclusive design', 'Accessible museums']
    }
  ];

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         country.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = selectedRating === 'all' || country.rating >= parseInt(selectedRating);
    return matchesSearch && matchesRating;
  });

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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Accessibility className="w-12 h-12" />
              <Plane className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Accessible Travel Destinations
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover amazing wheelchair-accessible destinations around the world. 
              Every traveler deserves to explore beautiful places with confidence and ease.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4" />
                Carefully curated destinations
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                Real accessibility reviews
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                Verified accessibility ratings
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search countries or cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedRating === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedRating('all')}
                className="h-12"
              >
                All Ratings
              </Button>
              <Button
                variant={selectedRating === '5' ? 'default' : 'outline'}
                onClick={() => setSelectedRating('5')}
                className="h-12"
              >
                5 Stars Only
              </Button>
              <Button
                variant={selectedRating === '4' ? 'default' : 'outline'}
                onClick={() => setSelectedRating('4')}
                className="h-12"
              >
                4+ Stars
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {filteredCountries.length} Wheelchair-Accessible Destinations
          </h2>
          <p className="text-gray-600">
            Each destination has been evaluated for accessibility features, infrastructure, and traveler experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <Card key={country.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative">
                <img
                  src={country.image}
                  alt={`${country.city}, ${country.name}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <Accessibility className="w-3 h-3 mr-1" />
                    Accessible
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                  <div className="flex">
                    {renderStars(country.rating)}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">{country.name}</span>
                  <MapPin className="w-5 h-5 text-gray-500" />
                </CardTitle>
                <CardDescription className="text-lg font-medium text-blue-600">
                  {country.city}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {country.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {country.highlights.slice(0, 2).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {country.highlights.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{country.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-16">
            <Accessibility className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Accessibility className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Accessible Travel</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Making travel accessible for everyone. We believe that mobility should never limit your ability to explore the world.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>• Verified accessibility information</span>
              <span>• Real traveler reviews</span>
              <span>• Updated regularly</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
