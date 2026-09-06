import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Palette, Stamp, CheckCircle2, ArrowRight } from 'lucide-react';

export const CustomBrandingSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-[#D7E3D4] rounded-2xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE3] border border-[#C3D9BF] text-[11px] uppercase tracking-luxury text-[#385934] font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#5C8358]" />
              <span>Tailored Finishes</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-[#1E2B1D] font-normal tracking-tight leading-tight mb-4">
              Your brand. Beautifully packaged.
            </h2>

            <p className="text-sm sm:text-base text-[#586956] leading-relaxed mb-6 sm:mb-8 max-w-xl">
              From clean minimalist silk-screen printing to tamper-evident labelling and bespoke cap colours, we help local Pakistani brands and growing businesses transform stock containers into distinctive signature packaging.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#EAF1E8] border border-[#D7E3D4] shrink-0 mt-0.5 shadow-2xs">
                  <Stamp className="w-4 h-4 text-[#5C8358]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2B1D]">Label Application</h4>
                  <p className="text-xs text-[#586956] mt-0.5 leading-relaxed">
                    Waterproof BOPP vinyl, metallic foil stickers, and full-wrap sleeve guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#EAF1E8] border border-[#D7E3D4] shrink-0 mt-0.5 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#5C8358]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2B1D]">Printing Enquiries</h4>
                  <p className="text-xs text-[#586956] mt-0.5 leading-relaxed">
                    Direct UV silk-screen printing and hot-stamp gold or silver foil application.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#EAF1E8] border border-[#D7E3D4] shrink-0 mt-0.5 shadow-2xs">
                  <Palette className="w-4 h-4 text-[#5C8358]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2B1D]">Colour & Closures</h4>
                  <p className="text-xs text-[#586956] mt-0.5 leading-relaxed">
                    Custom masterbatch resin colours, matte sprays, and metallic dispensing collars.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#EAF1E8] border border-[#D7E3D4] shrink-0 mt-0.5 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#5C8358]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2B1D]">Selection Assistance</h4>
                  <p className="text-xs text-[#586956] mt-0.5 leading-relaxed">
                    Physical samples, neck-thread verification, and formula compatibility testing.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                to="/custom-branding"
                className="inline-flex items-center gap-2 bg-[#5C8358] hover:bg-[#4F724B] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-[#5C8358]/20 active:scale-[0.98]"
              >
                <span>Discuss Custom Branding</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] bg-[#EAF1E8] relative overflow-hidden border-t lg:border-t-0 lg:border-l border-[#D7E3D4]">
            <picture className="w-full h-full block">
              <source media="(max-width: 640px)" srcSet="/images/hero/hero-slide-1-mobile.jpg" />
              <img
                src="/images/hero/hero-slide-1-desktop.jpg"
                alt="AB TRADERS cosmetic custom packaging collection"
                loading="lazy"
                className="w-full h-full object-cover object-[72%_center]"
              />
            </picture>
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md border border-[#D7E3D4] rounded-xl p-3.5 shadow-lg">
              <p className="text-xs font-bold text-[#1E2B1D]">Wholesale Branding Support</p>
              <p className="text-[11px] text-[#586956] mt-0.5">
                Low MOQ starting from 500 units on selected custom printing batches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
