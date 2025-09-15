import Image from "next/image";

export default function FyndrPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <a href="/#projects" className="text-sm opacity-70 hover:opacity-100">← Back to projects</a>
      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Fyndr (Social App)</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        Cross‑platform Flutter app featuring real‑time chat, personalized profiles, and powerful discovery capabilities designed for social engagement.
      </p>

      <div className="mt-6">
        <h2 className="font-semibold">Tech Stack</h2>
        <ul className="mt-2 list-disc pl-6 text-black/70 dark:text-white/70">
          <li>Flutter (mobile), Firebase Auth, Firestore/RTDB, Cloud Storage</li>
          <li>Push notifications, App Store and Play Store distribution</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold">Highlights</h2>
        <ul className="mt-2 list-disc pl-6 text-black/70 dark:text-white/70">
          <li>Real‑time messaging and presence</li>
          <li>Optimized performance and user engagement</li>
        </ul>
      </div>

      <div className="mt-8 grid gap-4">
        <Image src="/projects/fyndr-placeholder.svg" alt="Fyndr" width={1200} height={675} className="rounded-lg border border-black/10 dark:border-white/10" />
      </div>

      <div className="mt-8 flex gap-3">
        <a className="px-4 py-2 rounded-md bg-foreground text-background text-sm" href="#" target="_blank" rel="noreferrer">Live</a>
        <a className="px-4 py-2 rounded-md border border-black/10 dark:border-white/10 text-sm" href="#" target="_blank" rel="noreferrer">Code</a>
      </div>
    </main>
  );
}


