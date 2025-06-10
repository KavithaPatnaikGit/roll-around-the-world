
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, ChevronDown, ChevronUp, Star, Utensils, Building, Lightbulb, Wrench, MapIcon } from 'lucide-react';
import { StateFeature } from '@/data/countryData';

interface StateLevelFeaturesProps {
  countryName: string;
  stateFeatures: StateFeature[];
}

const StateLevelFeatures = ({ countryName, stateFeatures }: StateLevelFeaturesProps) => {
  const [expandedStates, setExpandedStates] = useState<{[key: string]: boolean}>({});
  const [expandedCities, setExpandedCities] = useState<{[key: string]: boolean}>({});

  const toggleState = (stateName: string) => {
    setExpandedStates(prev => ({
      ...prev,
      [stateName]: !prev[stateName]
    }));
  };

  const toggleCity = (cityKey: string) => {
    setExpandedCities(prev => ({
      ...prev,
      [cityKey]: !prev[cityKey]
    }));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'attraction':
        return 'text-blue-600';
      case 'transport':
        return 'text-green-600';
      case 'accommodation':
        return 'text-purple-600';
      case 'service':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (!stateFeatures || stateFeatures.length === 0) {
    return null;
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Complete Accessibility Guide for {countryName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stateFeatures.map((state, stateIndex) => {
            const stateKey = `${state.stateName}-${stateIndex}`;
            const isStateExpanded = expandedStates[stateKey];
            
            return (
              <div key={stateIndex} className="border-l-4 border-blue-200 pl-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <MapIcon className="w-5 h-5" />
                    {state.stateName}
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleState(stateKey)}
                    className="flex items-center gap-2"
                  >
                    {isStateExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    {isStateExpanded ? 'Hide Details' : 'Show Details'}
                  </Button>
                </div>

                {/* State-level features */}
                {state.features && state.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">State-wide Services</h4>
                    <div className="grid gap-2">
                      {state.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 p-2 bg-blue-50 rounded-lg">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getTypeColor(feature.type).replace('text-', 'bg-')}`} />
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h5 className="font-medium text-gray-900 text-sm">{feature.name}</h5>
                                <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                              </div>
                              <a
                                href={feature.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 text-xs"
                              >
                                Visit
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isStateExpanded && (
                  <div className="space-y-4">
                    {/* Cities */}
                    {state.cities && state.cities.map((city, cityIndex) => {
                      const cityKey = `${stateKey}-${city.name}-${cityIndex}`;
                      const isCityExpanded = expandedCities[cityKey];
                      
                      return (
                        <div key={cityIndex} className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {city.name}
                            </h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleCity(cityKey)}
                              className="flex items-center gap-1"
                            >
                              {isCityExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                              {isCityExpanded ? 'Less' : 'More'}
                            </Button>
                          </div>

                          {isCityExpanded && (
                            <div className="space-y-6">
                              {/* Accessible Attractions */}
                              {city.accessibleAttractions && city.accessibleAttractions.length > 0 && (
                                <div>
                                  <h5 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-blue-600" />
                                    Accessible Attractions
                                  </h5>
                                  <div className="grid gap-3">
                                    {city.accessibleAttractions.map((attraction, idx) => (
                                      <div key={idx} className="border rounded-lg p-3 bg-white">
                                        <div className="flex items-start justify-between mb-2">
                                          <div>
                                            <h6 className="font-medium text-gray-900">{attraction.name}</h6>
                                            {attraction.rating && (
                                              <div className="flex items-center gap-1 mt-1">
                                                {renderStars(attraction.rating)}
                                                <span className="text-xs text-gray-600">({attraction.rating}/5)</span>
                                              </div>
                                            )}
                                            {attraction.description && (
                                              <p className="text-sm text-gray-600 mt-1">{attraction.description}</p>
                                            )}
                                          </div>
                                          <div className="flex gap-2">
                                            <a
                                              href={attraction.url}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-blue-600 hover:text-blue-800 transition-colors text-xs"
                                            >
                                              <ExternalLink className="w-3 h-3" />
                                            </a>
                                            {attraction.bookingUrl && (
                                              <a
                                                href={attraction.bookingUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-600 hover:text-green-800 transition-colors text-xs"
                                              >
                                                Book
                                              </a>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Accessible Hotels */}
                              {city.accessibleHotels && city.accessibleHotels.length > 0 && (
                                <div>
                                  <h5 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                                    <Building className="w-4 h-4 text-purple-600" />
                                    Accessible Accommodation
                                  </h5>
                                  <div className="grid gap-3">
                                    {city.accessibleHotels.map((hotel, idx) => (
                                      <div key={idx} className="border rounded-lg p-3 bg-white">
                                        <div className="flex items-start justify-between mb-2">
                                          <div>
                                            <h6 className="font-medium text-gray-900">{hotel.name}</h6>
                                            <div className="flex items-center gap-1 mt-1">
                                              {renderStars(hotel.rating)}
                                              <span className="text-xs text-gray-600">({hotel.rating}/5)</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1 mt-2">
                                              {hotel.features.map((feature, i) => (
                                                <Badge key={i} variant="outline" className="text-xs">
                                                  {feature}
                                                </Badge>
                                              ))}
                                            </div>
                                          </div>
                                          <a
                                            href={hotel.reservationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 transition-colors text-xs"
                                          >
                                            Book
                                          </a>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Top Dining */}
                              {city.topDining && city.topDining.length > 0 && (
                                <div>
                                  <h5 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                                    <Utensils className="w-4 h-4 text-red-600" />
                                    Accessible Dining
                                  </h5>
                                  <div className="grid gap-3">
                                    {city.topDining.map((restaurant, idx) => (
                                      <div key={idx} className="border rounded-lg p-3 bg-white">
                                        <div className="flex items-start justify-between mb-2">
                                          <div>
                                            <h6 className="font-medium text-gray-900">{restaurant.name}</h6>
                                            <div className="flex items-center gap-2 mt-1">
                                              <div className="flex items-center gap-1">
                                                {renderStars(restaurant.rating)}
                                                <span className="text-xs text-gray-600">({restaurant.rating}/5)</span>
                                              </div>
                                              <span className="text-xs text-gray-500">{restaurant.cuisine}</span>
                                              <span className="text-xs text-gray-500">{restaurant.priceRange}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1 mt-2">
                                              {restaurant.accessibilityFeatures.map((feature, i) => (
                                                <Badge key={i} variant="outline" className="text-xs">
                                                  {feature}
                                                </Badge>
                                              ))}
                                            </div>
                                          </div>
                                          {restaurant.reservationUrl && (
                                            <a
                                              href={restaurant.reservationUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-blue-600 hover:text-blue-800 transition-colors text-xs"
                                            >
                                              Reserve
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Wheelchair Services */}
                              {city.wheelchairServices && city.wheelchairServices.length > 0 && (
                                <div>
                                  <h5 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                                    <Wrench className="w-4 h-4 text-green-600" />
                                    Wheelchair Services
                                  </h5>
                                  <div className="grid gap-3">
                                    {city.wheelchairServices.map((service, idx) => (
                                      <div key={idx} className="border rounded-lg p-3 bg-white">
                                        <div className="flex items-start justify-between mb-2">
                                          <div>
                                            <h6 className="font-medium text-gray-900">{service.name}</h6>
                                            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                                            <p className="text-xs text-gray-500 mt-1">{service.address}</p>
                                            {service.phone && (
                                              <p className="text-xs text-blue-600 mt-1">
                                                <a href={`tel:${service.phone}`}>{service.phone}</a>
                                              </p>
                                            )}
                                            <Badge variant="outline" className="text-xs mt-2">
                                              {service.type === 'both' ? 'Repair & Purchase' : 
                                               service.type === 'repair' ? 'Repair' : 'Purchase'}
                                            </Badge>
                                          </div>
                                          {service.website && (
                                            <a
                                              href={service.website}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-blue-600 hover:text-blue-800 transition-colors text-xs"
                                            >
                                              <ExternalLink className="w-3 h-3" />
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Quick Tips */}
                              {city.quickTips && city.quickTips.length > 0 && (
                                <div>
                                  <h5 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                                    <Lightbulb className="w-4 h-4 text-yellow-600" />
                                    Quick Tips for {city.name}
                                  </h5>
                                  <div className="space-y-2">
                                    {city.quickTips.map((tip, idx) => (
                                      <div key={idx} className="flex items-start gap-2 p-2 bg-yellow-50 rounded-lg">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">
                                          {tip.text}{' '}
                                          <a 
                                            href={tip.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 underline transition-colors inline-flex items-center gap-1"
                                          >
                                            Learn more
                                            <ExternalLink className="w-3 h-3" />
                                          </a>
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default StateLevelFeatures;
