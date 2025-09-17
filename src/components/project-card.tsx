"use client";

import * as React from 'react';

interface Project {
  name: string;
  tools: string[];
  role: string;
  description: string;
  code?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-panel border border-black/10 dark:border-white/10 relative rounded-lg bg-background/60 backdrop-blur w-full glow-card gradient-glow">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-purple-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-amber-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-emerald-500"></div>
        </div>
        <p className="text-center ml-3 text-cyan-500 dark:text-cyan-400 text-base lg:text-xl font-semibold">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t border-black/10 dark:border-white/10 px-4 lg:px-8 py-4 lg:py-6">
        <code className="font-mono text-sm leading-relaxed">
          <div className="blink">
            <span className="mr-2 text-purple-600 dark:text-purple-400">const</span>
            <span className="mr-2 text-black dark:text-white">project</span>
            <span className="mr-2 text-purple-600 dark:text-purple-400">=</span>
            <span className="text-black/60 dark:text-white/60">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-black dark:text-white">name:</span>
            <span className="text-black/60 dark:text-white/60">{`'`}</span>
            <span className="text-amber-600 dark:text-amber-400">{project.name}</span>
            <span className="text-black/60 dark:text-white/60">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-black dark:text-white">tools:</span>
            <span className="text-black/60 dark:text-white/60">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-600 dark:text-amber-400">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-black/60 dark:text-white/60">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-black/60 dark:text-white/60">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-black dark:text-white">myRole:</span>
            <span className="text-orange-600 dark:text-orange-400">{project.role}</span>
            <span className="text-black/60 dark:text-white/60">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-black dark:text-white">Description:</span>
            <span className="text-cyan-600 dark:text-cyan-400">{' ' + project.description}</span>
            <span className="text-black/60 dark:text-white/60">,</span>
          </div>
          <div><span className="text-black/60 dark:text-white/60">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
