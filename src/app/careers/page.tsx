"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Clock, ArrowUpRight, Mail, CheckCircle, Users, TrendingUp, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobs = [
  {
    id: 1,
    title: "Customer Service Agent",
    type: "Full-Time",
    location: "Addis Ababa — Remote or Office",
    salary: "ETB 12,000 – 16,000 / month",
    subject: "Customer Service Agent Application",
    description:
      "Represent our clients with professionalism and care. You will be assigned to one client, learn their business properly, and handle inbound and outbound customer contact via email, live chat, and phone.",
    requirements: [
      "Excellent written and spoken English",
      "1+ year in a customer-facing role",
      "Reliable high-speed internet and quiet workspace",
      "Strong computer literacy",
    ],
    tags: ["Customer Support", "EST / PST Overlap", "Immediate Start"],
  },
  {
    id: 2,
    title: "Appointment Setting & Outreach Specialist",
    type: "Full-Time",
    location: "Addis Ababa — Remote or Office",
    salary: "ETB 13,000 – 17,000 / month + bonus",
    subject: "Outreach Specialist Application",
    description:
      "Support North American clients' sales pipelines — reaching out to prospects, qualifying leads, and booking meetings that actually happen. Built for confident communicators who handle rejection without flinching.",
    requirements: [
      "Outstanding spoken and written English",
      "1+ year in sales, outreach, or telemarketing",
      "Professional phone manner for cold and warm calls",
      "Strong organisational skills under high volume",
    ],
    tags: ["Sales Support", "EST Overlap", "Performance Bonus"],
  },
  {
    id: 3,
    title: "Virtual Administrative Assistant",
    type: "Full-Time",
    location: "Addis Ababa — Remote",
    salary: "ETB 14,000 – 18,000 / month",
    subject: "VA Application",
    description:
      "Provide high-quality administrative support to a single assigned client — an executive, small business, or professional practice. You will be trusted with real access to their calendar, inbox, and documents.",
    requirements: [
      "Excellent written English with consistent grammar and tone",
      "Google Workspace or Microsoft 365 proficiency",
      "Outstanding attention to detail",
      "1+ year in an administrative or office coordination role",
    ],
    tags: ["Admin", "EST Overlap", "Executive Support"],
  },
  {
    id: 4,
    title: "Legal Support Assistant / Legal PA",
    type: "Full-Time",
    location: "Addis Ababa — Remote",
    salary: "ETB 16,000 – 22,000 / month",
    subject: "Legal PA Application",
    description:
      "Provide remote paralegal administration to law firms and in-house legal teams in Canada and the US. This specialist role demands legal background, exceptional English, and the discipline legal work requires.",
    requirements: [
      "Bachelor's in Law, Legal Studies, or paralegal training",
      "Exceptional written English — flawless grammar required",
      "Meticulous attention to detail — non-negotiable",
      "Discretion with confidential legal matters",
    ],
    tags: ["Legal", "EST Overlap", "Specialist Role"],
  },
];

const perks = [
  {
    icon: <Users size={20} />,
    title: "Dedicated Assignment",
    body: "No rotation, no shared queues. You are assigned to one client and build a genuine working relationship.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Clear Growth Path",
    body: "Weekly performance feedback and a structured development path toward senior and team lead roles.",
  },
  {
    icon: <Shield size={20} />,
    title: "Above-Market Pay",
    body: "Competitive salaries benchmarked above the Addis Ababa market rate, paid reliably every month.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Professional Onboarding",
    body: "Five-day client-specific training before you start — you are fully prepared before Day 1.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#071020] min-h-screen">
        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/8 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase">
                Now Hiring
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Build Your Career{" "}
              <span className="text-gold-gradient">at TriBridge</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Join our founding team in Addis Ababa. We place talented people
              with clients who value them — with above-market pay, real
              training, and a clear path to grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mt-6 text-white/40 text-sm"
            >
              <MapPin size={14} className="text-[#C9A84C]" />
              Addis Ababa, Ethiopia — Remote &amp; Office Roles Available
            </motion.div>
          </div>
        </section>

        {/* Perks */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-[#C9A84C]/25 hover:bg-[#C9A84C]/4 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/12 flex items-center justify-center text-[#C9A84C] mb-4">
                    {perk.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {perk.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t border-white/8" />
        </div>

        {/* Open Positions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">
                Open Positions
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {jobs.length} roles available right now
              </h2>
            </motion.div>

            <div className="space-y-5">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group p-7 rounded-2xl border border-white/8 bg-white/2 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/3 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left: info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-[11px] font-medium tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#E4C87A] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-2xl">
                        {job.description}
                      </p>

                      {/* Meta row */}
                      <div className="flex flex-wrap gap-5 text-sm text-white/40 mb-5">
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-[#C9A84C]/70" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#C9A84C]/70" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#C9A84C]/70 font-semibold text-xs">ETB</span>
                          {job.salary.replace("ETB ", "")}
                        </span>
                      </div>

                      {/* Requirements */}
                      <ul className="space-y-1.5">
                        {job.requirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-2 text-white/45 text-sm"
                          >
                            <CheckCircle
                              size={13}
                              className="text-[#C9A84C]/60 mt-0.5 flex-shrink-0"
                            />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: CTA */}
                    <div className="lg:flex-shrink-0 lg:self-center">
                      <a
                        href={`mailto:careers@tribridgeservices.com?subject=${encodeURIComponent(job.subject + " — [Your Name]")}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] hover:bg-[#E4C87A] text-[#071020] text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/35 hover:-translate-y-px whitespace-nowrap"
                      >
                        Apply Now
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-10 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] mx-auto mb-5">
                <Mail size={22} />
              </div>
              <h2
                className="text-2xl lg:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                How to Apply
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto mb-7">
                Send your CV and a short cover note to our careers inbox. Use
                the subject line listed for each role and include your name.
                Only shortlisted candidates will be contacted — we aim to
                respond within 5 business days.
              </p>
              <a
                href="mailto:careers@tribridgeservices.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E4C87A] text-[#071020] text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#C9A84C]/25 hover:-translate-y-px"
              >
                careers@tribridgeservices.com
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
