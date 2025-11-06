import { Menu } from 'lucide-react';

interface StickyHeaderProps {
  onMenuClick: () => void;
}

const StickyHeader = ({ onMenuClick }: StickyHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-4 focus:ring-orange-200 rounded-lg"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-serif text-orange-600 hover:text-orange-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 rounded px-2 py-1"
              aria-label="Go to homepage"
            >
              ArtisanHub
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-4 focus:ring-orange-200"
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="pcm">Pidgin</option>
            </select>
            
            <button
              className="btn-secondary text-sm py-2 px-4"
              onClick={() => {
                // This should also link to the artisan registration page (e.g. /register)
                // This button should navigate to the artisan signup/registration page
                // Its the same route as the hamburger menu "Join as Artisan" button
                console.log('Navigate to artisan registration page');
              }}
            >
              Join as Artisan
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;