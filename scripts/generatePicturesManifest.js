// scripts/generatePicturesManifest.js
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const picturesDir = path.join(__dirname, "..", "public", "pictures");
const manifestPath = path.join(picturesDir, "manifest.json");

const allowedExts = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function main() {
  ensureDir(picturesDir);

  const entries = fs.readdirSync(picturesDir, { withFileTypes: true });

  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => allowedExts.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  fs.writeFileSync(manifestPath, JSON.stringify(files, null, 2), "utf8");

  console.log(`✅ Generated ${path.relative(process.cwd(), manifestPath)}`);
  console.log(`   Found ${files.length} image(s) in public/pictures/`);
}

main();
