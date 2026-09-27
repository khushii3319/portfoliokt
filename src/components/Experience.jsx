import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cloud, Trophy, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  const { main, leadership } = experienceData;

  return (
    <section id="experience" className="py-24 relative z-10">
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
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Experience & <span className="text-gradient-gold">Leadership</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {/* MAIN EXPERIENCE HIGHLIGHT: Mastercard (INCOMING) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel-gold rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[0_15px_40px_rgba(245,158,11,0.15)] border-2 border-amber-500/40"
          >
            {/* INCOMING Watermark / Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STATUS: INCOMING</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-xl shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                MC
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span>{main.role}</span>
                  <span className="text-amber-400 text-lg">@ {main.company}</span>
                </h3>
                <div className="flex items-center gap-4 mt-1 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{main.period}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300 font-semibold">
                    {main.type}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {main.description}
            </p>

            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 to-purple-500/10 border border-amber-500/30 text-xs text-amber-300 font-mono flex items-start gap-2 shadow-inner">
              <span className="text-amber-400 text-base leading-none">⚡</span>
              <span>Selected for the Software Developer Internship at Mastercard — preparing to engineer high-scale payment infrastructure, secure APIs, and world-class financial technology solutions.</span>
            </div>
          </motion.div>

          {/* LEADERSHIP & COMMUNITY TIMELINE */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-6 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>COMMUNITY LEADERSHIP & ORGANIZATIONAL ROLES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadership.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                        {item.icon === 'Cloud' ? <Cloud className="w-5 h-5" /> : <Trophy className="w-5 h-5 text-amber-400" />}
                      </div>
                      <span className="font-mono text-[11px] text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-semibold">
                        {item.type}
                      </span>
                    </div>

                    <h4 className="font-bold text-white text-lg mb-1">{item.role}</h4>
                    <span className="font-mono text-xs text-purple-300 block mb-3">{item.organization}</span>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>{item.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
