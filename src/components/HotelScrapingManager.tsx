
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Settings, Database } from 'lucide-react';
import { HotelScrapingService } from '@/utils/HotelScrapingService';
import { FirecrawlService } from '@/utils/FirecrawlService';
import { useToast } from '@/components/ui/use-toast';

interface HotelScrapingManagerProps {
  cityName: string;
  onHotelsUpdate?: (hotels: any[]) => void;
}

const HotelScrapingManager = ({ cityName, onHotelsUpdate }: HotelScrapingManagerProps) => {
  const [apiKey, setApiKey] = useState(FirecrawlService.getApiKey() || '');
  const [isTesting, setIsTesting] = useState(false);
  const [isValidKey, setIsValidKey] = useState(!!FirecrawlService.getApiKey());
  const { toast } = useToast();

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive"
      });
      return;
    }

    setIsTesting(true);
    const isValid = await FirecrawlService.testApiKey(apiKey);
    
    if (isValid) {
      FirecrawlService.saveApiKey(apiKey);
      setIsValidKey(true);
      toast({
        title: "Success",
        description: "Firecrawl API key saved and verified",
      });
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please check your Firecrawl API key",
        variant: "destructive"
      });
    }
    
    setIsTesting(false);
  };

  const handleRefreshHotels = async () => {
    if (!isValidKey) {
      toast({
        title: "API Key Required",
        description: "Please set up your Firecrawl API key first",
        variant: "destructive"
      });
      return;
    }

    const result = await HotelScrapingService.refreshHotelsForCity(cityName);
    
    if (result && onHotelsUpdate) {
      onHotelsUpdate(result.hotels);
      toast({
        title: "Hotels Updated",
        description: `Refreshed hotel data for ${cityName}`,
      });
    } else {
      toast({
        title: "Update Failed",
        description: "Unable to refresh hotel data",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Database className="w-5 h-5 text-blue-600" />
          Hotel Data Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isValidKey && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Setup Required</h4>
            <p className="text-sm text-yellow-700 mb-3">
              Enter your Firecrawl API key to enable live hotel data scraping from booking sites.
            </p>
            <div className="flex gap-2">
              <Input
                type="password"
                placeholder="Enter Firecrawl API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleSaveApiKey}
                disabled={isTesting}
                size="sm"
              >
                {isTesting ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Testing
                  </>
                ) : (
                  'Save'
                )}
              </Button>
            </div>
          </div>
        )}

        {isValidKey && (
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
            <div>
              <h4 className="font-medium text-green-800">Ready to Scrape Hotels</h4>
              <p className="text-sm text-green-700">
                Fetch the latest accessible hotel listings for {cityName}
              </p>
            </div>
            <Button 
              onClick={handleRefreshHotels}
              size="sm"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Update Hotels
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Badge variant="outline" className="mb-2">Sources</Badge>
            <p className="text-gray-600">Booking.com, Agoda</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <Badge variant="outline" className="mb-2">Focus</Badge>
            <p className="text-gray-600">4-5 Star Accessible</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <Badge variant="outline" className="mb-2">Features</Badge>
            <p className="text-gray-600">Tips & Accessibility</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelScrapingManager;
