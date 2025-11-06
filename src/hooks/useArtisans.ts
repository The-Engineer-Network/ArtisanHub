import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../services/apiClient';
import type { SearchFilters, Artisan, Category, GeolocationState, FavoriteArtisan } from '../types/artisan';

// Query keys
export const QUERY_KEYS = {
  artisans: (filters: SearchFilters) => ['artisans', filters] as const,
  artisan: (id: string) => ['artisan', id] as const,
  categories: ['categories'] as const,
  serviceSuggestions: (query: string) => ['serviceSuggestions', query] as const,
  locationSuggestions: (query: string) => ['locationSuggestions', query] as const,
  favorites: ['favorites'] as const,
  geolocation: ['geolocation'] as const,
} as const;

// Search artisans hook
export function useArtisans(filters: SearchFilters, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: QUERY_KEYS.artisans(filters),
    queryFn: () => apiClient.searchArtisans(filters).then(response => response.data!),
    enabled: options?.enabled !== false,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error: any) => {
      // Don't retry on 4xx errors
      if (error?.statusCode && error.statusCode >= 400 && error.statusCode < 500) {
        return false;
      }
      return failureCount < 3;
    },
  });
}

// Get a single artisan hook
export function useArtisan(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.artisan(id),
    queryFn: () => apiClient.getArtisanById(id).then(response => response.data!),
    enabled: !!id,
  });
}

// Get the categories hook
export function useCategories() {
  return useQuery({
    queryKey: QUERY_KEYS.categories,
    queryFn: () => apiClient.getCategories().then(response => response.data!),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Get service suggestions hook
export function useServiceSuggestions(query: string) {
  return useQuery({
    queryKey: QUERY_KEYS.serviceSuggestions(query),
    queryFn: () => apiClient.getServiceSuggestions(query).then(response => response.data!),
    enabled: query.length >= 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Get location suggestions hook
export function useLocationSuggestions(query: string) {
  return useQuery({
    queryKey: QUERY_KEYS.locationSuggestions(query),
    queryFn: () => apiClient.getLocationSuggestions(query).then(response => response.data!),
    enabled: query.length >= 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Geocoding hook
export function useGeocode(address: string) {
  return useQuery({
    queryKey: ['geocode', address],
    queryFn: () => apiClient.geocodeAddress(address).then(response => response.data!),
    enabled: !!address && address.length >= 3,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Use geolocation hook
export function useGeolocation() {
  const queryClient = useQueryClient();
  
  const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        resolve,
        (error) => {
          const geolocationState: GeolocationState = {
            permission: 'denied',
            error: error.message,
            loading: false
          };
          queryClient.setQueryData(QUERY_KEYS.geolocation, geolocationState);
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 5 * 60 * 1000 // 5 minutes
        }
      );
    });
  };

  const getCachedPosition = (): GeolocationPosition | null => {
    const cached = localStorage.getItem('artisan-hub-geolocation');
    if (cached) {
      try {
        const data = JSON.parse(cached);
        // Check if the cache is less than 5 minutes old
        if (Date.now() - data.timestamp < 5 * 60 * 1000) {
          return data.position as GeolocationPosition;
        }
      } catch (error) {
        console.warn('Failed to parse cached geolocation:', error);
      }
    }
    return null;
  };

  const requestLocation = async (): Promise<GeolocationPosition> => {
    queryClient.setQueryData(QUERY_KEYS.geolocation, { permission: 'prompt', loading: true } as GeolocationState);

    try {
      // Try the cached position first...
      const cached = getCachedPosition();
      if (cached) {
        const geolocationState: GeolocationState = {
          permission: 'granted',
          coordinates: {
            lat: cached.coords.latitude,
            lng: cached.coords.longitude
          },
          loading: false
        };
        queryClient.setQueryData(QUERY_KEYS.geolocation, geolocationState);
        return cached;
      }

      // Get a fresh position
      const position = await getCurrentPosition();
      
      // Cache the position
      localStorage.setItem('artisan-hub-geolocation', JSON.stringify({
        position,
        timestamp: Date.now()
      }));

      const geolocationState: GeolocationState = {
        permission: 'granted',
        coordinates: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        loading: false
      };
      queryClient.setQueryData(QUERY_KEYS.geolocation, geolocationState);
      
      return position;
    } catch (error) {
      const geolocationState: GeolocationState = {
        permission: 'denied',
        error: error instanceof Error ? error.message : 'Location access denied',
        loading: false
      };
      queryClient.setQueryData(QUERY_KEYS.geolocation, geolocationState);
      throw error;
    }
  };

  return {
    requestLocation,
    getCurrentPosition,
    getCachedPosition
  };
}

// Favorites management hooks
export function useFavorites() {
  const queryClient = useQueryClient();

  const getFavorites = (): FavoriteArtisan[] => {
    const cached = localStorage.getItem('artisan-hub-favorites');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (error) {
        console.warn('Failed to parse favorites:', error);
      }
    }
    return [];
  };

  const addFavorite = (artisanId: string) => {
    const favorites = getFavorites();
    const exists = favorites.find(f => f.artisanId === artisanId);
    
    if (!exists) {
      const newFavorite: FavoriteArtisan = {
        artisanId,
        addedAt: new Date().toISOString()
      };
      favorites.push(newFavorite);
      localStorage.setItem('artisan-hub-favorites', JSON.stringify(favorites));
      queryClient.setQueryData(QUERY_KEYS.favorites, favorites);
      return true;
    }
    return false;
  };

  const removeFavorite = (artisanId: string) => {
    const favorites = getFavorites();
    const filtered = favorites.filter(f => f.artisanId !== artisanId);
    localStorage.setItem('artisan-hub-favorites', JSON.stringify(filtered));
    queryClient.setQueryData(QUERY_KEYS.favorites, filtered);
    return true;
  };

  const toggleFavorite = (artisanId: string): boolean => {
    const favorites = getFavorites();
    const exists = favorites.find(f => f.artisanId === artisanId);
    
    if (exists) {
      return removeFavorite(artisanId);
    } else {
      return addFavorite(artisanId);
    }
  };

  const isFavorite = (artisanId: string): boolean => {
    const favorites = getFavorites();
    return favorites.some(f => f.artisanId === artisanId);
  };

  return {
    getFavorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  };
}

// Use favorites state hook (for updates on the UI)
export function useFavoritesState() {
  const queryClient = useQueryClient();
  
  return useQuery({
    queryKey: QUERY_KEYS.favorites,
    queryFn: () => {
      const cached = localStorage.getItem('artisan-hub-favorites');
      return cached ? JSON.parse(cached) : [];
    },
    staleTime: Infinity, // Favorites don't change unless it is updated explicitly...
  });
}

// Invalidate related queries
export function useInvalidateQueries() {
  const queryClient = useQueryClient();
  
  return {
    invalidateArtisans: (filters?: SearchFilters) => {
      if (filters) {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.artisans(filters) });
      } else {
        queryClient.invalidateQueries({ queryKey: ['artisans'] });
      }
    },
    invalidateFavorites: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.favorites });
    },
    invalidateAll: () => {
      queryClient.invalidateQueries();
    }
  };
}