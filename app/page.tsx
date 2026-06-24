"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "@/lib/content";
import { About } from "@/components/About";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CaseStudies } from "@/components/CaseStudies";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Skills } from "@/components/Skills";
import { Values } from "@/components/Values";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] text-white">
      <AnimatedBackground />
      <motion.div
        className="fixed left-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#7dd8ff] via-[#6ea8ff] to-[#d8bd78]"
        style={{ scaleX }}
      />
      <Navbar items={content.navItems} />
      <Hero data={content.hero} />
      <SectionWrapper id="about" eyebrow="Profile" title="Clear thinking for complex incidents">
        <About data={content.about} />
      </SectionWrapper>
      <SectionWrapper id="experience" eyebrow="Experience" title="Investigation leadership across high-pressure environments">
        <ExperienceTimeline items={content.experience} />
      </SectionWrapper>
      <SectionWrapper id="skills" eyebrow="Capabilities" title="DFIR, cloud, identity, and client-ready delivery">
        <Skills groups={content.skills} />
      </SectionWrapper>
      <SectionWrapper id="work" eyebrow="Selected Work" title="Confidential case patterns, polished for public view">
        <CaseStudies studies={content.caseStudies} />
      </SectionWrapper>
      <SectionWrapper id="certifications" eyebrow="Credentials" title="Validated cybersecurity and forensic expertise">
        <Certifications items={content.certifications} />
      </SectionWrapper>
      <SectionWrapper id="education" eyebrow="Education" title="Technical foundation with cybersecurity specialization">
        <Education items={content.education} />
      </SectionWrapper>
      <SectionWrapper id="values" eyebrow="Working Style" title="Calm, evidence-led, and business-aware">
        <Values data={content.values} />
      </SectionWrapper>
      <Contact data={content.contact} />
    </main>
  );
}
