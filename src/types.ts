export interface SpaceZone {
  id: string;
  name: string;
  tagline: string;
  description: string;
  noiseLevel: 'Silent (0 dB)' | 'Whisper (< 20 dB)' | 'Low Chatter (< 45 dB)' | 'Vibrant Cafe';
  capacity: string;
  availableSeats: number;
  totalSeats: number;
  highlightSpecs: string[];
  imageUrl: string;
  badge: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'brain_food' | 'functional' | 'night_bites';
  price: string;
  description: string;
  notes: string;
  calories?: string;
  tags: string[];
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  periodLabel?: string;
  studentTag: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'access' | 'academic' | 'amenities' | 'safety';
}
