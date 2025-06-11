
import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, X, ArrowRight } from 'lucide-react';

interface DestinationData {
  name: string;
  startDate: Date;
  endDate: Date;
}

interface DestinationCardProps {
  destination: DestinationData;
  index: number;
  onRemove: (index: number) => void;
  isLast: boolean;
}

const DestinationCard = ({ destination, index, onRemove, isLast }: DestinationCardProps) => {
  const duration = Math.ceil((destination.endDate.getTime() - destination.startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="relative">
      <div className="relative p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        {/* Step indicator */}
        <div className="absolute -left-2 top-6 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
          {index + 1}
        </div>
        
        <div className="ml-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                {destination.name}
              </h4>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">
                    {format(destination.startDate, 'EEE, MMM dd, yyyy')}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">
                    {format(destination.endDate, 'EEE, MMM dd, yyyy')}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Duration: {duration} day{duration !== 1 ? 's' : ''}
              </div>
            </div>
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
              title="Remove destination"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Connection line to next destination */}
      {!isLast && (
        <div className="absolute -bottom-4 left-3 w-0.5 h-8 bg-blue-300"></div>
      )}
    </div>
  );
};

export default DestinationCard;
