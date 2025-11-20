import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA, SKILL_ICONS } from '../constants';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-32 relative bg-[#03030a]">
      {/* Background Elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-neon-blue font-mono text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-neon-blue"></span>
              Technical Arsenal
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Performance</span>
            </h3>
            <p className="text-gray-400 text-lg">
              A curated stack of modern technologies I use to build robust, scalable applications.
            </p>
          </div>
          <Cpu className="text-gray-700 w-24 h-24 opacity-20 animate-spin-slow hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((category, index) => {
            const Icon = SKILL_ICONS[category.name] || SKILL_ICONS['Languages'];
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neon-blue/20 group-hover:text-neon-blue transition-all duration-300 text-gray-400">
                    <Icon size={28} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 group-hover:border-neon-blue/30 transition-colors">
                    {category.name}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={skill} 
                        className="text-sm font-mono px-3 py-1.5 rounded bg-[#0a0a12] text-gray-300 border border-white/10 hover:border-neon-blue/50 hover:text-white hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;