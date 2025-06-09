export interface EmergencyNumber {
  service: string;
  number: string;
  description: string;
}

export interface QuickTip {
  text: string;
  link: string;
}

export interface WheelchairService {
  name: string;
  type: 'repair' | 'purchase' | 'both';
  address: string;
  phone?: string;
  website?: string;
  description: string;
}

export interface AccessibleAttraction {
  name: string;
  url: string;
}

export interface AccessibleHotel {
  name: string;
  rating: number;
  features: string[];
  reservationUrl: string;
}

export interface Country {
  id: number;
  name: string;
  city: string;
  image: string;
  imageUrl: string;
  description: string;
  rating: number;
  highlights: string[];
  emergencyNumbers: EmergencyNumber[];
  quickTips: QuickTip[];
  wheelchairServices: WheelchairService[];
  wheelchairAccessibleAttractions: AccessibleAttraction[];
  accessibleHotels?: AccessibleHotel[];
  detailedInfo: {
    transport: string;
    accommodation: string;
    dining: string;
    healthcare: string;
    attractions: string;
  };
}

export const countries: Country[] = [
  {
    id: 1,
    name: "Netherlands",
    city: "Amsterdam",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Amsterdam is renowned for its exceptional accessibility infrastructure, making it one of the most wheelchair-friendly cities in Europe. The flat terrain, extensive public transportation network, and commitment to universal design create an ideal environment for travelers with mobility needs.",
    rating: 5,
    highlights: [
      "Extensive accessible public transport",
      "Flat, wheelchair-friendly streets",
      "Accessible canal boat tours",
      "Universal design in attractions"
    ],
    emergencyNumbers: [
      { service: "Emergency Services", number: "112", description: "Police, Fire, Medical emergencies" },
      { service: "Police Non-Emergency", number: "0900-8844", description: "Non-urgent police matters" },
      { service: "Tourist Helpline", number: "+31 20 702 6000", description: "Tourist assistance and information" },
      { service: "Accessibility Services", number: "+31 20 624 1111", description: "Mobility assistance and equipment" }
    ],
    quickTips: [
      { text: "Book accessible taxis in advance through TCA (Taxi Centrale Amsterdam)", link: "https://www.tcataxi.nl" },
      { text: "Many museums offer free entry for caregivers", link: "https://www.iamsterdam.com/en/plan-your-trip/practical-info/accessible-amsterdam" },
      { text: "Download the AccessibleGO app for real-time accessibility info", link: "https://www.accessiblego.com" }
    ],
    wheelchairServices: [
      {
        name: "RehaCare Amsterdam",
        type: "both",
        address: "Hoofddorpplein 1, 1059 CV Amsterdam",
        phone: "+31 20 123 4567",
        website: "https://rehacare-amsterdam.nl",
        description: "Full wheelchair sales and repair services with certified technicians"
      },
      {
        name: "Quick Wheelchair Repair",
        type: "repair",
        address: "Damrak 78, 1012 LP Amsterdam",
        phone: "+31 20 555 0123",
        description: "Emergency wheelchair repairs, same-day service available"
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: "Rijksmuseum", url: "https://www.rijksmuseum.nl/en/visit/accessibility" },
      { name: "Van Gogh Museum", url: "https://www.vangoghmuseum.nl/en/visit/accessibility" },
      { name: "Anne Frank House", url: "https://www.annefrank.org/en/museum/accessibility/" },
      { name: "Vondelpark", url: "https://www.amsterdam.nl/toerisme-vrije-tijd/parken/vondelpark/" },
      { name: "Keukenhof Gardens", url: "https://keukenhof.nl/en/practical-information/accessibility/" }
    ],
    accessibleHotels: [
      {
        name: "Hotel V Nesplein",
        rating: 4,
        features: ["Roll-in shower", "Accessible entrance", "Elevator access", "Accessible parking"],
        reservationUrl: "https://www.hotelv.nl"
      },
      {
        name: "Lloyd Hotel",
        rating: 4,
        features: ["Accessible rooms", "Roll-in shower", "Visual/hearing aids", "Accessible restaurant"],
        reservationUrl: "https://www.lloydhotel.com"
      }
    ],
    detailedInfo: {
      transport: "Amsterdam's public transport is highly accessible. All metro stations have lifts, most trams are low-floor, and buses are equipped with ramps. The GVB (public transport company) offers assistance for travelers with disabilities.",
      accommodation: "Many hotels offer accessible rooms. Book directly and specify your needs. Popular accessible hotels include Hotel V Nesplein, Lloyd Hotel, and Conscious Hotel.",
      dining: "Most restaurants in central Amsterdam have street-level access. Many have accessible restrooms. Consider calling ahead to confirm accessibility features.",
      healthcare: "Excellent healthcare system with accessible facilities. Amsterdam UMC and OLVG hospitals have specialized accessibility services.",
      attractions: "Amsterdam's major attractions are increasingly accessible. The Rijksmuseum and Van Gogh Museum are fully wheelchair accessible, while the Anne Frank House offers special accessibility tours that must be booked in advance."
    }
  },
  {
    id: 2,
    name: "Japan",
    city: "Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Tokyo has made significant accessibility improvements, especially since the Paralympics. Modern infrastructure, helpful culture, and innovative solutions make it increasingly wheelchair-friendly.",
    rating: 4,
    highlights: [
      "Excellent accessible train system",
      "Helpful station staff assistance",
      "Modern accessible facilities",
      "Cultural respect for accessibility needs"
    ],
    emergencyNumbers: [
      { service: "Emergency Services", number: "110", description: "Police emergencies" },
      { service: "Fire/Medical Emergency", number: "119", description: "Fire department and ambulance" },
      { service: "Tourist Hotline", number: "050-3816-2787", description: "24/7 tourist assistance in English" },
      { service: "Accessibility Support", number: "+81 3-5321-1111", description: "Tokyo Metro accessibility services" }
    ],
    quickTips: [
      { text: "JR Pass holders get priority assistance at stations", link: "https://www.jrpass.com/accessibility" },
      { text: "Many temples have accessible entrances - ask at the main gate", link: "https://www.japan-guide.com/e/e2025.html" },
      { text: "Use Google Translate app with camera for sign translation", link: "https://translate.google.com" }
    ],
    wheelchairServices: [
      {
        name: "Tokyo Wheelchair Center",
        type: "both",
        address: "1-2-3 Shibuya, Shibuya-ku, Tokyo 150-0002",
        phone: "+81 3 1234 5678",
        website: "https://tokyo-wheelchair.jp",
        description: "Leading wheelchair provider with English-speaking staff"
      },
      {
        name: "Haneda Airport Mobility Services",
        type: "repair",
        address: "2-6-5 Hanedakuko, Ota City, Tokyo 144-0041",
        phone: "+81 3 5757 8111",
        description: "Airport-based wheelchair repair and rental services"
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: "Tokyo Skytree", url: "https://www.tokyo-skytree.jp/en/enjoy/barrier-free/" },
      { name: "Senso-ji Temple", url: "https://www.senso-ji.jp/english/" },
      { name: "Tokyo National Museum", url: "https://www.tnm.jp/modules/r_free_page/index.php?id=113" },
      { name: "Ueno Park", url: "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/index_top.html" },
      { name: "TeamLab Borderless", url: "https://borderless.teamlab.art/accessibility/" }
    ],
    accessibleHotels: [
      {
        name: "Park Hyatt Tokyo",
        rating: 5,
        features: ["Accessible rooms", "Roll-in shower", "Accessible restaurant", "City views"],
        reservationUrl: "https://www.hyatt.com"
      },
      {
        name: "Cerulean Tower Tokyu Hotel",
        rating: 4,
        features: ["Barrier-free design", "Accessible bathrooms", "Station access", "English support"],
        reservationUrl: "https://www.ceruleantower-hotel.com"
      }
    ],
    detailedInfo: {
      transport: "Tokyo's train system is highly accessible with platform lifts and helpful staff. Download the 'Accessible Tokyo' app for real-time information on elevator status and accessible routes.",
      accommodation: "Many hotels offer accessible rooms meeting international standards. Book through official websites and specify accessibility needs in advance.",
      dining: "Traditional restaurants may have steps, but many modern establishments are accessible. Department store restaurant floors typically have good accessibility.",
      healthcare: "World-class healthcare with many English-speaking doctors. Tokyo hospitals are well-equipped for international patients with accessibility needs.",
      attractions: "Tokyo's major attractions have made significant accessibility improvements since the Paralympics. Most modern facilities are fully accessible, while traditional sites increasingly offer accessible alternatives."
    }
  },
  {
    id: 3,
    name: "Australia",
    city: "Sydney",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Sydney leads in accessibility standards with comprehensive infrastructure and strong disability rights legislation. The city offers excellent accessible experiences from beaches to cultural attractions.",
    rating: 5,
    highlights: [
      "Comprehensive accessibility legislation",
      "Accessible beach facilities",
      "Excellent public transport",
      "Strong disability advocacy"
    ],
    emergencyNumbers: [
      { service: "Emergency Services", number: "000", description: "Police, Fire, Ambulance" },
      { service: "SES Emergency", number: "132 500", description: "State Emergency Service" },
      { service: "Tourist Information", number: "+61 2 9240 8788", description: "Sydney visitor information" },
      { service: "Accessibility Services", number: "+61 2 8202 2200", description: "Transport for NSW accessibility" }
    ],
    quickTips: [
      { text: "Beach wheelchairs available for free at most major beaches", link: "https://www.sydney.com/things-to-do/beach-life/accessible-beaches" },
      { text: "Companion Card provides free entry for carers at many attractions", link: "https://www.companioncard.org.au" },
      { text: "Download the NextThere app for accessible route planning", link: "https://www.nextthere.com" }
    ],
    wheelchairServices: [
      {
        name: "Sydney Mobility Solutions",
        type: "both",
        address: "123 George Street, Sydney NSW 2000",
        phone: "+61 2 1234 5678",
        website: "https://sydneymobility.com.au",
        description: "Comprehensive wheelchair services with home visits available"
      },
      {
        name: "Wheelchair Hire Sydney",
        type: "purchase",
        address: "456 Pitt Street, Sydney NSW 2000",
        phone: "+61 2 2345 6789",
        description: "Wheelchair rental and sales for tourists and locals"
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: "Sydney Opera House", url: "https://www.sydneyoperahouse.com/visit-us/accessibility" },
      { name: "Sydney Harbour Bridge", url: "https://www.bridgeclimb.com/accessibility/" },
      { name: "Bondi Beach", url: "https://www.waverley.nsw.gov.au/recreation/beaches/accessibility" },
      { name: "Royal Botanic Gardens", url: "https://www.botanicgardens.org.au/sydney/visit/accessibility" },
      { name: "Australian Museum", url: "https://australian.museum/visit/accessibility/" }
    ],
    accessibleHotels: [
      {
        name: "Park Hyatt Sydney",
        rating: 5,
        features: ["Harbour views", "Accessible rooms", "Roll-in shower", "Accessible restaurant"],
        reservationUrl: "https://www.hyatt.com"
      },
      {
        name: "Shangri-La Hotel Sydney",
        rating: 5,
        features: ["Accessible design", "Harbour views", "Accessible facilities", "Concierge service"],
        reservationUrl: "https://www.shangri-la.com"
      }
    ],
    detailedInfo: {
      transport: "Sydney's public transport is highly accessible with tactile indicators, audio announcements, and priority seating. All buses and most trains are wheelchair accessible.",
      accommodation: "Australian accommodation standards require accessibility features. Many hotels exceed minimum requirements with specialized accessible rooms.",
      dining: "Most restaurants comply with accessibility standards. Outdoor dining areas are common and generally accessible.",
      healthcare: "Universal healthcare system with excellent accessibility standards. Public hospitals are required to be fully accessible.",
      attractions: "Sydney's attractions lead the world in accessibility standards. From the Opera House to Bondi Beach, most major sites offer comprehensive accessibility features."
    }
  },
  {
    id: 4,
    name: "United Kingdom",
    city: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "London offers extensive accessibility with historic charm. While some older areas present challenges, the city has invested heavily in accessible infrastructure and services.",
    rating: 4,
    highlights: [
      "Comprehensive disability legislation",
      "Accessible black cabs",
      "Free access for carers at attractions",
      "Historic sites with modern accessibility"
    ],
    emergencyNumbers: [
      { service: "Emergency Services", number: "999", description: "Police, Fire, Ambulance, Coast Guard" },
      { service: "Non-Emergency Police", number: "101", description: "Non-urgent police matters" },
      { service: "Tourist Information", number: "+44 20 7332 1456", description: "City of London tourist information" },
      { service: "Transport Accessibility", number: "+44 343 222 1234", description: "TfL accessibility services" }
    ],
    quickTips: [
      { text: "All black cabs are wheelchair accessible by law", link: "https://tfl.gov.uk/modes/taxis-and-minicabs/accessibility" },
      { text: "Many attractions offer free entry for carers with Access Card", link: "https://www.accesscard.org.uk" },
      { text: "Download Citymapper for accessible route planning", link: "https://citymapper.com" }
    ],
    wheelchairServices: [
      {
        name: "London Wheelchair Company",
        type: "both",
        address: "10 Oxford Street, London W1C 1DX",
        phone: "+44 20 1234 5678",
        website: "https://londonwheelchair.co.uk",
        description: "Premier wheelchair services in central London"
      },
      {
        name: "Mobility Equipment London",
        type: "repair",
        address: "25 King's Cross Road, London WC1X 9DD",
        phone: "+44 20 2345 6789",
        description: "Quick wheelchair repairs and maintenance services"
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: "British Museum", url: "https://www.britishmuseum.org/visit/accessibility" },
      { name: "London Eye", url: "https://www.londoneye.com/plan-your-visit/accessibility/" },
      { name: "Tower of London", url: "https://www.hrp.org.uk/tower-of-london/visit/accessibility/" },
      { name: "Tate Modern", url: "https://www.tate.org.uk/visit/tate-modern/accessibility" },
      { name: "Hyde Park", url: "https://www.royalparks.org.uk/parks/hyde-park/visitor-information/accessibility" }
    ],
    accessibleHotels: [
      {
        name: "The Savoy",
        rating: 5,
        features: ["Historic luxury", "Accessible rooms", "Thames views", "Accessible restaurant"],
        reservationUrl: "https://www.thesavoylondon.com"
      },
      {
        name: "Premier Inn London County Hall",
        rating: 4,
        features: ["Modern accessible design", "Thames location", "Accessible facilities", "Budget-friendly"],
        reservationUrl: "https://www.premierinn.com"
      }
    ],
    detailedInfo: {
      transport: "London's transport is increasingly accessible. Most buses are accessible, and step-free tube stations are expanding. Check TfL's accessibility maps before traveling.",
      accommodation: "Hotels must comply with accessibility regulations. Many historic hotels have been retrofitted with modern accessibility features.",
      dining: "Most restaurants have step-free access, though some historic pubs may have limitations. Call ahead to confirm accessibility.",
      healthcare: "NHS provides universal healthcare with accessible facilities. Private healthcare options are also available with excellent accessibility standards.",
      attractions: "London's attractions range from fully accessible modern venues to historic sites with adapted access. Most major museums and galleries offer excellent accessibility features."
    }
  },
  {
    id: 5,
    name: "Germany",
    city: "Berlin",
    image: "https://images.unsplash.com/photo-1587330979470-3346b2efb4c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageUrl: "https://images.unsplash.com/photo-1587330979470-3346b2efb4c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Berlin combines historical significance with modern accessibility standards. The city has invested heavily in barrier-free infrastructure and offers excellent support for travelers with disabilities.",
    rating: 4,
    highlights: [
      "Extensive barrier-free infrastructure",
      "Accessible historical sites",
      "Excellent public transportation",
      "Strong accessibility advocacy"
    ],
    emergencyNumbers: [
      { service: "Emergency Services", number: "112", description: "Police, Fire, Medical emergencies" },
      { service: "Police Non-Emergency", number: "030 4664 4664", description: "Berlin Police non-urgent matters" },
      { service: "Tourist Information", number: "+49 30 25 00 25", description: "Berlin tourist information" },
      { service: "Mobility Services", number: "+49 30 19449", description: "BVG accessibility assistance" }
    ],
    quickTips: [
      { text: "Most U-Bahn and S-Bahn stations have elevators", link: "https://www.bvg.de/en/connections/barrier-free" },
      { text: "Museum Pass includes free entry for companions", link: "https://www.museumspass-berlin.de" },
      { text: "Download the BVG app for real-time accessibility information", link: "https://www.bvg.de/en/subscriptions-and-tickets/bvg-app" }
    ],
    wheelchairServices: [
      {
        name: "Berlin Rollstuhl Zentrum",
        type: "both",
        address: "Unter den Linden 1, 10117 Berlin",
        phone: "+49 30 1234 5678",
        website: "https://rollstuhl-berlin.de",
        description: "Germany's leading wheelchair specialist"
      },
      {
        name: "Reha-Technik Berlin",
        type: "repair",
        address: "Friedrichstraße 95, 10117 Berlin",
        phone: "+49 30 2345 6789",
        description: "Professional wheelchair repair and maintenance"
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: "Brandenburg Gate", url: "https://www.berlin.de/en/attractions-and-sights/3560266-3104052-brandenburg-gate.en.html" },
      { name: "Berlin Wall Memorial", url: "https://www.berliner-mauer-gedenkstaette.de/en/barrier-free-628.html" },
      { name: "Museum Island", url: "https://www.smb.museum/en/museums-institutions/museumsinsel/" },
      { name: "Reichstag Building", url: "https://www.bundestag.de/en/visitthebundestag" },
      { name: "Tiergarten", url: "https://www.berlin.de/en/parks-and-gardens/" }
    ],
    accessibleHotels: [
      {
        name: "Hotel Adlon Kempinski",
        rating: 5,
        features: ["Luxury accessible rooms", "Historic location", "Brandenburg Gate views", "Accessible spa"],
        reservationUrl: "https://www.kempinski.com"
      },
      {
        name: "Maritim Hotel Berlin",
        rating: 4,
        features: ["Modern accessible design", "Central location", "Accessible conference facilities", "Roll-in showers"],
        reservationUrl: "https://www.maritim.de"
      }
    ],
    detailedInfo: {
      transport: "Berlin's public transport is highly accessible with most stations having elevators. The BVG website provides detailed accessibility information for each station.",
      accommodation: "German accessibility standards are high. Many hotels offer specialized accessible rooms with roll-in showers and other features.",
      dining: "Most restaurants comply with accessibility standards. Beer gardens and outdoor seating areas are typically accessible.",
      healthcare: "Excellent healthcare system with accessible facilities. Many doctors speak English and hospitals are well-equipped for international patients.",
      attractions: "Berlin's historical sites have been thoughtfully adapted for accessibility while preserving their significance. Modern attractions are designed with universal access principles."
    }
  },
  {
    id: 6,
    name: "Canada",
    city: "Vancouver",
    image: "https://images.unsplash.com/photo-1549924441-4a10edcd5b0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageUrl: "https://images.unsplash.com/photo-1549924441-4a10edcd5b0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Vancouver excels in accessibility with stunning natural beauty and comprehensive inclusive design. The city offers barrier-free access to both urban attractions and natural wonders.",
    rating: 5,
    highlights: [
      "Comprehensive accessibility legislation",
      "Accessible outdoor activities",
      "Inclusive public transportation",
      "Strong disability rights framework"
    ],
    emergencyNumbers: [
      { service: "Emergency Services", number: "911", description: "Police, Fire, Medical emergencies" },
      { service: "Non-Emergency Police", number: "604 717 3321", description: "Vancouver Police non-urgent" },
      { service: "Tourism Vancouver", number: "+1 604 683 2000", description: "Tourist information and assistance" },
      { service: "HandyDART", number: "+1 604 575 6600", description: "Accessible transit service" }
    ],
    quickTips: [
      { text: "HandyDART provides door-to-door accessible transit", link: "https://www.translink.ca/rider-guide/accessible-transit" },
      { text: "Many parks offer accessible trails and facilities", link: "https://vancouver.ca/parks-recreation-culture/accessibility.aspx" },
      { text: "Companion cards available for free caregiver admission", link: "https://www.disabilityalliancebc.org/companion-card" }
    ],
    wheelchairServices: [
      {
        name: "Vancouver Wheelchair Solutions",
        type: "both",
        address: "1234 Robson Street, Vancouver BC V6E 1B5",
        phone: "+1 604 123 4567",
        website: "https://vancouverwheelchair.ca",
        description: "Complete wheelchair services with mountain-ready options"
      },
      {
        name: "Mobility Plus Vancouver",
        type: "purchase",
        address: "5678 Granville Street, Vancouver BC V6M 3A2",
        phone: "+1 604 234 5678",
        description: "Wheelchair sales and rental for outdoor adventures"
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: "Stanley Park Seawall", url: "https://vancouver.ca/parks-recreation-culture/seawall.aspx" },
      { name: "Capilano Suspension Bridge", url: "https://www.capbridge.com/plan-your-visit/accessibility/" },
      { name: "Science World", url: "https://www.scienceworld.ca/visit/accessibility/" },
      { name: "Vancouver Aquarium", url: "https://www.vanaqua.org/visit/accessibility" },
      { name: "Queen Elizabeth Park", url: "https://vancouver.ca/parks-recreation-culture/queen-elizabeth-park.aspx" }
    ],
    accessibleHotels: [
      {
        name: "Fairmont Hotel Vancouver",
        rating: 5,
        features: ["Historic luxury", "Accessible rooms", "Downtown location", "Accessible dining"],
        reservationUrl: "https://www.fairmont.com"
      },
      {
        name: "Pan Pacific Vancouver",
        rating: 5,
        features: ["Waterfront location", "Accessible design", "Mountain views", "Accessible spa"],
        reservationUrl: "https://www.panpacific.com"
      }
    ],
    detailedInfo: {
      transport: "Vancouver's SkyTrain system is fully accessible. Buses have wheelchair lifts and priority seating. HandyDART provides specialized door-to-door service.",
      accommodation: "Canadian accessibility standards ensure most hotels have accessible rooms. Many offer scenic accessible rooms with mountain or ocean views.",
      dining: "Restaurants must comply with accessibility codes. The diverse food scene includes many accessible establishments with outdoor seating.",
      healthcare: "Universal healthcare system with accessible facilities. Walk-in clinics and hospitals provide excellent care for visitors.",
      attractions: "Vancouver combines urban accessibility with nature access. From the fully accessible Stanley Park Seawall to mountain viewpoints, the city offers barrier-free experiences in stunning natural settings."
    }
  },
  {
    id: 7,
    name: "Singapore",
    city: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Singapore is a model of accessibility in Asia with modern infrastructure, comprehensive planning, and excellent support systems for travelers with disabilities.",
    rating: 5,
    highlights: [
      "World-class accessible infrastructure",
      "Comprehensive accessibility planning",
      "Excellent healthcare system",
      "Multilingual accessibility support"
    ],
    emergencyNumbers: [
      { service: "Emergency Services", number: "999", description: "Police emergencies" },
      { service: "Fire/Ambulance", number: "995", description: "Fire department and medical emergencies" },
      { service: "Tourist Helpline", number: "+65 6736 2000", description: "Singapore Tourism Board assistance" },
      { service: "Accessibility Services", number: "+65 1800 225 5663", description: "Public transport accessibility" }
    ],
    quickTips: [
      { text: "All MRT stations are wheelchair accessible with platform screen doors", link: "https://www.smrt.com.sg/Journey-with-Us/Accessibility" },
      { text: "Many hawker centers have accessible seating areas", link: "https://www.nea.gov.sg/our-services/hawker-management/guidelines-for-hawkers" },
      { text: "Free wheelchair loans available at major attractions", link: "https://www.visitsingapore.com/travel-guide-tips/accessibility" }
    ],
    wheelchairServices: [
      {
        name: "Singapore Wheelchair Hub",
        type: "both",
        address: "1 Marina Bay Sands, Singapore 018956",
        phone: "+65 6123 4567",
        website: "https://wheelchairhub.sg",
        description: "Asia-Pacific wheelchair headquarters"
      },
      {
        name: "Changi Mobility Services",
        type: "repair",
        address: "78 Airport Boulevard, Singapore 819666",
        phone: "+65 6345 6789",
        description: "Airport wheelchair emergency services and repairs"
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: "Gardens by the Bay", url: "https://www.gardensbythebay.com.sg/en/visit/visitor-info/accessibility.html" },
      { name: "Marina Bay Sands SkyPark", url: "https://www.marinabaysands.com/sands-skypark/accessibility.html" },
      { name: "Singapore Zoo", url: "https://www.wrs.com.sg/en/singapore-zoo/visitor-info/accessibility.html" },
      { name: "Universal Studios Singapore", url: "https://www.rwsentosa.com/en/attractions/universal-studios-singapore/accessibility" },
      { name: "Merlion Park", url: "https://www.stb.gov.sg/content/stb/en/travel-guide-tips/accessibility.html" }
    ],
    accessibleHotels: [
      {
        name: "Marina Bay Sands",
        rating: 5,
        features: ["Iconic design", "Accessible rooms", "SkyPark access", "Accessible amenities"],
        reservationUrl: "https://www.marinabaysands.com"
      },
      {
        name: "Shangri-La Hotel Singapore",
        rating: 5,
        features: ["Garden setting", "Accessible design", "Central location", "Accessible spa"],
        reservationUrl: "https://www.shangri-la.com"
      }
    ],
    detailedInfo: {
      transport: "Singapore's MRT system is fully accessible with lifts at every station. Buses have wheelchair ramps and priority areas. Grab offers wheelchair-accessible vehicles.",
      accommodation: "All hotels must meet accessibility standards. Many luxury hotels offer premium accessible rooms with harbor or garden views.",
      dining: "Most restaurants and food courts are accessible. Hawker centers increasingly feature accessible facilities and seating.",
      healthcare: "World-class healthcare system with excellent accessibility. Many doctors speak English and facilities meet international standards.",
      attractions: "Singapore sets the gold standard for accessible tourism in Asia. From Gardens by the Bay to Universal Studios, attractions are designed with comprehensive accessibility features."
    }
  },
  {
    id: 8,
    name: "Sweden",
    city: "Stockholm",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imageUrl: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Stockholm exemplifies Scandinavian accessibility with comprehensive universal design, excellent public services, and a strong commitment to inclusion and equality.",
    rating: 5,
    highlights: [
      "Universal design principles",
      "Excellent accessibility legislation",
      "Comprehensive public services",
      "Strong social inclusion values"
    ],
    emergencyNumbers: [
      { service: "Emergency Services", number: "112", description: "Police, Fire, Medical emergencies" },
      { service: "Healthcare Direct", number: "1177", description: "Medical advice and healthcare information" },
      { service: "Tourist Information", number: "+46 8 508 285 08", description: "Stockholm visitor information" },
      { service: "SL Accessibility", number: "+46 8 600 10 00", description: "Public transport accessibility services" }
    ],
    quickTips: [
      { text: "Most public transport is accessible with real-time information", link: "https://sl.se/en/accessibility" },
      { text: "Many museums offer free entry for personal assistants", link: "https://www.stockholm.se/en/accessibility" },
      { text: "Download the SL app for accessible route planning", link: "https://sl.se/en/app" }
    ],
    wheelchairServices: [
      {
        name: "Stockholm Rullstol Center",
        type: "both",
        address: "Drottninggatan 12, 111 51 Stockholm",
        phone: "+46 8 123 4567",
        website: "https://rullstol-stockholm.se",
        description: "Scandinavian design meets wheelchair innovation"
      },
      {
        name: "Hjälpmedel Stockholm",
        type: "repair",
        address: "Vasagatan 22, 111 20 Stockholm",
        phone: "+46 8 234 5678",
        description: "Municipal wheelchair repair and maintenance services"
      }
    ],
    wheelchairAccessibleAttractions: [
      { name: "Vasa Museum", url: "https://www.vasamuseet.se/en/visit/accessibility" },
      { name: "ABBA Museum", url: "https://abbamuseum.com/en/visit/accessibility/" },
      { name: "Gamla Stan", url: "https://www.stockholm.se/en/accessibility" },
      { name: "Royal Palace", url: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/the-royal-palace/accessibility.html" },
      { name: "Skansen Open Air Museum", url: "https://www.skansen.se/en/node/1643" }
    ],
    accessibleHotels: [
      {
        name: "Grand Hôtel Stockholm",
        rating: 5,
        features: ["Waterfront luxury", "Accessible rooms", "Historic elegance", "Accessible dining"],
        reservationUrl: "https://www.grandhotel.se"
      },
      {
        name: "Clarion Hotel Sign",
        rating: 4,
        features: ["Modern design", "Accessible facilities", "Central location", "Sustainable features"],
        reservationUrl: "https://www.nordicchoicehotels.com"
      }
    ],
    detailedInfo: {
      transport: "Stockholm's public transport is highly accessible with announcements in multiple languages. All buses and most metro stations have wheelchair access.",
      accommodation: "Swedish accessibility standards are among the world's highest. Hotels offer excellent accessible facilities with Nordic design elements.",
      dining: "Restaurants must comply with strict accessibility requirements. Many feature accessible outdoor seating during summer months.",
      healthcare: "Universal healthcare with excellent accessibility. English is widely spoken and facilities are designed with universal access principles.",
      attractions: "Stockholm's attractions showcase Scandinavian accessibility excellence. From the Vasa Museum to Gamla Stan, the city demonstrates how historic preservation and accessibility can coexist beautifully."
    }
  }
];
