import React from 'react';
import { Star, Construction } from 'lucide-react';

const MaintenanceOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-amber-900 z-50 flex items-center justify-center">
      <div className="text-center p-8 max-w-2xl animate-fade-in">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Star className="h-20 w-20 text-amber-400 animate-[spin_20s_linear_infinite]" />
            <Construction className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-amber-200" />
          </div>
        </div>
        <p className="text-2xl text-amber-100">
          Our website is currently under construction.
        </p>
      </div>
    </div>
  );
};

export default MaintenanceOverlay;