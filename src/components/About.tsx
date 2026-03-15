import { motion } from 'motion/react';
import { resumeData } from '../data/resume';

export function About() {
  const { basics } = resumeData;

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt={basics.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-teal-500/30 rounded-2xl -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
              {basics.summary.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
