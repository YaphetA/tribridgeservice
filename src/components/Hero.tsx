"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "50+", label: "Businesses Served" },
  { value: "6", label: "Core Service Lines" },
  { value: "40%", label: "Avg. Cost Savings" },
  { value: "10 days", label: "To Full Onboarding" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A1628]">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F3C] to-[#0A1628]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#1E3A5F]/60 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-4xl">
          {/* Location badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/8 mb-8"
          >
            <span className="text-[#E4C87A] text-sm font-medium tracking-wide">
              Addis Ababa, Ethiopia · Serving Clients Globally
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Smart{" "}
            <span className="text-gold-gradient">Outsourcing.</span>
            <br />
            Real Results.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/60 text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl"
          >
            Scale your business with expertly trained, dedicated remote teams
            and streamlined outsourced operations —{" "}
            <span className="text-white/90 font-medium">
              proposal within 48 hours
            </span>
            , full onboarding in{" "}
            <span className="text-white/90 font-medium">10 business days</span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C9A84C] hover:bg-[#E4C87A] text-[#0A1628] font-semibold text-base rounded-xl transition-all duration-200 shadow-2xl shadow-[#C9A84C]/25 hover:shadow-[#C9A84C]/40 hover:-translate-y-0.5"
            >
              Book a Free Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/8 hover:bg-white/12 text-white font-semibold text-base rounded-xl border border-white/15 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              <Play size={16} className="fill-white" />
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 border-t border-white/8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center py-8 px-4">
                <span
                  className="text-3xl lg:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </span>
                <span className="text-white/45 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
