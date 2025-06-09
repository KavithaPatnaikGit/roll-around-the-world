
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Star, Gift, CreditCard, Tag, Clock } from 'lucide-react';
import { AccessibleAttraction, DiscountOffer } from '@/data/countryData';

interface AttractionsListingProps {
  attractions: AccessibleAttraction[];
  cityName: string;
}

const AttractionsListing = ({ attractions, cityName }: AttractionsListingProps) => {
  // Separate attractions into free and paid
  const freeAttractions = attractions.filter(attraction => !attraction.bookingUrl);
  const paidAttractions = attractions.filter(attraction => attraction.bookingUrl);

  const renderDiscountOffers = (discounts: DiscountOffer[]) => {
    if (!discounts || discounts.length === 0) return null;

    // Sort by discount percentage (highest first)
    const sortedDiscounts = [...discounts].sort((a, b) => b.discountPercentage - a.discountPercentage);
    const topDiscount = sortedDiscounts[0];

    return (
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-green-600">
          <Tag className="w-4 h-4" />
          Top Discount: {topDiscount.discountPercentage}% off
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-green-800">{topDiscount.provider}</span>
            {topDiscount.validUntil && (
              <div className="flex items-center gap-1 text-xs text-green-600">
                <Clock className="w-3 h-3" />
                Until {new Date(topDiscount.validUntil).toLocaleDateString()}
              </div>
            )}
          </div>
          
          <p className="text-sm text-green-700 mb-2">{topDiscount.description}</p>
          
          {topDiscount.originalPrice && topDiscount.discountedPrice && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm line-through text-gray-500">€{topDiscount.originalPrice}</span>
              <span className="text-lg font-bold text-green-600">€{topDiscount.discountedPrice}</span>
            </div>
          )}
          
          <Button
            asChild
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <a
              href={topDiscount.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tag className="w-4 h-4 mr-2" />
              Get {topDiscount.discountPercentage}% Discount
            </a>
          </Button>
          
          {sortedDiscounts.length > 1 && (
            <div className="mt-2 pt-2 border-t border-green-300">
              <p className="text-xs text-green-600">
                +{sortedDiscounts.length - 1} more discount{sortedDiscounts.length > 2 ? 's' : ''} available
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

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
      
      {/* Show discount offers for paid attractions */}
      {attraction.bookingUrl && attraction.discounts && renderDiscountOffers(attraction.discounts)}
      
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
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
