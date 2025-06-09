
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Wrench, ShoppingCart, MapPin, Phone, ExternalLink, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface WheelchairService {
  name: string;
  type: 'repair' | 'purchase' | 'both';
  address: string;
  phone?: string;
  website?: string;
  description: string;
  city: string;
}

interface CountryServices {
  id: number;
  name: string;
  city: string;
  services: WheelchairService[];
}

const WheelchairServices = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'repair' | 'purchase'>('all');

  const countryServices: CountryServices[] = [
    {
      id: 1,
      name: 'Netherlands',
      city: 'Amsterdam',
      services: [
        {
          name: 'RehaCare Amsterdam',
          type: 'both',
          address: 'Hoofddorpplein 1, 1059 CV Amsterdam',
          phone: '+31 20 123 4567',
          website: 'https://rehacare-amsterdam.nl',
          description: 'Full wheelchair sales and repair services with certified technicians',
          city: 'Amsterdam'
        },
        {
          name: 'Mobility Solutions Utrecht',
          type: 'purchase',
          address: 'Vredenburg 45, 3511 BC Utrecht',
          phone: '+31 30 987 6543',
          website: 'https://mobility-solutions.nl',
          description: 'Premium wheelchair retailer with custom fitting services',
          city: 'Utrecht'
        },
        {
          name: 'Quick Wheelchair Repair',
          type: 'repair',
          address: 'Damrak 78, 1012 LP Amsterdam',
          phone: '+31 20 555 0123',
          description: 'Emergency wheelchair repairs, same-day service available',
          city: 'Amsterdam'
        }
      ]
    },
    {
      id: 2,
      name: 'Japan',
      city: 'Tokyo',
      services: [
        {
          name: 'Tokyo Wheelchair Center',
          type: 'both',
          address: '1-2-3 Shibuya, Shibuya-ku, Tokyo 150-0002',
          phone: '+81 3 1234 5678',
          website: 'https://tokyo-wheelchair.jp',
          description: 'Leading wheelchair provider with English-speaking staff',
          city: 'Tokyo'
        },
        {
          name: 'Osaka Mobility Shop',
          type: 'purchase',
          address: '4-5-6 Namba, Chuo-ku, Osaka 542-0076',
          phone: '+81 6 2345 6789',
          description: 'Wide selection of Japanese and international wheelchair brands',
          city: 'Osaka'
        },
        {
          name: 'Kyoto Repair Services',
          type: 'repair',
          address: '7-8-9 Gion, Higashiyama-ku, Kyoto 605-0001',
          phone: '+81 75 3456 7890',
          description: 'Traditional craftsmanship meets modern wheelchair repair',
          city: 'Kyoto'
        }
      ]
    },
    {
      id: 3,
      name: 'Australia',
      city: 'Sydney',
      services: [
        {
          name: 'Sydney Mobility Solutions',
          type: 'both',
          address: '123 George Street, Sydney NSW 2000',
          phone: '+61 2 1234 5678',
          website: 'https://sydneymobility.com.au',
          description: 'Comprehensive wheelchair services with home visits available',
          city: 'Sydney'
        },
        {
          name: 'Melbourne Wheelchair Depot',
          type: 'purchase',
          address: '456 Collins Street, Melbourne VIC 3000',
          phone: '+61 3 2345 6789',
          website: 'https://melbournewheelchair.com.au',
          description: 'Largest wheelchair showroom in Victoria',
          city: 'Melbourne'
        },
        {
          name: 'Brisbane Quick Fix',
          type: 'repair',
          address: '789 Queen Street, Brisbane QLD 4000',
          phone: '+61 7 3456 7890',
          description: 'Fast and reliable wheelchair repairs',
          city: 'Brisbane'
        }
      ]
    },
    {
      id: 4,
      name: 'United Kingdom',
      city: 'London',
      services: [
        {
          name: 'London Wheelchair Company',
          type: 'both',
          address: '10 Oxford Street, London W1C 1DX',
          phone: '+44 20 1234 5678',
          website: 'https://londonwheelchair.co.uk',
          description: 'Premier wheelchair services in central London',
          city: 'London'
        },
        {
          name: 'Manchester Mobility',
          type: 'purchase',
          address: '15 Market Street, Manchester M1 1WR',
          phone: '+44 161 234 5678',
          description: 'Northern England\'s largest wheelchair retailer',
          city: 'Manchester'
        },
        {
          name: 'Edinburgh Repair Workshop',
          type: 'repair',
          address: '20 Princes Street, Edinburgh EH2 2AN',
          phone: '+44 131 345 6789',
          description: 'Expert wheelchair maintenance and emergency repairs',
          city: 'Edinburgh'
        }
      ]
    },
    {
      id: 5,
      name: 'Germany',
      city: 'Berlin',
      services: [
        {
          name: 'Berlin Rollstuhl Zentrum',
          type: 'both',
          address: 'Unter den Linden 1, 10117 Berlin',
          phone: '+49 30 1234 5678',
          website: 'https://rollstuhl-berlin.de',
          description: 'Germany\'s leading wheelchair specialist',
          city: 'Berlin'
        },
        {
          name: 'München Mobility',
          type: 'purchase',
          address: 'Marienplatz 8, 80331 München',
          phone: '+49 89 2345 6789',
          description: 'Premium wheelchair showroom in Munich',
          city: 'München'
        },
        {
          name: 'Hamburg Reparatur Service',
          type: 'repair',
          address: 'Mönckebergstraße 10, 20095 Hamburg',
          phone: '+49 40 3456 7890',
          description: 'Quick wheelchair repairs in Hamburg',
          city: 'Hamburg'
        }
      ]
    },
    {
      id: 6,
      name: 'Canada',
      city: 'Vancouver',
      services: [
        {
          name: 'Vancouver Wheelchair Solutions',
          type: 'both',
          address: '1234 Robson Street, Vancouver BC V6E 1B5',
          phone: '+1 604 123 4567',
          website: 'https://vancouverwheelchair.ca',
          description: 'Complete wheelchair services with mountain-ready options',
          city: 'Vancouver'
        },
        {
          name: 'Toronto Mobility Plus',
          type: 'purchase',
          address: '5678 Yonge Street, Toronto ON M2N 5P6',
          phone: '+1 416 234 5678',
          description: 'Canada\'s largest wheelchair retailer',
          city: 'Toronto'
        },
        {
          name: 'Montreal Repair Express',
          type: 'repair',
          address: '9012 Rue Sainte-Catherine, Montreal QC H3B 1A7',
          phone: '+1 514 345 6789',
          description: 'Bilingual wheelchair repair services',
          city: 'Montreal'
        }
      ]
    },
    {
      id: 7,
      name: 'Singapore',
      city: 'Singapore',
      services: [
        {
          name: 'Singapore Wheelchair Hub',
          type: 'both',
          address: '1 Marina Bay Sands, Singapore 018956',
          phone: '+65 6123 4567',
          website: 'https://wheelchairhub.sg',
          description: 'Asia-Pacific wheelchair headquarters',
          city: 'Singapore'
        },
        {
          name: 'Orchard Mobility Center',
          type: 'purchase',
          address: '391 Orchard Road, Singapore 238872',
          phone: '+65 6234 5678',
          description: 'Premium wheelchair shopping experience',
          city: 'Singapore'
        },
        {
          name: 'Changi Repair Station',
          type: 'repair',
          address: '78 Airport Boulevard, Singapore 819666',
          phone: '+65 6345 6789',
          description: 'Airport wheelchair emergency services',
          city: 'Singapore'
        }
      ]
    },
    {
      id: 8,
      name: 'Sweden',
      city: 'Stockholm',
      services: [
        {
          name: 'Stockholm Rullstol Center',
          type: 'both',
          address: 'Drottninggatan 12, 111 51 Stockholm',
          phone: '+46 8 123 4567',
          website: 'https://rullstol-stockholm.se',
          description: 'Scandinavian design meets wheelchair innovation',
          city: 'Stockholm'
        },
        {
          name: 'Göteborg Mobility',
          type: 'purchase',
          address: 'Avenyn 45, 411 36 Göteborg',
          phone: '+46 31 234 5678',
          description: 'West Sweden\'s wheelchair specialist',
          city: 'Göteborg'
        },
        {
          name: 'Malmö Reparation',
          type: 'repair',
          address: 'Stortorget 8, 211 34 Malmö',
          phone: '+46 40 345 6789',
          description: 'Southern Sweden wheelchair repair experts',
          city: 'Malmö'
        }
      ]
    }
  ];

  const allServices = countryServices.flatMap(country => 
    country.services.map(service => ({
      ...service,
      countryName: country.name,
      countryId: country.id
    }))
  );

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.countryName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || service.type === selectedType || service.type === 'both';
    return matchesSearch && matchesType;
  });

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to destinations
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Wheelchair Services</h1>
                <p className="text-gray-600">Find wheelchair repair and purchase locations worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by location, city, or service name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedType === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('all')}
                  size="sm"
                >
                  All Services
                </Button>
                <Button
                  variant={selectedType === 'repair' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('repair')}
                  size="sm"
                >
                  <Wrench className="w-4 h-4 mr-1" />
                  Repair
                </Button>
                <Button
                  variant={selectedType === 'purchase' ? 'default' : 'outline'}
                  onClick={() => setSelectedType('purchase')}
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Purchase
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {getServiceIcon(service.type)}
                      {service.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-2">
                      <MapPin className="w-3 h-3" />
                      {service.city}, {service.countryName}
                    </CardDescription>
                  </div>
                  <Badge className={getServiceBadgeColor(service.type)}>
                    {service.type === 'both' ? 'Repair & Purchase' : 
                     service.type === 'repair' ? 'Repair' : 'Purchase'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">{service.description}</p>
                  
                  <div className="text-sm">
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                      <span>{service.address}</span>
                    </div>
                    
                    {service.phone && (
                      <div className="flex items-center gap-2 mb-2">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No services found</h3>
                <p>Try adjusting your search terms or filters</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WheelchairServices;
