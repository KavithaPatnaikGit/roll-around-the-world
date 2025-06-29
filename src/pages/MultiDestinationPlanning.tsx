import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users, Plus, X, Volume2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InterDestinationTransport from '@/components/InterDestinationTransport';
import VoiceInput from '@/components/VoiceInput';
import { destinations } from '@/data/destinationData';
import { Country } from '@/data/types';

interface SelectedDestination {
  cityData: { name: string; city: string; country: Country };
  startDate: Date | undefined;
  endDate: Date | undefined;
}

const MultiDestinationPlanning = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState<SelectedDestination[]>([]);
  const { toast } = useToast();

  // Get all cities from destinations data
  const getAllCities = () => {
    const cities: Array<{ name: string; city: string; country: Country }> = [];
    
    destinations.forEach(destination => {
      if (destination.cities) {
        destination.cities.forEach(city => {
          cities.push({
            name: city.city,
            city: city.city,
            country: city
          });
        });
      } else if (!destination.isCategory) {
        cities.push({
          name: destination.city,
          city: destination.city,
          country: destination
        });
      }
    });
    
    return cities;
  };

  const allCities = getAllCities();
  
  const filteredCities = allCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate transportation routes between selected destinations
  const generateTransportationRoutes = () => {
    if (selectedDestinations.length < 2) return [];

    const routes = [];
    for (let i = 0; i < selectedDestinations.length - 1; i++) {
      const from = selectedDestinations[i];
      const to = selectedDestinations[i + 1];
      
      // Generate transportation options based on the cities
      const transportOptions = [];
      
      // Flight options (always available for international routes)
      if (from.cityData.country.name !== to.cityData.country.name) {
        transportOptions.push({
          type: 'flight' as const,
          duration: '2-4 hours',
          estimatedCost: '$150-400',
          provider: 'Major Airlines',
          accessibility: 'Wheelchair assistance available, priority boarding for disabled passengers',
          bookingUrl: `https://www.skyscanner.com/flights-from/${from.cityData.name.toLowerCase()}-to-${to.cityData.name.toLowerCase()}`
        });
      }

      // Train options (for certain routes)
      if (isTrainRouteAvailable(from.cityData.country.name, to.cityData.country.name)) {
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
      if (isBusRouteAvailable(from.cityData.country.name, to.cityData.country.name)) {
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
          from: from.cityData.name,
          to: to.cityData.name,
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

  const addDestination = (cityData: { name: string; city: string; country: Country }) => {
    const isAlreadySelected = selectedDestinations.some(dest => dest.cityData.name === cityData.name);
    if (!isAlreadySelected) {
      setSelectedDestinations(prev => [...prev, {
        cityData,
        startDate: undefined,
        endDate: undefined
      }]);
    }
  };

  const removeDestination = (index: number) => {
    setSelectedDestinations(prev => prev.filter((_, i) => i !== index));
  };

  const updateDestinationDate = (index: number, field: 'startDate' | 'endDate', date: Date | undefined) => {
    setSelectedDestinations(prev => prev.map((dest, i) => 
      i === index ? { ...dest, [field]: date } : dest
    ));
  };

  const handleVoiceSearch = (transcription: string) => {
    console.log('Voice search transcription:', transcription);
    setSearchQuery(transcription);
    
    // Try to find matching cities and auto-add them
    const words = transcription.toLowerCase().split(/\s+/);
    const matchingCities = allCities.filter(city => 
      words.some(word => 
        city.name.toLowerCase().includes(word) || 
        city.country.name.toLowerCase().includes(word)
      )
    );

    if (matchingCities.length > 0) {
      const cityToAdd = matchingCities[0];
      const isAlreadySelected = selectedDestinations.some(dest => dest.cityData.name === cityToAdd.name);
      
      if (!isAlreadySelected) {
        addDestination(cityToAdd);
        toast({
          title: "Destination added",
          description: `${cityToAdd.name}, ${cityToAdd.country.name} has been added to your trip`,
        });
      }
    }
  };

  const handlePlanTrip = () => {
    const invalidDestinations = selectedDestinations.filter(dest => !dest.startDate || !dest.endDate);
    
    if (selectedDestinations.length === 0) {
      toast({
        title: "No destinations selected",
        description: "Please select at least one destination to plan your trip.",
        variant: "destructive"
      });
      return;
    }

    if (invalidDestinations.length > 0) {
      toast({
        title: "Missing dates",
        description: "Please select start and end dates for all destinations.",
        variant: "destructive"
      });
      return;
    }

    // Check for date conflicts - now allowing adjacent dates
    const sortedDestinations = selectedDestinations
      .filter(dest => dest.startDate && dest.endDate)
      .sort((a, b) => a.startDate!.getTime() - b.startDate!.getTime());

    for (let i = 0; i < sortedDestinations.length - 1; i++) {
      const current = sortedDestinations[i];
      const next = sortedDestinations[i + 1];
      
      // Allow end date to equal start date of next destination (adjacent dates)
      if (current.endDate! > next.startDate!) {
        toast({
          title: "Date conflict detected",
          description: `Your stay in ${current.cityData.name} overlaps with your trip to ${next.cityData.name}. Please adjust the dates.`,
          variant: "destructive"
        });
        return;
      }
    }

    // Save trip plan
    const tripPlan = {
      destinations: selectedDestinations.map(dest => ({
        city: dest.cityData.name,
        country: dest.cityData.country.name,
        startDate: dest.startDate,
        endDate: dest.endDate
      })),
      createdAt: new Date()
    };

    localStorage.setItem('multiDestinationTrip', JSON.stringify(tripPlan));

    toast({
      title: "Trip planned successfully!",
      description: `Your multi-destination trip to ${selectedDestinations.length} cities has been saved.`,
    });

    // Navigate to the Destination Planner page
    navigate('/destination-planner');
  };

  const transportationRoutes = generateTransportationRoutes();

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
            <h1 className="text-3xl font-bold text-gray-900">Plan Multi-Destination Trip</h1>
            <p className="text-gray-600 mt-2">Select cities and plan your travel dates - now with voice assistance!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* City Selection */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Add Destinations
                </CardTitle>
                <CardDescription>
                  Choose from our accessible destinations using voice or text search
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Search cities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <VoiceInput
                    onTranscription={handleVoiceSearch}
                    placeholder="Say destination names"
                    prompt="The user is searching for travel destinations. Please transcribe city and country names clearly."
                  />
                </div>
                
                <div className="max-h-96 overflow-y-auto space-y-2">
                  {filteredCities.map((city, index) => {
                    const isSelected = selectedDestinations.some(dest => dest.cityData.name === city.name);
                    return (
                      <div
                        key={`${city.name}-${index}`}
                        className={`p-3 border rounded-lg transition-colors ${
                          isSelected 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 hover:border-gray-300 cursor-pointer'
                        }`}
                        onClick={() => !isSelected && addDestination(city)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="font-medium">{city.name}</div>
                            <div className="text-sm text-gray-600">{city.country.name}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              Rating: {city.country.rating}/5 stars
                            </div>
                          </div>
                          {isSelected ? (
                            <div className="text-green-600 font-medium">Added</div>
                          ) : (
                            <Plus className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selected Destinations with Dates */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Your Trip Itinerary ({selectedDestinations.length} destinations)
                </CardTitle>
                <CardDescription>
                  Set travel dates for each destination
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDestinations.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <Volume2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Add destinations to start planning your trip</p>
                    <p className="text-sm mt-2">Use voice search to quickly find destinations</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {selectedDestinations.map((destination, index) => (
                      <div key={`${destination.cityData.name}-${index}`} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{destination.cityData.name}</h3>
                            <p className="text-sm text-gray-600">{destination.cityData.country.name}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeDestination(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Date Selection */}
                        <div className="grid grid-cols-2 gap-4">
                          {/* Start Date */}
                          <div>
                            <label className="block text-sm font-medium mb-2">Start Date</label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !destination.startDate && "text-muted-foreground"
                                  )}
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {destination.startDate ? (
                                    format(destination.startDate, "MMM dd, yyyy")
                                  ) : (
                                    "Pick start date"
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={destination.startDate}
                                  onSelect={(date) => updateDestinationDate(index, 'startDate', date)}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          {/* End Date */}
                          <div>
                            <label className="block text-sm font-medium mb-2">End Date</label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !destination.endDate && "text-muted-foreground"
                                  )}
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {destination.endDate ? (
                                    format(destination.endDate, "MMM dd, yyyy")
                                  ) : (
                                    "Pick end date"
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={destination.endDate}
                                  onSelect={(date) => updateDestinationDate(index, 'endDate', date)}
                                  disabled={(date) => date < (destination.startDate || new Date())}
                                  initialFocus
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button 
                      onClick={handlePlanTrip}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      Plan My Multi-Destination Trip
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Transportation Routes */}
            <InterDestinationTransport routes={transportationRoutes} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MultiDestinationPlanning;
