
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { destinations } from '@/data/destinationData';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DestinationsGrid = () => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Accessible Travel Destinations
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-3">
            Discover the world's most wheelchair-accessible destinations with detailed guides, 
            transport information, and traveler experiences.
          </p>
          <p className="text-sm md:text-base text-blue-200 italic">
            Share your story about a Destination.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.city}, ${destination.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {destination.rating}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {destination.name}
                </CardTitle>
                <div className="flex items-center gap-1">
                  {renderStars(destination.rating)}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4 line-clamp-3">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights?.slice(0, 2).map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                  {destination.highlights && destination.highlights.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{destination.highlights.length - 2} more
                    </Badge>
                  )}
                </div>
                
                <Button 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  onClick={() => navigate(`/destination/${destination.id}`)}
                >
                  Explore destination
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationsGrid;
