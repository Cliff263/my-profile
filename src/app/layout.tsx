import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import PerformanceMonitor from "@/components/performance-monitor";
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
  title: {
    default: "Takunda Cliff Jaure — DevOps Engineer & Full‑Stack Developer",
    template: "%s | Takunda Cliff Jaure"
  },
  description:
    "DevOps Engineer & Full-Stack Developer building scalable, secure apps across web, mobile, and cloud. Specialized in AWS, Docker, Kubernetes, Next.js, and Flutter development.",
  keywords: [
    "DevOps Engineer",
    "Full-Stack Developer", 
    "AWS",
    "Docker",
    "Kubernetes",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Mobile Development",
    "Cloud Computing",
    "CI/CD",
    "Terraform",
    "Jenkins",
    "PostgreSQL",
    "MongoDB",
    "Bulawayo",
    "Zimbabwe"
  ],
  authors: [{ name: "Takunda Cliff Jaure", url: "https://cliffjaure.dev" }],
  creator: "Takunda Cliff Jaure",
  publisher: "Takunda Cliff Jaure",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cliffjaure.dev",
    siteName: "Takunda Cliff Jaure",
    title: "Takunda Cliff Jaure — DevOps Engineer & Full‑Stack Developer",
    description: "DevOps Engineer & Full-Stack Developer building scalable, secure apps across web, mobile, and cloud.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takunda Cliff Jaure — DevOps Engineer & Full‑Stack Developer",
    description: "DevOps Engineer & Full-Stack Developer building scalable, secure apps across web, mobile, and cloud.",
    creator: "@CeJay_Cliffs",
    images: [],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://cliffjaure.dev",
  },
  category: "technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cliffjaure.dev"),
  applicationName: "Cliff Jaure Portfolio",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
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
          <PerformanceMonitor />
          <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 backdrop-blur-md bg-background/80 glass-panel">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
              <Link href="#hero" className="font-semibold tracking-tight text-gradient-animate">CLIFF JAURE</Link>
              <nav className="hidden md:flex items-center gap-6 text-sm ml-auto">
                <Link href="#about" className="text-black/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-300 hover:underline underline-offset-4 transition-all duration-300">About</Link>
                <Link href="#education" className="text-black/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-300 hover:underline underline-offset-4 transition-all duration-300">Education</Link>
                <Link href="#experience" className="text-black/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-300 hover:underline underline-offset-4 transition-all duration-300">Experience</Link>
                <Link href="#skills" className="text-black/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-300 hover:underline underline-offset-4 transition-all duration-300">Skills</Link>
                <Link href="#services" className="text-black/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-300 hover:underline underline-offset-4 transition-all duration-300">Services</Link>
                <Link href="#projects" className="text-black/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-300 hover:underline underline-offset-4 transition-all duration-300">Projects</Link>
                <Link href="#contact" className="text-black/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-300 hover:underline underline-offset-4 transition-all duration-300">Contact</Link>
              </nav>
              <span className="hidden md:inline-block h-6 w-px bg-black/20 dark:bg-white/20 ml-2" />
              <div className="ml-auto md:ml-0 flex items-center gap-2">
                <ThemeToggle />
                <MobileMenu />
              </div>
            </div>
          </header>
          {children}
          
          {/* Footer */}
          <footer className="border-t border-black/10 dark:border-white/10 bg-background/80 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-sm text-black/60 dark:text-white/60">
                    © 2025 Takunda Cliff Jaure
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/Cliff263" 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-gray-300 hover:scale-110 hover:border-gray-300/30 hover:shadow-lg"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://x.com/CeJay_Cliffs" 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-sky-400 hover:scale-110 hover:border-sky-400/30 hover:shadow-lg"
                    aria-label="X / Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/takunda-jaure-106028242" 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:border-blue-400/30 hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/cliff.jaure" 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:border-blue-500/30 hover:shadow-lg"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
