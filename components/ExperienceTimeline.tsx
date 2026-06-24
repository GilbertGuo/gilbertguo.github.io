"use client";

import { TimelineItem, TimelineItemData } from "@/components/TimelineItem";

export function ExperienceTimeline({ items }: { items: readonly TimelineItemData[] }) {
  return (
    <div className="relative">
      <div className="timeline-line absolute left-4 top-0 hidden h-full w-px md:block lg:left-1/2" />
      <div className="grid gap-8">
        {items.map((item, index) => (
          <TimelineItem key={`${item.company}-${item.dates}`} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
