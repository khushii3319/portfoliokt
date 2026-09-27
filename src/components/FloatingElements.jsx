import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Custom Glowing Cursor (Desktop Only) */}
      <div
        className="custom-cursor fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      >
        <div
          className={`rounded-full border border-amber-400/80 transition-all duration-300 ${
            isHovered
              ? 'w-12 h-12 bg-amber-500/20 backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-125'
              : 'w-6 h-6 bg-amber-400/10 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 transition-all duration-200 ${
            isHovered ? 'w-2 h-2 bg-amber-300' : 'w-1.5 h-1.5'
          }`}
        />
      </div>

      {/* Bottom Floating Controls (Say Hi & Back To Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Floating "👋 Say Hi" CTA */}
        <motion.button
          onClick={scrollToContact}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="glass-pill px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold text-amber-300 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
        >
          <span className="animate-bounce inline-block">👋</span>
          <span>Say Hi</span>
          <MessageSquare className="w-4 h-4 text-amber-400 ml-1" />
        </motion.button>

        {/* Back To Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to Top"
              className="glass-pill p-3 rounded-full text-slate-300 hover:text-amber-400 border border-white/10 hover:border-amber-500/40 shadow-lg cursor-pointer transition-all"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
