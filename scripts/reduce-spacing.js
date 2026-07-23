const fs = require('fs');
const path = require('path');

const replacements = {
  'py-32': 'py-20',
  'py-24': 'py-16',
  'pt-32': 'pt-20',
  'pt-24': 'pt-16',
  'pb-32': 'pb-20',
  'pb-24': 'pb-16',
  'my-32': 'my-20',
  'my-24': 'my-16',
  'mt-32': 'mt-20',
  'mt-24': 'mt-16',
  'mb-32': 'mb-20',
  'mb-24': 'mb-16',
  'gap-32': 'gap-20',
  'gap-24': 'gap-16'
};

const dirs = [
  path.join(__dirname, '..', 'app'),
  path.join(__dirname, '..', 'components')
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const [oldClass, newClass] of Object.entries(replacements)) {
    // We want to replace the class name only, so we match it with word boundaries
    const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
    content = content.replace(regex, newClass);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

dirs.forEach(processDirectory);
console.log("Done.");
