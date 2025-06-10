
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Star, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinationData';

const DestinationsGrid = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = selectedRating ? destination.rating >= selectedRating : true;
    return matchesSearch && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Accessible <span className="text-blue-600">Destinations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of wheelchair-friendly destinations around the world
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search destinations or cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {[3, 4, 5].map(rating => (
                <Button
                  key={rating}
                  variant={selectedRating === rating ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                  className="flex items-center gap-1"
                >
                  <Star className="w-3 h-3" />
                  {rating}+
                </Button>
              ))}
              {selectedRating && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedRating(null)}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDestinations.length} of {destinations.length} destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDestinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => navigate(`/destination/${destination.id}`)}
            >
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
                <p className="text-gray-600">{destination.city}</p>
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
                <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Explore Destination
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedRating(null);
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DestinationsGrid;
