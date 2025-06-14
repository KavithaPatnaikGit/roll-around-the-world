
import { Country } from '../types';

export const japan: Country = {
  id: 2,
  name: "Japan",
  city: "Tokyo",
  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&h=4000&q=80",
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
};
