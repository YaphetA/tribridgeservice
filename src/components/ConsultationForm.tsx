"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  size: string;
  timeline: string;
  service: string;
  message: string;
};

const initialData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  size: "",
  timeline: "",
  service: "",
  message: "",
};

const sizes = [
  "Solo operator (just me)",
  "2–10 employees",
  "11–50 employees",
  "51–250 employees",
  "250+ employees",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring options",
];

const services = [
  "Operations & Admin Support",
  "Customer Contact & Outbound",
  "Legal & Compliance Admin",
  "Back-Office & Data Management",
  "Billing & Accounts Support",
  "Dedicated Remote Team",
  "Ethiopia In-Country Support",
  "Not sure yet — need advice",
];

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/tribridgepartners";

function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // cleanup — Calendly widget doesn't expose a destroy API, just let the script unload
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export default function ConsultationForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/6 border border-white/12 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-[#C9A84C]/60 focus:bg-white/8 transition-all duration-200";
  const labelClass = "block text-white/70 text-xs font-semibold uppercase tracking-wider mb-1.5";

  return (
    <section id="contact" className="py-28 bg-[#0A1628] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C9A84C]/5 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold mb-6 border border-[#C9A84C]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                  Free Consultation — No Obligation
                </span>
                <h2
                  className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Book a Free
                  <br />
                  <span className="text-gold-gradient">Consultation</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  Tell us about your business and we&apos;ll prepare for your
                  call. Written proposal delivered within 48 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Your Name <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company Name <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Acme Roofing Ltd"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Work Email <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone <span className="text-white/30 normal-case tracking-normal font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 555 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3: Size + Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="size">
                      Company Size <span className="text-[#C9A84C]">*</span>
                    </label>
                    <select
                      id="size"
                      name="size"
                      required
                      value={form.size}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0A1628]">Select size…</option>
                      {sizes.map((s) => (
                        <option key={s} value={s} className="bg-[#0A1628]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="timeline">
                      When do you need support? <span className="text-[#C9A84C]">*</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={form.timeline}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0A1628]">Select timeline…</option>
                      {timelines.map((t) => (
                        <option key={t} value={t} className="bg-[#0A1628]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service interest */}
                <div>
                  <label className={labelClass} htmlFor="service">
                    Service you&apos;re interested in <span className="text-[#C9A84C]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled className="bg-[#0A1628]">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0A1628]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass} htmlFor="message">
                    Anything else?{" "}
                    <span className="text-white/30 normal-case tracking-normal font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a bit more about what you need — role types, hours, specific challenges…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C9A84C] hover:bg-[#E4C87A] disabled:opacity-60 disabled:cursor-not-allowed text-[#0A1628] font-bold text-base rounded-xl transition-all duration-200 shadow-2xl shadow-[#C9A84C]/25 hover:shadow-[#C9A84C]/40 hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Request My Free Consultation
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                <p className="text-white/30 text-xs text-center">
                  We&apos;ll respond within 24 hours · Proposal within 48 hours · No obligation
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center"
            >
              {/* Success header */}
              <div className="mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 mb-6">
                  <CheckCircle size={32} className="text-[#C9A84C]" />
                </div>
                <h2
                  className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Request Received
                </h2>
                <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto">
                  Thanks, <span className="text-white/90 font-medium">{form.name}</span>! We&apos;ve received
                  your consultation request for{" "}
                  <span className="text-white/90 font-medium">{form.company}</span> and will be in
                  touch within 24 hours.
                </p>
              </div>

              {/* Calendly embed */}
              <div className="mt-8 text-left">
                <p className="text-white/45 text-sm text-center mb-6">
                  Want to lock in a time right now? Pick a slot below:
                </p>
                <CalendlyEmbed />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
