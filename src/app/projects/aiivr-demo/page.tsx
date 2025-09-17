import Link from "next/link";
import OptimizedImage from "@/components/optimized-image";

export default function AIIVRDemoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/#projects" className="text-sm opacity-70 hover:opacity-100">← Back to projects</Link>
      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">AIIVR Demo</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        Live call management MVP using Next.js 15, TypeScript, Tailwind CSS, and WebSockets for real-time bidirectional communication and status updates.
      </p>

      <div className="mt-6">
        <h2 className="font-semibold">Tech Stack</h2>
        <ul className="mt-2 list-disc pl-6 text-black/70 dark:text-white/70">
          <li>Next.js 15, React, TypeScript, Tailwind CSS</li>
          <li>Custom Node/Express WebSocket server</li>
          <li>Real-time event handling and UI updates</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold">Highlights</h2>
        <ul className="mt-2 list-disc pl-6 text-black/70 dark:text-white/70">
          <li>Real-time calls and dynamic state transitions</li>
          <li>Responsive, scalable architecture for rapid prototyping</li>
        </ul>
      </div>

      <div className="mt-8 grid gap-4">
        <OptimizedImage src="/projects/aiivr-placeholder.svg" alt="AIIVR Demo" width={1200} height={675} className="rounded-lg border border-black/10 dark:border-white/10" priority={true} />
      </div>

      <div className="mt-8 flex gap-3">
        <a className="px-4 py-2 rounded-md bg-foreground text-background text-sm" href="#" target="_blank" rel="noreferrer">Live</a>
        <a className="px-4 py-2 rounded-md border border-black/10 dark:border-white/10 text-sm" href="#" target="_blank" rel="noreferrer">Code</a>
      </div>
    </main>
  );
}


