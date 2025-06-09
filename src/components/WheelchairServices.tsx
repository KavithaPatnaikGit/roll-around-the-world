import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, ShoppingCart, MapPin, Phone, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WheelchairService {
  name: string;
  type: 'repair' | 'purchase' | 'both';
  address: string;
  phone?: string;
  website?: string;
  description: string;
}

interface WheelchairServicesProps {
  services: WheelchairService[];
  cityName: string;
}

const WheelchairServices = ({ services, cityName }: WheelchairServicesProps) => {
  const navigate = useNavigate();

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'repair':
        return <Wrench className="w-4 h-4" />;
      case 'purchase':
        return <ShoppingCart className="w-4 h-4" />;
      case 'both':
        return (
          <div className="flex gap-1">
            <Wrench className="w-4 h-4" />
            <ShoppingCart className="w-4 h-4" />
          </div>
        );
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  const getServiceBadgeColor = (type: string) => {
    switch (type) {
      case 'repair':
        return 'bg-blue-100 text-blue-800';
      case 'purchase':
        return 'bg-green-100 text-green-800';
      case 'both':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Wrench className="w-6 h-6" />
          Wheelchair Services in {cityName}
        </CardTitle>
        <CardDescription>
          Local wheelchair repair and purchase locations for travelers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {services.map((service, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    {getServiceIcon(service.type)}
                    {service.name}
                  </h4>
                </div>
                <Badge className={getServiceBadgeColor(service.type)}>
                  {service.type === 'both' ? 'Repair & Purchase' : 
                   service.type === 'repair' ? 'Repair' : 'Purchase'}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                  <span>{service.address}</span>
                </div>
                
                {service.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${service.phone}`} className="text-blue-600 hover:underline">
                      {service.phone}
                    </a>
                  </div>
                )}
                
                {service.website && (
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                    <a 
                      href={service.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit website
                    </a>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <Button
          onClick={() => navigate('/wheelchair-services')}
          className="flex items-center gap-2"
        >
          <Wrench className="w-4 h-4" />
          View wheelchair services worldwide
        </Button>
      </CardContent>
    </Card>
  );
};

export default WheelchairServices;
