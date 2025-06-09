
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Home, MapPin, Train, Wrench } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Menubar className="border-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger 
          className={`cursor-pointer ${isActive('/') ? 'bg-accent' : ''}`}
          onClick={() => navigate('/')}
        >
          <Home className="w-4 h-4 mr-2" />
          Home
        </MenubarTrigger>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <MapPin className="w-4 h-4 mr-2" />
          Destinations
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => navigate('/')}>
            All Destinations
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/country/1')}>
            Netherlands
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/country/2')}>
            Japan
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/country/3')}>
            Australia
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/country/4')}>
            United Kingdom
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/country/5')}>
            Germany
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/country/6')}>
            Canada
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/country/7')}>
            Singapore
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/country/8')}>
            Sweden
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger 
          className={`cursor-pointer ${isActive('/transportation') ? 'bg-accent' : ''}`}
          onClick={() => navigate('/transportation')}
        >
          <Train className="w-4 h-4 mr-2" />
          Transportation
        </MenubarTrigger>
      </MenubarMenu>
      
      <MenubarMenu>
        <MenubarTrigger 
          className={`cursor-pointer ${isActive('/wheelchair-services') ? 'bg-accent' : ''}`}
          onClick={() => navigate('/wheelchair-services')}
        >
          <Wrench className="w-4 h-4 mr-2" />
          Wheelchair Services
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navigation;
