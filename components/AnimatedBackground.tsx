"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const gradientLayer = {
    y,
    backgroundImage:
      "radial-gradient(ellipse at 18% 18%, rgba(72, 124, 196, 0.24), transparent 38%), radial-gradient(ellipse at 82% 28%, rgba(125, 216, 255, 0.15), transparent 36%), radial-gradient(ellipse at 62% 76%, rgba(216, 189, 120, 0.11), transparent 34%)",
    backgroundSize: "150% 150%"
  };

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-12%] opacity-80"
        animate={{
          backgroundPosition: ["0% 0%", "58% 38%", "0% 0%"]
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        // Adjust the color stops here to change the global cinematic palette.
        style={gradientLayer}
      />
      <motion.div
        className="noise-overlay absolute inset-0 opacity-45"
        animate={{ opacity: [0.28, 0.46, 0.28] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.22]" viewBox="0 0 1440 980" preserveAspectRatio="none">
        <motion.path
          d="M40 720 C260 520 390 790 610 560 S980 330 1390 420"
          fill="none"
          stroke="url(#lineA)"
          strokeWidth="1"
          strokeDasharray="9 18"
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0 300 C230 160 420 270 660 190 S1030 20 1440 180"
          fill="none"
          stroke="url(#lineB)"
          strokeWidth="1"
          strokeDasharray="4 16"
          animate={{ strokeDashoffset: [0, 96] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M120 930 C350 740 550 870 780 680 S1090 530 1320 610"
          fill="none"
          stroke="url(#lineC)"
          strokeWidth="1"
          strokeDasharray="2 14"
          animate={{ strokeDashoffset: [0, -80] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="lineA" x1="0" x2="1">
            <stop stopColor="#7dd8ff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#7dd8ff" />
            <stop offset="1" stopColor="#d8bd78" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineB" x1="0" x2="1">
            <stop stopColor="#6ea8ff" stopOpacity="0" />
            <stop offset="0.55" stopColor="#6ea8ff" />
            <stop offset="1" stopColor="#7dd8ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineC" x1="0" x2="1">
            <stop stopColor="#d8bd78" stopOpacity="0" />
            <stop offset="0.5" stopColor="#d8bd78" />
            <stop offset="1" stopColor="#7dd8ff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,11,0.12),rgba(5,7,11,0.86)_82%,#05070b)]" />
    </div>
  );
}
