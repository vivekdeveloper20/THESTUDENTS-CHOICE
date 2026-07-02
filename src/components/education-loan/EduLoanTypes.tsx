'use client';

import { motion } from 'framer-motion';

const LOAN_TYPES = [
  {
    tag: 'Government Banks',
    tagColor: 'bg-blue-100 text-blue-700',
    icon: '🏛️',
    title: 'Public Bank Loans',
    subtitle: 'SBI, PNB, Union Bank, BOB & more',
    rate: '8.15% – 10.5%',
    features: [
      'Subsidised rates under govt. schemes',
      'Up to ₹1.5 Cr for top universities',
      'Moratorium period during study',
      'Tax benefit under Sec 80E',
    ],
    highlight: false,
  },
  {
    tag: 'Most Popular',
    tagColor: 'bg-[#6E00E0] text-white',
    icon: '🏦',
    title: 'Private Bank Loans',
    subtitle: 'ICICI, Axis, IDFC First & more',
    rate: '10% – 13%',
    features: [
      'Faster processing & approval',
      'Collateral-free up to ₹75 Lakhs',
      'Dedicated relationship manager',
      'Up to 15 years repayment tenure',
    ],
    highlight: true,
  },
  {
    tag: 'Flexible Options',
    tagColor: 'bg-emerald-100 text-emerald-700',
    icon: '💼',
    title: 'NBFC / Private Lenders',
    subtitle: 'Credila, Avanse, InCred, Auxilo & more',
    rate: '11% – 15%',
    features: [
      'No collateral for abroad studies',
      'Covers 100% tuition + living costs',
      'Loan for rejected bank applicants',
      'Flexible eligibility criteria',
    ],
    highlight: false,
  },
];

export function EduLoanTypes() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#f3ebff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Loan Options
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1f1147]">
            Explore Loan Options from
            <br />
            <span className="text-[#6E00E0]">Public Banks, Private Banks & NBFCs</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            We compare all options so you get the best interest rate, tenure, and terms for your profile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {LOAN_TYPES.map((loan, i) => (
            <motion.div
              key={loan.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className={`relative rounded-3xl border p-7 flex flex-col transition-all duration-300 ${
                loan.highlight
                  ? 'bg-gradient-to-br from-[#6E00E0] to-[#6f1ed0] border-[#6E00E0] shadow-[0_20px_50px_rgba(110,0,224,0.35)] scale-105'
                  : 'bg-white border-[#ebe4fb] shadow-[0_8px_24px_rgba(110,0,224,0.08)] hover:shadow-[0_16px_36px_rgba(110,0,224,0.15)] hover:-translate-y-1'
              }`}
            >
              {/* Tag */}
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 self-start ${loan.tagColor}`}>
                {loan.tag}
              </span>

              {/* Icon + title */}
              <div className="text-4xl mb-3">{loan.icon}</div>
              <h3 className={`text-2xl font-extrabold mb-1 ${loan.highlight ? 'text-white' : 'text-[#1f2937]'}`}>
                {loan.title}
              </h3>
              <p className={`text-sm mb-4 ${loan.highlight ? 'text-white/75' : 'text-gray-400'}`}>
                {loan.subtitle}
              </p>

              {/* Interest rate */}
              <div className={`rounded-2xl px-4 py-3 mb-6 ${loan.highlight ? 'bg-white/15' : 'bg-[#f3ebff]'}`}>
                <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${loan.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                  Interest Rate (p.a.)
                </p>
                <p className={`text-2xl font-black ${loan.highlight ? 'text-white' : 'text-[#6E00E0]'}`}>
                  {loan.rate}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                {loan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${loan.highlight ? 'bg-white/20 text-white' : 'bg-[#f3ebff] text-[#6E00E0]'}`}>
                      ✓
                    </span>
                    <span className={`text-sm leading-relaxed ${loan.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contact-us?type=consultation"
                className={`inline-flex items-center justify-center font-bold px-6 py-3 rounded-xl transition-all ${
                  loan.highlight
                    ? 'bg-white text-[#6E00E0] hover:bg-[#f3ebff]'
                    : 'bg-gradient-to-r from-[#6E00E0] to-[#6f1ed0] text-white hover:brightness-110'
                }`}
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
