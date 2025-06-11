
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Users, Plane, X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const destinationSchema = z.object({
  name: z.string().min(1, 'Destination name is required'),
  startDate: z.date({
    required_error: 'Start date is required',
  }),
  endDate: z.date({
    required_error: 'End date is required',
  }),
}).refine((data) => data.endDate >= data.startDate, {
  message: "End date must be after start date",
  path: ["endDate"],
});

const tripPlanningSchema = z.object({
  tripStartDate: z.date({
    required_error: 'Trip start date is required',
  }),
  tripEndDate: z.date({
    required_error: 'Trip end date is required',
  }),
  travelers: z.string().min(1, 'Number of travelers is required'),
  destinations: z.array(destinationSchema).min(1, 'At least one destination is required'),
}).refine((data) => data.tripEndDate >= data.tripStartDate, {
  message: "Trip end date must be after start date",
  path: ["tripEndDate"],
}).refine((data) => {
  return data.destinations.every(dest => 
    dest.startDate >= data.tripStartDate && dest.endDate <= data.tripEndDate
  );
}, {
  message: "All destination dates must be within the trip dates",
  path: ["destinations"],
});

type TripPlanningFormData = z.infer<typeof tripPlanningSchema>;
type DestinationData = z.infer<typeof destinationSchema>;

interface TripPlanningDialogProps {
  children: React.ReactNode;
}

const TripPlanningDialog = ({ children }: TripPlanningDialogProps) => {
  const [open, setOpen] = useState(false);
  const [newDestination, setNewDestination] = useState<Partial<DestinationData>>({
    name: '',
  });
  const { toast } = useToast();

  const form = useForm<TripPlanningFormData>({
    resolver: zodResolver(tripPlanningSchema),
    defaultValues: {
      destinations: [],
      travelers: '1',
    },
  });

  const destinations = form.watch('destinations');
  const tripStartDate = form.watch('tripStartDate');
  const tripEndDate = form.watch('tripEndDate');

  const addDestination = () => {
    if (newDestination.name && newDestination.startDate && newDestination.endDate) {
      const destinationToAdd = newDestination as DestinationData;
      form.setValue('destinations', [...destinations, destinationToAdd]);
      setNewDestination({ name: '' });
    }
  };

  const removeDestination = (index: number) => {
    form.setValue('destinations', destinations.filter((_, i) => i !== index));
  };

  const onSubmit = (data: TripPlanningFormData) => {
    console.log('Multi-destination trip planning data:', data);
    
    const destinationsList = data.destinations.map(dest => 
      `${dest.name} (${format(dest.startDate, 'MMM dd')} - ${format(dest.endDate, 'MMM dd')})`
    ).join(', ');
    
    toast({
      title: "Multi-Destination Trip Planned Successfully!",
      description: `Your accessible trip from ${format(data.tripStartDate, 'PPP')} to ${format(data.tripEndDate, 'PPP')} visiting ${destinationsList} for ${data.travelers} traveler(s) has been saved.`,
    });
    
    setOpen(false);
    form.reset();
    setNewDestination({ name: '' });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plane className="w-5 h-5 text-blue-600" />
            Plan Your Multi-Destination Trip
          </DialogTitle>
          <DialogDescription>
            Plan your accessible travel experience with overall trip dates and individual destination segments.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Parent Trip Dates */}
            <div className="space-y-4 p-4 border rounded-lg bg-blue-50">
              <h3 className="font-semibold text-lg">Overall Trip Details</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                control={form.control}
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

            {/* Add New Destination */}
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

            {/* Destinations List */}
            {destinations.length > 0 && (
              <FormField
                control={form.control}
                name="destinations"
                render={() => (
                  <FormItem>
                    <FormLabel>Your Destinations</FormLabel>
                    <div className="space-y-3">
                      {destinations.map((destination, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="font-medium">{destination.name}</div>
                            <div className="text-sm text-gray-600">
                              {format(destination.startDate, 'MMM dd, yyyy')} - {format(destination.endDate, 'MMM dd, yyyy')}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeDestination(index)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Plan Multi-Destination Trip
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TripPlanningDialog;
