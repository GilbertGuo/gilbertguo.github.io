"use client";

import { motion } from "framer-motion";

type ValuesData = {
  text: string;
  items: readonly string[];
};

export function Values({ data }: { data: ValuesData }) {
  return (
    <div className="glass-panel grid gap-10 rounded-2xl p-6 md:p-10 lg:grid-cols-[0.92fr_1.08fr]">
      <motion.p
        className="font-editorial text-3xl leading-tight text-white md:text-5xl"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7 }}
      >
        {data.text}
      </motion.p>
      <div className="grid gap-4 sm:grid-cols-2">
        {data.items.map((item, index) => (
          <motion.div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-white/72"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.58, delay: index * 0.05 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
