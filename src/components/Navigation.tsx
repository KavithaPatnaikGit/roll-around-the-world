
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
    { label: 'AI Assistant', path: '/ai-assistant' },
    { label: 'Feedback', path: '/feedback' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleKeyDown = (event: React.KeyboardEvent, path: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate(path);
    }
  };

  return (
    <nav 
      className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
            onClick={() => handleNavigation('/')}
            onKeyDown={(e) => handleKeyDown(e, '/')}
            tabIndex={0}
            role="button"
            aria-label="AccessiTravel home"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Accessibility className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-gray-900">AccessiTravel</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              {navItems.map((item) => (
                <li key={item.path} role="none">
                  <button
                    onClick={() => handleNavigation(item.path)}
                    onKeyDown={(e) => handleKeyDown(e, item.path)}
                    className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 ${
                      isActivePath(item.path)
                        ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    role="menuitem"
                    aria-current={isActivePath(item.path) ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              onClick={() => handleNavigation('/plan-trip')}
              aria-label="Plan your accessible trip"
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  aria-label="Open navigation menu"
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px]"
                id="mobile-menu"
                aria-label="Mobile navigation menu"
              >
                <nav className="flex flex-col space-y-6 mt-6" role="navigation">
                  <ul className="flex flex-col space-y-6" role="menu">
                    {navItems.map((item) => (
                      <li key={item.path} role="none">
                        <button
                          onClick={() => {
                            handleNavigation(item.path);
                            setIsOpen(false);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleNavigation(item.path);
                              setIsOpen(false);
                            }
                          }}
                          className={`text-left text-lg font-medium transition-colors w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 ${
                            isActivePath(item.path)
                              ? 'text-blue-600'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                          role="menuitem"
                          aria-current={isActivePath(item.path) ? 'page' : undefined}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 mt-4 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    onClick={() => {
                      handleNavigation('/plan-trip');
                      setIsOpen(false);
                    }}
                    aria-label="Plan your accessible trip"
                  >
                    Plan Your Trip
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
