"use client";

import { usePathname } from "next/navigation";

const items = [
  { href: "/#concept", label: "Soirée" },
  { href: "/#reservation", label: "Réserver" },
  { href: "/menu", label: "Carte" },
  { href: "/a-propos", label: "À propos" },
];

function CymbalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden="true">
      <ellipse cx="12" cy="13" rx="10" ry="4" className="fill-accent" />
      <ellipse cx="12" cy="11.5" rx="10" ry="4" className="fill-accent" />
      <ellipse cx="12" cy="10.7" rx="3.2" ry="1.4" className="fill-accent-red/40" />
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/90 px-2 py-2 shadow-lg shadow-black/50 backdrop-blur"
      aria-label="Navigation principale"
    >
      {items.map((item) => {
        const isActive = !item.href.includes("#") && pathname === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
              isActive
                ? "bg-accent text-neutral-950"
                : "text-neutral-300 hover:text-accent"
            }`}
          >
            {item.label}
            <CymbalIcon />
          </a>
        );
      })}
    </nav>
  );
}
