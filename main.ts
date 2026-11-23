// Make the Judge Smile — writes one line (max 200 chars) about a small
// good thing that happened today, to /output/entry.txt.
// Pure Node.js stdlib only: no network, no child processes, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "At 5 a.m. the street was asleep, but the satay man was already fanning his coals, and before I could order he pressed the first skewer into my hand — 'on the house, the smoke's still waking up.'";

// The gate allows 1–200 characters; refuse to write an invalid entry.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line is ${line.length} chars, must be 1–200`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
