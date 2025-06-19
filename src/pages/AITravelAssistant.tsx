
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WordDownloadButton from '@/components/WordDownloadButton';

const AITravelAssistant = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Travel Assistant
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get instant, personalized assistance for your accessible travel needs. 
              Ask questions about destinations, accommodations, accessibility features, and more.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <p className="text-gray-500 text-lg">
              AI Assistant temporarily unavailable
            </p>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Available 24/7 to help you plan your perfect accessible journey
            </p>
            
            <WordDownloadButton />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AITravelAssistant;
