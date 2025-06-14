
import { Country } from '../types';

export const netherlands: Country = {
  id: 1,
  name: "Netherlands",
  city: "Amsterdam",
  image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&h=4000&q=80",
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
};
