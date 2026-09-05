import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Package } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.capacities.some((c) => c.toLowerCase().includes(q))
        );
      }).slice(0, 6)
    : [];

  const handleSelectProduct = (slug: string) => {
    navigate(`/product/${slug}`);
    onClose();
  };

  const handleSelectCategory = (catId: string) => {
    navigate(`/shop?category=${catId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#111827] rounded-xl shadow-2xl border border-slate-800 overflow-hidden z-10 animate-scale-up">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search glass bottles, PET jars, pumps, capacities (e.g. 250ml)..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 bg-slate-900 border border-slate-800 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {query.trim() === '' ? (
            <div>
              <p className="text-xs uppercase tracking-luxury text-slate-400 font-semibold mb-2">
                Popular Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-all flex items-center gap-1.5"
                  >
                    <span>{cat.name}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-luxury text-slate-400 font-semibold mb-1">
                {filteredProducts.length} Packaging Solutions Found
              </p>
              {filteredProducts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectProduct(p.slug)}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-900 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-12 h-12 rounded bg-slate-950 border border-slate-800 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors truncate">
                      {p.name}
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-2">
                      <span>{p.categoryName}</span>
                      <span>•</span>
                      <span>{p.material}</span>
                      <span>•</span>
                      <span>MOQ: {p.moq.toLocaleString()} pcs</span>
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" />
                </button>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center space-y-2">
              <Package className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-sm font-semibold text-white">No packaging found</p>
              <p className="text-xs text-slate-400">
                Try searching for general terms like "amber", "glass", "dropper", or "500ml".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
