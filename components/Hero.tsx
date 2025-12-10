import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Initializing system...\nLoading user profile...\nUser: Naveen Kumar\nRole: Full Stack Engineer\nStatus: Online";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 border-b border-gray-800 relative">
      
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-green/30 text-cyber-green text-xs font-mono bg-cyber-green/5">
            <span className="w-2 h-2 bg-cyber-green animate-pulse"></span>
            SYSTEM_READY
          </div>

          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none mb-4 glitch-text" data-text="NAVEEN KUMAR">
              NAVEEN<br/>
              <span className="text-cyber-green">KUMAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-mono border-l-2 border-cyber-green pl-4">
              &gt; Full Stack Engineer_
            </p>
          </div>

          <p className="text-gray-400 max-w-lg leading-relaxed font-mono text-sm md:text-base">
            // Architecting scalable solutions and AI architectures.<br/>
            // Building the digital future, one line of code at a time.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-cyber-green text-black font-bold hover:bg-white transition-colors flex items-center gap-2 uppercase tracking-wider text-sm"
            >
              Execute_Projects.exe <ArrowRight size={16} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-gray-700 text-gray-300 hover:border-cyber-green hover:text-cyber-green transition-colors uppercase tracking-wider text-sm"
            >
              Contact_Me
            </a>
          </div>

          <div className="flex gap-4 pt-4">
             <a href={SOCIAL_LINKS.github} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
             <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Right Terminal Output */}
        <div className="hidden md:block">
          <div className="w-full h-[400px] bg-black border border-gray-800 p-4 font-mono text-sm overflow-hidden relative group">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-600">bash --login</div>
            </div>
            
            {/* Output */}
            <div className="text-cyber-green/80 whitespace-pre-line">
              {text}<span className="animate-blink block h-4 w-2 bg-cyber-green inline-block ml-1"></span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-4 right-4 text-gray-700 text-xs">
              CPU: 12% <br/>
              RAM: 4.2GB
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;