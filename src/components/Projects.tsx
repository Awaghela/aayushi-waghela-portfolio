import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-500">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            A selection of my recent work in cloud computing, machine learning, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-6 rounded-3xl bg-[#11111f] border border-white/10 hover:border-teal-500/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)] h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 rounded-full flex items-center gap-1 border border-teal-500/20">
                  <span className="text-[10px]">★</span> Featured
                </span>
                <div className="flex gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name === 'GitHub' ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>

              <p className="mb-8 text-slate-400 text-sm leading-relaxed">
                {project.bullets.join(" ")}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-500/10 rounded-full border border-teal-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/Awaghela"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/10 bg-[#11111f] text-white font-medium hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
