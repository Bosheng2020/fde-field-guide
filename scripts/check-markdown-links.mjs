#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const skippedDirectories = new Set([".git", "node_modules"]);
const markdownFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && skippedDirectories.has(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    if (entry.isFile() && entry.name.endsWith(".md")) markdownFiles.push(path);
  }
}

walk(root);

const failures = [];
const markdownLink = /\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;

for (const file of markdownFiles) {
  const content = readFileSync(file, "utf8");
  for (const match of content.matchAll(markdownLink)) {
    let target = match[1].replace(/^<|>$/g, "");
    if (/^(?:https?:|mailto:|tel:|data:)/i.test(target) || target.startsWith("#")) continue;
    target = decodeURIComponent(target.split("#", 1)[0]);
    if (!target) continue;
    const resolvedTarget = resolve(dirname(file), target);
    if (!existsSync(resolvedTarget)) {
      failures.push(`${file.slice(root.length + 1)} -> ${match[1]}`);
    }
  }
}

if (failures.length) {
  console.error("Broken local Markdown links:\n" + failures.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Checked ${markdownFiles.length} Markdown files; all local links resolve.`);
