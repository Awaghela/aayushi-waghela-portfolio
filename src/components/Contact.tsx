import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function Contact() {
  const { basics } = resumeData;

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-transparent text-slate-900 dark:text-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/50">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Open to collaborating on full-stack products, data-driven solutions, and AI/ML-powered applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Magnetic>
              <a 
                href="/resume.pdf"
                download
                className="interactive flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-teal-500/20"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href={`mailto:${basics.email}`}
                className="interactive px-8 py-4 rounded-full bg-transparent border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              >
                Let's Connect
              </a>
            </Magnetic>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <Magnetic>
              <a href={basics.links.find(l => l.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="interactive w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                <Github className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={basics.links.find(l => l.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="interactive w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={`mailto:${basics.email}`} className="interactive w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                <Mail className="w-6 h-6" />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
