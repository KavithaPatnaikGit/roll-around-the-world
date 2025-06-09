
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { QuickTip } from '@/data/countryData';

interface QuickTipsProps {
  quickTips: QuickTip[];
  cityName: string;
}

const QuickTips = ({ quickTips, cityName }: QuickTipsProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Lightbulb className="w-6 h-6" />
          Quick Tips for {cityName}
        </CardTitle>
        <CardDescription>
          Essential accessibility tips from experienced wheelchair travelers
        </CardDescription>
      </CardHeader>
      <CardContent>
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
                  className="text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                  Learn more
                </a>
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default QuickTips;
