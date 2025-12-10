import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-cyber-green font-mono text-sm">04.</span>
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Tech_Stack_Dump</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-gray-800 p-6 bg-black relative overflow-hidden group"
            >
              {/* Header */}
              <h3 className="text-cyber-green font-mono text-sm mb-4 border-b border-gray-900 pb-2 flex justify-between">
                <span>{category.name.toUpperCase()}</span>
                <span className="text-gray-600">[{category.skills.length}]</span>
              </h3>

              {/* Code-like list */}
              <div className="font-mono text-sm space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={skill} className="flex items-center group/item">
                    <span className="text-gray-600 mr-4 w-6 text-right">{String(i).padStart(2, '0')}</span>
                    <span className="text-gray-300 group-hover/item:text-white group-hover/item:translate-x-2 transition-all duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-4xl font-bold text-white">{String(index + 1).padStart(2, '0')}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;