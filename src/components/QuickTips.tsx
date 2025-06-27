
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, User, ExternalLink, Globe, Bot, Star, MapPin } from 'lucide-react';
import { QuickTip } from '@/data/countryData';
import AddQuickTipForm from './AddQuickTipForm';
import { fetchGoogleScriptTips, categorizeGoogleScriptTip, GoogleScriptTip } from '@/utils/googleScriptApi';

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

interface CategorizedGoogleScriptTip extends GoogleScriptTip {
  category: string;
  id: string;
}

const CATEGORIES = [
  { value: 'all', label: 'All Tips', icon: Lightbulb },
  { value: 'accommodations', label: 'Accommodations', icon: MapPin },
  { value: 'attractions', label: 'Attractions', icon: Star },
  { value: 'city', label: 'City Guide', icon: Globe },
  { value: 'transportation', label: 'Transportation', icon: Bot },
  { value: 'other', label: 'Other', icon: User }
];

const QuickTips = ({ quickTips, cityName, countryId }: QuickTipsProps) => {
  const [userTips, setUserTips] = useState<UserTip[]>([]);
  const [scrapedTips, setScrapedTips] = useState<ScrapedFeedback[]>([]);
  const [googleScriptTips, setGoogleScriptTips] = useState<CategorizedGoogleScriptTip[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoadingGoogleScript, setIsLoadingGoogleScript] = useState(true);

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

  // Load Google Script tips
  useEffect(() => {
    const loadGoogleScriptTips = async () => {
      setIsLoadingGoogleScript(true);
      try {
        const scriptTips = await fetchGoogleScriptTips(cityName);
        
        // Filter for unique tips and categorize them
        const existingTipTexts = [
          ...quickTips.map(tip => tip.text.toLowerCase().trim()),
          ...userTips.map(tip => tip.text.toLowerCase().trim()),
          ...scrapedTips.map(tip => tip.tip.toLowerCase().trim())
        ];

        const uniqueScriptTips = scriptTips
          .filter(tip => tip.cleaned_tip && tip.cleaned_tip.trim())
          .filter(tip => !existingTipTexts.includes(tip.cleaned_tip.toLowerCase().trim()))
          .map((tip, index) => ({
            ...tip,
            category: categorizeGoogleScriptTip(tip),
            id: `google_script_${index}_${Date.now()}`
          }));

        setGoogleScriptTips(uniqueScriptTips);
      } catch (error) {
        console.error('Failed to load Google Script tips:', error);
      } finally {
        setIsLoadingGoogleScript(false);
      }
    };

    loadGoogleScriptTips();
  }, [cityName, quickTips, userTips, scrapedTips]);

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
  const filteredGoogleScriptTips = filterTipsByCategory(googleScriptTips, selectedCategory);
  const filteredQuickTips = selectedCategory === 'all' ? quickTips : quickTips.filter(tip => (tip as any).category === selectedCategory);

  // Combine original tips with user tips for duplicate checking
  const allTips = [...quickTips, ...userTips];

  const renderTipCard = (tip: any, type: 'curated' | 'community' | 'ai' | 'scraped', index: number) => {
    const colors = {
      curated: 'border-l-amber-500 bg-amber-50',
      community: 'border-l-blue-500 bg-blue-50',
      ai: 'border-l-green-500 bg-green-50',
      scraped: 'border-l-purple-500 bg-purple-50'
    };

    const icons = {
      curated: <Lightbulb className="w-4 h-4 text-amber-600" />,
      community: <User className="w-4 h-4 text-blue-600" />,
      ai: <Bot className="w-4 h-4 text-green-600" />,
      scraped: <Globe className="w-4 h-4 text-purple-600" />
    };

    return (
      <div key={`${type}-${index}`} className={`border-l-4 ${colors[type]} p-4 rounded-r-lg mb-3`}>
        <div className="flex items-start gap-3">
          {icons[type]}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {(tip.placeName || tip.Location || tip.attraction) && (
                <Badge variant="outline" className="text-xs font-medium">
                  {tip.placeName || tip.Location || tip.attraction}
                </Badge>
              )}
              {tip.category && (
                <Badge variant="secondary" className="text-xs">
                  {CATEGORIES.find(c => c.value === tip.category)?.label}
                </Badge>
              )}
              {tip["Disability Tags"] && (
                <Badge className="text-xs bg-blue-100 text-blue-700">
                  {tip["Disability Tags"]}
                </Badge>
              )}
              {tip.confidence && (
                <Badge 
                  className={`text-xs ${
                    tip.confidence > 0.8 
                      ? 'bg-green-100 text-green-700'
                      : tip.confidence > 0.6
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {Math.round(tip.confidence * 100)}% match
                </Badge>
              )}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              {tip.text || tip.cleaned_tip || tip.tip}
            </p>
            <div className="flex items-center justify-between">
              <a 
                href={tip.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline transition-colors inline-flex items-center gap-1 text-xs"
              >
                Learn more
                <ExternalLink className="w-3 h-3" />
              </a>
              {tip.addedAt && (
                <span className="text-xs text-gray-500">
                  Added {new Date(tip.addedAt).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-500" />
          Curated Quick Tips for {cityName}
        </CardTitle>
        <CardDescription>
          Essential accessibility tips from experienced wheelchair travelers, web resources, and the community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AddQuickTipForm 
          existingTips={allTips}
          onAddTip={handleAddTip}
          cityName={cityName}
        />

        {/* Enhanced Category Selection */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
          <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-blue-600" />
            Filter tips by category:
          </h4>
          <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CATEGORIES.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.value} className="flex items-center space-x-2 p-2 rounded border bg-white hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={category.value} id={category.value} />
                  <Label htmlFor={category.value} className="text-sm font-medium cursor-pointer flex items-center gap-2">
                    <IconComponent className="w-3 h-3" />
                    {category.label}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
        
        <div className="space-y-6">
          {/* Original curated tips */}
          {filteredQuickTips.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Expert Curated Tips
                {selectedCategory !== 'all' && (
                  <Badge variant="outline" className="ml-2">
                    {CATEGORIES.find(c => c.value === selectedCategory)?.label}
                  </Badge>
                )}
              </h4>
              <div className="space-y-3">
                {filteredQuickTips.map((tip, index) => renderTipCard(tip, 'curated', index))}
              </div>
            </div>
          )}

          {/* Google Apps Script tips */}
          {filteredGoogleScriptTips.length > 0 && (
            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5 text-green-500" />
                AI-Generated Tips from Web Sources
                {selectedCategory !== 'all' && (
                  <Badge variant="outline" className="ml-2">
                    {CATEGORIES.find(c => c.value === selectedCategory)?.label}
                  </Badge>
                )}
              </h4>
              <div className="space-y-3">
                {filteredGoogleScriptTips
                  .sort((a, b) => a.Location.localeCompare(b.Location))
                  .map((tip, index) => renderTipCard(tip, 'ai', index))}
              </div>
            </div>
          )}

          {/* Community tips */}
          {filteredUserTips.length > 0 && (
            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                <User className="w-5 h-5 text-blue-500" />
                Community Contributed Tips
                {selectedCategory !== 'all' && (
                  <Badge variant="outline" className="ml-2">
                    {CATEGORIES.find(c => c.value === selectedCategory)?.label}
                  </Badge>
                )}
              </h4>
              <div className="space-y-3">
                {filteredUserTips
                  .sort((a, b) => (a.placeName || '').localeCompare(b.placeName || ''))
                  .map((tip, index) => renderTipCard(tip, 'community', index))}
              </div>
            </div>
          )}

          {/* Scraped feedback tips */}
          {filteredScrapedTips.length > 0 && (
            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                <Globe className="w-5 h-5 text-purple-500" />
                Web Scraped Feedback Tips
                {selectedCategory !== 'all' && (
                  <Badge variant="outline" className="ml-2">
                    {CATEGORIES.find(c => c.value === selectedCategory)?.label}
                  </Badge>
                )}
              </h4>
              <div className="space-y-3">
                {filteredScrapedTips
                  .sort((a, b) => a.attraction.localeCompare(b.attraction))
                  .map((tip, index) => renderTipCard(tip, 'scraped', index))}
              </div>
            </div>
          )}

          {/* Loading state for Google Script tips */}
          {isLoadingGoogleScript && (
            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5 text-green-500" />
                Loading AI-Generated Tips...
              </h4>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse border-l-4 border-l-gray-300 bg-gray-50 p-4 rounded-r-lg">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Show message when no tips match the filter */}
          {selectedCategory !== 'all' && 
           filteredQuickTips.length === 0 && 
           filteredScrapedTips.length === 0 && 
           filteredUserTips.length === 0 && 
           filteredGoogleScriptTips.length === 0 && 
           !isLoadingGoogleScript && (
            <div className="text-center py-12 text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
              <Lightbulb className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">No tips found</h3>
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
