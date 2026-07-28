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
  { id: "B1", kind: "banquette", capacity: 6, x: 46, y: 245, w: 46, h: 110 },
  { id: "B2", kind: "banquette", capacity: 6, x: 808, y: 245, w: 46, h: 110 },

  { id: "T1", kind: "round", capacity: 2, x: 190, y: 220, r: 24 },
  { id: "T2", kind: "square", capacity: 4, x: 298, y: 198, w: 46, h: 46 },
  { id: "T3", kind: "round", capacity: 2, x: 450, y: 220, r: 24 },
  { id: "T4", kind: "square", capacity: 4, x: 558, y: 198, w: 46, h: 46 },
  { id: "T5", kind: "round", capacity: 2, x: 710, y: 220, r: 24 },

  { id: "T6", kind: "square", capacity: 4, x: 167, y: 358, w: 46, h: 46 },
  { id: "T7", kind: "round", capacity: 2, x: 320, y: 380, r: 24 },
  { id: "T8", kind: "square", capacity: 4, x: 427, y: 358, w: 46, h: 46 },
  { id: "T9", kind: "round", capacity: 2, x: 580, y: 380, r: 24 },
  { id: "T10", kind: "square", capacity: 4, x: 687, y: 358, w: 46, h: 46 },
];

export const floorSummary = {
  total: floorTables.length,
  seats: floorTables.reduce((sum, t) => sum + t.capacity, 0),
  round: floorTables.filter((t) => t.kind === "round").length,
  square: floorTables.filter((t) => t.kind === "square").length,
  banquette: floorTables.filter((t) => t.kind === "banquette").length,
};
