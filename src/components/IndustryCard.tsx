import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { IndustryInfo } from '../data/products';

interface IndustryCardProps {
  industry: IndustryInfo;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <Link
      to={`/shop?industry=${industry.id}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-[#D7E3D4] hover:border-[#5C8358] overflow-hidden shadow-sm hover:shadow-md hover:shadow-[#5C8358]/10 transition-all duration-300"
    >
      {/* Industry Photography */}
      <div className="relative aspect-[4/3] bg-[#EAF1E8] overflow-hidden border-b border-[#D7E3D4]">
        <img
          src={industry.image}
          alt={`Packaging solutions for ${industry.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
        />

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-60" />

        {/* Industry Sector Tag */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="bg-white/95 backdrop-blur-xs text-[#385934] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-2xs border border-[#C3D9BF]">
            Sector
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h4 className="font-sans text-sm sm:text-base font-bold text-[#1E2B1D] group-hover:text-[#5C8358] transition-colors">
            {industry.name}
          </h4>
          <p className="text-[11px] text-[#586956] mt-0.5 line-clamp-1 font-medium">
            {industry.tagline}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-[#EAF1E8] flex items-center justify-between text-xs font-bold text-[#5C8358] group-hover:text-[#385934] transition-colors">
          <span>Explore Industry</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#5C8358]" />
        </div>
      </div>
    </Link>
  );
};
