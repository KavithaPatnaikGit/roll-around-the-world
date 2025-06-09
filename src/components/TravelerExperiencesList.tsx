
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Calendar, Image, Type } from 'lucide-react';

interface TravelerExperience {
  id: string;
  name: string;
  email: string;
  shareContactPublic: boolean;
  experience: string;
  blogPosts: string;
  photos: File[];
  countryId: number;
  submittedAt: string;
}

interface TravelerExperiencesListProps {
  experiences: TravelerExperience[];
  countryName: string;
}

const TravelerExperiencesList = ({ experiences, countryName }: TravelerExperiencesListProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (experiences.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Traveler Experiences</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            No experiences shared yet. Be the first to share your travel story!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Traveler Experiences in {countryName}</CardTitle>
        <p className="text-muted-foreground">
          Real experiences from travelers who have visited this destination
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <div key={experience.id} className="border rounded-lg p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-semibold">{experience.name}</span>
                  </div>
                  {experience.shareContactPublic && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      <span>{experience.email}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(experience.submittedAt)}</span>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <h4 className="font-semibold text-gray-900 mb-2">Travel Experience</h4>
                <p className="text-gray-700 leading-relaxed">{experience.experience}</p>
              </div>

              {experience.blogPosts && (
                <div className="prose prose-sm max-w-none">
                  <div className="flex items-center gap-2 mb-2">
                    <Type className="w-4 h-4" />
                    <h4 className="font-semibold text-gray-900">Blog Posts</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{experience.blogPosts}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {experience.photos.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    <Badge variant="secondary">
                      {experience.photos.length} photo{experience.photos.length !== 1 ? 's' : ''} attached
                    </Badge>
                  </div>
                )}

                {experience.shareContactPublic && (
                  <Badge variant="outline" className="text-green-600">
                    Contact available
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelerExperiencesList;
