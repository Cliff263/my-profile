"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type GlowColor = "cyan" | "purple" | "emerald";

interface GlowContextType {
  glowColor: GlowColor;
  setGlowColor: (color: GlowColor) => void;
  cycleGlowColor: () => void;
}

const GlowContext = createContext<GlowContextType | undefined>(undefined);

export function GlowProvider({ children }: { children: ReactNode }) {
  const [glowColor, setGlowColorState] = useState<GlowColor>("cyan");

  // Load saved color from localStorage on mount
  useEffect(() => {
    const savedColor = localStorage.getItem("glow-color") as GlowColor;
    if (savedColor && ["cyan", "purple", "emerald"].includes(savedColor)) {
      setGlowColorState(savedColor);
    }
  }, []);

  // Save color to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("glow-color", glowColor);
  }, [glowColor]);

  const setGlowColor = (color: GlowColor) => {
    setGlowColorState(color);
  };

  const cycleGlowColor = () => {
    const colors: GlowColor[] = ["cyan", "purple", "emerald"];
    const currentIndex = colors.indexOf(glowColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setGlowColorState(colors[nextIndex]);
  };

  return (
    <GlowContext.Provider value={{ glowColor, setGlowColor, cycleGlowColor }}>
      {children}
    </GlowContext.Provider>
  );
}

export function useGlow() {
  const context = useContext(GlowContext);
  if (context === undefined) {
    throw new Error("useGlow must be used within a GlowProvider");
  }
  return context;
}
