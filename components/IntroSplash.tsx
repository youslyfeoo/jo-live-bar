"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const VISIBLE_MS = 3600;
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
      <video
        src="/videos/intro-drummer.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-neutral-950/55" />

      <Image
        src="/images/logo-jo-live-bar.jpg"
        alt=""
        width={1140}
        height={641}
        className="relative w-40 rounded shadow-2xl shadow-black/70 sm:w-48 animate-[logo-reveal_0.9s_ease-out_both]"
        priority
      />

      <style>{`
        @keyframes logo-reveal {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
