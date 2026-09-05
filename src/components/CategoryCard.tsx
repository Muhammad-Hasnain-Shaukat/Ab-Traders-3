import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CategoryInfo } from '../data/products';

interface CategoryCardProps {
  category: CategoryInfo;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group flex flex-col bg-[#111827]/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-slate-800 hover:border-amber-500/50 shadow-md shadow-black/30 hover:shadow-amber-500/10 transition-all duration-300 text-center relative overflow-hidden"
    >
      {/* Product Image Stage: Asymmetric Sculptured Diagonal Niche */}
      <div className="w-full aspect-[4/5] relative rounded-tr-[32px] sm:rounded-tr-[38px] rounded-bl-[32px] sm:rounded-bl-[38px] rounded-tl-xl rounded-br-xl bg-gradient-to-b from-slate-800/60 via-slate-900/80 to-[#0A0E18] p-2 mb-3 overflow-hidden border border-amber-500/20 shadow-[inset_0_2px_8px_rgba(245,158,11,0.06)] flex items-center justify-center transition-all duration-300 group-hover:border-amber-500/40">
        {/* Soft 3D base shadow with amber glow */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-3/5 h-2 bg-amber-500/15 rounded-full blur-[3px]" />

        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="relative z-10 w-[86%] sm:w-[88%] aspect-square object-contain rounded-xl transition-all duration-300 scale-108 sm:scale-112 group-hover:scale-115 group-hover:-translate-y-1 shadow-md shadow-black/40 border border-slate-700/30"
        />
      </div>

      {/* Category Name */}
      <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-1">
        {category.name}
      </h3>

      {/* Explore text link with arrow */}
      <div className="mt-auto inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
        <span>Explore Category</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-amber-400" />
      </div>
    </Link>
  );
};
