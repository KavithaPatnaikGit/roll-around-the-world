
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Globe, Settings, Eye, EyeOff } from 'lucide-react';

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
}

const FirecrawlSection = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!FirecrawlService.getApiKey());
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [crawlResult, setCrawlResult] = useState<CrawlResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    const isValid = await FirecrawlService.testApiKey(apiKey);
    if (isValid) {
      FirecrawlService.saveApiKey(apiKey);
      setShowApiKeyInput(false);
      setApiKey('');
      toast({
        title: "Success",
        description: "Firecrawl API key saved successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid API key. Please check and try again.",
        variant: "destructive",
      });
    }
  };

  const handleCrawl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a website URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setProgress(0);
    setCrawlResult(null);
    
    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      const result = await FirecrawlService.crawlWebsite(url);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Website crawled successfully! Results are ready below.",
        });
        setCrawlResult(result.data);
      } else {
        toast({
          title: "Crawl Failed",
          description: result.error || "Failed to crawl website",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error crawling website:', error);
      toast({
        title: "Error",
        description: "Failed to crawl website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Web Scraper for Travel Research
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {showApiKeyInput && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 mb-3">
                To use the web scraper, you need a Firecrawl API key. 
                <a 
                  href="https://firecrawl.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline ml-1"
                >
                  Get your free API key here
                </a>
              </p>
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Enter your Firecrawl API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSaveApiKey} size="sm">
                  <Settings className="w-4 h-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          )}

          {!showApiKeyInput && (
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-sm text-green-800">✓ Firecrawl API key configured</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowApiKeyInput(true)}
              >
                <Settings className="w-4 h-4 mr-1" />
                Change Key
              </Button>
            </div>
          )}

          <form onSubmit={handleCrawl} className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                Website URL to Scrape
              </label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/travel-guide"
                disabled={isLoading || showApiKeyInput}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Scrape travel websites, hotel reviews, destination guides, and more
              </p>
            </div>

            {isLoading && (
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-gray-600 text-center">
                  Crawling website... {progress}%
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading || showApiKeyInput}
              className="w-full"
            >
              {isLoading ? "Crawling..." : "Scrape Website"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {crawlResult && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Scraping Results</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowResults(!showResults)}
              >
                {showResults ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showResults ? 'Hide' : 'Show'} Details
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{crawlResult.status}</div>
                <div className="text-xs text-gray-500">Status</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{crawlResult.completed}</div>
                <div className="text-xs text-gray-500">Pages Crawled</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{crawlResult.total}</div>
                <div className="text-xs text-gray-500">Total Found</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{crawlResult.creditsUsed}</div>
                <div className="text-xs text-gray-500">Credits Used</div>
              </div>
            </div>

            {showResults && crawlResult.data && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-gray-900">Scraped Content</h4>
                <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-auto">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {JSON.stringify(crawlResult.data, null, 2)}
                  </pre>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Copy this data and paste it into the AI chat above for analysis and recommendations.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FirecrawlSection;
