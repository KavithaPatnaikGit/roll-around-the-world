
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '@/data/destinationData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DestinationHero from '@/components/DestinationHero';
import DestinationOverview from '@/components/DestinationOverview';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import EmergencyNumbers from '@/components/EmergencyNumbers';
import QuickTips from '@/components/QuickTips';
import WheelchairServices from '@/components/WheelchairServices';
import AttractionsListing from '@/components/AttractionsListing';
import TravelerExperienceForm from '@/components/TravelerExperienceForm';
import TravelerExperiencesList from '@/components/TravelerExperiencesList';

interface TravelerExperience {
  id: string;
  name: string;
  email: string;
  shareContactPublic: boolean;
  experience: string;
  blogPosts: string;
  photos: File[];
  countryId: number;
  submittedAt: string;
}

const DestinationDetail = () => {
  const { destinationId, countryId } = useParams();
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<TravelerExperience[]>([]);

  // Support both new destinationId and legacy countryId parameters
  const id = destinationId || countryId;
  const destination = destinations.find(d => d.id === parseInt(id || '0'));

  useEffect(() => {
    const storedExperiences = localStorage.getItem('travelerExperiences');
    if (storedExperiences) {
      const allExperiences = JSON.parse(storedExperiences);
      const destinationExperiences = allExperiences.filter(
        (exp: TravelerExperience) => exp.countryId === parseInt(id || '0')
      );
      setExperiences(destinationExperiences);
    }
  }, [id]);

  const handleExperienceSubmit = (experience: TravelerExperience) => {
    const storedExperiences = localStorage.getItem('travelerExperiences');
    const allExperiences = storedExperiences ? JSON.parse(storedExperiences) : [];
    
    const updatedExperiences = [...allExperiences, experience];
    localStorage.setItem('travelerExperiences', JSON.stringify(updatedExperiences));
    
    const destinationExperiences = updatedExperiences.filter(
      (exp: TravelerExperience) => exp.countryId === parseInt(id || '0')
    );
    setExperiences(destinationExperiences);
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Destination not found</h1>
            <button 
              onClick={() => navigate('/destinations')} 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Back to destinations
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      <DestinationHero destination={destination} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <DestinationOverview destination={destination} />
          <AccessibilityFeatures destination={destination} />
          <AttractionsListing 
            attractions={destination.wheelchairAccessibleAttractions} 
            cityName={destination.city} 
          />
          <EmergencyNumbers 
            emergencyNumbers={destination.emergencyNumbers} 
            cityName={destination.city} 
          />
          <QuickTips 
            quickTips={destination.quickTips} 
            cityName={destination.city} 
            countryId={destination.id} 
          />
          <WheelchairServices 
            services={destination.wheelchairServices} 
            cityName={destination.city} 
          />

          <div className="space-y-8">
            <TravelerExperienceForm 
              countryId={destination.id} 
              onSubmit={handleExperienceSubmit}
            />
            
            <TravelerExperiencesList 
              experiences={experiences}
              countryName={destination.name}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
