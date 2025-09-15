import Image from "next/image";
import { Github, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { SkillsMarquee } from "@/components/skills-marquee";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section id="hero" className="min-h-[70vh] grid items-center py-20">
        <div className="mx-auto max-w-6xl px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-2xl sm:text-3xl opacity-80">Hello,</p>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold leading-tight">
              This is <span className="code-gradient">CLIFF JAURE</span>,
              <br className="hidden sm:block" />
              <span className="text-3xl sm:text-5xl opacity-90">a Professional <span className="code-gradient">DevOps</span> Engineer & <span className="code-gradient">Software</span> Developer.</span>
          </h1>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-gradient text-sm font-medium">Contact Me</a>
              <a href="#projects" className="px-5 py-2 rounded-full border border-white/10 text-sm backdrop-blur hover:bg-white/5">Get Resume</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-colors hover:text-cyan-400" href="https://github.com/takundajaure" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-colors hover:text-sky-400" href="https://x.com/takundajaure" target="_blank" rel="noreferrer noopener" aria-label="X / Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-colors hover:text-blue-500" href="https://facebook.com/takundajaure" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-colors hover:text-blue-400" href="https://linkedin.com/in/takunda-jaure-106028242" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="glass-panel rounded-2xl overflow-hidden code-window">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="px-5 py-4 bg-background/80 scanlines">
                <pre className="text-sm leading-7 font-mono overflow-x-auto">
                  <code>
                    <span className="code-token-const">const</span> <span className="code-token-ident">coder</span> <span className="code-token-punc">=</span> <span className="code-token-punc">{'{'}</span>
                    <br />
                    &nbsp;&nbsp;<span className="code-token-key">name</span><span className="code-token-punc">:</span> <span className="code-token-string">&apos;Cliff Jaure&apos;</span><span className="code-token-punc">,</span>
                    <br />
                    &nbsp;&nbsp;<span className="code-token-key">skills</span><span className="code-token-punc">:</span><span className="code-token-punc">[</span><span className="code-token-string">&apos;Devops&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;NextJS&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;Jenkins&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;CI/CD&apos;</span><span className="code-token-punc">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-token-string">&apos;PostgreSQL&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;MySql&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;MongoDB&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;Docker&apos;</span><span className="code-token-punc">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-token-string">&apos;Linux&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;Python&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;Golang&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;AWS&apos;</span><span className="code-token-punc">]</span><span className="code-token-punc">,</span>
                    <br />
                    &nbsp;&nbsp;<span className="code-token-key">hardWorker</span><span className="code-token-punc">:</span> <span className="code-token-boolean">true</span><span className="code-token-punc">,</span>
                    <br />
                    &nbsp;&nbsp;<span className="code-token-key">quickLearner</span><span className="code-token-punc">:</span> <span className="code-token-boolean">true</span><span className="code-token-punc">,</span>
                    <br />
                    &nbsp;&nbsp;<span className="code-token-key">problemSolver</span><span className="code-token-punc">:</span> <span className="code-token-boolean">true</span><span className="code-token-punc">,</span>
                    <br />
                    &nbsp;&nbsp;<span className="code-token-key">hireable</span><span className="code-token-punc">:</span> <span className="code-token-func">function</span><span className="code-token-punc">()</span> <span className="code-token-punc">{'{'}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-token-func">return</span> <span className="code-token-punc">(</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-token-const">this</span><span className="code-token-punc">.</span><span className="code-token-key">hardWorker</span> <span className="code-token-punc">&&</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-token-const">this</span><span className="code-token-punc">.</span><span className="code-token-key">problemSolver</span> <span className="code-token-punc">&&</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-token-const">this</span><span className="code-token-punc">.</span><span className="code-token-key">skills</span><span className="code-token-punc">.</span><span className="code-token-func">length</span> <span className="code-token-punc">&gt;=</span> <span className="code-token-boolean">5</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-token-punc">)</span>
                    <br />
                    &nbsp;&nbsp;<span className="code-token-punc">{'}'}</span>
                    <br />
                    <span className="code-token-punc">{'}'}</span><span className="code-token-punc">;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
        <p className="mt-4 text-black/70 dark:text-white/70 max-w-3xl">
          DevOps Engineer & Full-Stack Developer with a B.Sc. (Hons) in Cloud Computing & IoT from the University of Zimbabwe. I design and build scalable, secure, and innovative applications across web, mobile, and cloud platforms—bridging development and operations to deliver real-world impact. Passionate about transforming complex challenges into reliable, scalable solutions and thriving in fast-paced, collaborative environments.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Skills</h2>
        <SkillsMarquee
          skills={[
            { name: "Flutter" },
            { name: "Next.js 15" },
            { name: "TypeScript" },
            { name: "React" },
            { name: "Node.js" },
            { name: "PHP / Laravel" },
            { name: "Prisma" },
            { name: "PostgreSQL" },
            { name: "MongoDB" },
            { name: "AWS" },
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "Terraform" },
            { name: "CI/CD" },
            { name: "Zustand" },
            { name: "Stripe" },
            { name: "Sanity CMS" },
            { name: "Umami Analytics" },
          ]}
        />
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { slug: "aiivr-demo", title: "AIIVR Demo", desc: "Live call management MVP with Next.js 15, WebSockets, and real-time updates.", img: "/projects/aiivr-placeholder.svg" },
            { slug: "shiny-couscous", title: "Shiny Couscous (E‑Commerce)", desc: "Next.js, Stripe, Sanity CMS, Zustand, and Umami analytics.", img: "/projects/shiny-couscous-placeholder.svg" },
            { slug: "fyndr", title: "Fyndr (Social App)", desc: "Flutter app with chat, profiles, and discovery features.", img: "/projects/fyndr-placeholder.svg" },
          ].map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-xl border border-black/10 dark:border-white/10 overflow-hidden glow-card bg-background/60 backdrop-blur"
            >
              <Image src={p.img} alt={p.title} width={1200} height={675} className="aspect-video object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-black/60 dark:text-white/60">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold">Get in touch with me</h2>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <form className="glass-panel p-6 space-y-4">
            <p className="text-black/70 dark:text-white/70">If you have any questions or concerns, please contact me. I am open to roles aligned with my skills and interests.</p>
            <div>
              <label className="text-sm opacity-80">Your Name:</label>
              <input className="input-modern mt-2" placeholder="John Doe" />
            </div>
            <div>
              <label className="text-sm opacity-80">Your Email:</label>
              <input type="email" className="input-modern mt-2" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm opacity-80">Your Message:</label>
              <textarea className="input-modern mt-2 min-h-40" placeholder="Write your message..." />
            </div>
            <button type="button" className="btn-gradient text-sm font-medium inline-flex items-center gap-2">Send Message</button>
          </form>
          <aside className="glass-panel p-6 space-y-6">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 opacity-70" /> <span>cliffjaure263@gmail.com</span></div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 opacity-70" /> <span>+263779190068</span></div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 opacity-70" /> <span>Hse No.4 Forrester, Khumalo, Byo, Zimbabwe</span></div>
            <div className="pt-2 flex items-center gap-4">
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:text-cyan-400" href="https://github.com/takundajaure" target="_blank" rel="noreferrer noopener" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:text-sky-400" href="https://x.com/takundajaure" target="_blank" rel="noreferrer noopener" aria-label="X / Twitter"><Twitter className="h-5 w-5" /></a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:text-blue-500" href="https://facebook.com/takundajaure" target="_blank" rel="noreferrer noopener" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:text-blue-400" href="https://linkedin.com/in/takunda-jaure-106028242" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
