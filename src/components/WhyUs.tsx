"use client";

import { motion } from "framer-motion";
import {
  Zap,
  DollarSign,
  Globe2,
  UserCheck,
  Scale,
  ClipboardCheck,
} from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "48-Hour Deployment",
    description:
      "From contract to live operations in two business days. No lengthy onboarding — just results.",
    metric: "2x faster",
    metricLabel: "than industry average",
  },
  {
    icon: DollarSign,
    title: "Flexible Pricing",
    description:
      "Pay for what you use — hourly, monthly, or project-based. No hidden fees, no long-term lock-ins.",
    metric: "60% cost savings",
    metricLabel: "vs. in-house hiring",
  },
  {
    icon: Globe2,
    title: "Global Talent Pool",
    description:
      "Access 10,000+ vetted professionals across 12 countries — multilingual, timezone-aligned, and ready.",
    metric: "12+ countries",
    metricLabel: "talent network",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Managers",
    description:
      "Every client gets a named account manager who knows your business and is reachable when you need them.",
    metric: "< 2hr",
    metricLabel: "average response time",
  },
  {
    icon: Scale,
    title: "Instant Scalability",
    description:
      "Scale your team up or down within 24 hours based on demand — no hiring delays, no severance costs.",
    metric: "24hrs",
    metricLabel: "to scale up or down",
  },
  {
    icon: ClipboardCheck,
    title: "Vetted & Trained Talent",
    description:
      "Multi-stage screening, domain-specific training, and ongoing quality assurance on every engagement.",
    metric: "99.2%",
    metricLabel: "client retention rate",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-28 bg-[#0A1628] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1E3A5F]/60 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold mb-5 border border-[#C9A84C]/20">
            Why Tribridge
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Tribridge
            <span className="text-gold-gradient"> Difference</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just fill seats — we build high-performance extensions
            of your team that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="group p-7 rounded-2xl border border-white/8 hover:border-[#C9A84C]/30 bg-white/3 hover:bg-white/6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                  <Icon
                    size={20}
                    className="text-[#C9A84C] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3
                  className="text-white font-bold text-base mb-2.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Metric pill */}
                <div className="flex items-baseline gap-2">
                  <span className="text-[#C9A84C] font-bold text-lg">
                    {item.metric}
                  </span>
                  <span className="text-white/35 text-xs">
                    {item.metricLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
