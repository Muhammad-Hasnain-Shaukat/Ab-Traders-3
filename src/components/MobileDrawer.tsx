import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Phone, MapPin, ChevronRight, Layers, Sparkles, Factory, Info, HelpCircle } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useQuote } from '../context/QuoteContext';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { totalItemsCount } = useQuote();

  // Close when location changes
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Trap focus and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    // Prevent background scroll
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Initial focus
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#111827] text-white shadow-2xl flex flex-col z-10 animate-slide-in-left safe-top safe-bottom border-r border-slate-800"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded border border-amber-500/50 bg-slate-950 flex items-center justify-center text-amber-400 font-serif text-xs font-bold">
              AB
            </div>
            <span className="font-serif font-bold text-base tracking-tight text-white">
              AB TRADERS
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-6">
          {/* Quick CTA */}
          <Link
            to="/quote"
            className="w-full flex items-center justify-between bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-3 rounded-lg text-sm font-bold shadow-lg shadow-amber-500/20 transition-all"
          >
            <div className="flex items-center gap-2">
              <span>Request Wholesale Quote</span>
              {totalItemsCount > 0 && (
                <span className="bg-slate-950 text-amber-400 text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalItemsCount}
                </span>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </Link>

          {/* Primary Navigation Links */}
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-luxury text-slate-500 font-semibold px-2 mb-1">
              Menu
            </p>
            <Link
              to="/"
              className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
            <Link
              to="/shop"
              className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/shop' ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>All Packaging Products</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
            <Link
              to="/custom-branding"
              className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/custom-branding' ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Custom Branding</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
            <Link
              to="/industries"
              className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/industries' ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Factory className="w-4 h-4 text-amber-400" />
                <span>Industries We Serve</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
            <Link
              to="/about"
              className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Info className="w-4 h-4 text-slate-400" />
                <span>About AB TRADERS</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
            <Link
              to="/contact"
              className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/contact' ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                <span>Contact & Enquiries</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>

          {/* Product Categories */}
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-slate-500 font-semibold px-2 mb-2">
              Browse Categories
            </p>
            <div className="grid grid-cols-1 gap-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/shop?category=${cat.id}`}
                  className="flex items-center justify-between py-1.5 px-3 text-xs text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 rounded transition-colors"
                >
                  <span>{cat.name}</span>
                  <span className="text-slate-500 text-[10px]">{cat.count} items</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Wholesale Contact Card */}
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2 text-xs text-slate-300 shadow-inner">
            <p className="font-semibold text-white">Ramiz Qaiser (AB TRADERS)</p>
            <p className="flex items-start gap-1.5 text-[11px] text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>Shop # 2604/D, Papar Mandi Naya Bazar, Shah Alam Market, Lahore</span>
            </p>
            <p className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href="tel:03278822358" className="hover:text-amber-400">0327-8822358</a>
              <span className="text-slate-600">/</span>
              <a href="tel:03225080132" className="hover:text-amber-400">0322-5080132</a>
            </p>
            <p className="text-[11px] text-slate-500 pl-5">
              PTCL: 042-37364617
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 text-center">
          <p className="text-[11px] text-slate-500">
            Nationwide Wholesale Packaging Supply Across Pakistan
          </p>
        </div>
      </div>
    </div>
  );
};
