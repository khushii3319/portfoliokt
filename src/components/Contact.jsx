import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const email = 'khushitrivedi348@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
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
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Let's <span className="text-gradient-gold">build something.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Open to opportunities, collaborations, and good conversations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Contact Cards & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Direct Email Copy Card */}
            <div className="glass-panel p-6 rounded-3xl border border-amber-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div className="mb-4">
                <span className="font-mono text-xs text-amber-400 uppercase tracking-wider block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${email}`}
                  className="text-lg font-bold text-white hover:text-amber-300 transition-colors break-all"
                >
                  {email}
                </a>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full glass-pill py-2.5 rounded-xl font-mono text-xs font-semibold text-amber-300 border border-amber-500/30 hover:border-amber-400 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/khushii3319"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 hover:scale-105 transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <GithubIcon className="w-6 h-6 text-slate-300 group-hover:text-amber-300 transition-colors" />
                <span className="font-mono text-xs font-bold text-white">GitHub</span>
                <span className="font-mono text-[10px] text-slate-400">@khushii3319</span>
              </a>

              <a
                href="https://linkedin.com/in/khushi-trivedi3"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 hover:scale-105 transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <LinkedinIcon className="w-6 h-6 text-slate-300 group-hover:text-amber-300 transition-colors" />
                <span className="font-mono text-xs font-bold text-white">LinkedIn</span>
                <span className="font-mono text-[10px] text-slate-400">khushi-trivedi3</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-bounce">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300 text-sm max-w-sm">
                  Thank you for reaching out, Khushi will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block font-mono text-xs text-amber-300 mb-1.5 font-semibold">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-amber-300 mb-1.5 font-semibold">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-amber-300 mb-1.5 font-semibold">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or role opportunity..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-[1.02] transition-all cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Say Hello</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
