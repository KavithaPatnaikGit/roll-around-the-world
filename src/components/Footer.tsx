
import React from 'react';
import { Accessibility, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Accessibility className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">RollAroundWorld</span>
            </div>
            <p className="text-gray-400 text-sm">
              Making travel accessible for everyone, everywhere. Discover the world without barriers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => navigate('/')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/destinations')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Destinations
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                About Us
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility Guide
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Travel Insurance
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                support@rollaroundworld.com
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                +1 (571) 426-6419
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 RollAroundWorld. All rights reserved. Making the world accessible, one destination at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
