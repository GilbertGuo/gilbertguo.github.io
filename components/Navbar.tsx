"use client";

import { motion } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

export function Navbar({ items }: { items: readonly NavItem[] }) {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#05070b]/64 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="text-sm font-semibold tracking-[0.22em] text-white/90">
          YIWEI GUO
        </a>
        <div className="hidden items-center gap-6 text-sm text-white/66 lg:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-[#7dd8ff]/50 hover:text-white hover:shadow-[0_0_30px_rgba(125,216,255,0.16)]"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
