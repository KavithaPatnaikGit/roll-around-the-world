
import { Country } from './types';

export const destinations: Country[] = [
  {
    id: 1,
    name: "Netherlands",
    city: "Amsterdam",
    image: "/placeholder.svg",
    rating: 5,
    description: "Amsterdam is one of the world's most wheelchair-accessible cities, with excellent public transport, accessible canal tours, and accommodating museums. The city's flat terrain and modern infrastructure make it ideal for travelers with mobility needs.",
    highlights: [
      "Fully accessible tram and metro system",
      "Wheelchair-friendly canal boat tours", 
      "Museums with excellent accessibility features",
      "Wide sidewalks and bike paths",
      "Accessible historic sites with modern adaptations"
    ],
    emergencyNumbers: [
      { service: "Police", number: "112", description: "Emergency police assistance" },
      { service: "Ambulance", number: "112", description: "Emergency medical services" },
      { service: "Fire", number: "112", description: "Fire department emergency response" }
    ],
    wheelchairAccessibleAttractions: [
      {
        name: "Van Gogh Museum",
        url: "https://www.vangoghmuseum.nl/en/visit/accessibility",
        description: "World-renowned museum with full wheelchair accessibility",
        rating: 5,
        bookingUrl: "https://www.vangoghmuseum.nl/en/tickets"
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
      }
    ],
    detailedInfo: {
      accommodation: "Wide range of accessible hotels with features like roll-in showers and elevators.",
      attractions: "Museums and parks with wheelchair access and rental options.",
      dining: "Many restaurants offer accessible entrances and restrooms.",
      transport: "Fully accessible public transport system with trams, buses and metro."
    }
  },
  {
    id: 2,
    name: "Japan",
    city: "Tokyo",
    image: "/placeholder.svg",
    rating: 5,
    description: "Tokyo offers exceptional accessibility with modern infrastructure, helpful staff, and comprehensive wheelchair-friendly attractions. The city combines traditional culture with cutting-edge accessibility technology.",
    highlights: [
      "Modern accessible subway system",
      "Wheelchair-friendly temples and shrines", 
      "Accessible shopping districts",
      "English-speaking accessibility support",
      "Advanced accessible technology"
    ],
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
      }
    ],
    detailedInfo: {
      accommodation: "Hotels with barrier-free rooms and accessible bathrooms.",
      attractions: "Temples, towers, and parks with wheelchair access.",
      dining: "Restaurants with accessible seating and entrances.",
      transport: "Modern accessible subway and train system with assistance available."
    }
  },
  {
    id: 3,
    name: "Australia",
    city: "Sydney",
    image: "/placeholder.svg",
    rating: 4,
    description: "Sydney combines stunning natural beauty with excellent accessibility features across its major attractions and transport systems. The harbor city offers unique accessible experiences from beaches to cultural landmarks.",
    highlights: [
      "Accessible ferry system with harbor views",
      "Wheelchair-friendly beaches",
      "Accessible Opera House tours",
      "Modern accessible infrastructure",
      "Comprehensive transport accessibility"
    ],
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
      dining: "Restaurants with accessible entrances and seating.",
      transport: "Comprehensive accessible public transport including ferries, trains, and buses."
    }
  },
  {
    id: 4,
    name: "United Kingdom",
    city: "London",
    image: "/placeholder.svg",
    rating: 4,
    description: "London leads in accessibility with comprehensive transport systems, world-class museums, and historic sites adapted for all visitors. The city offers an excellent blend of heritage and modern accessibility.",
    highlights: [
      "Extensive accessible public transport",
      "World-renowned accessible museums",
      "Historic sites with modern adaptations",
      "Comprehensive accessibility information",
      "Excellent accessible dining scene"
    ],
    emergencyNumbers: [
      { service: "Police", number: "999", description: "Emergency police assistance" },
      { service: "Ambulance", number: "999", description: "Emergency medical services" },
      { service: "Fire", number: "999", description: "Fire department emergency response" }
    ],
    wheelchairAccessibleAttractions: [
      {
        name: "British Museum",
        url: "https://www.britishmuseum.org/visit/accessibility",
        description: "World-famous museum with excellent accessibility features",
        rating: 5,
        bookingUrl: "https://www.britishmuseum.org/visit"
      },
      {
        name: "Tower of London",
        url: "https://www.hrp.org.uk/tower-of-london/visit/accessibility/",
        description: "Historic fortress with accessibility adaptations",
        rating: 4,
        bookingUrl: "https://www.hrp.org.uk/tower-of-london/"
      }
    ],
    wheelchairServices: [
      {
        name: "London Mobility Solutions",
        type: "both",
        address: "123 Oxford Street, London W1",
        phone: "+44 20 7123 4567",
        website: "https://www.londonmobility.co.uk",
        description: "Comprehensive wheelchair services in central London"
      }
    ],
    quickTips: [
      {
        text: "London's buses are fully accessible, but check tube station accessibility before traveling",
        link: "https://tfl.gov.uk/transport-accessibility/"
      }
    ],
    detailedInfo: {
      accommodation: "Wide range of accessible hotels from luxury to budget options.",
      attractions: "Museums, galleries, and historic sites with excellent accessibility.",
      dining: "Diverse accessible dining options across all cuisines.",
      transport: "Comprehensive accessible public transport network."
    }
  },
  {
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
  },
  {
    id: 6,
    name: "United States",
    city: "Overview",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&h=6000&q=80",
    rating: 5,
    isCategory: true,
    description: "The United States leads the world in accessibility legislation and infrastructure through the Americans with Disabilities Act (ADA). From New York's vibrant cultural scene to San Francisco's innovative spirit and Disney World's magical experiences, the US offers unparalleled accessibility across diverse destinations.",
    highlights: [
      "ADA compliance ensuring consistent accessibility standards",
      "World-class accessible public transportation systems",
      "Comprehensive accessibility in national parks",
      "Leading accessible entertainment and attractions",
      "Extensive accessible accommodation options"
    ],
    emergencyNumbers: [
      { service: "Police", number: "911", description: "Emergency police assistance" },
      { service: "Ambulance", number: "911", description: "Emergency medical services" },
      { service: "Fire", number: "911", description: "Fire department emergency response" }
    ],
    wheelchairAccessibleAttractions: [],
    wheelchairServices: [],
    quickTips: [
      {
        text: "The ADA ensures consistent accessibility standards across all public spaces in the US",
        link: "https://www.ada.gov/"
      }
    ],
    detailedInfo: {
      accommodation: "The US offers the world's most comprehensive accessible accommodation options with ADA-compliant hotels nationwide.",
      attractions: "From Disney World to national parks, attractions feature world-leading accessibility with detailed accessibility guides.",
      dining: "Restaurants nationwide comply with ADA standards ensuring accessible entrances, seating, and restroom facilities.",
      transport: "Major cities feature accessible public transport, with Amtrak and airlines providing comprehensive accessibility services."
    },
    cities: [
      {
        id: 61,
        name: "United States",
        city: "New York City",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=7372&h=4392&q=80",
        rating: 5,
        description: "New York City stands as one of the world's most accessible major cities, with comprehensive subway accessibility, world-renowned accessible attractions, and a vibrant cultural scene that welcomes all visitors. The city that never sleeps ensures accessibility around the clock.",
        highlights: [
          "Extensive accessible subway system with elevators",
          "Broadway theaters with accessible seating",
          "Wheelchair-friendly Central Park and High Line",
          "ADA-compliant museums and attractions",
          "Comprehensive accessible taxi and rideshare options"
        ],
        emergencyNumbers: [
          { service: "Police", number: "911", description: "Emergency police assistance" },
          { service: "Ambulance", number: "911", description: "Emergency medical services" },
          { service: "Fire", number: "911", description: "Fire department emergency response" }
        ],
        wheelchairAccessibleAttractions: [
          {
            name: "Statue of Liberty & Ellis Island",
            url: "https://www.nps.gov/stli/planyourvisit/accessibility.htm",
            description: "Iconic landmarks with accessible ferry service and comprehensive accessibility features",
            rating: 5,
            bookingUrl: "https://www.statueofliberty.org/"
          },
          {
            name: "Empire State Building",
            url: "https://www.esbnyc.com/visit/accessibility",
            description: "Art Deco skyscraper with full accessibility to observation decks",
            rating: 5,
            bookingUrl: "https://www.esbnyc.com/buy-tickets"
          },
          {
            name: "Metropolitan Museum of Art",
            url: "https://www.metmuseum.org/visit/accessibility",
            description: "World-renowned museum with comprehensive accessibility services and programs",
            rating: 5,
            bookingUrl: "https://www.metmuseum.org/visit"
          },
          {
            name: "Central Park",
            url: "https://www.centralparknyc.org/visit/accessibility",
            description: "Iconic urban park with accessible paths, restrooms, and attractions",
            rating: 5
          },
          {
            name: "High Line",
            url: "https://www.thehighline.org/visit/accessibility/",
            description: "Elevated park with elevator access and accessible walkways throughout",
            rating: 5
          },
          {
            name: "9/11 Memorial & Museum",
            url: "https://www.911memorial.org/visit/accessibility",
            description: "Moving memorial and museum with full accessibility features",
            rating: 5,
            bookingUrl: "https://www.911memorial.org/visit"
          }
        ],
        wheelchairServices: [
          {
            name: "Wheelchair Getaways NYC",
            type: "both",
            address: "Multiple locations in NYC",
            phone: "+1 212-582-4730",
            website: "https://www.wheelchairgetaways.com/",
            description: "Comprehensive wheelchair rental and accessibility equipment services"
          },
          {
            name: "NYC Mobility Equipment",
            type: "both",
            address: "123 Broadway, New York, NY 10001",
            phone: "+1 212-555-0123",
            website: "https://www.nycmobility.com",
            description: "Full-service mobility equipment center with tourist rentals and repairs"
          }
        ],
        quickTips: [
          {
            text: "NYC subway has over 140 accessible stations - use the MTA app for real-time elevator status",
            link: "https://new.mta.info/accessibility"
          },
          {
            text: "All NYC buses are wheelchair accessible with kneeling features and priority seating",
            link: "https://new.mta.info/accessibility/buses"
          },
          {
            text: "Broadway theaters offer accessible seating and assistive listening devices - book directly with theaters",
            link: "https://www.broadway.org/accessibility/"
          }
        ],
        detailedInfo: {
          accommodation: "NYC offers extensive accessible accommodation from luxury hotels to budget options, all ADA-compliant with roll-in showers and accessible rooms.",
          attractions: "World-class museums, landmarks, and entertainment venues with comprehensive accessibility, detailed guides, and assistance services.",
          dining: "Diverse dining scene with ADA-compliant restaurants offering accessible entrances, seating, and restroom facilities across all cuisines.",
          transport: "Comprehensive accessible public transport with subway, buses, taxis, and rideshare options, plus accessible ferry services to Staten Island."
        }
      },
      {
        id: 62,
        name: "United States",
        city: "San Francisco",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&h=1548&q=80",
        rating: 4,
        description: "San Francisco combines stunning natural beauty with progressive accessibility features. Despite its famous hills, the city offers excellent accessible transportation, innovative accessibility solutions, and breathtaking accessible viewpoints of the Golden Gate Bridge and bay.",
        highlights: [
          "Cable cars with accessibility accommodations",
          "Accessible Golden Gate Bridge walkways",
          "Wheelchair-friendly Fisherman's Wharf",
          "Comprehensive MUNI accessibility",
          "Innovative accessibility technology implementations"
        ],
        emergencyNumbers: [
          { service: "Police", number: "911", description: "Emergency police assistance" },
          { service: "Ambulance", number: "911", description: "Emergency medical services" },
          { service: "Fire", number: "911", description: "Fire department emergency response" }
        ],
        wheelchairAccessibleAttractions: [
          {
            name: "Golden Gate Bridge",
            url: "https://www.goldengate.org/visit/accessibility/",
            description: "Iconic bridge with accessible sidewalks and viewing areas",
            rating: 5
          },
          {
            name: "Alcatraz Island",
            url: "https://www.nps.gov/alca/planyourvisit/accessibility.htm",
            description: "Historic prison island with accessible ferry and audio tour",
            rating: 4,
            bookingUrl: "https://www.alcatrazcruises.com/"
          },
          {
            name: "Fisherman's Wharf & Pier 39",
            url: "https://www.pier39.com/visit/accessibility/",
            description: "Popular waterfront destination with accessible shops and attractions",
            rating: 5
          },
          {
            name: "San Francisco Museum of Modern Art",
            url: "https://www.sfmoma.org/visit/accessibility/",
            description: "World-class modern art museum with comprehensive accessibility features",
            rating: 5,
            bookingUrl: "https://www.sfmoma.org/visit/"
          },
          {
            name: "Lombard Street",
            url: "https://www.sftravel.com/article/accessibility-san-francisco",
            description: "Famous winding street with accessible viewing areas at top and bottom",
            rating: 3
          }
        ],
        wheelchairServices: [
          {
            name: "Bay Area Mobility",
            type: "both",
            address: "456 Mission St, San Francisco, CA 94105",
            phone: "+1 415-555-0456",
            website: "https://www.bayareamobility.com",
            description: "Complete wheelchair services including specialized equipment for SF's hills"
          },
          {
            name: "SF Accessibility Solutions",
            type: "both",
            address: "789 Market St, San Francisco, CA 94103",
            phone: "+1 415-555-0789",
            website: "https://www.sfaccessibility.com",
            description: "Innovative mobility solutions and equipment rental for tourists"
          }
        ],
        quickTips: [
          {
            text: "MUNI buses and trains are fully accessible - use the SF MTA app for real-time accessibility info",
            link: "https://www.sfmta.com/accessibility"
          },
          {
            text: "Many cable car routes offer accessible alternatives via bus - check MUNI for parallel routes",
            link: "https://www.sfmta.com/getting-around/accessibility/accessible-cable-cars"
          },
          {
            text: "Golden Gate Park has accessible paths and attractions including the de Young Museum",
            link: "https://sfrecpark.org/Facilities/Facility/Details/Golden-Gate-Park-143"
          }
        ],
        detailedInfo: {
          accommodation: "San Francisco offers accessible hotels with stunning bay views, many featuring accessible rooms with roll-in showers and elevator access.",
          attractions: "Iconic landmarks and cultural sites with accessibility adaptations for the city's unique topography, including accessible viewpoints.",
          dining: "Diverse culinary scene with accessible restaurants offering everything from fresh seafood to innovative cuisine, all ADA-compliant.",
          transport: "Comprehensive accessible public transport with buses, trains, and accessible taxi services, plus accessible alternatives to cable cars."
        }
      },
      {
        id: 63,
        name: "United States", 
        city: "Orlando",
        image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=3456&h=5184&q=80",
        rating: 5,
        description: "Orlando stands as the world's premier accessible destination for family entertainment, home to Disney World's industry-leading accessibility services, Universal Studios' comprehensive accommodations, and numerous other attractions designed with accessibility in mind from the ground up.",
        highlights: [
          "Disney World's world-renowned accessibility services",
          "Universal Studios' comprehensive accessibility programs",
          "Accessible transportation throughout the theme park corridor",
          "Specialized accessible accommodation options",
          "Industry-leading assistive technology implementations"
        ],
        emergencyNumbers: [
          { service: "Police", number: "911", description: "Emergency police assistance" },
          { service: "Ambulance", number: "911", description: "Emergency medical services" },
          { service: "Fire", number: "911", description: "Fire department emergency response" }
        ],
        wheelchairAccessibleAttractions: [
          {
            name: "Walt Disney World Resort",
            url: "https://disneyworld.disney.go.com/guest-services/disability-access-service/",
            description: "Four theme parks with industry-leading accessibility services and accommodations",
            rating: 5,
            bookingUrl: "https://disneyworld.disney.go.com/tickets/"
          },
          {
            name: "Universal Orlando Resort",
            url: "https://www.universalorlando.com/web/en/us/plan-your-visit/accessibility",
            description: "Two theme parks with comprehensive accessibility services and adaptive attractions",
            rating: 5,
            bookingUrl: "https://www.universalorlando.com/web/en/us/tickets"
          },
          {
            name: "SeaWorld Orlando",
            url: "https://seaworld.com/orlando/plan-your-visit/accessibility/",
            description: "Marine life theme park with accessible shows and attractions",
            rating: 4,
            bookingUrl: "https://seaworld.com/orlando/tickets/"
          },
          {
            name: "ICON Park",
            url: "https://iconparkorlando.com/accessibility/",
            description: "Entertainment complex with accessible attractions including The Wheel",
            rating: 4,
            bookingUrl: "https://iconparkorlando.com/"
          }
        ],
        wheelchairServices: [
          {
            name: "Orlando Mobility Rentals",
            type: "both",
            address: "Multiple Orlando locations",
            phone: "+1 407-555-0123",
            website: "https://www.orlandomobility.com",
            description: "Specialized theme park mobility equipment including delivery to hotels"
          },
          {
            name: "Theme Park Accessibility",
            type: "both",
            address: "International Drive area",
            phone: "+1 407-555-0456",
            website: "https://www.themeparkaccessibility.com",
            description: "Complete accessibility equipment rental and theme park specialist services"
          }
        ],
        quickTips: [
          {
            text: "Disney's Disability Access Service (DAS) allows you to return to attractions at scheduled times - register at Guest Relations",
            link: "https://disneyworld.disney.go.com/guest-services/disability-access-service/"
          },
          {
            text: "Universal's Express Pass is available for guests with disabilities - inquire at Guest Services",
            link: "https://www.universalorlando.com/web/en/us/plan-your-visit/accessibility"
          },
          {
            text: "Many hotels on International Drive offer free shuttle services to theme parks with accessible vehicles",
            link: "https://www.visitorlando.com/things-to-do/transportation/i-ride-trolley/"
          }
        ],
        detailedInfo: {
          accommodation: "Orlando features the world's largest selection of accessible vacation rentals and hotels, many specifically designed for families with accessibility needs.",
          attractions: "Home to the world's most accessible theme parks with comprehensive services including ride accessibility, assistive listening devices, and specialized programs.",
          dining: "Extensive dining options within theme parks and throughout the city, all featuring accessible seating and comprehensive dietary accommodation services.",
          transport: "Accessible transportation options including theme park shuttles, accessible rental cars, and specialized services for guests with disabilities."
        }
      }
    ]
  }
];

export { destinations as countries };
