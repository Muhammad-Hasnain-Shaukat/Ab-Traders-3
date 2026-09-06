import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Layers, ArrowRight } from 'lucide-react';
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
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
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
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#D7E3D4] overflow-hidden z-10 animate-scale-up">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#EAF1E8] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#5C8358] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search glass bottles, PET jars, pumps, capacities (e.g. 250ml)..."
            className="w-full bg-transparent text-[#1E2B1D] placeholder-[#586956] text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#586956] hover:text-[#1E2B1D]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 bg-[#F4F7F2] hover:bg-[#EAF1E8] text-[#586956] rounded-md transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {query.trim() === '' ? (
            <div>
              <p className="text-xs uppercase tracking-luxury text-[#586956] font-semibold mb-3">
                Suggested Categories
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CATEGORIES.slice(0, 6).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className="flex items-center gap-2 p-2.5 rounded-xl border border-[#D7E3D4] hover:border-[#5C8358] bg-[#F4F7F2] hover:bg-[#EAF1E8] text-left transition-all group"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#5C8358]" />
                    <span className="text-xs text-[#1E2B1D] font-medium group-hover:text-[#5C8358] truncate">
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs text-[#586956] font-semibold mb-2">
                Matching Packaging Products ({filteredProducts.length})
              </p>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product.slug)}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#F4F7F2] border border-transparent hover:border-[#D7E3D4] cursor-pointer transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#EAF1E8] p-1 shrink-0 flex items-center justify-center border border-[#D7E3D4]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#5C8358] uppercase font-bold tracking-wider">
                      {product.categoryName} • {product.material}
                    </p>
                    <h5 className="text-xs sm:text-sm font-semibold text-[#1E2B1D] truncate group-hover:text-[#5C8358]">
                      {product.name}
                    </h5>
                    <p className="text-[11px] text-[#586956] truncate">
                      Capacities: {product.capacities.join(', ')} • MOQ: {product.moq.toLocaleString()}
                    </p>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[#7A8C78] group-hover:text-[#5C8358] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm font-medium text-[#1E2B1D]">No products found for "{query}"</p>
              <p className="text-xs text-[#586956] mt-1">
                Try searching for materials (Glass, PET), items (Lotion, Dropper, Jar), or capacities (100ml, 250ml).
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#F4F7F2] border-t border-[#EAF1E8] flex items-center justify-between text-xs text-[#586956]">
          <span>Direct enquiries: 0327-8822358</span>
          <button
            onClick={() => {
              navigate('/shop');
              onClose();
            }}
            className="text-[#5C8358] font-semibold hover:underline"
          >
            Browse Full Catalogue →
          </button>
        </div>
      </div>
    </div>
  );
};
