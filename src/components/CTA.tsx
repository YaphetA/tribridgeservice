"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const points = [
  "No long-term contracts required",
  "Proposal delivered within 48 hours",
  "Dedicated account manager from day one",
  "30-day exit clause on every engagement",
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#0A1628] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C9A84C]/6 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold mb-7 border border-[#C9A84C]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            Free Consultation Available Now
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Scale Your
            <br />
            <span className="text-gold-gradient">Operations?</span>
          </h2>

          <p className="text-white/55 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join businesses across nine sectors that trust Tribridge to run
            their operations. Book a free 30-minute consultation — we&apos;ll
            have a written proposal to you within 48 hours.
          </p>

          {/* Checklist */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-white/65 text-sm">{point}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-10 py-4.5 bg-[#C9A84C] hover:bg-[#E4C87A] text-[#0A1628] font-bold text-base rounded-xl transition-all duration-200 shadow-2xl shadow-[#C9A84C]/30 hover:shadow-[#C9A84C]/50 hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-10 py-4.5 bg-white/8 hover:bg-white/12 text-white font-semibold text-base rounded-xl border border-white/15 hover:border-white/30 transition-all duration-200"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
