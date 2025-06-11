import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { format, isSameMonth, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InterDestinationTransport from '@/components/InterDestinationTransport';
import QuickTips from '@/components/QuickTips';

interface TripDestination {
  city: string;
  country: string;
  startDate: string;
  endDate: string;
}

interface TripPlan {
  destinations: TripDestination[];
  createdAt: string;
}

const DestinationPlanner = () => {
  const navigate = useNavigate();
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const savedTrip = localStorage.getItem('multiDestinationTrip');
    if (savedTrip) {
      setTripPlan(JSON.parse(savedTrip));
    }
  }, []);

  // Generate transportation routes between destinations
  const generateTransportationRoutes = () => {
    if (!tripPlan || tripPlan.destinations.length < 2) return [];

    const routes = [];
    for (let i = 0; i < tripPlan.destinations.length - 1; i++) {
      const from = tripPlan.destinations[i];
      const to = tripPlan.destinations[i + 1];
      
      // Generate transportation options based on the cities
      const transportOptions = [];
      
      // Flight options (always available for international routes)
      if (from.country !== to.country) {
        transportOptions.push({
          type: 'flight' as const,
          duration: '2-4 hours',
          estimatedCost: '$150-400',
          provider: 'Major Airlines',
          accessibility: 'Wheelchair assistance available, priority boarding for disabled passengers',
          bookingUrl: `https://www.skyscanner.com/flights-from/${from.city.toLowerCase()}-to-${to.city.toLowerCase()}`
        });
      }

      // Train options (for certain routes)
      if (isTrainRouteAvailable(from.country, to.country)) {
        transportOptions.push({
          type: 'train' as const,
          duration: '3-8 hours',
          estimatedCost: '$80-200',
          provider: 'National Railways',
          accessibility: 'Wheelchair accessible carriages, assistance booking available',
          bookingUrl: `https://www.trainline.com`
        });
      }

      // Bus options (for European routes mainly)
      if (isBusRouteAvailable(from.country, to.country)) {
        transportOptions.push({
          type: 'bus' as const,
          duration: '6-12 hours',
          estimatedCost: '$30-80',
          provider: 'FlixBus / Eurolines',
          accessibility: 'Wheelchair accessible buses available, advance booking required'
        });
      }

      if (transportOptions.length > 0) {
        routes.push({
          from: from.city,
          to: to.city,
          options: transportOptions
        });
      }
    }

    return routes;
  };

  const isTrainRouteAvailable = (fromCountry: string, toCountry: string) => {
    const trainConnectedCountries = [
      'Netherlands', 'Germany', 'United Kingdom', 'Sweden', 'Japan'
    ];
    return trainConnectedCountries.includes(fromCountry) && trainConnectedCountries.includes(toCountry);
  };

  const isBusRouteAvailable = (fromCountry: string, toCountry: string) => {
    const busConnectedCountries = [
      'Netherlands', 'Germany', 'United Kingdom', 'Sweden'
    ];
    return busConnectedCountries.includes(fromCountry) && busConnectedCountries.includes(toCountry);
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getDestinationsForDate = (date: Date) => {
    if (!tripPlan) return [];
    
    return tripPlan.destinations.filter(destination => {
      const startDate = new Date(destination.startDate);
      const endDate = new Date(destination.endDate);
      return date >= startDate && date <= endDate;
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const transportationRoutes = generateTransportationRoutes();

  // Generate general travel tips for multi-destination trips
  const generalTravelTips = [
    {
      text: "Book transportation between destinations in advance to secure better prices and accessibility accommodations.",
      link: "https://www.example.com/advance-booking-tips"
    },
    {
      text: "Research wheelchair accessibility at airports and train stations along your route before traveling.",
      link: "https://www.example.com/transport-accessibility"
    },
    {
      text: "Consider travel insurance that covers mobility equipment and medical needs for multi-destination trips.",
      link: "https://www.example.com/travel-insurance"
    },
    {
      text: "Pack essential medications and mobility aids in carry-on luggage when flying between destinations.",
      link: "https://www.example.com/packing-tips"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Destination Planner</h1>
            <p className="text-gray-600 mt-2">View your multi-destination trip calendar</p>
          </div>
        </div>

        {!tripPlan ? (
          <Card className="text-center py-12">
            <CardContent>
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-semibold mb-2">No Trip Planned</h2>
              <p className="text-gray-600 mb-6">You haven't planned any multi-destination trips yet.</p>
              <Button onClick={() => navigate('/plan-trip')} className="bg-blue-600 hover:bg-blue-700">
                Plan Your First Trip
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Trip Summary */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Trip Summary
                    </CardTitle>
                    <CardDescription>
                      Planned on {format(new Date(tripPlan.createdAt), 'MMM dd, yyyy')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {tripPlan.destinations.map((destination, index) => (
                      <div key={index} className="p-3 border border-gray-200 rounded-lg">
                        <div className="font-medium">{destination.city}</div>
                        <div className="text-sm text-gray-600">{destination.country}</div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {format(new Date(destination.startDate), 'MMM dd')} - {format(new Date(destination.endDate), 'MMM dd')}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Calendar */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {format(currentMonth, 'MMMM yyyy')}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                          Previous
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                          Next
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {/* Week day headers */}
                      {weekDays.map(day => (
                        <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                          {day}
                        </div>
                      ))}
                      
                      {/* Calendar days */}
                      {calendarDays.map(day => {
                        const destinations = getDestinationsForDate(day);
                        const isCurrentMonth = isSameMonth(day, currentMonth);
                        const isToday = isSameDay(day, new Date());
                        
                        return (
                          <div 
                            key={day.toISOString()} 
                            className={`min-h-[80px] p-1 border border-gray-100 ${
                              isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                            } ${isToday ? 'bg-blue-50 border-blue-200' : ''}`}
                          >
                            <div className={`text-sm ${
                              isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                            } ${isToday ? 'font-bold text-blue-600' : ''}`}>
                              {format(day, 'd')}
                            </div>
                            <div className="space-y-1 mt-1">
                              {destinations.map((destination, index) => (
                                <Badge 
                                  key={index} 
                                  variant="secondary" 
                                  className="text-xs block truncate bg-blue-100 text-blue-800"
                                >
                                  {destination.city}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Transportation Routes */}
            <InterDestinationTransport routes={transportationRoutes} />

            {/* Quick Tips Section */}
            <QuickTips 
              quickTips={generalTravelTips}
              cityName="Multi-Destination Travel"
              countryId={999} // Use a special ID for general travel tips
            />
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default DestinationPlanner;

}
