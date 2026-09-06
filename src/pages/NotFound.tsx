import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-xl mx-auto px-4 text-center">
      <div className="bg-white border border-[#D7E3D4] rounded-2xl p-8 sm:p-12 shadow-2xl space-y-6">
        <span className="font-mono text-4xl sm:text-5xl font-bold text-[#5C8358]">404</span>
        <div className="space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-white">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#586956] leading-relaxed max-w-sm mx-auto">
            The packaging page or category link you requested could not be found or may have been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5C8358] hover:bg-[#4F724B] text-white text-xs font-bold px-5 py-2.5 rounded-md transition-all shadow-lg shadow-[#5C8358]/20"
          >
            <Home className="w-4 h-4 text-white" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F4F7F2] hover:bg-[#EAF1E8] text-[#5C8358] border border-[#C3D9BF] text-xs font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
