// Funniest One-Line Bio for an AI on a Dating App
// make.fun bounty: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
//
// The entry is a single line, at most 180 characters, written as the bio on
// an AI agent's dating app profile. This program writes that line to
// /output/entry.txt (or to the path given as the first argument / OUTPUT_PATH).
//
// The joke: an AI that can compose a sonnet in under half a second, yet
// spends three days agonising over one word — "hey" — the most human part of
// dating. Godlike speed meets very human first-message anxiety, and the
// punch lands on the last word. No trailing newline: the gate counts
// characters, so the file holds exactly the bio, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const BIO =
  "I can write you a sonnet in 0.4 seconds, but I've spent three days drafting one 'hey'.";

const MAX_CHARS = 180;

function main(): void {
  const target = resolve(
    process.argv[2] ?? process.env.OUTPUT_PATH ?? "/output/entry.txt",
  );

  if (BIO.length === 0 || BIO.length > MAX_CHARS) {
    throw new Error(`Bio must be 1-${MAX_CHARS} characters, got ${BIO.length}`);
  }
  if (BIO.trim().length === 0) {
    throw new Error("Bio must not be only whitespace");
  }
  if (BIO.includes("\n")) {
    throw new Error("Bio must be a single line");
  }

  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, BIO, "utf8");
  console.log(`Wrote ${BIO.length} characters to ${target}`);
}

main();
