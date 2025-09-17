import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Takunda Cliff Jaure — DevOps Engineer & Full‑Stack Developer",
  description:
    "DevOps Engineer & Full-Stack Developer building scalable, secure apps across web, mobile, and cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-aurora bg-grid" />
        <ThemeProvider>
          <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 backdrop-blur bg-background/70">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
              <Link href="#hero" className="font-semibold tracking-tight text-gradient-animate">CLIFF JAURE</Link>
              <nav className="hidden sm:flex items-center gap-6 text-sm ml-auto">
                <Link href="#about" className="hover:underline underline-offset-4">About</Link>
                <Link href="#education" className="hover:underline underline-offset-4">Education</Link>
                <Link href="#experience" className="hover:underline underline-offset-4">Experience</Link>
                <Link href="#skills" className="hover:underline underline-offset-4">Skills</Link>
                <Link href="#services" className="hover:underline underline-offset-4">Services</Link>
                <Link href="#projects" className="hover:underline underline-offset-4">Projects</Link>
                <Link href="#contact" className="hover:underline underline-offset-4">Contact</Link>
              </nav>
              <span className="hidden sm:inline-block h-6 w-px bg-black/10 dark:bg-white/10 ml-2" />
              <div className="ml-auto sm:ml-0">
                <ThemeToggle />
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
