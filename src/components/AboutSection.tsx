import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Authentic Sourcing Story */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] uppercase tracking-luxury text-amber-400 font-semibold mb-4">
            <span>About Us</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-tight leading-tight mb-4">
            Reliable packaging partners for Pakistani enterprises.
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
            AB TRADERS works closely with manufacturers, beauty formulators, food processors, and chemical companies across Pakistan to source dependable bottles, jars, and closure solutions.
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            We understand that packaging is more than a container—it protects formulation integrity, ensures consumer safety, and defines brand presence on the shelf. Whether you need standard stock containers or custom-branded finishes, our focus is consistent quality, straightforward volume pricing, and dependable supply coordination.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Direct manufacturer relationships</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Nationwide dispatch logistics</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Flexible wholesale MOQs</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Accurate specifications & samples</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Read more about our sourcing</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>

        {/* Right Column: Location & Verification Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner text-amber-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-semibold text-white">
                  Supply Hub & Distribution (Ramiz Qaiser)
                </h4>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Shop # 2604/D, Papar Mandi Naya Bazar, Near Niween Masjid, Shah Alam Market, Lahore.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400 font-medium">Core Specialties</span>
                <span className="font-bold text-white text-right">Glass, PET, HDPE & Closures</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400 font-medium">Service Coverage</span>
                <span className="font-bold text-white text-right">Karachi, Lahore, Islamabad, Nationwide</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-medium">Enquiry Response</span>
                <span className="font-bold text-amber-400 text-right">Same business day</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 text-xs font-semibold py-3 rounded-lg transition-colors border border-amber-500/30"
            >
              Contact Our Packaging Desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
