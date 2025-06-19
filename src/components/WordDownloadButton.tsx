
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WordDownloadButton = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Create a simple Word document content
    const content = `
AI Travel Assistant Recommendations

Generated on: ${new Date().toLocaleDateString()}

This document contains your personalized travel recommendations and insights from the AI Travel Assistant conversation.

Travel Information:
- Accessible accommodations and facilities
- Transportation options with accessibility features
- Destination-specific accessibility information
- Emergency contacts and resources
- Customized travel tips and recommendations

For more detailed planning assistance, visit AccessiTravel at your-domain.com

Note: This document was generated from your AI Travel Assistant session. 
Please refer back to the conversation for specific details and recommendations.
    `;

    // Create a blob with Word document format
    const blob = new Blob([content], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });

    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AI_Travel_Recommendations_${new Date().toISOString().split('T')[0]}.doc`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Document Downloaded!",
      description: "Your AI travel recommendations have been saved as a Word document.",
    });
  };

  return (
    <Button 
      onClick={handleDownload}
      variant="outline" 
      className="flex items-center gap-2"
    >
      <Download className="w-4 h-4" />
      Download as Word Doc
    </Button>
  );
};

export default WordDownloadButton;
