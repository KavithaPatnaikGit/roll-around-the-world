
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GoogleForm = () => {
  useEffect(() => {
    document.title = 'Feedback Form - AccessiTravel';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Feedback Form
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Help us improve your travel experience by sharing your feedback. 
                Your input helps us make travel more accessible for everyone.
              </p>
            </header>
            
            <div 
              className="bg-white rounded-lg shadow-lg overflow-hidden" 
              style={{ height: '80vh' }}
              role="region"
              aria-label="Feedback form"
            >
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSf1f-BEpQehfRnGTnxrmXUoFfxeUH6NLS42niyTNiuUDCgo3w/viewform?embedded=true"
                width="100%" 
                height="100%" 
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="AccessiTravel Feedback Form - External Google Form"
                className="w-full h-full"
                aria-describedby="iframe-description"
              >
                <p id="iframe-description">
                  This form is hosted by Google Forms. If you're having trouble accessing the form, 
                  please contact us directly at feedback@accessitravel.com
                </p>
              </iframe>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Having trouble with the form? 
                <a 
                  href="mailto:feedback@accessitravel.com" 
                  className="text-blue-600 hover:text-blue-800 underline ml-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                  aria-label="Send feedback via email"
                >
                  Contact us directly
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GoogleForm;

fetch("https://script.google.com/macros/s/your-deployment-id/exec?location=tokyo&tip_type=entrance")
  .then(res => res.json())
  .then(data => {
    data.forEach(tip => {
      // Render tip.cleaned_tip, tip.Location, tip["Disability Tags"] etc.
      console.log(tip);
    });
  });

