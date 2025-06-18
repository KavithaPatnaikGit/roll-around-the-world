
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GoogleForm = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Feedback Form
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Help us improve your travel experience by sharing your feedback
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '80vh' }}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYxP6yZ8qhXhRxbSV5L4hTw9Kc8jE6nF7oU2iG3vN4mQ1pR8/viewform?embedded=true"
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Feedback Form"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GoogleForm;
