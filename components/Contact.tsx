import React from 'react';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative border-t border-white/5 bg-[#020205]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>

        <a 
          href={SOCIAL_LINKS.email}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 mb-16"
        >
          <Mail size={20} />
          <span>Say Hello</span>
        </a>

        <div className="flex justify-center gap-8 mb-12">
          <a href={SOCIAL_LINKS.github} target="_blank" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5"
          >
            <ArrowUp size={20} />
          </button>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Naveen Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;