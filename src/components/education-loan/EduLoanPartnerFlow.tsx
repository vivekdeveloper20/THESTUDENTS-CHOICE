'use client';

import { motion } from 'framer-motion';

/* ── Partner data ────────────────────────────────────────────────── */
const LEFT_PARTNERS = [
  { name: 'Axis Bank', logo: '/assets/images/banks/Axis.png' },
  { name: 'Yes Bank', logo: '/assets/images/banks/Yes.png' },
  { name: 'IDFC First Bank', logo: '/assets/images/banks/IDFC.png' },
  { name: 'Bank of Baroda', logo: '/assets/images/banks/BOB.png' },
  { name: 'PNB', logo: '/assets/images/banks/PNB.png' },
  { name: 'Union Bank', logo: '/assets/images/banks/Union.png' },
  { name: 'ICICI Bank', logo: '/assets/images/banks/ICICI.png' },
];

const RIGHT_PARTNERS = [
  { name: 'Credila', logo: '/assets/images/banks/Credila.png' },
  { name: 'Auxilo', logo: '/assets/images/banks/Auxilo.png' },
  { name: 'Avanse', logo: '/assets/images/banks/Avanse.png' },
  { name: 'InCred Finance', logo: '/assets/images/banks/Incred.png' },
  { name: 'Tata Capital', logo: '/assets/images/banks/Tata.png' },
  { name: 'Prodigy Finance', logo: '/assets/images/banks/Prodigy.png' },
  { name: 'Poonawalla Fincorp', logo: '/assets/images/banks/Poonawalla.png' },
];

/* ── Partner card ────────────────────────────────────────────────── */
function PartnerCard({
  name,
  logo,
  index,
  side,
}: {
  name: string;
  logo: string;
  index: number;
  side: 'left' | 'right';
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === 'left' ? -30 : 30,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: 0.55,
        delay: 0.06 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
        scale: 1.04,
        boxShadow: '0 12px 28px rgba(132,36,232,0.18)',
      }}
      className="relative bg-white rounded-xl border border-[#ebe4fb]/80 shadow-[0_2px_12px_rgba(132,36,232,0.06)] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:border-[#c084fc] group"
      style={{ height: 60, width: '100%' }}
    >
      <div className="absolute inset-x-3 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#8424e8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <img
        src={logo}
        alt={name}
        className="max-h-9 max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </motion.div>
  );
}

/* ── Center logo node ────────────────────────────────────────────── */
function CenterNode() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 180, damping: 16 }}
      className="relative z-20 flex flex-col items-center"
    >
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.12, 0.25],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#8424e8]/20 blur-xl"
      />
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#8424e8] via-[#7c3aed] to-[#6d28d9] shadow-[0_8px_40px_rgba(132,36,232,0.4)] flex items-center justify-center ring-4 ring-white/80">
        <img
          src="/assets/images/white-logo.png"
          alt="Student's Choice Consultancy"
          className="w-14 h-14 md:w-18 md:h-18 object-contain drop-shadow-lg"
        />
      </div>
      <div className="mt-2.5 text-center">
        <p className="text-sm md:text-base font-extrabold text-[#1f1147] leading-tight">
          Student&apos;s Choice
        </p>
        <p className="text-[10px] md:text-xs text-[#8424e8] font-semibold tracking-wider uppercase">
          Consultancy
        </p>
      </div>
    </motion.div>
  );
}

/* ── Tree branch SVG paths (proper wireflow branches) ────────── */
function BranchSVG({ side }: { side: 'left' | 'right' }) {
  const count = 7;
  /* We generate branches like a tree: main trunk from center then individual curves to each card */
  const paths: string[] = [];

  /* Total height is proportional. Each card row ~ 64px spacing = 52h + 12 gap */
  /* SVG viewBox height set to accommodate all 7 cards */
  const cardH = 52;
  const gap = 12;
  const totalH = count * cardH + (count - 1) * gap; // 7*52 + 6*12 = 436
  const midY = totalH / 2;

  for (let i = 0; i < count; i++) {
    const cardCenterY = i * (cardH + gap) + cardH / 2;
    /* Horizontal: from card edge → trunk → center */
    if (side === 'left') {
      /* Card is on left, lines go: card → trunk → center-right */
      const startX = 100; // card right edge
      const trunkX = 140; // trunk column
      const endX = 180; // center node left side
      paths.push(
        `M ${startX} ${cardCenterY} ` +
        `L ${trunkX} ${cardCenterY} ` +
        `Q ${trunkX} ${cardCenterY + (midY - cardCenterY) * 0.4} ${trunkX} ${midY} ` +
        `L ${endX} ${midY}`
      );
    } else {
      const startX = 80; // card left edge
      const trunkX = 40;
      const endX = 0;
      paths.push(
        `M ${startX} ${cardCenterY} ` +
        `L ${trunkX} ${cardCenterY} ` +
        `Q ${trunkX} ${cardCenterY + (midY - cardCenterY) * 0.4} ${trunkX} ${midY} ` +
        `L ${endX} ${midY}`
      );
    }
  }

  const svgW = side === 'left' ? 180 : 80;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={side === 'left' ? `0 0 ${svgW} ${totalH}` : `0 0 ${svgW + 100} ${totalH}`}
      preserveAspectRatio="none"
      fill="none"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={`branchGrad-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={side === 'left' ? '#d8b4fe' : '#8424e8'} />
          <stop offset="100%" stopColor={side === 'left' ? '#8424e8' : '#d8b4fe'} />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={`url(#branchGrad-${side})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 * i, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}

/* ── Mobile layout ───────────────────────────────────────────────── */
function MobileLayout() {
  const allPartners = [...LEFT_PARTNERS, ...RIGHT_PARTNERS];
  return (
    <div className="md:hidden flex flex-col items-center gap-6 mt-10">
      <CenterNode />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-[3px] h-8 rounded-full bg-gradient-to-b from-[#8424e8] to-[#c084fc] origin-top"
      />
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {allPartners.map((p, i) => (
          <PartnerCard key={p.name} {...p} index={i} side={i < LEFT_PARTNERS.length ? 'left' : 'right'} />
        ))}
      </div>
    </div>
  );
}

/* ── Desktop wireflow layout ─────────────────────────────────────── */
function DesktopLayout() {
  return (
    <div className="hidden md:flex items-center justify-center mt-14 relative">
      {/* Left partners column */}
      <div className="flex flex-col gap-3 w-[200px] shrink-0 relative z-10">
        {LEFT_PARTNERS.map((p, i) => (
          <PartnerCard key={p.name} {...p} index={i} side="left" />
        ))}
      </div>

      {/* Left connecting branches area */}
      <div className="relative w-[120px] lg:w-[160px] shrink-0" style={{ height: 492 }}>
        <LeftBranches />
      </div>

      {/* Center node */}
      <div className="relative z-20 shrink-0 mx-2">
        <CenterNode />
      </div>

      {/* Right connecting branches area */}
      <div className="relative w-[120px] lg:w-[160px] shrink-0" style={{ height: 492 }}>
        <RightBranches />
      </div>

      {/* Right partners column */}
      <div className="flex flex-col gap-3 w-[200px] shrink-0 relative z-10">
        {RIGHT_PARTNERS.map((p, i) => (
          <PartnerCard key={p.name} {...p} index={i} side="right" />
        ))}
      </div>
    </div>
  );
}

/* ── Left branch lines (card → center) using clean tree structure ── */
function LeftBranches() {
  const count = LEFT_PARTNERS.length;
  const cardH = 60;
  const gap = 12;
  const totalH = count * cardH + (count - 1) * gap;
  const midY = totalH / 2;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 200 ${totalH}`}
      preserveAspectRatio="none"
      fill="none"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d8b4fe" />
          <stop offset="100%" stopColor="#8424e8" />
        </linearGradient>
      </defs>
      {Array.from({ length: count }).map((_, i) => {
        const cardMidY = i * (cardH + gap) + cardH / 2;
        /* Trunk X position (vertical spine) */
        const trunkX = 60;
        /* Path: from left edge → horizontal to trunk → curve down/up to midY → horizontal to right edge */
        const d =
          `M 0 ${cardMidY} ` +
          `L ${trunkX} ${cardMidY} ` +
          `C ${trunkX + 30} ${cardMidY}, ${trunkX + 30} ${midY}, ${trunkX + 60} ${midY} ` +
          `L 200 ${midY}`;

        return (
          <motion.path
            key={i}
            d={d}
            stroke="url(#leftGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 * i, ease: 'easeInOut' }}
          />
        );
      })}
      {/* Trunk vertical line */}
      <motion.line
        x1="60"
        y1={0 * (cardH + gap) + cardH / 2}
        x2="60"
        y2={(count - 1) * (cardH + gap) + cardH / 2}
        stroke="url(#leftGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </svg>
  );
}

/* ── Right branch lines (center → card) ─────────────────────────── */
function RightBranches() {
  const count = RIGHT_PARTNERS.length;
  const cardH = 60;
  const gap = 12;
  const totalH = count * cardH + (count - 1) * gap;
  const midY = totalH / 2;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 200 ${totalH}`}
      preserveAspectRatio="none"
      fill="none"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="rightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8424e8" />
          <stop offset="100%" stopColor="#d8b4fe" />
        </linearGradient>
      </defs>
      {Array.from({ length: count }).map((_, i) => {
        const cardMidY = i * (cardH + gap) + cardH / 2;
        const trunkX = 140;
        /* Path: from left (center side) → trunk → horizontal to card */
        const d =
          `M 0 ${midY} ` +
          `L ${trunkX - 60} ${midY} ` +
          `C ${trunkX - 30} ${midY}, ${trunkX - 30} ${cardMidY}, ${trunkX} ${cardMidY} ` +
          `L 200 ${cardMidY}`;

        return (
          <motion.path
            key={i}
            d={d}
            stroke="url(#rightGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 * i, ease: 'easeInOut' }}
          />
        );
      })}
      {/* Trunk vertical line */}
      <motion.line
        x1="140"
        y1={0 * (cardH + gap) + cardH / 2}
        x2="140"
        y2={(count - 1) * (cardH + gap) + cardH / 2}
        stroke="url(#rightGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </svg>
  );
}

/* ── Main Section Component ──────────────────────────────────────── */
export function EduLoanPartnerFlow() {
  return (
    <section
      id="partner-flow"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{
        background:
          'linear-gradient(180deg, #ffffff 0%, #faf5ff 15%, #f3e8ff 50%, #faf5ff 85%, #ffffff 100%)',
      }}
    >
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute top-20 left-[8%] w-64 h-64 rounded-full bg-[#e9d5ff]/30 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-20 right-[8%] w-72 h-72 rounded-full bg-[#fde68a]/20 blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-2"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur border border-[#e9d5ff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5 shadow-sm"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#8424e8] animate-pulse" />
            Our Lending Network
          </motion.span>
          <h2 className="text-3xl md:text-[2.75rem] font-black leading-tight">
            <span className="text-[#1f1147]">Connected to </span>
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#8424e8] to-[#a855f7] bg-clip-text text-transparent">
              15+ Leading Lenders
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-3 max-w-xl mx-auto leading-relaxed">
            One application, multiple offers. We connect you with India&apos;s top public banks, private banks &amp; NBFCs for the best education loan deal.
          </p>
        </motion.div>

        {/* ── Desktop wireflow ── */}
        <DesktopLayout />

        {/* ── Mobile layout ── */}
        <MobileLayout />

        {/* ── Bottom tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-[#ebe4fb] rounded-full px-6 py-3 shadow-md">
            <span className="text-2xl">🤝</span>
            <span className="text-sm font-semibold text-[#1f1147]">
              Partnered with India&apos;s most trusted financial institutions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
