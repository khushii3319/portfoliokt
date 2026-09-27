import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown resume file blob for instant user download
    const resumeText = `==================================================
KHUSHI TRIVEDI
Computer Engineering Student | Software Engineer
Email: khushitrivedi348@gmail.com
GitHub: https://github.com/khushii3319
LinkedIn: https://linkedin.com/in/khushi-trivedi3
==================================================

EDUCATION
---------
Dharmsinh Desai University (DDU)
Bachelor of Technology (B.Tech) in Computer Engineering (2024 - 2028 Expected)
Current CPI: 8.5 / 10

Oaj Institute of Science
Higher Secondary Education - Science Stream (2022 - 2024)
Board Percentile: 94.49 %ile

EXPERIENCE & LEADERSHIP
-----------------------
Software Developer Intern @ Mastercard (INCOMING)
- Selected for prestigious Software Developer Internship program.

Core Member - Cloud Team @ GDG Nadiad
- Coordinating cloud technology community workshops and tech talks.

Sponsorship Team @ DU Hacks
- Managed partner outreach, sponsor negotiations, and hackathon funding.

FEATURED PROJECTS
-----------------
1. Real-Time Satellite Tracker (Java, Spring Boot, Spring Security, MySQL)
   GitHub: https://github.com/khushii3319/satellitetracker
2. PixelForge (Flutter, Dart - Mobile Image Editor)
   GitHub: https://github.com/khushii3319/flutter-project
3. Classify (Python, Django - Online Live Classroom System)
   GitHub: https://github.com/pritikashah/Classify.git
4. Rewear (PHP, JavaScript, MySQL - Sustainable Apparel Marketplace)
   GitHub: https://github.com/yugpatel2907/Bit-benders-
5. PhysioCare (HTML, CSS - Physiotherapy Portal)
   GitHub: https://github.com/khushii3319/physiocare

HONORS & ACHIEVEMENTS
---------------------
- National Level Champion: Aloha Mental Arithmetic
- District Level 2nd Rank: Viksit Bharat Youth Parliament (State Level Representative)
==================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Khushi_Trivedi_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span className="font-bold text-white text-lg">Khushi Trivedi — Curriculum Vitae</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass-pill text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Resume Body */}
          <div className="space-y-6 text-left">
            {/* Header info */}
            <div className="glass-panel p-4 rounded-2xl border border-amber-500/20 bg-amber-950/20">
              <h3 className="text-xl font-bold text-white mb-1">Khushi Trivedi</h3>
              <p className="font-mono text-xs text-amber-300 mb-3">
                Computer Engineering Student @ DDU | Incoming Mastercard Intern
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300 font-mono">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>khushitrivedi348@gmail.com</span>
                </span>
                <a href="https://github.com/khushii3319" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-300">
                  <GithubIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>github.com/khushii3319</span>
                </a>
                <a href="https://linkedin.com/in/khushi-trivedi3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-amber-300">
                  <LinkedinIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>linkedin.com/in/khushi-trivedi3</span>
                </a>
              </div>
            </div>

            {/* Section 1: Education */}
            <div>
              <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                Education
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-white font-bold">
                  <span>B.Tech in Computer Engineering — Dharmsinh Desai University</span>
                  <span className="text-amber-300">CPI: 8.5 (2024–2028)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>HSC Science Stream — Oaj Institute of Science</span>
                  <span className="text-amber-300">94.49 %ile (2022–2024)</span>
                </div>
              </div>
            </div>

            {/* Section 2: Experience */}
            <div>
              <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                Experience & Leadership
              </h4>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between text-white font-bold mb-1">
                    <span>Software Developer Intern @ Mastercard</span>
                    <span className="text-amber-400 font-mono">STATUS: INCOMING</span>
                  </div>
                  <p className="text-slate-400">Selected for upcoming software developer internship program.</p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between text-white font-bold mb-1">
                    <span>Core Member - Cloud Team @ GDG Nadiad</span>
                    <span className="text-slate-400 font-mono">Active Community Role</span>
                  </div>
                  <p className="text-slate-400">Coordinating cloud technical events and workshops.</p>
                </div>
              </div>
            </div>

            {/* Section 3: Key Skills */}
            <div>
              <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                Technical Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Python', 'Django', 'JavaScript', 'React', 'Flutter', 'Dart', 'REST APIs', 'Git', 'Linux'].map((s, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Khushi_Trivedi_CV.txt</span>
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105 transition-all cursor-pointer text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
