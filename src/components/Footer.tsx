import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Phone } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#182317] text-[#E2EBE0] border-t border-[#2E3E2C] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2E3E2C]">
          {/* Brand & Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/images/logo-light.png"
                alt="AB TRADERS Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  AB TRADERS
                </span>
                <span className="text-[9px] tracking-luxury uppercase text-[#8FB888] font-semibold">
                  Packaging Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#BDD4B9] leading-relaxed max-w-sm">
              Cosmetic & PET bottle manufacturer and wholesale packaging supplier in Lahore, Pakistan. Managed by <span className="text-white font-bold underline decoration-[#5C8358]/60">Ramiz Qaiser</span>.
            </p>

            <div className="pt-2 text-xs text-[#BDD4B9] space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8FB888] shrink-0 mt-0.5" />
                <span className="text-[#BDD4B9] leading-relaxed">Shop # 2604/D, Papar Mandi Naya Bazar, Near Niween Masjid, Shah Alam Market, Lahore</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8FB888] shrink-0" />
                <a href="tel:03278822358" className="text-white font-semibold hover:text-[#8FB888] transition-colors">
                  0327-8822358
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8FB888] shrink-0" />
                <span className="text-[#BDD4B9]">Mon – Sat: 9:00 AM – 7:00 PM PKT</span>
              </p>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-white font-bold mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FB888]" />
              <span>Categories</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${cat.id}`}
                    className="text-[#BDD4B9] hover:text-[#8FB888] transition-colors block py-0.5 font-medium"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/shop"
                  className="text-[#8FB888] hover:text-white font-semibold inline-flex items-center gap-1 pt-1.5"
                >
                  <span>All Categories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-white font-bold mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FB888]" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BDD4B9]">
              <li>
                <Link to="/shop" className="hover:text-[#8FB888] transition-colors block py-0.5 font-medium">
                  Packaging Shop
                </Link>
              </li>
              <li>
                <Link to="/custom-branding" className="hover:text-[#8FB888] transition-colors block py-0.5 font-medium">
                  Custom Branding
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#8FB888] transition-colors block py-0.5 font-medium">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#8FB888] transition-colors block py-0.5 font-medium">
                  About AB TRADERS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8FB888] transition-colors block py-0.5 font-medium">
                  Direct Contact Desk
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-[#8FB888] transition-colors block py-0.5 font-medium">
                  Quote Basket
                </Link>
              </li>
            </ul>
          </div>

          {/* Sourcing & Compliance Information */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-white font-bold mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FB888]" />
              <span>Direct Sourcing</span>
            </h4>
            <div className="space-y-3 text-xs text-[#BDD4B9]">
              <p className="leading-relaxed">
                Wholesale packaging procurement with certified compatibility advice for cosmetic, pharmaceutical, and chemical formulators.
              </p>
              <div className="pt-2 border-t border-[#2E3E2C] space-y-1.5">
                <p className="text-[11px] text-[#8FB888] font-bold">● Wholesale Minimums Apply</p>
                <p className="text-[11px]">MOQ begins at 500 – 1,000 units depending on closure and decoration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BDD4B9]">
          <p>© {new Date().getFullYear()} AB TRADERS (Ramiz Qaiser). All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Supply</Link>
            <span className="text-[#8FB888] font-medium">Shah Alam Market, Lahore</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
