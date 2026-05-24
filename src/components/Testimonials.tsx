"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, FileText, GraduationCap, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery",
    description:
      "A 30-minute call to understand your operations, volume, preferred tools, and the agent profile that fits your business best. No forms, no decks — just a focused conversation.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposal & Matching",
    description:
      "A written proposal delivered within 48 hours. Agents are matched to your specific requirements — skills, timezone, and workflow compatibility confirmed before you commit.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Onboarding",
    description:
      "Five days of client-specific training before any agent goes live. Your tools, your SOPs, your quality standards — built into the team before day one.",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Live & Ongoing",
    description:
      "Weekly reporting on hours, tasks, and priorities. Monthly account review calls. QA scoring on every account. Flexible scaling as your needs evolve.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
            How We Work
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            From First Call to
            <span className="text-gold-gradient"> Live Operations</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            A structured four-step process designed to get your remote team
            trained, matched, and fully operational — without long wait times
            or vague timelines.
          </p>
        </motion.div>

        {/* Step Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={cardVariants}
                className="relative p-7 rounded-2xl border border-[#E2E8F0] bg-white hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative step number */}
                <span
                  className="absolute top-4 right-5 text-5xl font-bold text-[#C9A84C]/12 select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>

                <h3
                  className="text-lg font-bold text-[#0A1628] mb-2.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-center text-[#94A3B8] text-sm mt-10"
        >
          Most clients are fully onboarded and live within{" "}
          <span className="text-[#C9A84C] font-semibold">
            10 business days
          </span>{" "}
          of signing.
        </motion.p>
      </div>
    </section>
  );
}
