const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { getSddWorkspace } = require('./sdd-workspace');

function generateReviewPackage(base, head, outFile) {
  try {
    execSync(`git rev-parse --verify --quiet "${base}"`);
    execSync(`git rev-parse --verify --quiet "${head}"`);
  } catch (err) {
    console.error(`Invalid BASE or HEAD: ${base}..${head}`);
    process.exit(2);
  }

  const baseShort = execSync(`git rev-parse --short "${base}"`).toString().trim();
  const headShort = execSync(`git rev-parse --short "${head}"`).toString().trim();

  if (!outFile) {
    const dir = getSddWorkspace();
    outFile = path.join(dir, `review-${baseShort}..${headShort}.diff`);
  }

  const commits = execSync(`git log --oneline "${base}..${head}"`).toString();
  const stat = execSync(`git diff --stat "${base}..${head}"`).toString();
  const diff = execSync(`git diff -U10 "${base}..${head}"`).toString();

  const pkgContent = [
    `# Review package: ${base}..${head}`,
    '',
    '## Commits',
    commits,
    '',
    '## Files changed',
    stat,
    '',
    '## Diff',
    diff
  ].join('\n');

  fs.writeFileSync(outFile, pkgContent);
  const commitCount = execSync(`git rev-list --count "${base}..${head}"`).toString().trim();
  console.log(`wrote ${outFile}: ${commitCount} commit(s), ${pkgContent.length} bytes`);
  return outFile;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2 || args.length > 3) {
    console.error('usage: node review-package.js BASE HEAD [OUTFILE]');
    process.exit(2);
  }
  generateReviewPackage(args[0], args[1], args[2]);
}
