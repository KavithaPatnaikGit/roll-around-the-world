
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
}

const DetailedInfo = ({ country }: DetailedInfoProps) => {
  const [showAllHotels, setShowAllHotels] = useState(false);
  const [scrapedHotels, setScrapedHotels] = useState<ScrapedHotel[]>([]);
  const [isLoadingHotels, setIsLoadingHotels] = useState(false);
  const [lastScrapedAt, setLastScrapedAt] = useState<string | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load cached hotels on component mount
    const cached = HotelScrapingService.getCachedHotels(country.city);
    if (cached) {
      setScrapedHotels(cached.hotels);
      setLastScrapedAt(cached.scrapedAt);
    }
  }, [country.city]);

  const handleScrapeHotels = async () => {
    setIsLoadingHotels(true);
    
    try {
      const result = await HotelScrapingService.scrapeHotelsForCity(country.city);
      
      if (result) {
        setScrapedHotels(result.hotels);
        setLastScrapedAt(result.scrapedAt);
        toast({
          title: "Hotels Updated",
          description: `Found ${result.hotels.length} accessible hotels in ${country.city}`,
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
      setIsLoadingHotels(false);
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

  // Combine original hotels with scraped hotels
  const allHotels: CombinedHotel[] = [
    ...(country.accessibleHotels || []).map(hotel => ({
      ...hotel,
      isOriginal: true
    })),
    ...scrapedHotels.map(hotel => ({
      name: hotel.name,
      rating: hotel.rating,
      features: hotel.accessibilityFeatures,
      reservationUrl: hotel.bookingUrl,
      isOriginal: false,
      scrapedTips: hotel.tips
    }))
  ];

  const displayedHotels = showAllHotels ? allHotels : allHotels.slice(0, 6);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Accessible Accommodations in {country.city}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">{country.detailedInfo.accommodation}</p>
          
          {/* Hotel Scraping Controls */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-medium text-gray-800">Live Hotel Data</h4>
                <p className="text-sm text-gray-600">
                  {lastScrapedAt 
                    ? `Last updated: ${new Date(lastScrapedAt).toLocaleDateString()}`
                    : 'Fetch latest accessible hotels from booking sites'
                  }
                </p>
              </div>
              <Button 
                onClick={handleScrapeHotels}
                disabled={isLoadingHotels}
                size="sm"
                className="flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isLoadingHotels ? 'animate-spin' : ''}`} />
                {isLoadingHotels ? 'Scraping...' : 'Update Hotels'}
              </Button>
            </div>
            {scrapedHotels.length > 0 && (
              <Badge variant="outline" className="text-sm">
                {scrapedHotels.length} hotels found via web scraping
              </Badge>
            )}
          </div>
          
          {allHotels.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800 text-lg">Wheelchair Accessible Hotels</h4>
                <Badge variant="outline" className="text-sm">
                  {allHotels.length} options available
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {displayedHotels?.map((hotel, index) => (
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
              
              {allHotels.length > 6 && (
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAllHotels(!showAllHotels)}
                    className="flex items-center gap-2"
                  >
                    {showAllHotels ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show All {allHotels.length} Hotels <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}
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
