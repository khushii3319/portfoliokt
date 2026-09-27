import React, { useState } from 'react';
import Background from './components/Background';
import FloatingElements from './components/FloatingElements';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050508] text-slate-200 overflow-x-hidden">
      {/* Dynamic Background Grid & Particles */}
      <Background />

      {/* Custom Glowing Cursor & Floating Actions */}
      <FloatingElements />

      {/* Sticky Floating Glass Navbar */}
      <Navbar />

      {/* Main Content Sections: Projects before Experience */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
