"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Global Clients", sublabel: "across 6 continents" },
  { value: 10000, suffix: "+", label: "Agents Deployed", sublabel: "since 2018" },
  { value: 99.2, suffix: "%", label: "Client Retention", sublabel: "12-month rolling average", decimal: true },
  { value: 48, suffix: "hr", label: "Deployment Time", sublabel: "from contract to live" },
];

function AnimatedCounter({
  value,
  suffix,
  decimal,
}: {
  value: number;
  suffix: string;
  decimal?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(start + (value - start) * eased);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  const formatted = decimal
    ? displayed.toFixed(1)
    : Math.floor(displayed).toLocaleString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-[#C9A84C] via-[#D4B868] to-[#C9A84C] relative overflow-hidden"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/20 via-transparent to-[#0A1628]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#0A1628] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Results That Speak for Themselves
          </h2>
          <p className="text-[#0A1628]/65 text-base">
            Six years of delivering measurable outcomes for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div
                className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-1.5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimal={stat.decimal}
                />
              </div>
              <div className="text-[#0A1628] font-semibold text-base mb-1">
                {stat.label}
              </div>
              <div className="text-[#0A1628]/55 text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
