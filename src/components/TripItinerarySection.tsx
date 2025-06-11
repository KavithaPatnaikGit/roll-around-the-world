
import React from 'react';
import { Clock } from 'lucide-react';
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Control } from 'react-hook-form';
import DestinationCard from './DestinationCard';

interface DestinationData {
  name: string;
  startDate: Date;
  endDate: Date;
}

interface TripItinerarySectionProps {
  control: Control<any>;
  sortedDestinations: DestinationData[];
  onRemoveDestination: (index: number) => void;
}

const TripItinerarySection = ({ 
  control, 
  sortedDestinations, 
  onRemoveDestination 
}: TripItinerarySectionProps) => {
  if (sortedDestinations.length === 0) {
    return null;
  }

  return (
    <FormField
      control={control}
      name="destinations"
      render={() => (
        <FormItem>
          <FormLabel className="flex items-center gap-2 text-lg font-semibold">
            <Clock className="w-5 h-5 text-blue-600" />
            Your Trip Itinerary
            <span className="text-sm font-normal text-gray-600">
              ({sortedDestinations.length} destination{sortedDestinations.length !== 1 ? 's' : ''})
            </span>
          </FormLabel>
          <div className="space-y-4">
            {sortedDestinations.map((destination, index) => (
              <DestinationCard
                key={`${destination.name}-${destination.startDate.getTime()}`}
                destination={destination}
                index={index}
                onRemove={onRemoveDestination}
                isLast={index === sortedDestinations.length - 1}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TripItinerarySection;
