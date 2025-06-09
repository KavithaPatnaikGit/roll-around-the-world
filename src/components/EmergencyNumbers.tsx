
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import { EmergencyNumber } from '@/data/countryData';

interface EmergencyNumbersProps {
  emergencyNumbers: EmergencyNumber[];
  cityName: string;
}

const EmergencyNumbers = ({ emergencyNumbers, cityName }: EmergencyNumbersProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Phone className="w-6 h-6" />
          Emergency Numbers
        </CardTitle>
        <CardDescription>
          Important contact numbers for assistance in {cityName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyNumbers.map((emergency, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">{emergency.service}</h4>
                <a
                  href={`tel:${emergency.number}`}
                  className="text-2xl font-bold text-red-600 hover:text-red-800 transition-colors"
                >
                  {emergency.number}
                </a>
              </div>
              <p className="text-sm text-gray-600">{emergency.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyNumbers;
