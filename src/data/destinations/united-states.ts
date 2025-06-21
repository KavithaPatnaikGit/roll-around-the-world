import { Country } from '../types';

export const unitedStates: Country = {
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
          bookingUrl: "https://www.statueofliberty.org/",
          tip: "Reserve accessible ferry tickets in advance and arrive 30 minutes early for priority boarding assistance"
        },
        {
          name: "Empire State Building",
          url: "https://www.esbnyc.com/visit/accessibility",
          description: "Art Deco skyscraper with full accessibility to observation decks",
          rating: 5,
          bookingUrl: "https://www.esbnyc.com/buy-tickets",
          tip: "Express elevators to the 86th floor are fully accessible, and staff can assist with transferring to observation deck areas"
        },
        {
          name: "Metropolitan Museum of Art",
          url: "https://www.metmuseum.org/visit/accessibility",
          description: "World-renowned museum with comprehensive accessibility services and programs",
          rating: 5,
          bookingUrl: "https://www.metmuseum.org/visit",
          tip: "Audio description tours and tactile experiences are available by appointment, plus all galleries have accessible entrances"
        },
        {
          name: "Central Park",
          url: "https://www.centralparknyc.org/visit/accessibility",
          description: "Iconic urban park with accessible paths, restrooms, and attractions",
          rating: 5,
          tip: "The Central Park Conservancy provides detailed accessibility maps showing paved paths and accessible restroom locations"
        },
        {
          name: "High Line",
          url: "https://www.thehighline.org/visit/accessibility/",
          description: "Elevated park with elevator access and accessible walkways throughout",
          rating: 5,
          tip: "All elevator access points have staff assistance available, and the entire 1.45-mile walkway is fully accessible"
        },
        {
          name: "9/11 Memorial & Museum",
          url: "https://www.911memorial.org/visit/accessibility",
          description: "Moving memorial and museum with full accessibility features",
          rating: 5,
          bookingUrl: "https://www.911memorial.org/visit",
          tip: "Timed-entry tickets include extended time for visitors with disabilities, and audio guides have visual descriptions"
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
          rating: 5,
          tip: "The east sidewalk is fully accessible with multiple viewing areas, and accessible parking is available at the Welcome Center"
        },
        {
          name: "Alcatraz Island",
          url: "https://www.nps.gov/alca/planyourvisit/accessibility.htm",
          description: "Historic prison island with accessible ferry and audio tour",
          rating: 4,
          bookingUrl: "https://www.alcatrazcruises.com/",
          tip: "The cellhouse audio tour includes tactile exhibits, and accessible trams transport visitors up the island's steep terrain"
        },
        {
          name: "Fisherman's Wharf & Pier 39",
          url: "https://www.pier39.com/visit/accessibility/",
          description: "Popular waterfront destination with accessible shops and attractions",
          rating: 5,
          tip: "All levels are accessible via elevator, and sea lion viewing areas have lowered barriers for wheelchair users"
        },
        {
          name: "San Francisco Museum of Modern Art",
          url: "https://www.sfmoma.org/visit/accessibility/",
          description: "World-class modern art museum with comprehensive accessibility features",
          rating: 5,
          bookingUrl: "https://www.sfmoma.org/visit/",
          tip: "Free wheelchairs available at coat check, and all floors accessible via spacious elevators with audio announcements"
        },
        {
          name: "Lombard Street",
          url: "https://www.sftravel.com/article/accessibility-san-francisco",
          description: "Famous winding street with accessible viewing areas at top and bottom",
          rating: 3,
          tip: "Access viewing areas via Russian Hill summit or Hyde Street bottom - avoid the steep curves themselves"
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
          bookingUrl: "https://disneyworld.disney.go.com/tickets/",
          tip: "Pre-register for Disability Access Service (DAS) online 30 days before your visit to skip the lines at Guest Relations"
        },
        {
          name: "Universal Orlando Resort",
          url: "https://www.universalorlando.com/web/en/us/plan-your-visit/accessibility",
          description: "Two theme parks with comprehensive accessibility services and adaptive attractions",
          rating: 5,
          bookingUrl: "https://www.universalorlando.com/web/en/us/tickets",
          tip: "Attraction Assistance Pass (AAP) available at Guest Services provides equivalent access to Express Passes for qualifying guests"
        },
        {
          name: "SeaWorld Orlando",
          url: "https://seaworld.com/orlando/plan-your-visit/accessibility/",
          description: "Marine life theme park with accessible shows and attractions",
          rating: 4,
          bookingUrl: "https://seaworld.com/orlando/tickets/",
          tip: "Wheelchair accessible seating at all shows with companion seating, and animal encounter experiences adapted for all abilities"
        },
        {
          name: "ICON Park",
          url: "https://iconparkorlando.com/accessibility/",
          description: "Entertainment complex with accessible attractions including The Wheel",
          rating: 4,
          bookingUrl: "https://iconparkorlando.com/",
          tip: "The Wheel observation cabins are fully accessible with ramped boarding, and Madame Tussauds has tactile experiences"
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
    },
    {
      id: 64,
      name: "United States",
      city: "Boston",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&h=1600&q=80",
      rating: 4,
      description: "Boston combines rich American history with modern accessibility features. Known as the 'Walking City,' Boston has adapted its historic charm with comprehensive accessibility infrastructure, making iconic sites like the Freedom Trail, world-renowned museums, and prestigious universities accessible to all visitors.",
      highlights: [
        "Accessible Freedom Trail with alternative routes",
        "MBTA public transportation with accessibility features",
        "Wheelchair-friendly Fenway Park tours",
        "Comprehensive museum accessibility programs",
        "Accessible harbor cruises and waterfront attractions"
      ],
      emergencyNumbers: [
        { service: "Police", number: "911", description: "Emergency police assistance" },
        { service: "Ambulance", number: "911", description: "Emergency medical services" },
        { service: "Fire", number: "911", description: "Fire department emergency response" }
      ],
      wheelchairAccessibleAttractions: [
        {
          name: "Freedom Trail",
          url: "https://www.thefreedomtrail.org/accessibility",
          description: "Historic walking trail with accessible routes and transportation options to key sites",
          rating: 4,
          tip: "Download the Freedom Trail app for accessible route maps that avoid cobblestone sections"
        },
        {
          name: "Museum of Fine Arts Boston",
          url: "https://www.mfa.org/visit/accessibility",
          description: "World-class art museum with comprehensive accessibility services and programs",
          rating: 5,
          bookingUrl: "https://www.mfa.org/tickets",
          tip: "Free wheelchair loans available at the information desk - no reservation needed"
        },
        {
          name: "Boston Tea Party Ships & Museum",
          url: "https://www.bostonteapartyship.com/accessibility",
          description: "Interactive historical experience with accessible ships and exhibits",
          rating: 4,
          bookingUrl: "https://www.bostonteapartyship.com/tickets",
          tip: "Call ahead to arrange boarding assistance for the replica ships via accessible gangway"
        },
        {
          name: "Fenway Park",
          url: "https://www.mlb.com/redsox/ballpark/accessibility",
          description: "Historic baseball stadium with accessible seating and tours",
          rating: 4,
          bookingUrl: "https://www.mlb.com/redsox/tickets",
          tip: "Accessible seating offers great views from multiple price levels - book early for best selection"
        },
        {
          name: "Boston Harbor Islands",
          url: "https://www.bostonharborislands.org/accessibility",
          description: "Scenic islands accessible via ferry with accessible trails and facilities",
          rating: 4,
          bookingUrl: "https://www.bostonharborislands.org/ferry-schedule",
          tip: "Spectacle Island has the most accessible trails and facilities including accessible restrooms"
        },
        {
          name: "Harvard University & MIT",
          url: "https://www.harvard.edu/accessibility",
          description: "Prestigious universities offering accessible campus tours and facilities",
          rating: 4,
          tip: "Request accessible campus tours 48 hours in advance for the best guided experience"
        },
        {
          name: "Boston Duck Tours",
          url: "https://www.bostonducktours.com/accessibility/",
          description: "Unique amphibious vehicle tours of Boston with wheelchair accessible duck boats and comprehensive accessibility services",
          rating: 5,
          bookingUrl: "https://www.bostonducktours.com/tickets",
          tip: "Board at Prudential Center location for easiest wheelchair access and covered waiting area"
        },
        {
          name: "Super Duck Tours Boston",
          url: "https://www.superducktours.com/accessibility",
          description: "Alternative duck tour experience with fully accessible vehicles and audio descriptions for visually impaired visitors",
          rating: 4,
          bookingUrl: "https://www.superducktours.com/book-now",
          tip: "Offers dedicated audio description headsets for visually impaired guests at no extra charge"
        }
      ],
      wheelchairServices: [
        {
          name: "Boston Mobility Solutions",
          type: "both",
          address: "123 Commonwealth Ave, Boston, MA 02116",
          phone: "+1 617-555-0123",
          website: "https://www.bostonmobility.com",
          description: "Complete wheelchair rental and repair services for tourists and residents"
        },
        {
          name: "New England Accessibility Equipment",
          type: "both",
          address: "456 Boylston St, Boston, MA 02116",
          phone: "+1 617-555-0456",
          website: "https://www.neaccessibility.com",
          description: "Specialized accessibility equipment and historic site navigation aids"
        }
      ],
      quickTips: [
        {
          text: "MBTA offers accessible subway, bus, and trolley services - use the MBTA app for real-time accessibility updates",
          link: "https://www.mbta.com/accessibility"
        },
        {
          text: "Freedom Trail offers accessible alternatives to cobblestone sections - download the accessible route map",
          link: "https://www.thefreedomtrail.org/accessibility"
        },
        {
          text: "Boston Common and Public Garden have accessible paths and the Swan Boats offer wheelchair boarding",
          link: "https://www.boston.gov/parks/boston-common"
        },
        {
          text: "Duck Tours offer wheelchair accessible vehicles - book in advance to ensure availability",
          link: "https://www.bostonducktours.com/accessibility/"
        }
      ],
      detailedInfo: {
        accommodation: "Boston offers accessible hotels ranging from historic properties with modern accessibility retrofits to contemporary hotels with full ADA compliance.",
        attractions: "Historic sites and modern attractions with creative accessibility solutions, including alternative routes for cobblestone areas, accessible museum programs, and wheelchair-accessible duck tours.",
        dining: "Diverse culinary scene featuring accessible restaurants from traditional New England seafood to innovative cuisine, all meeting ADA standards.",
        transport: "Comprehensive accessible public transportation including subway, buses, accessible taxis, and specialized services for historic site navigation."
      }
    }
  ]
};
