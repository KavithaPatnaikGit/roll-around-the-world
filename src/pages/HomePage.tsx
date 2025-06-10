
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Accessibility, MapPin, Star, Users, Award, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinationData';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
              <Accessibility className="w-4 h-4 mr-2" />
              Accessibility First
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Travel Without
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Barriers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the world's most accessible destinations. From wheelchair-friendly attractions to barrier-free accommodations, 
              we make travel accessible for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => navigate('/destinations')}
              >
                Explore Destinations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Accessible Destinations</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">1000+</div>
              <div className="text-gray-600">Verified Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600">Travel Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Destinations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked destinations known for their exceptional accessibility and inclusive experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination) => (
              <Card 
                key={destination.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => navigate(`/destination/${destination.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {destination.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {destination.name}
                  </CardTitle>
                  <p className="text-gray-600">{destination.city}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights?.slice(0, 2).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/destinations')}
            >
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">AccessiTravel</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to making travel accessible and enjoyable for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Accessibility className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Accessibility</h3>
              <p className="text-gray-600">Every destination is personally verified by our accessibility experts</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">Real reviews and experiences from travelers with disabilities</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized globally for promoting inclusive travel experiences</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
