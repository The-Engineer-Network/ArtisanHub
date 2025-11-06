import { Search, MapPin, Star, Users, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import type { SearchFilters, Category } from '../../types/artisan';

interface HeroSearchProps {
  filters: SearchFilters;
  onFiltersChange: (filters: Partial<SearchFilters>) => void;
  categories: Category[];
}

// Popular Artisan Services offered in Nigeria...
const popularServices = [
  {
    name: 'Tailor',
    icon: '✂️',
    color: 'from-purple-500 to-purple-600',
    description: 'Traditional & modern clothing tailored to perfection',
    examples: ['Traditional Agbada', 'Modern Suits', 'Wedding Dresses', 'Casual Shirts', 'Trousers'],
    artisanCount: 3,
    avgRating: 4.7
  },
  {
    name: 'Hair Stylist',
    icon: '💇‍♀️',
    color: 'from-pink-500 to-pink-600',
    description: 'Beautiful African hair care and styling',
    examples: ['Natural Hair Braids', 'Protective Styles', 'Hair Treatments', 'Weave Installation', 'Scalp Care'],
    artisanCount: 3,
    avgRating: 4.8
  },
  {
    name: 'Baker',
    icon: '🥖',
    color: 'from-orange-500 to-orange-600',
    description: 'Delicious cakes, pastries, and traditional treats',
    examples: ['Wedding Cakes', 'Small Chops', 'Savoury Snacks', 'Custom Designs', 'Traditional Pastries'],
    artisanCount: 3,
    avgRating: 4.9
  },
  {
    name: 'Carpenter',
    icon: '🔨',
    color: 'from-green-500 to-green-600',
    description: 'Custom furniture and quality woodwork',
    examples: ['Kitchen Cabinets', 'Custom Furniture', 'Door Making', 'Wardrobes', 'Table Making'],
    artisanCount: 3,
    avgRating: 4.7
  },
  {
    name: 'Fashion Designer',
    icon: '👗',
    color: 'from-blue-500 to-blue-600',
    description: 'Custom fashion design and styling',
    examples: ['Traditional Wear', 'Casual Clothing', 'Formal Wear', 'Bridal Wear', 'Children Wear'],
    artisanCount: 3,
    avgRating: 4.7
  },
  {
    name: 'Photographer',
    icon: '📸',
    color: 'from-teal-500 to-teal-600',
    description: 'Professional photography for all occasions',
    examples: ['Wedding Photography', 'Portrait Sessions', 'Event Coverage', 'Family Photos', 'Product Photography'],
    artisanCount: 3,
    avgRating: 4.9
  },
  {
    name: 'Mechanic',
    icon: '🔧',
    color: 'from-red-500 to-red-600',
    description: 'Expert car repair and maintenance',
    examples: ['Engine Repair', 'Brake Service', 'Car Diagnostics', 'Maintenance', 'Car Wash'],
    artisanCount: 4,
    avgRating: 4.6
  },
  {
    name: 'Caterer',
    icon: '🍽️',
    color: 'from-yellow-500 to-yellow-600',
    description: 'Delicious food and event catering services',
    examples: ['Party Catering', 'Small Chops', 'Local Dishes', 'Event Planning', 'Food Delivery'],
    artisanCount: 3,
    avgRating: 4.8
  }
];

const HeroSearch = ({ filters, onFiltersChange, categories }: HeroSearchProps) => {
  const handleQueryChange = (query: string) => {
    onFiltersChange({ query, page: 1 });
    // Auto-scroll should trigger when the user clicks the search button
  };

  const handleLocationChange = (location: string) => {
    onFiltersChange({ location, page: 1 });
  };

  const handleServiceClick = (serviceName: string) => {
    onFiltersChange({ category: serviceName, query: '', page: 1 });
    // Auto-scroll to results after a brief delay...
    setTimeout(() => {
      const resultsElement = document.getElementById('artisan-grid') || document.getElementById('search-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  const handleShowAll = () => {
    onFiltersChange({ category: '', query: '', page: 1 });
    setTimeout(() => {
      const resultsElement = document.getElementById('artisan-grid') || document.getElementById('search-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  return (
    <div className="bg-white">
      <div className="container-custom py-12">
        {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight">
          Find Trusted Artisans Near You
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
          Connect with verified, skilled artisans in your area. From traditional craftsmanship to modern services,
          discover talented professionals ready to bring your projects to life.
        </p>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 text-gray-800">
            <div className="bg-green-100 p-2 rounded-full">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-semibold">Verified Professionals</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="font-semibold">Rated by Customers</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-semibold">Quick Response</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <div className="bg-purple-100 p-2 rounded-full">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <span className="font-semibold">1000+ Happy Clients</span>
          </div>
        </div>
      </div>
        
        {/* Search Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row gap-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-20 border-2 border-orange-100 shadow-xl">
            <div className="flex-1">
              <input
                type="text"
                placeholder="What service do you need? e.g., Tailor, Baker, Mechanic..."
                value={filters.query || ''}
                onChange={(e) => handleQueryChange(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-16 focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 text-gray-800 placeholder-gray-600 bg-white"
                aria-label="Search for service"
              />
            </div>
            
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter your location... or use current location"
                value={filters.location || ''}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-16 focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 text-gray-800 placeholder-gray-600 bg-white"
                aria-label="Enter location"
              />
            </div>
            
            <button
              type="button"
              onClick={() => {
                // Scroll to results when search is clicked
                setTimeout(() => {
                  const resultsElement = document.getElementById('artisan-grid');
                  if (resultsElement) {
                    resultsElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }, 100);
              }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-16 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-orange-200"
              aria-label="Search for artisans"
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div id="how-it-works-section" className="mb-20 py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto font-medium">
              Getting started is simple - connect with artisans in just 3 easy steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Search & Browse</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                Find artisans by service type, location, or browse our popular categories to discover talented professionals
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Contact & Connect</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                Message artisans directly or view their detailed profiles, portfolios, and customer reviews
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Get It Done</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                Work with verified professionals and enjoy quality service with peace of mind and fair pricing
              </p>
            </div>
          </div>
        </div>
        
        {/* Popular Services Section */}
        <div className="bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6">
              Popular Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Discover our most requested services with verified artisans ready to help you
            </p>
            
            <button
              onClick={handleShowAll}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-medium border border-orange-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 hover:shadow-md"
            >
              <span>Show All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <div
                key={service.name}
                onClick={() => handleServiceClick(service.name)}
                className="bg-white border-2 border-gray-100 rounded-24 p-6 hover:border-orange-200 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Service Icon with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  {/* Service Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Service Examples */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.examples.slice(0, 2).map((example) => (
                        <span
                          key={example}
                          className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full font-medium"
                        >
                          {example}
                        </span>
                      ))}
                      {service.examples.length > 2 && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          +{service.examples.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Artisan count and rating */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{service.artisanCount} artisans</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{service.avgRating}</span>
                    </div>
                  </div>
                  
                  {/* CTA Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;

