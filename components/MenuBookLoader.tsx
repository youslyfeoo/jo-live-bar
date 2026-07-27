"use client";

import dynamic from "next/dynamic";

const MenuBook = dynamic(() => import("./MenuBook"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] w-[340px] items-center justify-center rounded border border-neutral-800 text-sm text-neutral-500">
      Chargement de la carte…
    </div>
  ),
});

export default function MenuBookLoader() {
  return <MenuBook />;
}
