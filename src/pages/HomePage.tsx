
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Accessibility, MapPin, Star, Users, Award, Globe, CheckCircle, Shield, Heart, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinationData';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Banner Background */}
      <section className="relative py-32 px-4">
        {/* Banner Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white mb-8 px-4 py-2 text-sm font-medium">
              <Accessibility className="w-4 h-4 mr-2" />
              Trusted by 10,000+ Travelers
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              Discover Accessible
              <span className="block">Adventures</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover barrier-free destinations, verified accommodations, and trusted experiences 
              from a community that understands your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-sm"
                onClick={() => navigate('/destinations')}
              >
                Start Exploring
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full"
                onClick={() => navigate('/about')}
              >
                <Heart className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Expert Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-300" />
                <span>Community Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-300" />
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-900 font-semibold mb-1">Verified Destinations</div>
              <div className="text-gray-600 text-sm">Accessibility confirmed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1,000+</div>
              <div className="text-gray-900 font-semibold mb-1">Community Reviews</div>
              <div className="text-gray-600 text-sm">Real experiences shared</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-900 font-semibold mb-1">Travel Support</div>
              <div className="text-gray-600 text-sm">Always here to help</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Handpicked locations known for exceptional accessibility and inclusive experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination) => (
              <Card 
                key={destination.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-sm overflow-hidden"
                onClick={() => navigate(`/destination/${destination.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/95 text-gray-900 shadow-sm border-0">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {destination.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    {destination.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm font-medium">{destination.city}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights?.slice(0, 2).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
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
              className="px-8 py-3 border-gray-300 hover:bg-gray-50 rounded-full"
              onClick={() => navigate('/destinations')}
            >
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Roll-around-the-world?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Built by travelers, for travelers. We understand what truly accessible travel means.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Verification</h3>
              <p className="text-gray-600 leading-relaxed">Every location is personally verified by accessibility specialists and experienced travelers</p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Real Community</h3>
              <p className="text-gray-600 leading-relaxed">Authentic reviews and tips from travelers who share similar accessibility needs</p>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-sm bg-white">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Instant Support</h3>
              <p className="text-gray-600 leading-relaxed">24/7 travel assistance and expert guidance whenever you need it most</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 text-blue-600 mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Explore the World?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join thousands of travelers discovering accessible destinations with confidence. 
              Your next adventure awaits.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-sm"
              onClick={() => navigate('/destinations')}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
