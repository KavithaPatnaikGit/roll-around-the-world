import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about accessibility? Need help planning your trip? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">support@accessitravel.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (571) 426-6419</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Accessibility Ave<br />San Francisco, CA 94102</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri: 9am-6pm PST<br />Sat-Sun: 10am-4pm PST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Quick Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat (24/7)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Globe className="w-4 h-4 mr-2" />
                  Help Center
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Travel Support
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <CardContent className="text-center">
                <h3 className="font-semibold text-blue-900 mb-2">Need Immediate Help?</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Our accessibility experts are available 24/7 for urgent travel assistance.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
