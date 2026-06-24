"use client";

import { motion } from "framer-motion";

export function Certifications({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item}
          className="glass-panel relative min-h-44 overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d8bd78]/42 hover:shadow-[0_0_48px_rgba(216,189,120,0.12)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.58, delay: index * 0.06 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd78]/70 to-transparent" />
          <p className="text-xs uppercase tracking-[0.26em] text-white/42">Certification</p>
          <h3 className="mt-8 text-xl font-semibold leading-snug text-white">{item}</h3>
        </motion.div>
      ))}
    </div>
  );
}
