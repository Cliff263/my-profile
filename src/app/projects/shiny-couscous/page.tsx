import Image from "next/image";

export default function ShinyCouscousPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <a href="/#projects" className="text-sm opacity-70 hover:opacity-100">← Back to projects</a>
      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Shiny Couscous (E‑Commerce)</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        Modern e‑commerce platform with Next.js, Stripe payments, Sanity CMS, Zustand state management, and Umami analytics for insights.
      </p>

      <div className="mt-6">
        <h2 className="font-semibold">Tech Stack</h2>
        <ul className="mt-2 list-disc pl-6 text-black/70 dark:text-white/70">
          <li>Next.js 15, React, TypeScript, Tailwind CSS</li>
          <li>Stripe, Sanity CMS, Zustand, Umami</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold">Highlights</h2>
        <ul className="mt-2 list-disc pl-6 text-black/70 dark:text-white/70">
          <li>Seamless checkout and secure payments</li>
          <li>CMS-driven content with analytics for business insights</li>
        </ul>
      </div>

      <div className="mt-8 grid gap-4">
        <Image src="/projects/shiny-couscous-placeholder.svg" alt="Shiny Couscous" width={1200} height={675} className="rounded-lg border border-black/10 dark:border-white/10" />
      </div>

      <div className="mt-8 flex gap-3">
        <a className="px-4 py-2 rounded-md bg-foreground text-background text-sm" href="#" target="_blank" rel="noreferrer">Live</a>
        <a className="px-4 py-2 rounded-md border border-black/10 dark:border-white/10 text-sm" href="#" target="_blank" rel="noreferrer">Code</a>
      </div>
    </main>
  );
}


