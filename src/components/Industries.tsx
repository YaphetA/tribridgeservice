"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Zap } from "lucide-react";

const industries = [
  "Roofing & HVAC", "Law Firms", "Real Estate Agencies", "E-Commerce",
  "SaaS Companies", "Recruitment Firms", "Healthcare Practices",
  "Construction Companies", "Accounting Firms", "NGOs & Charities",
  "Property Management", "Restaurants & Hospitality", "Marketing Agencies",
  "Logistics Companies", "Financial Services", "Tech Startups",
  "Insurance Brokers", "Consulting Firms", "Retail Businesses",
  "IT Support Companies", "Education Providers", "Event Companies",
  "Media & Publishing", "Home Services", "Travel Agencies",
  "Wealth Management", "Staffing Agencies", "Government Contractors",
  "Architecture Firms", "Engineering Companies",
];

const tiers = [
  {
    icon: Zap,
    label: "Small Business",
    range: "1–10 people",
    desc: "Your first dedicated hire — without the overhead of a full-time headcount.",
  },
  {
    icon: Briefcase,
    label: "Growing SME",
    range: "11–250 people",
    desc: "Scale your operations team fast, without slowing down your core business.",
  },
  {
    icon: Building2,
    label: "Enterprise Teams",
    range: "250+ people",
    desc: "Custom-built remote divisions with dedicated leads, SOPs, and multi-timezone coverage.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#C9A84C] text-sm font-semibold mb-5 border border-[#C9A84C]/20 shadow-sm">
            Open to All Businesses
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Any Business.{" "}
            <span className="text-gold-gradient">Any Size.</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;ve supported businesses across every industry — from solo
            operators and local trades to enterprise teams running global
            operations. If you need skilled, dedicated remote staff, we have
            the right people for you.
          </p>
        </motion.div>

        {/* Industry tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2.5 mb-16"
        >
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.025, duration: 0.4, ease: "easeOut" }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-[#E2E8F0] text-[#475569] hover:border-[#C9A84C]/40 hover:text-[#0A1628] hover:bg-[#FDFAF4] transition-all duration-200 cursor-default"
            >
              {industry}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: industries.length * 0.025, duration: 0.4 }}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#9B7A30]"
          >
            + many more
          </motion.span>
        </motion.div>

        {/* Size tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#C9A84C]/30 hover:shadow-lg hover:shadow-[#C9A84C]/8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F1F5F9] group-hover:bg-[#C9A84C]/10 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-[#64748B] group-hover:text-[#C9A84C] transition-colors duration-300"
                  />
                </div>
                <h3
                  className="text-base font-bold text-[#0A1628] mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {tier.label}
                </h3>
                <p className="text-[#C9A84C] text-xs font-semibold mb-3">
                  {tier.range}
                </p>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {tier.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
