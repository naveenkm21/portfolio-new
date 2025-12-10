import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-b border-gray-800 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="flex items-center gap-2">
            <span className="text-cyber-green font-mono text-sm">03.</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Deployed_Units</h2>
          </div>
          <a href="https://github.com/naveenkm21" className="text-xs font-mono text-cyber-green hover:underline flex items-center gap-1">
            VIEW_ALL_REPOSITORIES <ArrowUpRightIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group terminal-card p-6 transition-all"
            >
              {/* Corner Brackets handled in CSS */}
              <div className="corner-brackets h-full flex flex-col">
                
                <div className="flex justify-between items-start mb-6">
                  <Folder className="text-cyber-green" size={24} />
                  <div className="flex gap-4">
                    {project.repoLink && <a href={project.repoLink} className="text-gray-500 hover:text-white"><Github size={18} /></a>}
                    {project.liveLink && <a href={project.liveLink} className="text-gray-500 hover:text-white"><ExternalLink size={18} /></a>}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-green transition-colors">{project.title}</h3>
                <div className="text-xs text-gray-500 font-mono mb-4 uppercase">{project.category}</div>

                <div className="space-y-2 mb-6 flex-grow">
                   {project.description.slice(0, 2).map((desc, i) => (
                     <p key={i} className="text-gray-400 text-sm font-mono leading-relaxed">
                       &gt; {desc}
                     </p>
                   ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-gray-900 text-cyber-green border border-gray-800">
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

const ArrowUpRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);

export default Projects;