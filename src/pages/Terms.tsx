import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Draft Review Banner */}
      <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3 text-xs text-amber-300">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold">Notice for Business Review</p>
          <p className="mt-0.5 text-slate-400">
            This document outlines standard wholesale commercial terms for AB TRADERS. Please review and calibrate with internal company trading terms before commercial finalization.
          </p>
        </div>
      </div>

      <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div>
          <span className="text-[11px] uppercase tracking-luxury text-amber-400 font-semibold">
            Commercial Terms
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: September 2026 • AB TRADERS, Lahore, Pakistan
          </p>
        </div>

        <section className="space-y-2 border-t border-slate-800 pt-4">
          <h2 className="font-serif text-base font-semibold text-white">
            1. Wholesale Enquiries & Quotations
          </h2>
          <p className="text-slate-400">
            Submission of a quotation request via our website does not constitute a binding sales agreement until an official written proforma quotation is confirmed by AB TRADERS and accepted by the client. Prices and delivery timelines are subject to confirmation based on raw material resin indices, order quantities, and production scheduling.
          </p>
        </section>

        <section className="space-y-2 border-t border-slate-800 pt-4">
          <h2 className="font-serif text-base font-semibold text-white">
            2. Minimum Order Quantities (MOQ)
          </h2>
          <p className="text-slate-400">
            All listed packaging containers, pumps, and closures have specified wholesale Minimum Order Quantities (MOQs). Orders below minimum thresholds may incur broken-carton surcharges or be redirected to authorized regional distributors.
          </p>
        </section>

        <section className="space-y-2 border-t border-slate-800 pt-4">
          <h2 className="font-serif text-base font-semibold text-white">
            3. Customer Formulation Compatibility
          </h2>
          <p className="text-slate-400">
            The buyer is solely responsible for determining the suitability and chemical compatibility of the packaging container (glass, PET, HDPE, PP) with their intended filling formulation (liquids, essential oils, active acids, surfactants, solvents). AB TRADERS offers sample units for testing upon request.
          </p>
        </section>

        <section className="space-y-2 border-t border-slate-800 pt-4">
          <h2 className="font-serif text-base font-semibold text-white">
            4. Dispatch, Freight, and Transit
          </h2>
          <p className="text-slate-400">
            Dispatches from our Lahore hub (Shah Alam Market) are coordinated via trusted goods transport networks across Karachi, Lahore, Islamabad, Faisalabad, Multan, and other cities. Goods transit insurance and specific dock handling can be arranged upon customer request.
          </p>
        </section>
      </div>
    </div>
  );
};
