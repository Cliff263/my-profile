"use client";

import { useEffect, useRef, useState } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function RandomText({
  text,
  className,
  totalDurationMs = 1000,
  scrambleDurationMs = 600,
  onDone,
}: {
  text: string;
  className?: string;
  totalDurationMs?: number;
  scrambleDurationMs?: number;
  onDone?: () => void;
}) {
  const [display, setDisplay] = useState<string>("");
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {

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
        if (onDone) onDone();
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      startRef.current = null;
    };
  }, [text, totalDurationMs, scrambleDurationMs, onDone]);

  return <span className={className}>{display}</span>;
}


