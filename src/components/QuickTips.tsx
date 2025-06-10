
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, User, ExternalLink } from 'lucide-react';
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
}

const QuickTips = ({ quickTips, cityName, countryId }: QuickTipsProps) => {
  const [userTips, setUserTips] = useState<UserTip[]>([]);

  // Load user tips from localStorage on component mount
  useEffect(() => {
    const storedTips = localStorage.getItem(`userQuickTips_${countryId}`);
    if (storedTips) {
      setUserTips(JSON.parse(storedTips));
    }
  }, [countryId]);

  const handleAddTip = (newTip: QuickTip) => {
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
        
        <div className="space-y-4">
          {/* Original curated tips */}
          {quickTips.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                Curated Tips
              </h4>
              <ul className="space-y-3">
                {quickTips.map((tip, index) => (
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

          {/* User-generated tips */}
          {userTips.length > 0 && (
            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <User className="w-4 h-4 text-blue-500" />
                Community Tips
              </h4>
              <ul className="space-y-3">
                {userTips.map((tip) => (
                  <li key={tip.id} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickTips;
