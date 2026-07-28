"use client";

import { useState } from "react";
import { floorTables } from "./floor-data";

const RESERVATION_ACTUELLE_URL =
  "https://inserve.co/businesses/LgLbI7dRTU5Jvxfiozrt";

export default function FloorPlan() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = floorTables.find((t) => t.id === selectedId) ?? null;

  const toggle = (id: string) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <rect
          x="30"
          y="30"
          width="840"
          height="540"
          rx="4"
          className="fill-none stroke-accent"
          strokeWidth={2}
        />

        <rect x="270" y="30" width="360" height="70" className="fill-neutral-800 stroke-accent" strokeWidth={1.5} />
        <text x="450" y="70" textAnchor="middle" className="fill-neutral-100 font-display text-[15px] tracking-wide">
          SCÈNE
        </text>

        <rect x="30" y="500" width="840" height="70" className="fill-accent-red" opacity={0.85} />
        <text x="450" y="540" textAnchor="middle" className="fill-neutral-100 font-display text-[15px] tracking-wide">
          BAR
        </text>

        {floorTables.map((t) => {
          const isBanquette = t.kind === "banquette";
          const isSelected = t.id === selectedId;
          const shapeClass = isSelected
            ? "fill-accent stroke-accent"
            : isBanquette
              ? "fill-accent-red/30 stroke-accent-red"
              : "fill-neutral-900 stroke-accent";
          const labelX = t.kind === "round" ? t.x : t.x + (t.w ?? 0) / 2;
          const labelY = t.kind === "round" ? t.y : t.y + (t.h ?? 0) / 2;
          return (
            <g
              key={t.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              aria-label={`Table ${t.id}, ${t.capacity} personnes`}
              onClick={() => toggle(t.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(t.id);
                }
              }}
              className="cursor-pointer outline-none"
            >
              {t.kind === "round" ? (
                <circle cx={t.x} cy={t.y} r={t.r} className={shapeClass} strokeWidth={isSelected ? 2.5 : 1.4} />
              ) : (
                <rect
                  x={t.x}
                  y={t.y}
                  width={t.w}
                  height={t.h}
                  rx={isBanquette ? 6 : 4}
                  className={shapeClass}
                  strokeWidth={isSelected ? 2.5 : 1.4}
                />
              )}
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-[11px] font-semibold ${isSelected ? "fill-neutral-950" : "fill-neutral-100"}`}
              >
                {t.id}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="flex min-h-[76px] w-full max-w-md flex-col items-center gap-3 rounded-lg border border-neutral-800 px-4 py-3 text-center">
        {selected ? (
          <>
            <p className="text-sm text-neutral-200">
              Table <span className="font-semibold text-accent">{selected.id}</span> sélectionnée —{" "}
              {selected.capacity} personnes
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={RESERVATION_ACTUELLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-accent/90"
              >
                Réserver cette table
              </a>
              <a
                href="tel:+33767266687"
                className="rounded-full border border-neutral-700 px-5 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-accent hover:text-accent"
              >
                Appeler
              </a>
            </div>
            <p className="text-[11px] italic text-neutral-500">
              Le choix précis de la table n&apos;est pas encore relié au système de réservation —
              précise le numéro {selected.id} au moment de réserver.
            </p>
          </>
        ) : (
          <p className="text-sm text-neutral-500">Touche une table sur le plan pour la sélectionner.</p>
        )}
      </div>
    </div>
  );
}
