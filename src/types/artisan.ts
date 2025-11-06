export interface Coordinates {
  lat: number;
  lng: number;
}

export interface PortfolioItem {
  id: string;
  type: 'image' | 'video' | 'voice';
  url: string;
  alt?: string;
  thumbnailUrl?: string;
  duration?: number;
}

export interface ContactInfo {
  phone: string;
  whatsappEnabled: boolean;
  email?: string;
  website?: string;
}

export interface Location {
  address: string;
  neighborhood?: string;
  city: string;
  state: string;
  coordinates: Coordinates;
}

export interface Rating {
  average: number;
  count: number;
  breakdown?: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
  verified: boolean;
  helpful: number;
}

export interface Availability {
  status: 'available' | 'busy' | 'offline';
  nextAvailable?: string;
  responseTime?: number;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  icon?: string;
  basePrice?: number;
  priceUnit?: 'hour' | 'day' | 'project';
  description?: string;
}

export interface Artisan {
  id: string;
  name: string;
  avatarUrl?: string;
  coverImageUrl?: string;
  primaryService: string;
  services: string[];
  rating: Rating;
  verified: boolean;
  location: Location;
  distanceKm?: number;
  priceFrom?: number;
  priceUnit?: 'hour' | 'day' | 'project';
  languages: string[];
  portfolio?: PortfolioItem[];
  contact: ContactInfo;
  availability: Availability;
  lastActiveAt?: string;
  bio?: string;
  yearsExperience?: number;
  specializations?: string[];
  certifications?: string[];
  portfolioCount?: number;
  reviewCount: number;
  completedProjects?: number;
  responseRate?: number;
}

export interface SearchFilters {
  query?: string;
  location?: string;
  lat?: number;
  lng?: number;
  radius?: number;
  category?: string;
  minRating?: number;
  maxPrice?: number;
  language?: string;
  availability?: 'available' | 'busy' | 'any';
  sort?: SortOption;
  page?: number;
  per?: number;
}

export type SortOption = 
  | 'distance' 
  | 'rating' 
  | 'newest' 
  | 'price_asc' 
  | 'price_desc' 
  | 'reviews' 
  | 'response_rate';

export interface SearchResults {
  results: Artisan[];
  total: number;
  page: number;
  per: number;
  hasMore: boolean;
  filters: SearchFilters;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  serviceCount?: number;
  color?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  phone?: string;
  location?: Coordinates;
  preferences?: {
    language: string;
    currency: string;
    notifications: boolean;
  };
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
  statusCode?: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: ApiError;
  meta?: {
    timestamp: string;
    requestId: string;
    rateLimit?: {
      remaining: number;
      reset: number;
    };
  };
}

export interface FavoriteArtisan {
  artisanId: string;
  addedAt: string;
  notes?: string;
}

export interface GeolocationState {
  permission: 'granted' | 'denied' | 'prompt';
  coordinates?: Coordinates;
  error?: string;
  loading: boolean;
}