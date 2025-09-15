"use client";

import { useEffect, useRef, useState } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function RandomText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState<string>("");
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const totalDurationMs = 1000;
    const scrambleDurationMs = 600;

    const animate = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;

      if (elapsed < scrambleDurationMs) {
        const progress = elapsed / scrambleDurationMs;
        const charsToReveal = Math.floor(progress * text.length);
        const scrambled = text
          .split("")
          .map((ch, idx) => (idx < charsToReveal ? ch : ALPHABET[Math.floor(Math.random() * ALPHABET.length)]))
          .join("");
        setDisplay(scrambled);
        frameRef.current = requestAnimationFrame(animate);
      } else if (elapsed < totalDurationMs) {
        setDisplay(text);
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      startRef.current = null;
    };
  }, [text]);

  return <span className={className}>{display}</span>;
}


