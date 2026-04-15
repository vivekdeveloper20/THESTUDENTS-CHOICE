'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';

interface Currency { code: string; name: string; symbol: string; rateToINR: number; flag: string }

const CURRENCIES: Currency[] = [
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', rateToINR: 1, flag: '🇮🇳' },
  { code: 'USD', name: 'US Dollar', symbol: '$', rateToINR: 83.5, flag: '🇺🇸' },
  { code: 'GBP', name: 'British Pound', symbol: '£', rateToINR: 105.2, flag: '🇬🇧' },
  { code: 'EUR', name: 'Euro', symbol: '€', rateToINR: 91.3, flag: '🇪🇺' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rateToINR: 53.8, flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rateToINR: 61.1, flag: '🇨🇦' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rateToINR: 62.5, flag: '🇸🇬' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', rateToINR: 22.7, flag: '🇦🇪' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', rateToINR: 50.2, flag: '🇳🇿' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', rateToINR: 92.1, flag: '🇨🇭' },
];

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState('1000');
  const [from, setFrom] = useState('INR');
  const [to, setTo] = useState('USD');

  const fromC = CURRENCIES.find(c => c.code === from)!;
  const toC = CURRENCIES.find(c => c.code === to)!;
  const amountNum = parseFloat(amount) || 0;
  const inINR = amountNum * fromC.rateToINR;
  const result = inINR / toC.rateToINR;
  const exchangeRate = fromC.rateToINR / toC.rateToINR;

  function swap() {
    setFrom(to);
    setTo(from);
  }

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-[#ff6f00] via-[#f57c00] to-[#ef6c00]">
        <div className="pointer-events-none absolute top-0 left-0 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-6xl mb-5">🔄</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4">Currency Converter</motion.h1>
          <p className="text-white/80 text-lg">Convert between 10 major currencies used in top study-abroad destinations.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white"><path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] p-8">

          {/* Amount */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">Amount</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)}
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-2xl font-bold focus:outline-none focus:border-[#f57c00] transition-colors" />
          </div>

          {/* From / To */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center mb-6">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl font-semibold focus:outline-none focus:border-[#f57c00] transition-colors bg-white">
                {CURRENCIES.map(c => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>
                ))}
              </select>
            </div>

            <button onClick={swap}
              className="mt-6 w-12 h-12 rounded-full bg-[#fff3e0] border-2 border-[#f57c00] text-xl flex items-center justify-center hover:bg-[#f57c00] hover:text-white transition-all">
              ⇄
            </button>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl font-semibold focus:outline-none focus:border-[#f57c00] transition-colors bg-white">
                {CURRENCIES.map(c => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          <div className="bg-gradient-to-br from-[#ff6f00] to-[#ef6c00] rounded-2xl p-6 text-center text-white">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">
              {fromC.flag} {amountNum.toLocaleString()} {from} =
            </p>
            <p className="text-4xl md:text-5xl font-extrabold">
              {toC.symbol}{result.toFixed(2)}
            </p>
            <p className="text-white/70 text-sm mt-2">{toC.flag} {toC.name}</p>
            <p className="text-white/50 text-xs mt-2">1 {from} = {exchangeRate.toFixed(4)} {to}</p>
          </div>
        </motion.div>

        {/* All rates table */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-[#fff3e0] border-b border-[#ffe0b2]">
            <p className="font-bold text-[#e65100] text-sm uppercase tracking-wide">
              All Rates — 1 {from} {fromC.flag}
            </p>
          </div>
          {CURRENCIES.filter(c => c.code !== from).map((c, i) => (
            <div key={c.code} className={`flex items-center justify-between px-6 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-[#fff3e0] transition-colors`}>
              <div className="flex items-center gap-3">
                <span className="text-xl">{c.flag}</span>
                <span className="font-semibold text-gray-800">{c.code}</span>
                <span className="text-gray-400 text-sm">{c.name}</span>
              </div>
              <span className="font-bold text-gray-900">
                {c.symbol}{(fromC.rateToINR / c.rateToINR).toFixed(4)}
              </span>
            </div>
          ))}
        </motion.div>
      </section>
    </PageShell>
  );
}
