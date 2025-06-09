

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accessibility, Star, MapPin, ArrowLeft, Train, Building, Utensils, MapPin as LocationIcon, ExternalLink } from 'lucide-react';
import TravelerExperienceForm from '@/components/TravelerExperienceForm';
import TravelerExperiencesList from '@/components/TravelerExperiencesList';

interface TravelerExperience {
  id: string;
  name: string;
  email: string;
  shareContactPublic: boolean;
  experience: string;
  blogPosts: string;
  photos: File[];
  countryId: number;
  submittedAt: string;
}

interface AccessibleHotel {
  name: string;
  rating: 3 | 4 | 5;
  reservationUrl: string;
  features: string[];
}

const CountryDetail = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<TravelerExperience[]>([]);

  // Load experiences from localStorage on component mount
  useEffect(() => {
    const storedExperiences = localStorage.getItem('travelerExperiences');
    if (storedExperiences) {
      const allExperiences = JSON.parse(storedExperiences);
      const countryExperiences = allExperiences.filter(
        (exp: TravelerExperience) => exp.countryId === parseInt(countryId || '0')
      );
      setExperiences(countryExperiences);
    }
  }, [countryId]);

  const handleExperienceSubmit = (experience: TravelerExperience) => {
    // Get existing experiences from localStorage
    const storedExperiences = localStorage.getItem('travelerExperiences');
    const allExperiences = storedExperiences ? JSON.parse(storedExperiences) : [];
    
    // Add new experience
    const updatedExperiences = [...allExperiences, experience];
    localStorage.setItem('travelerExperiences', JSON.stringify(updatedExperiences));
    
    // Update state to show new experience
    const countryExperiences = updatedExperiences.filter(
      (exp: TravelerExperience) => exp.countryId === parseInt(countryId || '0')
    );
    setExperiences(countryExperiences);
  };

  const countries = [
    {
      id: 1,
      name: 'Netherlands',
      city: 'Amsterdam',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=400&fit=crop',
      description: 'Exceptional wheelchair accessibility with flat terrain, accessible public transport, and world-class facilities.',
      highlights: ['100% accessible trams', 'Flat cycling paths', 'Accessible museums', 'Wheelchair-friendly hotels'],
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
      ] as AccessibleHotel[],
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
      ] as AccessibleHotel[],
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
      ] as AccessibleHotel[],
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
      ] as AccessibleHotel[],
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
        { name: 'Scandic Berlin Potsdamer Platz', rating: 4, reservationUrl: 'https://www.scandichotels.com/hotels/germany/berlin/scandic-berlin-potsdamer-platz', features: ['Universal design', 'Accessible facilities', 'Hearing loops'] },
        { name: 'Holiday Inn Express Berlin City Centre', rating: 3, reservationUrl: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/berlin/bercc/hoteldetail', features: ['Accessible rooms', 'Basic facilities', 'Budget option'] },
        { name: 'Motel One Berlin-Hauptbahnhof', rating: 3, reservationUrl: 'https://www.motel-one.com/en/hotels/berlin/hotel-berlin-hauptbahnhof/', features: ['Accessible rooms', 'Basic adaptations', 'Near main station'] }
      ] as AccessibleHotel[],
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
      ] as AccessibleHotel[],
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
      ] as AccessibleHotel[],
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
      ] as AccessibleHotel[],
      detailedInfo: {
        transport: 'Modern buses and trains with step-free access, and ferry services to the archipelago include accessibility features.',
        accommodation: 'Scandinavian design principles include accessibility, with hotels offering well-designed accessible rooms.',
        attractions: 'Vasa Museum, ABBA Museum, and Royal Palace provide excellent accessibility with multilingual information.',
        dining: 'Restaurants emphasize inclusive design with step-free entrances and accessible facilities as standard practice.'
      }
    }
  ];

  const country = countries.find(c => c.id === parseInt(countryId));

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Country not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to destinations
          </Button>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={country.image}
          alt={`${country.city}, ${country.name}`}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{country.name}</h1>
            <p className="text-2xl mb-4">{country.city}</p>
            <div className="flex justify-center items-center gap-2 mb-4">
              {renderStars(country.rating)}
              <span className="text-lg ml-2">Accessibility Rating</span>
            </div>
            <Badge className="bg-green-600 hover:bg-green-700 text-lg px-4 py-2">
              <Accessibility className="w-5 h-5 mr-2" />
              Wheelchair Accessible
            </Badge>
          </div>
        </div>
        <Button
          className="absolute top-6 left-6 bg-white/90 text-gray-800 hover:bg-white"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to destinations
        </Button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <LocationIcon className="w-6 h-6" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-6">{country.description}</p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Accessibility Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {country.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="justify-start p-3">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transportation Link */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Train className="w-6 h-6" />
                Transportation
              </CardTitle>
              <CardDescription>
                Detailed information about wheelchair accessible transportation options in {country.city}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{country.detailedInfo.transport}</p>
              <Button
                onClick={() => navigate('/transportation')}
                className="flex items-center gap-2"
              >
                <Train className="w-4 h-4" />
                View detailed transportation guide & ticketing information
              </Button>
            </CardContent>
          </Card>

          {/* Wheelchair Accessible Attractions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Accessibility className="w-6 h-6" />
                Wheelchair Accessible Attractions
              </CardTitle>
              <CardDescription>
                Top attractions in {country.city} with verified wheelchair accessibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {country.wheelchairAccessibleAttractions.map((attraction, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Accessibility className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-gray-800">{attraction.name}</span>
                      </div>
                      <a
                        href={attraction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <a
                      href={attraction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors mt-2 inline-flex items-center gap-1"
                    >
                      View accessibility information
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{country.detailedInfo.accommodation}</p>
                
                {country.accessibleHotels && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-800 mb-3">Wheelchair Accessible Hotels</h4>
                    <div className="space-y-3">
                      {country.accessibleHotels.map((hotel, index) => (
                        <div key={index} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-2">
                            <a
                              href={hotel.reservationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                            >
                              {hotel.name}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            <div className="flex">
                              {renderStars(hotel.rating)}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {hotel.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Attractions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{country.detailedInfo.attractions}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  Dining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{country.detailedInfo.dining}</p>
              </CardContent>
            </Card>
          </div>

          {/* Traveler Experiences Section */}
          <div className="space-y-8">
            <TravelerExperienceForm 
              countryId={country.id} 
              onSubmit={handleExperienceSubmit}
            />
            
            <TravelerExperiencesList 
              experiences={experiences}
              countryName={country.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
