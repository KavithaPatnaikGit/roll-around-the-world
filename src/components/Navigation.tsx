
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accessibility, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Planner', path: '/destination-planner' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="relative">
      {/* Banner Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <nav className="relative bg-transparent shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <Accessibility className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Roll-around-the-world</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`text-sm font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'text-white border-b-2 border-white pb-1'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-white text-blue-600 hover:bg-white/90 border-0"
                onClick={() => navigate('/plan-trip')}
              >
                Plan Your Trip
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col space-y-6 mt-6">
                    {navItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => {
                          navigate(item.path);
                          setIsOpen(false);
                        }}
                        className={`text-left text-lg font-medium transition-colors ${
                          isActivePath(item.path)
                            ? 'text-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 mt-4"
                      onClick={() => {
                        navigate('/plan-trip');
                        setIsOpen(false);
                      }}
                    >
                      Plan Your Trip
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
