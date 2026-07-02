'use client';

import { motion } from 'framer-motion';

const WHY_US = [
  {
    icon: '🏦',
    title: '15+ Lending Partners',
    desc: 'Access public banks, private banks & NBFCs — all under one roof. We match you to the right lender.',
    color: 'from-[#6E00E0] to-[#6f1ed0]',
  },
  {
    icon: '⚡',
    title: 'Faster Processing',
    desc: 'Skip the queues. Our expert-guided process reduces application time and eliminates common delays.',
    color: 'from-[#f59e0b] to-[#d97706]',
  },
  {
    icon: '🎯',
    title: 'Higher Approval Rate',
    desc: 'Smart lender matching + expert document review = significantly higher approval probability.',
    color: 'from-[#10b981] to-[#059669]',
  },
  {
    icon: '🛡️',
    title: 'Collateral-Free Options',
    desc: 'We help you find unsecured loans upto ₹75 Lakhs with no collateral required for top universities.',
    color: 'from-[#3b82f6] to-[#2563eb]',
  },
  {
    icon: '📄',
    title: 'End-to-End Support',
    desc: 'From document preparation to final disbursement, our team walks with you at every step.',
    color: 'from-[#ec4899] to-[#db2777]',
  },
  {
    icon: '💰',
    title: 'Best Interest Rates',
    desc: 'We negotiate on your behalf and compare offers to ensure you get the most competitive rate.',
    color: 'from-[#8b5cf6] to-[#7c3aed]',
  },
];

const STATS = [
  { value: '₹15,000 Cr+', label: 'Loans Sanctioned' },
  { value: '50,000+', label: 'Students Helped' },
  { value: '15+', label: 'Lender Partners' },
  { value: '98%', label: 'Success Rate' },
];

export function EduLoanWhyUs() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#f3ebff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1f1147] leading-tight">
            Your Trusted Partner for
            <br />
            <span className="text-[#6E00E0]">Overseas Education Loans</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            We simplify the complex world of education financing so you can focus on what matters — your studies.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-gradient-to-br from-[#6E00E0] to-[#6f1ed0] p-5 text-center shadow-[0_8px_24px_rgba(110,0,224,0.25)]"
            >
              <p className="text-white font-black text-2xl md:text-3xl">{s.value}</p>
              <p className="text-white/80 text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="group relative rounded-3xl border border-[#ebe4fb] bg-white p-7 shadow-[0_8px_24px_rgba(110,0,224,0.07)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(110,0,224,0.15)] hover:border-[#d0b8f8] transition-all duration-300"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-extrabold text-[#1f2937] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              <div className="absolute inset-x-4 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6E00E0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
