
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Lightbulb, User, ExternalLink, Globe } from 'lucide-react';
import { QuickTip } from '@/data/countryData';
import AddQuickTipForm from './AddQuickTipForm';

interface QuickTipsProps {
  quickTips: QuickTip[];
  cityName: string;
  countryId: number;
}

interface UserTip extends QuickTip {
  id: string;
  addedAt: string;
  isUserGenerated: boolean;
  category?: string;
  placeName?: string;
}

interface ScrapedFeedback {
  city: string;
  attraction: string;
  tip: string;
  confidence: number;
  category?: string;
}

const CATEGORIES = [
  { value: 'all', label: 'All Tips' },
  { value: 'accommodations', label: 'Accommodations' },
  { value: 'attractions', label: 'Attractions' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'city', label: 'City' },
  { value: 'other', label: 'Other' }
];

const QuickTips = ({ quickTips, cityName, countryId }: QuickTipsProps) => {
  const [userTips, setUserTips] = useState<UserTip[]>([]);
  const [scrapedTips, setScrapedTips] = useState<ScrapedFeedback[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load user tips from localStorage on component mount
  useEffect(() => {
    const storedTips = localStorage.getItem(`userQuickTips_${countryId}`);
    if (storedTips) {
      setUserTips(JSON.parse(storedTips));
    }

    // Load scraped feedback tips
    const storedFeedback = localStorage.getItem('scrapedFeedback');
    if (storedFeedback) {
      const allScrapedTips = JSON.parse(storedFeedback) as ScrapedFeedback[];
      const cityScrapedTips = allScrapedTips.filter(tip => 
        tip.city.toLowerCase() === cityName.toLowerCase()
      );
      setScrapedTips(cityScrapedTips);
    }
  }, [countryId, cityName]);

  const handleAddTip = (newTip: QuickTip & { category?: string; placeName?: string }) => {
    const userTip: UserTip = {
      ...newTip,
      id: `user_${Date.now()}`,
      addedAt: new Date().toISOString(),
      isUserGenerated: true
    };

    const updatedUserTips = [...userTips, userTip];
    setUserTips(updatedUserTips);
    localStorage.setItem(`userQuickTips_${countryId}`, JSON.stringify(updatedUserTips));
  };

  // Filter tips based on selected category
  const filterTipsByCategory = (tips: any[], category: string) => {
    if (category === 'all') return tips;
    return tips.filter(tip => tip.category === category);
  };

  const filteredUserTips = filterTipsByCategory(userTips, selectedCategory);
  const filteredScrapedTips = filterTipsByCategory(scrapedTips, selectedCategory);
  const filteredQuickTips = selectedCategory === 'all' ? quickTips : quickTips.filter(tip => (tip as any).category === selectedCategory);

  // Combine original tips with user tips for duplicate checking
  const allTips = [...quickTips, ...userTips];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Lightbulb className="w-6 h-6" />
          Quick Tips for {cityName}
        </CardTitle>
        <CardDescription>
          Essential accessibility tips from experienced wheelchair travelers and the community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AddQuickTipForm 
          existingTips={allTips}
          onAddTip={handleAddTip}
          cityName={cityName}
        />

        {/* Category Selection */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-3">Filter tips by category:</h4>
          <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="flex flex-wrap gap-4">
            {CATEGORIES.map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <RadioGroupItem value={category.value} id={category.value} />
                <Label htmlFor={category.value} className="text-sm font-medium cursor-pointer">
                  {category.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="space-y-4">
          {/* Original curated tips */}
          {filteredQuickTips.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                Curated Tips
                {selectedCategory !== 'all' && (
                  <span className="text-sm font-normal text-gray-600">
                    ({CATEGORIES.find(c => c.value === selectedCategory)?.label})
                  </span>
                )}
              </h4>
              <ul className="space-y-3">
                {filteredQuickTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      {tip.text}{' '}
                      <a 
                        href={tip.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline transition-colors inline-flex items-center gap-1"
                      >
                        Learn more
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Scraped feedback tips */}
          {filteredScrapedTips.length > 0 && (
            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-500" />
                Scraped Feedback Tips
                {selectedCategory !== 'all' && (
                  <span className="text-sm font-normal text-gray-600">
                    ({CATEGORIES.find(c => c.value === selectedCategory)?.label})
                  </span>
                )}
              </h4>
              <ul className="space-y-3">
                {filteredScrapedTips.map((tip, index) => (
                  <li key={`scraped-${index}`} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-purple-600">
                          {tip.attraction}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          tip.confidence > 0.8 
                            ? 'bg-green-100 text-green-700'
                            : tip.confidence > 0.6
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {Math.round(tip.confidence * 100)}% match
                        </span>
                        {tip.category && (
                          <span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-700">
                            {CATEGORIES.find(c => c.value === tip.category)?.label}
                          </span>
                        )}
                      </div>
                      <span className="text-gray-700 text-sm">{tip.tip}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* User-generated tips */}
          {filteredUserTips.length > 0 && (
            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-500" />
                Community Tips
                {selectedCategory !== 'all' && (
                  <span className="text-sm font-normal text-gray-600">
                    ({CATEGORIES.find(c => c.value === selectedCategory)?.label})
                  </span>
                )}
              </h4>
              <ul className="space-y-3">
                {filteredUserTips.map((tip) => (
                  <li key={tip.id} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {tip.placeName && (
                          <span className="text-sm font-medium text-blue-600">
                            {tip.placeName}
                          </span>
                        )}
                        {tip.category && (
                          <span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-700">
                            {CATEGORIES.find(c => c.value === tip.category)?.label}
                          </span>
                        )}
                      </div>
                      <span className="text-gray-700">
                        {tip.text}{' '}
                        <a 
                          href={tip.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline transition-colors inline-flex items-center gap-1"
                        >
                          Learn more
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Added {new Date(tip.addedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Show message when no tips match the filter */}
          {selectedCategory !== 'all' && 
           filteredQuickTips.length === 0 && 
           filteredScrapedTips.length === 0 && 
           filteredUserTips.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No tips found for the "{CATEGORIES.find(c => c.value === selectedCategory)?.label}" category.</p>
              <p className="text-sm mt-2">Try selecting a different category or add your own tip!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickTips;
