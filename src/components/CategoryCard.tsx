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
      className="group flex flex-col bg-white rounded-2xl p-3 sm:p-3.5 border border-[#D7E3D4] hover:border-[#5C8358] shadow-sm hover:shadow-md hover:shadow-[#5C8358]/10 transition-all duration-300 text-center relative overflow-hidden"
    >
      {/* Product Image Stage: Asymmetric Sculptured Diagonal Niche */}
      <div className="w-full aspect-[4/5] relative rounded-tr-[32px] sm:rounded-tr-[38px] rounded-bl-[32px] sm:rounded-bl-[38px] rounded-tl-xl rounded-br-xl bg-gradient-to-b from-[#EAF1E8]/70 via-[#F4F7F2]/50 to-white p-2 mb-3 overflow-hidden border border-[#D7E3D4]/80 shadow-[inset_0_2px_8px_rgba(92,131,88,0.06)] flex items-center justify-center transition-all duration-300 group-hover:border-[#5C8358]/40">
        {/* Soft 3D base shadow */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-3/5 h-2 bg-[#1E2B1D]/10 rounded-full blur-[3px]" />

        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="relative z-10 w-[86%] sm:w-[88%] aspect-square object-contain rounded-xl transition-all duration-300 scale-108 sm:scale-112 group-hover:scale-115 group-hover:-translate-y-1 drop-shadow-sm"
        />
      </div>

      {/* Category Name */}
      <h3 className="text-xs sm:text-sm font-bold text-[#1E2B1D] group-hover:text-[#5C8358] transition-colors line-clamp-1 mb-1">
        {category.name}
      </h3>

      {/* Explore text link with arrow */}
      <div className="mt-auto inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold text-[#5C8358] group-hover:text-[#385934] transition-colors">
        <span>Explore Category</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#5C8358]" />
      </div>
    </Link>
  );
};
