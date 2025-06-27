

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Utensils, Star, ExternalLink, ChevronDown, ChevronUp, Wifi, Car, Coffee, RefreshCw } from 'lucide-react';
import { Country } from '@/data/countryData';
import { HotelScrapingService, ScrapedHotel, HotelScrapingResult } from '@/utils/HotelScrapingService';
import { useToast } from '@/components/ui/use-toast';

interface DetailedInfoProps {
  country: Country;
}

interface CombinedHotel {
  name: string;
  rating: number;
  features: string[];
  reservationUrl: string;
  isOriginal: boolean;
  scrapedTips?: string[];
  city?: string;
}

interface CityAccommodation {
  cityName: string;
  hotels: CombinedHotel[];
  scrapedCount: number;
  lastScrapedAt?: string;
}

const DetailedInfo = ({ country }: DetailedInfoProps) => {
  const [showAllHotels, setShowAllHotels] = useState<{[key: string]: boolean}>({});
  const [cityAccommodations, setCityAccommodations] = useState<CityAccommodation[]>([]);
  const [isLoadingHotels, setIsLoadingHotels] = useState<{[key: string]: boolean}>({});
  const { toast } = useToast();
  
  useEffect(() => {
    // Initialize city accommodations
    const cities = country.cities || [country];
    const accommodations: CityAccommodation[] = cities.map(city => {
      const cityName = city.city || city.name;
      
      // Load cached hotels for this city
      const cached = HotelScrapingService.getCachedHotels(cityName);
      const scrapedHotels = cached ? cached.hotels : [];
      
      // Combine original hotels with scraped hotels
      const allHotels: CombinedHotel[] = [
        ...(city.accessibleHotels || []).map(hotel => ({
          ...hotel,
          isOriginal: true,
          city: cityName
        })),
        ...scrapedHotels.map(hotel => ({
          name: hotel.name,
          rating: hotel.rating,
          features: hotel.accessibilityFeatures,
          reservationUrl: hotel.bookingUrl,
          isOriginal: false,
          scrapedTips: hotel.tips,
          city: cityName
        }))
      ];

      return {
        cityName,
        hotels: allHotels,
        scrapedCount: scrapedHotels.length,
        lastScrapedAt: cached?.scrapedAt
      };
    });
    
    setCityAccommodations(accommodations);
  }, [country]);

  const handleScrapeHotels = async (cityName: string) => {
    setIsLoadingHotels(prev => ({ ...prev, [cityName]: true }));
    
    try {
      const result = await HotelScrapingService.scrapeHotelsForCity(cityName);
      
      if (result) {
        // Update the specific city's accommodation data
        setCityAccommodations(prev => 
          prev.map(cityAccom => {
            if (cityAccom.cityName === cityName) {
              const originalHotels = cityAccom.hotels.filter(h => h.isOriginal);
              const newScrapedHotels = result.hotels.map(hotel => ({
                name: hotel.name,
                rating: hotel.rating,
                features: hotel.accessibilityFeatures,
                reservationUrl: hotel.bookingUrl,
                isOriginal: false,
                scrapedTips: hotel.tips,
                city: cityName
              }));
              
              return {
                ...cityAccom,
                hotels: [...originalHotels, ...newScrapedHotels],
                scrapedCount: result.hotels.length,
                lastScrapedAt: result.scrapedAt
              };
            }
            return cityAccom;
          })
        );
        
        toast({
          title: "Hotels Updated",
          description: `Found ${result.hotels.length} accessible hotels in ${cityName}`,
        });
      } else {
        toast({
          title: "Scraping Failed",
          description: "Unable to fetch hotel data. Please check your Firecrawl API key.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Hotel scraping error:', error);
      toast({
        title: "Error",
        description: "Failed to scrape hotel data",
        variant: "destructive"
      });
    } finally {
      setIsLoadingHotels(prev => ({ ...prev, [cityName]: false }));
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const getHotelTypeIcon = (hotelName: string) => {
    if (hotelName.toLowerCase().includes('budget') || hotelName.toLowerCase().includes('hostel') || hotelName.toLowerCase().includes('ymca')) {
      return <Coffee className="w-4 h-4 text-green-600" />;
    }
    if (hotelName.toLowerCase().includes('luxury') || hotelName.toLowerCase().includes('grand') || hotelName.toLowerCase().includes('premium')) {
      return <Star className="w-4 h-4 text-yellow-600" />;
    }
    return <Building className="w-4 h-4 text-blue-600" />;
  };

  const toggleShowAllHotels = (cityName: string) => {
    setShowAllHotels(prev => ({ ...prev, [cityName]: !prev[cityName] }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Accessible Accommodations by City
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">{country.detailedInfo.accommodation}</p>
          
          {/* City-by-City Accommodations */}
          <div className="space-y-8">
            {cityAccommodations.map((cityAccom) => {
              const displayedHotels = showAllHotels[cityAccom.cityName] ? cityAccom.hotels : cityAccom.hotels.slice(0, 6);
              
              return (
                <div key={cityAccom.cityName} className="border rounded-lg p-6 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800">{cityAccom.cityName}</h3>
                      <Badge variant="outline" className="text-sm">
                        {cityAccom.hotels.length} hotels available
                      </Badge>
                    </div>
                    
                    {/* Hotel Scraping Controls for each city */}
                    <div className="flex items-center gap-3">
                      {cityAccom.lastScrapedAt && (
                        <span className="text-xs text-gray-500">
                          Updated: {new Date(cityAccom.lastScrapedAt).toLocaleDateString()}
                        </span>
                      )}
                      <Button 
                        onClick={() => handleScrapeHotels(cityAccom.cityName)}
                        disabled={isLoadingHotels[cityAccom.cityName]}
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <RefreshCw className={`w-4 h-4 ${isLoadingHotels[cityAccom.cityName] ? 'animate-spin' : ''}`} />
                        {isLoadingHotels[cityAccom.cityName] ? 'Scraping...' : 'Update Hotels'}
                      </Button>
                    </div>
                  </div>

                  {cityAccom.scrapedCount > 0 && (
                    <div className="mb-4">
                      <Badge variant="secondary" className="text-sm">
                        {cityAccom.scrapedCount} hotels found via web scraping
                      </Badge>
                    </div>
                  )}
                  
                  {cityAccom.hotels.length > 0 && (
                    <div className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {displayedHotels.map((hotel, index) => (
                          <div key={index} className={`border rounded-lg p-4 hover:shadow-lg transition-all duration-300 ${
                            hotel.isOriginal ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-gradient-to-br from-green-50 to-blue-50'
                          }`}>
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                {getHotelTypeIcon(hotel.name)}
                                <a
                                  href={hotel.reservationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 text-sm"
                                >
                                  {hotel.name}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  {renderStars(hotel.rating)}
                                </div>
                                {!hotel.isOriginal && (
                                  <Badge variant="secondary" className="text-xs">
                                    Live Data
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-2 mb-3">
                              {hotel.features.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                                  <span className="text-xs text-gray-700">{feature}</span>
                                </div>
                              ))}
                              {hotel.features.length > 3 && (
                                <Badge variant="secondary" className="text-xs self-start mt-1">
                                  +{hotel.features.length - 3} more features
                                </Badge>
                              )}
                            </div>

                            {/* Hotel Tips for scraped hotels */}
                            {hotel.scrapedTips && hotel.scrapedTips.length > 0 && (
                              <div className="mt-3 p-2 bg-blue-50 rounded border-l-4 border-l-blue-400">
                                <p className="text-xs font-medium text-blue-800 mb-1">💡 Travel Tips:</p>
                                {hotel.scrapedTips.slice(0, 2).map((tip, i) => (
                                  <p key={i} className="text-xs text-blue-700">• {tip}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {cityAccom.hotels.length > 6 && (
                        <div className="text-center">
                          <Button 
                            variant="outline" 
                            onClick={() => toggleShowAllHotels(cityAccom.cityName)}
                            className="flex items-center gap-2"
                          >
                            {showAllHotels[cityAccom.cityName] ? (
                              <>
                                Show Less <ChevronUp className="w-4 h-4" />
                              </>
                            ) : (
                              <>
                                Show All {cityAccom.hotels.length} Hotels <ChevronDown className="w-4 h-4" />
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Attractions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{country.detailedInfo.attractions}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="w-5 h-5" />
            Dining
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{country.detailedInfo.dining}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedInfo;

