
import React, { useState } from 'react';
import { Plane, ExternalLink, DollarSign, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface FlightOption {
  provider: string;
  price: number;
  duration: string;
  stops: number;
  departureTime: string;
  arrivalTime: string;
  bookingUrl: string;
  logo?: string;
}

interface FlightBookingSectionProps {
  fromCity: string;
  toCity: string;
  departureDate: string;
  returnDate?: string;
}

const FlightBookingSection = ({ fromCity, toCity, departureDate, returnDate }: FlightBookingSectionProps) => {
  const [showFlights, setShowFlights] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock flight data - in a real app, this would come from APIs
  const generateFlightOptions = (): FlightOption[] => {
    const basePrice = Math.floor(Math.random() * 300) + 200;
    
    return [
      {
        provider: 'Kayak',
        price: basePrice,
        duration: '3h 25m',
        stops: 0,
        departureTime: '08:30',
        arrivalTime: '11:55',
        bookingUrl: `https://www.kayak.com/flights/${fromCity.toLowerCase()}-${toCity.toLowerCase()}/${departureDate}${returnDate ? `/${returnDate}` : ''}`,
      },
      {
        provider: 'Booking.com',
        price: basePrice + 45,
        duration: '4h 10m',
        stops: 1,
        departureTime: '14:15',
        arrivalTime: '18:25',
        bookingUrl: `https://www.booking.com/flights/search?type=flights&from=${fromCity}&to=${toCity}&departure_date=${departureDate}${returnDate ? `&return_date=${returnDate}` : ''}`,
      },
      {
        provider: 'Expedia',
        price: basePrice + 72,
        duration: '2h 50m',
        stops: 0,
        departureTime: '16:45',
        arrivalTime: '19:35',
        bookingUrl: `https://www.expedia.com/Flights-Search?trip=oneway&leg1=from:${fromCity},to:${toCity},departure:${departureDate}`,
      },
      {
        provider: 'Priceline',
        price: basePrice + 89,
        duration: '5h 30m',
        stops: 2,
        departureTime: '06:00',
        arrivalTime: '11:30',
        bookingUrl: `https://www.priceline.com/m/fly/search/details?departureDate=${departureDate}&origin=${fromCity}&destination=${toCity}`,
      },
      {
        provider: 'Skyscanner',
        price: basePrice + 125,
        duration: '3h 45m',
        stops: 0,
        departureTime: '12:30',
        arrivalTime: '16:15',
        bookingUrl: `https://www.skyscanner.com/routes/${fromCity.toLowerCase()}/${toCity.toLowerCase()}`,
      },
    ].sort((a, b) => a.price - b.price);
  };

  const handleBookFlights = async () => {
    setIsLoading(true);
    setShowFlights(true);
    
    // Simulate API loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const flightOptions = generateFlightOptions();

  const getStopsText = (stops: number) => {
    if (stops === 0) return 'Direct';
    if (stops === 1) return '1 Stop';
    return `${stops} Stops`;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plane className="w-5 h-5 text-blue-600" />
          Flight Booking Options
        </CardTitle>
        <CardDescription>
          Find and book flights from {fromCity} to {toCity}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!showFlights ? (
          <div className="text-center py-8">
            <Plane className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2">Ready to Book Your Flight?</h3>
            <p className="text-gray-600 mb-6">
              Compare prices from top travel booking sites and find the best deals for your journey.
            </p>
            <Button 
              onClick={handleBookFlights} 
              className="bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              <Plane className="w-4 h-4 mr-2" />
              Compare Flight Prices
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Flight Options</h3>
                <p className="text-sm text-gray-600">
                  Sorted by price - lowest to highest
                </p>
              </div>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {departureDate}
              </Badge>
            </div>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-24 bg-gray-200 rounded-lg"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {flightOptions.map((flight, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <Badge 
                              variant={index === 0 ? "default" : "secondary"} 
                              className={index === 0 ? "bg-green-600" : ""}
                            >
                              {flight.provider}
                              {index === 0 && " - Best Price"}
                            </Badge>
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              <DollarSign className="w-3 h-3 mr-1" />
                              {formatPrice(flight.price)}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {flight.duration}
                            </div>
                            <div>{getStopsText(flight.stops)}</div>
                            <div>{flight.departureTime} - {flight.arrivalTime}</div>
                          </div>
                        </div>
                        
                        <Button 
                          asChild
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <a 
                            href={flight.bookingUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Book Now
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Separator className="my-6" />
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Accessibility Information</h4>
                  <p className="text-blue-800 text-sm">
                    All listed booking sites support accessibility accommodations. When booking, 
                    look for special assistance options including wheelchair assistance, priority boarding, 
                    and medical equipment transport. Contact the airline directly after booking to 
                    arrange specific accessibility services.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FlightBookingSection;
