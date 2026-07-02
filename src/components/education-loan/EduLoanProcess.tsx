'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '1',
    icon: '🔍',
    title: 'Check Your Eligibility',
    desc: 'Use our free eligibility checker or talk to an expert. We analyse your academic profile, university, and financial background in minutes.',
  },
  {
    number: '2',
    icon: '🤝',
    title: 'Get Matched with Lenders',
    desc: 'We map your profile to the best-fit lenders from 15+ banks and NBFCs — public, private, and NBFCs — and present you the top options.',
  },
  {
    number: '3',
    icon: '📋',
    title: 'Document Preparation',
    desc: 'Our team helps you prepare a complete, error-free document package tailored to your chosen lender\'s specific requirements.',
  },
  {
    number: '4',
    icon: '🚀',
    title: 'Application & Follow-up',
    desc: 'We submit your application and actively follow up with the bank so you never have to chase anyone. Real-time status updates included.',
  },
  {
    number: '5',
    icon: '✅',
    title: 'Loan Approval & Disbursement',
    desc: 'Receive your sanction letter and get funds disbursed directly to your university — on time, every time.',
  },
];

export function EduLoanProcess() {
  return (
    <section className="w-full bg-gradient-to-b from-[#faf7ff] to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#f3ebff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1f1147]">
            From Application to Approval
            <br />
            <span className="text-[#6E00E0]">in 5 Simple Steps</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Our proven process has helped 50,000+ students secure education loans without stress.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 relative">
          {/* Connecting line on desktop */}
          <div className="pointer-events-none hidden lg:block absolute top-10 left-[9%] right-[9%] h-[2px] bg-gradient-to-r from-[#6E00E0]/20 via-[#6E00E0] to-[#6E00E0]/20" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex-1 flex flex-col items-center text-center px-4 group"
            >
              {/* Circle number */}
              <div className="relative z-10 mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#6f1ed0] text-white font-black text-2xl flex items-center justify-center shadow-[0_10px_28px_rgba(110,0,224,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {step.icon}
              </div>
              <span className="inline-block bg-[#f3ebff] text-[#6E00E0] text-xs font-bold px-3 py-1 rounded-full mb-3">
                Step {step.number}
              </span>
              <h3 className="text-lg font-extrabold text-[#1f2937] mb-2 leading-tight">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/contact-us?type=consultation"
            id="edu-loan-process-cta"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#6E00E0] to-[#6f1ed0] text-white font-bold px-10 py-4 rounded-full shadow-[0_12px_30px_rgba(110,0,224,0.3)] hover:brightness-110 hover:scale-105 transition-all"
          >
            Start My Loan Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
