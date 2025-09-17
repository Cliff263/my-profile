"use client";

import { useCallback, useState } from "react";
import { RandomText } from "@/components/random-text";

export function SequentialHeroText() {
  const [step, setStep] = useState<number>(0);
  const next = useCallback(() => setStep((s) => s + 1), []);

  return (
    <div>
      <p className="text-2xl sm:text-3xl opacity-80">
        <RandomText text="Hello," onDone={next} />
      </p>
      <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold leading-tight">
        {step >= 1 ? (
          <>
            <RandomText text="I`m " onDone={next} />
            <span className="code-gradient">
              {step >= 2 ? <RandomText text="TAKUNDA CLIFF JAURE" onDone={next} /> : null}
            </span>
            ,
          </>
        ) : null}
        <br className="hidden sm:block" />
        <span className="text-3xl sm:text-5xl opacity-90">
          {step >= 3 ? <RandomText text=" a Professional " onDone={next} /> : null}
          {step >= 4 ? (
            <span className="code-gradient">
              <RandomText text="DevOps" onDone={next} />
            </span>
          ) : null}
          {step >= 5 ? <RandomText text=" & " onDone={next} /> : null}
          {step >= 6 ? (
            <span className="code-gradient">
              <RandomText text="Full-Stack" onDone={next} />
            </span>
          ) : null}
          {step >= 7 ? <RandomText text=" Engineer." /> : null}
        </span>
      </h1>
    </div>
  );
}


