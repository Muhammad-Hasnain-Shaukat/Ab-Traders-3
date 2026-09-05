import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Layers, ShieldCheck, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] uppercase tracking-luxury text-amber-400 font-semibold mb-2">
          <span>Our Company Background</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
          Commercial Packaging Partners for Pakistan
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
          Supplying precision glass, PET, HDPE containers, and customized closure systems to commercial manufacturers and growing brands.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Story */}
        <div className="lg:col-span-7 space-y-6 text-sm text-slate-300 leading-relaxed">
          <p>
            Operating out of the historic packaging and commercial trading district of Shah Alam Market in Lahore, AB TRADERS was established to bridge the gap between primary container manufacturers and fast-growing beauty, pharmaceutical, and chemical brands throughout Pakistan.
          </p>

          <p>
            Rather than relying on generic containers with unpredictable batch variations, we work directly with certified moulders and glass blowers to secure uniform wall thickness, accurate neck-thread dimensions, and consistent closure seating.
          </p>

          <p>
            Whether an enterprise requires regular pallet dispatches of custom cosmetic PET bottles or a boutique skincare start-up needs 500 amber glass dropper bottles with custom silk-screen branding, we ensure realistic timelines, fair wholesale tier rates, and dedicated support.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800">
            <div className="p-4 bg-[#111827] border border-slate-800 rounded-xl shadow-inner">
              <Award className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="font-serif text-sm font-semibold text-white">Quality Checked</h4>
              <p className="text-xs text-slate-400 mt-1">Leak & thread checked before final dispatch.</p>
            </div>

            <div className="p-4 bg-[#111827] border border-slate-800 rounded-xl shadow-inner">
              <Layers className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="font-serif text-sm font-semibold text-white">Broad Range</h4>
              <p className="text-xs text-slate-400 mt-1">Glass, PET, HDPE, and specialized closures.</p>
            </div>

            <div className="p-4 bg-[#111827] border border-slate-800 rounded-xl shadow-inner">
              <ShieldCheck className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="font-serif text-sm font-semibold text-white">Direct Logistics</h4>
              <p className="text-xs text-slate-400 mt-1">Safe transit packaging to any city in Pakistan.</p>
            </div>
          </div>
        </div>

        {/* Operational Overview Card */}
        <div className="lg:col-span-5 bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          <h3 className="font-serif text-xl font-semibold text-white">
            Supply & Logistics Hub
          </h3>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Commercial Hub & Shop</p>
                <p className="text-slate-400 leading-relaxed">Shop # 2604/D, Papar Mandi Naya Bazar, Near Niween Masjid, Shah Alam Market, Lahore</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Direct Contacts (Ramiz Qaiser)</p>
                <a href="tel:03278822358" className="text-slate-300 hover:text-amber-400 block">
                  0327-8822358 / 0322-5080132
                </a>
                <a href="tel:04237364617" className="text-slate-300 hover:text-amber-400 block">
                  PTCL: 042-37364617
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Operating Hours</p>
                <p className="text-slate-400 leading-relaxed">Monday – Saturday: 9:00 AM – 7:00 PM PKT</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <Link
              to="/quote"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>Request Wholesale Sourcing Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
