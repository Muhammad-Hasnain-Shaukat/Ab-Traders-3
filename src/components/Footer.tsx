import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F19] text-slate-100 border-t border-slate-800 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded border border-amber-400 bg-slate-900 flex items-center justify-center text-amber-400 font-serif text-sm font-bold shadow-sm">
                AB
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  AB TRADERS
                </span>
                <span className="text-[9px] tracking-luxury uppercase text-amber-400 font-semibold">
                  Packaging Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-sm">
              Cosmetic & PET bottle manufacturer and wholesale packaging supplier in Lahore, Pakistan. Managed by <span className="text-white font-bold underline decoration-amber-500/50">Ramiz Qaiser</span>.
            </p>

            <div className="pt-2 text-xs text-slate-200 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 leading-relaxed">Shop # 2604/D, Papar Mandi Naya Bazar, Near Niween Masjid, Shah Alam Market, Lahore</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200">Mon – Sat: 9:00 AM – 7:00 PM PKT</span>
              </p>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-white font-bold mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Categories</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${cat.id}`}
                    className="text-slate-200 hover:text-amber-400 transition-colors block py-0.5 font-medium"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/shop"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 pt-1.5"
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
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li>
                <Link to="/shop" className="hover:text-amber-400 transition-colors block py-0.5 font-medium">
                  Packaging Shop
                </Link>
              </li>
              <li>
                <Link to="/custom-branding" className="hover:text-amber-400 transition-colors block py-0.5 font-medium">
                  Custom Branding
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-amber-400 transition-colors block py-0.5 font-medium">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors block py-0.5 font-medium">
                  About AB TRADERS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors block py-0.5 font-medium">
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-amber-400 transition-colors block py-0.5 font-medium">
                  Wholesale Quote Basket
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Wholesale Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-white font-bold mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Contact & Enquiries</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-amber-400/90 text-[11px] uppercase tracking-wider font-semibold">Contact Person</p>
                <p className="text-white font-bold text-sm mt-0.5">Ramiz Qaiser</p>
              </div>

              <div>
                <p className="text-amber-400/90 text-[11px] uppercase tracking-wider font-semibold">Mobile & WhatsApp</p>
                <a
                  href="https://wa.me/923278822358?text=Hello%20Ramiz%20Qaiser,%20I%20am%20enquiring%20about%20AB%20TRADERS%20bottles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors block mt-0.5 text-sm"
                >
                  0327-8822358
                </a>
              </div>

              <div>
                <p className="text-amber-400/90 text-[11px] uppercase tracking-wider font-semibold">Secondary Mobile</p>
                <a
                  href="https://wa.me/923225080132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-amber-400 transition-colors block mt-0.5 text-sm"
                >
                  0322-5080132
                </a>
              </div>

              <div>
                <p className="text-amber-400/90 text-[11px] uppercase tracking-wider font-semibold">Landline (PTCL)</p>
                <a
                  href="tel:04237364617"
                  className="text-white font-bold hover:text-amber-400 transition-colors block mt-0.5 text-sm"
                >
                  042-37364617
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-medium">
          <p>© {new Date().getFullYear()} AB TRADERS. All rights reserved. Wholesale Packaging Supplier, Pakistan.</p>

          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-slate-300 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-300 hover:text-amber-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
