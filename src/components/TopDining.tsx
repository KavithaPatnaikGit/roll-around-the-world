
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, ExternalLink, Star, MapPin, Plane, Train, Hotel } from 'lucide-react';

interface DiningOption {
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  description: string;
  accessibility: string;
  location: {
    nearAirport?: boolean;
    nearTrainStation?: boolean;
    nearAccessibleHotel?: boolean;
    address: string;
  };
  url?: string;
  bookingUrl?: string;
}

interface TopDiningProps {
  cityName: string;
}

const TopDining = ({ cityName }: TopDiningProps) => {
  // Dining options for each city
  const getDiningOptions = (cityName: string): DiningOption[] => {
    const diningData = {
      Amsterdam: [
        {
          name: "Restaurant Greetje",
          cuisine: "Modern Dutch",
          rating: 4.7,
          priceRange: "€€€",
          description: "Contemporary Dutch cuisine with wheelchair accessible entrance and seating",
          accessibility: "Fully wheelchair accessible with adapted restrooms",
          location: {
            nearAccessibleHotel: true,
            address: "Near Lloyd Hotel & Cultural Embassy"
          },
          url: "https://restaurantgreetje.nl",
          bookingUrl: "https://restaurantgreetje.nl/reservations"
        },
        {
          name: "Café Central",
          cuisine: "International",
          rating: 4.4,
          priceRange: "€€",
          description: "Historic café with accessible facilities and traditional atmosphere",
          accessibility: "Wheelchair accessible entrance, accessible seating available",
          location: {
            nearTrainStation: true,
            address: "5 minutes from Amsterdam Central Station"
          },
          url: "https://cafecentral.nl"
        },
        {
          name: "SkyLounge Amsterdam",
          cuisine: "International",
          rating: 4.2,
          priceRange: "€€€",
          description: "Airport restaurant with panoramic views and accessible facilities",
          accessibility: "Full wheelchair accessibility with lift access",
          location: {
            nearAirport: true,
            address: "Amsterdam Airport Schiphol, Terminal 3"
          },
          url: "https://skylounge-amsterdam.com"
        }
      ],
      Tokyo: [
        {
          name: "Sukiyabashi Jiro Honten",
          cuisine: "Sushi",
          rating: 4.9,
          priceRange: "€€€€",
          description: "World-renowned sushi restaurant with accessible entrance",
          accessibility: "Wheelchair accessible with assistance, call ahead",
          location: {
            nearTrainStation: true,
            address: "Near Ginza Station, 2 minutes walk"
          },
          url: "https://sukiyabashijiro.jp",
          bookingUrl: "https://sukiyabashijiro.jp/reservation"
        },
        {
          name: "Narita Sky Restaurant",
          cuisine: "Japanese-International",
          rating: 4.3,
          priceRange: "€€",
          description: "Airport dining with traditional Japanese and international options",
          accessibility: "Fully wheelchair accessible with wide aisles",
          location: {
            nearAirport: true,
            address: "Narita International Airport, Terminal 1"
          }
        },
        {
          name: "Robot Restaurant",
          cuisine: "Entertainment Dining",
          rating: 4.1,
          priceRange: "€€",
          description: "Unique dining experience with wheelchair accessible seating areas",
          accessibility: "Wheelchair accessible with reserved seating areas",
          location: {
            nearAccessibleHotel: true,
            address: "Near Park Hyatt Tokyo (wheelchair accessible hotel)"
          },
          bookingUrl: "https://robot-restaurant.com/book"
        }
      ],
      Sydney: [
        {
          name: "Quay Restaurant",
          cuisine: "Modern Australian",
          rating: 4.8,
          priceRange: "€€€€",
          description: "Award-winning restaurant with harbour views and full accessibility",
          accessibility: "Completely wheelchair accessible with harbour terrace",
          location: {
            nearAccessibleHotel: true,
            address: "Near Park Hyatt Sydney (accessible accommodation)"
          },
          url: "https://quay.com.au",
          bookingUrl: "https://quay.com.au/bookings"
        },
        {
          name: "Sydney Airport Pier Restaurant",
          cuisine: "Seafood",
          rating: 4.2,
          priceRange: "€€",
          description: "Fresh seafood with accessible facilities and harbour views",
          accessibility: "Full wheelchair access with accessible restrooms",
          location: {
            nearAirport: true,
            address: "Sydney Kingsford Smith Airport, Domestic Terminal"
          }
        },
        {
          name: "Central Station Brasserie",
          cuisine: "Modern Australian",
          rating: 4.0,
          priceRange: "€€",
          description: "Convenient dining near major transport hub with accessibility features",
          accessibility: "Wheelchair accessible with ramp access",
          location: {
            nearTrainStation: true,
            address: "Adjacent to Sydney Central Station"
          }
        }
      ],
      London: [
        {
          name: "Dishoom",
          cuisine: "Indian",
          rating: 4.6,
          priceRange: "€€",
          description: "Bombay café-style restaurant with excellent accessibility",
          accessibility: "Wheelchair accessible with accessible toilets",
          location: {
            nearTrainStation: true,
            address: "King's Cross location, 2 minutes from St. Pancras"
          },
          url: "https://dishoom.com",
          bookingUrl: "https://dishoom.com/book"
        },
        {
          name: "Heathrow Terminal 5 Restaurant",
          cuisine: "British-International",
          rating: 4.1,
          priceRange: "€€",
          description: "Premium airport dining with full accessibility features",
          accessibility: "Fully accessible with priority seating for disabled guests",
          location: {
            nearAirport: true,
            address: "Heathrow Airport Terminal 5, Departure Level"
          }
        },
        {
          name: "The Gilbert Scott",
          cuisine: "British",
          rating: 4.4,
          priceRange: "€€€",
          description: "Historic restaurant at St. Pancras with Victorian charm and modern accessibility",
          accessibility: "Wheelchair accessible with lift access to all floors",
          location: {
            nearTrainStation: true,
            nearAccessibleHotel: true,
            address: "St. Pancras Renaissance Hotel, near Eurostar terminal"
          },
          url: "https://thegilbertscott.co.uk",
          bookingUrl: "https://thegilbertscott.co.uk/book"
        }
      ],
      Berlin: [
        {
          name: "Lokal Modern",
          cuisine: "Modern German",
          rating: 4.5,
          priceRange: "€€€",
          description: "Contemporary German cuisine with excellent wheelchair accessibility",
          accessibility: "Step-free access with accessible restrooms",
          location: {
            nearAccessibleHotel: true,
            address: "Near Hotel Adlon Kempinski (accessible luxury hotel)"
          },
          url: "https://lokal-berlin.de",
          bookingUrl: "https://lokal-berlin.de/reservierung"
        },
        {
          name: "Airport Club Restaurant",
          cuisine: "International",
          rating: 4.0,
          priceRange: "€€",
          description: "Airport restaurant with German and international dishes",
          accessibility: "Fully wheelchair accessible with wide entrance",
          location: {
            nearAirport: true,
            address: "Berlin Brandenburg Airport, Terminal 1"
          }
        },
        {
          name: "Hauptbahnhof Food Court",
          cuisine: "Various",
          rating: 3.8,
          priceRange: "€",
          description: "Multiple accessible dining options in the main train station",
          accessibility: "All restaurants wheelchair accessible via station lifts",
          location: {
            nearTrainStation: true,
            address: "Berlin Hauptbahnhof, Level 1"
          }
        }
      ],
      Vancouver: [
        {
          name: "Blue Water Café",
          cuisine: "Seafood",
          rating: 4.7,
          priceRange: "€€€€",
          description: "Award-winning seafood restaurant with accessible waterfront location",
          accessibility: "Fully wheelchair accessible with accessible parking",
          location: {
            nearAccessibleHotel: true,
            address: "Near Fairmont Pacific Rim (accessible hotel)"
          },
          url: "https://bluewatercafe.net",
          bookingUrl: "https://bluewatercafe.net/reservations"
        },
        {
          name: "White Spot",
          cuisine: "Canadian",
          rating: 4.2,
          priceRange: "€€",
          description: "Classic Canadian diner with accessibility features",
          accessibility: "Wheelchair accessible entrance and seating",
          location: {
            nearAirport: true,
            address: "Vancouver International Airport, Domestic Terminal"
          }
        },
        {
          name: "Pacific Central Station Café",
          cuisine: "Café",
          rating: 3.9,
          priceRange: "€",
          description: "Convenient café with light meals and accessible facilities",
          accessibility: "Step-free access with accessible seating",
          location: {
            nearTrainStation: true,
            address: "Pacific Central Station, Main Level"
          }
        }
      ],
      Singapore: [
        {
          name: "Hawker Chan",
          cuisine: "Chinese",
          rating: 4.6,
          priceRange: "€",
          description: "Michelin-starred street food with accessible seating area",
          accessibility: "Ground level access with accessible tables",
          location: {
            nearTrainStation: true,
            address: "Chinatown Complex, near MRT station"
          }
        },
        {
          name: "Changi Airport Food Court",
          cuisine: "Asian Fusion",
          rating: 4.3,
          priceRange: "€€",
          description: "World-class airport dining with full accessibility",
          accessibility: "Barrier-free access throughout all terminals",
          location: {
            nearAirport: true,
            address: "Changi Airport, Terminals 1-4"
          }
        },
        {
          name: "Raffles Hotel Tiffin Room",
          cuisine: "International",
          rating: 4.5,
          priceRange: "€€€€",
          description: "Historic hotel dining with modern accessibility features",
          accessibility: "Wheelchair accessible with valet assistance",
          location: {
            nearAccessibleHotel: true,
            address: "Raffles Hotel Singapore (fully accessible)"
          },
          url: "https://raffles.com/singapore",
          bookingUrl: "https://raffles.com/singapore/dining"
        }
      ],
      Stockholm: [
        {
          name: "Frantzén",
          cuisine: "Nordic",
          rating: 4.9,
          priceRange: "€€€€",
          description: "Three Michelin-starred restaurant with accessible facilities",
          accessibility: "Elevator access with wheelchair-friendly seating",
          location: {
            nearAccessibleHotel: true,
            address: "Near Grand Hôtel Stockholm (accessible luxury hotel)"
          },
          url: "https://frantzen.com",
          bookingUrl: "https://frantzen.com/book"
        },
        {
          name: "Arlanda Airport Restaurant",
          cuisine: "Scandinavian",
          rating: 4.1,
          priceRange: "€€",
          description: "Airport restaurant featuring Swedish specialties",
          accessibility: "Fully accessible with priority seating",
          location: {
            nearAirport: true,
            address: "Stockholm Arlanda Airport, Terminal 5"
          }
        },
        {
          name: "Central Station Eatery",
          cuisine: "Swedish",
          rating: 4.0,
          priceRange: "€€",
          description: "Traditional Swedish cuisine near main transport hub",
          accessibility: "Step-free access with accessible facilities",
          location: {
            nearTrainStation: true,
            address: "Stockholm Central Station, Upper Level"
          }
        }
      ]
    };
    return diningData[cityName as keyof typeof diningData] || [];
  };

  const getLocationIcon = (location: DiningOption['location']) => {
    if (location.nearAirport) return <Plane className="w-4 h-4 text-blue-600" />;
    if (location.nearTrainStation) return <Train className="w-4 h-4 text-green-600" />;
    if (location.nearAccessibleHotel) return <Hotel className="w-4 h-4 text-purple-600" />;
    return <MapPin className="w-4 h-4 text-gray-600" />;
  };

  const getLocationText = (location: DiningOption['location']) => {
    if (location.nearAirport) return "Near Airport";
    if (location.nearTrainStation) return "Near Train Station";
    if (location.nearAccessibleHotel) return "Near Accessible Hotel";
    return "City Location";
  };

  const diningOptions = getDiningOptions(cityName);

  if (diningOptions.length === 0) {
    return null;
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Utensils className="w-6 h-6" />
          Top Dining in {cityName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diningOptions.map((restaurant, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-lg">{restaurant.name}</h4>
                  <p className="text-sm text-gray-600">{restaurant.cuisine} • {restaurant.priceRange}</p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(restaurant.rating) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    ({restaurant.rating}/5)
                  </span>
                </div>

                <p className="text-sm text-gray-700">{restaurant.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    {getLocationIcon(restaurant.location)}
                    <span className="text-gray-600">{getLocationText(restaurant.location)}</span>
                  </div>
                  <p className="text-xs text-gray-500">{restaurant.location.address}</p>
                </div>

                <div className="bg-green-50 p-2 rounded text-sm text-green-700">
                  <strong>Accessibility:</strong> {restaurant.accessibility}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  {restaurant.url && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <a
                        href={restaurant.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                  
                  {restaurant.bookingUrl && (
                    <Button
                      asChild
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <a
                        href={restaurant.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Utensils className="w-4 h-4" />
                        Make Reservation
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopDining;
