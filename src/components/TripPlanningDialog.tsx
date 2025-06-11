
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import TripDetailsSection from './TripDetailsSection';
import AddDestinationSection from './AddDestinationSection';
import TripItinerarySection from './TripItinerarySection';

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

// Type for new destination being added (with optional fields)
type NewDestinationData = {
  name: string;
  startDate?: Date;
  endDate?: Date;
};

interface TripPlanningDialogProps {
  children: React.ReactNode;
}

const TripPlanningDialog = ({ children }: TripPlanningDialogProps) => {
  const [open, setOpen] = useState(false);
  const [newDestination, setNewDestination] = useState<NewDestinationData>({
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

  // Get destinations from form and filter to ensure they are complete
  const allDestinations = form.watch('destinations') || [];
  const destinations: DestinationData[] = allDestinations.filter((dest: any): dest is DestinationData => 
    dest && typeof dest.name === 'string' && dest.startDate instanceof Date && dest.endDate instanceof Date
  );
  const tripStartDate = form.watch('tripStartDate');
  const tripEndDate = form.watch('tripEndDate');

  // Sort destinations by start date in ascending order - properly typed
  const sortedDestinations: DestinationData[] = destinations.length > 0 ? 
    [...destinations].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()) : [];

  const addDestination = () => {
    if (newDestination.name && newDestination.startDate && newDestination.endDate) {
      const destinationToAdd: DestinationData = {
        name: newDestination.name,
        startDate: newDestination.startDate,
        endDate: newDestination.endDate
      };
      form.setValue('destinations', [...destinations, destinationToAdd]);
      setNewDestination({ name: '' });
    }
  };

  const removeDestination = (index: number) => {
    // Find the destination to remove from the original array
    const destinationToRemove = sortedDestinations[index];
    const originalIndex = destinations.findIndex(dest => 
      dest.name === destinationToRemove.name && 
      dest.startDate.getTime() === destinationToRemove.startDate.getTime()
    );
    form.setValue('destinations', destinations.filter((_, i) => i !== originalIndex));
  };

  const onSubmit = (data: TripPlanningFormData) => {
    console.log('Multi-destination trip planning data:', data);
    
    // Sort destinations by start date for display and storage
    const sortedData = {
      ...data,
      destinations: [...data.destinations].sort((a, b) => 
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      )
    };
    
    // Save to localStorage for persistence
    localStorage.setItem('plannedTrip', JSON.stringify(sortedData));
    
    const destinationsList = sortedData.destinations.map(dest => 
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
            <TripDetailsSection control={form.control} />

            <AddDestinationSection
              newDestination={newDestination}
              setNewDestination={setNewDestination}
              addDestination={addDestination}
              tripStartDate={tripStartDate}
              tripEndDate={tripEndDate}
            />

            <TripItinerarySection
              control={form.control}
              sortedDestinations={sortedDestinations}
              onRemoveDestination={removeDestination}
            />

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
