import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  SlidersHorizontal,
  ChevronDown,
  X,
  RotateCcw,
  PackageOpen,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, INDUSTRIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Active filter states derived from query parameters
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || ''
  );
  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    searchParams.get('industry') || ''
  );
  const [selectedMaterial, setSelectedMaterial] = useState<string>(
    searchParams.get('material') || ''
  );
  const [searchInput, setSearchInput] = useState<string>(
    searchParams.get('q') || ''
  );
  const [sortBy, setSortBy] = useState<string>(
    searchParams.get('sort') || 'featured'
  );
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Sync state with URL params
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '');
    setSelectedIndustry(searchParams.get('industry') || '');
    setSelectedMaterial(searchParams.get('material') || '');
    setSearchInput(searchParams.get('q') || '');
    setSortBy(searchParams.get('sort') || 'featured');
  }, [searchParams]);

  // Distinct materials from products
  const materials = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => set.add(p.material));
    return Array.from(set).sort();
  }, []);

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSelectedCategory('');
    setSelectedIndustry('');
    setSelectedMaterial('');
    setSearchInput('');
    setSortBy('featured');
    setSearchParams({});
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedIndustry && !p.industry.includes(selectedIndustry as any)) return false;
      if (selectedMaterial && p.material !== selectedMaterial) return false;
      if (searchInput.trim()) {
        const q = searchInput.toLowerCase().trim();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.capacities.some((cap) => cap.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'moq-asc') return a.moq - b.moq;
      if (sortBy === 'moq-desc') return b.moq - a.moq;
      return 0; // 'featured'
    });
  }, [selectedCategory, selectedIndustry, selectedMaterial, searchInput, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const hasActiveFilters = Boolean(
    selectedCategory || selectedIndustry || selectedMaterial || searchInput
  );

  return (
    <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-6 sm:pb-8 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] uppercase tracking-luxury text-amber-400 font-semibold mb-2">
              <span>Wholesale Packaging Catalogue</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
              All Packaging Products
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Commercial-grade bottles, jars, dispensers, and closures. Request competitive wholesale quotes for orders starting at minimum order quantities.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="text-xs text-slate-400 font-medium sm:text-right">
            Showing <span className="font-bold text-amber-400">{displayedProducts.length}</span> of{' '}
            <span className="font-bold text-white">{filteredProducts.length}</span> products
          </div>
        </div>

        {/* Search Bar & Mobile Filter Trigger */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                updateParam('q', e.target.value);
              }}
              placeholder="Search by product name, volume (e.g. 500ml), or material..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-inner"
            />
            {searchInput && (
              <button
                onClick={() => {
                  setSearchInput('');
                  updateParam('q', '');
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-white px-4 py-2.5 rounded-lg text-xs font-semibold shadow-inner lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>Filter Packaging</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            <span className="text-xs text-slate-400 shrink-0 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                updateParam('sort', e.target.value);
              }}
              className="w-full sm:w-48 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-amber-400 shadow-inner cursor-pointer"
            >
              <option value="featured" className="bg-slate-900 text-white">Featured First</option>
              <option value="name-asc" className="bg-slate-900 text-white">Name: A to Z</option>
              <option value="name-desc" className="bg-slate-900 text-white">Name: Z to A</option>
              <option value="moq-asc" className="bg-slate-900 text-white">MOQ: Low to High</option>
              <option value="moq-desc" className="bg-slate-900 text-white">MOQ: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Active filters:</span>

            {selectedCategory && (
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-full">
                <span>Cat: {CATEGORIES.find((c) => c.id === selectedCategory)?.name || selectedCategory}</span>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    updateParam('category', '');
                  }}
                  className="hover:text-amber-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedIndustry && (
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-full">
                <span>Industry: {INDUSTRIES.find((i) => i.id === selectedIndustry)?.name || selectedIndustry}</span>
                <button
                  onClick={() => {
                    setSelectedIndustry('');
                    updateParam('industry', '');
                  }}
                  className="hover:text-amber-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedMaterial && (
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-full">
                <span>Material: {selectedMaterial}</span>
                <button
                  onClick={() => {
                    setSelectedMaterial('');
                    updateParam('material', '');
                  }}
                  className="hover:text-amber-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchInput && (
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-full">
                <span>Query: "{searchInput}"</span>
                <button
                  onClick={() => {
                    setSearchInput('');
                    updateParam('q', '');
                  }}
                  className="hover:text-amber-400"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline font-semibold ml-2"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear all</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-3 bg-[#111827] border border-slate-800 rounded-xl p-5 shadow-2xl space-y-6 sticky top-24">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-amber-400" />
              <span className="font-serif text-sm font-semibold text-white">Filter Products</span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-[11px] text-slate-400 hover:text-amber-400 transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs uppercase tracking-luxury text-slate-400 font-semibold mb-2.5">
              Categories
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => {
                  setSelectedCategory('');
                  updateParam('category', '');
                }}
                className={`w-full text-left text-xs py-1.5 px-2.5 rounded transition-colors flex items-center justify-between ${
                  !selectedCategory
                    ? 'bg-amber-500/20 font-bold text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>All Categories</span>
                <span className="text-[10px] text-slate-500">{PRODUCTS.length}</span>
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    const val = selectedCategory === cat.id ? '' : cat.id;
                    setSelectedCategory(val);
                    updateParam('category', val);
                  }}
                  className={`w-full text-left text-xs py-1.5 px-2.5 rounded transition-colors flex items-center justify-between ${
                    selectedCategory === cat.id
                      ? 'bg-amber-500/20 font-bold text-amber-300 border border-amber-500/30'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  <span className="text-[10px] text-slate-500">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div className="border-t border-slate-800 pt-4">
            <h3 className="text-xs uppercase tracking-luxury text-slate-400 font-semibold mb-2.5">
              Materials
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {materials.map((mat) => (
                <button
                  key={mat}
                  onClick={() => {
                    const val = selectedMaterial === mat ? '' : mat;
                    setSelectedMaterial(val);
                    updateParam('material', val);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-md border transition-all ${
                    selectedMaterial === mat
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-500 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-amber-500/40'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="border-t border-slate-800 pt-4">
            <h3 className="text-xs uppercase tracking-luxury text-slate-400 font-semibold mb-2.5">
              Industry Use
            </h3>
            <div className="space-y-1">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => {
                    const val = selectedIndustry === ind.id ? '' : ind.id;
                    setSelectedIndustry(val);
                    updateParam('industry', val);
                  }}
                  className={`w-full text-left text-xs py-1.5 px-2.5 rounded transition-colors flex items-center justify-between ${
                    selectedIndustry === ind.id
                      ? 'bg-amber-500/20 font-bold text-amber-300 border border-amber-500/30'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{ind.name}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Cards Grid */}
        <main className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-[#111827] rounded-xl border border-slate-800 p-12 text-center space-y-4 shadow-2xl">
              <PackageOpen className="w-12 h-12 mx-auto text-slate-600" />
              <h3 className="font-serif text-lg font-semibold text-white">
                No matching packaging found
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                We couldn't find any products matching your active filters. Try adjusting your search query or clear all filters to see our full catalogue.
              </p>
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-5 py-2.5 rounded-md text-xs font-bold transition-all shadow-lg shadow-amber-500/20"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-950" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredProducts.length && (
                <div className="text-center pt-4">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-white px-6 py-3 rounded-md text-xs font-semibold shadow-inner transition-all"
                  >
                    <span>Load More Packaging Products</span>
                    <ChevronDown className="w-4 h-4 text-amber-400" />
                  </button>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Viewing {displayedProducts.length} of {filteredProducts.length} items
                  </p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#111827] border-l border-slate-800 shadow-2xl p-5 flex flex-col z-10 animate-slide-in-right">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="font-serif font-semibold text-base text-white">Filters</span>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-6">
              {/* Category Filter */}
              <div>
                <h4 className="text-xs uppercase tracking-luxury text-slate-400 font-semibold mb-2">
                  Category
                </h4>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        const val = selectedCategory === cat.id ? '' : cat.id;
                        setSelectedCategory(val);
                        updateParam('category', val);
                      }}
                      className={`w-full text-left text-xs py-2 px-2.5 rounded ${
                        selectedCategory === cat.id
                          ? 'bg-amber-500/20 font-bold text-amber-300 border border-amber-500/30'
                          : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h4 className="text-xs uppercase tracking-luxury text-slate-400 font-semibold mb-2">
                  Material
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => {
                        const val = selectedMaterial === mat ? '' : mat;
                        setSelectedMaterial(val);
                        updateParam('material', val);
                      }}
                      className={`text-xs px-2.5 py-1.5 rounded-md border ${
                        selectedMaterial === mat
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-500 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-amber-500/40'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  clearAllFilters();
                  setIsMobileFilterOpen(false);
                }}
                className="flex-1 py-2.5 text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 rounded-md hover:text-white"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2.5 text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-md"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
