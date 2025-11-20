import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isSkeleton, setIsSkeleton] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    // Spacebar Skeleton Logic
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.repeat) {
        e.preventDefault(); // Prevent scrolling
        setIsSkeleton(true);
        document.body.classList.add('skeleton-active');
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsSkeleton(false);
        document.body.classList.remove('skeleton-active');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      document.body.classList.remove('skeleton-active');
    };
  }, []);

  return (
    <div className="min-h-screen bg-deep-space text-white font-sans selection:bg-neon-blue selection:text-black relative overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Custom Cursor Elements */}
      <div 
        className="cursor-dot hidden md:block"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />
      <div 
        className="cursor-outline hidden md:block"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />

      {/* Dynamic Spotlight Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 243, 255, 0.08), transparent 80%)`
        }}
      />

      {/* Skeleton Mode Effects */}
      {isSkeleton && (
        <>
          {/* System Label */}
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-none skeleton-ignore">
             <div className="bg-black/80 border border-neon-blue/50 px-6 py-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                <span className="text-neon-blue font-mono text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
                  System_Core_View // X-RAY
                </span>
             </div>
          </div>

          {/* Scanning Line */}
          <div className="fixed top-0 left-0 w-full h-[2px] bg-neon-blue/50 shadow-[0_0_20px_rgba(0,243,255,0.8)] z-[90] animate-scan pointer-events-none skeleton-ignore"></div>
          
          {/* Grid Overlay */}
          <div className="fixed inset-0 pointer-events-none z-[80] opacity-20 skeleton-ignore bg-[linear-gradient(to_right,#00f3ff10_1px,transparent_1px),linear-gradient(to_bottom,#00f3ff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </>
      )}

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;