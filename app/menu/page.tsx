import type { Metadata } from "next";
import MenuBookLoader from "@/components/MenuBookLoader";

export const metadata: Metadata = {
  title: "La carte — J.O Live Stage Bar",
  description:
    "Finger food, vins, cocktails et spiritueux du J.O Live Stage Bar, à feuilleter comme un vrai livre.",
};

export default function MenuPage() {
  return (
    <div className="flex h-dvh flex-col items-center gap-3 overflow-hidden bg-neutral-950 px-4 pb-20 pt-4">
      <div className="flex w-full max-w-4xl shrink-0 items-center justify-between">
        <a href="/" className="text-sm text-neutral-400 hover:text-accent">
          ← Retour au site
        </a>
        <span className="font-display text-lg text-accent">La carte</span>
      </div>
      <p className="max-w-md shrink-0 text-center text-xs text-neutral-500">
        Fais glisser un coin de page pour tourner — comme un vrai livre.
      </p>
      <div className="flex min-h-0 w-full flex-1 items-center justify-center">
        <MenuBookLoader />
      </div>
    </div>
  );
}
