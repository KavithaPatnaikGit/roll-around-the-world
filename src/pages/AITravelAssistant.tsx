
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
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8" style={{ height: '50vh' }}>
            <iframe 
              src="https://app.relevanceai.com/agents/bcbe5a/5f9108a2948f-42cb-b23d-c8f3b5b3af7d/47a49c1b-1369-4853-ae75-77a6a81ea827/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false" 
              width="100%" 
              height="100%" 
              frameBorder={0}
              title="AI Travel Assistant"
              className="w-full h-full"
            />
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
