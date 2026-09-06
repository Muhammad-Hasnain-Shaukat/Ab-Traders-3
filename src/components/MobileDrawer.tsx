import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { CATEGORIES } from '../data/products';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { totalItemsCount } = useQuote();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close drawer when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Focus trap & Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

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
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#F9FAF8] text-[#1E2B1D] shadow-2xl flex flex-col z-10 animate-slide-in-left safe-top safe-bottom border-r border-[#D7E3D4]"
      >
        {/* Header */}
        <div className="p-4 border-b border-[#D7E3D4] flex items-center justify-between">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <img
              src="/images/logo-dark.png"
              alt="AB TRADERS Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-serif font-bold text-base tracking-tight text-[#1E2B1D]">
              AB TRADERS
            </span>
          </Link>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EAF1E8] text-[#586956] hover:text-[#1E2B1D] transition-colors focus:outline-none"
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
            className="w-full flex items-center justify-between bg-[#5C8358] hover:bg-[#4F724B] text-white px-4 py-3 rounded-xl text-sm font-bold shadow-md shadow-[#5C8358]/20 transition-all"
          >
            <div className="flex items-center gap-2">
              <span>Request Wholesale Quote</span>
              {totalItemsCount > 0 && (
                <span className="bg-white text-[#385934] text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalItemsCount}
                </span>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          {/* Primary Navigation Links */}
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-luxury text-[#586956] font-semibold px-2 mb-1">
              Menu
            </p>
            <Link
              to="/"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'bg-[#E5EFE3] text-[#385934] font-semibold border border-[#C3D9BF]' 
                  : 'text-[#1E2B1D] hover:bg-[#EAF1E8]'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-[#7A8C78]" />
            </Link>
            <Link
              to="/shop"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/shop' 
                  ? 'bg-[#E5EFE3] text-[#385934] font-semibold border border-[#C3D9BF]' 
                  : 'text-[#1E2B1D] hover:bg-[#EAF1E8]'
              }`}
            >
              <span>All Products</span>
              <ChevronRight className="w-4 h-4 text-[#7A8C78]" />
            </Link>
            <Link
              to="/industries"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/industries' 
                  ? 'bg-[#E5EFE3] text-[#385934] font-semibold border border-[#C3D9BF]' 
                  : 'text-[#1E2B1D] hover:bg-[#EAF1E8]'
              }`}
            >
              <span>Industries Served</span>
              <ChevronRight className="w-4 h-4 text-[#7A8C78]" />
            </Link>
            <Link
              to="/custom-branding"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/custom-branding' 
                  ? 'bg-[#E5EFE3] text-[#385934] font-semibold border border-[#C3D9BF]' 
                  : 'text-[#1E2B1D] hover:bg-[#EAF1E8]'
              }`}
            >
              <span>Custom Branding</span>
              <ChevronRight className="w-4 h-4 text-[#7A8C78]" />
            </Link>
            <Link
              to="/about"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'bg-[#E5EFE3] text-[#385934] font-semibold border border-[#C3D9BF]' 
                  : 'text-[#1E2B1D] hover:bg-[#EAF1E8]'
              }`}
            >
              <span>About AB TRADERS</span>
              <ChevronRight className="w-4 h-4 text-[#7A8C78]" />
            </Link>
            <Link
              to="/contact"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'bg-[#E5EFE3] text-[#385934] font-semibold border border-[#C3D9BF]' 
                  : 'text-[#1E2B1D] hover:bg-[#EAF1E8]'
              }`}
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-[#7A8C78]" />
            </Link>
          </div>

          {/* Categories Quick Links */}
          <div className="space-y-1 pt-2 border-t border-[#D7E3D4]">
            <p className="text-[11px] uppercase tracking-luxury text-[#586956] font-semibold px-2 mb-1">
              Categories
            </p>
            {CATEGORIES.slice(0, 5).map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="block px-3 py-1.5 text-xs text-[#586956] hover:text-[#5C8358] hover:bg-[#EAF1E8] rounded-md transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Direct Wholesale Support */}
          <div className="pt-2 border-t border-[#D7E3D4] space-y-3 text-xs text-[#586956]">
            <p className="text-[11px] uppercase tracking-luxury text-[#586956] font-semibold px-2">
              Direct Support
            </p>
            <a
              href="tel:03278822358"
              className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-[#EAF1E8] text-[#1E2B1D] font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#5C8358]" />
              <span>0327-8822358 (Ramiz Qaiser)</span>
            </a>
            <a
              href="mailto:contact@abtraders.pk"
              className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-[#EAF1E8] text-[#1E2B1D] font-medium transition-colors"
            >
              <Mail className="w-4 h-4 text-[#5C8358]" />
              <span>contact@abtraders.pk</span>
            </a>
            <div className="flex items-start gap-2.5 px-3 py-1 text-[#7A8C78] text-[11px] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#5C8358] shrink-0 mt-0.5" />
              <span>Shah Alam Market, Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-4 border-t border-[#D7E3D4] bg-[#EAF1E8]/60 text-center">
          <p className="text-[10px] text-[#586956]">
            AB TRADERS • Wholesale Packaging Supplier Pakistan
          </p>
        </div>
      </div>
    </div>
  );
};
