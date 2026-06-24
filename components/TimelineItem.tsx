"use client";

import { motion } from "framer-motion";

export type TimelineItemData = {
  company: string;
  role: string;
  dates: string;
  description: string;
  points: readonly string[];
};

export function TimelineItem({ item, index }: { item: TimelineItemData; index: number }) {
  const isRight = index % 2 === 1;

  return (
    <motion.article
      className={`relative grid gap-5 md:grid-cols-[2rem_1fr] lg:grid-cols-2 ${isRight ? "lg:[&>div]:col-start-2" : ""}`}
      initial={{ opacity: 0, y: 36, x: isRight ? 24 : -24 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="absolute left-[0.68rem] top-8 hidden h-3 w-3 rounded-full border border-[#7dd8ff] bg-[#07111f] shadow-[0_0_28px_rgba(125,216,255,0.55)] md:block lg:left-1/2 lg:-ml-1.5" />
      <div className="glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7dd8ff]/34 md:p-8">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#d8bd78]">{item.company}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
          </div>
          <p className="shrink-0 rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/58">
            {item.dates}
          </p>
        </div>
        <p className="mt-6 text-base leading-8 text-white/72">{item.description}</p>
        <ul className="mt-6 grid gap-3">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-7 text-white/66">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7dd8ff]/80" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
