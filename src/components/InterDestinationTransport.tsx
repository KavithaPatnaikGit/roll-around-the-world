
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Train, Plane, Bus, ExternalLink, MapPin } from 'lucide-react';

interface TransportRoute {
  from: string;
  to: string;
  options: {
    type: 'flight' | 'train' | 'bus';
    duration: string;
    estimatedCost: string;
    provider: string;
    bookingUrl?: string;
    accessibility: string;
  }[];
}

interface InterDestinationTransportProps {
  routes: TransportRoute[];
}

const InterDestinationTransport = ({ routes }: InterDestinationTransportProps) => {
  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'flight':
        return Plane;
      case 'train':
        return Train;
      case 'bus':
        return Bus;
      default:
        return Train;
    }
  };

  const getTransportColor = (type: string) => {
    switch (type) {
      case 'flight':
        return 'bg-blue-100 text-blue-800';
      case 'train':
        return 'bg-green-100 text-green-800';
      case 'bus':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const generateGoogleMapsUrl = (from: string, to: string) => {
    const origin = encodeURIComponent(from);
    const destination = encodeURIComponent(to);
    return `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${origin}&destination=${destination}&mode=transit`;
  };

  if (routes.length === 0) {
    return null;
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Train className="w-5 h-5" />
          Transportation Between Destinations
        </CardTitle>
        <CardDescription>
          Accessible transportation options for your journey with route maps
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {routes.map((route, routeIndex) => (
          <div key={routeIndex} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">
                {route.from} → {route.to}
              </h3>
            </div>

            {/* Google Maps Route */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                <h4 className="font-medium text-gray-900">Route Map</h4>
              </div>
              <div className="relative">
                <iframe
                  src={generateGoogleMapsUrl(route.from, route.to)}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Route map from ${route.from} to ${route.to}`}
                  aria-label={`Interactive map showing transportation route from ${route.from} to ${route.to}. Use arrow keys to navigate the map and Enter to interact with map elements.`}
                  role="application"
                  tabIndex={0}
                  className="rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const iframe = e.target as HTMLIFrameElement;
                      iframe.focus();
                    }
                  }}
                />
                <div className="sr-only" aria-live="polite">
                  Map showing route from {route.from} to {route.to}. 
                  Use tab to navigate to transportation options below.
                </div>
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs text-gray-600">
                  <span role="img" aria-label="keyboard navigation">⌨️</span> Use arrow keys to navigate map
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <p>
                  <strong>Accessibility:</strong> This map is keyboard navigable. 
                  Press Tab to focus, then use arrow keys to pan and +/- keys to zoom. 
                  Screen readers can access route information in the transportation options below.
                </p>
              </div>
            </div>
            
            <div className="grid gap-4">
              <h4 className="font-medium text-gray-900 flex items-center gap-2">
                <Train className="w-4 h-4" />
                Transportation Options
              </h4>
              {route.options.map((option, optionIndex) => {
                const IconComponent = getTransportIcon(option.type);
                return (
                  <div key={optionIndex} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                      <IconComponent className="w-5 h-5 text-gray-600" aria-hidden="true" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{option.provider}</span>
                          <Badge className={getTransportColor(option.type)}>
                            {option.type}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          Duration: {option.duration} • Cost: {option.estimatedCost}
                        </div>
                        <div className="text-xs text-gray-500">
                          <strong>Accessibility:</strong> {option.accessibility}
                        </div>
                      </div>
                    </div>
                    {option.bookingUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(option.bookingUrl, '_blank')}
                        className="flex items-center gap-2"
                        aria-label={`Book ${option.type} with ${option.provider} - opens in new window`}
                      >
                        Book
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        
        {/* Map Navigation Instructions for Screen Readers */}
        <div className="sr-only" role="region" aria-labelledby="map-instructions">
          <h3 id="map-instructions">Map Navigation Instructions</h3>
          <ul>
            <li>Tab to focus on the map area</li>
            <li>Use arrow keys to pan the map in different directions</li>
            <li>Use plus (+) and minus (-) keys to zoom in and out</li>
            <li>Press Enter to interact with map elements</li>
            <li>All route information is also available in text format above each map</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterDestinationTransport;
