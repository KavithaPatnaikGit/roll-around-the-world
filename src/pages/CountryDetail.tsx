import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { countries } from '@/data/countryData';
import CountryHero from '@/components/CountryHero';
import CountryOverview from '@/components/CountryOverview';
import EmergencyNumbers from '@/components/EmergencyNumbers';
import QuickTips from '@/components/QuickTips';
import WheelchairServices from '@/components/WheelchairServices';
import TransportationInfo from '@/components/TransportationInfo';
import AttractionsListing from '@/components/AttractionsListing';
import DetailedInfo from '@/components/DetailedInfo';
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

const CountryDetail = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<TravelerExperience[]>([]);

  // Load experiences from localStorage on component mount
  useEffect(() => {
    const storedExperiences = localStorage.getItem('travelerExperiences');
    if (storedExperiences) {
      const allExperiences = JSON.parse(storedExperiences);
      const countryExperiences = allExperiences.filter(
        (exp: TravelerExperience) => exp.countryId === parseInt(countryId || '0')
      );
      setExperiences(countryExperiences);
    }
  }, [countryId]);

  const handleExperienceSubmit = (experience: TravelerExperience) => {
    // Get existing experiences from localStorage
    const storedExperiences = localStorage.getItem('travelerExperiences');
    const allExperiences = storedExperiences ? JSON.parse(storedExperiences) : [];
    
    // Add new experience
    const updatedExperiences = [...allExperiences, experience];
    localStorage.setItem('travelerExperiences', JSON.stringify(updatedExperiences));
    
    // Update state to show new experience
    const countryExperiences = updatedExperiences.filter(
      (exp: TravelerExperience) => exp.countryId === parseInt(countryId || '0')
    );
    setExperiences(countryExperiences);
  };

  const country = countries.find(c => c.id === parseInt(countryId || '0'));

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Country not found</h1>
          <button onClick={() => navigate('/')} className="text-blue-600 hover:text-blue-800">
            Back to destinations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <CountryHero country={country} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <CountryOverview country={country} />
          <AttractionsListing attractions={country.wheelchairAccessibleAttractions} cityName={country.city} />
          <EmergencyNumbers emergencyNumbers={country.emergencyNumbers} cityName={country.city} />
          <QuickTips quickTips={country.quickTips} cityName={country.city} />
          <WheelchairServices services={country.wheelchairServices} cityName={country.city} />
          <TransportationInfo transportInfo={country.detailedInfo.transport} cityName={country.city} />
          <DetailedInfo country={country} />

          <div className="space-y-8">
            <TravelerExperienceForm 
              countryId={country.id} 
              onSubmit={handleExperienceSubmit}
            />
            
            <TravelerExperiencesList 
              experiences={experiences}
              countryName={country.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
