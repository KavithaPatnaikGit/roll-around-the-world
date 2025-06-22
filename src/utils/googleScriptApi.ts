
export interface GoogleScriptTip {
  cleaned_tip: string;
  Location: string;
  "Disability Tags": string;
  tip_type?: string;
  confidence?: number;
}

export const fetchGoogleScriptTips = async (location: string, tipType?: string): Promise<GoogleScriptTip[]> => {
  try {
    const url = new URL('https://script.google.com/macros/s/your-deployment-id/exec');
    url.searchParams.append('location', location.toLowerCase());
    if (tipType) {
      url.searchParams.append('tip_type', tipType);
    }
    
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching Google Script tips:', error);
    return [];
  }
};

export const categorizeGoogleScriptTip = (tip: GoogleScriptTip): string => {
  const tipType = tip.tip_type?.toLowerCase() || '';
  const tipText = tip.cleaned_tip?.toLowerCase() || '';
  
  if (tipType.includes('entrance') || tipText.includes('entrance') || tipText.includes('access')) {
    return 'attractions';
  }
  if (tipType.includes('transport') || tipText.includes('transport') || tipText.includes('taxi') || tipText.includes('bus')) {
    return 'transportation';
  }
  if (tipType.includes('accommodation') || tipText.includes('hotel') || tipText.includes('stay')) {
    return 'accommodations';
  }
  if (tipText.includes('city') || tipText.includes('general')) {
    return 'city';
  }
  
  return 'other';
};
