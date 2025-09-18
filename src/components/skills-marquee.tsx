"use client";

import { useMemo } from "react";
import Marquee from "react-fast-marquee";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiDart, 
  SiLaravel, 
  SiFlutter, 
  SiAmazon, 
  SiDocker, 
  SiKubernetes, 
  SiPostgresql, 
  SiMongodb, 
  SiPrisma, 
  SiTerraform, 
  SiJenkins, 
  SiStripe, 
  SiSanity, 
  SiUmami, 
  SiGit, 
  SiFigma, 
  SiVercel,
  SiGraphql,
  SiExpress,
  SiTailwindcss,
  SiNginx,
  SiGrafana
} from "react-icons/si";

// Function to get the appropriate icon for a skill
function getSkillIcon(skillName: string) {
  const iconMap: Record<string, React.ReactNode> = {
    "JavaScript": <SiJavascript className="h-6 w-6 text-yellow-500" />,
    "TypeScript": <SiTypescript className="h-6 w-6 text-blue-600" />,
    "React": <SiReact className="h-6 w-6 text-cyan-500" />,
    "Next.js": <SiNextdotjs className="h-6 w-6 text-black dark:text-white" />,
    "Node.js": <SiNodedotjs className="h-6 w-6 text-green-600" />,
    "Python": <SiPython className="h-6 w-6 text-yellow-500" />,
    "Dart": <SiDart className="h-6 w-6 text-blue-500" />,
    "PHP": <SiLaravel className="h-6 w-6 text-red-500" />,
    "Flutter": <SiFlutter className="h-6 w-6 text-blue-500" />,
    "AWS": <SiAmazon className="h-6 w-6 text-orange-500" />,
    "Docker": <SiDocker className="h-6 w-6 text-blue-500" />,
    "Kubernetes": <SiKubernetes className="h-6 w-6 text-blue-600" />,
    "PostgreSQL": <SiPostgresql className="h-6 w-6 text-blue-700" />,
    "MongoDB": <SiMongodb className="h-6 w-6 text-green-500" />,
    "Prisma": <SiPrisma className="h-6 w-6 text-indigo-600" />,
    "Terraform": <SiTerraform className="h-6 w-6 text-purple-600" />,
    "Jenkins": <SiJenkins className="h-6 w-6 text-red-600" />,
    "Stripe": <SiStripe className="h-6 w-6 text-purple-500" />,
    "Sanity CMS": <SiSanity className="h-6 w-6 text-pink-500" />,
    "Umami Analytics": <SiUmami className="h-6 w-6 text-cyan-600" />,
    "Git": <SiGit className="h-6 w-6 text-orange-600" />,
    "Figma": <SiFigma className="h-6 w-6 text-purple-500" />,
    "Vercel": <SiVercel className="h-6 w-6 text-black dark:text-white" />,
    "GraphQL": <SiGraphql className="h-6 w-6 text-pink-500" />,
    "Express.js": <SiExpress className="h-6 w-6 text-gray-600" />,
    "Tailwind CSS": <SiTailwindcss className="h-6 w-6 text-cyan-500" />,
    "Zustand": <span className="h-6 w-6 text-orange-600 font-bold text-sm flex items-center justify-center">Z</span>,
    "Firebase": <span className="h-6 w-6 text-orange-500 font-bold text-xs flex items-center justify-center">FB</span>,
    "Neo4j": <span className="h-6 w-6 text-green-600 font-bold text-xs flex items-center justify-center">N4J</span>,
    "Nginx": <SiNginx className="h-6 w-6 text-green-600" />,
    "Grafana": <SiGrafana className="h-6 w-6 text-orange-500" />,
    "ELK Stack": <span className="h-6 w-6 text-yellow-600 font-bold text-xs flex items-center justify-center">ELK</span>,
  };

  return iconMap[skillName] || (
    <div className="h-6 w-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
      <span className="text-white text-xs font-bold">
        {skillName.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}

export function SkillsMarquee({
  skills,
}: {
  skills: { name: string; icon?: React.ReactNode }[];
}) {
  // Create multiple copies of skills for seamless scrolling
  const repeated = useMemo(() => [...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills], [skills]);

  return (
    <div className="relative w-full overflow-hidden border border-black/10 dark:border-white/10 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] glass-panel">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        pauseOnClick={true}
        direction="left"
        className="py-8"
      >
        {repeated.map((s, idx) => (
          <span
            key={`${s.name}-${idx}`}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/80 dark:bg-black/40 backdrop-blur text-base font-medium border border-black/10 dark:border-white/10 glow-card hover:border-white/30 hover:bg-white/90 dark:hover:bg-black/50 transition-all duration-300 shadow-lg hover:shadow-xl mx-4"
          >
            {s.icon || getSkillIcon(s.name)}
            {s.name}
          </span>
        ))}
      </Marquee>
      {/* Enhanced pause hint with gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  );
}


