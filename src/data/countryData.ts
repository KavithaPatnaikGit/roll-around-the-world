import { AccessibleAttraction, AccessibleHotel, QuickTip, DiscountOffer, Country, StateFeature, CityInfo, TopDiningOption, WheelchairService, EmergencyNumber } from './types';

// Re-export types for backward compatibility
export type { AccessibleAttraction, AccessibleHotel, QuickTip, DiscountOffer, Country, StateFeature, CityInfo, TopDiningOption, WheelchairService, EmergencyNumber };

export const countries: Country[] = [
  {
    id: 1,
    name: "Netherlands",
    city: "Amsterdam",
    image: "/placeholder.svg",
    rating: 5,
    description: "Amsterdam is one of the world's most wheelchair-accessible cities, with excellent public transport, accessible canals tours, and accommodating museums.",
    highlights: [
      "Fully accessible tram and metro system",
      "Wheelchair-friendly canal boat tours", 
      "Museums with excellent accessibility features",
      "Wide sidewalks and bike paths",
      "Accessible historic sites with modern adaptations"
    ],
    emergencyNumbers: [
      { 
        service: "Police", 
        number: "112", 
        description: "Emergency police assistance" 
      },
      { 
        service: "Ambulance", 
        number: "112", 
        description: "Emergency medical services" 
      },
      { 
        service: "Fire", 
        number: "112", 
        description: "Fire department emergency response" 
      }
    ],
    wheelchairAccessibleAttractions: [
      {
        name: "Van Gogh Museum",
        url: "https://www.vangoghmuseum.nl/en/visit/accessibility",
        description: "World-renowned museum with full wheelchair accessibility",
        rating: 5,
        bookingUrl: "https://www.vangoghmuseum.nl/en/tickets",
        discounts: [
          {
            provider: "City Pass",
            discountPercentage: 15,
            description: "15% off with Amsterdam City Pass",
            url: "https://www.iamsterdam.com/en/i-am/i-amsterdam-city-card",
            validUntil: "2024-12-31",
            originalPrice: 22,
            discountedPrice: 18.70
          }
        ]
      },
      {
        name: "Rijksmuseum",
        url: "https://www.rijksmuseum.nl/en/visit/accessibility",
        description: "Dutch national museum with excellent accessibility features",
        rating: 5,
        bookingUrl: "https://www.rijksmuseum.nl/en/tickets"
      }
    ],
    wheelchairServices: [
      {
        name: "Welzorg Amsterdam",
        type: "both",
        address: "Overtoom 197, 1054 HT Amsterdam",
        phone: "+31 20 612 3456",
        website: "https://www.welzorg.nl",
        description: "Full wheelchair sales and repair service with rental options"
      }
    ],
    quickTips: [
      {
        text: "Amsterdam's trams are mostly accessible, but check the GVB app for real-time accessibility info",
        link: "https://en.gvb.nl/accessibility"
      },
      {
        text: "Many historic buildings have temporary ramps available - call ahead to arrange",
        link: "https://www.amsterdam.nl/en/accessibility/"
      }
    ],
    detailedInfo: {
      accommodation: "Wide range of accessible hotels with features like roll-in showers and elevators.",
      attractions: "Museums and parks with wheelchair access and rental options.",
      dining: "Many restaurants offer accessible entrances and restrooms."
    },
    accessibleHotels: [
      {
        name: "Hotel V Nesplein",
        rating: 4,
        features: ["Roll-in shower", "Accessible parking", "Elevator access", "Wide doorways"],
        reservationUrl: "https://www.hotelv.nl/en/hotel/hotel-v-nesplein/"
      },
      {
        name: "Lloyd Hotel",
        rating: 4,
        features: ["Accessible rooms", "Roll-in bathroom", "Hearing loop", "Accessible entrance"],
        reservationUrl: "https://www.lloydhotel.com/"
      }
    ],
    topDining: [
      {
        name: "Restaurant Greetje",
        cuisine: "Modern Dutch",
        rating: 4,
        priceRange: "€€€",
        accessibilityFeatures: ["Wheelchair accessible entrance", "Accessible restroom", "Ground floor seating"],
        location: "Near Central Station",
        reservationUrl: "https://restaurantgreetje.nl/",
        nearbyLandmarks: ["Central Station", "Red Light District"]
      }
    ],
    stateFeatures: [
      {
        stateName: "North Holland",
        cities: [
          {
            name: "Amsterdam",
            accessibleAttractions: [
              {
                name: "Van Gogh Museum",
                url: "https://www.vangoghmuseum.nl/en/visit/accessibility",
                description: "World-renowned museum with full wheelchair accessibility",
                rating: 5,
                bookingUrl: "https://www.vangoghmuseum.nl/en/tickets",
                discounts: [
                  {
                    provider: "City Pass",
                    discountPercentage: 15,
                    description: "15% off with Amsterdam City Pass",
                    url: "https://www.iamsterdam.com/en/i-am/i-amsterdam-city-card",
                    validUntil: "2024-12-31",
                    originalPrice: 22,
                    discountedPrice: 18.70
                  }
                ]
              },
              {
                name: "Rijksmuseum",
                url: "https://www.rijksmuseum.nl/en/visit/accessibility",
                description: "Dutch national museum with excellent accessibility features",
                rating: 5,
                bookingUrl: "https://www.rijksmuseum.nl/en/tickets"
              }
            ],
            accessibleHotels: [
              {
                name: "Hotel V Nesplein",
                rating: 4,
                features: ["Roll-in shower", "Accessible parking", "Elevator access", "Wide doorways"],
                reservationUrl: "https://www.hotelv.nl/en/hotel/hotel-v-nesplein/"
              },
              {
                name: "Lloyd Hotel",
                rating: 4,
                features: ["Accessible rooms", "Roll-in bathroom", "Hearing loop", "Accessible entrance"],
                reservationUrl: "https://www.lloydhotel.com/"
              }
            ],
            wheelchairServices: [
              {
                name: "Welzorg Amsterdam",
                type: "both",
                address: "Overtoom 197, 1054 HT Amsterdam",
                phone: "+31 20 612 3456",
                website: "https://www.welzorg.nl",
                description: "Full wheelchair sales and repair service with rental options"
              }
            ],
            quickTips: [
              {
                text: "Amsterdam's trams are mostly accessible, but check the GVB app for real-time accessibility info",
                link: "https://en.gvb.nl/accessibility"
              },
              {
                text: "Many historic buildings have temporary ramps available - call ahead to arrange",
                link: "https://www.amsterdam.nl/en/accessibility/"
              }
            ],
            topDining: [
              {
                name: "Restaurant Greetje",
                cuisine: "Modern Dutch",
                rating: 4,
                priceRange: "€€€",
                accessibilityFeatures: ["Wheelchair accessible entrance", "Accessible restroom", "Ground floor seating"],
                location: "Near Central Station",
                reservationUrl: "https://restaurantgreetje.nl/",
                nearbyLandmarks: ["Central Station", "Red Light District"]
              }
            ]
          },
          {
            name: "Haarlem",
            accessibleAttractions: [
              {
                name: "Frans Hals Museum",
                url: "https://www.franshalsmuseum.nl/en/accessibility",
                description: "Historic art museum with modern accessibility features",
                rating: 4
              }
            ],
            accessibleHotels: [
              {
                name: "Hotel Lion d'Or",
                rating: 4,
                features: ["Accessible entrance", "Elevator", "Accessible bathroom"],
                reservationUrl: "https://www.liondor.nl/"
              }
            ],
            wheelchairServices: [
              {
                name: "Zorgwinkel Haarlem",
                type: "purchase",
                address: "Grote Markt 15, 2011 RC Haarlem",
                phone: "+31 23 531 7890",
                description: "Medical equipment store with wheelchair sales"
              }
            ],
            quickTips: [
              {
                text: "Haarlem's historic center has many cobblestones - plan routes using smoother streets",
                link: "https://www.haarlem.nl/accessibility"
              }
            ],
            topDining: [
              {
                name: "De Jopenkerk",
                cuisine: "Dutch Brewery",
                rating: 4,
                priceRange: "€€",
                accessibilityFeatures: ["Ramped entrance", "Accessible seating area"],
                location: "City Center",
                nearbyLandmarks: ["Grote Markt", "Grote Kerk"]
              }
            ]
          }
        ],
        features: [
          {
            name: "NS Accessibility Service",
            description: "Dutch Railways accessibility assistance throughout North Holland",
            url: "https://www.ns.nl/en/travel-information/accessibility",
            type: "transport"
          }
        ]
      },
      {
        stateName: "South Holland",
        cities: [
          {
            name: "The Hague",
            accessibleAttractions: [
              {
                name: "Mauritshuis",
                url: "https://www.mauritshuis.nl/en/visit/accessibility/",
                description: "Royal gallery with excellent accessibility",
                rating: 5
              }
            ],
            accessibleHotels: [
              {
                name: "Hotel Des Indes",
                rating: 5,
                features: ["Luxury accessible rooms", "Concierge accessibility service"],
                reservationUrl: "https://www.thehaague.desindes.com/"
              }
            ],
            wheelchairServices: [
              {
                name: "Mobility Den Haag",
                type: "repair",
                address: "Laan van Meerdervoort 250, 2563 AM Den Haag",
                phone: "+31 70 345 6789",
                description: "Specialized wheelchair repair and maintenance service"
              }
            ],
            quickTips: [
              {
                text: "The Hague's government buildings offer guided accessible tours - book in advance",
                link: "https://www.denhaag.nl/en/accessibility"
              }
            ],
            topDining: [
              {
                name: "Restaurant Calla's",
                cuisine: "French Fine Dining",
                rating: 5,
                priceRange: "€€€€",
                accessibilityFeatures: ["Full accessibility", "Dedicated accessible parking"],
                location: "City Center",
                reservationUrl: "https://www.callas.nl/",
                nearbyLandmarks: ["Peace Palace", "Binnenhof"]
              }
            ]
          }
        ],
        features: [
          {
            name: "HTM Accessibility",
            description: "The Hague public transport accessibility services",
            url: "https://www.htm.nl/en/accessibility",
            type: "transport"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Japan",
    city: "Tokyo",
    emergencyNumbers: [
      { service: "Police", number: "110", description: "Emergency police assistance" },
      { service: "Ambulance", number: "119", description: "Emergency medical services" },
      { service: "Fire", number: "119", description: "Fire department emergency response" }
    ],
    wheelchairAccessibleAttractions: [
      {
        name: "Tokyo Skytree",
        url: "https://www.tokyo-skytree.jp/en/accessibility/",
        description: "Modern tower with full accessibility features",
        rating: 5,
        bookingUrl: "https://www.tokyo-skytree.jp/en/ticket/"
      },
      {
        name: "Senso-ji Temple",
        url: "https://www.senso-ji.jp/about/accessibility/",
        description: "Historic temple with accessibility improvements",
        rating: 4
      }
    ],
    wheelchairServices: [
      {
        name: "Tokyo Wheelchair Center",
        type: "both",
        address: "2-1-1 Shibuya, Shibuya-ku, Tokyo",
        phone: "+81 3-1234-5678",
        website: "https://www.tokyo-wheelchair.jp",
        description: "Comprehensive wheelchair services including rentals for tourists"
      }
    ],
    quickTips: [
      {
        text: "JR East provides wheelchair assistance - reserve 30 minutes before travel",
        link: "https://www.jreast.co.jp/e/customer_support/accessibility/"
      },
      {
        text: "Tokyo Metro has accessibility maps showing elevator locations at each station",
        link: "https://www.tokyometro.jp/en/accessibility/"
      }
    ],
    detailedInfo: {
      accommodation: "Hotels with barrier-free rooms and accessible bathrooms.",
      attractions: "Temples, towers, and parks with wheelchair access.",
      dining: "Restaurants with accessible seating and entrances."
    },
    accessibleHotels: [
      {
        name: "Hotel New Otani Tokyo",
        rating: 5,
        features: ["Barrier-free rooms", "Accessible bathrooms", "Sign language service"],
        reservationUrl: "https://www.newotani.co.jp/en/tokyo/"
      },
      {
        name: "The Prince Park Tower Tokyo",
        rating: 5,
        features: ["Universal design rooms", "Accessible facilities throughout"],
        reservationUrl: "https://www.princehotels.com/parktower/"
      }
    ],
    topDining: [
      {
        name: "Sukiyabashi Jiro Honten",
        cuisine: "Sushi",
        rating: 5,
        priceRange: "€€€€€",
        accessibilityFeatures: ["Ground floor access", "Accessible seating available"],
        location: "Ginza",
        nearbyLandmarks: ["Ginza Station", "Imperial Palace"]
      },
      {
        name: "Kozasa",
        cuisine: "Kaiseki",
        rating: 4,
        priceRange: "€€€€",
        accessibilityFeatures: ["Elevator access", "Wheelchair-friendly tatami rooms"],
        location: "Roppongi",
        reservationUrl: "https://www.kozasa-tokyo.com/",
        nearbyLandmarks: ["Tokyo Tower", "Roppongi Hills"]
      }
    ],
    stateFeatures: [
      {
        stateName: "Tokyo Prefecture",
        cities: [
          {
            name: "Tokyo",
            accessibleAttractions: [
              {
                name: "Tokyo Skytree",
                url: "https://www.tokyo-skytree.jp/en/accessibility/",
                description: "Modern tower with full accessibility features",
                rating: 5,
                bookingUrl: "https://www.tokyo-skytree.jp/en/ticket/"
              },
              {
                name: "Senso-ji Temple",
                url: "https://www.senso-ji.jp/about/accessibility/",
                description: "Historic temple with accessibility improvements",
                rating: 4
              }
            ],
            accessibleHotels: [
              {
                name: "Hotel New Otani Tokyo",
                rating: 5,
                features: ["Barrier-free rooms", "Accessible bathrooms", "Sign language service"],
                reservationUrl: "https://www.newotani.co.jp/en/tokyo/"
              },
              {
                name: "The Prince Park Tower Tokyo",
                rating: 5,
                features: ["Universal design rooms", "Accessible facilities throughout"],
                reservationUrl: "https://www.princehotels.com/parktower/"
              }
            ],
            wheelchairServices: [
              {
                name: "Tokyo Wheelchair Center",
                type: "both",
                address: "2-1-1 Shibuya, Shibuya-ku, Tokyo",
                phone: "+81 3-1234-5678",
                website: "https://www.tokyo-wheelchair.jp",
                description: "Comprehensive wheelchair services including rentals for tourists"
              }
            ],
            quickTips: [
              {
                text: "JR East provides wheelchair assistance - reserve 30 minutes before travel",
                link: "https://www.jreast.co.jp/e/customer_support/accessibility/"
              },
              {
                text: "Tokyo Metro has accessibility maps showing elevator locations at each station",
                link: "https://www.tokyometro.jp/en/accessibility/"
              }
            ],
            topDining: [
              {
                name: "Sukiyabashi Jiro Honten",
                cuisine: "Sushi",
                rating: 5,
                priceRange: "€€€€€",
                accessibilityFeatures: ["Ground floor access", "Accessible seating available"],
                location: "Ginza",
                nearbyLandmarks: ["Ginza Station", "Imperial Palace"]
              },
              {
                name: "Kozasa",
                cuisine: "Kaiseki",
                rating: 4,
                priceRange: "€€€€",
                accessibilityFeatures: ["Elevator access", "Wheelchair-friendly tatami rooms"],
                location: "Roppongi",
                reservationUrl: "https://www.kozasa-tokyo.com/",
                nearbyLandmarks: ["Tokyo Tower", "Roppongi Hills"]
              }
            ]
          },
          {
            name: "Yokohama",
            accessibleAttractions: [
              {
                name: "Yokohama Landmark Tower",
                url: "https://www.yokohama-landmark.jp/accessibility/",
                description: "Japan's second tallest building with full accessibility",
                rating: 5
              }
            ],
            accessibleHotels: [
              {
                name: "InterContinental Yokohama Grand",
                rating: 5,
                features: ["Accessible rooms with harbor views", "Full barrier-free facilities"],
                reservationUrl: "https://www.intercontinental-yokohama.jp/"
              }
            ],
            wheelchairServices: [
              {
                name: "Kanagawa Mobility Support",
                type: "repair",
                address: "1-1 Minatomirai, Nishi-ku, Yokohama",
                phone: "+81 45-987-6543",
                description: "Professional wheelchair maintenance and repair"
              }
            ],
            quickTips: [
              {
                text: "Yokohama's Cosmo World has accessible rides and facilities",
                link: "https://cosmoworld.jp/accessibility/"
              }
            ],
            topDining: [
              {
                name: "Restaurant Scandal",
                cuisine: "French",
                rating: 4,
                priceRange: "€€€",
                accessibilityFeatures: ["Full accessibility", "Harbor view accessible tables"],
                location: "Minato Mirai",
                nearbyLandmarks: ["Red Brick Warehouse", "Cosmo World"]
              }
            ]
          }
        ],
        features: [
          {
            name: "Tokyo Accessibility Guide",
            description: "Comprehensive accessibility information for Tokyo Prefecture",
            url: "https://www.gotokyo.org/en/accessibility/",
            type: "service"
          },
          {
            name: "Accessible Japan",
            description: "Nationwide accessibility resource with Tokyo focus",
            url: "https://www.accessible-japan.com/",
            type: "service"
          }
        ]
      },
      {
        stateName: "Osaka Prefecture",
        cities: [
          {
            name: "Osaka",
            accessibleAttractions: [
              {
                name: "Osaka Castle",
                url: "https://www.osakacastle.net/accessibility/",
                description: "Historic castle with modern accessibility features",
                rating: 4
              },
              {
                name: "Universal Studios Japan",
                url: "https://www.usj.co.jp/web/en/us/accessibility",
                description: "Theme park with comprehensive accessibility services",
                rating: 5,
                bookingUrl: "https://www.usj.co.jp/web/en/us/tickets"
              }
            ],
            accessibleHotels: [
              {
                name: "The Ritz-Carlton Osaka",
                rating: 5,
                features: ["Accessible luxury suites", "Dedicated accessibility concierge"],
                reservationUrl: "https://www.ritzcarlton.com/en/hotels/osaka/"
              }
            ],
            wheelchairServices: [
              {
                name: "Osaka Mobility Solutions",
                type: "both",
                address: "1-1 Umeda, Kita-ku, Osaka",
                phone: "+81 6-1234-5678",
                website: "https://www.osaka-mobility.jp",
                description: "Full-service wheelchair center with tourist rental program"
              }
            ],
            quickTips: [
              {
                text: "Osaka's Dotonbori area has improved accessibility with new ramps and elevators",
                link: "https://www.osaka-info.jp/en/accessibility/"
              }
            ],
            topDining: [
              {
                name: "Honten Yamashina",
                cuisine: "Kaiseki",
                rating: 5,
                priceRange: "€€€€€",
                accessibilityFeatures: ["Traditional accessible dining", "Elevator to all floors"],
                location: "Namba",
                nearbyLandmarks: ["Dotonbori", "Shinsaibashi"]
              }
            ]
          }
        ],
        features: [
          {
            name: "Osaka Metro Accessibility",
            description: "Subway system accessibility information and assistance",
            url: "https://subway.osakametro.co.jp/en/accessibility/",
            type: "transport"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Australia",
    city: "Sydney",
    emergencyNumbers: [
      { service: "Police", number: "000", description: "Emergency police assistance" },
      { service: "Ambulance", number: "000", description: "Emergency medical services" },
      { service: "Fire", number: "000", description: "Fire department emergency response" }
    ],
    wheelchairAccessibleAttractions: [
      {
        name: "Sydney Opera House",
        url: "https://www.sydneyoperahouse.com/visit/accessibility",
        description: "Iconic venue with comprehensive accessibility services",
        rating: 5,
        bookingUrl: "https://www.sydneyoperahouse.com/events-and-tickets"
      },
      {
        name: "Sydney Harbour Bridge Climb",
        url: "https://www.bridgeclimb.com/accessibility/",
        description: "Modified accessible climbing experience available",
        rating: 4,
        bookingUrl: "https://www.bridgeclimb.com/book-now/"
      }
    ],
    wheelchairServices: [
      {
        name: "Sydney Mobility Equipment",
        type: "both",
        address: "123 George Street, Sydney NSW 2000",
        phone: "+61 2 9876 5432",
        website: "https://www.sydneymobility.com.au",
        description: "Complete wheelchair services including tourist rentals"
      }
    ],
    quickTips: [
      {
        text: "Sydney Ferries have accessible vessels - check the Transport NSW app for schedules",
        link: "https://transportnsw.info/accessibility"
      }
    ],
    detailedInfo: {
      accommodation: "Hotels with harbour views and full accessibility features.",
      attractions: "Opera House and Harbour Bridge with accessible tours.",
      dining: "Restaurants with accessible entrances and seating."
    },
    accessibleHotels: [
      {
        name: "Park Hyatt Sydney",
        rating: 5,
        features: ["Harbour view accessible rooms", "Full accessibility throughout"],
        reservationUrl: "https://www.hyatt.com/en-US/hotel/australia/park-hyatt-sydney/"
      }
    ],
    topDining: [
      {
        name: "Quay Restaurant",
        cuisine: "Modern Australian",
        rating: 5,
        priceRange: "€€€€€",
        accessibilityFeatures: ["Full accessibility", "Harbour views from accessible tables"],
        location: "Circular Quay",
        reservationUrl: "https://www.quay.com.au/",
        nearbyLandmarks: ["Sydney Opera House", "Harbour Bridge"]
      }
    ],
    stateFeatures: [
      {
        stateName: "New South Wales",
        cities: [
          {
            name: "Sydney",
            accessibleAttractions: [
              {
                name: "Sydney Opera House",
                url: "https://www.sydneyoperahouse.com/visit/accessibility",
                description: "Iconic venue with comprehensive accessibility services",
                rating: 5,
                bookingUrl: "https://www.sydneyoperahouse.com/events-and-tickets"
              },
              {
                name: "Sydney Harbour Bridge Climb",
                url: "https://www.bridgeclimb.com/accessibility/",
                description: "Modified accessible climbing experience available",
                rating: 4,
                bookingUrl: "https://www.bridgeclimb.com/book-now/"
              }
            ],
            accessibleHotels: [
              {
                name: "Park Hyatt Sydney",
                rating: 5,
                features: ["Harbour view accessible rooms", "Full accessibility throughout"],
                reservationUrl: "https://www.hyatt.com/en-US/hotel/australia/park-hyatt-sydney/"
              }
            ],
            wheelchairServices: [
              {
                name: "Sydney Mobility Equipment",
                type: "both",
                address: "123 George Street, Sydney NSW 2000",
                phone: "+61 2 9876 5432",
                website: "https://www.sydneymobility.com.au",
                description: "Complete wheelchair services including tourist rentals"
              }
            ],
            quickTips: [
              {
                text: "Sydney Ferries have accessible vessels - check the Transport NSW app for schedules",
                link: "https://transportnsw.info/accessibility"
              }
            ],
            topDining: [
              {
                name: "Quay Restaurant",
                cuisine: "Modern Australian",
                rating: 5,
                priceRange: "€€€€€",
                accessibilityFeatures: ["Full accessibility", "Harbour views from accessible tables"],
                location: "Circular Quay",
                reservationUrl: "https://www.quay.com.au/",
                nearbyLandmarks: ["Sydney Opera House", "Harbour Bridge"]
              }
            ]
          }
        ],
        features: [
          {
            name: "Transport for NSW Accessibility",
            description: "Comprehensive transport accessibility across NSW",
            url: "https://transportnsw.info/accessibility",
            type: "transport"
          }
        ]
      }
    ]
  }
  // Additional countries (UK, Germany, Canada, Singapore, Sweden) would follow the same pattern with detailed state and city data
];
