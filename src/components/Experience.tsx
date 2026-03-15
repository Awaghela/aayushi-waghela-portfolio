import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { resumeData } from '../data/resume';
import { Calendar, MapPin } from 'lucide-react';

function ExperienceCard({ experience, index }: { experience: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0 border-l border-slate-200 dark:border-white/10"
    >
      <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-teal-500 ring-4 ring-white dark:ring-slate-950" />

      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl hover:border-teal-500/30 transition-all duration-300">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {experience.role} · {experience.company}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-400">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1.5 opacity-70" />
            {experience.dates}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1.5 opacity-70" />
            {experience.location}
          </span>
        </div>
        
        <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
          {experience.bullets.map((bullet: string, i: number) => (
            <li key={i} className="flex items-start text-base">
              <span className="mr-3 text-teal-500/50 mt-1.5 shrink-0 text-xs">●</span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" ref={containerRef} className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
            Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            High-impact software engineering initiatives across cloud infrastructure, distributed systems, and frontend development.
          </p>
        </div>

        <div className="space-y-0">
          {resumeData.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
