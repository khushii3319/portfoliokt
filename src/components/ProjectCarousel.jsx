import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import {
  SatelliteTrackerUI,
  PixelForgeUI,
  ClassifyUI,
  RewearUI,
  PhysioCareUI
} from './ProjectUICompositions';

export default function ProjectCarousel({ projects, onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = projects.length;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard Left / Right Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeProject = projects[currentIndex];

  const renderVisualComposition = (visualType) => {
    switch (visualType) {
      case 'satellite':
        return <SatelliteTrackerUI />;
      case 'pixelforge':
        return <PixelForgeUI />;
      case 'classify':
        return <ClassifyUI />;
      case 'rewear':
        return <RewearUI />;
      case 'physiocare':
        return <PhysioCareUI />;
      default:
        return <SatelliteTrackerUI />;
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* Top Carousel Navigation Bar: Counter & Arrows */}
      <div className="w-full flex items-center justify-between mb-8 px-4">
        {/* Project Counter */}
        <div className="glass-pill px-4 py-2 rounded-full border border-amber-500/30 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-mono text-xs font-bold text-white tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevProject}
            aria-label="Previous Project"
            className="glass-pill p-3 rounded-full text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextProject}
            aria-label="Next Project"
            className="glass-pill p-3 rounded-full text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Showcase Card View */}
      <div className="w-full relative min-h-[550px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -50 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="w-full glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* LEFT COLUMN: Project Details */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Featured Badge / Category */}
              <div className="flex items-center gap-2 mb-3">
                {activeProject.featured && (
                  <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-mono text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)]">
                    ★ FEATURED PROJECT
                  </span>
                )}
                <span className="glass-pill px-3 py-1 rounded-full font-mono text-[10px] text-amber-300 border border-amber-500/20">
                  {activeProject.category}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
                {activeProject.title}
              </h3>
              <p className="font-mono text-xs text-amber-400 mb-4">{activeProject.subtitle}</p>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeProject.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 mb-6 w-full">
                {activeProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {activeProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-amber-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 transition-all cursor-pointer text-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                <button
                  onClick={() => onSelectProject(activeProject)}
                  className="glass-pill px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 border border-white/10 hover:border-amber-500/40 hover:text-amber-300 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Interactive Preview</span>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Fictional UI Showcase Composition */}
            <div className="lg:col-span-6 h-[380px] sm:h-[420px] w-full relative">
              {renderVisualComposition(activeProject.visualType)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dot Controls */}
      <div className="flex items-center gap-2 mt-8">
        {projects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to project ${idx + 1}`}
            className={`transition-all rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-8 h-2.5 bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
