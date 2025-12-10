import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-cyber-green font-mono text-sm">02.</span>
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Execution_Logs</h2>
        </div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-0 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-black border border-cyber-green"></div>

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h3 className="text-xl font-bold text-white hover:text-cyber-green transition-colors">
                  {exp.role}
                </h3>
                <span className="text-cyber-green font-mono text-sm">@ {exp.company}</span>
              </div>

              <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider">
                [{exp.period}]
              </div>

              <div className="bg-gray-900/20 border border-gray-800 p-6 hover:border-gray-600 transition-colors">
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm font-mono leading-relaxed flex items-start">
                      <span className="text-cyber-green mr-2">$</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-1 border border-gray-700 text-gray-400 hover:text-cyber-green hover:border-cyber-green transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;