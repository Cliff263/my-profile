import { Suspense } from "react";
import TerminalCard from "./terminal-card";

export function HeroTerminal() {
  return (
    <div className="hidden lg:block">
      <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div>}>
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
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-token-string">&apos;Linux&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;Python&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;Typescript&apos;</span><span className="code-token-punc">,</span> <span className="code-token-string">&apos;AWS&apos;</span><span className="code-token-punc">]</span><span className="code-token-punc">,</span>
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
      </Suspense>
    </div>
  );
}
