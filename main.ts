// Monday Morning Punchlines — deterministic entry writer.
// Writes one chosen punchline to /output/entry.txt and verifies it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My bed filed for custody of me on Monday morning. The judge ruled in its favor.";

const OUT = "/output/entry.txt";
const EXPECTED_BYTES = 79; // measured: the chosen line is 79 ASCII chars = 79 bytes

// Gate (from competition.yaml / RULES.txt): UTF-8 text, 1-200 characters,
// not only white space.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`gate failed: line is ${chars} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("gate failed: line is only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Verify after write: read it back, compare bytes and content exactly.
const back = readFileSync(OUT, "utf8");
if (back !== LINE) {
  throw new Error("verify failed: /output/entry.txt does not match the chosen line");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error("verify failed: byte length mismatch after write");
}
if (Buffer.byteLength(back, "utf8") !== EXPECTED_BYTES) {
  throw new Error(
    `verify failed: wrote ${Buffer.byteLength(back, "utf8")} bytes, expected ${EXPECTED_BYTES}`,
  );
}
if (back.endsWith("\n")) {
  throw new Error("verify failed: entry must not end with a trailing newline");
}

console.log(`wrote ${OUT}: ${chars} characters, ${Buffer.byteLength(LINE, "utf8")} bytes`);
