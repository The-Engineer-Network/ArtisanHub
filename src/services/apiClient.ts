import type { Artisan, SearchFilters, SearchResults, Category, ApiError, ApiResponse } from '../types/artisan';
import mockArtisans from '../mocks/artisans.json';

// Simulate the network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock categories (at least for now...)
const mockCategories: Category[] = [
  { id: 'tailor', name: 'Tailor', icon: '✂️', serviceCount: 15, color: '#8B5CF6' },
  { id: 'baker', name: 'Baker', icon: '🥖', serviceCount: 12, color: '#F59E0B' },
  { id: 'carpenter', name: 'Carpenter', icon: '🔨', serviceCount: 18, color: '#10B981' },
  { id: 'mechanic', name: 'Mechanic', icon: '🔧', serviceCount: 22, color: '#EF4444' },
  { id: 'hair-stylist', name: 'Hair Stylist', icon: '💇‍♀️', serviceCount: 14, color: '#EC4899' },
  { id: 'plumber', name: 'Plumber', icon: '🚿', serviceCount: 16, color: '#3B82F6' },
  { id: 'electrician', name: 'Electrician', icon: '⚡', serviceCount: 13, color: '#F59E0B' },
  { id: 'painter', name: 'Painter', icon: '🎨', serviceCount: 11, color: '#8B5CF6' }
];

// Service suggestions
const serviceSuggestions = [
  'Tailor', 'Baker', 'Carpenter', 'Mechanic', 'Hair Stylist',
  'Plumber', 'Electrician', 'Painter', 'Welder', 'Gardener',
  'Chef', 'Photographer', 'Makeup Artist', 'Event Planner',
  'Fashion Designer', 'Shoe Maker', 'Barber', 'Cleaner'
];

// Location suggestions (Cities and States in Nigeria)
const locationSuggestions = [
  'Lagos', 'Ikeja', 'Victoria Island', 'Ikoyi', 'Surulere',
  'Ajah', 'Lekki', 'Abeokuta', 'Ibadan', 'Abuja',
  'Port Harcourt', 'Kano', 'Kaduna', 'Enugu', 'Onitsha'
];

class ApiClient {
  private baseUrl = 'https://api.artisan-hub.com'; // Would be real API in production

  private handleError(error: any): ApiError {
    return {
      code: error.code || 'UNKNOWN_ERROR',
      message: error.message || 'An unexpected error occurred',
      details: error.details,
      statusCode: error.statusCode
    };
  }

  private async simulateNetworkCall<T>(data: T, delayMs: number = 500): Promise<T> {
    await delay(delayMs);
    return data;
  }

  async searchArtisans(filters: SearchFilters): Promise<ApiResponse<SearchResults>> {
    try {
      let results = [...(mockArtisans as Artisan[])];

      // Apply search query
      if (filters.query) {
        const query = filters.query.toLowerCase();
        results = results.filter(artisan =>
          artisan.name.toLowerCase().includes(query) ||
          artisan.primaryService.toLowerCase().includes(query) ||
          artisan.services.some(service => service.toLowerCase().includes(query)) ||
          artisan.location.city.toLowerCase().includes(query) ||
          artisan.location.neighborhood?.toLowerCase().includes(query)
        );
      }

      // Apply category filter
      if (filters.category) {
        results = results.filter(artisan => {
          const category = filters.category!.toLowerCase();
          const primaryMatch = artisan.primaryService.toLowerCase() === category || artisan.primaryService.toLowerCase().includes(category);
          const serviceMatch = artisan.services.some(service => service.toLowerCase().includes(category));
          
          return primaryMatch || serviceMatch;
        });
      }

      // Apply rating filter
      if (filters.minRating) {
        results = results.filter(artisan => artisan.rating.average >= filters.minRating!);
      }

      // Apply price filter
      if (filters.maxPrice) {
        results = results.filter(artisan => (artisan.priceFrom || 0) <= filters.maxPrice!);
      }

      // Apply language filter
      if (filters.language) {
        results = results.filter(artisan =>
          artisan.languages.some(lang => lang.toLowerCase() === filters.language!.toLowerCase())
        );
      }

      // Apply availability filter
      if (filters.availability && filters.availability !== 'any') {
        results = results.filter(artisan => artisan.availability.status === filters.availability);
      }

      // Apply distance filter (mock calculation)
      if (filters.lat && filters.lng && filters.radius) {
        results = results.filter(artisan => {
          if (!artisan.distanceKm) return true;
          return artisan.distanceKm <= filters.radius!;
        });
      }

      // Apply sorting
      switch (filters.sort) {
        case 'distance':
          results.sort((a, b) => (a.distanceKm || 999) - (b.distanceKm || 999));
          break;
        case 'rating':
          results.sort((a, b) => b.rating.average - a.rating.average);
          break;
        case 'newest':
          results.sort((a, b) => new Date(b.lastActiveAt || 0).getTime() - new Date(a.lastActiveAt || 0).getTime());
          break;
        case 'price_asc':
          results.sort((a, b) => (a.priceFrom || 0) - (b.priceFrom || 0));
          break;
        case 'price_desc':
          results.sort((a, b) => (b.priceFrom || 0) - (a.priceFrom || 0));
          break;
        case 'reviews':
          results.sort((a, b) => b.rating.count - a.rating.count);
          break;
        case 'response_rate':
          results.sort((a, b) => (b.responseRate || 0) - (a.responseRate || 0));
          break;
        default:
          // Default to relevance (already filtered results)
          break;
      }

      // Apply pagination
      const page = filters.page || 1;
      const per = filters.per || 20;
      const startIndex = (page - 1) * per;
      const endIndex = startIndex + per;
      const paginatedResults = results.slice(startIndex, endIndex);

      const searchResults: SearchResults = {
        results: paginatedResults,
        total: results.length,
        page,
        per,
        hasMore: endIndex < results.length,
        filters
      };

      const response = {
        data: searchResults,
        success: true,
        meta: {
          timestamp: new Date().toISOString(),
          requestId: `req_${Date.now()}`,
          rateLimit: {
            remaining: 100,
            reset: Date.now() + 60000
          }
        }
      };
      
      return await this.simulateNetworkCall(response);

    } catch (error) {
      return {
        data: { results: [], total: 0, page: 1, per: 20, hasMore: false, filters },
        success: false,
        error: this.handleError(error)
      };
    }
  }

  async getArtisanById(id: string): Promise<ApiResponse<Artisan>> {
    try {
      const artisan = (mockArtisans as Artisan[]).find(a => a.id === id);
      
      if (!artisan) {
        throw new Error('Artisan not found');
      }

      return await this.simulateNetworkCall({
        data: artisan,
        success: true,
        meta: {
          timestamp: new Date().toISOString(),
          requestId: `req_${Date.now()}`
        }
      });

    } catch (error) {
      return {
        data: null as any,
        success: false,
        error: this.handleError(error)
      };
    }
  }

  async getCategories(): Promise<ApiResponse<Category[]>> {
    try {
      return await this.simulateNetworkCall({
        data: mockCategories,
        success: true,
        meta: {
          timestamp: new Date().toISOString(),
          requestId: `req_${Date.now()}`
        }
      });
    } catch (error) {
      return {
        data: [],
        success: false,
        error: this.handleError(error)
      };
    }
  }

  async getServiceSuggestions(query: string): Promise<ApiResponse<string[]>> {
    try {
      const filtered = serviceSuggestions.filter(service =>
        service.toLowerCase().includes(query.toLowerCase())
      );

      return await this.simulateNetworkCall({
        data: filtered.slice(0, 8), // Limit to only 8 suggestions
        success: true,
        meta: {
          timestamp: new Date().toISOString(),
          requestId: `req_${Date.now()}`
        }
      });
    } catch (error) {
      return {
        data: [],
        success: false,
        error: this.handleError(error)
      };
    }
  }

  async getLocationSuggestions(query: string): Promise<ApiResponse<string[]>> {
    try {
      const filtered = locationSuggestions.filter(location =>
        location.toLowerCase().includes(query.toLowerCase())
      );

      return await this.simulateNetworkCall({
        data: filtered.slice(0, 8), // Limit to only 8 suggestions
        success: true,
        meta: {
          timestamp: new Date().toISOString(),
          requestId: `req_${Date.now()}`
        }
      });
    } catch (error) {
      return {
        data: [],
        success: false,
        error: this.handleError(error)
      };
    }
  }

  // Mock geocoding (This will use a real service in production)
  async geocodeAddress(address: string): Promise<ApiResponse<{ lat: number; lng: number }>> {
    try {
      // Mock coordinates for Nigerian cities...
      const coordinates: { [key: string]: { lat: number; lng: number } } = {
        'lagos': { lat: 6.455, lng: 3.3841 },
        'ikeja': { lat: 6.6018, lng: 3.3515 },
        'victoria island': { lat: 6.4281, lng: 3.4219 },
        'surulere': { lat: 6.4488, lng: 3.3725 },
        'agege': { lat: 6.5345, lng: 3.3264 },
        'ajah': { lat: 6.4581, lng: 3.6765 },
        'lekki': { lat: 6.4193, lng: 3.5346 },
        'ikoyi': { lat: 6.4572, lng: 3.4282 }
      };

      const normalizedAddress = address.toLowerCase();
      const coord = coordinates[normalizedAddress];

      if (!coord) {
        // Return default Lagos coordinates
        return await this.simulateNetworkCall({
          data: { lat: 6.455, lng: 3.3841 },
          success: true,
          meta: {
            timestamp: new Date().toISOString(),
            requestId: `req_${Date.now()}`
          }
        });
      }

      return await this.simulateNetworkCall({
        data: coord,
        success: true,
        meta: {
          timestamp: new Date().toISOString(),
          requestId: `req_${Date.now()}`
        }
      });

    } catch (error) {
      return {
        data: { lat: 0, lng: 0 },
        success: false,
        error: this.handleError(error)
      };
    }
  }
}

export const apiClient = new ApiClient();
