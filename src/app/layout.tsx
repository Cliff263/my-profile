import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-aurora bg-grid" />
        <ThemeProvider>
          <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 backdrop-blur bg-background/70">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <a href="#hero" className="font-semibold tracking-tight text-gradient-animate">CLIFF JAURE</a>
              <nav className="hidden sm:flex items-center gap-6 text-sm ml-auto">
                <a href="#about" className="hover:underline underline-offset-4">About</a>
                <a href="#skills" className="hover:underline underline-offset-4">Skills</a>
                <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
                <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
              </nav>
              <ThemeToggle />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
