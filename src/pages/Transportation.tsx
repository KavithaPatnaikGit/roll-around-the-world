
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Train, Bus, Car, ExternalLink, Accessibility } from 'lucide-react';

const Transportation = () => {
  const navigate = useNavigate();

  const transportationOptions = [
    {
      countryId: 1,
      country: 'Netherlands',
      city: 'Amsterdam',
      options: [
        {
          type: 'Tram',
          name: 'GVB Trams',
          accessibility: 'All trams are wheelchair accessible with ramps and designated spaces',
          ticketing: {
            website: 'https://gvb.nl/en/travel-information/accessibility',
            howTo: 'Purchase tickets via GVB app, at stations, or with contactless payment on board',
            reservations: 'No reservations needed - wheelchair spaces available on all trams'
          }
        },
        {
          type: 'Train',
          name: 'NS Dutch Railways',
          accessibility: 'All intercity trains have wheelchair accessible carriages with lifts',
          ticketing: {
            website: 'https://www.ns.nl/en/travel-information/traveling-with-a-disability',
            howTo: 'Book via NS app or website, assistance can be requested 1 hour in advance',
            reservations: 'Free assistance booking available via phone or online'
          }
        },
        {
          type: 'Bus',
          name: 'GVB Buses',
          accessibility: 'Low-floor buses with wheelchair ramps and priority seating',
          ticketing: {
            website: 'https://gvb.nl/en/travel-information/accessibility',
            howTo: 'Same ticketing system as trams - app, stations, or contactless',
            reservations: 'No reservations required'
          }
        }
      ]
    },
    {
      countryId: 2,
      country: 'Japan',
      city: 'Tokyo',
      options: [
        {
          type: 'Train',
          name: 'JR East',
          accessibility: 'Elevators, tactile guidance, and wheelchair spaces in designated cars',
          ticketing: {
            website: 'https://www.jreast.co.jp/e/customer_support/barrier_free/',
            howTo: 'Purchase JR Pass online or IC cards at stations with multilingual support',
            reservations: 'Station staff assistance available - contact station 30 minutes before travel'
          }
        },
        {
          type: 'Subway',
          name: 'Tokyo Metro',
          accessibility: 'Elevator access, Braille signage, and wheelchair accessible cars',
          ticketing: {
            website: 'https://www.tokyometro.jp/en/tips/barrier_free/',
            howTo: 'Buy tickets at machines with accessibility features or use IC cards',
            reservations: 'Staff assistance available at all stations during operating hours'
          }
        },
        {
          type: 'Bus',
          name: 'Toei Bus',
          accessibility: 'Low-floor buses with wheelchair lifts and priority seating',
          ticketing: {
            website: 'https://www.kotsu.metro.tokyo.jp/eng/services/barrier_free.html',
            howTo: 'Pay with IC cards or exact change, multilingual announcements',
            reservations: 'No advance booking needed'
          }
        }
      ]
    },
    {
      countryId: 3,
      country: 'Australia',
      city: 'Sydney',
      options: [
        {
          type: 'Train',
          name: 'Sydney Trains',
          accessibility: 'All stations have lift access and trains have wheelchair spaces',
          ticketing: {
            website: 'https://transportnsw.info/accessibility',
            howTo: 'Use Opal card or contactless payment, available at stations and online',
            reservations: 'No booking required, but assistance available if requested'
          }
        },
        {
          type: 'Ferry',
          name: 'Sydney Ferries',
          accessibility: 'Wheelchair accessible boarding and dedicated spaces on all ferries',
          ticketing: {
            website: 'https://transportnsw.info/travel-info/ways-to-get-around/ferry/accessibility',
            howTo: 'Same Opal card system as trains, or contactless payment',
            reservations: 'No reservations needed, crew assistance available'
          }
        },
        {
          type: 'Bus',
          name: 'Sydney Buses',
          accessibility: 'All buses are wheelchair accessible with ramps and kneeling function',
          ticketing: {
            website: 'https://transportnsw.info/travel-info/ways-to-get-around/bus/accessibility',
            howTo: 'Opal card or contactless payment, audio announcements for stops',
            reservations: 'No advance booking required'
          }
        }
      ]
    },
    {
      countryId: 4,
      country: 'United Kingdom',
      city: 'London',
      options: [
        {
          type: 'Underground',
          name: 'London Underground',
          accessibility: 'Step-free access at 280+ stations, with more being added regularly',
          ticketing: {
            website: 'https://tfl.gov.uk/transport-accessibility/transport-accessibility',
            howTo: 'Use Oyster card, contactless payment, or mobile tickets via TfL app',
            reservations: 'No booking needed, but check step-free station map before travel'
          }
        },
        {
          type: 'Bus',
          name: 'London Buses',
          accessibility: 'All buses are wheelchair accessible with ramps and designated spaces',
          ticketing: {
            website: 'https://tfl.gov.uk/modes/buses/accessibility-on-buses',
            howTo: 'Same payment methods as Underground, exact change not required',
            reservations: 'No reservations needed, audio and visual announcements'
          }
        },
        {
          type: 'Taxi',
          name: 'Black Cabs',
          accessibility: 'All licensed black cabs can accommodate wheelchairs',
          ticketing: {
            website: 'https://tfl.gov.uk/modes/taxis-and-minicabs/accessibility',
            howTo: 'Hail on street, book via apps like Gett, or call radio taxi companies',
            reservations: 'Can book in advance, same fare structure as regular passengers'
          }
        }
      ]
    },
    {
      countryId: 5,
      country: 'Germany',
      city: 'Berlin',
      options: [
        {
          type: 'U-Bahn',
          name: 'Berlin U-Bahn',
          accessibility: 'Most stations have elevator access, gap-bridging aids available',
          ticketing: {
            website: 'https://www.bvg.de/en/service/barrier-free-travel',
            howTo: 'Buy tickets at machines, via BVG app, or at service centers',
            reservations: 'Mobility service can assist with platform access - book via app'
          }
        },
        {
          type: 'S-Bahn',
          name: 'Berlin S-Bahn',
          accessibility: 'All trains have wheelchair areas, most stations are accessible',
          ticketing: {
            website: 'https://sbahn.berlin/en/travel-info/barrier-free-travel/',
            howTo: 'Same ticketing system as U-Bahn, integrated transport network',
            reservations: 'Assistance available from DB Bahnhof Mission at major stations'
          }
        },
        {
          type: 'Bus',
          name: 'BVG Buses',
          accessibility: 'Low-floor buses with ramps and wheelchair securing systems',
          ticketing: {
            website: 'https://www.bvg.de/en/service/barrier-free-travel',
            howTo: 'Same tickets valid for all BVG transport modes',
            reservations: 'No advance booking required'
          }
        }
      ]
    },
    {
      countryId: 6,
      country: 'Canada',
      city: 'Vancouver',
      options: [
        {
          type: 'SkyTrain',
          name: 'TransLink SkyTrain',
          accessibility: 'All stations and trains are wheelchair accessible with audio announcements',
          ticketing: {
            website: 'https://www.translink.ca/accessibility',
            howTo: 'Use Compass card, contactless payment, or mobile tickets',
            reservations: 'No reservations needed, priority seating and spaces available'
          }
        },
        {
          type: 'Bus',
          name: 'TransLink Buses',
          accessibility: 'All buses have wheelchair lifts and designated securement areas',
          ticketing: {
            website: 'https://www.translink.ca/accessibility/accessible-bus-service',
            howTo: 'Same Compass card system, or exact change',
            reservations: 'No advance booking required'
          }
        },
        {
          type: 'HandyDART',
          name: 'HandyDART',
          accessibility: 'Door-to-door accessible transit service for people with disabilities',
          ticketing: {
            website: 'https://www.translink.ca/accessibility/handydart',
            howTo: 'Must register for service, then book trips by phone or online',
            reservations: 'Advance booking required - up to 7 days in advance'
          }
        }
      ]
    },
    {
      countryId: 7,
      country: 'Singapore',
      city: 'Singapore',
      options: [
        {
          type: 'MRT',
          name: 'SMRT/SBS Transit',
          accessibility: 'All stations and trains are barrier-free with platform screen doors',
          ticketing: {
            website: 'https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network/accessibility.html',
            howTo: 'Use EZ-Link card, NETS FlashPay, or contactless payment',
            reservations: 'No booking required, tactile guidance systems throughout'
          }
        },
        {
          type: 'Bus',
          name: 'SBS Transit/SMRT Buses',
          accessibility: 'All buses are wheelchair accessible with ramps and priority seats',
          ticketing: {
            website: 'https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/bus_services/accessibility.html',
            howTo: 'Same card system as MRT, audio announcements for all stops',
            reservations: 'No advance booking needed'
          }
        },
        {
          type: 'Taxi',
          name: 'Wheelchair Accessible Taxis',
          accessibility: 'Dedicated fleet of wheelchair accessible taxis available',
          ticketing: {
            website: 'https://www.lta.gov.sg/content/ltagov/en/getting_around/taxis_private_hire_cars/wheelchair_accessible_taxis.html',
            howTo: 'Book via phone or dedicated apps, meter-based pricing',
            reservations: 'Advance booking recommended, especially during peak hours'
          }
        }
      ]
    },
    {
      countryId: 8,
      country: 'Sweden',
      city: 'Stockholm',
      options: [
        {
          type: 'Tunnelbana',
          name: 'Stockholm Metro',
          accessibility: 'Most stations have elevator access, all trains accommodate wheelchairs',
          ticketing: {
            website: 'https://sl.se/en/info/accessibility/',
            howTo: 'Use SL Access card or mobile tickets via SL app',
            reservations: 'No reservations required, customer service available for assistance'
          }
        },
        {
          type: 'Bus',
          name: 'SL Buses',
          accessibility: 'All buses are low-floor with wheelchair ramps and securing systems',
          ticketing: {
            website: 'https://sl.se/en/info/accessibility/',
            howTo: 'Same SL Access card or mobile tickets, contactless payment available',
            reservations: 'No advance booking needed'
          }
        },
        {
          type: 'Ferry',
          name: 'Archipelago Ferries',
          accessibility: 'Many ferries to the archipelago are wheelchair accessible',
          ticketing: {
            website: 'https://www.waxholmsbolaget.se/en/accessibility/',
            howTo: 'Same SL card valid, or purchase tickets on board/at terminals',
            reservations: 'Advance booking recommended for accessibility assistance'
          }
        }
      ]
    }
  ];

  const getTransportIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'train':
      case 'u-bahn':
      case 's-bahn':
      case 'mrt':
      case 'skytrain':
      case 'tunnelbana':
        return Train;
      case 'bus':
        return Bus;
      case 'taxi':
      case 'black cabs':
        return Car;
      default:
        return Train;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to destinations
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Wheelchair Accessible Transportation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to accessible public transportation options in top accessible destinations worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {transportationOptions.map((location) => (
            <div key={location.countryId} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  {location.city}, {location.country}
                </h2>
                <Button
                  variant="outline"
                  onClick={() => navigate(`/country/${location.countryId}`)}
                  className="flex items-center gap-2"
                >
                  View country details
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {location.options.map((option, index) => {
                  const IconComponent = getTransportIcon(option.type);
                  return (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                          <div>
                            <div className="text-lg">{option.name}</div>
                            <Badge variant="secondary" className="mt-1">
                              {option.type}
                            </Badge>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Accessibility className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-sm">Accessibility Features</span>
                          </div>
                          <p className="text-sm text-gray-700">{option.accessibility}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-2">How to Purchase Tickets</h4>
                          <p className="text-sm text-gray-700 mb-2">{option.ticketing.howTo}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-2">Reservations & Assistance</h4>
                          <p className="text-sm text-gray-700 mb-3">{option.ticketing.reservations}</p>
                        </div>

                        <a
                          href={option.ticketing.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                        >
                          Official accessibility information
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transportation;
