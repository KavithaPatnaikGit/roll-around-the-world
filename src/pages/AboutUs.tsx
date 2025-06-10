
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accessibility, Users, Award, Globe, Heart, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">AccessiTravel</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make travel accessible for everyone. Our platform connects travelers 
            with disabilities to verified accessible destinations worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="w-6 h-6 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">
                To eliminate barriers in travel by providing comprehensive, verified accessibility 
                information and creating a supportive community for travelers with disabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="w-6 h-6 text-red-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">
                A world where every destination is accessible, and every traveler can explore 
                with confidence, independence, and joy, regardless of their abilities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Accessibility className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility First</h3>
              <p className="text-gray-600">Every feature we build prioritizes accessibility and inclusive design.</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">Real experiences from our community shape everything we do.</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Every destination is personally verified by accessibility experts.</p>
            </Card>
          </div>
        </div>

        {/* Story */}
        <Card className="p-8 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto text-gray-700 space-y-4 text-lg leading-relaxed">
              <p>
                AccessiTravel was born from a simple frustration: the lack of reliable accessibility 
                information for travelers with disabilities. Our founder, after experiencing countless 
                travel barriers, decided to create the resource they wished existed.
              </p>
              <p>
                What started as a personal project quickly grew into a global community. Today, we work 
                with accessibility experts, local tourism boards, and thousands of travelers to verify 
                and share accessibility information for destinations worldwide.
              </p>
              <p>
                We believe that travel is a fundamental human right, and everyone deserves to explore 
                the world with confidence and dignity. Through our platform, we're not just sharing 
                information – we're building a movement toward truly inclusive travel.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Impact */}
        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Travelers Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Destinations Verified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
