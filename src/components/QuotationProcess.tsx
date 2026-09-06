import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export const QuotationProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose your packaging',
      desc: 'Browse our glass, PET, HDPE containers, jars, and closure options. Add items and desired capacities to your quote basket.',
      icon: <Layers className="w-5 h-5 text-[#5C8358]" />,
    },
    {
      number: '02',
      title: 'Share quantity & branding needs',
      desc: 'Specify your anticipated volume, delivery city in Pakistan, and whether you require custom silk-screen printing or plain stock.',
      icon: <FileText className="w-5 h-5 text-[#5C8358]" />,
    },
    {
      number: '03',
      title: 'Receive a tailored quotation',
      desc: 'Our wholesale team calculates competitive tiered volume pricing and provides dispatch timelines directly to your WhatsApp or email.',
      icon: <CheckCircle className="w-5 h-5 text-[#5C8358]" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#EAF1E8]/60 border-y border-[#D7E3D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] uppercase tracking-luxury text-[#385934] font-semibold mb-2">
            Clear & Direct
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1E2B1D] font-normal tracking-tight">
            How Our Quotation Works
          </h2>
          <p className="text-xs sm:text-sm text-[#586956] mt-2 max-w-md mx-auto">
            A straightforward process designed for businesses, commercial buyers, and growing brand founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[#D7E3D4] hover:border-[#5C8358]/50 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#F4F7F2] border border-[#D7E3D4] shadow-2xs">
                    {step.icon}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#5C8358]/40">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1E2B1D] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#586956] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAF1E8]">
                <span className="text-[11px] font-semibold text-[#5C8358] uppercase tracking-wider">
                  Step {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-[#5C8358] hover:bg-[#4F724B] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-[#5C8358]/20 active:scale-[0.98]"
          >
            <span>Start Your Bulk Quotation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};
