"use client";

import { motion } from "framer-motion";

type ContactData = {
  headline: string;
  text: string;
  email: string;
  location: string;
  portfolio: string;
};

export function Contact({ data }: { data: ContactData }) {
  const portfolioHref = `https://${data.portfolio}`;

  return (
    <section id="contact" className="relative z-10 flex min-h-screen items-center px-5 py-24 md:px-8">
      <motion.div
        className="mx-auto w-full max-w-7xl"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass-panel overflow-hidden rounded-[2rem] p-7 md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#7dd8ff]/80">Contact</p>
              <h2 className="font-editorial text-6xl leading-none text-white md:text-8xl">{data.headline}</h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/68">{data.text}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${data.email}`}
                  className="primary-cta cyan-glow rounded-full bg-white px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5"
                >
                  Email Me
                </a>
                <a
                  href={portfolioHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/18 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:border-[#d8bd78]/60 hover:bg-white/[0.08]"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                ["Email", data.email],
                ["Location", data.location],
                ["Portfolio", data.portfolio]
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d8bd78]">{label}</p>
                  <p className="mt-3 break-words text-base text-white/76">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
