
import { Country } from '../types';

export const unitedKingdom: Country = {
  id: 4,
  name: "United Kingdom",
  city: "London",
  image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&h=4000&q=80",
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
};
