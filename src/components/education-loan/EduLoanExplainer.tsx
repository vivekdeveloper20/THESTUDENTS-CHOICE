'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WHAT_POINTS = [
  {
    icon: '🎓',
    text: 'Covers tuition fees, accommodation, travel, insurance & other academic costs.',
  },
  {
    icon: '🏦',
    text: 'Offered by public banks, private banks and NBFCs with flexible repayment terms.',
  },
  {
    icon: '🛡️',
    text: 'Moratorium period during studies — no EMI pressure while you focus on learning.',
  },
  {
    icon: '💸',
    text: 'Tax benefit on interest paid under Section 80E for up to 8 years.',
  },
];

const SECURED = [
  'Pledge property or fixed assets as collateral.',
  'Lower interest rate compared to unsecured loans.',
  'Longer repayment tenure for better flexibility.',
  'Ideal for higher loan amounts (₹50 Lakh+).',
  'Best for students with family assets to offer.',
];

const UNSECURED = [
  'No collateral required — approved on profile & income.',
  'Available up to ₹75 Lakh for top-ranked universities.',
  'Slightly higher rate but fast processing & approval.',
  'Suitable for students without property or assets.',
  'Ideal for studying in USA, UK, Canada, Australia.',
];

const UNSECURED_CATEGORIES = [
  {
    icon: '🌐',
    title: 'No Collateral, No Co-borrower',
    desc: 'Offered by international lenders. Your university must be listed by the lender for eligibility.',
  },
  {
    icon: '🤝',
    title: 'Co-borrower Abroad',
    desc: 'A citizen or permanent resident co-borrower in the destination country can significantly improve approval chances.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Co-applicant in India',
    desc: 'Parent or guardian with stable income acts as co-applicant. Most common option for Indian students.',
  },
];

export function EduLoanExplainer() {
  return (
    <div className="w-full">
      {/* ─── SECTION 1: What is an Education Loan ─────────────────── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f8f4ff] via-white to-[#f0e8ff] py-20 px-4 sm:px-6 lg:px-8">
        {/* BG glows */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#8424e8]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-fuchsia-200/20 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-[#8424e8]/10 text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Education Loan 101
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1f1147] leading-tight mb-5">
                What is an
                <br />
                <span className="text-[#8424e8]">Education Loan?</span>
              </h2>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-5">
                Study Abroad Without Financial Stress — Powered by Student&apos;s Choice
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                An education loan is a smart financial solution that helps students achieve their dream of studying
                abroad without worrying about upfront expenses. It covers essential costs such as tuition fees,
                accommodation, travel, insurance, and other academic requirements.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Student&apos;s Choice, we simplify your entire loan journey. Based on your profile, we connect you
                with multiple trusted lenders and help you choose the most suitable and affordable option — from
                eligibility check and documentation to loan approval and disbursement.
              </p>

              <Link
                href="/contact-us?type=consultation"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8424e8] to-[#6f1ed0] text-white font-bold px-7 py-3.5 rounded-full shadow-[0_12px_28px_rgba(132,36,232,0.3)] hover:brightness-110 hover:scale-105 transition-all"
              >
                Talk to a Loan Expert Free →
              </Link>
            </motion.div>

            {/* Right: Feature pills grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Big decorative card behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] rounded-[40px] rotate-2 opacity-10" />

              <div className="relative rounded-[32px] border border-[#e8dcff] bg-white/80 backdrop-blur-sm p-8 shadow-[0_20px_60px_rgba(132,36,232,0.12)]">
                {/* Header badge */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#f0e8ff]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] flex items-center justify-center text-xl shadow-lg">
                    💡
                  </div>
                  <div>
                    <p className="font-extrabold text-[#1f2937] text-lg">Why Take an Education Loan?</p>
                    <p className="text-gray-400 text-sm">4 key benefits at a glance</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {WHAT_POINTS.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-4 bg-[#faf6ff] rounded-2xl px-5 py-4 border border-[#ede4ff] hover:border-[#c8a8f8] hover:shadow-[0_6px_18px_rgba(132,36,232,0.1)] transition-all duration-300"
                    >
                      <span className="text-2xl">{point.icon}</span>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">{point.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom stat strip */}
                <div className="mt-6 pt-5 border-t border-[#f0e8ff] grid grid-cols-3 gap-3 text-center">
                  {[
                    { val: '₹75L', label: 'Max Unsecured' },
                    { val: '15+', label: 'Lender Partners' },
                    { val: '24hr', label: 'Expert Response' },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-[#8424e8] font-black text-xl">{s.val}</p>
                      <p className="text-gray-400 text-xs font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: Which Loan is Right for You ────────────────── */}
      <section className="relative w-full bg-[#1f1147] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* BG glows */}
        <div className="pointer-events-none absolute -top-24 left-0 w-96 h-96 rounded-full bg-[#8424e8]/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#8424e8]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Choose Your Loan Type
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Which Education Loan is
              <br />
              <span className="text-[#c084fc]">Right for You?</span>
            </h2>
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              Understand your options and choose the best loan type based on your profile, budget, and repayment needs.
            </p>
          </motion.div>

          {/* Secured vs Unsecured comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Secured */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-white/08 backdrop-blur-sm p-8 overflow-hidden group hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-[#6366f1]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#6366f1] flex items-center justify-center text-xl shadow-lg">
                  🏠
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-xl">Secured Education Loans</h3>
                  <p className="text-white/50 text-xs">With Collateral</p>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-7">
                {SECURED.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/40 text-[#60a5fa] text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-white/75 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-us?type=consultation"
                className="inline-flex items-center justify-center w-full border border-[#3b82f6]/50 text-[#60a5fa] font-bold px-6 py-3 rounded-xl hover:bg-[#3b82f6]/15 transition-all text-sm"
              >
                Explore Secured Loans →
              </Link>
            </motion.div>

            {/* Unsecured */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl border border-[#8424e8]/40 bg-gradient-to-br from-[#8424e8]/20 to-[#6f1ed0]/10 backdrop-blur-sm p-8 overflow-hidden group hover:border-[#8424e8]/60 transition-all duration-300 shadow-[0_0_40px_rgba(132,36,232,0.2)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8424e8] to-[#c084fc]" />
              {/* Most popular tag */}
              <div className="absolute top-5 right-5">
                <span className="bg-[#8424e8] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8424e8] to-[#c084fc] flex items-center justify-center text-xl shadow-lg">
                  🚀
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-xl">Unsecured Education Loans</h3>
                  <p className="text-white/50 text-xs">No Collateral Required</p>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-7">
                {UNSECURED.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8424e8]/30 border border-[#8424e8]/50 text-[#c084fc] text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-white/80 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-us?type=consultation"
                className="inline-flex items-center justify-center w-full bg-[#8424e8] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#6f1ed0] transition-all text-sm shadow-[0_8px_20px_rgba(132,36,232,0.4)]"
              >
                Apply for Unsecured Loan →
              </Link>
            </motion.div>
          </div>

          {/* Sub-categories of Unsecured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl border border-white/10 bg-white/05 backdrop-blur-sm p-8"
          >
            <p className="text-center text-[#c084fc] text-sm font-bold uppercase tracking-wider mb-6">
              Among Unsecured Education Loans — Different Categories for Diverse Needs
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {UNSECURED_CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/05 p-5 hover:border-[#8424e8]/40 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <h4 className="text-white font-extrabold text-sm leading-snug">{cat.title}</h4>
                  <p className="text-white/55 text-xs leading-relaxed">{cat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
