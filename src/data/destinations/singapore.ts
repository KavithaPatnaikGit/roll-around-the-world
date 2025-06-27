
import { Country } from '../types';

export const singapore: Country = {
  id: 9,
  name: 'Singapore',
  city: 'Singapore',
  image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=400&fit=crop',
  rating: 5,
  description: 'Singapore is a world-class accessible destination with universal design principles, excellent public transport, and comprehensive accessibility features throughout the city-state.',
  highlights: [
    'Barrier-free MRT system',
    'Universal design architecture',
    'Accessible hawker centers',
    'Clear multilingual signage',
    'Wheelchair-friendly attractions',
    'Accessible taxi services'
  ],
  emergencyNumbers: [
    {
      service: 'Emergency Services',
      number: '995',
      description: 'Police, Fire, and Ambulance services'
    },
    {
      service: 'Police Hotline',
      number: '999',
      description: 'Police emergency hotline'
    },
    {
      service: 'Non-Emergency Ambulance',
      number: '1777',
      description: 'Non-emergency medical transport'
    },
    {
      service: 'Tourist Hotline',
      number: '1800-736-2000',
      description: '24/7 tourist assistance and information'
    }
  ],
  wheelchairAccessibleAttractions: [
    {
      name: 'Gardens by the Bay',
      url: 'https://www.gardensbythebay.com.sg/en/visit-us/accessibility.html',
      description: 'Iconic futuristic gardens with accessible walkways, elevators, and wheelchair-friendly paths throughout the conservatories.',
      rating: 5,
      bookingUrl: 'https://www.klook.com/en-SG/activity/102-gardens-by-the-bay-singapore/',
      discounts: [
        {
          provider: 'Klook',
          discountPercentage: 15,
          description: 'Save on Gardens by the Bay tickets with mobile voucher',
          url: 'https://www.klook.com/en-SG/activity/102-gardens-by-the-bay-singapore/',
          originalPrice: 28,
          discountedPrice: 24,
          validUntil: '2024-12-31'
        }
      ],
      tip: 'The conservatories have excellent accessibility with ramps, elevators, and accessible restrooms. Book timed entry tickets online to avoid crowds.'
    },
    {
      name: 'Marina Bay Sands SkyPark',
      url: 'https://www.marinabaysands.com/museum-and-attractions/sands-skypark.html',
      description: 'Observation deck with panoramic city views and accessible facilities.',
      rating: 5,
      bookingUrl: 'https://www.marinabaysands.com/museum-and-attractions/sands-skypark.html',
      tip: 'Access via high-speed elevators with wheelchair accessibility. The observation deck has barrier-free viewing areas.'
    },
    {
      name: 'Singapore Zoo',
      url: 'https://www.mandai.com/en/singapore-zoo/plan-your-visit/accessibility.html',
      description: 'World-renowned zoo with excellent accessibility features including wheelchair rentals and accessible pathways.',
      rating: 5,
      bookingUrl: 'https://www.mandai.com/en/singapore-zoo/tickets-and-experiences.html',
      discounts: [
        {
          provider: 'Mandai Wildlife',
          discountPercentage: 20,
          description: 'Senior and PWD discount available with valid ID',
          url: 'https://www.mandai.com/en/singapore-zoo/tickets-and-experiences.html',
          originalPrice: 39,
          discountedPrice: 31
        }
      ],
      tip: 'Free wheelchair loans available at entrance. The tram system is fully accessible and recommended for easier navigation.'
    },
    {
      name: 'Sentosa Island',
      url: 'https://www.sentosa.com.sg/en/plan-your-visit/accessibility/',
      description: 'Resort island with accessible beaches, attractions, and transport including the accessible Sentosa Express monorail.',
      rating: 4,
      tip: 'Beach wheelchairs available for rent at Siloso Beach. The Sentosa Express has level boarding and wheelchair spaces.'
    },
    {
      name: 'Singapore Flyer',
      url: 'https://www.singaporeflyer.com/plan-your-visit/accessibility/',
      description: 'Giant observation wheel with wheelchair-accessible capsules and boarding platform.',
      rating: 5,
      bookingUrl: 'https://www.singaporeflyer.com/tickets/',
      tip: 'Capsules can accommodate up to 2 wheelchairs. Priority boarding available for guests with disabilities.'
    },
    {
      name: 'Merlion Park',
      url: 'https://www.visitsingapore.com/see-do-singapore/places-to-visit/merlion-park/',
      description: 'Iconic Singapore landmark with accessible viewing areas and pathways.',
      rating: 4,
      tip: 'Fully accessible waterfront park with smooth pathways and accessible viewing platforms for the Merlion statue.'
    },
    {
      name: 'Chinatown Heritage Centre',
      url: 'https://www.chinatownheritagecentre.com.sg/accessibility/',
      description: 'Cultural museum with lift access and accessible exhibits showcasing Chinese immigrant history.',
      rating: 4,
      bookingUrl: 'https://www.chinatownheritagecentre.com.sg/tickets/',
      tip: 'Elevator access to all floors and accessible audio guides available for visually impaired visitors.'
    },
    {
      name: 'National Gallery Singapore',
      url: 'https://www.nationalgallery.sg/visit/accessibility',
      description: 'Premier art museum housed in historic buildings with comprehensive accessibility features.',
      rating: 5,
      bookingUrl: 'https://www.nationalgallery.sg/visit/tickets',
      tip: 'Free admission for PWDs and caregivers. Tactile tours and wheelchair loans available.'
    },
    {
      name: 'ArtScience Museum',
      url: 'https://www.marinabaysands.com/museum/accessibility.html',
      description: 'Iconic lotus-shaped museum with accessible galleries and interactive exhibits.',
      rating: 5,
      bookingUrl: 'https://www.marinabaysands.com/museum/tickets.html',
      tip: 'All exhibition floors accessible via elevators. Sensory-friendly sessions available for visitors with autism.'
    },
    {
      name: 'Singapore Science Centre',
      url: 'https://www.science.edu.sg/visit-us/accessibility',
      description: 'Interactive science museum with accessible exhibits and wheelchair-friendly pathways.',
      rating: 4,
      bookingUrl: 'https://www.science.edu.sg/visit-us/tickets',
      tip: 'Wheelchair rentals available and most interactive exhibits are accessible from seated position.'
    }
  ],
  wheelchairServices: [
    {
      name: 'Medical Equipment Rental Singapore',
      type: 'both',
      address: '1 Raffles Place, #20-61 One Raffles Place Tower 2, Singapore 048616',
      phone: '+65 6221-4567',
      website: 'https://www.medicalequipment.sg',
      description: 'Comprehensive wheelchair rental and sales with delivery service throughout Singapore.'
    },
    {
      name: 'Essential Healthcare',
      type: 'both',
      address: '101 Thomson Road, #03-61 United Square, Singapore 307591',
      phone: '+65 6255-2220',
      website: 'https://www.essential.sg',
      description: 'Medical equipment supplier offering wheelchair sales, rentals, and repair services.'
    },
    {
      name: 'Tan Tock Seng Hospital Assistive Technology Centre',
      type: 'repair',
      address: '11 Jalan Tan Tock Seng, Singapore 308433',
      phone: '+65 6357-7153',
      description: 'Hospital-based service providing wheelchair repairs and assistive technology support.'
    }
  ],
  quickTips: [
    {
      text: 'Download the MyTransport.SG app for real-time accessibility information on MRT stations and bus services.',
      link: 'https://www.mytransport.sg/content/mytransport/home.html'
    },
    {
      text: 'Singapore has excellent accessibility standards - most buildings built after 1995 are fully accessible.',
      link: 'https://www.bca.gov.sg/barrier-free/barrier-free.html'
    },
    {
      text: 'Taxi companies like ComfortDelGro offer wheelchair-accessible vehicles - book in advance through their app.',
      link: 'https://www.cdgtaxi.com.sg/accessibility'
    },
    {
      text: 'Many hawker centers have accessible seating areas and ramps - look for the accessibility symbol.',
      link: 'https://www.visitsingapore.com/dining/local-dishes/hawker-centres/'
    },
    {
      text: 'Singapore offers discounted attraction passes for seniors and persons with disabilities.',
      link: 'https://www.visitsingapore.com/travel-guide-tips/accessible-singapore/'
    }
  ],
  detailedInfo: {
    accommodation: 'Singapore offers excellent accessible accommodation options, from luxury hotels to budget-friendly hostels. Most hotels built after 1995 have accessible rooms with roll-in showers, grab bars, and accessible pathways. Marina Bay Sands, Raffles Hotel, and many international chains provide comprehensive accessibility features.',
    attractions: 'Singapore is world-renowned for its accessible attractions. Universal Studios Singapore, Gardens by the Bay, and the Singapore Zoo all have excellent accessibility features. Most museums offer free admission to PWDs and their caregivers, with tactile tours and accessible facilities throughout.',
    dining: 'Singapore\'s dining scene is highly accessible, with most shopping malls and modern restaurants having step-free access. Many traditional hawker centers have been renovated with ramps and accessible seating. The city\'s diverse food culture is easily accessible to all visitors.',
    transport: 'Singapore has one of the world\'s most accessible public transport systems. The MRT has lifts at all stations, tactile guidance systems, and audio announcements. Buses are low-floor with wheelchair spaces, and accessible taxis can be booked through mobile apps.'
  },
  accessibleHotels: [
    {
      name: 'Marina Bay Sands',
      rating: 5,
      features: ['Accessible rooms with roll-in showers', 'Pool hoists available', 'Accessible casino and shopping'],
      reservationUrl: 'https://www.marinabaysands.com/'
    },
    {
      name: 'Shangri-La Hotel Singapore',
      rating: 5,
      features: ['Multiple accessible rooms', 'Accessible spa facilities', 'Garden-level accessible dining'],
      reservationUrl: 'https://www.shangri-la.com/singapore/shangrila/'
    },
    {
      name: 'Grand Hyatt Singapore',
      rating: 5,
      features: ['Accessible rooms on multiple floors', 'Accessible fitness center', 'Step-free restaurant access'],
      reservationUrl: 'https://www.hyatt.com/en-US/hotel/singapore/grand-hyatt-singapore/'
    }
  ],
  topDining: [
    {
      name: 'Maxwell Food Centre',
      cuisine: 'Local Hawker',
      rating: 4,
      priceRange: '$',
      accessibilityFeatures: ['Wheelchair accessible entrance', 'Accessible seating areas', 'Ramp access'],
      location: 'Chinatown',
      nearbyLandmarks: ['Buddha Tooth Relic Temple', 'Chinatown MRT Station']
    },
    {
      name: 'ION Sky Restaurant',
      cuisine: 'International Fine Dining',
      rating: 5,
      priceRange: '$$$$',
      accessibilityFeatures: ['High-speed accessible elevators', 'Accessible restrooms', 'Barrier-free dining areas'],
      location: 'Orchard Road',
      reservationUrl: 'https://www.ionsky.com.sg/',
      nearbyLandmarks: ['ION Orchard Mall', 'Orchard MRT Station']
    },
    {
      name: 'Lau Pa Sat',
      cuisine: 'Local Hawker',
      rating: 4,
      priceRange: '$',
      accessibilityFeatures: ['Multiple accessible entrances', 'Wheelchair-friendly aisles', 'Accessible facilities'],
      location: 'Central Business District',
      nearbyLandmarks: ['Raffles Place MRT', 'Marina Bay']
    }
  ]
};
