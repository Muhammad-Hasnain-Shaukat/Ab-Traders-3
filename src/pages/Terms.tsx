import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Draft Review Banner */}
      <div className="mb-8 p-4 bg-[#E5EFE3] border border-[#C3D9BF] rounded-xl flex items-start gap-3 text-xs text-[#385934]">
        <AlertCircle className="w-5 h-5 text-[#5C8358] shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold">Notice for Business Review</p>
          <p className="mt-0.5 text-[#586956]">
            This document outlines standard wholesale commercial terms for AB TRADERS. Please review and calibrate with internal company trading terms before commercial finalization.
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#D7E3D4] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 text-xs sm:text-sm text-[#586956] leading-relaxed">
        <div>
          <span className="text-[11px] uppercase tracking-luxury text-[#5C8358] font-semibold">
            Commercial Terms
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#7A8C78] mt-1">
            Last Updated: September 2026 • AB TRADERS, Lahore, Pakistan
          </p>
        </div>

        <section className="space-y-2 border-t border-[#D7E3D4] pt-4">
          <h2 className="font-serif text-base font-semibold text-white">
            1. Wholesale Enquiries & Quotations
          </h2>
          <p className="text-[#586956]">
            Submission of a quotation request via our website does not constitute a binding sales agreement until an official written proforma quotation is confirmed by AB TRADERS and accepted by the client. Prices and delivery timelines are subject to confirmation based on raw material resin indices, order quantities, and production scheduling.
          </p>
        </section>

        <section className="space-y-2 border-t border-[#D7E3D4] pt-4">
          <h2 className="font-serif text-base font-semibold text-white">
            2. Minimum Order Quantities (MOQ)
          </h2>
          <p className="text-[#586956]">
            All listed packaging containers, pumps, and closures have specified wholesale Minimum Order Quantities (MOQs). Orders below minimum thresholds may incur broken-carton surcharges or be redirected to authorized regional distributors.
          </p>
        </section>

        <section className="space-y-2 border-t border-[#D7E3D4] pt-4">
          <h2 className="font-serif text-base font-semibold text-white">
            3. Customer Formulation Compatibility
          </h2>
          <p className="text-[#586956]">
            The buyer is solely responsible for determining the suitability and chemical compatibility of the packaging container (glass, PET, HDPE, PP) with their intended filling formulation (liquids, essential oils, active acids, surfactants, solvents). AB TRADERS offers sample units for testing upon request.
          </p>
        </section>

        <section className="space-y-2 border-t border-[#D7E3D4] pt-4">
          <h2 className="font-serif text-base font-semibold text-white">
            4. Dispatch, Freight, and Transit
          </h2>
          <p className="text-[#586956]">
            Dispatches from our Lahore hub (Shah Alam Market) are coordinated via trusted goods transport networks across Karachi, Lahore, Islamabad, Faisalabad, Multan, and other cities. Goods transit insurance and specific dock handling can be arranged upon customer request.
          </p>
        </section>
      </div>
    </div>
  );
};
