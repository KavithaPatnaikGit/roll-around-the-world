
export interface AccessibleAttraction {
  name: string;
  url: string;
  description?: string;
  rating?: number;
  bookingUrl?: string;
  discounts?: DiscountOffer[];
}

export interface AccessibleHotel {
  name: string;
  rating: number;
  features: string[];
  reservationUrl: string;
}

export interface QuickTip {
  text: string;
  link: string;
}

export interface DiscountOffer {
  provider: string;
  discountPercentage: number;
  description: string;
  url: string;
  validUntil?: string;
  originalPrice?: number;
  discountedPrice?: number;
}

export interface EmergencyNumber {
  service: string;
  number: string;
  description: string;
}

export interface WheelchairService {
  name: string;
  type: 'repair' | 'purchase' | 'both';
  address: string;
  phone?: string;
  website?: string;
  description: string;
}

export interface TopDiningOption {
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  accessibilityFeatures: string[];
  location: string;
  reservationUrl?: string;
  nearbyLandmarks: string[];
}

export interface CityInfo {
  name: string;
  accessibleAttractions: AccessibleAttraction[];
  accessibleHotels: AccessibleHotel[];
  wheelchairServices: WheelchairService[];
  quickTips: QuickTip[];
  topDining: TopDiningOption[];
}

export interface StateFeature {
  stateName: string;
  cities: CityInfo[];
  features: {
    name: string;
    description: string;
    url: string;
    type: 'attraction' | 'transport' | 'accommodation' | 'service';
  }[];
}

export interface Country {
  id: number;
  name: string;
  city: string;
  image?: string;
  rating?: number;
  description?: string;
  highlights?: string[];
  emergencyNumbers: EmergencyNumber[];
  wheelchairAccessibleAttractions: AccessibleAttraction[];
  wheelchairServices: WheelchairService[];
  quickTips: QuickTip[];
  detailedInfo: {
    accommodation: string;
    attractions: string;
    dining: string;
    transport?: string;
  };
  accessibleHotels?: AccessibleHotel[];
  topDining?: TopDiningOption[];
  stateFeatures?: StateFeature[];
  isCategory?: boolean;
  cities?: Country[];
}
