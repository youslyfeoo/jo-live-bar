"use client";

import { useEffect, useState } from "react";

const VISIBLE_MS = 3200;
const FADE_MS = 600;
const SESSION_KEY = "jo-intro-seen";

export default function IntroSplash() {
  const [phase, setPhase] = useState<"hidden" | "visible" | "fading">("hidden");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);

    if (reducedMotion || alreadySeen) {
      sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("visible");

    const fadeTimer = setTimeout(() => setPhase("fading"), VISIBLE_MS);
    const removeTimer = setTimeout(() => setPhase("hidden"), VISIBLE_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-neutral-950 transition-opacity duration-500 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 320"
        className="w-56 sm:w-64"
        style={{ overflow: "visible" }}
      >
        {/* hi-hat (left) */}
        <ellipse cx="100" cy="78" rx="34" ry="9" className="fill-accent" />
        <ellipse cx="100" cy="72" rx="34" ry="9" className="fill-accent" />
        <line x1="100" y1="87" x2="100" y2="180" stroke="#7d5a22" strokeWidth="4" />

        {/* crash cymbal (right) */}
        <ellipse cx="300" cy="92" rx="38" ry="10" className="fill-accent" />
        <line x1="300" y1="102" x2="300" y2="180" stroke="#7d5a22" strokeWidth="4" />

        {/* impact bursts */}
        <g className="origin-[100px_75px] animate-[hit-flash_0.6s_ease-out_infinite]">
          <circle cx="100" cy="75" r="16" className="fill-accent/40" />
        </g>
        <g
          className="origin-[300px_92px] animate-[hit-flash_0.6s_ease-out_infinite]"
          style={{ animationDelay: "0.3s" }}
        >
          <circle cx="300" cy="92" r="18" className="fill-accent/40" />
        </g>

        {/* bass drum */}
        <ellipse cx="200" cy="240" rx="78" ry="50" className="fill-accent" />
        <ellipse cx="200" cy="240" rx="60" ry="38" className="fill-neutral-950" />
        <text
          x="200"
          y="248"
          textAnchor="middle"
          className="fill-accent font-display"
          fontSize="26"
          letterSpacing="2"
        >
          J·O
        </text>

        {/* drummer silhouette */}
        <circle cx="200" cy="105" r="26" className="fill-accent" />
        <path d="M 150 200 Q 150 130 200 130 Q 250 130 250 200 Z" className="fill-accent" />

        {/* left arm + stick, swinging to hit the hi-hat */}
        <g
          className="origin-[178px_150px] animate-[swing-left_0.6s_ease-in-out_infinite]"
        >
          <line x1="178" y1="150" x2="112" y2="82" stroke="#c99b4a" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* right arm + stick, swinging to hit the crash */}
        <g
          className="origin-[222px_150px] animate-[swing-right_0.6s_ease-in-out_infinite]"
          style={{ animationDelay: "0.3s" }}
        >
          <line x1="222" y1="150" x2="288" y2="98" stroke="#c99b4a" strokeWidth="6" strokeLinecap="round" />
        </g>
      </svg>

      <p className="font-display text-lg uppercase tracking-[0.3em] text-accent">
        J.O Live Stage Bar
      </p>

      <style>{`
        @keyframes swing-left {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-22deg); }
        }
        @keyframes swing-right {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(22deg); }
        }
        @keyframes hit-flash {
          0%, 100% { opacity: 0.9; transform: scale(1.15); }
          50% { opacity: 0; transform: scale(0.6); }
        }
      `}</style>
    </div>
  );
}
