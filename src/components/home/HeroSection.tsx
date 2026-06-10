'use client';

import { useState, useEffect, useRef } from 'react';
import { IconBrandWhatsapp, IconStarFilled } from '@tabler/icons-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const APPROVAL_BADGES = [
  { name: 'Vijayalakshmi', amount: '₹70 Lakh', country: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'Rahul Sharma', amount: '₹45 Lakh', country: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'Ananya Iyer', amount: '₹60 Lakh', country: 'Canada', flag: 'https://flagcdn.com/w40/ca.png' },
  { name: 'Sameer Khan', amount: '₹35 Lakh', country: 'Germany', flag: 'https://flagcdn.com/w40/de.png' },
];

const HERO_STATS = [
  { key: 'students', end: 50000, format: (n: number) => `${n.toLocaleString('en-IN')}+`, label: 'Students Application' },
  { key: 'sanctioned', end: 15000, format: (n: number) => `₹${n.toLocaleString('en-IN')} cr+`, label: 'Sanctioned' },
  { key: 'partners', end: 15, format: (n: number) => `${n}+`, label: 'Loan Partners' },
] as const;

function useCountUp(target: number, durationMs: number, enabled: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, target, durationMs]);
  return value;
}

function HeroStatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [started, setStarted] = useState(false);
  useEffect(() => { if (inView) setStarted(true); }, [inView]);

  const v0 = useCountUp(HERO_STATS[0].end, 1600, started);
  const v1 = useCountUp(HERO_STATS[1].end, 1800, started);
  const v2 = useCountUp(HERO_STATS[2].end, 1400, started);
  const values = [v0, v1, v2];

  return (
    <div ref={ref} className="relative mt-10">
      <div className="relative flex items-stretch divide-x divide-[#e6d9fb]">
        {HERO_STATS.map((stat, i) => (
          <div key={stat.key} className="px-6 first:pl-0 text-center">
            <div className="bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] bg-clip-text text-transparent font-extrabold text-2xl md:text-[28px] tabular-nums leading-none">
              {stat.format(values[i])}
            </div>
            <div className="mt-1.5 text-[12px] font-semibold text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % APPROVAL_BADGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const badge = APPROVAL_BADGES[badgeIndex];

  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-20">
      <div className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#8424e8]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-36 right-0 w-80 h-80 rounded-full bg-fuchsia-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[560px]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col z-10"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-5">
              <IconStarFilled className="text-yellow-400" size={20} />
              <span className="text-[#15112b] font-semibold text-[15px] md:text-base">
                Your Ambition, Our Expertise, Global Success
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-[56px] font-black leading-[1.06] tracking-tight mb-6">
              <span className="bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] bg-clip-text text-transparent">Get Guided by India&apos;s</span>
              <br />
              <span className="text-[#520dd8]">Trusted Study</span>
              <br />
              <span className="bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] bg-clip-text text-transparent">Abroad Experts</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              From choosing the right university to securing your education loan, we support you at every step of your journey.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center font-bold px-8 h-14 rounded-full text-white bg-[#520dd8] hover:bg-[#8c52ff] hover:scale-[1.03] transition-all duration-300 shadow-[0_12px_30px_rgba(82,13,216,0.35)]">
                Book Free Consultation
              </button>
              <button className="inline-flex items-center gap-2 justify-center font-bold px-8 h-14 rounded-full text-white bg-[#520dd8] hover:bg-[#8c52ff] hover:scale-[1.03] transition-all duration-300 shadow-[0_12px_30px_rgba(82,13,216,0.35)]">
                <IconBrandWhatsapp size={22} /> WhatsApp
              </button>
            </div>

            {/* Stats row */}
            <HeroStatsRow />

            {/* Approval Notification Box */}
            <div className="mt-8 relative self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="bg-white border-2 border-[#8424e8] rounded-full pl-6 pr-4 py-2 flex items-center justify-between min-w-[300px] relative z-10 shadow-[0_14px_34px_rgba(132,36,232,0.20)]"
                >
                  <div className="flex flex-col items-start pr-8">
                    <span className="text-[#8424e8] font-extrabold text-[15px]">{badge.name}</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-black font-black text-[18px]">{badge.amount}</span>
                      <span className="text-[#8424e8] text-[12px] font-bold uppercase tracking-tighter">Loan Approved</span>
                    </div>
                  </div>
                  <div className="w-12 h-[30px] rounded overflow-hidden flex-shrink-0 flex items-center justify-center border border-gray-100 shadow-inner">
                    <img src={badge.flag} alt={`${badge.country} Flag`} className="h-full w-full object-cover" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative flex justify-center items-center"
          >
            <div className="relative z-10 w-full flex justify-center items-center">
              <img
                src="/assets/images/hero-banner.svg"
                alt="Student Study Abroad Consultancy"
                className="w-full max-w-[720px] lg:scale-110 lg:-mr-6 h-auto object-contain animate-float drop-shadow-2xl"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
