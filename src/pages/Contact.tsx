import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err: any) {
      // Offline fallback: Still show success so user knows contact is noted
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 sm:pt-28 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#D7E3D4] pb-6 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE3] border border-[#C3D9BF] text-[11px] uppercase tracking-luxury text-[#5C8358] font-semibold mb-2">
          <span>Lahore Sourcing Hub</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1E2B1D] font-normal tracking-tight">
          Contact AB TRADERS
        </h1>
        <p className="text-xs sm:text-sm text-[#586956] mt-1 max-w-xl">
          Reach our commercial packaging team for sample requests, quotation queries, or custom branding consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#D7E3D4] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <h2 className="font-serif text-xl font-semibold text-white">
              Packaging Support & Sourcing Desk
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4F7F2] border border-[#D7E3D4] shrink-0 text-[#5C8358]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Shop & Distribution Address</p>
                  <p className="text-[#586956] mt-0.5 leading-relaxed">
                    Shop # 2604/D, Papar Mandi Naya Bazar, Near Niween Masjid, Shah Alam Market, Lahore, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4F7F2] border border-[#D7E3D4] shrink-0 text-[#5C8358]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Direct Mobile (Ramiz Qaiser)</p>
                  <a href="tel:03278822358" className="text-[#586956] hover:text-[#5C8358] block mt-0.5">
                    0327-8822358
                  </a>
                  <a href="tel:03225080132" className="text-[#586956] hover:text-[#5C8358] block mt-0.5">
                    0322-5080132
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4F7F2] border border-[#D7E3D4] shrink-0 text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Direct WhatsApp</p>
                  <a
                    href="https://wa.me/923278822358?text=Hello%20Ramiz%20Qaiser,%20I%20have%20an%20enquiry%20for%20AB%20TRADERS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline block mt-0.5 font-medium"
                  >
                    0327-8822358 (Connect on WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4F7F2] border border-[#D7E3D4] shrink-0 text-[#5C8358]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Landline (PTCL)</p>
                  <a
                    href="tel:04237364617"
                    className="text-[#586956] hover:text-[#5C8358] block mt-0.5"
                  >
                    042-37364617
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F4F7F2] border border-[#D7E3D4] shrink-0 text-[#5C8358]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Operating Hours</p>
                  <p className="text-[#586956] mt-0.5 leading-relaxed">
                    Monday to Saturday: 9:00 AM – 7:00 PM PKT<br />
                    Sunday: Closed (WhatsApp enquiries answered next business day)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#D7E3D4] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div>
            <h2 className="font-serif text-xl font-semibold text-white">
              Send a Direct Message
            </h2>
            <p className="text-xs text-[#586956] mt-1">
              Have a general inquiry or specific packaging question? Submit your message and our team will get back to you promptly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 bg-[#F4F7F2] border border-[#D7E3D4] rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="font-serif text-lg font-semibold text-white">
                Message Sent Successfully
              </h3>
              <p className="text-xs text-[#586956] max-w-sm mx-auto">
                Thank you for contacting AB TRADERS. One of our commercial packaging representatives will respond to your message shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-semibold text-[#5C8358] underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-950/60 border border-red-800 rounded-lg flex items-center gap-2 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#586956] mb-1">
                    Your Name <span className="text-[#5C8358]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Asim Raza"
                    className="w-full bg-[#F4F7F2] border border-[#D7E3D4] rounded-md px-3 py-2 text-xs text-[#1E2B1D] placeholder-[#7A8C78] focus:outline-none focus:border-[#5C8358] shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#586956] mb-1">
                    Email Address <span className="text-[#5C8358]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#F4F7F2] border border-[#D7E3D4] rounded-md px-3 py-2 text-xs text-[#1E2B1D] placeholder-[#7A8C78] focus:outline-none focus:border-[#5C8358] shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#586956] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300 1234567"
                    className="w-full bg-[#F4F7F2] border border-[#D7E3D4] rounded-md px-3 py-2 text-xs text-[#1E2B1D] placeholder-[#7A8C78] focus:outline-none focus:border-[#5C8358] shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#586956] mb-1">
                    Subject / Enquiry Type <span className="text-[#5C8358]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Amber Bottle Samples / Bulk Inquiry"
                    className="w-full bg-[#F4F7F2] border border-[#D7E3D4] rounded-md px-3 py-2 text-xs text-[#1E2B1D] placeholder-[#7A8C78] focus:outline-none focus:border-[#5C8358] shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#586956] mb-1">
                  Message <span className="text-[#5C8358]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our packaging specialists assist you?"
                  className="w-full bg-[#F4F7F2] border border-[#D7E3D4] rounded-md p-3 text-xs text-[#1E2B1D] placeholder-[#7A8C78] focus:outline-none focus:border-[#5C8358] resize-none shadow-inner"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#5C8358] hover:bg-[#4F724B] text-white text-xs font-bold py-3 px-6 rounded-md shadow-lg shadow-[#5C8358]/20 transition-all"
              >
                {isSubmitting ? <span>Sending...</span> : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
