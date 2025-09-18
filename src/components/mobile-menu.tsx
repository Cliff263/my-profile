"use client";

 
import { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonWidth, setButtonWidth] = useState<number>(0);
  const [drawerWidth, setDrawerWidth] = useState<number>(0);
  const [animateIn, setAnimateIn] = useState(false);

  const measureRef = useRef<HTMLSpanElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = useMemo(() => [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ], []);

  // Measure text widths dynamically
  useEffect(() => {
    function measure() {
      if (!measureRef.current) return;

      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;

      // match Tailwind link styles
      ctx.font = "500 16px system-ui, sans-serif";

      const maxWidth = navLinks.reduce((max, link) => {
        const w = ctx.measureText(link.label).width;
        return w > max ? w : max;
      }, 0);

      const fullWidth = Math.ceil(maxWidth) + 32; // +16px padding each side
      setButtonWidth(fullWidth);
      setDrawerWidth(Math.max(fullWidth, 200)); // Minimum 200px width for better UX
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

  // Close on scroll or Esc
  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => closeMenu();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeMenu();
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
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
          onClick={closeMenu}
        >
          {/* Drawer */}
          <div
            className={`absolute top-0 right-0 h-full glass-panel border-l border-black/10 dark:border-white/10 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col`}
            style={{ 
              width: `${drawerWidth}px`,
              transform: animateIn ? 'translateX(0)' : 'translateX(100%)'
            }}
            onClick={(e) => e.stopPropagation()}
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

            {/* Links (centered horizontally) */}
            <nav className="flex flex-col items-center justify-center flex-1 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  style={{ width: `${Math.max(buttonWidth, 120)}px` }}
                  className="text-center px-4 py-3 text-sm sm:text-base font-medium text-black/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-300 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-300 glass-panel hover:shadow-lg"
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
