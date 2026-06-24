"use client";

import { motion, useScroll, useTransform } from "framer-motion";

type HeroData = {
  name: string;
  role: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function Hero({ data }: { data: HeroData }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0.35]);

  return (
    <section id="top" className="relative z-10 flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 md:px-8">
      <motion.div
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#05070b] to-transparent"
        style={{ opacity }}
      />
      <motion.div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#d8bd78]">
            Toronto-based DFIR and cybersecurity consulting
          </p>
          <h1 className="font-editorial text-[clamp(4rem,12vw,11rem)] leading-[0.84] text-white">
            {data.name}
          </h1>
          <p className="mt-8 max-w-4xl text-xl font-medium leading-relaxed text-[#dce8f5] md:text-2xl">{data.role}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/66 md:text-lg">{data.intro}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={data.primaryCta.href}
              className="primary-cta cyan-glow rounded-full bg-white px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(125,216,255,0.28)]"
            >
              {data.primaryCta.label}
            </a>
            <a
              href={data.secondaryCta.href}
              className="rounded-full border border-white/18 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:border-[#d8bd78]/60 hover:bg-white/[0.08]"
            >
              {data.secondaryCta.label}
            </a>
          </div>
        </motion.div>
        <motion.div
          className="glass-panel relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden rounded-[2rem] p-8"
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(125,216,255,0.22),transparent_34%),radial-gradient(circle_at_70%_78%,rgba(216,189,120,0.16),transparent_35%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/50">
              <span>Evidence</span>
              <span>Response</span>
            </div>
            <div className="grid gap-3">
              {["Acquire", "Correlate", "Scope", "Report"].map((label, index) => (
                <motion.div
                  key={label}
                  className="flex items-center justify-between border-b border-white/12 py-4 text-sm text-white/76"
                  animate={{ opacity: [0.52, 1, 0.52] }}
                  transition={{ duration: 5, repeat: Infinity, delay: index * 0.45, ease: "easeInOut" }}
                >
                  <span>{label}</span>
                  <span className="text-[#7dd8ff]">0{index + 1}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-right">
              <p className="font-editorial text-5xl text-white">DFIR</p>
              <p className="mt-2 text-sm uppercase tracking-[0.26em] text-white/48">Calm under pressure</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
