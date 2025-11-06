import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SearchResults, SearchFilters, Artisan } from '../../types/artisan';

interface ArtisanGridProps {
  results?: SearchResults;
  isLoading: boolean;
  onPageChange: (page: number) => void;
  onFiltersChange: (filters: Partial<SearchFilters>) => void;
  filters: SearchFilters;
}

const ArtisanCard = ({ artisan }: { artisan: Artisan }) => {
  const [imageError, setImageError] = useState(false);
  const [profileImageError, setProfileImageError] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
    // TODO: Implement actual favorite toggle
  };

  const handleWhatsAppContact = () => {
    // WhatsApp functionality placeholder - behaves like View Profile button
    console.log(`Contact ${artisan.name} via WhatsApp`);
  };

  const formatRating = (rating: number) => {
    return rating.toFixed(1);
  };

  const formatPrice = (price: number | undefined, unit?: string) => {
    if (!price) return 'Price on request';
    const formatted = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
    return unit ? `${formatted}/${unit}` : formatted;
  };

  return (
    <div className="card group cursor-pointer" role="article" aria-label={`Artisan: ${artisan.name}`}>
      {/* Image */}
      <div className="relative mb-4">
        <div className="aspect-video bg-gray-200 rounded-14 overflow-hidden">
          {artisan.coverImageUrl && !imageError ? (
            <img
              src={artisan.coverImageUrl}
              alt={`${artisan.name}'s work showcase`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              onError={() => setImageError(true)}
              onLoad={() => setImageError(false)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-2">🔨</div>
                <p className="text-sm">Portfolio</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Verification badge */}
        {artisan.verified && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            ✓ Verified
          </div>
        )}
        
        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteToggle();
          }}
          className={`absolute top-2 left-2 p-2 rounded-full transition-all duration-200 ${
            isFavorited
              ? 'bg-red-100 text-red-500'
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <span className="text-lg">{isFavorited ? '♥' : '♡'}</span>
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {artisan.name}
            </h3>
            <p className="text-sm text-gray-600">{artisan.primaryService}</p>
          </div>
          
          {artisan.avatarUrl && !profileImageError ? (
            <img
              src={artisan.avatarUrl}
              alt={`${artisan.name} profile`}
              className="w-10 h-10 rounded-full object-cover"
              onError={() => setProfileImageError(true)}
              onLoad={() => setProfileImageError(false)}
              loading="lazy"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">
                {artisan.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        {/* Rating and distance */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-medium text-gray-800">{formatRating(artisan.rating.average)}</span>
            <span className="text-gray-500">({artisan.rating.count})</span>
          </div>
          
          {artisan.distanceKm && (
            <div className="text-gray-600">
              {artisan.distanceKm.toFixed(1)} km away
            </div>
          )}
        </div>

        {/* Services */}
        <div className="flex flex-wrap gap-1">
          {artisan.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {service}
            </span>
          ))}
          {artisan.services.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{artisan.services.length - 3} more
            </span>
          )}
        </div>

        {/* Price and availability */}
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="font-medium text-gray-800">
              {formatPrice(artisan.priceFrom, artisan.priceUnit)}
            </span>
          </div>
          
          <div className={`text-xs px-2 py-1 rounded-full ${
            artisan.availability.status === 'available'
              ? 'bg-green-100 text-green-700'
              : artisan.availability.status === 'busy'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {artisan.availability.status === 'available' ? 'Available' : 
             artisan.availability.status === 'busy' ? 'Busy' : 'Offline'}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={handleWhatsAppContact}
            className="flex-1 py-2 px-4 rounded-full text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-200"
            aria-label={`Contact ${artisan.name} via WhatsApp`}
          >
            WhatsApp
          </button>
          
          <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-200">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className="card animate-pulse">
    <div className="aspect-video bg-gray-200 rounded-14 mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      <div className="flex gap-2">
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
      </div>
      <div className="h-8 bg-gray-200 rounded w-full"></div>
    </div>
  </div>
);

const EmptyState = ({ onClearFilters, searchTerm }: { onClearFilters?: () => void; searchTerm?: string }) => (
  <div className="text-center py-16 bg-white rounded-18 border border-gray-200 shadow-sm">
    <div className="text-6xl mb-6">🔍</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">No artisans found</h3>
    <p className="text-lg text-gray-700 mb-4 max-w-md mx-auto">
      {searchTerm ? (
        <>
          <span className="font-semibold">"{searchTerm}"</span> was not found. We couldn't find any artisans matching your search criteria.
        </>
      ) : (
        'We couldn\'t find any artisans matching your search criteria.'
      )}
    </p>
    <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto">
      Try adjusting your filters, expanding your search radius, or using different keywords.
    </p>
    {onClearFilters && (
      <button
        onClick={onClearFilters}
        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-16 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
      >
        Clear All Filters
      </button>
    )}
  </div>
);

const ArtisanGrid = ({ results, isLoading, onPageChange, onFiltersChange, filters }: ArtisanGridProps) => {
  const handleClearFilters = () => {
    onFiltersChange({
      query: '',
      category: '',
      minRating: undefined,
      maxPrice: undefined,
      language: '',
      availability: 'any' as const,
      page: 1
    });
  };

  if (isLoading) {
    return (
      <div id="artisan-grid" className="grid-responsive">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!results || results.results.length === 0) {
    return <div id="artisan-grid"><EmptyState onClearFilters={handleClearFilters} searchTerm={filters.query} /></div>;
  }

  return (
    <div id="artisan-grid">
      {/* Results Grid */}
      <div className="grid-responsive">
        {results.results.map((artisan) => (
          <ArtisanCard key={artisan.id} artisan={artisan} />
        ))}
      </div>

      {/* Load More / Pagination */}
      {results.hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => onPageChange(filters.page! + 1)}
            className="btn-primary inline-flex items-center gap-2"
            aria-label={`Load more artisans. Currently showing ${results.results.length} of ${results.total}`}
          >
            <span>Load More</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Pagination Info */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Showing {results.results.length} of {results.total} artisans
      </div>
    </div>
  );
};

export default ArtisanGrid;
