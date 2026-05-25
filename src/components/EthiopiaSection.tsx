"use client";

import { motion, type Variants } from "framer-motion";
import {
  FileCheck,
  Building2,
  ShieldCheck,
  MapPin,
  ClipboardList,
  Handshake,
} from "lucide-react";

const ethiopiaServices = [
  {
    icon: FileCheck,
    title: "Immigration & Work Permits",
    description:
      "Business visas, work permits, residency paperwork, and government liaison for expatriate staff and visiting teams.",
  },
  {
    icon: Building2,
    title: "Entity & Banking Setup",
    description:
      "Company registration, corporate bank account opening, NBE compliance guidance, and foreign exchange navigation.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Licensing",
    description:
      "Investment licenses, tax registration, sector-specific permits, and regulatory filings with Ethiopian authorities.",
  },
  {
    icon: MapPin,
    title: "Expat Arrival & Logistics",
    description:
      "Airport coordination, housing search support, Addis Ababa orientation, and emergency contact setup for incoming teams.",
  },
  {
    icon: ClipboardList,
    title: "Project Administration",
    description:
      "Day-to-day admin, logistics coordination, scheduling, and reporting support for in-country project teams.",
  },
  {
    icon: Handshake,
    title: "Government & Supplier Liaison",
    description:
      "Local government interface, supplier negotiations, and in-country representation on behalf of your organisation.",
  },
];

const targetOrgs = [
  "International NGOs",
  "Development Agencies",
  "Construction Firms",
  "Telecoms Companies",
  "Corporations Establishing Offices",
  "Foreign Investors",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function EthiopiaSection() {
  return (
    <section id="ethiopia" className="py-28 bg-[#1C1208] relative overflow-hidden">
      {/* Background warm glows */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#D4622A]/8 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#D4A017]/6 blur-[120px]" />

      {/* Subtle terracotta grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,98,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,98,42,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-16"
        >
          {/* Left: badge + headline + description */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#D4622A]/40 bg-[#D4622A]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4622A]" />
              <span className="text-[#E8845A] text-sm font-semibold tracking-widest uppercase">
                Specialist Division
              </span>
            </span>

            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ethiopia:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #D4622A 0%, #F5A623 50%, #D4622A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                In-Country Support
              </span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              A dedicated specialist service — separate from our general BPO
              offering — for international organisations launching projects,
              establishing offices, or operating on the ground in Ethiopia. We
              provide the local expertise and government access that external
              teams cannot replicate remotely.
            </p>
          </div>

          {/* Right: target organisation pills */}
          <div className="flex-shrink-0 lg:pt-2">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
              For Organisations Including
            </p>
            <div className="flex flex-wrap gap-2 max-w-xs">
              {targetOrgs.map((org) => (
                <span
                  key={org}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border border-[#D4622A]/30 bg-[#D4622A]/8 text-[#E8845A]"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 6 Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ethiopiaServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group p-7 rounded-2xl border border-white/8 hover:border-[#D4622A]/40 bg-white/3 hover:bg-white/6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-[#D4622A]/15 flex items-center justify-center mb-5">
                  <Icon
                    size={20}
                    className="text-[#E8845A] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3
                  className="text-white font-bold text-base mb-2.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
