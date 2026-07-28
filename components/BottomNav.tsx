"use client";

import { usePathname } from "next/navigation";

const items = [
  { href: "/#reservation", label: "Réserver", image: "/images/nav-reserve.png", showLabel: false },
  { href: "/menu", label: "Menu", image: "/images/nav-menu.png", showLabel: false },
  { href: "/a-propos", label: "À propos", image: "/images/nav-a-propos.png", showLabel: false },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-3"
      aria-label="Navigation principale"
    >
      {items.map((item) => {
        const isActive = !item.href.includes("#") && pathname === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            style={{ backgroundImage: `url('${item.image}')` }}
            className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cover bg-center shadow-[0_4px_10px_rgba(0,0,0,0.6)] transition-transform hover:scale-105 sm:h-[72px] sm:w-[72px] ${
              isActive ? "ring-2 ring-accent-red ring-offset-2 ring-offset-neutral-950" : ""
            }`}
          >
            {item.showLabel ? (
              <span className="rounded-full bg-neutral-950/70 px-2 py-1 text-center text-[9px] font-semibold leading-tight text-[#f3e6c8] sm:text-[10px]">
                {item.label}
              </span>
            ) : (
              <span className="sr-only">{item.label}</span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
