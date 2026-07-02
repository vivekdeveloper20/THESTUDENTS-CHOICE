'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SERVICES = [
  {
    icon: '💰',
    title: 'Student Loan',
    points: [
      'Loan options from NBFCs, public & private banks',
      'Faster and timely loan disbursement',
    ],
    color: 'from-[#7c3aed] to-[#6E00E0]',
  },
  {
    icon: '💱',
    title: 'Forex',
    points: [
      'Block Account GIC for Canada',
      'Forex Card Currency Exchange',
      'Prepaid/Postpaid SIM cards with free incoming calls',
    ],
    color: 'from-[#6E00E0] to-[#a855f7]',
  },
  {
    icon: '🛡️',
    title: 'Insurance',
    points: [
      'Cashless treatment in hospitals around the world',
      'Personal Accident Cover',
    ],
    color: 'from-[#6d28d9] to-[#6E00E0]',
  },
  {
    icon: '🏦',
    title: 'International Bank Account',
    points: [
      'Open an account before the move',
      'Pay for your tuition, rent & other expenses',
    ],
    color: 'from-[#7c3aed] to-[#6d28d9]',
  },
  {
    icon: '🎓',
    title: 'Admission Counseling',
    points: [
      'University shortlisting & application support',
      'SOP & LOR review by experts',
    ],
    color: 'from-[#6E00E0] to-[#7c3aed]',
  },
  {
    icon: '✈️',
    title: 'Visa Assistance',
    points: [
      'End-to-end visa documentation support',
      '98% student visa success rate',
    ],
    color: 'from-[#6d28d9] to-[#6E00E0]',
  },
  {
    icon: '🏠',
    title: 'Accommodation Help',
    points: [
      'Student housing options near your university',
      'Verified listings with zero brokerage',
    ],
    color: 'from-[#7c3aed] to-[#a855f7]',
  },
];

const APPLY_STEPS = [
  {
    number: '1',
    title: 'Online Application for Student Loan',
    desc: 'Fill out a quick online form with your basic details such as course, country, university, and loan requirement.',
    position: 'top',
  },
  {
    number: '2',
    title: 'Document Submission',
    desc: 'Submit the required documents like admission letter, KYC, academic records, income proof, and bank statements.',
    position: 'top',
  },
  {
    number: '3',
    title: 'Profile Verification',
    desc: 'Our experts review your profile and verify your application details to match you with the best loan options.',
    position: 'top',
  },
  {
    number: '4',
    title: 'Approval & Sanction',
    desc: 'Once approved, you receive the sanction letter with loan amount, terms, and conditions.',
    position: 'bottom',
  },
  {
    number: '5',
    title: 'Disbursal',
    desc: 'After acceptance and final formalities, the loan amount is disbursed as per university fee schedule or directly to your account.',
    position: 'bottom',
  },
];

export function EduLoanServicesAndApply() {
  return (
    <div className="w-full">

      {/* ─── SECTION 1: Zero Service Charges ─────────────────────── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f8f4ff] via-[#fdfaff] to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -top-16 right-0 w-80 h-80 rounded-full bg-[#6E00E0]/08 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-fuchsia-200/15 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Left: Headline */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-[280px] shrink-0"
            >
              <span className="inline-flex items-center gap-2 border border-[#d4b8f8] bg-white text-[#6E00E0] text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-sm">
                ✦ Zero service charges
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#1f1147] leading-tight mb-6">
                Explore all{' '}
                <span className="text-[#6E00E0]">7 services</span> we offer at{' '}
                <span className="text-[#6E00E0]">Zero Charges</span> Whatsoever!
              </h2>
              <Link
                href="tel:+918888888888"
                className="inline-flex items-center gap-2 border-2 border-[#6E00E0] text-[#6E00E0] font-bold px-6 py-3 rounded-full hover:bg-[#6E00E0] hover:text-white transition-all duration-300 text-sm"
              >
                📞 Call an Expert
              </Link>
            </motion.div>

            {/* Right: Service cards grid */}
            <div className="flex-1 overflow-hidden pb-2">
              <div className="flex gap-4 animate-services-scroll">
                {SERVICES.map((svc, i) => (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className={`group relative w-52 flex-shrink-0 rounded-2xl bg-gradient-to-br ${svc.color} p-5 shadow-[0_10px_28px_rgba(110,0,224,0.22)] hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(110,0,224,0.35)] transition-all duration-300 cursor-pointer overflow-hidden`}
                  >
                    {/* Glow circle */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 blur-xl pointer-events-none" />

                    <div className="text-3xl mb-3">{svc.icon}</div>
                    <h3 className="text-white font-extrabold text-sm mb-3 leading-snug">{svc.title}</h3>
                    <ul className="flex flex-col gap-1.5">
                      {svc.points.map((p) => (
                        <li key={p} className="flex items-start gap-1.5">
                          <span className="text-white/70 text-xs mt-0.5">•</span>
                          <span className="text-white/85 text-xs leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
                {/* Duplicate for seamless loop */}
                {SERVICES.map((svc, i) => (
                  <motion.div
                    key={`${svc.title}-duplicate`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className={`group relative w-52 flex-shrink-0 rounded-2xl bg-gradient-to-br ${svc.color} p-5 shadow-[0_10px_28px_rgba(110,0,224,0.22)] hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(110,0,224,0.35)] transition-all duration-300 cursor-pointer overflow-hidden`}
                  >
                    {/* Glow circle */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 blur-xl pointer-events-none" />

                    <div className="text-3xl mb-3">{svc.icon}</div>
                    <h3 className="text-white font-extrabold text-sm mb-3 leading-snug">{svc.title}</h3>
                    <ul className="flex flex-col gap-1.5">
                      {svc.points.map((p) => (
                        <li key={p} className="flex items-start gap-1.5">
                          <span className="text-white/70 text-xs mt-0.5">•</span>
                          <span className="text-white/85 text-xs leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: How to Apply ──────────────────────────────── */}
      <section className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#1f1147]">
              How to apply for an{' '}
              <span className="text-[#6E00E0]">Education Loan?</span>
            </h2>
            <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto">
              A simple 5-step process from application to disbursement — we handle it all.
            </p>
          </motion.div>

          {/* Big purple card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[40px] bg-gradient-to-br from-[#6E00E0] via-[#7c3aed] to-[#6d28d9] p-8 md:p-12 overflow-hidden shadow-[0_24px_70px_rgba(110,0,224,0.35)]"
          >
            {/* BG decorations */}
            <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-black/10 blur-3xl" />

            {/* Airplane + pin SVG decoration */}
            <div className="pointer-events-none absolute bottom-6 left-10 opacity-30 hidden lg:block">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="pointer-events-none absolute bottom-14 right-16 opacity-40 hidden lg:block">
              <svg width="56" height="32" viewBox="0 0 56 32" fill="none">
                <path d="M2 28 L18 8 L34 18 L52 4" stroke="white" strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" />
                <path d="M44 2 L54 6 L48 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Dashed connector line */}
            <div className="pointer-events-none hidden lg:block absolute top-[7.5rem] left-[9%] right-[9%] h-[2px]">
              <svg width="100%" height="4" className="w-full">
                <line x1="0" y1="2" x2="100%" y2="2" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="10 8" />
              </svg>
            </div>

            {/* Steps row — top 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
              {APPLY_STEPS.slice(0, 3).map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl p-5 shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#6d28d9] text-white font-black text-sm flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                    <h3 className="text-[#6E00E0] font-extrabold text-[14px] leading-snug">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Steps row — bottom 2 centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {APPLY_STEPS.slice(3).map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  className="relative bg-white rounded-2xl p-5 shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#6d28d9] text-white font-black text-sm flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                    <h3 className="text-[#6E00E0] font-extrabold text-[14px] leading-snug">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
