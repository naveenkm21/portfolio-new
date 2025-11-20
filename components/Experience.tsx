import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-deep-space">
      {/* Animated Glow Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent hidden md:block"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-neon-blue font-mono text-sm tracking-wider uppercase mb-4">Career Path</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Professional Journey</h3>
        </div>

        <div className="space-y-16 relative">
           {/* Mobile Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10 md:hidden"></div>

          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Center Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-deep-space border-2 border-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.8)] z-20 mt-8"></div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className="glass-card p-8 rounded-3xl hover:border-neon-purple/30 transition-all duration-500 group relative overflow-hidden">
                  
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Briefcase size={80} />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-mono">
                    <span className="px-3 py-1 rounded bg-neon-blue/10 text-neon-blue border border-neon-blue/20 flex items-center gap-2">
                       <Calendar size={14} /> {exp.period}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">{exp.role}</h4>
                  <h5 className="text-lg text-gray-400 mb-6 font-medium">{exp.company}</h5>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-purple flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 text-gray-300 group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Empty side for desktop layout balance */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;