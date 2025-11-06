// src/components/Map/MapView.tsx
import type { Artisan } from '../../types/artisan';

interface MapViewProps {
  artisans: Artisan[];
  center?: { lat: number; lng: number };
  radius?: number;
  onArtisanSelect: (artisan: Artisan) => void;
}

const MapView = ({ artisans, center, radius, onArtisanSelect }: MapViewProps) => {
  return (
    <div className="p-6 text-center text-gray-600 bg-white border-2 border-gray-200 rounded-xl shadow-sm">
      <div className="text-4xl mb-4">🗺️</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Map View</h3>
      <p className="text-gray-600 mb-4">
        Visual map showing {artisans.length} artisan locations
      </p>
      <div className="text-sm text-gray-500">
        Map integration coming soon...
      </div>
    </div>
  );
};

export default MapView;
