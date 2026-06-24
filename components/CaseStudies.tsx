"use client";

import { CaseStudyCard, CaseStudy } from "@/components/CaseStudyCard";

export function CaseStudies({ studies }: { studies: readonly CaseStudy[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {studies.map((study, index) => (
        <CaseStudyCard key={study.title} study={study} index={index} />
      ))}
    </div>
  );
}
