"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

// Inline SVG social icons (lucide-react doesn't include LinkedIn/X in this version)
function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.733-8.835L1.254 2.25H8.08l4.258 5.622 5.906-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const services = [
  "Customer Support",
  "IT Helpdesk",
  "Back Office & Admin",
  "Sales & Lead Generation",
  "Finance & Billing",
  "Dedicated Remote Teams",
];

const industries = [
  "E-Commerce & Retail",
  "SaaS & Technology",
  "Healthcare",
  "Real Estate",
  "Logistics",
  "Hospitality",
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Tribridge", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071020] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#9B7A30] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">
                Tribridge
              </span>
            </a>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Smart Outsourcing. Real Results. Helping businesses worldwide scale
              with expert remote teams since 2018.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="mailto:hello@tribridge.io"
                className="flex items-center gap-2.5 text-white/45 hover:text-white/80 text-sm transition-colors"
              >
                <Mail size={14} className="text-[#C9A84C]" />
                hello@tribridge.io
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2.5 text-white/45 hover:text-white/80 text-sm transition-colors"
              >
                <Phone size={14} className="text-[#C9A84C]" />
                +1 (800) 555-1234
              </a>
              <div className="flex items-center gap-2.5 text-white/45 text-sm">
                <MapPin size={14} className="text-[#C9A84C] flex-shrink-0" />
                New York, NY · Manila · London
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#C9A84C]/15 flex items-center justify-center transition-colors text-white/50 hover:text-[#C9A84C]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={15} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#C9A84C]/15 flex items-center justify-center transition-colors text-white/50 hover:text-[#C9A84C]"
                aria-label="X (Twitter)"
              >
                <XIcon size={15} />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/45 hover:text-white/80 text-sm transition-colors hover-underline"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry}>
                  <a
                    href="#industries"
                    className="text-white/45 hover:text-white/80 text-sm transition-colors hover-underline"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/45 hover:text-white/80 text-sm transition-colors hover-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA card */}
            <div className="p-5 rounded-xl border border-[#C9A84C]/20 bg-[#C9A84C]/5">
              <p className="text-white/70 text-xs leading-relaxed mb-3">
                Ready to start? Get a free consultation and deployment plan.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold hover:text-[#E4C87A] transition-colors"
              >
                Book Consultation
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Tribridge Partners. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
