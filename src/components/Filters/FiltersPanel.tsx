import { Filter, Star, MapPin, Home, Users, Info, Phone, UserPlus, Settings, X } from 'lucide-react';
import type { SearchFilters, Category } from '../../types/artisan';

interface FiltersPanelProps {
  filters: SearchFilters;
  onFiltersChange: (filters: Partial<SearchFilters>) => void;
  categories: Category[];
  isOpen?: boolean;
  onClose?: () => void;
}

const FiltersPanel = ({ filters, onFiltersChange, categories, isOpen = false, onClose }: FiltersPanelProps) => {
  const handleRadiusChange = (radius: number) => {
    onFiltersChange({ radius, page: 1 });
  };

  const handleRatingChange = (minRating?: number) => {
    onFiltersChange({ minRating, page: 1 });
  };

  const handleSortChange = (sort: string) => {
    onFiltersChange({ sort: sort as any, page: 1 });
  };

  const handleCategorySelect = (category: string) => {
    onFiltersChange({ category, page: 1 });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClose) {
      onClose(); // Close menu after navigation
    }
  };

  // Don't render anything if not open
  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={onClose} />
      
      {/* Mobile Menu Panel */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 lg:hidden max-h-screen overflow-y-auto">
        <div className="p-4 pb-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Settings className="w-6 h-6 text-orange-600" />
              Navigation Menu
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Navigation</h3>
            
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => scrollToSection('popular-services')}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-xl transition-all duration-200 text-left border border-orange-200"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-lg">Popular Services</div>
                  <div className="text-sm text-gray-600">Browse trending artisan categories</div>
                </div>
                <div className="text-orange-600">→</div>
              </button>

              <button
                onClick={() => scrollToSection('service-categories')}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl transition-all duration-200 text-left border border-green-200"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-lg">All Services</div>
                  <div className="text-sm text-gray-600">View complete service directory</div>
                </div>
                <div className="text-green-600">→</div>
              </button>

              <button
                onClick={() => scrollToSection('how-it-works-section')}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-200 text-left border border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-lg">How It Works</div>
                  <div className="text-sm text-gray-600">Learn about our process</div>
                </div>
                <div className="text-blue-600">→</div>
              </button>

              <button
                onClick={() => {
                  // NOTE: This should link to the artisan registration page (e.g., /register)
                  // This button should navigate to the artisan signup/registration page
                  scrollToSection('join-artisan');
                }}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl transition-all duration-200 text-left border border-purple-200"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-lg">Join as Artisan</div>
                  <div className="text-sm text-gray-600">Start offering your services</div>
                </div>
                <div className="text-purple-600">→</div>
              </button>
            </div>
          </div>

          {/* Filters Section - Mobile */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
            </div>

            <div className="space-y-6">
              {/* Radius Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Search Radius: {filters.radius || 50}km
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={filters.radius || 50}
                  onChange={(e) => handleRadiusChange(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-label={`Search radius: ${filters.radius} kilometers`}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1km</span>
                  <span>50km</span>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Star className="w-4 h-4 inline mr-2" />
                  Minimum Rating
                </label>
                <select
                  value={filters.minRating || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    handleRatingChange(value ? parseFloat(value) : undefined);
                  }}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                  aria-label="Minimum rating filter"
                >
                  <option value="">Any rating</option>
                  <option value="4">4+ stars</option>
                  <option value="4.5">4.5+ stars</option>
                  <option value="4.8">4.8+ stars</option>
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort by
                </label>
                <select
                  value={filters.sort || 'distance'}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                  aria-label="Sort results"
                >
                  <option value="distance">Distance</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="reviews">Most Reviews</option>
                </select>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Category
                </label>
                <select
                  value={filters.category || ''}
                  onChange={(e) => handleCategorySelect(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                  aria-label="Service category filter"
                >
                  <option value="">All categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name} {category.serviceCount ? `(${category.serviceCount})` : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Filters Panel */}
      <div className="hidden lg:block bg-white border-b border-gray-200 p-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Radius Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Radius: {filters.radius || 50}km
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={filters.radius || 50}
                onChange={(e) => handleRadiusChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                aria-label={`Search radius: ${filters.radius} kilometers`}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1km</span>
                <span>50km</span>
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Star className="w-4 h-4 inline mr-1" />
                Minimum Rating
              </label>
              <select
                value={filters.minRating || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  handleRatingChange(value ? parseFloat(value) : undefined);
                }}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-200"
                aria-label="Minimum rating filter"
              >
                <option value="">Any rating</option>
                <option value="4">4+ stars</option>
                <option value="4.5">4.5+ stars</option>
                <option value="4.8">4.8+ stars</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort by
              </label>
              <select
                value={filters.sort || 'distance'}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-200"
                aria-label="Sort results"
              >
                <option value="distance">Distance</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>

            {/* Categories */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filters.category || ''}
                onChange={(e) => handleCategorySelect(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-200"
                aria-label="Service category filter"
              >
                <option value="">All categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name} {category.serviceCount ? `(${category.serviceCount})` : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiltersPanel;
