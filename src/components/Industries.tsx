"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Code2,
  Heart,
  Home,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    name: "E-Commerce & Retail",
    description:
      "Order management, returns, customer care, and marketplace support at scale.",
    color: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    icon: Code2,
    name: "SaaS & Technology",
    description:
      "Technical support, onboarding, and customer success for product-led growth.",
    color: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "HIPAA-compliant patient coordination, billing support, and admin workflows.",
    color: "from-rose-500/10 to-pink-500/5",
    border: "border-rose-200",
    iconColor: "text-rose-500",
  },
  {
    icon: Home,
    name: "Real Estate",
    description:
      "Lead qualification, appointment scheduling, and property listing management.",
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    description:
      "Shipment tracking, dispatch support, and operations coordination.",
    color: "from-purple-500/10 to-violet-500/5",
    border: "border-purple-200",
    iconColor: "text-purple-500",
  },
  {
    icon: UtensilsCrossed,
    name: "Hospitality",
    description:
      "Reservation handling, guest services, and concierge support around the clock.",
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
            Industries We Serve
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built for Your
            <span className="text-gold-gradient"> Industry</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            Deep domain expertise across six high-growth industries — so our
            teams hit the ground running from day one.
          </p>
        </motion.div>

        {/* Industry Cards */}
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
                  delay: i * 0.07,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className={`relative p-7 rounded-2xl bg-gradient-to-br ${industry.color} border ${industry.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm`}
                >
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
