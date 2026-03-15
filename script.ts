import fs from 'fs';
import path from 'path';

const files = [
  'src/App.tsx',
  'src/components/Hero.tsx',
  'src/components/Experience.tsx',
  'src/components/Projects.tsx',
  'src/components/Navigation.tsx',
  'src/components/Footer.tsx',
  'src/components/SkillsEducation.tsx',
  'src/components/Achievements.tsx',
  'src/components/ParticleBackground.tsx',
  'src/components/CustomCursor.tsx',
  'src/components/SplashScreen.tsx'
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace colors
  content = content.replace(/indigo-/g, 'accent-');
  content = content.replace(/emerald-/g, 'accent-');
  content = content.replace(/teal-/g, 'accent-');
  
  // Replace backgrounds
  content = content.replace(/bg-slate-950/g, 'bg-slate-50 dark:bg-slate-950');
  content = content.replace(/bg-slate-900/g, 'bg-slate-100 dark:bg-slate-900');
  
  // Replace text
  content = content.replace(/text-slate-50\b/g, 'text-slate-900 dark:text-slate-50');
  content = content.replace(/text-white\b/g, 'text-slate-900 dark:text-white');
  content = content.replace(/text-slate-300/g, 'text-slate-600 dark:text-slate-300');
  content = content.replace(/text-slate-400/g, 'text-slate-500 dark:text-slate-400');
  
  // Replace opacities
  content = content.replace(/bg-white\/5\b/g, 'bg-black/5 dark:bg-white/5');
  content = content.replace(/bg-white\/10\b/g, 'bg-black/10 dark:bg-white/10');
  content = content.replace(/bg-white\/20\b/g, 'bg-black/20 dark:bg-white/20');
  content = content.replace(/border-white\/10\b/g, 'border-black/10 dark:border-white/10');
  
  // Replace gradients and text opacities
  content = content.replace(/from-white/g, 'from-slate-900 dark:from-white');
  content = content.replace(/to-white\/60/g, 'to-slate-900/60 dark:to-white/60');
  content = content.replace(/text-white\/50/g, 'text-slate-900/50 dark:text-white/50');
  content = content.replace(/text-white\/20/g, 'text-slate-900/20 dark:text-white/20');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}
console.log('Theme classes updated successfully.');
