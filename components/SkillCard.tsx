"use client";

import { motion } from "framer-motion";

export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.article
      className="glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d8bd78]/34"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.04 }}
    >
      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span key={item} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-xs leading-none text-white/70">
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
