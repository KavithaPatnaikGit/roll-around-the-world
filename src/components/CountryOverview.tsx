
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { Country } from '@/data/countryData';
import ReadAloudButton from './ReadAloudButton';

interface CountryOverviewProps {
  country: Country;
}

const CountryOverview = ({ country }: CountryOverviewProps) => {
  const overviewText = `Overview of ${country.name}. ${country.description} Key accessibility features include: ${country.highlights.join(', ')}.`;

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Overview
          </CardTitle>
          <ReadAloudButton 
            text={overviewText}
            label="Read overview"
          />
        </div>
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
  );
};

export default CountryOverview;
