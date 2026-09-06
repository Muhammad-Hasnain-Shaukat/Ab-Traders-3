import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, MessageCircle } from 'lucide-react';

export const ClosingCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#EAF1E8] via-[#F4F7F2] to-[#EAF1E8] text-[#1E2B1D] py-16 sm:py-20 relative overflow-hidden border-t border-[#D7E3D4]">
      {/* Radiant pistachio decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5C8358]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#5C8358]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Label */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE3] border border-[#C3D9BF] text-[10px] uppercase tracking-wider text-[#385934] font-extrabold mb-3 shadow-2xs">
            <span className="text-[#5C8358]">●</span>
            <span>Direct Wholesale Desk</span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-[#1E2B1D] font-extrabold tracking-tight leading-tight mb-4">
            Let’s find your packaging.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#586956] font-normal leading-relaxed mb-8 max-w-lg mx-auto">
            Share your project requirements, quantities, and branding goals. Receive tailored wholesale quotation and technical advice from our packaging specialists in Shah Alam Market.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#5C8358] hover:bg-[#4F724B] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl tracking-wide transition-all shadow-md shadow-[#5C8358]/25 active:scale-[0.98]"
            >
              <span>Get Bulk Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <a
              href="https://wa.me/923278822358?text=Hello%20Ramiz%20Qaiser,%20I%20am%20enquiring%20about%20AB%20TRADERS%20wholesale%20packaging"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F4F7F2] text-[#1E2B1D] border border-[#D7E3D4] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl tracking-wide transition-all shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#586956]">
            <a href="tel:03278822358" className="flex items-center gap-1.5 text-[#5C8358] hover:text-[#385934] font-bold transition-colors">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>0327-8822358</span>
            </a>
            <span>•</span>
            <span>Ramiz Qaiser</span>
            <span>•</span>
            <span>Shah Alam Market, Lahore</span>
          </div>
        </div>
      </div>
    </section>
  );
};
