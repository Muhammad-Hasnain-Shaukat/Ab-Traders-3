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
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-200 shadow-md">
      {/* Single Ultra-Slim Obsidian & Gold Navigation Bar (Height: ~48-52px) */}
      <div 
        className={`bg-[#090D16]/95 backdrop-blur-md text-white transition-all duration-200 border-b border-amber-500/20 ${
          isScrolled ? 'py-1.5 sm:py-2 shadow-lg shadow-black/40 bg-[#060910]/98' : 'py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Left: Mobile Menu & Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenMobileMenu}
                type="button"
                className="lg:hidden p-1.5 -ml-1 text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <Link to="/" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black text-xs sm:text-sm tracking-tight shadow-sm shadow-amber-500/20 transition-transform duration-200 group-hover:scale-105">
                  AB
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm sm:text-base font-extrabold tracking-tight text-white leading-none group-hover:text-amber-300 transition-colors">
                    AB TRADERS
                  </span>
                  <span className="hidden xs:inline-block text-[9px] font-bold text-amber-400/90 uppercase tracking-wider">
                    Wholesale
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links (Slim) */}
            <nav className="hidden lg:flex items-center space-x-1 font-semibold text-xs text-slate-300">
              <Link
                to="/"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/' ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30' : 'hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/shop' ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30' : 'hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                Catalog
              </Link>
              <Link
                to="/industries"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/industries' ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30' : 'hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                Industries
              </Link>
              <Link
                to="/custom-branding"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/custom-branding' ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30' : 'hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                Custom Branding
              </Link>
              <Link
                to="/about"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/about' ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30' : 'hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  location.pathname === '/contact' ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30' : 'hover:bg-slate-800/60 hover:text-white'
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
                className="hidden sm:inline-flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold py-1.5 px-3 rounded-lg transition-colors shadow-2xs"
                title="Call Ramiz Qaiser: 0327-8822358"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden md:inline">0327-8822358</span>
                <span className="md:hidden">Call</span>
              </a>

              {/* Quick Search */}
              <button
                onClick={onOpenSearch}
                type="button"
                className="p-2 text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Search catalog"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Quote Bag */}
              <Link
                to="/quote"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs py-1.5 px-3 rounded-lg transition-all shadow-sm shadow-amber-500/25 active:scale-95"
                aria-label={`Quote bag with ${totalItemsCount} items`}
              >
                <ShoppingBag className="w-4 h-4 text-slate-950 shrink-0" />
                <span className="hidden sm:inline font-extrabold">Quote</span>
                {totalItemsCount > 0 && (
                  <span className="bg-slate-950 text-amber-400 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center -mr-1">
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
