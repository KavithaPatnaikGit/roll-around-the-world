import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Star, Gift, CreditCard, Tag, Clock, Users, Coffee, Lightbulb } from 'lucide-react';
import { AccessibleAttraction, DiscountOffer } from '@/data/types';

interface AttractionsListingProps {
  attractions: AccessibleAttraction[];
  cityName: string;
}

const AttractionsListing = ({ attractions, cityName }: AttractionsListingProps) => {
  // Separate attractions into free and paid
  const freeAttractions = attractions.filter(attraction => !attraction.bookingUrl);
  const paidAttractions = attractions.filter(attraction => attraction.bookingUrl);

  // Additional meetup places and local attractions for each city
  const getMeetupPlaces = (cityName: string) => {
    const meetupPlaces = {
      Amsterdam: [
        { name: "Vondelpark Pavilion", description: "Central meeting spot with accessible facilities and café" },
        { name: "Central Library (OBA)", description: "Modern accessible building with meeting spaces and free WiFi" },
        { name: "Museumplein", description: "Large open square perfect for group gatherings near major museums" },
        { name: "Café Central", description: "Accessible café popular with international visitors and locals" }
      ],
      Tokyo: [
        { name: "Shibuya Sky", description: "Accessible rooftop observation deck and meeting space" },
        { name: "Tokyo Station Marunouchi", description: "Central accessible location with many dining options" },
        { name: "Odaiba Aqua City", description: "Shopping center with accessible facilities and Tokyo Bay views" },
        { name: "Harajuku Kawaii Monster Café", description: "Unique accessible themed café experience" }
      ],
      Sydney: [
        { name: "Circular Quay", description: "Central transport hub with harbour views and accessible facilities" },
        { name: "The Rocks Markets", description: "Weekend markets with accessible pathways and local crafts" },
        { name: "Darling Harbour", description: "Waterfront area with accessible restaurants and entertainment" },
        { name: "Royal Botanic Gardens Café", description: "Accessible café with harbour views in beautiful gardens" }
      ],
      London: [
        { name: "Covent Garden Market", description: "Historic market with accessible shops and street performers" },
        { name: "South Bank", description: "Riverside walkway with accessible cultural venues and cafés" },
        { name: "Borough Market", description: "Famous food market with accessible areas and diverse cuisine" },
        { name: "Sky Garden", description: "Free accessible viewing deck with panoramic city views" }
      ],
      Berlin: [
        { name: "Potsdamer Platz", description: "Modern accessible plaza with shops, restaurants, and cinema" },
        { name: "Hackescher Markt", description: "Vibrant area with accessible cafés and boutique shopping" },
        { name: "East Side Gallery Café", description: "Accessible café near the famous Berlin Wall art gallery" },
        { name: "Prenzlauer Berg Kollwitzplatz", description: "Local square with accessible cafés and weekend markets" }
      ],
      Vancouver: [
        { name: "English Bay Beach", description: "Accessible beach with stunning sunset views and nearby cafés" },
        { name: "Granville Island Public Market", description: "Covered market with accessible local food vendors" },
        { name: "Canada Place", description: "Iconic waterfront building with accessible convention spaces" },
        { name: "VanDusen Botanical Garden Visitor Centre", description: "Accessible meeting space in beautiful garden setting" }
      ],
      Singapore: [
        { name: "Clarke Quay", description: "Riverside entertainment district with accessible restaurants and bars" },
        { name: "ION Orchard", description: "Accessible luxury shopping mall with diverse dining options" },
        { name: "Marina Bay Sands Shopping", description: "Iconic mall with accessible facilities and harbour views" },
        { name: "Haji Lane", description: "Colorful street with accessible boutique shops and cafés" }
      ],
      Stockholm: [
        { name: "Stortorget Square", description: "Historic square in Gamla Stan with accessible cafés" },
        { name: "Södermalm Viewpoints", description: "Accessible lookout points with panoramic city views" },
        { name: "NK Department Store Café", description: "Accessible upscale café in the heart of the city" },
        { name: "Fotografiska Museum Café", description: "Accessible café with modern art and harbour views" }
      ]
    };
    return meetupPlaces[cityName as keyof typeof meetupPlaces] || [];
  };

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
          
          {/* Display accessibility tip if available */}
          {attraction.tip && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-800 mb-1">Accessibility Tip</p>
                  <p className="text-sm text-blue-700">{attraction.tip}</p>
                </div>
              </div>
            </div>
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

  const renderMeetupPlaceCard = (place: { name: string; description: string }, index: number) => (
    <Card key={index} className="p-4 hover:shadow-md transition-shadow bg-blue-50 border-blue-200">
      <div className="flex items-start gap-3">
        <Coffee className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-1 text-blue-800">{place.name}</h4>
          <p className="text-sm text-blue-700">{place.description}</p>
        </div>
      </div>
    </Card>
  );

  const meetupPlaces = getMeetupPlaces(cityName);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Other Attractions & Meetup Places in {cityName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Meetup Places Section */}
        {meetupPlaces.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
              <Users className="w-5 h-5" />
              Local Meetup Places & Hangouts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {meetupPlaces.map((place, index) => renderMeetupPlaceCard(place, index))}
            </div>
          </div>
        )}

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
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-600">
              <CreditCard className="w-5 h-5" />
              Paid Attractions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paidAttractions.map((attraction, index) => renderAttractionCard(attraction, index))}
            </div>
          </div>
        )}

        {/* Show message if no attractions */}
        {attractions.length === 0 && meetupPlaces.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No wheelchair accessible attractions or meetup places available for {cityName} at this time.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default AttractionsListing;
