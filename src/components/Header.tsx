import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag, Phone } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItemsCount } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-200 shadow-xs">
      {/* Single Ultra-Slim Pistachio Navigation Bar (Height: ~48-52px) */}
      <div 
        className={`bg-[#F4F7F2]/95 backdrop-blur-md text-[#1E2B1D] transition-all duration-200 border-b border-[#D7E3D4] ${
          isScrolled ? 'py-1.5 sm:py-2 shadow-sm bg-[#EAF1E8]/98' : 'py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Left: Mobile Menu & Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenMobileMenu}
                type="button"
                className="lg:hidden p-1.5 -ml-1 text-[#1E2B1D] hover:text-[#5C8358] hover:bg-[#E5EFE3] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C8358]"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <Link to="/" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C8358] rounded-lg">
                <img
                  src="/images/logo-dark.png"
                  alt="AB TRADERS Logo"
                  className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#1E2B1D] leading-none group-hover:text-[#5C8358] transition-colors">
                    AB TRADERS
                  </span>
                  <span className="hidden xs:inline-block text-[9px] font-bold text-[#5C8358] uppercase tracking-wider">
                    Wholesale
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links (Slim) */}
            <nav className="hidden lg:flex items-center space-x-1 font-semibold text-xs text-[#3D4D3B]">
              <Link
                to="/"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-[#E5EFE3] text-[#385934] font-bold border border-[#C3D9BF]' 
                    : 'hover:bg-[#E5EFE3] hover:text-[#1E2B1D]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/shop' 
                    ? 'bg-[#E5EFE3] text-[#385934] font-bold border border-[#C3D9BF]' 
                    : 'hover:bg-[#E5EFE3] hover:text-[#1E2B1D]'
                }`}
              >
                Catalog
              </Link>
              <Link
                to="/industries"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/industries' 
                    ? 'bg-[#E5EFE3] text-[#385934] font-bold border border-[#C3D9BF]' 
                    : 'hover:bg-[#E5EFE3] hover:text-[#1E2B1D]'
                }`}
              >
                Industries
              </Link>
              <Link
                to="/custom-branding"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/custom-branding' 
                    ? 'bg-[#E5EFE3] text-[#385934] font-bold border border-[#C3D9BF]' 
                    : 'hover:bg-[#E5EFE3] hover:text-[#1E2B1D]'
                }`}
              >
                Custom Branding
              </Link>
              <Link
                to="/about"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/about' 
                    ? 'bg-[#E5EFE3] text-[#385934] font-bold border border-[#C3D9BF]' 
                    : 'hover:bg-[#E5EFE3] hover:text-[#1E2B1D]'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/contact' 
                    ? 'bg-[#E5EFE3] text-[#385934] font-bold border border-[#C3D9BF]' 
                    : 'hover:bg-[#E5EFE3] hover:text-[#1E2B1D]'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Actions (Call, Search, Quote) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Call Direct Button */}
              <a
                href="tel:03278822358"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#E5EFE3] hover:bg-[#D7E5D4] text-[#385934] border border-[#C3D9BF] text-xs font-bold py-1.5 px-3 rounded-lg transition-colors shadow-2xs"
                title="Call Ramiz Qaiser: 0327-8822358"
              >
                <Phone className="w-3.5 h-3.5 text-[#5C8358]" />
                <span className="hidden md:inline">0327-8822358</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* Quick Search */}
              <button
                onClick={onOpenSearch}
                type="button"
                className="p-2 text-[#3D4D3B] hover:text-[#5C8358] hover:bg-[#E5EFE3] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C8358]"
                aria-label="Search catalog"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Quote Bag */}
              <Link
                to="/quote"
                className="inline-flex items-center gap-1.5 bg-[#5C8358] hover:bg-[#4F724B] text-white font-bold text-xs py-1.5 px-3 rounded-lg transition-all shadow-sm shadow-[#5C8358]/25 active:scale-95"
                aria-label={`Quote bag with ${totalItemsCount} items`}
              >
                <ShoppingBag className="w-4 h-4 text-white shrink-0" />
                <span className="hidden sm:inline font-extrabold">Quote</span>
                {totalItemsCount > 0 && (
                  <span className="bg-white text-[#385934] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center -mr-1">
                    {totalItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
