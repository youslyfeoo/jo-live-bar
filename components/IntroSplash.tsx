"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const VISIBLE_MS = 2600;
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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950 transition-opacity duration-500 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="relative w-48 overflow-hidden rounded shadow-2xl shadow-black/60 sm:w-56 animate-[logo-reveal_0.9s_ease-out_both]">
        <Image
          src="/images/couverture-jo-live-bar.png"
          alt=""
          width={604}
          height={805}
          className="w-full"
          priority
        />
        <div className="pointer-events-none absolute inset-0 animate-[sheen_1.8s_ease-in-out_0.4s_1] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      <style>{`
        @keyframes logo-reveal {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes sheen {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(120%) skewX(-15deg); }
        }
      `}</style>
    </div>
  );
}
