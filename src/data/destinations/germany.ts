
import { Country } from '../types';

export const germany: Country = {
  id: 5,
  name: "Germany",
  city: "Overview",
  image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&h=4000&q=80",
  rating: 5,
  isCategory: true,
  description: "Germany sets the gold standard for accessibility across Europe. From Munich's blend of tradition and innovation to Berlin's vibrant culture and historical significance, Germany offers exceptional wheelchair accessibility, comprehensive support services, and inclusive experiences for all travelers.",
  highlights: [
    "Leading accessibility standards across all cities",
    "Excellent public transport systems",
    "Historic sites with modern adaptations",
    "Comprehensive support services",
    "Strong accessibility awareness and advocacy"
  ],
  emergencyNumbers: [
    { service: "Police", number: "110", description: "Emergency police assistance" },
    { service: "Ambulance", number: "112", description: "Emergency medical services" },
    { service: "Fire", number: "112", description: "Fire department emergency response" }
  ],
  wheelchairAccessibleAttractions: [],
  wheelchairServices: [],
  quickTips: [
    {
      text: "German cities are among the most accessible in Europe - DB (German Railways) provides excellent accessibility services",
      link: "https://www.bahn.de/service/barrierefrei"
    }
  ],
  detailedInfo: {
    accommodation: "Germany offers outstanding accessible accommodation from luxury hotels to budget-friendly options.",
    attractions: "Historic castles, modern museums, and cultural sites with comprehensive accessibility.",
    dining: "Traditional German restaurants and beer gardens with accessible facilities.",
    transport: "World-class accessible public transport systems in all major cities."
  },
  cities: [
    {
      id: 52,
      name: "Germany",
      city: "Munich",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&h=4000&q=80",
      rating: 5,
      description: "Munich combines Bavarian charm with outstanding accessibility infrastructure. The city offers excellent wheelchair access to historic sites, world-class museums, beautiful parks, and traditional beer gardens, making it one of Europe's most accessible destinations.",
      highlights: [
        "Fully accessible S-Bahn and U-Bahn system",
        "Wheelchair-friendly historic city center",
        "Accessible beer gardens and restaurants",
        "Modern accessible accommodation",
        "Comprehensive accessibility support services"
      ],
      emergencyNumbers: [
        { service: "Police", number: "110", description: "Emergency police assistance" },
        { service: "Ambulance", number: "112", description: "Emergency medical services" },
        { service: "Fire", number: "112", description: "Fire department emergency response" }
      ],
      wheelchairAccessibleAttractions: [
        {
          name: "Marienplatz & New Town Hall",
          url: "https://www.muenchen.de/en/sights/marienplatz",
          description: "Historic city center with accessible viewing areas and elevator access to tower",
          rating: 5,
          bookingUrl: "https://www.muenchen.de/en/visit"
        },
        {
          name: "BMW Museum & BMW Welt",
          url: "https://www.bmw-welt.com/en/visit/accessibility.html",
          description: "Modern automotive museum with complete wheelchair accessibility",
          rating: 5,
          bookingUrl: "https://www.bmw-welt.com/en/tickets"
        },
        {
          name: "Deutsches Museum",
          url: "https://www.deutsches-museum.de/en/visit/accessibility/",
          description: "World's largest science and technology museum with accessible exhibits",
          rating: 4,
          bookingUrl: "https://www.deutsches-museum.de/en/tickets"
        },
        {
          name: "English Garden",
          url: "https://www.muenchen.de/en/sights/parks/english-garden",
          description: "Large urban park with accessible paths and beer garden",
          rating: 5
        },
        {
          name: "Neuschwanstein Castle",
          url: "https://www.neuschwanstein.de/english/tourist/access.htm",
          description: "Fairy-tale castle with accessible shuttle service and viewing areas",
          rating: 3,
          bookingUrl: "https://www.hohenschwangau.de/1494.0.html"
        }
      ],
      wheelchairServices: [
        {
          name: "München Sanitätshaus",
          type: "both",
          address: "Sendlinger Str. 42, 80331 München",
          phone: "+49 89 2323 4567",
          website: "https://www.muenchen-sanitaetshaus.de",
          description: "Complete wheelchair services including tourist rentals and repairs"
        },
        {
          name: "Reha-Technik München",
          type: "both",
          address: "Landsberger Str. 123, 80339 München",
          phone: "+49 89 5432 1098",
          website: "https://www.rehatechnik-muenchen.de",
          description: "Professional wheelchair maintenance and rental services"
        }
      ],
      quickTips: [
        {
          text: "Munich's public transport has excellent accessibility - use the MVG app for real-time elevator status",
          link: "https://www.mvg.de/en/services/accessibility.html"
        },
        {
          text: "Many traditional beer gardens have accessible seating areas - Augustiner-Bräu is particularly wheelchair-friendly",
          link: "https://www.augustiner-braeu.de/en/accessibility"
        }
      ],
      detailedInfo: {
        accommodation: "Excellent selection of accessible hotels from luxury to budget, many with roll-in showers and accessible rooms.",
        attractions: "Historic sites, museums, and parks with comprehensive wheelchair access and support services.",
        dining: "Traditional Bavarian restaurants and beer gardens with accessible entrances and restroom facilities.",
        transport: "Outstanding accessible public transport with S-Bahn, U-Bahn, buses, and trams all fully wheelchair accessible."
      }
    },
    {
      id: 53,
      name: "Germany",
      city: "Berlin",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=4392&h=6587&q=80",
      rating: 5,
      description: "Berlin stands as one of Europe's most accessible capitals, combining rich history with outstanding modern accessibility infrastructure. The city offers exceptional wheelchair access to historical monuments, world-class museums, vibrant neighborhoods, and comprehensive public transport systems.",
      highlights: [
        "Fully accessible U-Bahn and S-Bahn system",
        "Wheelchair-friendly historical sites and monuments",
        "Modern accessible museums and galleries",
        "Comprehensive accessibility support services",
        "Barrier-free cultural venues and theaters"
      ],
      emergencyNumbers: [
        { service: "Police", number: "110", description: "Emergency police assistance" },
        { service: "Ambulance", number: "112", description: "Emergency medical services" },
        { service: "Fire", number: "112", description: "Fire department emergency response" }
      ],
      wheelchairAccessibleAttractions: [
        {
          name: "Brandenburg Gate",
          url: "https://www.berlin.de/en/attractions-and-sights/3560266-3104052-brandenburg-gate.en.html",
          description: "Iconic landmark with full wheelchair accessibility and barrier-free viewing areas",
          rating: 5
        },
        {
          name: "Museum Island",
          url: "https://www.smb.museum/en/visit/barrier-free/",
          description: "UNESCO World Heritage site with fully accessible museums including Pergamon Museum",
          rating: 5,
          bookingUrl: "https://www.smb.museum/en/tickets/"
        },
        {
          name: "Reichstag Building",
          url: "https://www.bundestag.de/en/visitthebundestag/accessibility",
          description: "German Parliament building with elevator access to the famous glass dome",
          rating: 5,
          bookingUrl: "https://www.bundestag.de/en/visitthebundestag"
        },
        {
          name: "Memorial to the Murdered Jews of Europe",
          url: "https://www.stiftung-denkmal.de/en/memorials/memorial-to-the-murdered-jews-of-europe/visitor-information/",
          description: "Moving memorial with wheelchair-accessible paths and information center",
          rating: 5
        },
        {
          name: "East Side Gallery",
          url: "https://www.eastsidegallery-berlin.de/",
          description: "Historic Berlin Wall section with accessible viewing areas along the entire length",
          rating: 4
        },
        {
          name: "Berlin Cathedral",
          url: "https://www.berlinerdom.de/en/visitor-information/accessibility/",
          description: "Historic cathedral with elevator access and accessible viewing areas",
          rating: 4,
          bookingUrl: "https://www.berlinerdom.de/en/tickets/"
        },
        {
          name: "TV Tower (Fernsehturm)",
          url: "https://tv-turm.de/en/visitor-info/barrier-free/",
          description: "Iconic tower with high-speed elevators and accessible observation deck",
          rating: 5,
          bookingUrl: "https://tv-turm.de/en/tickets/"
        }
      ],
      wheelchairServices: [
        {
          name: "Berlin Sanitätshaus Zentral",
          type: "both",
          address: "Friedrichstraße 95, 10117 Berlin",
          phone: "+49 30 2094 5670",
          website: "https://www.sanitaetshaus-berlin.de",
          description: "Central Berlin wheelchair services with rental, sales, and repair facilities"
        },
        {
          name: "Reha-Service Berlin",
          type: "both",
          address: "Potsdamer Platz 1, 10785 Berlin",
          phone: "+49 30 2610 4890",
          website: "https://www.rehaservice-berlin.de",
          description: "Professional wheelchair maintenance and tourist rental services near major attractions"
        },
        {
          name: "Mobility Berlin",
          type: "both",
          address: "Alexanderplatz 5, 10178 Berlin",
          phone: "+49 30 4208 3650",
          website: "https://www.mobility-berlin.com",
          description: "Comprehensive mobility equipment services in the heart of Berlin"
        }
      ],
      quickTips: [
        {
          text: "Berlin's public transport is highly accessible - use the BVG app for real-time elevator and accessibility status",
          link: "https://www.bvg.de/en/travel-information/travelling-barrier-free"
        },
        {
          text: "Many historical sites offer free or discounted admission for wheelchair users and companions",
          link: "https://www.berlin.de/en/tourism/travel-information/1772991-2862820-barrier-free-berlin.en.html"
        },
        {
          text: "The city center is largely flat and pedestrian-friendly with wide sidewalks and accessible crossings",
          link: "https://www.visitberlin.de/en/accessible-berlin"
        }
      ],
      detailedInfo: {
        accommodation: "Extensive range of accessible hotels from luxury to budget options, many featuring roll-in showers, accessible bathrooms, and elevator access to all floors.",
        attractions: "World-class museums, historical monuments, and cultural sites with comprehensive wheelchair access, audio guides, and tactile exhibits for visitors with disabilities.",
        dining: "Diverse accessible dining scene from traditional German cuisine to international restaurants, with barrier-free entrances and accessible restroom facilities.",
        transport: "Outstanding accessible public transport network with U-Bahn, S-Bahn, buses, and trams featuring audio announcements, tactile guidance systems, and wheelchair-accessible vehicles."
      }
    }
  ]
};
