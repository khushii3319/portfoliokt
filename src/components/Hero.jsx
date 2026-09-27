import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, ExternalLink, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import HeroVisual from './HeroVisual';

// Validated Authentic Global & Tech Greetings List
const GREETINGS = [
  { text: 'Hello', emoji: '👋', lang: 'English' },
  { text: 'Namaste', emoji: '🙏', lang: 'Hindi' },
  { text: 'Kem Cho', emoji: '🌺', lang: 'Gujarati' },
  { text: 'npm start', emoji: '🚀', lang: 'Dev' },
  { text: 'Bonjour', emoji: '🇫🇷', lang: 'French' },
  { text: 'Konnichiwa', emoji: '🎌', lang: 'Japanese' },
  { text: 'Guten Tag', emoji: '🇩🇪', lang: 'German' },
  { text: 'Hola', emoji: '🇪🇸', lang: 'Spanish' },
  { text: 'Ciao', emoji: '🇮🇹', lang: 'Italian' },
  { text: 'System.out.println()', emoji: '💻', lang: 'Java' },
];

function AnimatedGreeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const current = GREETINGS[index];

  return (
    <div className="glass-pill px-5 py-2.5 rounded-full flex items-center gap-2.5 mb-5 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.25)] font-mono text-base sm:text-lg">
      <AnimatePresence mode="wait">
        <motion.span
          key={current.text}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="font-bold text-amber-300 inline-flex items-center gap-2"
        >
          <span>{current.text}</span>
          <span className="inline-block animate-bounce">{current.emoji}</span>
        </motion.span>
      </AnimatePresence>
      <span className="text-slate-200 font-semibold">, I am</span>
      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping ml-1" />
    </div>
  );
}

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: Main Greeting & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* Multi-Language & Tech Cycling Greeting Pill (Slightly Bigger & Prominent) */}
            <AnimatedGreeting />

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-2 leading-none">
              Khushi <span className="text-gradient-gold">Trivedi</span>
            </h1>

            {/* Handwritten Script Accent */}
            <div className="mb-6 flex items-center gap-2">
              <span className="font-script text-3xl sm:text-4xl text-amber-300 transform -rotate-3 inline-block drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">
                I build things.
              </span>
              <Sparkles className="w-5 h-5 text-amber-400 animate-bounce" />
            </div>

            {/* Tagline Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              <span className="text-amber-400 font-semibold">Computer Engineering</span> student and aspiring{' '}
              <span className="text-amber-300 font-semibold">software engineer</span> building{' '}
              <span className="text-white font-medium underline decoration-amber-500/50 decoration-2">reliable software</span>,{' '}
              <span className="text-amber-300 font-semibold">full-stack applications</span>, and solving complex technical problems.
            </p>

            {/* Hero Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* View Projects Button */}
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-105 transition-all cursor-pointer text-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              {/* GitHub Button */}
              <a
                href="https://github.com/khushii3319"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="glass-pill p-3 rounded-xl text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 shadow-md hover:scale-105 transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com/in/khushi-trivedi3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="glass-pill p-3 rounded-xl text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 shadow-md hover:scale-105 transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Status Highlight Badge */}
            <div className="glass-panel px-4 py-2.5 rounded-xl flex items-center gap-3 border border-amber-500/20">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <div className="text-xs">
                <span className="text-slate-400 font-mono">STATUS: </span>
                <span className="text-amber-300 font-semibold">Incoming Software Developer Intern @ Mastercard</span>
              </div>
            </div>
          </motion.div>

          {/* CENTER COLUMN: 3D Geometric Node Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0"
          >
            <HeroVisual />
          </motion.div>

          {/* RIGHT COLUMN: Overlapping Stacked Project Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 flex flex-col gap-4 relative"
          >
            <div className="font-mono text-xs text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-2">
              <Code className="w-4 h-4 text-amber-400" />
              <span>CURRENT FOCUS</span>
            </div>

            {/* Stacked Card 1 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => scrollToSection('projects')}
              className="glass-panel p-5 rounded-2xl border border-amber-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:border-amber-400 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] tracking-widest text-amber-400 uppercase bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  CURRENTLY BUILDING
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-300 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-base mb-1 group-hover:text-amber-300 transition-colors">
                REAL-TIME SATELLITE TRACKER
              </h3>
              <p className="text-xs text-slate-400 mb-3 line-clamp-2">
                Spring Boot backend monitoring satellites, orbits, and NASA APOD data with Spring Security & MySQL.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300">Java</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300">Spring Boot</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300">MySQL</span>
              </div>
            </motion.div>

            {/* Stacked Card 2 (Overlapping Depth Effect) */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => scrollToSection('skills')}
              className="glass-panel p-5 rounded-2xl border border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:border-purple-400 transition-all group -mt-2 sm:-mt-3"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] tracking-widest text-purple-400 uppercase bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                  CORE SPECIALIZATION
                </span>
                <Code className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-1 group-hover:text-purple-300 transition-colors">
                FULL-STACK DEVELOPMENT
              </h3>
              <div className="grid grid-cols-2 gap-2 mt-3 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Frontend</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Backend</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>Databases</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>REST APIs</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
