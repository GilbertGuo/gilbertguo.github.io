"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionWrapper({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 max-w-4xl md:mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#7dd8ff]/80">{eyebrow}</p>
          <h2 className="font-editorial text-4xl leading-tight text-white md:text-6xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
