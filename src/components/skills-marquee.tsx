"use client";

import { useMemo, useRef, useState } from "react";
// Icons are passed as props from the parent component

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
      className="relative w-full overflow-hidden border border-black/10 dark:border-white/10 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] glass-panel"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={
          "flex whitespace-nowrap gap-8 py-8 will-change-transform [animation-duration:45s] " +
          (isHover ? "animate-none" : "animate-marquee-rtl")
        }
      >
        {repeated.map((s, idx) => (
          <span
            key={`${s.name}-${idx}`}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/80 dark:bg-black/40 backdrop-blur text-base font-medium border border-black/10 dark:border-white/10 glow-card hover:border-white/30 hover:bg-white/90 dark:hover:bg-black/50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {s.icon}
            {s.name}
          </span>
        ))}
      </div>
      {/* Enhanced pause hint with gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  );
}


