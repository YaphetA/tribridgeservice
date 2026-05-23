"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tribridge transformed our customer support overnight. We went from a 14-hour response time to under 2 hours — and our CSAT scores jumped from 67% to 91% in the first quarter.",
    name: "Sarah Chen",
    title: "VP of Customer Experience",
    company: "NovaTech SaaS",
    initials: "SC",
    color: "from-blue-600 to-blue-800",
  },
  {
    quote:
      "We needed to scale our e-commerce support team for the holiday season in less than a week. Tribridge delivered 40 trained agents in 48 hours. Absolutely remarkable execution.",
    name: "Marcus Thompson",
    title: "Director of Operations",
    company: "Elevate Commerce",
    initials: "MT",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    quote:
      "The flexibility of their pricing model and the quality of their agents is unmatched. We've tried three other BPO providers — Tribridge is in a different league entirely.",
    name: "Priya Kapoor",
    title: "Chief Operating Officer",
    company: "MedSchedule Pro",
    initials: "PK",
    color: "from-purple-600 to-purple-800",
  },
];

const starRating = (
  <div className="flex gap-1 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-[#C9A84C]"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F5F9] text-[#C9A84C] text-sm font-semibold mb-5 border border-[#C9A84C]/20">
            Client Testimonials
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trusted by Industry
            <span className="text-gold-gradient"> Leaders</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it — hear directly from the companies
            we&apos;ve helped transform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative flex flex-col p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                <Quote size={18} className="text-[#C9A84C]" />
              </div>

              {/* Stars */}
              {starRating}

              {/* Quote text */}
              <p className="text-[#334155] text-sm leading-relaxed flex-1 mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-[#F1F5F9] pt-6">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[#0A1628] font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-[#64748B] text-xs">{t.title}</div>
                    <div className="text-[#C9A84C] text-xs font-medium">
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
