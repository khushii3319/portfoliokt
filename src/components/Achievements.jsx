import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Mic, Sparkles, Star } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
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
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">HONORS & AWARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Key <span className="text-gradient-gold">Achievements</span>
          </h2>
        </motion.div>

        {/* Achievements Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 hover:border-amber-400 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-purple-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md">
                    {item.icon === 'Award' ? <Award className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/40 shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-bold text-white text-xl mb-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-purple-300 block mb-4">{item.organization}</span>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{item.category}</span>
                </span>
                <span className="text-amber-300 font-semibold">Honored</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
