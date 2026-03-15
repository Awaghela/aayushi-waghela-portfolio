import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function Footer() {
  return (
    <footer className="relative py-12 px-6 overflow-hidden bg-transparent border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white mb-2">
            {resumeData.basics.name}<span className="text-emerald-500">.</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            {resumeData.basics.title}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Magnetic>
            <a
              href={resumeData.basics.links.find(l => l.name === 'GitHub')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive inline-flex p-3 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-300 dark:hover:text-white dark:hover:bg-white/10 transition-all border border-slate-300 dark:border-white/10"
            >
              <Github className="w-5 h-5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={resumeData.basics.links.find(l => l.name === 'LinkedIn')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive inline-flex p-3 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-300 dark:hover:text-white dark:hover:bg-white/10 transition-all border border-slate-300 dark:border-white/10"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="interactive inline-flex p-3 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-300 dark:hover:text-white dark:hover:bg-white/10 transition-all border border-slate-300 dark:border-white/10"
            >
              <Mail className="w-5 h-5" />
            </a>
          </Magnetic>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
      </div>
    </footer>
  );
}
