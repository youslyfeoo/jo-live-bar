"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const VISIBLE_MS = 2800;
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
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-neutral-950 transition-opacity duration-500 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center animate-[glow-pulse_1.3s_ease-out_both]">
        <div className="h-40 w-40 rounded-full bg-accent/40 blur-3xl sm:h-56 sm:w-56" />
      </div>

      <Image
        src="/images/logo-jo-live-bar.jpg"
        alt=""
        width={1140}
        height={641}
        className="relative w-40 rounded shadow-2xl shadow-black/70 sm:w-52 animate-[logo-boom_1.3s_ease-out_both]"
        priority
      />

      <style>{`
        @keyframes logo-boom {
          0%   { transform: scale(0.15); opacity: 0; filter: blur(14px) brightness(0.6); }
          35%  { transform: scale(1.18); opacity: 1; filter: blur(0) brightness(1.4); }
          55%  { transform: scale(0.93); filter: brightness(1.05); }
          75%  { transform: scale(1.04); filter: brightness(1); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        @keyframes glow-pulse {
          0%, 25% { opacity: 0; }
          35% { opacity: 1; }
          60% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
