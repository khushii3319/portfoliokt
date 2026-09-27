import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Terminal, Code2, Award, BookOpen } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
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
            <User className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            About <span className="text-gradient-gold">Khushi Trivedi</span>
          </h2>
        </motion.div>

        {/* Large Rounded Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-6 md:p-10 border border-amber-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          {/* Subtle background glow element */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT COLUMN: Clean Interactive Avatar & Tech Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-1 bg-gradient-to-b from-amber-500/50 via-purple-500/30 to-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.25)] group">
                {/* Tech Status Ring */}
                <div className="absolute -top-3 -right-3 z-20 glass-pill px-3 py-1 rounded-full border border-amber-400/40 flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                  <span className="font-mono text-[11px] font-bold text-amber-300">CE Student</span>
                </div>

                {/* Inner Avatar Graphic */}
                <div className="w-full h-full rounded-[22px] bg-[#090b10] flex flex-col items-center justify-center relative overflow-hidden p-6 border border-white/10 group-hover:border-amber-500/40 transition-colors">
                  {/* Glowing background code matrix effect */}
                  <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-amber-400 p-4 leading-tight pointer-events-none select-none">
                    {`class KhushiTrivedi {
  role = "Software Engineer";
  university = "DDU";
  CPI = 8.5;
  skills = ["Java", "Spring Boot", "React", "Python"];
  status = "Mastercard Intern (Incoming)";
}`}
                  </div>

                  {/* High Tech Initial Monogram */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-purple-500/20 border border-amber-500/40 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform">
                    <span className="font-mono text-4xl font-extrabold text-amber-400 tracking-wider">
                      KT
                    </span>
                  </div>

                  <span className="font-bold text-white text-lg tracking-tight mb-1">Khushi Trivedi</span>
                  <span className="font-mono text-xs text-amber-300">Computer Engineering @ DDU</span>

                  {/* Interactive Status Indicator */}
                  <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-[10px] text-amber-300">Mastercard Intern (Incoming)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Bio Details & Golden Highlights */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2 font-bold">
                ABOUT ME
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                Passionate about designing <span className="text-amber-300">reliable software</span> and solving <span className="text-amber-400">complex technical problems</span>.
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                I'm a <span className="text-amber-300 font-semibold">Computer Engineering student</span> at Dharmsinh Desai University with a strong foundation in algorithm design and system engineering. My focus centers around{' '}
                <span className="text-amber-400 font-semibold underline decoration-amber-500/40">full-stack development</span>,{' '}
                <span className="text-amber-400 font-semibold underline decoration-amber-500/40">backend engineering</span>, and building scalable enterprise services with modern frameworks like Java Spring Boot and React.
              </p>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Driven by curiosity and <span className="text-amber-300 font-semibold">continuous learning</span>, I enjoy architecting robust RESTful APIs, optimizing relational databases, and participating in competitive technical environments and hackathons.
              </p>

              {/* Four Pillar Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8">
                <div className="glass-panel p-3 rounded-xl border border-white/10 text-center">
                  <Terminal className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="font-mono text-[11px] text-slate-300 block">Backend Engineering</span>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-white/10 text-center">
                  <Code2 className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                  <span className="font-mono text-[11px] text-slate-300 block">Full-Stack Web</span>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-white/10 text-center">
                  <Award className="w-4 h-4 text-pink-400 mx-auto mb-1" />
                  <span className="font-mono text-[11px] text-slate-300 block">Problem Solving</span>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-white/10 text-center">
                  <BookOpen className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                  <span className="font-mono text-[11px] text-slate-300 block">Continuous Learning</span>
                </div>
              </div>

              {/* LinkedIn CTA */}
              <a
                href="https://linkedin.com/in/khushi-trivedi3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 transition-all cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
