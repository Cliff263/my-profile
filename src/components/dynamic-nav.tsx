"use client";

import Link from "next/link";
import { useGlow } from "@/components/ui/glow-provider";

export function DynamicNav() {
  const { glowColor } = useGlow();

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

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`hidden md:flex items-center gap-6 text-sm ml-auto ${getGlowClass()}`}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="nav-link"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
