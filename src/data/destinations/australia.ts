
import { Country } from '../types';

export const australia: Country = {
  id: 3,
  name: "Australia",
  city: "Sydney",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&h=4000&q=80",
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
};
