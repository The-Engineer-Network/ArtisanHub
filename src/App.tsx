import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { queryClient } from './lib/queryClient';
import './index.css';
import './App.css';

// Page imports...
import SearchPage from './pages/search/SearchPage';

// Placeholder components...
function LandingPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-serif text-gray-800 mb-4">
          ArtisanHub
        </h1>
        <p className="text-gray-600 mb-8">
          Find Trusted Artisans Near You
        </p>
        <a 
          href="/search" 
          className="btn-primary inline-block"
          role="button"
          aria-label="Find artisans near you"
        >
          Find Artisans
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App min-h-screen bg-cream">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/artisan/:id" element={<SearchPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
