import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Download, ChevronDown } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function Hero() {
  const { basics } = resumeData;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-12 overflow-hidden text-center text-slate-900 dark:text-white">
      <div className="z-10 flex flex-col items-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center px-4 py-1.5 mb-2 text-sm font-medium rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-teal-600 dark:text-teal-300 backdrop-blur-sm"
        >
          <span className="flex items-center">
            <span className="w-2 h-2 mr-2 rounded-full bg-teal-500 animate-pulse"></span>
            Available for Opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center text-sm"
        >
          <span className="w-1 h-1 rounded-full bg-slate-400 mr-2"></span>
          Boulder, CO
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 flex flex-wrap justify-center gap-x-4"
        >
          {basics.name}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0.4
              }
            }
          }}
          className="mb-8 text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 max-w-3xl mx-auto min-h-[3em]"
        >
          {"Software Engineer building scalable full-stack applications, cloud infrastructure, and AI/ML solutions.".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-[2px] h-[1em] bg-teal-500 ml-1 align-middle"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300"
        >
          <span className="px-3 py-1 rounded-lg bg-slate-200/30 dark:bg-white/5 border border-slate-300/50 dark:border-white/10">
            MSCS @ University of Colorado Boulder
          </span>
          <span className="hidden sm:block text-slate-400">•</span>
          <span className="px-3 py-1 rounded-lg bg-slate-200/30 dark:bg-white/5 border border-slate-300/50 dark:border-white/10">
            Prev SDE Intern @ Amazon Web Services
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Magnetic>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="interactive flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full hover:from-teal-600 hover:to-cyan-600 shadow-[0_0_20px_rgba(20,184,166,0.2)] dark:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </motion.button>
          </Magnetic>

          <Magnetic>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="interactive flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wide text-slate-900 dark:text-white uppercase transition-all bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full hover:bg-slate-300/50 dark:hover:bg-white/10 backdrop-blur-sm"
            >
              Let's Connect
            </motion.a>
          </Magnetic>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12 flex items-center justify-center gap-6"
        >
          <a href={basics.links.find(l => l.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
          </a>
          <a href={basics.links.find(l => l.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
          </a>
          <a href={`mailto:${basics.email}`} className="interactive p-3 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-white/50"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
