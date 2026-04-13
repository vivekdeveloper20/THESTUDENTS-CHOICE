'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@mantine/core';
import {
  IconBrandWhatsapp,
  IconStarFilled,
  IconUsers,
  IconCurrencyRupee,
  IconBuildingBank,
} from '@tabler/icons-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const APPROVAL_BADGES = [
  { name: 'Vijayalakshmi', amount: '₹70 Lakh', country: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'Rahul Sharma', amount: '₹45 Lakh', country: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'Ananya Iyer', amount: '₹60 Lakh', country: 'Canada', flag: 'https://flagcdn.com/w40/ca.png' },
  { name: 'Sameer Khan', amount: '₹35 Lakh', country: 'Germany', flag: 'https://flagcdn.com/w40/de.png' },
];

const TRUST_CHIPS = ['98% Visa Success', '24x7 Guidance', '100% Transparency'];

const HERO_STATS = [
  {
    key: 'students',
    icon: IconUsers,
    end: 50000,
    format: (n: number) => `${n.toLocaleString('en-IN')}+`,
    label: 'Students Application',
    labelClass: 'uppercase tracking-wide',
  },
  {
    key: 'sanctioned',
    icon: IconCurrencyRupee,
    end: 15000,
    format: (n: number) => `₹${n.toLocaleString('en-IN')} cr+`,
    label: 'Sanctioned',
    labelClass: 'normal-case font-medium text-gray-600',
  },
  {
    key: 'partners',
    icon: IconBuildingBank,
    end: 15,
    format: (n: number) => `${n}+`,
    label: 'Loan Partners',
    labelClass: 'uppercase tracking-wide',
  },
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

function HeroStatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

  const v0 = useCountUp(HERO_STATS[0].end, 1600, started);
  const v1 = useCountUp(HERO_STATS[1].end, 1800, started);
  const v2 = useCountUp(HERO_STATS[2].end, 1400, started);
  const values = [v0, v1, v2];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-5xl mx-auto"
    >
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-[1.35rem] bg-gradient-to-r from-[#8424e8]/35 via-fuchsia-400/25 to-[#8424e8]/35 opacity-80 blur-[1px]"
        aria-hidden
      />
      <div className="relative rounded-[1.25rem] border border-[#e8dcff] bg-white/95 backdrop-blur-md px-4 py-5 sm:px-8 sm:py-6 shadow-[0_12px_40px_rgba(132,36,232,0.12),0_0_0_1px_rgba(255,255,255,0.6)_inset]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-[#eadfff]">
          {HERO_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.key}
                className="group flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-6 py-2 rounded-xl transition-all duration-300 hover:bg-[#faf7ff]/90 hover:scale-[1.02]"
              >
                <div className="mb-2 flex items-center justify-center sm:justify-start gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8424e8]/12 to-fuchsia-500/10 text-[#8424e8] shadow-inner ring-1 ring-[#8424e8]/15 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_16px_rgba(132,36,232,0.2)]">
                    <Icon size={20} stroke={1.75} />
                  </span>
                </div>
                <span className="bg-gradient-to-br from-[#8424e8] via-[#7c3aed] to-[#5b21b6] bg-clip-text font-extrabold text-2xl sm:text-3xl tabular-nums text-transparent md:text-[2rem]">
                  {stat.format(values[i])}
                </span>
                <span
                  className={`mt-1.5 text-[11px] font-bold text-gray-500 sm:text-[12px] ${stat.labelClass}`}
                >
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
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
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-24">
      <div className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#8424e8]/10 blur-3xl"></div>
      <div className="pointer-events-none absolute top-36 right-0 w-80 h-80 rounded-full bg-fuchsia-200/30 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px]">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-[55%] flex flex-col z-10 pt-10"
          >
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2 mb-6 uppercase tracking-wider"
            >
              <IconStarFilled className="text-yellow-400" size={20} />
              <span className="text-[#8424e8] font-bold text-sm">
                Your Ambition, Our Expertise, Global Success
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl lg:text-[68px] font-extrabold text-[#8424e8] leading-[1.1] mb-8"
            >
              Get Guided by India&apos;s
              <br />
              <span className="text-[#520cbd]">Trusted Study</span>
              <br />
              Abroad Experts
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-gray-600 text-lg md:text-xl font-medium mb-12 max-w-xl leading-relaxed"
            >
              From choosing the right university to securing your education loan,
              we support you at every step of your journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {TRUST_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full bg-[#f3ebff] border border-[#e6d9ff] text-[#6f1ed0] text-xs md:text-sm font-semibold px-3.5 py-1.5"
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-5 mb-14"
            >
              <Button
                radius="xl"
                size="lg"
                bg="#8424e8"
                className="font-bold px-10 h-14 hover:scale-105 transition-transform shadow-xl shadow-purple-200 bg-gradient-to-r from-[#8424e8] to-[#6f1ed0]"
              >
                Book Free Consultation
              </Button>
              <Button
                radius="xl"
                size="lg"
                variant="outline"
                color="#8424e8"
                leftSection={<IconBrandWhatsapp size={24} />}
                className="font-bold px-10 h-14 border-2 hover:bg-purple-50 transition-all"
              >
                WhatsApp
              </Button>
            </motion.div>

            {/* Approval Notification Box */}
            <div className="mt-20 relative self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="bg-white border-2 border-[#8424e8] rounded-full pl-6 pr-4 py-2 flex items-center justify-between min-w-[320px] relative z-10 shadow-2xl"
                >
                  <div className="flex flex-col items-start pr-8">
                    <span className="text-[#8424e8] font-extrabold text-[15px]">{badge.name}</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-black font-black text-[18px]">{badge.amount}</span>
                      <span className="text-[#8424e8] text-[12px] font-bold uppercase tracking-tighter">Loan Approved</span>
                    </div>
                  </div>
                  <div className="w-12 h-[30px] rounded overflow-hidden flex-shrink-0 flex items-center justify-center border border-gray-100 shadow-inner">
                    <img 
                      src={badge.flag} 
                      alt={`${badge.country} Flag`} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Confetti Decoration - simple CSS representation */}
              <div className="absolute -top-16 -left-10 w-44 h-36 opacity-30 pointer-events-none z-0" 
                   style={{
                     backgroundImage: 'radial-gradient(circle, #facc15 3px, transparent 3px), radial-gradient(circle, #8424e8 3px, transparent 3px), radial-gradient(circle, #3b82f6 3px, transparent 3px), radial-gradient(circle, #22c55e 3px, transparent 3px)',
                     backgroundSize: '24px 24px, 28px 28px, 34px 34px, 42px 30px',
                     backgroundPosition: '0 0, 12px 12px, 22px 7px, 7px 22px'
                   }}>
              </div>
            </div>

          </motion.div>

          {/* Right Image/Graphic Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-[45%] relative mt-20 lg:mt-0 flex justify-center items-center min-h-[600px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="hidden md:flex absolute top-16 left-6 z-20 rounded-2xl bg-white/95 border border-[#eadfff] px-4 py-3 shadow-[0_10px_24px_rgba(132,36,232,0.15)] items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <div className="text-left">
                <p className="text-[#8424e8] text-xs font-bold uppercase tracking-wide">Live Support</p>
                <p className="text-gray-700 text-sm font-semibold">Expert available now</p>
              </div>
            </motion.div>

            {/* Using the user's provided hero banner image which already contains flags and background circles */}
            <div className="relative z-10 w-full flex justify-center items-center">
              <img 
                src="/assets/images/hero-banner.png" 
                alt="Student Study Abroad Consultancy" 
                className="w-full max-w-[550px] h-auto object-contain animate-float drop-shadow-2xl" 
                draggable="false"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats — full-width bridge below hero columns for stronger hierarchy */}
        <div className="relative z-20 mt-10 lg:mt-6 lg:-translate-y-2 px-0 sm:px-2">
          <HeroStatsBar />
        </div>
      </div>
    </section>
  );
}
