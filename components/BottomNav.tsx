"use client";

import { usePathname } from "next/navigation";

const items = [
  { href: "/#concept", label: "Soirée" },
  { href: "/#reservation", label: "Réserver" },
  { href: "/menu", label: "Carte" },
  { href: "/a-propos", label: "À propos" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2"
      aria-label="Navigation principale"
    >
      {items.map((item) => {
        const isActive = !item.href.includes("#") && pathname === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            className={`flex h-11 items-center justify-center rounded-full bg-gradient-to-b from-accent to-accent/80 px-4 text-center text-[10px] font-semibold leading-tight text-neutral-950 shadow-lg shadow-black/50 transition-transform hover:scale-105 sm:h-12 sm:px-5 sm:text-xs ${
              isActive ? "ring-2 ring-accent-red ring-offset-2 ring-offset-neutral-950" : ""
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
