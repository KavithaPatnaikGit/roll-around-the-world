
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
    city: "Berlin",
    image: "/placeholder.svg",
    rating: 4,
    description: "Berlin combines rich history with modern accessibility standards. The German capital offers excellent public transport, accessible cultural sites, and a strong commitment to inclusive tourism.",
    highlights: [
      "Modern accessible public transport",
      "Historic sites with accessibility features",
      "Excellent accessible accommodation",
      "Strong accessibility awareness",
      "Comprehensive visitor support"
    ],
    emergencyNumbers: [
      { service: "Police", number: "110", description: "Emergency police assistance" },
      { service: "Ambulance", number: "112", description: "Emergency medical services" },
      { service: "Fire", number: "112", description: "Fire department emergency response" }
    ],
    wheelchairAccessibleAttractions: [
      {
        name: "Brandenburg Gate",
        url: "https://www.berlin.de/en/attractions-and-sights/3560249-3104052-brandenburg-gate.en.html",
        description: "Iconic landmark with wheelchair accessibility",
        rating: 5
      },
      {
        name: "Museum Island",
        url: "https://www.smb.museum/en/visit/barrier-free-access/",
        description: "UNESCO World Heritage site with accessible museums",
        rating: 4,
        bookingUrl: "https://www.smb.museum/en/"
      }
    ],
    wheelchairServices: [
      {
        name: "Berlin Mobility Center",
        type: "both",
        address: "Unter den Linden 50, 10117 Berlin",
        phone: "+49 30 1234 5678",
        website: "https://www.berlinmobility.de",
        description: "Full wheelchair services and tourist support"
      }
    ],
    quickTips: [
      {
        text: "Berlin's U-Bahn and S-Bahn are increasingly accessible - check BVG app for real-time info",
        link: "https://www.bvg.de/en/subscriptions-and-tickets/barrier-free"
      }
    ],
    detailedInfo: {
      accommodation: "High-quality accessible hotels and guesthouses throughout the city.",
      attractions: "Museums, monuments, and cultural sites with good accessibility.",
      dining: "Excellent accessible restaurants serving traditional and international cuisine.",
      transport: "Modern accessible public transport with ongoing improvements."
    }
  }
];

export { destinations as countries };
