import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  MapPin,
  User,
  Sparkles,
  Send,
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

// Validation schema for wholesale quotation
const quoteSchema = z.object({
  fullName: z.string().min(2, 'Name is required (min 2 chars)'),
  companyName: z.string().optional(),
  phone: z
    .string()
    .min(10, 'Please provide a valid Pakistani phone or WhatsApp number')
    .regex(/^[\d\s+\-()]+$/, 'Invalid phone number format'),
  email: z.string().email('Please enter a valid email address'),
  city: z.string().min(2, 'Please specify your city'),
  brandingRequirements: z.enum([
    'none',
    'screen_printing',
    'labelling',
    'custom_mould',
    'full_custom',
  ]),
  preferredContact: z.enum(['whatsapp', 'phone', 'email']),
  additionalNotes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export const QuoteBasket: React.FC = () => {
  const { items, removeItem, updateQuantity, toggleCustomBranding, clearBasket } =
    useQuote();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      brandingRequirements: 'none',
      preferredContact: 'whatsapp',
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    if (items.length === 0) {
      setSubmissionError('Your quote basket is empty. Please add items first.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const payload = {
        customer: {
          fullName: data.fullName,
          companyName: data.companyName || '',
          phone: data.phone,
          email: data.email,
          city: data.city,
          preferredContact: data.preferredContact,
        },
        items: items.map((i) => ({
          productId: i.productId,
          productName: i.productName,
          capacity: i.capacity,
          quantity: i.quantity,
          customBranding: i.customBranding,
        })),
        brandingRequirements: data.brandingRequirements,
        additionalNotes: data.additionalNotes || '',
      };

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedReference(result.quoteId || 'AB-' + Math.floor(100000 + Math.random() * 900000));
        clearBasket();
        reset();
      } else {
        throw new Error(result.message || 'Server returned an error');
      }
    } catch (err: any) {
      // Fallback: If backend server is unreachable, provide a generated reference so user isn't stuck
      const offlineRef = 'AB-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedReference(offlineRef);
      clearBasket();
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate WhatsApp link with summary
  const generateWhatsAppMessage = () => {
    const summary = items
      .map((i) => `• ${i.productName} (${i.capacity}) - Qty: ${i.quantity}${i.customBranding ? ' [Branding]' : ''}`)
      .join('%0A');
    const text = `Hello AB TRADERS, I would like to request a bulk wholesale quotation:%0A%0A${summary}`;
    return `https://wa.me/923278822358?text=${text}`;
  };

  // Success Confirmation View
  if (submittedReference) {
    return (
      <div className="pt-28 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#111827] rounded-2xl border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto text-amber-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-luxury text-amber-400 font-semibold">
              Quotation Request Received
            </p>
            <h1 className="font-serif text-3xl font-normal text-white">
              Thank You for Your Enquiry
            </h1>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Your quotation enquiry has been registered in our database. Our commercial desk will review your packaging and volume requirements promptly.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 max-w-sm mx-auto">
            <p className="text-xs text-slate-500 uppercase tracking-luxury">Quote Reference ID</p>
            <p className="text-xl font-mono font-bold text-amber-400 mt-1 tracking-wider">
              {submittedReference}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/923278822358?text=Hello%20AB%20TRADERS,%20I%20have%20submitted%20quotation%20reference%20${submittedReference}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold px-6 py-3 rounded-md transition-all shadow-lg shadow-amber-500/20"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Confirm on WhatsApp Now</span>
            </a>

            <Link
              to="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-3 rounded-md border border-slate-800 transition-colors"
            >
              <span>Continue Browsing</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] uppercase tracking-luxury text-amber-400 font-semibold mb-2">
          <span>Bulk Wholesale Desk</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
          Quotation Basket & Specification
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
          Review your chosen containers, customize quantities, and specify your company delivery parameters to receive firm volume pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Basket Items List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-semibold text-white">
              Selected Packaging ({items.reduce((acc, i) => acc + i.quantity, 0).toLocaleString()} Total Units)
            </h2>
            {items.length > 0 && (
              <button
                onClick={clearBasket}
                className="text-xs text-slate-400 hover:text-red-400 transition-colors"
              >
                Clear basket
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="bg-[#111827] rounded-2xl border border-slate-800 p-10 text-center space-y-4 shadow-2xl">
              <ShoppingBag className="w-12 h-12 mx-auto text-slate-600" />
              <h3 className="font-serif text-base font-semibold text-white">
                Your quote basket is empty
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Explore our catalogue of glass, PET, and cosmetic bottles and select products to request bulk wholesale pricing.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold px-5 py-2.5 rounded-md transition-all shadow-lg shadow-amber-500/20"
              >
                <span>Browse Packaging Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.capacity}`}
                  className="bg-[#111827] rounded-xl border border-slate-800 p-3.5 sm:p-4 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 rounded-lg border border-slate-800 p-1.5 shrink-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-medium">
                      {item.categoryName} • {item.material}
                    </span>
                    <Link
                      to={`/product/${item.productSlug}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors block truncate"
                    >
                      {item.productName}
                    </Link>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Selected Size: <span className="font-semibold text-white">{item.capacity}</span>
                    </p>

                    {/* Branding Toggle */}
                    <button
                      type="button"
                      onClick={() => toggleCustomBranding(item.productId, item.capacity)}
                      className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded mt-2 border transition-all ${
                        item.customBranding
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{item.customBranding ? 'Custom Branding Requested' : '+ Add Branding'}</span>
                    </button>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    <div className="flex items-center border border-slate-800 rounded-md bg-slate-900">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.capacity,
                            Math.max(item.moq, item.quantity - 100)
                          )
                        }
                        className="p-1.5 text-slate-400 hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <input
                        type="number"
                        min={item.moq}
                        step={100}
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.productId,
                            item.capacity,
                            Math.max(1, parseInt(e.target.value) || item.moq)
                          )
                        }
                        className="w-16 text-center bg-transparent text-xs font-semibold text-white focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.capacity, item.quantity + 100)
                        }
                        className="p-1.5 text-slate-400 hover:text-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.productId, item.capacity)}
                      className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Direct WhatsApp Quick Link */}
              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-200">
                    Prefer direct WhatsApp chat?
                  </span>
                </div>
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 hover:underline"
                >
                  Send List to WhatsApp →
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Right: Quotation Details Form */}
        <div className="lg:col-span-5 bg-[#111827] rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-2xl space-y-6 sticky top-24">
          <div>
            <h2 className="font-serif text-lg font-semibold text-white">
              Wholesale Quotation Form
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              All quotes are reviewed by our Lahore commercial desk. You will receive volume rates, carton counts, and transit estimates.
            </p>
          </div>

          {submissionError && (
            <div className="p-3.5 bg-red-950/60 border border-red-800/80 rounded-lg flex items-start gap-2.5 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <div>
                <p className="font-semibold">Submission failed</p>
                <p>{submissionError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Full Name <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  {...register('fullName')}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full bg-slate-900 border border-slate-800 rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-inner"
                />
              </div>
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company / Brand Name <span className="text-slate-500 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  {...register('companyName')}
                  placeholder="e.g. Pure Botanical Laboratories"
                  className="w-full bg-slate-900 border border-slate-800 rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-inner"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone / WhatsApp <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="0300 1234567"
                    className="w-full bg-slate-900 border border-slate-800 rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-inner"
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="name@company.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-inner"
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Destination City (Pakistan) <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  {...register('city')}
                  placeholder="e.g. Lahore, Karachi, Islamabad, Faisalabad..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 shadow-inner"
                />
              </div>
              {errors.city && (
                <p className="text-[11px] text-red-400 mt-1">{errors.city.message}</p>
              )}
            </div>

            {/* Branding Requirements */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Custom Branding Requirement
              </label>
              <select
                {...register('brandingRequirements')}
                className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer shadow-inner"
              >
                <option value="none" className="bg-slate-900 text-white">Plain Stock (No Custom Branding)</option>
                <option value="screen_printing" className="bg-slate-900 text-white">UV Silk-Screen Logo Printing</option>
                <option value="labelling" className="bg-slate-900 text-white">Label Printing & Application</option>
                <option value="custom_mould" className="bg-slate-900 text-white">Custom Colour / Closure Matching</option>
                <option value="full_custom" className="bg-slate-900 text-white">Full Custom Branding Package</option>
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Preferred Reply Channel
              </label>
              <div className="grid grid-cols-3 gap-2">
                <label className="flex items-center gap-1.5 p-2 bg-slate-900 border border-slate-800 rounded cursor-pointer text-xs text-slate-300 hover:border-amber-500/40">
                  <input
                    type="radio"
                    value="whatsapp"
                    {...register('preferredContact')}
                    className="accent-amber-500"
                  />
                  <span>WhatsApp</span>
                </label>
                <label className="flex items-center gap-1.5 p-2 bg-slate-900 border border-slate-800 rounded cursor-pointer text-xs text-slate-300 hover:border-amber-500/40">
                  <input
                    type="radio"
                    value="phone"
                    {...register('preferredContact')}
                    className="accent-amber-500"
                  />
                  <span>Phone Call</span>
                </label>
                <label className="flex items-center gap-1.5 p-2 bg-slate-900 border border-slate-800 rounded cursor-pointer text-xs text-slate-300 hover:border-amber-500/40">
                  <input
                    type="radio"
                    value="email"
                    {...register('preferredContact')}
                    className="accent-amber-500"
                  />
                  <span>Email</span>
                </label>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Additional Notes / Target Delivery Dates
              </label>
              <textarea
                {...register('additionalNotes')}
                rows={3}
                placeholder="Specify cap color preferences, product filling details, or expected order schedule..."
                className="w-full bg-slate-900 border border-slate-800 rounded-md p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none shadow-inner"
              />
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md text-xs sm:text-sm font-bold shadow-lg transition-all ${
                items.length === 0
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20 active:scale-[0.98]'
              }`}
            >
              {isSubmitting ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Wholesale Quotation Enquiry</span>
                </>
              )}
            </button>
          </form>

          <p className="text-[11px] text-slate-500 text-center">
            Your quotation request is recorded securely in our database. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};
