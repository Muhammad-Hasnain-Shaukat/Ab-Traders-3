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
    <div className="group flex flex-col bg-white rounded-2xl border border-[#D7E3D4] hover:border-[#5C8358] shadow-sm hover:shadow-md hover:shadow-[#5C8358]/10 transition-all duration-300 overflow-hidden">
      {/* Product Image Stage: Asymmetric Sculptured Diagonal Frame */}
      <Link
        to={`/product/${product.slug}`}
        className="block relative aspect-[4/5] p-2.5 sm:p-3 overflow-hidden bg-[#F9FAF8] border-b border-[#EAF1E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C8358]"
      >
        {/* Asymmetric Sculptured Frame */}
        <div className="absolute inset-2 sm:inset-2.5 rounded-tr-[38px] sm:rounded-tr-[44px] rounded-bl-[38px] sm:rounded-bl-[44px] rounded-tl-xl rounded-br-xl bg-gradient-to-b from-[#EAF1E8]/70 via-[#F4F7F2]/50 to-white border border-[#D7E3D4]/80 shadow-[inset_0_2px_10px_rgba(92,131,88,0.06)] transition-all duration-300 group-hover:border-[#5C8358]/40 group-hover:shadow-[inset_0_2px_15px_rgba(92,131,88,0.12)]" />

        {/* 3D Studio Pedestal Shadow with Subtle Pistachio Glow */}
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-3/5 h-2.5 bg-[#1E2B1D]/10 rounded-full blur-[4px] transition-all duration-300 group-hover:w-2/3 group-hover:bg-[#5C8358]/20" />

        {/* Floating Product Bottle Presentation */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-1.5 sm:p-2">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-[88%] sm:w-[90%] aspect-square object-contain rounded-xl sm:rounded-2xl transition-all duration-300 scale-110 sm:scale-115 group-hover:scale-115 sm:group-hover:scale-125 group-hover:-translate-y-1.5 drop-shadow-sm"
          />
        </div>

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          {/* Material Tag */}
          <span className="bg-white/95 backdrop-blur-xs text-[#385934] text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full border border-[#C3D9BF] shadow-2xs">
            {product.material}
          </span>

          {/* MOQ Tag */}
          <span className="bg-[#5C8358] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
            MOQ: {product.moq.toLocaleString()}
          </span>
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Category */}
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#586956] mb-1 flex items-center gap-1">
            <Layers className="w-2.5 h-2.5 text-[#5C8358]" />
            <span>{product.categoryName}</span>
          </p>

          {/* Product Title */}
          <Link
            to={`/product/${product.slug}`}
            className="text-xs sm:text-sm font-bold text-[#1E2B1D] group-hover:text-[#5C8358] transition-colors line-clamp-2 leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C8358] rounded"
          >
            {product.name}
          </Link>

          {/* Available Sizes / Capacities */}
          <div className="mt-2.5 flex flex-wrap gap-1 items-center">
            {product.capacities.slice(0, 3).map((cap) => (
              <span
                key={cap}
                className="text-[10px] font-semibold bg-[#F4F7F2] text-[#3D4D3B] border border-[#D7E3D4] px-1.5 py-0.5 rounded-md"
              >
                {cap}
              </span>
            ))}
            {product.capacities.length > 3 && (
              <span className="text-[10px] text-[#7A8C78] font-semibold">+{product.capacities.length - 3}</span>
            )}
          </div>
        </div>

        {/* Pricing Status & Wholesale Guarantee */}
        <div className="mt-3 pt-2.5 border-t border-[#EAF1E8] flex items-center justify-between text-[11px]">
          <span className="font-extrabold text-[#5C8358]">Factory Direct Rate</span>
          <span className="text-[#586956] font-medium">Bulk Ready</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-2 mt-3">
          <Link
            to={`/product/${product.slug}`}
            className="w-full inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#1E2B1D] bg-[#F4F7F2] hover:bg-[#EAF1E8] py-2 sm:py-2.5 px-2.5 rounded-xl transition-colors text-center leading-none whitespace-nowrap border border-[#D7E3D4] active:scale-[0.98]"
          >
            <Eye className="w-3.5 h-3.5 text-[#5C8358] shrink-0" />
            <span>Details</span>
          </Link>

          <button
            onClick={handleQuickAdd}
            type="button"
            className="w-full inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-bold text-white bg-[#5C8358] hover:bg-[#4F724B] py-2 sm:py-2.5 px-2.5 rounded-xl transition-all shadow-sm shadow-[#5C8358]/20 active:scale-[0.97] leading-none whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-white shrink-0" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
};
