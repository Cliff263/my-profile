"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark" || theme === undefined;

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 glass-panel"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}


