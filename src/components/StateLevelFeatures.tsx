
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';

interface StateFeature {
  stateName: string;
  features: {
    name: string;
    description: string;
    url: string;
    type: 'attraction' | 'transport' | 'accommodation' | 'service';
  }[];
}

interface StateLevelFeaturesProps {
  countryName: string;
  stateFeatures: StateFeature[];
}

const StateLevelFeatures = ({ countryName, stateFeatures }: StateLevelFeaturesProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'attraction':
        return 'text-blue-600';
      case 'transport':
        return 'text-green-600';
      case 'accommodation':
        return 'text-purple-600';
      case 'service':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  if (!stateFeatures || stateFeatures.length === 0) {
    return null;
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          State-Level Accessibility Features in {countryName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stateFeatures.map((state, stateIndex) => (
            <div key={stateIndex} className="border-l-4 border-blue-200 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {state.stateName}
              </h3>
              <div className="grid gap-3">
                {state.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getTypeColor(feature.type).replace('text-', 'bg-')}`} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{feature.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                          <span className={`inline-block text-xs px-2 py-1 rounded-full mt-2 ${getTypeColor(feature.type)} bg-opacity-10`}>
                            {feature.type.charAt(0).toUpperCase() + feature.type.slice(1)}
                          </span>
                        </div>
                        <a
                          href={feature.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 text-sm"
                        >
                          Learn more
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StateLevelFeatures;
