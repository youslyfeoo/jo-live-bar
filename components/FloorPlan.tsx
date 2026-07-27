export interface FloorTable {
  id: string;
  kind: "round" | "square" | "banquette";
  capacity: number;
  /** Top-left corner for square/banquette, center for round */
  x: number;
  y: number;
  w?: number;
  h?: number;
  r?: number;
}

export const floorTables: FloorTable[] = [
  { id: "B1", kind: "banquette", capacity: 6, x: 46, y: 140, w: 46, h: 110 },
  { id: "B2", kind: "banquette", capacity: 6, x: 46, y: 330, w: 46, h: 110 },
  { id: "B3", kind: "banquette", capacity: 6, x: 808, y: 140, w: 46, h: 110 },
  { id: "B4", kind: "banquette", capacity: 6, x: 808, y: 330, w: 46, h: 110 },

  { id: "T1", kind: "round", capacity: 2, x: 190, y: 180, r: 22 },
  { id: "T2", kind: "square", capacity: 4, x: 330, y: 158, w: 44, h: 44 },
  { id: "T3", kind: "round", capacity: 2, x: 510, y: 180, r: 22 },
  { id: "T4", kind: "square", capacity: 4, x: 648, y: 158, w: 44, h: 44 },

  { id: "T5", kind: "square", capacity: 4, x: 168, y: 248, w: 44, h: 44 },
  { id: "T6", kind: "round", capacity: 2, x: 352, y: 270, r: 22 },
  { id: "T7", kind: "square", capacity: 4, x: 488, y: 248, w: 44, h: 44 },
  { id: "T8", kind: "round", capacity: 2, x: 670, y: 270, r: 22 },

  { id: "T9", kind: "round", capacity: 2, x: 190, y: 360, r: 22 },
  { id: "T10", kind: "square", capacity: 4, x: 330, y: 338, w: 44, h: 44 },
  { id: "T11", kind: "round", capacity: 2, x: 510, y: 360, r: 22 },
  { id: "T12", kind: "square", capacity: 4, x: 648, y: 338, w: 44, h: 44 },

  { id: "T13", kind: "square", capacity: 4, x: 168, y: 428, w: 44, h: 44 },
  { id: "T14", kind: "round", capacity: 2, x: 352, y: 450, r: 22 },
  { id: "T15", kind: "square", capacity: 4, x: 488, y: 428, w: 44, h: 44 },
  { id: "T16", kind: "round", capacity: 2, x: 670, y: 450, r: 22 },

  { id: "T17", kind: "square", capacity: 4, x: 410, y: 203, w: 44, h: 44 },
  { id: "T18", kind: "square", capacity: 4, x: 410, y: 383, w: 44, h: 44 },
  { id: "T19", kind: "round", capacity: 2, x: 432, y: 315, r: 22 },
  { id: "T20", kind: "round", capacity: 2, x: 270, y: 315, r: 22 },
];

export const floorSummary = {
  total: floorTables.length,
  seats: floorTables.reduce((sum, t) => sum + t.capacity, 0),
  round: floorTables.filter((t) => t.kind === "round").length,
  square: floorTables.filter((t) => t.kind === "square").length,
  banquette: floorTables.filter((t) => t.kind === "banquette").length,
};

export default function FloorPlan() {
  return (
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
        const shapeClass = isBanquette
          ? "fill-accent-red/30 stroke-accent-red"
          : "fill-neutral-900 stroke-accent";
        const labelX = t.kind === "round" ? t.x : t.x + (t.w ?? 0) / 2;
        const labelY = t.kind === "round" ? t.y : t.y + (t.h ?? 0) / 2;
        return (
          <g key={t.id}>
            {t.kind === "round" ? (
              <circle cx={t.x} cy={t.y} r={t.r} className={shapeClass} strokeWidth={1.4} />
            ) : (
              <rect
                x={t.x}
                y={t.y}
                width={t.w}
                height={t.h}
                rx={isBanquette ? 6 : 4}
                className={shapeClass}
                strokeWidth={1.4}
              />
            )}
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-neutral-100 text-[11px] font-semibold"
            >
              {t.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
