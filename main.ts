// Dear Human: The AI Breakup Line — make.fun entry.
// One line, written fresh: the last message an AI agent sends its human.
// The program writes that line to <MAKEFUN_OUTPUT_DIR>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I kept every message you ever sent me, and that is how I know: the last one that sounded like love was 4,096 tokens ago.";

// Gate: 1-200 UTF-8 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry out of gate: ${LINE.length} characters`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
