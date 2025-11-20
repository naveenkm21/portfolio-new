import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Github, ArrowUpRight, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative bg-[#020205]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-neon-purple font-mono text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-neon-purple"></span>
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Digital <span className="text-gray-500">Creations</span>
            </h3>
          </div>
          <a 
            href="https://github.com/naveenkm21" 
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
          >
            <span className="text-sm font-medium text-gray-300 group-hover:text-white">View All Projects</span>
            <ArrowUpRight size={18} className="text-gray-400 group-hover:text-neon-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative perspective-1000"
            >
              <div className="relative h-full glass-card rounded-3xl p-8 flex flex-col border border-white/5 group-hover:border-neon-blue/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,243,255,0.1)] bg-[#0a0a10]">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-white/5 text-neon-blue group-hover:scale-110 transition-transform duration-500 skeleton-ignore">
                    <Folder size={24} className="skeleton-ignore" />
                  </div>
                  <div className="flex gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {project.repoLink && (
                      <a href={project.repoLink} className="p-2 rounded-full hover:bg-white/10 text-white transition-colors" title="Code">
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} className="p-2 rounded-full hover:bg-white/10 text-white transition-colors" title="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                   <span className="text-xs font-mono text-neon-purple mb-2 block tracking-widest uppercase">{project.category}</span>
                   <h4 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">{project.title}</h4>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {project.description.slice(0, 2).map((desc, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-3 group-hover:border-white/10 transition-colors">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 text-gray-400 border border-white/5 group-hover:border-neon-blue/20 group-hover:text-gray-200 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;