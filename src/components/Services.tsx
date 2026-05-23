"use client";

import { motion, type Variants } from "framer-motion";
import {
  Headphones,
  Monitor,
  FileText,
  TrendingUp,
  DollarSign,
  Users,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Multichannel assistance across calls, live chat, email, and social media — 24/7 coverage with human-first interactions.",
    tags: ["24/7 Coverage", "Omnichannel", "CSAT Focused"],
  },
  {
    icon: Monitor,
    title: "IT Helpdesk",
    description:
      "Tier 1–2 technical support, device troubleshooting, and escalation management by certified IT professionals.",
    tags: ["Tier 1–2", "Device Support", "SLA Guaranteed"],
  },
  {
    icon: FileText,
    title: "Back Office & Admin",
    description:
      "Data processing, CRM management, document handling, and administrative workflows — accurate and efficient.",
    tags: ["CRM Mgmt", "Data Entry", "Document Ops"],
  },
  {
    icon: TrendingUp,
    title: "Sales & Lead Generation",
    description:
      "Outbound outreach, appointment scheduling, and pipeline management to accelerate your revenue growth.",
    tags: ["Outbound", "Pipeline Mgmt", "Appointment Setting"],
  },
  {
    icon: DollarSign,
    title: "Finance & Billing",
    description:
      "Invoice processing, accounts receivable, reconciliation, and financial data management by trained specialists.",
    tags: ["AR/AP", "Invoice Ops", "Reconciliation"],
  },
  {
    icon: Users,
    title: "Dedicated Remote Teams",
    description:
      "Custom full-time or part-time staffing tailored to your business — fully managed, vetted, and performance-tracked.",
    tags: ["Full-Time", "Fully Managed", "Custom Teams"],
  },
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

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
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
            Our Services
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Everything Your Business
            <br />
            <span className="text-gold-gradient">Needs to Scale</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            From frontline customer interactions to back-office operations, our
            expert teams integrate seamlessly with your workflow.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative p-7 rounded-2xl border border-[#E2E8F0] hover:border-[#C9A84C]/40 bg-white hover:bg-[#FDFAF4] transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-[#C9A84C]/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] group-hover:bg-[#C9A84C]/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#64748B] group-hover:text-[#C9A84C] transition-colors duration-300"
                  />
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                  <ArrowUpRight size={18} className="text-[#C9A84C]" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-[#0A1628] mb-2.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#F1F5F9] text-[#475569] group-hover:bg-[#C9A84C]/10 group-hover:text-[#9B7A30] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
