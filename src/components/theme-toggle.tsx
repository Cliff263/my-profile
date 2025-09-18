"use client";

import { Palette } from "lucide-react";
import { useGlow } from "@/components/ui/glow-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { glowColor, cycleGlowColor } = useGlow();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const getGlowClass = () => {
    switch (glowColor) {
      case "cyan":
        return "glow-cyan";
      case "purple":
        return "glow-purple";
      case "emerald":
        return "glow-emerald";
      default:
        return "glow-cyan";
    }
  };

  return (
    <button
      aria-label="Cycle glow color"
      className={`inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 glass-panel ${getGlowClass()}`}
      onClick={cycleGlowColor}
      style={{ color: `var(--glow-color)` }}
    >
      <Palette className="h-5 w-5" />
    </button>
  );
}


