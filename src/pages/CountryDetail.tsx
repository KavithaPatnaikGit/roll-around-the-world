
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accessibility, Star, MapPin, ArrowLeft, Train, Building, Utensils, MapPin as LocationIcon, ExternalLink } from 'lucide-react';

const CountryDetail = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="w-5 h-5" />
                  Transportation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{country.detailedInfo.transport}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{country.detailedInfo.accommodation}</p>
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
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
