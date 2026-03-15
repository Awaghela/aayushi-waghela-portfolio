import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, Code, Award, BookOpen } from 'lucide-react';

export function SkillsEducation() {
  return (
    <section id="skills-education" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Skills Section */}
        <div className="mb-24">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
              Skills & Expertise
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
              A comprehensive toolkit for building modern, scalable, and high-performance software systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#0a0a1a] border border-teal-500/30 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/60 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)]"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-2 mr-3 rounded-full bg-teal-500" />
                  {skillGroup.category}
                </h3>
                <div className="h-px w-full bg-teal-500/30 mb-6" />
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm font-medium text-slate-300 bg-[#16162a] rounded-lg border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
              Education
            </h2>
          </div>

          <div className="space-y-12">
            {resumeData.education.map((edu: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-500 transition-colors duration-300">
                    {edu.institution}
                  </h3>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {edu.dates}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-2 text-teal-600 dark:text-teal-400 font-medium mb-3">
                  <span>{edu.degree}</span>
                  {edu.gpa && (
                    <>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span>GPA: {edu.gpa}</span>
                    </>
                  )}
                </div>

                {edu.coursework && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-900 dark:text-slate-200 mr-1">Coursework:</span>
                    {edu.coursework.join(", ")}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
