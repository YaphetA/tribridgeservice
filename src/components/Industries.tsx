"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Globe2,
  Home,
  ShoppingBag,
  Building2,
  Briefcase,
  Calculator,
  Heart,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  {
    icon: Scale,
    name: "Law Firms & Legal Teams",
    description:
      "Legal admin, document formatting, paralegal support, and compliance administration for law firms and in-house legal teams.",
    color: "from-slate-500/10 to-slate-400/5",
    border: "border-slate-200",
    iconColor: "text-slate-600",
  },
  {
    icon: Globe2,
    name: "NGOs & Development Organisations",
    description:
      "Administrative support, reporting, logistics coordination, and in-country project admin for international NGOs and development agencies.",
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: Home,
    name: "Real Estate & Property Management",
    description:
      "Lead management, appointment scheduling, CRM updates, and administrative support for property teams.",
    color: "from-amber-500/10 to-yellow-500/5",
    border: "border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce & SaaS Companies",
    description:
      "Customer support, order management, CRM operations, and back-office functions for digital-first businesses.",
    color: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    icon: Building2,
    name: "Corporations with Africa Operations",
    description:
      "In-country support, entity setup, compliance, government liaison, and expat logistics for corporations operating across Africa.",
    color: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    icon: Briefcase,
    name: "Executives & Private Clients",
    description:
      "Personal assistant services, diary management, research, travel coordination, and confidential admin for executives and founders.",
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-200",
    iconColor: "text-violet-500",
  },
  {
    icon: Calculator,
    name: "Accounting & Professional Services",
    description:
      "Finance admin, billing support, invoice processing, and back-office operations for accounting firms and professional service providers.",
    color: "from-cyan-500/10 to-sky-500/5",
    border: "border-cyan-200",
    iconColor: "text-cyan-600",
  },
  {
    icon: Heart,
    name: "Healthcare & Wellness Practices",
    description:
      "Patient coordination, scheduling, admin workflows, and billing support for healthcare providers and wellness businesses.",
    color: "from-rose-500/10 to-pink-500/5",
    border: "border-rose-200",
    iconColor: "text-rose-500",
  },
  {
    icon: UtensilsCrossed,
    name: "Hospitality & Travel Companies",
    description:
      "Reservation handling, guest services, vendor coordination, and admin support for hotels, travel agencies, and hospitality operators.",
    color: "from-yellow-500/10 to-amber-500/5",
    border: "border-yellow-200",
    iconColor: "text-yellow-600",
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
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#C9A84C] text-sm font-semibold mb-5 border border-[#C9A84C]/20 shadow-sm">
            Who We Serve
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Who We
            <span className="text-gold-gradient"> Serve</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            We work with organisations across nine sectors — from law firms and
            NGOs to e-commerce brands and corporations with in-country Africa
            operations.
          </p>
        </motion.div>

        {/* Industry Cards — 3-column grid, 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className={`relative p-7 rounded-2xl bg-gradient-to-br ${industry.color} border ${industry.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  <Icon size={20} className={industry.iconColor} />
                </div>
                <h3
                  className="text-base font-bold text-[#0A1628] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {industry.name}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
