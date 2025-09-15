import { prisma } from "@/lib/prisma";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({ where: { slug } });
  if (!project) return <div className="mx-auto max-w-4xl px-4 py-20">Project not found.</div>;

  const mediaItems = Array.isArray(project.media) ? (project.media as any[]) : [];
  const tags = project.tagsCsv.split(",").map((t) => t.trim());

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <a href="/#projects" className="text-sm opacity-70 hover:opacity-100">← Back to projects</a>
      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md border border-black/10 dark:border-white/10">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-8 grid gap-4">
        {mediaItems.map((m, idx) => {
          if (m.type === "image") {
            return (
              <Image key={idx} src={m.src} alt="project media" width={1200} height={675} className="rounded-lg border border-black/10 dark:border-white/10" />
            );
          }
          if (m.type === "video") {
            return (
              <video key={idx} controls className="w-full rounded-lg border border-black/10 dark:border-white/10">
                <source src={m.src} />
              </video>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-8 flex gap-3">
        {project.url && (
          <a className="px-4 py-2 rounded-md bg-foreground text-background text-sm" href={project.url} target="_blank">Live</a>
        )}
        {project.repoUrl && (
          <a className="px-4 py-2 rounded-md border border-black/10 dark:border-white/10 text-sm" href={project.repoUrl} target="_blank">Code</a>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({ select: { slug: true } });
  return projects.map((p) => ({ slug: p.slug }));
}


