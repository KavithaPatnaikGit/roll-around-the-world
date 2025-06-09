
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Camera, Send } from 'lucide-react';

interface TravelerExperience {
  id: string;
  name: string;
  email: string;
  shareContactPublic: boolean;
  experience: string;
  photos: File[];
  countryId: number;
  submittedAt: string;
}

interface TravelerExperienceFormProps {
  countryId: number;
  onSubmit: (experience: TravelerExperience) => void;
}

const TravelerExperienceForm = ({ countryId, onSubmit }: TravelerExperienceFormProps) => {
  const [photos, setPhotos] = useState<File[]>([]);
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      shareContactPublic: false,
      experience: '',
    }
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  const handleSubmit = (data: any) => {
    const experience: TravelerExperience = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      shareContactPublic: data.shareContactPublic,
      experience: data.experience,
      photos: photos,
      countryId: countryId,
      submittedAt: new Date().toISOString(),
    };

    onSubmit(experience);
    form.reset();
    setPhotos([]);
    
    toast({
      title: "Experience Shared!",
      description: "Thank you for sharing your travel experience with the community.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <User className="w-6 h-6" />
          Share Your Travel Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Traveler Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shareContactPublic"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Share contact details publicly
                    </FormLabel>
                    <p className="text-sm text-muted-foreground">
                      Allow other travelers to contact you about your experience
                    </p>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              rules={{ required: "Please share your experience" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Travel Experience</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share details about your accessible travel experience in this destination..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <label className="text-sm font-medium">Photos (Optional)</label>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <Input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="cursor-pointer"
                />
              </div>
              {photos.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {photos.length} photo(s) selected
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Share Experience
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TravelerExperienceForm;
