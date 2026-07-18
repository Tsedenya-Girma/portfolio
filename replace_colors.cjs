const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/tsed/Desktop/WEB APPS/zedian-folio-shine/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { regex: /bg-\[#0f0b07\]/g, replacement: 'bg-bg-primary' },
  { regex: /from-\[#0f0b07\]/g, replacement: 'from-bg-primary' },
  { regex: /to-\[#0f0b07\]/g, replacement: 'to-bg-primary' },
  
  { regex: /bg-\[#1a140e\]/g, replacement: 'bg-bg-secondary' },
  { regex: /from-\[#1a140e\]/g, replacement: 'from-bg-secondary' },
  { regex: /to-\[#1a140e\]/g, replacement: 'to-bg-secondary' },
  
  { regex: /text-\[#f5efe8\]/g, replacement: 'text-text-primary' },
  { regex: /text-\[#a0907f\]/g, replacement: 'text-text-secondary' },
  
  { regex: /text-\[#b68a5c\]/g, replacement: 'text-accent' },
  { regex: /bg-\[#b68a5c\]/g, replacement: 'bg-accent' },
  { regex: /border-\[#b68a5c\]/g, replacement: 'border-accent' },
  { regex: /from-\[#b68a5c\]/g, replacement: 'from-accent' },
  { regex: /to-\[#b68a5c\]/g, replacement: 'to-accent' },
  { regex: /via-\[#b68a5c\]/g, replacement: 'via-accent' },
  { regex: /shadow-\[0_0_12px_#b68a5c\]/g, replacement: 'shadow-[0_0_12px_var(--color-accent)]' },
  { regex: /shadow-\[0_0_10px_#b68a5c\]/g, replacement: 'shadow-[0_0_10px_var(--color-accent)]' },
  { regex: /WebkitTextStroke: "2px #b68a5c"/g, replacement: 'WebkitTextStroke: "2px var(--color-accent)"' },
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  replacements.forEach(r => {
    content = content.replace(r.regex, r.replacement);
  });
  fs.writeFileSync(filePath, content);
});
console.log("Replacement complete.");
