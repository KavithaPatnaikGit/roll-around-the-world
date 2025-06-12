
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Accessibility, MapPin, Star, Users, Award, Globe, Sparkles, Shield, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinationData';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="container mx-auto text-center relative">
          <div className="mb-12">
            <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 hover:from-green-200 hover:to-blue-200 mb-6 px-6 py-2 text-base font-medium">
              <Accessibility className="w-5 h-5 mr-2" />
              Accessibility First Travel
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Travel Beyond
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
                All Barriers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the world's most accessible destinations with confidence. 
              From wheelchair-friendly attractions to inclusive accommodations, 
              we make travel accessible for everyone, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                onClick={() => navigate('/destinations')}
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Explore Destinations
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => navigate('/about')}
              >
                <Heart className="w-6 h-6 mr-3" />
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-700 text-lg font-medium">Accessible Destinations</div>
              <div className="text-gray-600 text-sm">Carefully verified for accessibility</div>
            </div>
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">1000+</div>
              <div className="text-gray-700 text-lg font-medium">Verified Reviews</div>
              <div className="text-gray-600 text-sm">From real travelers like you</div>
            </div>
            <div className="space-y-4 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-700 text-lg font-medium">Travel Support</div>
              <div className="text-gray-600 text-sm">Always here when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-6 px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Handpicked Selection
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Destinations</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover extraordinary places known for their exceptional accessibility, 
              inclusive experiences, and warm welcomes for all travelers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {featuredDestinations.map((destination) => (
              <Card 
                key={destination.id} 
                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105"
                onClick={() => navigate(`/destination/${destination.id}`)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-green-800 shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {destination.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {destination.name}
                  </CardTitle>
                  <p className="text-gray-600 font-medium">{destination.city}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-6 line-clamp-2 leading-relaxed">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights?.slice(0, 2).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
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
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
              onClick={() => navigate('/destinations')}
            >
              View All Destinations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-6 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">AccessiTravel</span> Difference
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We're more than just a travel platform—we're your trusted partner 
              in creating memorable, accessible adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="text-center p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Accessibility className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Verified Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">Every destination is personally verified by our accessibility experts and community members</p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed">Real reviews and experiences from travelers with disabilities who've been there</p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Award Winning</h3>
              <p className="text-gray-600 leading-relaxed">Recognized globally for promoting inclusive travel experiences and accessibility awareness</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
