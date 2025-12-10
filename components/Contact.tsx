import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="inline-block mb-8 border border-cyber-green/30 p-1">
          <div className="bg-cyber-green/10 px-4 py-1 text-cyber-green text-xs font-mono">
             STATUS: OPEN FOR WORK
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-emerald-600">Initialize</span>?
        </h2>
        
        <div className="font-mono text-gray-500 mb-10">
          <p>root@naveen:~$ ./send_email.sh --priority=high</p>
        </div>

        <a 
          href={SOCIAL_LINKS.email}
          className="inline-block px-8 py-4 bg-white text-black font-bold hover:bg-cyber-green transition-colors mb-16 uppercase tracking-widest text-sm"
        >
          Transmit_Message
        </a>

        <div className="flex flex-col items-center gap-6 border-t border-gray-900 pt-8">
          <button 
            onClick={scrollToTop}
            className="p-3 border border-gray-800 hover:border-cyber-green hover:text-cyber-green text-gray-500 transition-all"
          >
            <ArrowUp size={20} />
          </button>
          <p className="text-xs text-gray-700 font-mono">
             SYSTEM_TERMINATED_NORMALLY. EXIT_CODE_0.<br/>
            © {new Date().getFullYear()} Naveen Kumar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;