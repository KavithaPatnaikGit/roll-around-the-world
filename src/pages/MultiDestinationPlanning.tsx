
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinationData';
import { Country } from '@/data/types';

const MultiDestinationPlanning = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all cities from destinations data
  const getAllCities = () => {
    const cities: Array<{ name: string; city: string; country: Country }> = [];
    
    destinations.forEach(destination => {
      if (destination.cities) {
        destination.cities.forEach(city => {
          cities.push({
            name: city.city,
            city: city.city,
            country: city
          });
        });
      } else if (!destination.isCategory) {
        cities.push({
          name: destination.city,
          city: destination.city,
          country: destination
        });
      }
    });
    
    return cities;
  };

  const allCities = getAllCities();
  
  const filteredCities = allCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedCityData = allCities.find(city => city.name === selectedCity);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Plan Multi-Destination Trip</h1>
            <p className="text-gray-600 mt-2">Select cities and explore their accessible attractions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* City Selection */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Select Cities
                </CardTitle>
                <CardDescription>
                  Choose from our accessible destinations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Search cities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                <div className="max-h-96 overflow-y-auto space-y-2">
                  {filteredCities.map((city, index) => (
                    <div
                      key={`${city.name}-${index}`}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedCity === city.name 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedCity(city.name)}
                    >
                      <div className="font-medium">{city.name}</div>
                      <div className="text-sm text-gray-600">{city.country.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Rating: {city.country.rating}/5 stars
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Attractions Display */}
          <div className="space-y-6">
            {selectedCityData ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Attractions in {selectedCityData.name}
                  </CardTitle>
                  <CardDescription>
                    Wheelchair accessible attractions and services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Wheelchair Accessible Attractions */}
                    {selectedCityData.country.wheelchairAccessibleAttractions.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Accessible Attractions</h3>
                        <div className="space-y-3">
                          {selectedCityData.country.wheelchairAccessibleAttractions.map((attraction, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900">{attraction.name}</h4>
                                  <p className="text-sm text-gray-600 mt-1">{attraction.description}</p>
                                  <div className="flex items-center gap-4 mt-2">
                                    <div className="flex items-center gap-1">
                                      <span className="text-sm font-medium">Rating:</span>
                                      <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                          <span
                                            key={i}
                                            className={`text-sm ${
                                              i < attraction.rating ? 'text-yellow-400' : 'text-gray-300'
                                            }`}
                                          >
                                            ★
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2 mt-3">
                                {attraction.url && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={attraction.url} target="_blank" rel="noopener noreferrer">
                                      Learn More
                                    </a>
                                  </Button>
                                )}
                                {attraction.bookingUrl && (
                                  <Button size="sm" asChild>
                                    <a href={attraction.bookingUrl} target="_blank" rel="noopener noreferrer">
                                      Book Now
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Wheelchair Services */}
                    {selectedCityData.country.wheelchairServices.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Wheelchair Services</h3>
                        <div className="space-y-3">
                          {selectedCityData.country.wheelchairServices.map((service, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg">
                              <h4 className="font-medium text-gray-900">{service.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                              <div className="text-sm text-gray-500 mt-2">
                                <div>📍 {service.address}</div>
                                <div>📞 {service.phone}</div>
                                {service.website && (
                                  <div>
                                    <a href={service.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                      🌐 Website
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Tips */}
                    {selectedCityData.country.quickTips.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Quick Tips</h3>
                        <div className="space-y-2">
                          {selectedCityData.country.quickTips.map((tip, index) => (
                            <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                              <p className="text-sm text-gray-700">{tip.text}</p>
                              {tip.link && (
                                <a href={tip.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                                  Learn more →
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center py-12">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a city to view its accessible attractions</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MultiDestinationPlanning;
