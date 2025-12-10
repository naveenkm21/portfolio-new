import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-gray-800 bg-cyber-black relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Profile Text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-cyber-green font-mono text-sm">01.</span>
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest">System_Identity</h2>
            </div>
            
            <div className="space-y-6 text-gray-400 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-cyber-green">&gt;</span> Identity confirmed: Computer Science Engineer.<br/>
                <span className="text-cyber-green">&gt;</span> Current Directive: Building scalable applications and exploring AI boundaries at SRM Institute of Science and Technology.
              </p>
              <p>
                My core processing involves clean architecture and user-centric design patterns. From predictive ML models to native Android subsystems, I engineer solutions that optimize performance and utility.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 border border-gray-800 hover:border-cyber-green transition-colors bg-gray-900/30">
                <div className="text-3xl font-bold text-white mb-1">2027</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Graduation_Year</div>
              </div>
              <div className="p-4 border border-gray-800 hover:border-cyber-green transition-colors bg-gray-900/30">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Nodes_Mentored</div>
              </div>
            </div>
          </div>

          {/* Certifications / Specs */}
          <div className="relative">
             <div className="border border-gray-800 p-6 relative bg-black">
               <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-cyber-green"></div>
               <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-cyber-green"></div>
               
               <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                 <Cpu size={18} className="text-cyber-green" />
                 CERTIFIED_MODULES
               </h3>
               
               <div className="space-y-4">
                 {CERTIFICATIONS.map((cert, index) => (
                   <div key={index} className="flex justify-between items-start border-b border-gray-900 pb-4 last:border-0">
                     <div>
                       <div className="text-gray-200 font-medium text-sm">{cert.name}</div>
                       <div className="text-cyber-green/60 text-xs mt-1">{cert.issuer}</div>
                     </div>
                     <div className="text-xs font-mono text-gray-600">[{cert.year}]</div>
                   </div>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;