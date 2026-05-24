"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  ShieldCheck,
  Clock,
  Users,
  ClipboardCheck,
  CalendarCheck,
} from "lucide-react";

const commitments = [
  {
    icon: UserCheck,
    title: "Named Account Manager",
    description:
      "Every client is assigned a dedicated, named account manager who owns the relationship end-to-end. One person to call — always.",
  },
  {
    icon: ShieldCheck,
    title: "NDAs & Data Security",
    description:
      "Confidentiality agreements are signed before any engagement begins. Your data, workflows, and business information are protected as standard.",
  },
  {
    icon: Clock,
    title: "30-Day Exit Clause",
    description:
      "No lock-in. Every engagement includes a 30-day exit clause — we earn your business month by month, not through contractual obligation.",
  },
  {
    icon: Users,
    title: "Dedicated Agents Only",
    description:
      "Your agents work exclusively on your account. No shared pools, no divided attention — fully dedicated to your operations and standards.",
  },
  {
    icon: ClipboardCheck,
    title: "QA on Every Account",
    description:
      "Every account receives weekly quality assurance — work is sampled, scored, and reviewed to maintain consistent standards across your team.",
  },
  {
    icon: CalendarCheck,
    title: "Weekly Reports & Monthly Reviews",
    description:
      "You receive weekly reporting covering hours, tasks completed, and next-week priorities — plus a monthly account review call to assess and adjust.",
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
            How We Work With You
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our
            <span className="text-gold-gradient"> Commitments</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Every client engagement comes with these six operating commitments
            — not upsells, not add-ons. Standard for every account, from day
            one.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, i) => {
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
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
