import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
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
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education & <span className="text-gradient-gold">Qualifications</span>
          </h2>
        </motion.div>

        {/* Education Timeline Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`glass-panel p-6 sm:p-8 rounded-3xl border flex flex-col justify-between shadow-xl transition-all ${
                edu.featured
                  ? 'border-amber-500/40 shadow-[0_10px_35px_rgba(245,158,11,0.15)] bg-amber-950/10'
                  : 'border-white/10 hover:border-amber-500/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-bold">
                    {edu.metricsValue}
                  </span>
                </div>

                <h3 className="font-bold text-white text-xl mb-1">{edu.institution}</h3>
                <h4 className="font-semibold text-amber-300 text-sm mb-1">{edu.degree}</h4>
                <p className="font-mono text-xs text-purple-300 mb-4">{edu.field}</p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{edu.period}</span>
                </span>
                <span className="text-amber-300 font-semibold">{edu.metricsLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
