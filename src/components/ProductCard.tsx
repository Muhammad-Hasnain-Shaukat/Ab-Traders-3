import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Layers } from 'lucide-react';
import type { Product } from '../types';
import { useQuote } from '../context/QuoteContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useQuote();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(
      {
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        categoryName: product.categoryName,
        material: product.material,
        image: product.images[0],
        capacity: product.capacities[0] || 'Standard',
        moq: product.moq,
        customBranding: false,
      },
      product.moq
    );
  };

  return (
    <div className="group flex flex-col bg-[#111827]/90 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-amber-500/50 shadow-md shadow-black/40 hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden">
      {/* Product Image Stage: Asymmetric Sculptured Diagonal Frame */}
      <Link
        to={`/product/${product.slug}`}
        className="block relative aspect-[4/5] p-2.5 sm:p-3 overflow-hidden bg-[#090D16] border-b border-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        {/* Asymmetric Sculptured Frame (Dior/Chanel High-Fashion Diagonal Curves) */}
        <div className="absolute inset-2 sm:inset-2.5 rounded-tr-[38px] sm:rounded-tr-[44px] rounded-bl-[38px] sm:rounded-bl-[44px] rounded-tl-xl rounded-br-xl bg-gradient-to-b from-slate-800/60 via-slate-900/80 to-[#0A0E18] border border-amber-500/20 shadow-[inset_0_2px_10px_rgba(245,158,11,0.06)] transition-all duration-300 group-hover:border-amber-500/50 group-hover:shadow-[inset_0_2px_15px_rgba(245,158,11,0.12)]" />

        {/* 3D Studio Pedestal Shadow with Radiant Amber Glow */}
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-3/5 h-2.5 bg-amber-500/20 rounded-full blur-[4px] transition-all duration-300 group-hover:w-2/3 group-hover:bg-amber-400/30" />

        {/* Floating Product Bottle Presentation - Large on Mobile and PC */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-1.5 sm:p-2">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-[88%] sm:w-[90%] aspect-square object-contain rounded-xl sm:rounded-2xl transition-all duration-300 scale-110 sm:scale-115 group-hover:scale-115 sm:group-hover:scale-125 group-hover:-translate-y-1.5 shadow-lg shadow-black/40 border border-slate-700/40"
          />
        </div>

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          {/* Material Tag */}
          <span className="bg-slate-950/90 backdrop-blur-xs text-amber-400 text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full border border-amber-500/30 shadow-2xs">
            {product.material}
          </span>

          {/* MOQ Tag */}
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full shadow-2xs">
            MOQ: {product.moq.toLocaleString()}
          </span>
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 mb-1 flex items-center gap-1">
            <Layers className="w-2.5 h-2.5 text-amber-400" />
            <span>{product.categoryName}</span>
          </p>

          {/* Product Title */}
          <Link
            to={`/product/${product.slug}`}
            className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
          >
            {product.name}
          </Link>

          {/* Available Sizes / Capacities */}
          <div className="mt-2.5 flex flex-wrap gap-1 items-center">
            {product.capacities.slice(0, 3).map((cap) => (
              <span
                key={cap}
                className="text-[10px] font-bold bg-slate-800/90 text-slate-300 border border-slate-700/80 px-1.5 py-0.5 rounded-md"
              >
                {cap}
              </span>
            ))}
            {product.capacities.length > 3 && (
              <span className="text-[10px] text-slate-500 font-semibold">+{product.capacities.length - 3}</span>
            )}
          </div>
        </div>

        {/* Pricing Status & Wholesale Guarantee */}
        <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
          <span className="font-extrabold text-amber-400">Factory Direct Rate</span>
          <span className="text-slate-400 font-medium">Bulk Ready</span>
        </div>

        {/* Mobile-Optimized Action Buttons (Stacked on Mobile, 2-Col on Desktop) */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-2 mt-3">
          <Link
            to={`/product/${product.slug}`}
            className="w-full inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-300 bg-slate-800/90 hover:bg-slate-750 hover:text-white py-2 sm:py-2.5 px-2.5 rounded-xl transition-colors text-center leading-none whitespace-nowrap border border-slate-700/90 active:scale-[0.98]"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Details</span>
          </Link>

          <button
            onClick={handleQuickAdd}
            type="button"
            className="w-full inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-black text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 py-2 sm:py-2.5 px-2.5 rounded-xl transition-all shadow-sm shadow-amber-500/25 active:scale-[0.97] leading-none whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-slate-950 shrink-0" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
};
