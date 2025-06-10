
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, ExternalLink, Star, MapPin, Plane, Train, Hotel, Camera } from 'lucide-react';

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
    nearPaidAttraction?: boolean;
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
        },
        {
          name: "Rijksmuseum Café",
          cuisine: "Dutch Contemporary",
          rating: 4.3,
          priceRange: "€€",
          description: "Museum café with accessible entrance and Dutch specialties",
          accessibility: "Wheelchair accessible with museum lifts",
          location: {
            nearPaidAttraction: true,
            address: "Inside Rijksmuseum, Museumstraat 1"
          }
        },
        {
          name: "Anne Frank House Café",
          cuisine: "Light Meals",
          rating: 4.0,
          priceRange: "€",
          description: "Café near the famous Anne Frank House with accessible facilities",
          accessibility: "Ground level access with accessible seating",
          location: {
            nearPaidAttraction: true,
            address: "Near Anne Frank House, Prinsengracht"
          }
        },
        {
          name: "Central Station Brasserie",
          cuisine: "European",
          rating: 4.1,
          priceRange: "€€",
          description: "Railway station restaurant with accessible platform access",
          accessibility: "Step-free access via station lifts",
          location: {
            nearTrainStation: true,
            address: "Amsterdam Central Station, Platform Level"
          }
        },
        {
          name: "Hotel V Nesplein Restaurant",
          cuisine: "International",
          rating: 4.4,
          priceRange: "€€€",
          description: "Hotel restaurant with full accessibility near major attractions",
          accessibility: "Completely wheelchair accessible",
          location: {
            nearAccessibleHotel: true,
            nearPaidAttraction: true,
            address: "Near Van Gogh Museum and Stedelijk Museum"
          }
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
        },
        {
          name: "Tokyo Skytree Restaurant",
          cuisine: "Japanese Fusion",
          rating: 4.5,
          priceRange: "€€€",
          description: "High-altitude dining with panoramic city views",
          accessibility: "Elevator access with wheelchair-friendly seating",
          location: {
            nearPaidAttraction: true,
            address: "Tokyo Skytree, Floor 345"
          }
        },
        {
          name: "Senso-ji Temple Tea House",
          cuisine: "Traditional Japanese",
          rating: 4.2,
          priceRange: "€",
          description: "Traditional tea house near historic temple with accessible path",
          accessibility: "Ground level access with accessible restrooms",
          location: {
            nearPaidAttraction: true,
            address: "Near Senso-ji Temple, Asakusa"
          }
        },
        {
          name: "Haneda Airport Sushi Bar",
          cuisine: "Sushi",
          rating: 4.0,
          priceRange: "€€",
          description: "Fresh sushi bar with accessible counter seating",
          accessibility: "Wheelchair accessible with lowered counter options",
          location: {
            nearAirport: true,
            address: "Haneda Airport, International Terminal"
          }
        },
        {
          name: "Tokyo Station Ramen Street",
          cuisine: "Ramen",
          rating: 4.3,
          priceRange: "€",
          description: "Collection of ramen shops with accessible entrances",
          accessibility: "Most shops wheelchair accessible via station lifts",
          location: {
            nearTrainStation: true,
            address: "Tokyo Station, B1 Level Ramen Street"
          }
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
        },
        {
          name: "Opera House Restaurant",
          cuisine: "Fine Dining",
          rating: 4.6,
          priceRange: "€€€€",
          description: "Iconic venue with accessible entrances and harbour views",
          accessibility: "Lift access with wheelchair-friendly seating",
          location: {
            nearPaidAttraction: true,
            address: "Sydney Opera House, Bennelong Point"
          }
        },
        {
          name: "Harbour Bridge Café",
          cuisine: "Australian",
          rating: 4.1,
          priceRange: "€€",
          description: "Café with bridge views and accessible facilities",
          accessibility: "Ground level access with accessible parking",
          location: {
            nearPaidAttraction: true,
            address: "Near Sydney Harbour Bridge Climb entrance"
          }
        },
        {
          name: "Circular Quay Bistro",
          cuisine: "Seafood",
          rating: 4.3,
          priceRange: "€€€",
          description: "Waterfront dining near ferry terminals and major hotels",
          accessibility: "Wheelchair accessible with harbour-level seating",
          location: {
            nearTrainStation: true,
            nearAccessibleHotel: true,
            address: "Circular Quay, near Shangri-La Hotel"
          }
        },
        {
          name: "International Terminal Restaurant",
          cuisine: "Modern Australian",
          rating: 4.0,
          priceRange: "€€",
          description: "Premium airport dining with local Australian flavors",
          accessibility: "Fully accessible with priority seating available",
          location: {
            nearAirport: true,
            address: "Sydney Airport, International Terminal"
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
        },
        {
          name: "Tower Bridge Restaurant",
          cuisine: "Modern British",
          rating: 4.5,
          priceRange: "€€€",
          description: "Restaurant with bridge views and accessible facilities",
          accessibility: "Lift access with adapted seating areas",
          location: {
            nearPaidAttraction: true,
            address: "Near Tower Bridge and Tower of London"
          }
        },
        {
          name: "British Museum Café",
          cuisine: "International",
          rating: 4.2,
          priceRange: "€€",
          description: "Museum café with accessible entrance and varied menu",
          accessibility: "Wheelchair accessible via museum main entrance",
          location: {
            nearPaidAttraction: true,
            address: "British Museum, Great Russell Street"
          }
        },
        {
          name: "London Eye Restaurant",
          cuisine: "Contemporary",
          rating: 4.0,
          priceRange: "€€€",
          description: "Dining with Thames views near the iconic London Eye",
          accessibility: "Ground level access with accessible facilities",
          location: {
            nearPaidAttraction: true,
            address: "Near London Eye, South Bank"
          }
        },
        {
          name: "Gatwick Express Café",
          cuisine: "British",
          rating: 3.8,
          priceRange: "€",
          description: "Quick dining option near airport express train",
          accessibility: "Step-free access with wide aisles",
          location: {
            nearAirport: true,
            nearTrainStation: true,
            address: "Gatwick Airport, South Terminal"
          }
        },
        {
          name: "Claridge's Restaurant",
          cuisine: "Fine Dining",
          rating: 4.7,
          priceRange: "€€€€",
          description: "Luxury hotel dining with impeccable accessibility standards",
          accessibility: "Fully wheelchair accessible with valet assistance",
          location: {
            nearAccessibleHotel: true,
            address: "Claridge's Hotel, Mayfair"
          }
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
        },
        {
          name: "Brandenburg Gate Café",
          cuisine: "German",
          rating: 4.3,
          priceRange: "€€",
          description: "Historic café near Brandenburg Gate with accessible entrance",
          accessibility: "Ground level access with accessible seating",
          location: {
            nearPaidAttraction: true,
            address: "Near Brandenburg Gate, Pariser Platz"
          }
        },
        {
          name: "Museum Island Restaurant",
          cuisine: "European",
          rating: 4.1,
          priceRange: "€€€",
          description: "Fine dining near UNESCO World Heritage museums",
          accessibility: "Wheelchair accessible with museum proximity",
          location: {
            nearPaidAttraction: true,
            address: "Near Pergamon Museum, Museum Island"
          }
        },
        {
          name: "East Side Gallery Bistro",
          cuisine: "International",
          rating: 3.9,
          priceRange: "€€",
          description: "Bistro near the famous Berlin Wall gallery",
          accessibility: "Step-free access with outdoor seating",
          location: {
            nearPaidAttraction: true,
            address: "Near East Side Gallery, Mühlenstraße"
          }
        },
        {
          name: "Potsdamer Platz Restaurant",
          cuisine: "Modern European",
          rating: 4.2,
          priceRange: "€€€",
          description: "Contemporary dining in Berlin's modern business district",
          accessibility: "Fully accessible with underground parking",
          location: {
            nearTrainStation: true,
            nearAccessibleHotel: true,
            address: "Potsdamer Platz, near Grand Hyatt Berlin"
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
        },
        {
          name: "Stanley Park Restaurant",
          cuisine: "Canadian",
          rating: 4.4,
          priceRange: "€€€",
          description: "Restaurant with park views and accessible pathways",
          accessibility: "Wheelchair accessible with accessible parking",
          location: {
            nearPaidAttraction: true,
            address: "Stanley Park, near Vancouver Aquarium"
          }
        },
        {
          name: "Capilano Bridge Café",
          cuisine: "Pacific Northwest",
          rating: 4.0,
          priceRange: "€€",
          description: "Café near the famous suspension bridge attraction",
          accessibility: "Accessible entrance with bridge shuttle service",
          location: {
            nearPaidAttraction: true,
            address: "Capilano Suspension Bridge Park"
          }
        },
        {
          name: "Canada Place Restaurant",
          cuisine: "Seafood",
          rating: 4.3,
          priceRange: "€€€",
          description: "Waterfront dining near cruise ship terminal",
          accessibility: "Fully accessible with harbour views",
          location: {
            nearPaidAttraction: true,
            nearAccessibleHotel: true,
            address: "Canada Place, near Pan Pacific Hotel"
          }
        },
        {
          name: "SkyTrain Station Bistro",
          cuisine: "International",
          rating: 3.7,
          priceRange: "€",
          description: "Quick dining at major transit hub",
          accessibility: "Step-free access via SkyTrain platforms",
          location: {
            nearTrainStation: true,
            address: "Waterfront SkyTrain Station"
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
        },
        {
          name: "Marina Bay Sands Restaurant",
          cuisine: "International",
          rating: 4.7,
          priceRange: "€€€€",
          description: "Iconic hotel restaurant with stunning city views",
          accessibility: "Fully wheelchair accessible with express lifts",
          location: {
            nearPaidAttraction: true,
            nearAccessibleHotel: true,
            address: "Marina Bay Sands, SkyPark level"
          }
        },
        {
          name: "Gardens by the Bay Café",
          cuisine: "Asian Contemporary",
          rating: 4.2,
          priceRange: "€€",
          description: "Café within the famous garden attraction",
          accessibility: "Wheelchair accessible via garden pathways",
          location: {
            nearPaidAttraction: true,
            address: "Gardens by the Bay, Flower Dome"
          }
        },
        {
          name: "Sentosa Island Restaurant",
          cuisine: "Seafood",
          rating: 4.1,
          priceRange: "€€€",
          description: "Beachfront dining on resort island",
          accessibility: "Accessible via monorail and beach boardwalk",
          location: {
            nearPaidAttraction: true,
            address: "Sentosa Island, near Universal Studios"
          }
        },
        {
          name: "Orchard Road Food Court",
          cuisine: "Asian",
          rating: 4.0,
          priceRange: "€",
          description: "Shopping district food court with MRT access",
          accessibility: "Underground MRT connection with lift access",
          location: {
            nearTrainStation: true,
            address: "Orchard MRT Station, ION Orchard"
          }
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
        },
        {
          name: "Vasa Museum Restaurant",
          cuisine: "Nordic",
          rating: 4.4,
          priceRange: "€€€",
          description: "Museum restaurant with maritime theme and accessibility",
          accessibility: "Wheelchair accessible via museum entrance",
          location: {
            nearPaidAttraction: true,
            address: "Vasa Museum, Djurgården"
          }
        },
        {
          name: "Gamla Stan Tavern",
          cuisine: "Traditional Swedish",
          rating: 4.2,
          priceRange: "€€",
          description: "Historic old town restaurant with accessible entrance",
          accessibility: "Ground level access with adapted seating",
          location: {
            nearPaidAttraction: true,
            address: "Gamla Stan (Old Town), near Royal Palace"
          }
        },
        {
          name: "ABBA Museum Café",
          cuisine: "Swedish",
          rating: 4.0,
          priceRange: "€€",
          description: "Music-themed café with accessible facilities",
          accessibility: "Wheelchair accessible with museum lifts",
          location: {
            nearPaidAttraction: true,
            address: "ABBA The Museum, Djurgården"
          }
        },
        {
          name: "SkyView Restaurant",
          cuisine: "Modern Swedish",
          rating: 4.3,
          priceRange: "€€€",
          description: "Restaurant with panoramic city views",
          accessibility: "Elevator access with accessible viewing areas",
          location: {
            nearPaidAttraction: true,
            address: "Near Ericsson Globe SkyView attraction"
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
    if (location.nearPaidAttraction) return <Camera className="w-4 h-4 text-orange-600" />;
    return <MapPin className="w-4 h-4 text-gray-600" />;
  };

  const getLocationText = (location: DiningOption['location']) => {
    const locations = [];
    if (location.nearAirport) locations.push("Airport");
    if (location.nearTrainStation) locations.push("Train Station");
    if (location.nearAccessibleHotel) locations.push("Accessible Hotel");
    if (location.nearPaidAttraction) locations.push("Paid Attraction");
    
    return locations.length > 0 ? `Near ${locations.join(" & ")}` : "City Location";
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
