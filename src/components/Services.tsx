"use client";

import { motion, type Variants } from "framer-motion";
import {
  UserCog,
  Headphones,
  Scale,
  Database,
  DollarSign,
  Users,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: UserCog,
    title: "Operations & Administration",
    description:
      "Virtual admin support, personal assistant services, executive and founder support, research and reporting, and HR admin — your operations backbone.",
    tags: ["Virtual Admin", "PA Services", "Exec Support", "HR Admin"],
  },
  {
    icon: Headphones,
    title: "Customer Contact",
    description:
      "Inbound support, outbound outreach, appointment setting, inquiry management, and email and live chat — every customer touchpoint covered.",
    tags: ["Inbound Support", "Outbound", "Appointment Setting", "Live Chat"],
  },
  {
    icon: Scale,
    title: "Legal & Compliance Support",
    description:
      "Legal document formatting, contract summaries, legal PA, paralegal admin, and DIFC/ADGM compliance administration for legal teams and firms.",
    tags: ["Legal Documents", "Contract Summaries", "Paralegal Admin", "Compliance"],
  },
  {
    icon: Database,
    title: "Back-Office & Data",
    description:
      "Data entry and processing, CRM management and cleanup, back-office operations, social media management, and email marketing operations.",
    tags: ["Data Entry", "CRM Mgmt", "Social Media", "Email Marketing"],
  },
  {
    icon: DollarSign,
    title: "Finance & Billing",
    description:
      "Invoice processing, payment follow-ups, accounts receivable support, and billing dispute resolution by trained finance specialists.",
    tags: ["Invoice Processing", "AR Support", "Payment Follow-ups", "Billing"],
  },
  {
    icon: Users,
    title: "Dedicated Remote Teams",
    description:
      "Full-time or part-time staff built around your workflows — custom SOPs, a dedicated team lead, weekly reporting, and multi-timezone coverage.",
    tags: ["Full-Time Staff", "Custom SOPs", "Team Lead", "Weekly Reporting"],
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
            Four practice areas plus finance support and dedicated team
            staffing — covering every operational function your business needs
            to grow.
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
          {services.map((service) => {
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
