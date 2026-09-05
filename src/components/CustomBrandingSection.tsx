import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Palette, Stamp, CheckCircle2, ArrowRight } from 'lucide-react';

export const CustomBrandingSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] uppercase tracking-luxury text-amber-400 font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Tailored Finishes</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight leading-tight mb-4">
              Your brand. Beautifully packaged.
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-xl">
              From clean minimalist silk-screen printing to tamper-evident labelling and bespoke cap colours, we help local Pakistani brands and growing businesses transform stock containers into distinctive signature packaging.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5 shadow-inner">
                  <Stamp className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Label Application</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Waterproof BOPP vinyl, metallic foil stickers, and full-wrap sleeve guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5 shadow-inner">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Printing Enquiries</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Direct UV silk-screen printing and hot-stamp gold or silver foil application.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5 shadow-inner">
                  <Palette className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Colour & Closures</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Custom masterbatch resin colours, matte sprays, and metallic dispensing collars.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5 shadow-inner">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Selection Assistance</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Physical samples, neck-thread verification, and formula compatibility testing.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                to="/custom-branding"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-md transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]"
              >
                <span>Discuss Custom Branding</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] bg-slate-900 relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800">
            <picture className="w-full h-full block">
              <source media="(max-width: 640px)" srcSet="/images/hero/hero-slide-1-mobile.jpg" />
              <img
                src="/images/hero/hero-slide-1-desktop.jpg"
                alt="AB TRADERS cosmetic and pharmaceutical custom packaging collection on stone display"
                loading="lazy"
                className="w-full h-full object-cover object-[72%_center] opacity-90 hover:opacity-100 transition-opacity"
              />
            </picture>
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-slate-950/95 backdrop-blur-md border border-slate-800 rounded-xl p-3.5 shadow-2xl">
              <p className="text-xs font-bold text-white">Wholesale Branding Support</p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Low MOQ starting from 500 units on selected custom printing batches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
