
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, AlertCircle } from 'lucide-react';
import { QuickTip } from '@/data/countryData';

interface AddQuickTipFormProps {
  existingTips: QuickTip[];
  onAddTip: (tip: QuickTip & { category?: string }) => void;
  cityName: string;
}

const CATEGORIES = [
  { value: 'accommodations', label: 'Accommodations' },
  { value: 'attractions', label: 'Attractions' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'city', label: 'City' },
  { value: 'other', label: 'Other' }
];

const AddQuickTipForm = ({ existingTips, onAddTip, cityName }: AddQuickTipFormProps) => {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const checkForDuplicate = (tipText: string) => {
    const isDupe = existingTips.some(
      tip => tip.text.toLowerCase().trim() === tipText.toLowerCase().trim()
    );
    setIsDuplicate(isDupe);
    return isDupe;
  };

  const handleTextChange = (value: string) => {
    setText(value);
    if (value.trim()) {
      checkForDuplicate(value);
    } else {
      setIsDuplicate(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim() || !link.trim() || !category) return;
    
    if (checkForDuplicate(text)) {
      return;
    }

    const newTip = {
      text: text.trim(),
      link: link.trim(),
      category
    };

    onAddTip(newTip);
    setText('');
    setLink('');
    setCategory('');
    setShowForm(false);
    setIsDuplicate(false);
  };

  if (!showForm) {
    return (
      <div className="mb-4">
        <Button 
          onClick={() => setShowForm(true)}
          variant="outline"
          className="w-full"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Your Own Quick Tip for {cityName}
        </Button>
      </div>
    );
  }

  return (
    <Card className="mb-4 border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Plus className="w-5 h-5 text-blue-600" />
          Share Your Experience in {cityName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="tip-text">Your Tip</Label>
            <Textarea
              id="tip-text"
              value={text}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Share a helpful accessibility tip for travelers visiting this destination..."
              className="mt-1"
              rows={3}
            />
            {isDuplicate && (
              <div className="flex items-center gap-2 mt-2 text-amber-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                This tip appears to be similar to an existing one. Please provide a unique tip.
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="tip-category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a category for your tip" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="tip-link">Reference Link (optional)</Label>
            <Input
              id="tip-link"
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://example.com (link to source or more information)"
              className="mt-1"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button 
              type="submit" 
              disabled={!text.trim() || !link.trim() || !category || isDuplicate}
              className="flex-1"
            >
              Add Tip
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                setShowForm(false);
                setText('');
                setLink('');
                setCategory('');
                setIsDuplicate(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddQuickTipForm;
