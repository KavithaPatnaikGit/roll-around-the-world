
import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface AddDestinationSectionProps {
  newDestination: {
    name: string;
    startDate?: Date;
    endDate?: Date;
  };
  setNewDestination: (destination: {
    name: string;
    startDate?: Date;
    endDate?: Date;
  }) => void;
  addDestination: () => void;
  tripStartDate?: Date;
  tripEndDate?: Date;
}

const AddDestinationSection = ({
  newDestination,
  setNewDestination,
  addDestination,
  tripStartDate,
  tripEndDate
}: AddDestinationSectionProps) => {
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Add Destinations
      </h3>
      
      <div className="space-y-3">
        <Input
          placeholder="Destination name..."
          value={newDestination.name}
          onChange={(e) => setNewDestination({ ...newDestination, name: e.target.value })}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Start Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !newDestination.startDate && "text-muted-foreground"
                  )}
                >
                  {newDestination.startDate ? (
                    format(newDestination.startDate, "MMM dd, yyyy")
                  ) : (
                    <span>Pick date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={newDestination.startDate}
                  onSelect={(date) => setNewDestination({ ...newDestination, startDate: date })}
                  disabled={(date) => 
                    date < new Date() || 
                    (tripStartDate && date < tripStartDate) ||
                    (tripEndDate && date > tripEndDate)
                  }
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">End Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !newDestination.endDate && "text-muted-foreground"
                  )}
                >
                  {newDestination.endDate ? (
                    format(newDestination.endDate, "MMM dd, yyyy")
                  ) : (
                    <span>Pick date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={newDestination.endDate}
                  onSelect={(date) => setNewDestination({ ...newDestination, endDate: date })}
                  disabled={(date) => 
                    date < new Date() || 
                    (newDestination.startDate && date < newDestination.startDate) ||
                    (tripStartDate && date < tripStartDate) ||
                    (tripEndDate && date > tripEndDate)
                  }
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Button
          type="button"
          onClick={addDestination}
          disabled={!newDestination.name || !newDestination.startDate || !newDestination.endDate}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Destination
        </Button>
      </div>
    </div>
  );
};

export default AddDestinationSection;
