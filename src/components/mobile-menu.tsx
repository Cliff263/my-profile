"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useGlow } from "@/components/ui/glow-provider";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonWidth, setButtonWidth] = useState<number>(0);
  const [drawerWidth, setDrawerWidth] = useState<number>(0);
  const [animateIn, setAnimateIn] = useState(false);
  const { glowColor } = useGlow();

  const measureRef = useRef<HTMLSpanElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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

  const navLinks = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#education", label: "Education" },
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },
      { href: "#services", label: "Services" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  // Measure text widths dynamically
  useEffect(() => {
    function measure() {
      if (!measureRef.current) return;

      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;

      ctx.font = "500 16px system-ui, sans-serif"; // match Tailwind styles

      const maxWidth = navLinks.reduce((max, link) => {
        const w = ctx.measureText(link.label).width;
        return w > max ? w : max;
      }, 0);

      const fullWidth = Math.ceil(maxWidth) + 32; // +16px padding each side
      setButtonWidth(fullWidth);
      setDrawerWidth(Math.max(fullWidth, 200)); // Minimum 200px width
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [navLinks]);

  // Animate in/out
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setAnimateIn(true));
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  // Close on Escape key or outside click/touch
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hidden span for measurement */}
      <span ref={measureRef} className="invisible fixed top-0 left-0">
        Measure
      </span>

      {/* Menu Toggle */}
      {!isOpen && (
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 glass-panel"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-lg transition-opacity duration-300 ${
            animateIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Drawer */}
          <div
            ref={drawerRef}
            className={`absolute top-0 right-0 h-full bg-background/80 backdrop-blur-md border-l border-black/10 dark:border-white/10 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col`}
            style={{
              width: `${drawerWidth}px`,
              transform: animateIn ? "translateX(0)" : "translateX(100%)",
            }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 p-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 glass-panel"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links */}
            <nav
              className={`flex flex-col items-center justify-center flex-1 space-y-2 ${getGlowClass()}`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  style={{ width: `${Math.max(buttonWidth, 120)}px` }}
                  className="mobile-link text-center px-3 py-2 text-sm font-medium glass-panel hover:bg-white/10 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
