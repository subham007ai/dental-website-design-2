const fs = require('fs');
const path = require('path');
const { getSddWorkspace } = require('./sdd-workspace');

function extractTaskBrief(planFile, taskNum, outFile) {
  if (!fs.existsSync(planFile)) {
    console.error(`no such plan file: ${planFile}`);
    process.exit(2);
  }

  const content = fs.readFileSync(planFile, 'utf8');
  const lines = content.split(/\r?\n/);
  
  let inTask = false;
  let inFence = false;
  const taskLines = [];

  const taskRegex = new RegExp(`^#+[ \\t]+Task[ \\t]+${taskNum}([^0-9]|$)`, 'i');
  const anyTaskRegex = /^#+[ \t]+Task[ \t]+[0-9]+/i;

  for (const line of lines) {
    if (line.startsWith('```')) {
      inFence = !inFence;
    }

    if (!inFence && anyTaskRegex.test(line)) {
      if (taskRegex.test(line)) {
        inTask = true;
      } else {
        inTask = false;
      }
    }

    if (inTask) {
      taskLines.push(line);
    }
  }

  if (taskLines.length === 0) {
    console.error(`task ${taskNum} not found in ${planFile}`);
    process.exit(3);
  }

  if (!outFile) {
    const dir = getSddWorkspace();
    outFile = path.join(dir, `task-${taskNum}-brief.md`);
  }

  fs.writeFileSync(outFile, taskLines.join('\n'));
  console.log(`wrote ${outFile}: ${taskLines.length} lines`);
  return outFile;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2 || args.length > 3) {
    console.error('usage: node task-brief.js PLAN_FILE TASK_NUMBER [OUTFILE]');
    process.exit(2);
  }
  extractTaskBrief(args[0], args[1], args[2]);
}
