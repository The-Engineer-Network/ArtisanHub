import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // 30 seconds
      gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors
        if (error?.statusCode && error.statusCode >= 400 && error.statusCode < 500) {
          return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: 'always',
    },
    mutations: {
      retry: 1,
    },
  },
});

// Query keys
export const QUERY_KEYS = {
  artisans: (filters: any) => ['artisans', filters] as const,
  artisan: (id: string) => ['artisan', id] as const,
  categories: ['categories'] as const,
  serviceSuggestions: (query: string) => ['serviceSuggestions', query] as const,
  locationSuggestions: (query: string) => ['locationSuggestions', query] as const,
  favorites: ['favorites'] as const,
  geolocation: ['geolocation'] as const,
} as const;