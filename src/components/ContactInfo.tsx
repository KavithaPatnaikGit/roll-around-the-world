
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
