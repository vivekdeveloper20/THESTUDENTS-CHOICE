'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ── Data ────────────────────────────────────────────────────────── */
const TRUST_POINTS = [
  {
    title: 'High Loan Amount',
    desc: 'Get access to higher loan amounts to cover tuition fees, living expenses, travel, insurance, and other education-related costs.',
    side: 'left' as const,
    emoji: '🏦',
  },
  {
    title: 'Competitive Interest Rates',
    desc: 'Choose from multiple lenders offering attractive and student-friendly interest rates for easier repayment planning.',
    side: 'right' as const,
    emoji: '💹',
  },
  {
    title: 'Pre-Admission Loan Support',
    desc: 'Get loan guidance and eligibility support even before receiving your final admission letter, so you can plan ahead confidently.',
    side: 'left' as const,
    emoji: '📋',
  },
  {
    title: 'Fast Approval & Smooth Disbursal',
    desc: 'Experience quick processing, timely approvals, and hassle-free disbursal to meet university deadlines without stress.',
    side: 'right' as const,
    emoji: '⚡',
  },
  {
    title: 'Covers Multiple Courses & Countries',
    desc: 'Finance undergraduate, postgraduate, diploma, professional, and vocational programs across top study abroad destinations.',
    side: 'left' as const,
    emoji: '🌍',
  },
  {
    title: 'Expert Guidance at Every Step',
    desc: 'From lender selection to documentation and approval, our experts guide you throughout the entire loan journey.',
    side: 'right' as const,
    emoji: '🎯',
  },
];

/* ── Decorative curved arrow ─────────────────────────────────────── */
function CurvedArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="38"
      height="22"
      viewBox="0 0 40 24"
      fill="none"
      className={`${flip ? 'scale-x-[-1]' : ''}`}
      style={{ filter: 'drop-shadow(0 1px 2px rgba(110,0,224,0.15))' }}
    >
      <path
        d="M2 20 C8 18 12 4 20 4 C28 4 32 14 38 4"
        stroke="url(#arrowGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M36 2 L38 4 L34 6"
        stroke="url(#arrowGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#6E00E0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Main Component ──────────────────────────────────────────────── */
export function EduLoanTrusted() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /* Plane descends 0 → ~88% of the timeline as user scrolls */
  const planeTop = useTransform(scrollYProgress, [0.05, 0.82], ['0%', '88%']);
  /* Progress line fills */
  const lineScale = useTransform(scrollYProgress, [0.05, 0.82], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fdfaff] to-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Outer gradient‑border wrapper ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] sm:rounded-[40px] p-[2.5px]"
          style={{
            background:
              'linear-gradient(135deg, #c084fc 0%, #e9d5ff 30%, #fde68a 60%, #e9d5ff 80%, #c084fc 100%)',
          }}
        >
          {/* ── Inner card ───────────────────────────────────────── */}
          <div className="rounded-[30px] sm:rounded-[38px] bg-gradient-to-br from-[#fefcff] via-white to-[#faf5ff] px-5 sm:px-10 md:px-16 py-12 md:py-18 relative overflow-hidden">

            {/* Ambient background blurs */}
            <div className="pointer-events-none absolute -top-28 -right-28 w-80 h-80 rounded-full bg-[#e9d5ff]/25 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-[#fef3c7]/25 blur-[80px]" />
            <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#f3e8ff]/15 blur-[100px]" />

            {/* ── Section Header ─────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14 md:mb-20 relative z-10"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-1.5 bg-[#f3ebff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              >
                ✦ Why Students Trust Us
              </motion.span>
              <h2 className="text-3xl md:text-[2.65rem] font-black leading-tight">
                <span className="bg-gradient-to-r from-[#7c3aed] via-[#6E00E0] to-[#a855f7] bg-clip-text text-transparent">
                  Trusted by Students Worldwide
                </span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg mt-3 max-w-lg mx-auto leading-relaxed">
                Join thousands of students who have successfully secured education loans through Student&apos;s Choice.
              </p>
            </motion.div>

            {/* ── TIMELINE ───────────────────────────────────────── */}
            <div className="relative z-10 min-h-[700px] md:min-h-[850px]">

              {/* ── Vertical rail (faint background) ── */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#e9d5ff]/50 via-[#d8b4fe]/30 to-[#e9d5ff]/50" />

              {/* ── Animated progress line ── */}
              <motion.div
                style={{ scaleY: lineScale }}
                className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#6E00E0] via-[#a855f7] to-[#c084fc] origin-top"
              />

              {/* ── Scrolling Airplane ✈️ ── */}
              <motion.div
                style={{ top: planeTop }}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 z-30 pointer-events-none will-change-transform"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#6d28d9] flex items-center justify-center shadow-[0_4px_24px_rgba(110,0,224,0.5)] ring-[3px] ring-white/90">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                  </div>
                  {/* Trail glow */}
                  <div className="mx-auto mt-0.5 w-1.5 h-6 rounded-full bg-gradient-to-b from-[#6E00E0]/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* ── Timeline Items ── */}
              <div className="flex flex-col gap-10 md:gap-14 pt-6 pb-8">
                {TRUST_POINTS.map((item, i) => {
                  const isLeft = item.side === 'left';

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      {/* ─── Desktop layout (3-column grid) ─── */}
                      <div className="hidden md:grid grid-cols-[1fr_60px_1fr] items-center">

                        {/* Left column */}
                        <div className={`flex ${isLeft ? 'justify-end' : 'justify-end'}`}>
                          {isLeft ? (
                            <div className="text-right max-w-[300px] pr-6 relative group">
                              <div className="absolute -top-6 right-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                <CurvedArrow />
                              </div>
                              <h3 className="text-[17px] font-extrabold text-[#6E00E0] mb-1.5 group-hover:text-[#6d28d9] transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-gray-500 text-[13px] leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ) : (
                            <div />
                          )}
                        </div>

                        {/* Center icon node */}
                        <div className="flex justify-center">
                          <motion.div
                            whileHover={{ scale: 1.18, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                            className="w-[54px] h-[54px] rounded-full bg-white border-[3px] border-[#d8b4fe] shadow-[0_4px_20px_rgba(110,0,224,0.18)] flex items-center justify-center text-2xl cursor-pointer hover:border-[#6E00E0] hover:shadow-[0_8px_32px_rgba(110,0,224,0.3)] transition-all duration-300 relative z-10"
                          >
                            {item.emoji}
                          </motion.div>
                        </div>

                        {/* Right column */}
                        <div className="flex justify-start">
                          {!isLeft ? (
                            <div className="text-left max-w-[300px] pl-6 relative group">
                              <div className="absolute -top-6 left-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                <CurvedArrow flip />
                              </div>
                              <h3 className="text-[17px] font-extrabold text-[#6E00E0] mb-1.5 group-hover:text-[#6d28d9] transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-gray-500 text-[13px] leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ) : (
                            <div />
                          )}
                        </div>
                      </div>

                      {/* ─── Mobile layout ─── */}
                      <div className="md:hidden flex items-start gap-4 pl-14">
                        {/* Dot on the rail */}
                        <div className="absolute left-[14px] top-1 w-6 h-6 rounded-full bg-white border-[3px] border-[#d8b4fe] shadow-[0_2px_10px_rgba(110,0,224,0.18)] flex items-center justify-center text-xs z-10">
                          {item.emoji}
                        </div>
                        <div>
                          <h3 className="text-base font-extrabold text-[#6E00E0] mb-0.5">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom endpoint glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 bottom-0 z-20"
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#fde68a] to-[#f59e0b] shadow-[0_2px_14px_rgba(245,158,11,0.4)] ring-[3px] ring-white/80" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
