"use client";

import { motion } from "framer-motion";

type AboutData = {
  narrative: string;
  details: readonly string[];
  facts: readonly { label: string; value: string }[];
};

export function About({ data }: { data: AboutData }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-2xl leading-relaxed text-white/84 md:text-3xl">{data.narrative}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.details.map((detail) => (
            <div key={detail} className="border-l border-[#7dd8ff]/38 pl-4 text-sm leading-7 text-white/68">
              {detail}
            </div>
          ))}
        </div>
      </motion.div>
      <motion.aside
        className="glass-panel rounded-2xl p-6 md:p-8"
        initial={{ opacity: 0, x: 34 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75 }}
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#7dd8ff]/28 bg-white/7 font-editorial text-2xl text-white">
            YG
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/42">Profile</p>
            <p className="mt-1 text-xl font-semibold text-white">Quick facts</p>
          </div>
        </div>
        <dl className="grid gap-5">
          {data.facts.map((fact) => (
            <div key={fact.label} className="border-t border-white/10 pt-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8bd78]">{fact.label}</dt>
              <dd className="mt-2 break-words text-base leading-7 text-white/76">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </motion.aside>
    </div>
  );
}
