import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Authentic Sourcing Story */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE3] border border-[#C3D9BF] text-[11px] uppercase tracking-luxury text-[#385934] font-semibold mb-4">
            <span>About Us</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1E2B1D] font-normal tracking-tight leading-tight mb-4">
            Reliable packaging partners for Pakistani enterprises.
          </h2>

          <p className="text-sm sm:text-base text-[#3D4D3B] leading-relaxed mb-4">
            AB TRADERS works closely with manufacturers, beauty formulators, food processors, and chemical companies across Pakistan to source dependable bottles, jars, and closure solutions.
          </p>

          <p className="text-xs sm:text-sm text-[#586956] leading-relaxed mb-6">
            We understand that packaging is more than a container—it protects formulation integrity, ensures consumer safety, and defines brand presence on the shelf. Whether you need standard stock containers or custom-branded finishes, our focus is consistent quality, straightforward volume pricing, and dependable supply coordination.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#1E2B1D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#5C8358] shrink-0" />
              <span>Direct manufacturer relationships</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#1E2B1D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#5C8358] shrink-0" />
              <span>Nationwide dispatch logistics</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#1E2B1D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#5C8358] shrink-0" />
              <span>Flexible wholesale MOQs</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#1E2B1D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#5C8358] shrink-0" />
              <span>Accurate specifications & samples</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5C8358] hover:text-[#385934] transition-colors"
            >
              <span>Read more about our sourcing</span>
              <ArrowRight className="w-4 h-4 text-[#5C8358]" />
            </Link>
          </div>
        </div>

        {/* Right Column: Location & Verification Card */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D7E3D4] shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#EAF1E8] border border-[#D7E3D4] shadow-xs text-[#5C8358] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-semibold text-[#1E2B1D]">
                  Supply Hub & Distribution (Ramiz Qaiser)
                </h4>
                <p className="text-xs text-[#586956] mt-1 leading-relaxed">
                  Shop # 2604/D, Papar Mandi Naya Bazar, Near Niween Masjid, Shah Alam Market, Lahore.
                </p>
              </div>
            </div>

            <div className="border-t border-[#EAF1E8] pt-4 space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-[#EAF1E8]">
                <span className="text-[#586956] font-medium">Core Specialties</span>
                <span className="font-bold text-[#1E2B1D] text-right">Glass, PET, HDPE & Closures</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#EAF1E8]">
                <span className="text-[#586956] font-medium">Service Coverage</span>
                <span className="font-bold text-[#1E2B1D] text-right">Karachi, Lahore, Islamabad, Nationwide</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#586956] font-medium">Enquiry Response</span>
                <span className="font-bold text-[#5C8358] text-right">Same business day</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="block w-full text-center bg-[#F4F7F2] hover:bg-[#EAF1E8] text-[#385934] text-xs font-semibold py-3 rounded-xl transition-colors border border-[#C3D9BF]"
            >
              Contact Our Packaging Desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
