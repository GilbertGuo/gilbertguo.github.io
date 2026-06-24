"use client";

import { SkillCard, SkillGroup } from "@/components/SkillCard";

export function Skills({ groups }: { groups: readonly SkillGroup[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, index) => (
        <SkillCard key={group.title} group={group} index={index} />
      ))}
    </div>
  );
}
