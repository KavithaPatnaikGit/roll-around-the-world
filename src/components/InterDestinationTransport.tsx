
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Train, Plane, Bus, ExternalLink } from 'lucide-react';

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
          Accessible transportation options for your journey
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
            
            <div className="grid gap-4">
              {route.options.map((option, optionIndex) => {
                const IconComponent = getTransportIcon(option.type);
                return (
                  <div key={optionIndex} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                      <IconComponent className="w-5 h-5 text-gray-600" />
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
                          {option.accessibility}
                        </div>
                      </div>
                    </div>
                    {option.bookingUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(option.bookingUrl, '_blank')}
                        className="flex items-center gap-2"
                      >
                        Book
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default InterDestinationTransport;
