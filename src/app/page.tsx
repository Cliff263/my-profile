import { Github, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { SkillsMarquee } from "@/components/skills-marquee";
import { SequentialHeroText } from "@/components/sequential-hero-text";
import ProjectCard from "@/components/project-card";
import TerminalCard from "@/components/terminal-card";
import Link from "next/link";
import { 
  SiFlutter, 
  SiNextdotjs, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiLaravel,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiStripe,
  SiSanity,
  SiUmami,
  SiPython
} from "react-icons/si";
import { 
  FaCode, 
  FaServer, 
  FaMobile, 
  FaDatabase, 
  FaBolt, 
  FaCogs 
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section id="hero" className="min-h-[60vh] grid items-center py-8">
        <div className="mx-auto max-w-6xl px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <SequentialHeroText />
            
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#contact" className="btn-gradient text-sm font-medium flex items-center justify-center px-6 py-3 rounded-lg">Contact Me</Link>
              <Link href="https://drive.google.com/file/d/1beD9iI6qk35_Y_6kkHJWthKxiK_CZbs1/view?usp=drive_link" target="_blank" rel="noreferrer noopener" className="px-6 py-3 rounded-lg border border-cyan-400/30 text-sm font-medium backdrop-blur bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Resume
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <Link className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:border-cyan-400/30" href="https://github.com/Cliff263" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <Link className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-sky-400 hover:scale-110 hover:border-sky-400/30" href="https://x.com/CeJay_Cliffs" target="_blank" rel="noreferrer noopener" aria-label="X / Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:border-blue-500/30" href="https://www.facebook.com/cliff.jaure" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:border-blue-400/30" href="https://www.linkedin.com/in/takunda-jaure-106028242" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <TerminalCard className="rounded-2xl overflow-hidden code-window" smallDots={true}>
              <div className="scanlines">
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
            </TerminalCard>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8"><span className="code-gradient">About Me</span></h2>
        <div className="space-y-6">
          <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <h3 className="text-2xl font-semibold mb-6 text-gradient-animate">Professional Journey</h3>
            <div className="space-y-4">
              <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg">
                DevOps Engineer & Full-Stack Developer with a B.Sc. (Hons) in Cloud Computing & IoT from the University of Zimbabwe. 
                I design and build scalable, secure, and innovative applications across web, mobile, and cloud platforms—bridging 
                development and operations to deliver real-world impact.
              </p>
            </div>
          </TerminalCard>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
                <h4 className="font-semibold text-lg mb-3 text-cyan-400">Passion</h4>
                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                  Passionate about transforming complex challenges into reliable, scalable solutions. I excel in collaborative, 
                  fast-paced settings and drive meaningful results.
                </p>
              </TerminalCard>
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
                <h4 className="font-semibold text-lg mb-3 text-emerald-400">Approach</h4>
                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                  DevOps-first mindset with focus on automation, monitoring, and continuous improvement. I adapt quickly to new 
                  technologies and maintain high standards of quality.
                </p>
              </TerminalCard>
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
                <h4 className="font-semibold text-lg mb-3 text-purple-400">Experience</h4>
                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                  Full-stack development, cloud infrastructure, and mobile app development across various industries. 
                  Specialized in bridging development and operations for real-world impact.
                </p>
              </TerminalCard>
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
                <h4 className="font-semibold text-lg mb-3 text-orange-400">Career Goals</h4>
                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                  Open to roles in DevOps, Full-Stack Development, Software Engineering, and IT Graduate programs where I can 
                  contribute, learn, and grow professionally.
                </p>
              </TerminalCard>
            </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8"><span className="code-gradient">Education</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">UZ</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">B.Sc. (Hons) Cloud Computing & IoT</h3>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">University of Zimbabwe</p>
                <p className="text-sm text-black/60 dark:text-white/60 mt-2">2020 - 2024 • Class 2.1</p>
                <p className="text-sm text-black/70 dark:text-white/70 mt-3">
                  Specialized in cloud infrastructure, IoT systems, and distributed computing. 
                  Gained expertise in AWS, Azure, containerization, and modern DevOps practices.
                </p>
              </div>
            </div>
          </TerminalCard>
          
          <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Certifications & Continuous Learning</h3>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">Various Platforms</p>
                <p className="text-sm text-black/60 dark:text-white/60 mt-2">Ongoing</p>
                <p className="text-sm text-black/70 dark:text-white/70 mt-3">
                  AWS Certified Solutions Architect, Docker Certified Associate, 
                  and continuous learning in modern web technologies and DevOps practices.
                </p>
              </div>
            </div>
          </TerminalCard>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8"><span className="code-gradient">Experience</span></h2>
        <div className="flex flex-col gap-6">
          <div
            id="sticky-experience-1"
            className="sticky-card w-full mx-auto max-w-4xl sticky"
          >
            <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-300 hover:shadow-xl">
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <FaServer className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-lg">DevOps Engineer & Full-Stack Developer</h3>
                  <span className="text-sm text-black/60 dark:text-white/60">Feb 2025 - Present</span>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">Freelance Developer</p>
                <p className="text-sm text-black/70 dark:text-white/70 mt-3 leading-relaxed">
                  Delivering end-to-end solutions for clients across various industries. Specializing in cloud infrastructure setup, 
                  CI/CD pipeline implementation, and full-stack application development using modern technologies.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">AWS</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Docker</span>
                  <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">Kubernetes</span>
                  <span className="px-2 py-1 text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">Next.js</span>
                </div>
              </div>
            </div>
              </TerminalCard>
            </div>
          </div>

          <div
            id="sticky-experience-2"
            className="sticky-card w-full mx-auto max-w-4xl sticky"
          >
            <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-300 hover:shadow-xl">
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <FaCode className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-lg">Full-Stack & Mobile Developer</h3>
                  <span className="text-sm text-black/60 dark:text-white/60">Oct 2024 – Mar 2025</span>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">MAMOX Preparatory School — Harare (Remote)</p>
                <p className="text-sm text-black/70 dark:text-white/70 mt-3 leading-relaxed">
                  Developed and deployed &quot;Fyndr,&quot; a cross-platform Flutter app featuring user profiles, chat, and discovery functions. 
                  Integrated Firebase for secure authentication, real-time storage, and payment processing. Managed deployment pipeline 
                  to Google Play and Apple App Store, ensuring compliance and reliability. Optimized performance and user experience for increased retention and engagement.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Flutter</span>
                  <span className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">Firebase</span>
                  <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">Google Play</span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 rounded-full">App Store</span>
                </div>
              </div>
            </div>
              </TerminalCard>
            </div>
          </div>

          <div
            id="sticky-experience-3"
            className="sticky-card w-full mx-auto max-w-4xl sticky"
          >
            <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-300 hover:shadow-xl">
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <FaCode className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-lg">Software Developer</h3>
                  <span className="text-sm text-black/60 dark:text-white/60">Aug 2024 – Oct 2024</span>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">Exoplanet Studios — Harare (On-site)</p>
                <p className="text-sm text-black/70 dark:text-white/70 mt-3 leading-relaxed">
                  Participated in end-to-end software development and quality assurance, ensuring project robustness and QA compliance. 
                  Documented key processes and workflows for team sharing and onboarding. Collaborated effectively with multi-disciplinary 
                  teams to deliver production-ready applications.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Software Development</span>
                  <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">QA</span>
                  <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">Documentation</span>
                  <span className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">Team Collaboration</span>
                </div>
              </div>
            </div>
              </TerminalCard>
            </div>
          </div>

          <div
            id="sticky-experience-4"
            className="sticky-card w-full mx-auto max-w-4xl sticky"
          >
            <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-300 hover:shadow-xl">
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <FaServer className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-lg">Junior DevOps Engineer</h3>
                  <span className="text-sm text-black/60 dark:text-white/60">Jun 2023 – Jan 2024</span>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">Yirifi.ai — Singapore (Remote)</p>
                <p className="text-sm text-black/70 dark:text-white/70 mt-3 leading-relaxed">
                  Engineered and automated AWS infrastructure with Terraform and IAM, cutting manual setup time by 30%. Automated CI/CD 
                  deployments via Jenkins, GitHub Actions, and AWS CodePipeline. Deployed secure GraphQL APIs on AWS Lambda and EKS, 
                  supported remote operations with VPN and compliance systems. Led development sprints and task tracking in Trello and Notion, 
                  enhancing delivery timelines by 15%. Streamlined documentation and team collaboration using Notion and ProofHub for transparent milestone reporting. 
                  Implemented Cert-Manager for automated TLS/SSL, safeguarding distributed systems.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">AWS</span>
                  <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">Terraform</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Jenkins</span>
                  <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">GitHub Actions</span>
                  <span className="px-2 py-1 text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">GraphQL</span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">EKS</span>
                </div>
              </div>
            </div>
              </TerminalCard>
            </div>
          </div>

          <div
            id="sticky-experience-5"
            className="sticky-card w-full mx-auto max-w-4xl sticky"
          >
            <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-300 hover:shadow-xl">
              <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <FaCode className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-lg">Software Development Intern</h3>
                  <span className="text-sm text-black/60 dark:text-white/60">2021 - 2022</span>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">Tech Startup</p>
                <p className="text-sm text-black/70 dark:text-white/70 mt-3 leading-relaxed">
                  Gained hands-on experience in web application development, database design, and API development. 
                  Worked on multiple projects using React, Node.js, and PostgreSQL.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">React</span>
                  <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">Node.js</span>
                  <span className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">PostgreSQL</span>
                  <span className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">REST APIs</span>
                </div>
              </div>
            </div>
              </TerminalCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8"><span className="code-gradient">Skills</span></h2>
        <TerminalCard className="hover:shadow-2xl transition-all duration-300" smallDots={true}>
          <SkillsMarquee
          skills={[
            { name: "Dart", icon: <span className="h-6 w-6 text-blue-500 font-bold text-xs flex items-center justify-center">D</span> },
            { name: "JavaScript", icon: <span className="h-6 w-6 text-yellow-500 font-bold text-sm flex items-center justify-center">JS</span> },
            { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-blue-600" /> },
            { name: "PHP", icon: <SiLaravel className="h-6 w-6 text-red-500" /> },
            { name: "Python", icon: <SiPython className="h-6 w-6 text-yellow-500" /> },
            { name: "Arduino C", icon: <span className="h-6 w-6 text-green-600 font-bold text-xs flex items-center justify-center">C</span> },
            { name: "GraphQL", icon: <span className="h-6 w-6 text-pink-500 font-bold text-xs flex items-center justify-center">GQL</span> },
            { name: "Flutter", icon: <SiFlutter className="h-6 w-6 text-blue-500" /> },
            { name: "React", icon: <SiReact className="h-6 w-6 text-cyan-500" /> },
            { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-black dark:text-white" /> },
            { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6 text-green-600" /> },
            { name: "Express.js", icon: <span className="h-6 w-6 text-gray-600 font-bold text-xs flex items-center justify-center">EX</span> },
            { name: "Zustand", icon: <span className="h-6 w-6 text-orange-600 font-bold text-sm flex items-center justify-center">Z</span> },
            { name: "Tailwind CSS", icon: <span className="h-6 w-6 text-cyan-500 font-bold text-xs flex items-center justify-center">TW</span> },
            { name: "AWS", icon: <SiAmazon className="h-6 w-6 text-orange-500" /> },
            { name: "Terraform", icon: <SiTerraform className="h-6 w-6 text-purple-600" /> },
            { name: "Jenkins", icon: <SiJenkins className="h-6 w-6 text-red-600" /> },
            { name: "GitHub Actions", icon: <span className="h-6 w-6 text-gray-800 dark:text-gray-200 font-bold text-xs flex items-center justify-center">GA</span> },
            { name: "Docker", icon: <SiDocker className="h-6 w-6 text-blue-500" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="h-6 w-6 text-blue-600" /> },
            { name: "Let's Encrypt", icon: <span className="h-6 w-6 text-green-500 font-bold text-xs flex items-center justify-center">LE</span> },
            { name: "Helm", icon: <span className="h-6 w-6 text-blue-400 font-bold text-xs flex items-center justify-center">H</span> },
            { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6 text-blue-700" /> },
            { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-green-500" /> },
            { name: "Firebase", icon: <span className="h-6 w-6 text-orange-500 font-bold text-xs flex items-center justify-center">FB</span> },
            { name: "Prisma", icon: <SiPrisma className="h-6 w-6 text-indigo-600" /> },
            { name: "Neo4j", icon: <span className="h-6 w-6 text-green-600 font-bold text-xs flex items-center justify-center">N4J</span> },
            { name: "Git", icon: <span className="h-6 w-6 text-orange-600 font-bold text-sm flex items-center justify-center">G</span> },
            { name: "Figma", icon: <span className="h-6 w-6 text-purple-500 font-bold text-xs flex items-center justify-center">F</span> },
            { name: "Cursor", icon: <span className="h-6 w-6 text-blue-500 font-bold text-xs flex items-center justify-center">C</span> },
            { name: "Nginx", icon: <span className="h-6 w-6 text-green-600 font-bold text-xs flex items-center justify-center">N</span> },
            { name: "ELK Stack", icon: <span className="h-6 w-6 text-yellow-600 font-bold text-xs flex items-center justify-center">ELK</span> },
            { name: "Grafana", icon: <span className="h-6 w-6 text-orange-500 font-bold text-xs flex items-center justify-center">G</span> },
            { name: "Vercel", icon: <span className="h-6 w-6 text-black dark:text-white font-bold text-xs flex items-center justify-center">V</span> },
            { name: "REST APIs", icon: <span className="h-6 w-6 text-blue-500 font-bold text-xs flex items-center justify-center">R</span> },
            { name: "GraphQL APIs", icon: <span className="h-6 w-6 text-pink-500 font-bold text-xs flex items-center justify-center">GQL</span> },
            { name: "Stripe", icon: <SiStripe className="h-6 w-6 text-purple-500" /> },
            { name: "Sanity CMS", icon: <SiSanity className="h-6 w-6 text-pink-500" /> },
            { name: "Umami Analytics", icon: <SiUmami className="h-6 w-6 text-cyan-600" /> },
            { name: "Trello", icon: <span className="h-6 w-6 text-blue-500 font-bold text-xs flex items-center justify-center">T</span> },
            { name: "Notion", icon: <span className="h-6 w-6 text-gray-800 dark:text-gray-200 font-bold text-xs flex items-center justify-center">N</span> },
            { name: "ProofHub", icon: <span className="h-6 w-6 text-red-500 font-bold text-xs flex items-center justify-center">P</span> },
            { name: "CI/CD pipelines", icon: <span className="h-6 w-6 text-green-500 font-bold text-xs flex items-center justify-center">CD</span> },
            { name: "Mobile cross-platform development", icon: <span className="h-6 w-6 text-blue-500 font-bold text-xs flex items-center justify-center">M</span> },
            { name: "Agile methodologies", icon: <span className="h-6 w-6 text-purple-500 font-bold text-xs flex items-center justify-center">A</span> },
            { name: "WebSockets", icon: <span className="h-6 w-6 text-cyan-500 font-bold text-xs flex items-center justify-center">WS</span> },
          ]}
        />
        </TerminalCard>
      </section>

      {/* Services */}
      <section id="services" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8"><span className="code-gradient">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TerminalCard className="group hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-cyan-300 transition-colors">Full-Stack Development</h3>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70">
              End-to-end web application development using modern frameworks like Next.js, React, and Node.js. 
              From concept to deployment with clean, scalable code.
            </p>
          </TerminalCard>

          <TerminalCard className="group hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <FaServer className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-emerald-300 transition-colors">DevOps & Cloud</h3>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70">
              Infrastructure automation, CI/CD pipelines, and cloud deployment on AWS. 
              Containerization with Docker and orchestration with Kubernetes.
            </p>
          </TerminalCard>

          <TerminalCard className="group hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <FaMobile className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-purple-300 transition-colors">Mobile Development</h3>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70">
              Cross-platform mobile app development using Flutter. 
              Native performance with beautiful UI/UX design.
            </p>
          </TerminalCard>

          <TerminalCard className="group hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <FaDatabase className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-orange-300 transition-colors">Database Design</h3>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70">
              Database architecture and optimization for PostgreSQL, MongoDB, and MySQL. 
              Performance tuning and data modeling expertise.
            </p>
          </TerminalCard>

          <TerminalCard className="group hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                <FaBolt className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-teal-300 transition-colors">Performance Optimization</h3>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70">
              Application performance tuning, caching strategies, and optimization techniques 
              to ensure fast, responsive user experiences.
            </p>
          </TerminalCard>

          <TerminalCard className="group hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <FaCogs className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg group-hover:text-indigo-300 transition-colors">Technical Consulting</h3>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70">
              Architecture reviews, technology stack recommendations, and technical guidance 
              for scalable, maintainable solutions.
            </p>
          </TerminalCard>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8"><span className="code-gradient">Projects</span></h2>
        <div className="flex flex-col gap-6">
          {[
            { 
              name: "AIIVR Demo", 
              tools: ["Next.js 15", "TypeScript", "Tailwind CSS", "Express.js", "WebSockets"],
              role: "Lead Developer",
              description: "Led development of a live call management MVP using Next.js 15, TypeScript, and Tailwind CSS. Built custom Express server with WebSockets for real-time bidirectional communication. Enabled dynamic call handling and instant status updates, showcasing creation of responsive, scalable systems.",
              code: "https://github.com/Cliff263/aiivr-demo",
              demo: "https://aiivr-demo.vercel.app"
            },
            { 
              name: "Shiny Couscous", 
              tools: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Zustand", "Umami"],
              role: "Full-Stack Developer",
              description: "Developed modern e-commerce platform with Next.js, TypeScript, Stripe, Sanity CMS, Zustand, and Umami analytics. Delivered seamless user experience, secure payments, and actionable business insights.",
              code: "https://github.com/Cliff263/shiny-couscous",
              demo: "https://shiny-couscous.vercel.app"
            },
            { 
              name: "Fyndr", 
              tools: ["Flutter", "Firebase", "Real-time Chat", "Mobile Development"],
              role: "Mobile Developer",
              description: "Created cross-platform Flutter app with real-time chat, personalized profiles, and discovery features. Focused on social engagement and rich user-centric mobile experience.",
              code: "https://github.com/Cliff263/fyndr",
              demo: "https://play.google.com/store/apps/details?id=com.fyndr.app"
            },
            { 
              name: "DevOps Automation", 
              tools: ["Jenkins", "GitHub Actions", "Terraform", "AWS EKS", "CI/CD"],
              role: "DevOps Engineer",
              description: "Designed and implemented CI/CD pipelines using Jenkins, GitHub Actions, Terraform, and AWS EKS. Automated deployment and infrastructure provisioning, reducing setup time by 30%, improving operational resilience.",
              code: "https://github.com/Cliff263/devops-automation",
              demo: "https://devops-automation-docs.vercel.app"
            }
          ].map((project, index) => (
            <div
              key={index}
              id={`sticky-card-${index + 1}`}
              className="sticky-card w-full mx-auto max-w-4xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-300 hover:shadow-xl">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8"><span className="code-gradient">Get in touch with me</span></h2>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <TerminalCard className="space-y-4 hover:shadow-2xl transition-all duration-300" smallDots={true}>
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
            <button type="button" className="btn-gradient text-sm font-medium inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">Send Message</button>
          </TerminalCard>
          <TerminalCard className="space-y-6 hover:shadow-2xl transition-all duration-300" smallDots={true}>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 dark:bg-black/20 hover:bg-white/10 dark:hover:bg-black/30 transition-all duration-300">
              <Mail className="h-5 w-5 opacity-70 text-cyan-400" /> 
              <span className="text-black/70 dark:text-white/70">cliffjaure263@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 dark:bg-black/20 hover:bg-white/10 dark:hover:bg-black/30 transition-all duration-300">
              <Phone className="h-5 w-5 opacity-70 text-emerald-400" /> 
              <span className="text-black/70 dark:text-white/70">+263779190068</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 dark:bg-black/20 hover:bg-white/10 dark:hover:bg-black/30 transition-all duration-300">
              <MapPin className="h-5 w-5 opacity-70 text-purple-400" /> 
              <span className="text-black/70 dark:text-white/70">Hse No.4 Forrester, Khumalo, Byo, Zimbabwe</span>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:border-cyan-400/30" href="https://github.com/Cliff263" target="_blank" rel="noreferrer noopener" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-sky-400 hover:scale-110 hover:border-sky-400/30" href="https://x.com/CeJay_Cliffs" target="_blank" rel="noreferrer noopener" aria-label="X / Twitter"><Twitter className="h-5 w-5" /></a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-blue-500 hover:scale-110 hover:border-blue-500/30" href="https://www.facebook.com/cliff.jaure" target="_blank" rel="noreferrer noopener" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:border-blue-400/30" href="https://www.linkedin.com/in/takunda-jaure-106028242" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </div>
          </TerminalCard>
        </div>
      </section>
    </main>
  );
}
