
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Train } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReadAloudButton from './ReadAloudButton';

interface TransportationInfoProps {
  transportInfo: string;
  cityName: string;
}

const TransportationInfo = ({ transportInfo, cityName }: TransportationInfoProps) => {
  const navigate = useNavigate();

  const transportText = `Transportation information for ${cityName}. ${transportInfo}`;

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Train className="w-6 h-6" />
              Transportation
            </CardTitle>
            <CardDescription>
              Detailed information about wheelchair accessible transportation options in {cityName}
            </CardDescription>
          </div>
          <ReadAloudButton 
            text={transportText}
            label="Read transport info"
          />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{transportInfo}</p>
        <Button
          onClick={() => navigate('/transportation')}
          className="flex items-center gap-2"
        >
          <Train className="w-4 h-4" />
          View detailed transportation guide & ticketing information
        </Button>
      </CardContent>
    </Card>
  );
};

export default TransportationInfo;
