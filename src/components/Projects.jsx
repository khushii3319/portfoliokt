import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';
import {
  SatelliteTrackerUI,
  PixelForgeUI,
  ClassifyUI,
  RewearUI,
  PhysioCareUI
} from './ProjectUICompositions';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = projectsData[0];
  const gridProjects = projectsData.slice(1);

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
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full mb-3 border border-amber-500/30">
            <FolderGit2 className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Explore all full-stack applications, system services, and mobile projects at a glance.
          </p>
        </motion.div>

        {/* 1. FEATURED DOMINANT PROJECT (Project 1: Satellite Tracker) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border-2 border-amber-500/40 shadow-[0_25px_60px_rgba(245,158,11,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* LEFT: Details */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-mono text-[10px] font-extrabold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                ★ FEATURED SHOWCASE
              </span>
              <span className="glass-pill px-3 py-1 rounded-full font-mono text-[10px] text-amber-300 border border-amber-500/20">
                {featuredProject.category}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">
              {featuredProject.title}
            </h3>
            <p className="font-mono text-xs text-amber-400 mb-4">{featuredProject.subtitle}</p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {featuredProject.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 mb-6 w-full">
              {featuredProject.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {featuredProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300 font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-105 transition-all cursor-pointer text-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>

              <button
                onClick={() => setSelectedProject(featuredProject)}
                className="glass-pill px-5 py-3 rounded-xl text-xs font-semibold text-slate-200 border border-white/10 hover:border-amber-500/40 hover:text-amber-300 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Expand Preview</span>
              </button>
            </div>
          </div>

          {/* RIGHT: UI Visual Composition */}
          <div className="lg:col-span-6 h-[380px] sm:h-[420px] w-full z-10">
            {renderVisualComposition(featuredProject.visualType)}
          </div>
        </motion.div>

        {/* 2. GRID SHOWCASE OF ALL REMAINING PROJECTS (2x2 Grid) */}
        <div className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-8 font-bold flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>ALL APPLICATIONS & SOFTWARE REPOSITORIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 shadow-xl flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Visual Mockup Header inside card */}
                <div className="h-64 w-full mb-6 rounded-2xl overflow-hidden border border-white/10">
                  {renderVisualComposition(project.visualType)}
                </div>

                {/* Header info */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-bold">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">PROJECT 0{idx + 2}</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h4>
                <p className="font-mono text-xs text-slate-400 mb-3">{project.subtitle}</p>

                <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[11px]">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-amber-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="glass-pill px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/30 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Preview Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full max-w-4xl glass-panel rounded-3xl p-6 md:p-8 border border-amber-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full glass-pill text-slate-300 hover:text-amber-400 border border-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                    {selectedProject.category} // FULL DETAILS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-slate-300 text-sm mb-6">{selectedProject.description}</p>

                {/* Composition View */}
                <div className="h-80 sm:h-96 w-full mb-6 rounded-2xl overflow-hidden border border-amber-500/20">
                  {renderVisualComposition(selectedProject.visualType)}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-amber-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition-all text-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
