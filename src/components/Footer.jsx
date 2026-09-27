import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 py-12 bg-[#040407]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side: Monogram & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight">Khushi Trivedi</span>
            <span className="text-amber-400 font-bold">•</span>
            <span className="font-mono text-xs text-amber-300">Software Engineer</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Khushi Trivedi. All rights reserved.
          </p>
        </div>

        {/* Center: Live Local Time */}
        <div className="glass-pill px-4 py-1.5 rounded-full border border-amber-500/20 text-xs font-mono text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>India // IST: {time || '22:45:00'}</span>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="glass-pill px-4 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 flex items-center gap-2 transition-all cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
