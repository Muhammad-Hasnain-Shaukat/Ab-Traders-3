import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Phone, MessageSquare, Home, Grid } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const MobileBottomBar: React.FC = () => {
  const location = useLocation();
  const { totalItemsCount } = useQuote();

  const isHome = location.pathname === '/';
  const isShop = location.pathname.startsWith('/shop');
  const isQuote = location.pathname === '/quote';

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F4F7F2]/95 backdrop-blur-md border-t border-[#D7E3D4] shadow-[0_-4px_20px_rgba(92,131,88,0.06)] px-2 py-1.5 safe-bottom"
    >
      <div className="flex items-center justify-around">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            isHome ? 'text-[#5C8358] font-bold' : 'text-[#586956] hover:text-[#1E2B1D]'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span>Home</span>
        </Link>

        {/* Catalog */}
        <Link
          to="/shop"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            isShop ? 'text-[#5C8358] font-bold' : 'text-[#586956] hover:text-[#1E2B1D]'
          }`}
        >
          <Grid className="w-5 h-5 mb-0.5" />
          <span>Catalog</span>
        </Link>

        {/* Call Direct */}
        <a
          href="tel:03278822358"
          className="flex flex-col items-center justify-center py-1 px-3 rounded-lg text-[10px] font-medium text-[#586956] hover:text-[#1E2B1D] transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5 text-[#5C8358]" />
          <span>Call</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/923278822358?text=Hello%20Ramiz%20Qaiser,%20I%20am%20enquiring%20about%20AB%20TRADERS%20wholesale%20bottles"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-3 rounded-lg text-[10px] font-bold text-[#2E7D32] hover:text-[#1B5E20] transition-colors"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quote Basket */}
        <Link
          to="/quote"
          className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            isQuote ? 'text-[#5C8358] font-bold' : 'text-[#586956] hover:text-[#1E2B1D]'
          }`}
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 mb-0.5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#5C8358] text-white font-extrabold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalItemsCount}
              </span>
            )}
          </div>
          <span>Quote</span>
        </Link>
      </div>
    </nav>
  );
};
