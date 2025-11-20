import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Terminal, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const ScrambleText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span className={className} onMouseEnter={scramble} onTouchStart={scramble}>
      {displayText}
    </span>
  );
};

const Hero: React.FC = () => {
  const [roleText, setRoleText] = useState('');
  const roles = ['Full Stack Engineer', 'AI Innovator', 'UI/UX Enthusiast', 'Mobile Dev'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax Effects
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 500], [0, 150]);
  const blob2Y = useTransform(scrollY, [0, 500], [0, -150]);
  const gridY = useTransform(scrollY, [0, 500], [0, 50]);
  const contentY = useTransform(scrollY, [0, 500], [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - left - width / 2) / 25;
    const yPos = (e.clientY - top - height / 2) / 25;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setRoleText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: blob1Y }}
          className="absolute top-[20%] left-[10%] w-72 h-72 pointer-events-none"
        >
          <div className="w-full h-full bg-neon-blue/10 rounded-full blur-[100px] animate-float" />
        </motion.div>
        
        <motion.div 
          style={{ y: blob2Y }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 pointer-events-none"
        >
          <div className="w-full h-full bg-neon-purple/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        </motion.div>
        
        <motion.div 
          style={{ y: gridY }}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
      </div>

      <motion.div 
        style={{ y: contentY, opacity: contentOpacity, rotateX: mouseY, rotateY: mouseX }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center transform-style-3d transition-transform duration-100 ease-out"
      >
        
        {/* Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-neon-blue/30 transition-colors cursor-default hover:bg-white/10"
        >
          <Terminal size={16} className="text-neon-blue" />
          <span className="text-sm font-mono text-gray-300">System.ready( )</span>
          <span className="flex gap-1 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </span>
        </motion.div>

        {/* Main Title with Scramble Effect */}
        <div className="relative mb-4 perspective-500">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white font-sans relative z-10 cursor-default group">
            <ScrambleText text="NAVEEN" /> <br className="md:hidden" />
            <span className="text-transparent text-stroke group-hover:text-white transition-colors duration-300">
               <ScrambleText text="KUMAR" />
            </span>
          </h1>
        </div>

        {/* Typing Role Text */}
        <div className="h-12 mb-8 text-2xl md:text-3xl font-mono text-neon-blue">
          &gt; {roleText}<span className="animate-pulse">_</span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 font-light mb-10 max-w-2xl leading-relaxed"
        >
          Engineering scalable <span className="text-white font-medium">Full-Stack</span> solutions and <span className="text-white font-medium">AI</span> architectures. 
          Building the digital future, one line of code at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all duration-200 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <div className="flex gap-4">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neon-blue/50 text-white transition-all duration-200 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
            >
              <Github size={24} />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neon-purple/50 text-white transition-all duration-200 hover:scale-110 hover:shadow-[0_0_15px_rgba(188,19,254,0.2)]"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
        
        {/* Press Space Hint */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.5 }}
           transition={{ delay: 2, duration: 1 }}
           className="mt-16 text-xs font-mono text-gray-500 tracking-[0.3em] uppercase skeleton-ignore"
        >
          [ Hold Spacebar for System X-Ray ]
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 text-gray-500 hover:text-neon-blue transition-colors p-2"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;