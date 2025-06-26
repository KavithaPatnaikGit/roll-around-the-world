
import React from 'react';
import FeedbackScraper from '@/components/FeedbackScraper';
import ContactInfo from '@/components/ContactInfo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Globe, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FeedbackScraperPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Search className="w-8 h-8 text-blue-600" />
              Feedback Scraper
            </h1>
            <p className="text-gray-600 text-lg">
              Extract accessibility feedback and tips from websites to enhance our destination guides.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      Web Scraping
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Use Firecrawl to extract content from feedback websites and travel forums.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Search className="w-5 h-5 text-green-600" />
                      Smart Matching
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Automatically match extracted tips with cities and attractions in our database.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-amber-600" />
                      Unique Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Ensure only unique, valuable accessibility tips are added to our guides.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <FeedbackScraper />

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>How it works</CardTitle>
                  <CardDescription>
                    Step-by-step process for extracting and applying feedback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Enter your Firecrawl API key</h4>
                        <p className="text-sm text-gray-600">Get your API key from firecrawl.dev to enable web scraping</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Provide feedback website URL</h4>
                        <p className="text-sm text-gray-600">Enter the URL of a website containing accessibility feedback or travel tips</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Review extracted tips</h4>
                        <p className="text-sm text-gray-600">Review automatically matched tips with confidence scores</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Select and apply</h4>
                        <p className="text-sm text-gray-600">Choose relevant tips and apply them to enhance destination guides</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FeedbackScraperPage;
