import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { SearchFilters, SearchResults } from '../../types/artisan';
import { useArtisans, useGeolocation, useCategories } from '../../hooks/useArtisans';
import StickyHeader from '../../components/Header/StickyHeader';
import HeroSearch from '../../components/HeroSearch/HeroSearch';
import FiltersPanel from '../../components/Filters/FiltersPanel';
import ArtisanGrid from '../../components/Grid/ArtisanGrid';
import MapView from '../../components/Map/MapView';
import { Loader2, Map, MapPin, Users, Star, Phone } from 'lucide-react';


const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMap, setShowMap] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Get initial filters from URL params...
  const [filters, setFilters] = useState<SearchFilters>(() => {
    const params = Object.fromEntries(searchParams.entries());
    return {
      query: params.q || '',
      location: params.location || '',
      lat: params.lat ? parseFloat(params.lat) : undefined,
      lng: params.lng ? parseFloat(params.lng) : undefined,
      radius: params.radius ? parseInt(params.radius) : 50, // Changed from 10 to 50km for better results
      category: params.category || '',
      minRating: params.minRating ? parseFloat(params.minRating) : undefined,
      maxPrice: params.maxPrice ? parseInt(params.maxPrice) : undefined,
      language: params.language || '',
      availability: (params.availability as 'available' | 'busy' | 'any') || 'any',
      sort: (params.sort as any) || 'distance',
      page: params.page ? parseInt(params.page) : 1,
      per: params.per ? parseInt(params.per) : 20,
    };
  });

  // Get user location if not provided
  const { requestLocation } = useGeolocation();

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = useCategories();

  // Fetch artisans
  const {
    data: searchResults,
    isLoading: isLoadingArtisans,
    error: artisansError,
    refetch
  } = useArtisans(filters);

  // Auto-scroll to results when search completes (non-loading state)
  useEffect(() => {
    if (!isLoadingArtisans && searchResults) {
      // Only scroll if we have results and not on the first load
      const timer = setTimeout(() => {
        const resultsElement = document.getElementById('artisan-grid');
        if (resultsElement && searchResults.results.length > 0) {
          // Check if we're not already near the top of the results
          const rect = resultsElement.getBoundingClientRect();
          if (rect.top > window.innerHeight) {
            resultsElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }, 100); // Small delay to ensure the DOM is ready
      return () => clearTimeout(timer);
    }
  }, [searchResults, isLoadingArtisans]);

  // Handle location request
  useEffect(() => {
    if (!filters.lat || !filters.lng) {
      // Try to get user location automatically
      requestLocation()
        .then((position) => {
          setFilters(prev => ({
            ...prev,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }));
        })
        .catch(() => {
          // Location denied or failed, use default Lagos coordinates
          setFilters(prev => ({
            ...prev,
            lat: 6.455,
            lng: 3.3841,
            radius: 50, // Updated default radius
          }));
        });
    }
  }, [requestLocation]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== '' && value !== null) {
        params.set(key, value.toString());
      }
    });
    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Handle filter changes
  const handleFiltersChange = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
      page: 1, // Reset to first page when filters change
    }));
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }));
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle map view
  const toggleMapView = () => {
    setShowMap(prev => !prev);
  };

  // Loading state
  if (categoriesLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading categories...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (artisansError) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="bg-red-50 border border-red-200 rounded-18 p-6">
            <h2 className="text-xl font-semibold text-red-800 mb-2">
              Unable to load artisans
            </h2>
            <p className="text-red-600 mb-4">
              {artisansError instanceof Error ? artisansError.message : 'Something went wrong'}
            </p>
            <button
              onClick={() => refetch()}
              className="btn-primary"
              type="button"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Sticky Header */}
      <StickyHeader onMenuClick={() => setIsFiltersOpen(!isFiltersOpen)} />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Search Section */}
        <section id="popular-services" className="bg-white border-b border-gray-200">
          <div className="container-custom py-6">
            <HeroSearch
              filters={filters}
              onFiltersChange={handleFiltersChange}
              categories={categories || []}
            />
          </div>
        </section>


        {/* Join as Artisan Section */}
        <section id="join-artisan" className="bg-white py-12">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Join as an Artisan</h2>
              <p className="text-gray-600 text-lg mb-8">
                Start offering your services to thousands of customers in your area. Build your reputation and grow your business with ArtisanHub.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Reach More Customers</h3>
                  <p className="text-gray-600 text-sm">Connect with customers looking for your specific skills</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Build Your Reputation</h3>
                  <p className="text-gray-600 text-sm">Get reviews and ratings to showcase your quality work</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Manage Your Business</h3>
                  <p className="text-gray-600 text-sm">Easy tools to manage bookings and customer communication</p>
                </div>
              </div>
              
              <button className="btn-primary text-lg px-8 py-4">
                Start Offering Services
              </button>
            </div>
          </div>
        </section>

        {/* Filters Panel - Mobile Menu & Desktop Filters */}
        <FiltersPanel
          filters={filters}
          onFiltersChange={handleFiltersChange}
          categories={categories || []}
          isOpen={isFiltersOpen}
          onClose={() => setIsFiltersOpen(false)}
        />

        {/* Map Toggle and Results Header */}
        <section id="service-categories" className="bg-white border-b border-gray-200 sticky top-16 z-10">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              {/* Results Summary */}
              <div className="flex-1">
                {searchResults && (
                  <p
                    className="text-gray-800 text-lg font-semibold"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {searchResults.total === 0 ? (
                      'No artisans found'
                    ) : (
                      <>
                        Showing {searchResults.results.length} of {searchResults.total} trusted artisans
                        {filters.radius && (
                          <span> within {filters.radius}km</span>
                        )}
                        {filters.query && (
                          <span> for "{filters.query}"</span>
                        )}
                      </>
                    )}
                  </p>
                )}
              </div>

              {/* Map Toggle */}
              <button
                onClick={toggleMapView}
                className={`flex items-center gap-2 px-4 py-2 rounded-14 border transition-all duration-200 ${
                  showMap
                    ? 'bg-orange-50 border-orange-200 text-orange-700'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
                type="button"
                aria-pressed={showMap}
                aria-label={`${showMap ? 'Hide' : 'Show'} map view`}
              >
                {showMap ? (
                  <>
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Hide Map</span>
                  </>
                ) : (
                  <>
                    <Map className="w-4 h-4" />
                    <span className="text-sm font-medium">Show Map</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <div className="container-custom py-6">
          <div className={`${showMap ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}>
            {/* Results Grid */}
            <div id="search-results" className={showMap ? 'lg:col-span-1' : 'max-w-4xl mx-auto'}>
              <ArtisanGrid
                results={searchResults}
                isLoading={isLoadingArtisans}
                onPageChange={handlePageChange}
                onFiltersChange={handleFiltersChange}
                filters={filters}
              />
            </div>

            {/* Map View */}
            {showMap && (
              <div className="lg:col-span-1 mt-8 lg:mt-0">
                <div className="sticky top-32">
                  <MapView
                    artisans={searchResults?.results || []}
                    center={filters.lat && filters.lng ? { lat: filters.lat, lng: filters.lng } : undefined}
                    radius={filters.radius}
                    onArtisanSelect={(artisan) => {
                      // TODO: Handle artisan selection from map
                      console.log('Selected artisan:', artisan);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        
      </main>

      {/* Live Region for Screen Readers */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="search-results-live"
      >
        {searchResults && (
          <>
            {searchResults.total} artisans found
            {filters.radius && ` within ${filters.radius} kilometers`}
            {filters.query && ` for ${filters.query}`}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
