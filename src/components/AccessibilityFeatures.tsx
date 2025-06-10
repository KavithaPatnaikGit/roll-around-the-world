
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, MapPin, Utensils, Bus } from 'lucide-react';
import { Country } from '@/data/types';

interface AccessibilityFeaturesProps {
  destination: Country;
}

const AccessibilityFeatures = ({ destination }: AccessibilityFeaturesProps) => {
  const features = [
    {
      icon: Building,
      title: "Accommodation",
      description: destination.detailedInfo.accommodation,
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Attractions",
      description: destination.detailedInfo.attractions,
      color: "text-green-600"
    },
    {
      icon: Utensils,
      title: "Dining",
      description: destination.detailedInfo.dining,
      color: "text-purple-600"
    },
    {
      icon: Bus,
      title: "Transportation",
      description: destination.detailedInfo.transport || "Public transport accessibility information available",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IconComponent className={`w-5 h-5 ${feature.color}`} />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{feature.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default AccessibilityFeatures;
