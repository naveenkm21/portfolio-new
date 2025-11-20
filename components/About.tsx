import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-neon-blue tracking-wider uppercase mb-2">Who I Am</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Architecting the Digital Future</h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              I am a Computer Science engineer skilled in full-stack web and mobile development, 
              with a strong expertise in building scalable applications using modern technologies.
              Currently pursuing my B.Tech at SRM Institute of Science and Technology, I blend 
              academic rigor with practical experience in AI and application design.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              My passion lies in writing clean, maintainable code and providing user-centric solutions. 
              From predicting industrial machine lifespans with ML to crafting seamless mobile experiences 
              with Jetpack Compose, I thrive on solving complex problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-4 rounded-xl glass-card border-l-4 border-neon-blue">
                <div className="text-3xl font-bold text-white">2027</div>
                <div className="text-sm text-gray-400">Graduation Year</div>
              </div>
              <div className="px-6 py-4 rounded-xl glass-card border-l-4 border-neon-purple">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Students Mentored</div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden"
          >
             {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl"></div>

            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <Award className="text-neon-blue" />
              Certifications
            </h4>
            <div className="space-y-4 relative z-10">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-white font-medium">{cert.name}</h5>
                      <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono py-1 px-2 rounded bg-neon-blue/10 text-neon-blue">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;