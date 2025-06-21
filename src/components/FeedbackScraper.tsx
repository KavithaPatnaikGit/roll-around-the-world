
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { Globe, Download, Search, AlertCircle, CheckCircle } from 'lucide-react';
import { FirecrawlService } from '@/utils/FirecrawlService';
import { destinations } from '@/data/destinationData';

interface ExtractedFeedback {
  city: string;
  attraction: string;
  tip: string;
  confidence: number;
}

const FeedbackScraper = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [extractedFeedback, setExtractedFeedback] = useState<ExtractedFeedback[]>([]);
  const [selectedFeedback, setSelectedFeedback] = useState<ExtractedFeedback[]>([]);

  const handleScrape = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);
    setExtractedFeedback([]);
    
    try {
      if (apiKey) {
        FirecrawlService.saveApiKey(apiKey);
      }

      const storedApiKey = FirecrawlService.getApiKey();
      if (!storedApiKey) {
        toast({
          title: "Error",
          description: "Please provide your Firecrawl API key",
          variant: "destructive",
        });
        return;
      }

      console.log('Starting feedback scrape for URL:', url);
      setProgress(25);

      const result = await FirecrawlService.crawlWebsite(url);
      setProgress(50);

      if (result.success && result.data) {
        console.log('Scrape successful, processing feedback...');
        const processedFeedback = await processFeedbackData(result.data);
        setExtractedFeedback(processedFeedback);
        setProgress(100);
        
        toast({
          title: "Success",
          description: `Extracted ${processedFeedback.length} feedback tips`,
        });
      } else {
        throw new Error(result.error || "Failed to scrape website");
      }
    } catch (error) {
      console.error('Error scraping feedback:', error);
      toast({
        title: "Error",
        description: "Failed to scrape feedback from website",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const processFeedbackData = async (crawlData: any): Promise<ExtractedFeedback[]> => {
    console.log('Processing crawl data:', crawlData);
    
    const feedbackTips: ExtractedFeedback[] = [];
    
    // Extract content from crawled data
    const content = crawlData.data || crawlData;
    let textContent = '';
    
    if (Array.isArray(content)) {
      textContent = content.map(item => item.markdown || item.content || '').join('\n');
    } else if (content.markdown) {
      textContent = content.markdown;
    } else if (content.content) {
      textContent = content.content;
    }

    // Get all cities and attractions from our data
    const allCities = destinations.flatMap(country => {
      if (country.cities) {
        return country.cities.map(city => ({
          cityName: city.city,
          countryName: country.name,
          attractions: city.wheelchairAccessibleAttractions || []
        }));
      }
      return [{
        cityName: country.city,
        countryName: country.name,
        attractions: country.wheelchairAccessibleAttractions || []
      }];
    });

    // Extract feedback using pattern matching
    const feedbackPatterns = [
      /tip[s]?\s*[:\-]\s*(.+?)(?=\n|$)/gi,
      /accessibility[:\-]\s*(.+?)(?=\n|$)/gi,
      /wheelchair[:\-]\s*(.+?)(?=\n|$)/gi,
      /advice[:\-]\s*(.+?)(?=\n|$)/gi,
      /recommend[ation]*[s]?[:\-]\s*(.+?)(?=\n|$)/gi,
    ];

    const lines = textContent.split('\n');
    
    lines.forEach(line => {
      const cleanLine = line.trim();
      if (cleanLine.length < 10) return; // Skip very short lines
      
      // Check each city and attraction
      allCities.forEach(cityData => {
        const cityMatch = cleanLine.toLowerCase().includes(cityData.cityName.toLowerCase());
        
        if (cityMatch) {
          cityData.attractions.forEach(attraction => {
            const attractionMatch = cleanLine.toLowerCase().includes(attraction.name.toLowerCase());
            
            if (attractionMatch) {
              // Extract the tip from the line
              let tip = cleanLine;
              
              // Clean up the tip text
              feedbackPatterns.forEach(pattern => {
                const match = cleanLine.match(pattern);
                if (match && match[1]) {
                  tip = match[1].trim();
                }
              });
              
              // Remove common prefixes
              tip = tip.replace(/^(tip|advice|recommendation)[s]?[:\-]\s*/i, '');
              tip = tip.replace(/^(for|about)\s+/i, '');
              
              if (tip.length > 20 && tip.length < 300) {
                feedbackTips.push({
                  city: cityData.cityName,
                  attraction: attraction.name,
                  tip: tip,
                  confidence: attractionMatch && cityMatch ? 0.9 : 0.6
                });
              }
            }
          });
          
          // Also check for general city tips
          if (cleanLine.toLowerCase().includes('tip') && cleanLine.length > 30) {
            let tip = cleanLine.replace(/^.*?tip[s]?[:\-]\s*/i, '').trim();
            if (tip.length > 20 && tip.length < 300) {
              feedbackTips.push({
                city: cityData.cityName,
                attraction: 'General',
                tip: tip,
                confidence: 0.7
              });
            }
          }
        }
      });
    });

    // Remove duplicates and sort by confidence
    const uniqueFeedback = feedbackTips.filter((tip, index, self) => 
      index === self.findIndex(t => 
        t.city === tip.city && 
        t.attraction === tip.attraction && 
        t.tip.toLowerCase() === tip.tip.toLowerCase()
      )
    ).sort((a, b) => b.confidence - a.confidence);

    console.log('Extracted feedback tips:', uniqueFeedback);
    return uniqueFeedback;
  };

  const handleSelectFeedback = (feedback: ExtractedFeedback) => {
    setSelectedFeedback(prev => {
      const exists = prev.find(f => 
        f.city === feedback.city && 
        f.attraction === feedback.attraction && 
        f.tip === feedback.tip
      );
      
      if (exists) {
        return prev.filter(f => f !== exists);
      } else {
        return [...prev, feedback];
      }
    });
  };

  const handleApplyFeedback = () => {
    if (selectedFeedback.length === 0) {
      toast({
        title: "No feedback selected",
        description: "Please select at least one feedback tip to apply",
        variant: "destructive",
      });
      return;
    }

    // Store selected feedback in localStorage for now
    // In a real application, this would be sent to your backend
    const existingFeedback = JSON.parse(localStorage.getItem('scrapedFeedback') || '[]');
    const updatedFeedback = [...existingFeedback, ...selectedFeedback];
    localStorage.setItem('scrapedFeedback', JSON.stringify(updatedFeedback));

    toast({
      title: "Feedback Applied",
      description: `Applied ${selectedFeedback.length} feedback tips to attractions`,
    });

    setSelectedFeedback([]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Feedback Scraper
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleScrape} className="space-y-4">
            <div>
              <Label htmlFor="api-key">Firecrawl API Key</Label>
              <Input
                id="api-key"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Firecrawl API key"
              />
            </div>
            
            <div>
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/feedback"
                required
              />
            </div>

            {isLoading && (
              <Progress value={progress} className="w-full" />
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Scraping..." : "Scrape Feedback"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {extractedFeedback.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Extracted Feedback ({extractedFeedback.length} found)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {extractedFeedback.map((feedback, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedFeedback.includes(feedback)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleSelectFeedback(feedback)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-blue-600">{feedback.city}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{feedback.attraction}</span>
                        <div className={`px-2 py-1 rounded text-xs ${
                          feedback.confidence > 0.8 
                            ? 'bg-green-100 text-green-700'
                            : feedback.confidence > 0.6
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {Math.round(feedback.confidence * 100)}% confidence
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">{feedback.tip}</p>
                    </div>
                    {selectedFeedback.includes(feedback) && (
                      <CheckCircle className="w-5 h-5 text-blue-500 ml-2" />
                    )}
                  </div>
                </div>
              ))}
              
              {selectedFeedback.length > 0 && (
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-gray-600">
                    {selectedFeedback.length} feedback tip{selectedFeedback.length !== 1 ? 's' : ''} selected
                  </span>
                  <Button onClick={handleApplyFeedback}>
                    <Download className="w-4 h-4 mr-2" />
                    Apply Selected Feedback
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FeedbackScraper;
