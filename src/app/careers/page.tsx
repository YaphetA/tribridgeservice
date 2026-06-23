"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  MapPin,
  Clock,
  ArrowUpRight,
  Mail,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Search,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobs = [
  {
    id: 1,
    title: "Customer Service Agent",
    type: "Full-Time",
    location: "Addis Ababa — On Site",
    locationType: "On Site",
    category: "Customer Support",
    subject: "Customer Service Agent Application — [Your Name]",
    description:
      "Represent our clients with professionalism and care. You will be assigned to one client, learn their business properly, and handle inbound and outbound customer contact via email, live chat, and phone.",
    requirements: [
      "Excellent written and spoken English",
      "1+ year in a customer-facing role",
      "Reliable high-speed internet and quiet workspace",
      "Strong computer literacy",
    ],
    tags: ["Customer Support", "EST / PST Overlap"],
  },
  {
    id: 2,
    title: "Appointment Setting & Outreach Specialist",
    type: "Full-Time",
    location: "Addis Ababa — On Site",
    locationType: "On Site",
    category: "Sales",
    subject: "Outreach Specialist Application — [Your Name]",
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
    location: "Addis Ababa — On Site",
    locationType: "On Site",
    category: "Administration",
    subject: "VA Application — [Your Name]",
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
    location: "Addis Ababa — On Site",
    locationType: "On Site",
    category: "Legal",
    subject: "Legal PA Application — [Your Name]",
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

const CATEGORIES = ["All", "Customer Support", "Sales", "Administration", "Legal"];
const LOCATIONS = ["All", "On Site"];

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
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return jobs.filter((job) => {
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory =
        activeCategory === "All" || job.category === activeCategory;
      const matchesLocation =
        activeLocation === "All" || job.locationType === activeLocation;
      return matchesQuery && matchesCategory && matchesLocation;
    });
  }, [query, activeCategory, activeLocation]);

  const hasFilters = query || activeCategory !== "All" || activeLocation !== "All";

  function clearFilters() {
    setQuery("");
    setActiveCategory("All");
    setActiveLocation("All");
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#071020] min-h-screen">
        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden">
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
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
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

            {/* Search + Filters */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mb-8 space-y-4"
            >
              {/* Search bar */}
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search roles…"
                  className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C]/50 focus:bg-white/7 transition-all"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Filter pills row */}
              <div className="flex flex-wrap gap-6">
                {/* Category filters */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-white/30 text-xs font-medium uppercase tracking-wider mr-1">
                    Role
                  </span>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                        activeCategory === cat
                          ? "bg-[#C9A84C] text-[#071020]"
                          : "bg-white/5 border border-white/10 text-white/50 hover:border-[#C9A84C]/30 hover:text-white/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Location filters */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-white/30 text-xs font-medium uppercase tracking-wider mr-1">
                    Location
                  </span>
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setActiveLocation(loc)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                        activeLocation === loc
                          ? "bg-[#C9A84C] text-[#071020]"
                          : "bg-white/5 border border-white/10 text-white/50 hover:border-[#C9A84C]/30 hover:text-white/80"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>

                {/* Clear all */}
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1.5 text-white/35 hover:text-white/60 text-xs transition-colors ml-auto"
                  >
                    <X size={12} />
                    Clear all
                  </button>
                )}
              </div>

              {/* Results count */}
              <p className="text-white/30 text-xs">
                {filtered.length === jobs.length
                  ? `Showing all ${jobs.length} positions`
                  : `${filtered.length} of ${jobs.length} positions match`}
              </p>
            </motion.div>

            {/* Job cards */}
            <div className="space-y-5 min-h-[200px]">
              <AnimatePresence mode="popLayout">
                {filtered.length > 0 ? (
                  filtered.map((job, i) => (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
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
                            href={`mailto:careers@tribridgeservices.com?subject=${encodeURIComponent(job.subject)}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] hover:bg-[#E4C87A] text-[#071020] text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/35 hover:-translate-y-px whitespace-nowrap"
                          >
                            Apply Now
                            <ArrowUpRight size={15} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/20 mb-4">
                      <Search size={22} />
                    </div>
                    <p className="text-white/40 text-sm mb-3">
                      No roles match your search.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="text-[#C9A84C] text-xs font-semibold hover:text-[#E4C87A] transition-colors"
                    >
                      Clear filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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
                Send your CV to our careers inbox. Use the subject line listed
                for each role and include your name. Only shortlisted candidates
                will be contacted — we aim to respond within 5 business days.
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
