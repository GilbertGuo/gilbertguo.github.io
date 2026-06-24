"use client";

import { motion } from "framer-motion";

export type CaseStudy = {
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
};

const rows = ["challenge", "approach", "outcome"] as const;

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.article
      className="glass-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7dd8ff]/36 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
    >
      <div className="mb-8 flex items-start justify-between gap-6">
        <h3 className="font-editorial text-3xl text-white">{study.title}</h3>
        <span className="rounded-full border border-[#d8bd78]/26 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#d8bd78]">
          0{index + 1}
        </span>
      </div>
      <div className="grid gap-5">
        {rows.map((row) => (
          <div key={row} className="border-t border-white/10 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7dd8ff]/80">{row}</p>
            <p className="mt-3 text-sm leading-7 text-white/66">{study[row]}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
