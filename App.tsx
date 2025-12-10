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
  const [isDebug, setIsDebug] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    // Spacebar Debug Logic
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.repeat) {
        e.preventDefault(); // Prevent scrolling
        setIsDebug(true);
        document.body.classList.add('skeleton-active');
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsDebug(false);
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
    <div className="min-h-screen bg-cyber-black text-gray-300 font-mono selection:bg-cyber-green selection:text-black relative overflow-x-hidden">
      
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#00ff4105,transparent)] z-0 pointer-events-none"></div>

      {/* Custom Cursor Elements */}
      <div 
        className="cursor-dot hidden md:block transition-colors duration-200"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />
      <div 
        className="cursor-crosshair hidden md:block transition-transform duration-100"
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isDebug ? 1.5 : 1})`
        }}
      />

      {/* Debug Overlay */}
      {isDebug && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-black border border-cyber-green px-4 py-2">
            <p className="text-cyber-green font-bold animate-pulse">SYSTEM DIAGNOSTIC :: MODE_ACTIVE</p>
          </div>
          <div className="w-full h-[1px] bg-cyber-green absolute top-1/2 left-0"></div>
          <div className="h-full w-[1px] bg-cyber-green absolute top-0 left-1/2"></div>
        </div>
      )}

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;