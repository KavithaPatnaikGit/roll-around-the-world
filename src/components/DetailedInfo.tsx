
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Utensils, Star, ExternalLink, ChevronDown, ChevronUp, Wifi, Car, Coffee } from 'lucide-react';
import { Country } from '@/data/countryData';

interface DetailedInfoProps {
  country: Country;
}

const DetailedInfo = ({ country }: DetailedInfoProps) => {
  const [showAllHotels, setShowAllHotels] = useState(false);
  
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
    if (hotelName.toLowerCase().includes('luxury') || hotelName.toLowerCase().includes('ritz') || hotelName.toLowerCase().includes('raffles')) {
      return <Star className="w-4 h-4 text-yellow-600" />;
    }
    return <Building className="w-4 h-4 text-blue-600" />;
  };

  const displayedHotels = showAllHotels ? country.accessibleHotels : country.accessibleHotels?.slice(0, 6);

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
          
          {country.accessibleHotels && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800 text-lg">Wheelchair Accessible Hotels</h4>
                <Badge variant="outline" className="text-sm">
                  {country.accessibleHotels.length} options available
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {displayedHotels?.map((hotel, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
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
                      <div className="flex items-center gap-1">
                        {renderStars(hotel.rating)}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
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
                  </div>
                ))}
              </div>
              
              {country.accessibleHotels && country.accessibleHotels.length > 6 && (
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
                        Show All {country.accessibleHotels.length} Hotels <ChevronDown className="w-4 h-4" />
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
