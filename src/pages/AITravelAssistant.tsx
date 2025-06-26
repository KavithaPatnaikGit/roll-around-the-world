
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import WordDownloadButton from '@/components/WordDownloadButton';

const AITravelAssistant = () => {
  useEffect(() => {
    document.title = 'AI Travel Assistant - RollAroundWorld';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                AI Travel Assistant
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get instant, personalized assistance for your accessible travel needs. 
                Ask questions about destinations, accommodations, accessibility features, and more.
              </p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div 
                  className="bg-white rounded-lg shadow-lg overflow-hidden mb-8" 
                  style={{ height: '50vh' }}
                  role="region"
                  aria-label="AI Travel Assistant Chat"
                >
                  <iframe 
                    src="https://app.relevanceai.com/agents/bcbe5a/5f9108a2948f-42cb-b23d-c8f3b5b3af7d/47a49c1b-1369-4853-ae75-77a6a81ea827/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false" 
                    width="100%" 
                    height="100%" 
                    frameBorder={0}
                    title="AI Travel Assistant - Accessible Travel Chat Bot"
                    className="w-full h-full"
                    aria-describedby="ai-assistant-description"
                  />
                  <div id="ai-assistant-description" className="sr-only">
                    Interactive AI assistant for accessible travel planning. You can ask questions about destinations, 
                    accommodations, and accessibility features. The assistant is available 24/7 to help plan your journey.
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-gray-500">
                    Available 24/7 to help you plan your perfect accessible journey
                  </p>
                  
                  <WordDownloadButton />
                </div>
                
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-blue-900 mb-3">Accessibility Notice</h2>
                  <p className="text-blue-800 text-sm">
                    Our AI assistant is designed to be screen reader compatible. If you experience any 
                    accessibility issues while using the chat interface, please contact our support team 
                    at <a 
                      href="mailto:support@rollaroundworld.com" 
                      className="underline hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                    >
                      support@rollaroundworld.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AITravelAssistant;
