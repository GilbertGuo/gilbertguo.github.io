"use client";

import { motion } from "framer-motion";

type EducationItem = {
  school: string;
  degree: string;
  detail?: string;
  dates: string;
  location: string;
};

export function Education({ items }: { items: readonly EducationItem[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item, index) => (
        <motion.article
          key={item.school}
          className="glass-panel rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, delay: index * 0.08 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#d8bd78]">{item.school}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{item.degree}</h3>
              {item.detail ? <p className="mt-3 text-sm leading-7 text-white/62">{item.detail}</p> : null}
            </div>
            <p className="shrink-0 rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/58">
              {item.dates}
            </p>
          </div>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[#7dd8ff]/76">{item.location}</p>
        </motion.article>
      ))}
    </div>
  );
}
