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
      className="group relative flex flex-col bg-[#111827]/90 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-amber-500/50 overflow-hidden shadow-md shadow-black/30 hover:shadow-amber-500/10 transition-all duration-300"
    >
      {/* Industry Photography */}
      <div className="relative aspect-[4/3] bg-[#090D16] overflow-hidden border-b border-slate-800">
        <img
          src={industry.image}
          alt={`Packaging solutions for ${industry.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
        />

        {/* Ambient Dark Gradient for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Industry Sector Tag */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="bg-slate-950/90 backdrop-blur-xs text-amber-400 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-2xs border border-amber-500/30">
            Sector
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-sans text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
            {industry.name}
          </h4>
          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 font-medium">
            {industry.tagline}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
          <span>Explore Industry</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-amber-400" />
        </div>
      </div>
    </Link>
  );
};
