'use client';

import { useEffect, useState } from 'react';
import { IconArrowUp } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';

function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[200] -translate-y-[220%] rounded-xl bg-[#8424e8] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/70"
    >
      Skip to main content
    </a>
  );
}

function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const next = max <= 0 ? 0 : (el.scrollTop / max) * 100;
      setPct(Math.min(100, Math.max(0, next)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[3px]"
      aria-hidden
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-[#8424e8] via-[#a855f7] to-[#8424e8] shadow-[0_0_12px_rgba(132,36,232,0.45)] transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 16 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          className="fixed bottom-6 right-5 z-[90] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#8424e8] to-[#5b21b6] text-white shadow-[0_10px_30px_rgba(132,36,232,0.45)] ring-2 ring-white/30 transition-transform hover:scale-105 hover:shadow-[0_14px_36px_rgba(132,36,232,0.55)] active:scale-95 md:bottom-8 md:right-8"
          aria-label="Back to top"
        >
          <IconArrowUp size={22} stroke={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function SiteEffects() {
  return (
    <>
      <SkipToContent />
      <ReadingProgress />
      <ScrollToTop />
    </>
  );
}
