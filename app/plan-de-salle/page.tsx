import type { Metadata } from "next";
import FloorPlan from "@/components/FloorPlan";
import { floorSummary } from "@/components/floor-data";

export const metadata: Metadata = {
  title: "Plan de salle — J.O Live Stage Bar",
  description: "Le plan de salle du J.O Live Stage Bar : bar, scène et disposition des tables.",
};

export default function PlanDeSallePage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-neutral-950 px-4 pt-10 pb-28">
      <div className="flex w-full max-w-3xl items-center justify-between">
        <a href="/" className="text-sm text-neutral-400 hover:text-accent">
          ← Retour au site
        </a>
        <span className="font-display text-lg text-accent">Plan de salle</span>
      </div>

      <div className="w-full max-w-3xl">
        <FloorPlan />
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-xs text-neutral-400">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full border border-accent bg-neutral-900" />
          Table ronde — 2 personnes ({floorSummary.round})
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded border border-accent bg-neutral-900" />
          Table carrée — 4 personnes ({floorSummary.square})
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-4 rounded border border-accent-red bg-accent-red/30" />
          Banquette — 6 personnes ({floorSummary.banquette})
        </span>
      </div>

      <p className="max-w-md text-center text-xs text-neutral-500">
        {floorSummary.total} tables · ~{floorSummary.seats} places assises. La disponibilité en
        temps réel arrivera avec le futur système de réservation en ligne.
      </p>
    </div>
  );
}
