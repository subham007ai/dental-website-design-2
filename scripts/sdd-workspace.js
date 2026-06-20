const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getSddWorkspace() {
  const root = execSync('git rev-parse --show-toplevel').toString().trim();
  const dir = path.join(root, '.superpowers', 'sdd');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, '.gitignore'), '*\n');
  return dir;
}

if (require.main === module) {
  console.log(getSddWorkspace());
}

module.exports = { getSddWorkspace };
