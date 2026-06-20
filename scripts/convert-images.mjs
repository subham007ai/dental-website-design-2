// One-off: convert public/images/*.png to optimized WebP.
import sharp from 'sharp';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'public/images';
let savedTotal = 0;

for (const f of readdirSync(dir)) {
  if (!f.endsWith('.png')) continue;
  const input = join(dir, f);
  const output = join(dir, f.replace(/\.png$/, '.webp'));
  const before = statSync(input).size;
  await sharp(input)
    .webp({ quality: 78, effort: 5 })
    .toFile(output);
  const after = statSync(output).size;
  savedTotal += before - after;
  console.log(
    `${f.padEnd(22)} ${(before / 1024).toFixed(0).padStart(5)}KB -> ${(after / 1024).toFixed(0).padStart(5)}KB`
  );
}
console.log(`\nTotal saved: ${(savedTotal / 1024 / 1024).toFixed(2)} MB`);
