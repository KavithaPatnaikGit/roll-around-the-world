
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Info } from 'lucide-react';
import { Country } from '@/data/types';
import ReadAloudButton from './ReadAloudButton';

interface DestinationOverviewProps {
  destination: Country;
}

const DestinationOverview = ({ destination }: DestinationOverviewProps) => {
  const overviewText = `Destination overview for ${destination.city}, ${destination.name}. ${destination.description} Key accessibility features include: ${destination.highlights?.join(', ') || 'Various accessibility features available'}. Accessibility rating: ${destination.rating} out of 5 stars.`;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" />
            Destination Overview
          </CardTitle>
          <ReadAloudButton 
            text={overviewText}
            label="Read overview"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">About {destination.city}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{destination.description}</p>
            
            <h4 className="font-semibold text-gray-800 mb-3">Key Accessibility Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {destination.highlights?.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="justify-start p-3 text-sm">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Quick Facts</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Country:</span>
                  <span className="font-medium">{destination.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Main City:</span>
                  <span className="font-medium">{destination.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Accessibility Rating:</span>
                  <span className="font-medium">{destination.rating}/5</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Best For</h4>
              <div className="text-sm text-green-800">
                <p>✓ Wheelchair users</p>
                <p>✓ Mobility assistance needs</p>
                <p>✓ Visual/hearing impairments</p>
                <p>✓ Family accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationOverview;
