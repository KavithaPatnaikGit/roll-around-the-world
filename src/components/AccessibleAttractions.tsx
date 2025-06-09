
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accessibility, ExternalLink } from 'lucide-react';
import { AccessibleAttraction } from '@/data/countryData';

interface AccessibleAttractionsProps {
  attractions: AccessibleAttraction[];
  cityName: string;
}

const AccessibleAttractions = ({ attractions, cityName }: AccessibleAttractionsProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Accessibility className="w-6 h-6" />
          Wheelchair Accessible Attractions
        </CardTitle>
        <CardDescription>
          Top attractions in {cityName} with verified wheelchair accessibility
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {attractions.map((attraction, index) => (
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
  );
};

export default AccessibleAttractions;
