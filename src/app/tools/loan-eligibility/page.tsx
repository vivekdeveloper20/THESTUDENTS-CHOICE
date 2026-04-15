'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import Link from 'next/link';

export default function LoanEligibilityPage() {
  const [income, setIncome] = useState(60000);
  const [existingEmi, setExistingEmi] = useState(0);
  const [creditScore, setCreditScore] = useState(750);
  const [submitted, setSubmitted] = useState(false);

  const disposable = income - existingEmi;
  const maxEmi = disposable * 0.5;
  const r = 10.5 / 12 / 100;
  const n = 10 * 12;
  const eligibleLoan = maxEmi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
  const creditLabel = creditScore >= 750 ? 'Excellent' : creditScore >= 700 ? 'Good' : creditScore >= 650 ? 'Fair' : 'Poor';
  const creditColor = creditScore >= 750 ? 'text-green-600' : creditScore >= 700 ? 'text-blue-600' : creditScore >= 650 ? 'text-yellow-600' : 'text-red-600';

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-[#1b5e20] via-[#2e7d32] to-[#388e3c]">
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-6xl mb-5">✅</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4">Loan Eligibility Checker</motion.h1>
          <p className="text-white/80 text-lg">Find out how much education loan you qualify for — in under 60 seconds.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white"><path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-8">Your Financial Profile</h2>

            {/* Monthly Income */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Monthly Family Income</label>
                <span className="text-sm font-bold text-[#2e7d32]">₹{income.toLocaleString('en-IN')}</span>
              </div>
              <input type="range" min={10000} max={300000} step={5000} value={income}
                onChange={e => setIncome(+e.target.value)}
                className="w-full accent-[#2e7d32] h-2 rounded-full" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹10K</span><span>₹3L</span></div>
            </div>

            {/* Existing EMI */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Existing EMI Obligations</label>
                <span className="text-sm font-bold text-[#2e7d32]">₹{existingEmi.toLocaleString('en-IN')}</span>
              </div>
              <input type="range" min={0} max={100000} step={1000} value={existingEmi}
                onChange={e => setExistingEmi(+e.target.value)}
                className="w-full accent-[#2e7d32] h-2 rounded-full" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹0</span><span>₹1L</span></div>
            </div>

            {/* Credit Score */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">CIBIL Credit Score</label>
                <span className={`text-sm font-bold ${creditColor}`}>{creditScore} — {creditLabel}</span>
              </div>
              <input type="range" min={300} max={900} step={10} value={creditScore}
                onChange={e => setCreditScore(+e.target.value)}
                className="w-full accent-[#2e7d32] h-2 rounded-full" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>300 Poor</span><span>900 Excellent</span></div>
            </div>

            <button onClick={() => setSubmitted(true)}
              className="w-full bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-green-200">
              Check My Eligibility →
            </button>
          </motion.div>

          {/* Result */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-5">
            <div className={`rounded-3xl p-8 text-center transition-all duration-500 ${submitted ? 'bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] shadow-[0_20px_50px_rgba(46,125,50,0.3)]' : 'bg-gray-50 border border-gray-100'}`}>
              {submitted ? (
                <>
                  <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">You may be eligible for</p>
                  <p className="text-4xl md:text-5xl font-extrabold text-white">
                    ₹{Math.round(eligibleLoan).toLocaleString('en-IN')}
                  </p>
                  <p className="text-white/70 text-sm mt-2">estimated loan amount at 10.5% p.a. over 10 years</p>
                </>
              ) : (
                <div className="py-8">
                  <p className="text-5xl mb-4">📊</p>
                  <p className="text-gray-500 font-medium">Fill in your details and click<br/>"Check My Eligibility" to see your result</p>
                </div>
              )}
            </div>

            {submitted && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-gray-500 mb-1">Disposable Income</p>
                    <p className="font-extrabold text-gray-900">₹{(disposable).toLocaleString('en-IN')}/mo</p>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-gray-500 mb-1">Max Monthly EMI</p>
                    <p className="font-extrabold text-[#2e7d32]">₹{Math.round(maxEmi).toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <div className={`rounded-2xl p-4 border ${creditScore >= 750 ? 'bg-green-50 border-green-200' : creditScore >= 700 ? 'bg-blue-50 border-blue-200' : 'bg-yellow-50 border-yellow-200'}`}>
                  <p className={`font-bold ${creditColor}`}>Credit Score: {creditScore} ({creditLabel})</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {creditScore >= 750 ? 'Great! You qualify for best interest rates.' : creditScore >= 700 ? 'Good score — you should qualify easily.' : 'Consider improving your credit score before applying.'}
                  </p>
                </div>
                <Link href="/contact-us?type=consultation"
                  className="block text-center bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all">
                  Apply with Expert Help →
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
