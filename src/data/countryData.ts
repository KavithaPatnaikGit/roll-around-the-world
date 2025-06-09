export interface EmergencyNumber {
  service: string;
  number: string;
  description: string;
}

export interface QuickTip {
  text: string;
  link: string;
}

export interface AccessibleAttraction {
  name: string;
  url: string;
}

export interface AccessibleHotel {
  name: string;
  rating: 3 | 4 | 5;
  reservationUrl: string;
  features: string[];
}

export interface Country {
  id: number;
  name: string;
  city: string;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
  emergencyNumbers: EmergencyNumber[];
  quickTips: QuickTip[];
  wheelchairAccessibleAttractions: AccessibleAttraction[];
  accessibleHotels: AccessibleHotel[];
  detailedInfo: {
    transport: string;
    accommodation: string;
    attractions: string;
    dining: string;
  };
}

export const countries: Country[] = [
  {
    id: 1,
    name: 'Netherlands',
    city: 'Amsterdam',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=400&fit=crop',
    description: 'Exceptional wheelchair accessibility with flat terrain, accessible public transport, and world-class facilities.',
    highlights: ['100% accessible trams', 'Flat cycling paths', 'Accessible museums', 'Wheelchair-friendly hotels'],
    emergencyNumbers: [
      { service: 'Emergency Services', number: '112', description: 'Police, Fire, Ambulance' },
      { service: 'Police (Non-Emergency)', number: '0900-8844', description: 'Local police assistance' },
      { service: 'Tourist Helpline', number: '+31 20 702 6000', description: 'Amsterdam tourist information' },
      { service: 'Accessible Transport Info', number: '+31 900 9292', description: 'Public transport accessibility' }
    ],
    quickTips: [
      { 
        text: 'Download the GVB app for real-time accessible transport info',
        link: 'https://gvb.nl/en/travel-information/gvb-app'
      },
      { 
        text: 'Book museum tickets online to skip lines and ensure wheelchair access',
        link: 'https://www.amsterdam.nl/en/tourism/what-to-do/museums-attractions/'
      },
      { 
        text: 'Most canals have accessible viewing points at bridge crossings',
        link: 'https://www.amsterdam.nl/en/accessibility/'
      },
      { 
        text: 'Rent an accessible bike or wheelchair-friendly cargo bike',
        link: 'https://www.amsterdam.nl/en/traffic-transport/cycling/bicycle-rental/'
      },
      { 
        text: 'Many restaurants have step-free terraces - ask when booking',
        link: 'https://www.amsterdam.nl/en/accessibility/restaurants/'
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: 'Van Gogh Museum', url: 'https://www.vangoghmuseum.nl/en/plan-your-visit/accessibility' },
      { name: 'Rijksmuseum', url: 'https://www.rijksmuseum.nl/en/visit/accessibility' },
      { name: 'Anne Frank House', url: 'https://www.annefrank.org/en/museum/practical-information/accessibility/' },
      { name: 'Vondelpark', url: 'https://www.amsterdam.nl/en/parks-water/vondelpark/' },
      { name: 'Royal Palace of Amsterdam', url: 'https://www.paleisamsterdam.nl/en/practical-info/accessibility' }
    ],
    accessibleHotels: [
      { name: 'Waldorf Astoria Amsterdam', rating: 5, reservationUrl: 'https://www.hilton.com/en/hotels/amswa-waldorf-astoria-amsterdam/', features: ['Roll-in shower', 'Lowered fixtures', 'Elevator access'] },
      { name: 'The Hoxton, Amsterdam', rating: 4, reservationUrl: 'https://thehoxton.com/amsterdam/', features: ['Accessible rooms', 'Wide doorways', 'Accessible bathroom'] },
      { name: 'Hotel V Nesplein', rating: 4, reservationUrl: 'https://www.hotelv.nl/nesplein/', features: ['Wheelchair accessible', 'Adapted bathroom', 'Ground floor access'] },
      { name: 'NH Collection Amsterdam Doelen', rating: 4, reservationUrl: 'https://www.nh-hotels.com/hotel/nh-collection-amsterdam-doelen', features: ['Accessible facilities', 'Roll-in shower', 'Accessible parking'] },
      { name: 'Hotel Casa Amsterdam', rating: 3, reservationUrl: 'https://www.casaamsterdam.com/', features: ['Basic accessibility', 'Accessible room available', 'Near accessible transport'] }
    ],
    detailedInfo: {
      transport: 'All trams and buses are wheelchair accessible with ramps and designated spaces. The train system connects major cities with step-free access.',
      accommodation: 'Wide selection of accessible hotels with roll-in showers, lowered amenities, and elevator access to all floors.',
      attractions: 'Van Gogh Museum, Rijksmuseum, and Anne Frank House all offer wheelchair access and audio guides.',
      dining: 'Most restaurants have step-free entrances and accessible restrooms. Many cafes offer outdoor seating at street level.'
    }
  },
  {
    id: 2,
    name: 'Japan',
    city: 'Tokyo',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop',
    description: 'Modern infrastructure with excellent accessibility features, tactile guidance systems, and accessible public transport.',
    highlights: ['Accessible JR trains', 'Tactile paving', 'Universal design', 'Accessible temples'],
    emergencyNumbers: [
      { service: 'Emergency Services', number: '110', description: 'Police' },
      { service: 'Fire/Ambulance', number: '119', description: 'Fire department and ambulance' },
      { service: 'Japan Helpline', number: '0570-000-911', description: '24/7 multilingual support' },
      { service: 'Tourist Assistance', number: '+81 3-3201-3331', description: 'Japan National Tourism hotline' }
    ],
    quickTips: [
      { 
        text: 'Learn basic Japanese phrases for assistance: "Tasukete kudasai" (please help)',
        link: 'https://www.japan.travel/en/plan/accessibility-travel/'
      },
      { 
        text: 'Station staff are very helpful - look for the blue vest uniforms',
        link: 'https://www.jreast.co.jp/e/customer_support/barrier_free/'
      },
      { 
        text: 'Download Google Translate with camera feature for reading signs',
        link: 'https://translate.google.com/'
      },
      { 
        text: 'Many stations have elevator maps - study them before traveling',
        link: 'https://www.jreast.co.jp/e/stations/'
      },
      { 
        text: 'Traditional restaurants may require floor seating - call ahead',
        link: 'https://www.japan.travel/en/plan/accessibility-travel/dining/'
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: 'Tokyo Skytree', url: 'https://www.tokyo-skytree.jp/en/enjoy/barrier-free/' },
      { name: 'Senso-ji Temple', url: 'https://www.senso-ji.jp/about/barrier_free.html' },
      { name: 'Tokyo National Museum', url: 'https://www.tnm.jp/modules/r_free_page/index.php?id=113' },
      { name: 'Meiji Shrine', url: 'https://www.meijijingu.or.jp/en/visit/barrier-free/' },
      { name: 'Tokyo Station', url: 'https://www.tokyostationcity.com/en/access/barrier-free/' }
    ],
    accessibleHotels: [
      { name: 'The Ritz-Carlton Tokyo', rating: 5, reservationUrl: 'https://www.ritzcarlton.com/en/hotels/tokyo', features: ['Universal design rooms', 'Roll-in shower', 'Accessible facilities'] },
      { name: 'Grand Hyatt Tokyo', rating: 5, reservationUrl: 'https://www.hyatt.com/en-US/hotel/japan/grand-hyatt-tokyo/tyogh', features: ['Barrier-free rooms', 'Accessible bathroom', 'Emergency notification'] },
      { name: 'Hotel New Otani Tokyo', rating: 4, reservationUrl: 'https://www.newotani.co.jp/en/tokyo/', features: ['Accessible rooms', 'Wide corridors', 'Accessible parking'] },
      { name: 'Shinjuku Washington Hotel', rating: 3, reservationUrl: 'https://www.washington-hotels.jp/shinjuku/', features: ['Basic accessibility', 'Accessible room', 'Near accessible station'] },
      { name: 'Hotel Gracery Shinjuku', rating: 3, reservationUrl: 'https://www.gracery.com/shinjuku/', features: ['Accessible facilities', 'Universal design elements', 'Accessible location'] }
    ],
    detailedInfo: {
      transport: 'JR trains and subway systems feature elevators, tactile guidance, and priority seating. Station staff provide assistance.',
      accommodation: 'Hotels offer barrier-free rooms with accessible bathrooms and emergency notification systems for hearing impaired guests.',
      attractions: 'Tokyo Skytree, Senso-ji Temple, and major museums provide wheelchair access and multilingual accessibility information.',
      dining: 'Many restaurants have step-free access, though traditional establishments may require advance notice for accessibility needs.'
    }
  },
  {
    id: 3,
    name: 'Australia',
    city: 'Sydney',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    description: 'Strong disability rights with accessible beaches, transport, and attractions throughout the country.',
    highlights: ['Beach wheelchairs', 'Accessible ferries', 'Disability-friendly venues', 'Clear accessibility info'],
    emergencyNumbers: [
      { service: 'Emergency Services', number: '000', description: 'Police, Fire, Ambulance' },
      { service: 'State Emergency Service', number: '132 500', description: 'Storm and flood assistance' },
      { service: 'Tourist Police', number: '+61 2 9265 6499', description: 'Sydney tourist police' },
      { service: 'Disability Information', number: '1800 643 787', description: 'National Disability Services' }
    ],
    quickTips: [
      { 
        text: 'Book beach wheelchairs in advance during summer season',
        link: 'https://www.waverley.nsw.gov.au/recreation/beaches/beach-wheelchair-hire'
      },
      { 
        text: 'Use the Opal card for easy accessible transport payments',
        link: 'https://www.opal.com.au/en/about-opal/opal_accessibility/'
      },
      { 
        text: 'Many venues offer companion card discounts for carers',
        link: 'https://www.companioncard.org.au/'
      },
      { 
        text: 'Download the Journey Planner app for accessible route planning',
        link: 'https://transportnsw.info/travel-info/accessibility'
      },
      { 
        text: 'Beaches have accessible pathways - check council websites for details',
        link: 'https://www.sydney.com/destinations/sydney/sydney-city/accessibility'
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: 'Sydney Opera House', url: 'https://www.sydneyoperahouse.com/visit-us/accessibility' },
      { name: 'Sydney Harbour Bridge', url: 'https://www.bridgeclimb.com/accessibility' },
      { name: 'Taronga Zoo', url: 'https://taronga.org.au/visit/accessibility' },
      { name: 'Royal Botanic Gardens', url: 'https://www.rbgsyd.nsw.gov.au/visit/accessibility' },
      { name: 'Bondi Beach', url: 'https://www.waverley.nsw.gov.au/recreation/beaches/accessibility' }
    ],
    accessibleHotels: [
      { name: 'Park Hyatt Sydney', rating: 5, reservationUrl: 'https://www.hyatt.com/en-US/hotel/australia/park-hyatt-sydney/sydph', features: ['Accessible harbourview rooms', 'Roll-in shower', 'Accessible facilities'] },
      { name: 'Four Seasons Hotel Sydney', rating: 5, reservationUrl: 'https://www.fourseasons.com/sydney/', features: ['Accessible rooms', 'Adapted bathroom', 'Concierge assistance'] },
      { name: 'The Langham Sydney', rating: 4, reservationUrl: 'https://www.langhamhotels.com/en/the-langham/sydney/', features: ['Accessible guest rooms', 'Wide doorways', 'Accessible parking'] },
      { name: 'Novotel Sydney Central', rating: 4, reservationUrl: 'https://www.accor.com/gb/hotel-1576-novotel-sydney-central/index.shtml', features: ['Accessible facilities', 'Adapted rooms', 'Near accessible transport'] },
      { name: 'YHA Sydney Central', rating: 3, reservationUrl: 'https://www.yha.com.au/hostels/nsw/sydney-surrounds/sydney-central/', features: ['Budget accessible rooms', 'Basic facilities', 'Central location'] }
    ],
    detailedInfo: {
      transport: 'Trains, buses, and ferries are wheelchair accessible. The airport link provides step-free access throughout.',
      accommodation: 'Extensive range of accessible accommodations with compliant bathrooms and accessible parking.',
      attractions: 'Sydney Opera House, Harbour Bridge, and beaches offer wheelchair access and specialized equipment rentals.',
      dining: 'Restaurants are required by law to provide accessible entrances and facilities, with most exceeding minimum standards.'
    }
  },
  {
    id: 4,
    name: 'United Kingdom',
    city: 'London',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop',
    description: 'Good accessibility standards with step-free access to many attractions and improving public transport.',
    highlights: ['Step-free tube stations', 'Accessible black cabs', 'Historic sites with ramps', 'Clear signage'],
    emergencyNumbers: [
      { service: 'Emergency Services', number: '999', description: 'Police, Fire, Ambulance' },
      { service: 'Non-Emergency Police', number: '101', description: 'Police non-emergency line' },
      { service: 'Tourist Information', number: '+44 20 7332 1456', description: 'City of London information' },
      { service: 'Transport Accessibility', number: '+44 343 222 1234', description: 'TfL customer service' }
    ],
    quickTips: [
      { 
        text: 'Download Citymapper app for step-free route planning',
        link: 'https://citymapper.com/london/accessibility'
      },
      { 
        text: 'Book accessible taxis through Apps like Gett or Free Now',
        link: 'https://tfl.gov.uk/modes/taxis-and-minicabs/accessibility'
      },
      { 
        text: 'Many historic sites offer virtual tours if physical access is limited',
        link: 'https://www.visitlondon.com/things-to-do/accessibility'
      },
      { 
        text: 'Oyster card works on all accessible transport modes',
        link: 'https://tfl.gov.uk/fares/how-to-pay-and-where-to-buy-tickets-and-oyster/oyster'
      },
      { 
        text: 'Theatre accessibility varies - book accessible seating well in advance',
        link: 'https://www.officiallondontheatre.com/accessibility/'
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: 'British Museum', url: 'https://www.britishmuseum.org/visit/accessibility' },
      { name: 'Tower of London', url: 'https://www.hrp.org.uk/tower-of-london/visit/accessibility/' },
      { name: 'London Eye', url: 'https://www.londoneye.com/help-and-info/accessibility/' },
      { name: 'Tate Modern', url: 'https://www.tate.org.uk/visit/tate-modern/accessibility' },
      { name: 'Westminster Abbey', url: 'https://www.westminster-abbey.org/visit-us/access' }
    ],
    accessibleHotels: [
      { name: 'The Savoy London', rating: 5, reservationUrl: 'https://www.thesavoylondon.com/', features: ['Accessible suites', 'Roll-in shower', 'Concierge services'] },
      { name: 'The May Fair Hotel', rating: 5, reservationUrl: 'https://www.themayfairhotel.co.uk/', features: ['Fully accessible rooms', 'Adapted bathroom', 'Central location'] },
      { name: 'Park Plaza Westminster Bridge', rating: 4, reservationUrl: 'https://www.parkplazawestminsterbridge.com/', features: ['Accessible rooms', 'Hearing loops', 'Visual alarms'] },
      { name: 'Premier Inn London City', rating: 3, reservationUrl: 'https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-city-aldgate.html', features: ['Budget accessible rooms', 'Basic adaptations', 'Near transport'] },
      { name: 'Travelodge London Central City Road', rating: 3, reservationUrl: 'https://www.travelodge.co.uk/hotels/340/London-Central-City-Road-hotel', features: ['Accessible rooms', 'Basic facilities', 'Budget option'] }
    ],
    detailedInfo: {
      transport: 'Increasing number of step-free tube stations, all buses are wheelchair accessible, and black cabs accommodate wheelchairs.',
      accommodation: 'Wide range of accessible hotels, particularly newer establishments, with adapted rooms and facilities.',
      attractions: 'British Museum, Tower of London, and London Eye provide wheelchair access, though some historic sites have limitations.',
      dining: 'Most restaurants in central London are accessible, with many offering step-free entrances and accessible facilities.'
    }
  },
  {
    id: 5,
    name: 'Germany',
    city: 'Berlin',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1587330979470-3205a7938067?w=800&h=400&fit=crop',
    description: 'Excellent public transport accessibility and well-maintained infrastructure for wheelchair users.',
    highlights: ['Low-floor buses', 'Accessible U-Bahn', 'Ramped entrances', 'Audio announcements'],
    emergencyNumbers: [
      { service: 'Emergency Services', number: '112', description: 'Police, Fire, Ambulance' },
      { service: 'Police (Non-Emergency)', number: '110', description: 'Police direct line' },
      { service: 'Tourist Helpline', number: '+49 30 25 00 25', description: 'Berlin tourist information' },
      { service: 'Transport Info', number: '+49 30 194 49', description: 'BVG customer service' }
    ],
    quickTips: [
      { 
        text: 'Get the BVG app for real-time accessible transport updates',
        link: 'https://www.bvg.de/en/tickets-tariffs/all-apps'
      },
      { 
        text: 'Many museums offer free admission on first Sunday of the month',
        link: 'https://www.berlin.de/en/museums-and-art/museums/free-admission/'
      },
      { 
        text: 'Learn "Rollstuhlgerecht" (wheelchair accessible) in German',
        link: 'https://www.berlin.de/en/tourism/travel-information/accessible-berlin/'
      },
      { 
        text: 'Christmas markets have accessible routes - check event websites',
        link: 'https://www.visitberlin.de/en/christmas-markets-berlin'
      },
      { 
        text: 'Most restaurants accept card payments, reducing need for cash handling',
        link: 'https://www.berlin.de/en/restaurants-and-bars/'
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: 'Brandenburg Gate', url: 'https://www.berlin.de/en/attractions-and-sights/3560266-3104052-brandenburg-gate.en.html' },
      { name: 'Museum Island', url: 'https://www.smb.museum/en/museums-institutions/museumsinsel/' },
      { name: 'Berlin Cathedral', url: 'https://www.berlinerdom.de/en/visitor-information/accessibility/' },
      { name: 'Reichstag Building', url: 'https://www.bundestag.de/en/visitthebundestag/accessibility' },
      { name: 'East Side Gallery', url: 'https://www.eastsidegallery-berlin.de/accessibility.html' }
    ],
    accessibleHotels: [
      { name: 'Hotel Adlon Kempinski', rating: 5, reservationUrl: 'https://www.kempinski.com/en/hotel-adlon-berlin', features: ['Luxury accessible rooms', 'Roll-in shower', 'Central location'] },
      { name: 'Steigenberger Hotel Am Kanzleramt', rating: 4, reservationUrl: 'https://www.steigenberger.com/en/hotels/all-hotels/germany/berlin/steigenberger-hotel-am-kanzleramt', features: ['Accessible rooms', 'Near accessible transport', 'Wide doorways'] },
      { name: 'Scandic Continental', rating: 4, reservationUrl: 'https://www.scandichotels.com/hotels/sweden/stockholm/scandic-continental', features: ['Universal design standard', 'Accessibility expertise', 'Central location'] },
      { name: 'Holiday Inn Express Berlin City Centre', rating: 3, reservationUrl: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/berlin/bercc/hoteldetail', features: ['Accessible rooms', 'Basic facilities', 'Budget option'] },
      { name: 'Motel One Berlin-Hauptbahnhof', rating: 3, reservationUrl: 'https://www.motel-one.com/en/hotels/berlin/hotel-berlin-hauptbahnhof/', features: ['Accessible rooms', 'Basic adaptations', 'Near main station'] }
    ],
    detailedInfo: {
      transport: 'Modern public transport with elevators, audio announcements, and designated wheelchair spaces in vehicles.',
      accommodation: 'Hotels offer accessible rooms with roll-in showers and lowered fixtures, particularly in newer establishments.',
      attractions: 'Brandenburg Gate area, Museum Island, and most major attractions provide wheelchair access and accessible tours.',
      dining: 'Most restaurants have step-free access, with outdoor seating commonly available at street level.'
    }
  },
  {
    id: 6,
    name: 'Canada',
    city: 'Vancouver',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    description: 'Beautiful accessible nature experiences with well-designed urban infrastructure.',
    highlights: ['Accessible trails', 'SkyTrain accessibility', 'Inclusive attractions', 'Disability services'],
    emergencyNumbers: [
      { service: 'Emergency Services', number: '911', description: 'Police, Fire, Ambulance' },
      { service: 'Non-Emergency Police', number: '604-717-3321', description: 'Vancouver police non-emergency' },
      { service: 'Tourist Information', number: '+1 604-683-2000', description: 'Tourism Vancouver' },
      { service: 'HandyDART', number: '604-575-6299', description: 'Accessible transit service' }
    ],
    quickTips: [
      { 
        text: 'Download the TransLink app for accessible route planning',
        link: 'https://www.translink.ca/about-us/customer-service/accessibility'
      },
      { 
        text: 'Many parks rent out beach wheelchairs and all-terrain wheelchairs',
        link: 'https://vancouver.ca/parks-recreation-culture/accessibility-in-parks.aspx'
      },
      { 
        text: 'Compass card works on all accessible transit modes',
        link: 'https://www.compasscard.ca/'
      },
      { 
        text: 'Weather can change quickly - pack waterproof covers for equipment',
        link: 'https://www.tourismvancouver.com/plan-your-trip/accessibility/'
      },
      { 
        text: 'Most coffee shops have step-free access and accessible washrooms',
        link: 'https://vancouver.ca/people-programs/accessibility.aspx'
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: 'Stanley Park', url: 'https://vancouver.ca/parks-recreation-culture/accessibility-in-parks.aspx' },
      { name: 'Capilano Suspension Bridge', url: 'https://www.capbridge.com/visit/accessibility/' },
      { name: 'Science World', url: 'https://www.scienceworld.ca/visit/accessibility' },
      { name: 'Granville Island', url: 'https://granvilleisland.com/accessibility' },
      { name: 'VanDusen Botanical Garden', url: 'https://vandusengarden.org/visit/accessibility/' }
    ],
    accessibleHotels: [
      { name: 'Fairmont Pacific Rim', rating: 5, reservationUrl: 'https://www.fairmont.com/pacific-rim-vancouver/', features: ['Accessible luxury rooms', 'Roll-in shower', 'Accessible facilities'] },
      { name: 'Pan Pacific Vancouver', rating: 4, reservationUrl: 'https://www.panpacific.com/en/hotels-and-resorts/pp-vancouver.html', features: ['Accessible waterfront rooms', 'Adapted bathroom', 'Near accessible areas'] },
      { name: 'Coast Coal Harbour Vancouver Hotel', rating: 4, reservationUrl: 'https://www.coasthotels.com/coast-coal-harbour-vancouver-hotel-by-apa/', features: ['Accessible rooms', 'Visual alarms', 'Accessible entrance'] },
      { name: 'Best Western Plus Sands', rating: 3, reservationUrl: 'https://www.bestwestern.com/en_US/book/hotel-rooms.62009.html', features: ['Basic accessible rooms', 'Near English Bay', 'Accessible areas'] },
      { name: 'Days Inn by Wyndham Vancouver', rating: 3, reservationUrl: 'https://www.wyndhamhotels.com/days-inn/vancouver-canada/days-inn-vancouver-downtown/overview', features: ['Budget accessible options', 'Basic features', 'Central location'] }
    ],
    detailedInfo: {
      transport: 'SkyTrain system is fully accessible with elevators and audio announcements. HandyDART provides door-to-door service.',
      accommodation: 'Hotels comply with accessibility standards, offering adapted rooms and accessible common areas.',
      attractions: 'Stanley Park, Capilano Suspension Bridge, and mountains offer accessible trails and viewing areas.',
      dining: 'Restaurants generally provide good accessibility, with many featuring step-free entrances and accessible washrooms.'
    }
  },
  {
    id: 7,
    name: 'Singapore',
    city: 'Singapore',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=400&fit=crop',
    description: 'Ultra-modern city-state with universal design principles and exceptional accessibility.',
    highlights: ['Barrier-free MRT', 'Accessible hawker centers', 'Universal design', 'Clear wayfinding'],
    emergencyNumbers: [
      { service: 'Emergency Services', number: '999', description: 'Police' },
      { service: 'Fire/Ambulance', number: '995', description: 'Fire department and ambulance' },
      { service: 'Tourist Helpline', number: '+65 6736 6622', description: 'Singapore Tourism Board' },
      { service: 'Transport Info', number: '+65 1800 225 5663', description: 'SMRT customer service' }
    ],
    quickTips: [
      { 
        text: 'Get an EZ-Link card for seamless accessible transport payments',
        link: 'https://www.ezlink.com.sg/'
      },
      { 
        text: 'Many hawker centers have accessible tables and pathways',
        link: 'https://www.visitsingapore.com/dining/local-dishes/accessible-hawker-centres/'
      },
      { 
        text: 'Download the MyTransport app for real-time accessibility info',
        link: 'https://www.mytransport.sg/'
      },
      { 
        text: 'Most malls have accessible parking and facilities on every level',
        link: 'https://www.accessibleplaces.sg/'
      },
      { 
        text: 'Air conditioning is strong - bring a light jacket for indoor spaces',
        link: 'https://www.visitsingapore.com/travel-guide-tips/accessibility/'
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: 'Gardens by the Bay', url: 'https://www.gardensbythebay.com.sg/en/visit/accessibility.html' },
      { name: 'Marina Bay Sands', url: 'https://www.marinabaysands.com/accessibility.html' },
      { name: 'Sentosa Island', url: 'https://www.sentosa.com.sg/en/plan-your-visit/accessibility/' },
      { name: 'Singapore Zoo', url: 'https://www.wrs.com.sg/en/singapore-zoo/visit/accessibility.html' },
      { name: 'ArtScience Museum', url: 'https://www.marinabaysands.com/museum/accessibility.html' }
    ],
    accessibleHotels: [
      { name: 'Marina Bay Sands', rating: 5, reservationUrl: 'https://www.marinabaysands.com/', features: ['Luxury accessible rooms', 'Universal design', 'Complete facilities'] },
      { name: 'Fullerton Hotel Singapore', rating: 5, reservationUrl: 'https://www.fullertonhotels.com/fullerton-hotel-singapore/', features: ['Accessible heritage rooms', 'Adapted bathrooms', 'Central location'] },
      { name: 'PARKROYAL COLLECTION Marina Bay', rating: 4, reservationUrl: 'https://www.panpacific.com/en/hotels-and-resorts/pr-marina-bay.html', features: ['Accessible rooms', 'Accessible facilities', 'Garden views'] },
      { name: 'Hotel Jen Tanglin', rating: 4, reservationUrl: 'https://www.shangri-la.com/en/singapore/hoteljenorchardsgateway/', features: ['Accessible modern rooms', 'Near amenities', 'Accessible features'] },
      { name: 'Ibis Singapore on Bencoolen', rating: 3, reservationUrl: 'https://all.accor.com/hotel/6657/index.en.shtml', features: ['Budget accessible rooms', 'Central location', 'Near MRT'] }
    ],
    detailedInfo: {
      transport: 'MRT system is completely barrier-free with platform screen doors, elevators, and tactile guidance systems.',
      accommodation: 'Hotels feature accessible design as standard, with barrier-free rooms and comprehensive accessibility features.',
      attractions: 'Gardens by the Bay, Marina Bay Sands, and Sentosa Island provide excellent wheelchair access throughout.',
      dining: 'Hawker centers and restaurants are designed with accessibility in mind, featuring step-free access and accessible facilities.'
    }
  },
  {
    id: 8,
    name: 'Sweden',
    city: 'Stockholm',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&h=400&fit=crop',
    description: 'Progressive accessibility standards with beautiful accessible architecture and nature access.',
    highlights: ['Accessible archipelago', 'Modern public transport', 'Inclusive design', 'Accessible museums'],
    emergencyNumbers: [
      { service: 'Emergency Services', number: '112', description: 'Police, Fire, Ambulance' },
      { service: 'Police (Non-Emergency)', number: '114 14', description: 'Police information line' },
      { service: 'Tourist Information', number: '+46 8 508 285 08', description: 'Visit Stockholm' },
      { service: 'Transport Info', number: '+46 8 600 10 00', description: 'SL customer service' }
    ],
    quickTips: [
      { 
        text: 'Download the SL app for accessible public transport planning',
        link: 'https://sl.se/en/info/accessibility/'
      },
      { 
        text: 'Many ferries to archipelago islands are wheelchair accessible',
        link: 'https://www.visitstockholm.com/accessibility/'
      },
      { 
        text: 'Museums often have free audio guides and tactile exhibits',
        link: 'https://www.visitstockholm.com/see-do/attractions/museums/'
      },
      { 
        text: 'Cashless society - ensure cards work for accessibility payments',
        link: 'https://www.visitsweden.com/what-to-do/sustainable-and-conscious-travel/accessible-travel/'
      },
      { 
        text: 'Summer has long daylight hours - plan for extended sightseeing',
        link: 'https://www.visitstockholm.com/guides/accessibility-guide/'
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: 'Vasa Museum', url: 'https://www.vasamuseet.se/en/visit/accessibility' },
      { name: 'ABBA Museum', url: 'https://abbamuseum.com/en/visit/accessibility' },
      { name: 'Royal Palace', url: 'https://www.royalcourt.se/royalpalaces/theroyalpalace/accessibility.4.html' },
      { name: 'Gamla Stan', url: 'https://www.visitstockholm.com/accessibility/' },
      { name: 'Skansen', url: 'https://www.skansen.se/en/visit/accessibility' }
    ],
    accessibleHotels: [
      { name: 'Grand Hôtel Stockholm', rating: 5, reservationUrl: 'https://www.grandhotel.se/en/', features: ['Luxury accessible suite', 'Roll-in shower', 'Historic building with modern access'] },
      { name: 'Hotel At Six', rating: 4, reservationUrl: 'https://hotelatsix.com/', features: ['Modern accessible rooms', 'Central location', 'Accessible design elements'] },
      { name: 'Scandic Continental', rating: 4, reservationUrl: 'https://www.scandichotels.com/hotels/sweden/stockholm/scandic-continental', features: ['Universal design standard', 'Accessibility expertise', 'Central location'] },
      { name: 'Motel L Hammarby Sjöstad', rating: 3, reservationUrl: 'https://motel-l.com/hammarby-sjostad/', features: ['Budget accessible rooms', 'Modern design', 'Accessible areas'] },
      { name: 'Generator Stockholm', rating: 3, reservationUrl: 'https://staygenerator.com/hostels/stockholm', features: ['Budget option', 'Basic accessibility', 'Youth-oriented'] }
    ],
    detailedInfo: {
      transport: 'Modern buses and trains with step-free access, and ferry services to the archipelago include accessibility features.',
      accommodation: 'Scandinavian design principles include accessibility, with hotels offering well-designed accessible rooms.',
      attractions: 'Vasa Museum, ABBA Museum, and Royal Palace provide excellent accessibility with multilingual information.',
      dining: 'Restaurants emphasize inclusive design with step-free entrances and accessible facilities as standard practice.'
    }
  }
];
