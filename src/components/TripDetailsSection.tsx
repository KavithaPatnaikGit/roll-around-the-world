
import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Control } from 'react-hook-form';

interface TripDetailsData {
  tripStartDate: Date;
  tripEndDate: Date;
  travelers: string;
}

interface TripDetailsSectionProps {
  control: Control<any>;
}

const TripDetailsSection = ({ control }: TripDetailsSectionProps) => {
  return (
    <div className="space-y-4 p-4 border rounded-lg bg-blue-50">
      <h3 className="font-semibold text-lg">Overall Trip Details</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="tripStartDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Trip Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "MMM dd, yyyy")
                      ) : (
                        <span>Pick date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="tripEndDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Trip End Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "MMM dd, yyyy")
                      ) : (
                        <span>Pick date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="travelers"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Number of Travelers
            </FormLabel>
            <FormControl>
              <Input
                type="number"
                min="1"
                max="20"
                placeholder="1"
                className="w-32"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TripDetailsSection;
