// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I told my smart fridge it was gaining weight — now it only opens for the salad and silently judges me every time I reach for the ice cream.";

if (!ENTRY || ENTRY.length === 0) {
  throw new Error("ENTRY must not be empty");
}
if (ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.length > 200) {
  throw new Error(`ENTRY must be at most 200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters)`);
