
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Star, Gift, CreditCard } from 'lucide-react';
import { AccessibleAttraction } from '@/data/countryData';

interface AttractionsListingProps {
  attractions: AccessibleAttraction[];
  cityName: string;
}

const AttractionsListing = ({ attractions, cityName }: AttractionsListingProps) => {
  // Separate attractions into free and paid
  const freeAttractions = attractions.filter(attraction => !attraction.bookingUrl);
  const paidAttractions = attractions.filter(attraction => attraction.bookingUrl);

  const renderAttractionCard = (attraction: AccessibleAttraction, index: number) => (
    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-1">{attraction.name}</h4>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < (attraction.rating || 4) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              ({attraction.rating || 4}/5)
            </span>
          </div>
          {attraction.description && (
            <p className="text-sm text-gray-600 mb-3">{attraction.description}</p>
          )}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <a
            href={attraction.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            Learn More
          </a>
        </Button>
        
        {attraction.bookingUrl && (
          <Button
            asChild
            size="sm"
            className="flex items-center gap-2"
          >
            <a
              href={attraction.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Book Now
            </a>
          </Button>
        )}
      </div>
    </Card>
  );

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Top Wheelchair Accessible Attractions in {cityName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Free Attractions Section */}
        {freeAttractions.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600">
              <Gift className="w-5 h-5" />
              Free Attractions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {freeAttractions.map((attraction, index) => renderAttractionCard(attraction, index))}
            </div>
          </div>
        )}

        {/* Paid Attractions Section */}
        {paidAttractions.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
              <CreditCard className="w-5 h-5" />
              Paid Attractions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paidAttractions.map((attraction, index) => renderAttractionCard(attraction, index))}
            </div>
          </div>
        )}

        {/* Show message if no attractions */}
        {attractions.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No wheelchair accessible attractions available for {cityName} at this time.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default AttractionsListing;
