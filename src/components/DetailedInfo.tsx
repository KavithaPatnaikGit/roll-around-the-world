
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Utensils, Star, ExternalLink } from 'lucide-react';
import { Country } from '@/data/countryData';

interface DetailedInfoProps {
  country: Country;
}

const DetailedInfo = ({ country }: DetailedInfoProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Accommodation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{country.detailedInfo.accommodation}</p>
          
          {country.accessibleHotels && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-800 mb-3">Wheelchair Accessible Hotels</h4>
              <div className="space-y-3">
                {country.accessibleHotels.map((hotel, index) => (
                  <div key={index} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <a
                        href={hotel.reservationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                      >
                        {hotel.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <div className="flex">
                        {renderStars(hotel.rating)}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {hotel.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
