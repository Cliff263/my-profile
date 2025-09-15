import Image from "next/image";
import { RandomText } from "@/components/random-text";
import { SkillsMarquee } from "@/components/skills-marquee";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section id="hero" className="min-h-[70vh] grid place-items-center py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            <RandomText text="Hi, I'm Your Name" />
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70">
            Building delightful web experiences with Next.js, React, and TypeScript.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-foreground text-background text-sm border border-black/10 dark:border-white/10">
              View Projects
            </a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-black/10 dark:border-white/10 text-sm hover:bg-black/5 dark:hover:bg-white/5">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
        <p className="mt-4 text-black/70 dark:text-white/70 max-w-3xl">
          I am a frontend developer with a passion for modern UI, animations, and building robust applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Skills</h2>
        <SkillsMarquee
          skills={[
            { name: "TypeScript" },
            { name: "React" },
            { name: "Next.js" },
            { name: "Tailwind" },
            { name: "Prisma" },
            { name: "Node.js" },
            { name: "Framer Motion" },
            { name: "Zod" },
          ]}
        />
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href={`/projects/demo-${i}`}
              className="group rounded-xl border border-black/10 dark:border-white/10 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-black/10 to-black/0 dark:from-white/10 dark:to-white/0" />
              <div className="p-4">
                <h3 className="font-medium">Project {i}</h3>
                <p className="mt-1 text-sm text-black/60 dark:text-white/60">Short description of project {i}.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-black/70 dark:text-white/70">Reach out via email your@email.com</p>
      </section>
    </main>
  );
}
