"use client";

import { useMemo, useRef, useState } from "react";

export function SkillsMarquee({
  skills,
}: {
  skills: { name: string; icon?: React.ReactNode }[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState(false);

  const repeated = useMemo(() => [...skills, ...skills, ...skills], [skills]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden border border-black/10 dark:border-white/10 rounded-lg bg-black/[0.02] dark:bg-white/[0.03]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={
          "flex whitespace-nowrap gap-6 py-4 will-change-transform [animation-duration:18s] " +
          (isHover ? "animate-none" : "animate-marquee-rtl")
        }
      >
        {repeated.map((s, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/70 dark:bg-black/30 backdrop-blur text-sm border border-black/10 dark:border-white/10"
          >
            {s.icon}
            {s.name}
          </span>
        ))}
      </div>
      {/* pause hint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
    </div>
  );
}


