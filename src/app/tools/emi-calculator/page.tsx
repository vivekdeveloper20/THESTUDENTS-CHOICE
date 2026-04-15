'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import Link from 'next/link';

function formatINR(n: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
}

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(10);

  const r = interestRate / 12 / 100;
  const n = tenure * 12;
  const emi = r === 0 ? loanAmount / n : loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - loanAmount;

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-[#8424e8] via-[#6f1ed0] to-[#4a0fa0]">
        <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-6xl mb-5">🧮</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Education Loan EMI Calculator
          </motion.h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Calculate your monthly EMI, total interest, and plan your education loan repayment with ease.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(132,36,232,0.08)] p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-8">Loan Details</h2>

            {/* Loan Amount */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
                <span className="text-sm font-bold text-[#8424e8]">{formatINR(loanAmount)}</span>
              </div>
              <input type="range" min={100000} max={10000000} step={100000}
                value={loanAmount} onChange={e => setLoanAmount(+e.target.value)}
                className="w-full accent-[#8424e8] h-2 rounded-full" />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹1 L</span><span>₹1 Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Interest Rate (p.a.)</label>
                <span className="text-sm font-bold text-[#8424e8]">{interestRate}%</span>
              </div>
              <input type="range" min={6} max={18} step={0.1}
                value={interestRate} onChange={e => setInterestRate(+e.target.value)}
                className="w-full accent-[#8424e8] h-2 rounded-full" />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>6%</span><span>18%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Loan Tenure</label>
                <span className="text-sm font-bold text-[#8424e8]">{tenure} Years</span>
              </div>
              <input type="range" min={1} max={20} step={1}
                value={tenure} onChange={e => setTenure(+e.target.value)}
                className="w-full accent-[#8424e8] h-2 rounded-full" />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1 Yr</span><span>20 Yrs</span>
              </div>
            </div>

            <Link href="/contact-us?type=consultation"
              className="block w-full text-center bg-gradient-to-r from-[#8424e8] to-[#6f1ed0] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-purple-200">
              Apply for Education Loan →
            </Link>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-5">
            {/* EMI Card */}
            <div className="bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] rounded-3xl p-8 text-white text-center shadow-[0_20px_50px_rgba(132,36,232,0.3)]">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">Monthly EMI</p>
              <p className="text-4xl md:text-5xl font-extrabold">{formatINR(Math.round(emi))}</p>
              <p className="text-white/60 text-sm mt-2">per month for {tenure} years</p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Principal</p>
                <p className="text-xl font-extrabold text-gray-900">{formatINR(loanAmount)}</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Total Interest</p>
                <p className="text-xl font-extrabold text-[#8424e8]">{formatINR(Math.round(totalInterest))}</p>
              </div>
              <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Total Amount Payable</p>
                <p className="text-2xl font-extrabold text-gray-900">{formatINR(Math.round(totalPayment))}</p>
              </div>
            </div>

            {/* Donut chart visual */}
            <div className="bg-[#faf7ff] rounded-2xl p-5 border border-[#ede8f7]">
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#ede8f7" strokeWidth="3.5" />
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#8424e8" strokeWidth="3.5"
                      strokeDasharray={`${(loanAmount / totalPayment * 100).toFixed(1)} 100`} />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#8424e8]">
                    {(loanAmount / totalPayment * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#8424e8]"></span> Principal: {(loanAmount / totalPayment * 100).toFixed(1)}%</div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#ede8f7]"></span> Interest: {(totalInterest / totalPayment * 100).toFixed(1)}%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
