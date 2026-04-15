'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';

const POPULAR = [
  { label: '₹1 Lakh', inr: 100000 },
  { label: '₹5 Lakh', inr: 500000 },
  { label: '₹10 Lakh', inr: 1000000 },
  { label: '₹25 Lakh', inr: 2500000 },
];

export default function INRUSDPage() {
  const [inr, setInr] = useState('100000');
  const [usd, setUsd] = useState('');
  const [rate, setRate] = useState(83.5); // approx rate
  const [lastUpdated] = useState('Live (approx.)');
  const [direction, setDirection] = useState<'inrToUsd' | 'usdToInr'>('inrToUsd');

  useEffect(() => {
    if (direction === 'inrToUsd') {
      setUsd((parseFloat(inr || '0') / rate).toFixed(2));
    } else {
      setInr((parseFloat(usd || '0') * rate).toFixed(2));
    }
  }, [inr, usd, rate, direction]);

  function handleInrChange(val: string) {
    setDirection('inrToUsd');
    setInr(val);
  }

  function handleUsdChange(val: string) {
    setDirection('usdToInr');
    setUsd(val);
  }

  function formatNum(n: string) {
    const num = parseFloat(n);
    if (isNaN(num)) return '0';
    return new Intl.NumberFormat('en-IN').format(num);
  }

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-[#0d2980] via-[#1565c0] to-[#00838f]">
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-6xl mb-5">💱</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4">INR ↔ USD Calculator</motion.h1>
          <p className="text-white/80 text-lg">Convert Indian Rupees to US Dollars instantly with approximate live rates.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white"><path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-16">
        {/* Rate banner */}
        <div className="bg-gradient-to-r from-[#0d2980] to-[#1565c0] rounded-2xl p-4 mb-8 flex items-center justify-between text-white">
          <div>
            <p className="text-xs text-white/60 uppercase tracking-wide mb-0.5">Current Rate</p>
            <p className="text-2xl font-extrabold">1 USD = ₹{rate.toFixed(2)}</p>
          </div>
          <div className="text-right text-xs text-white/60">
            <p>{lastUpdated}</p>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Updated</span>
            </div>
          </div>
        </div>

        {/* Rate slider */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700">Adjust Exchange Rate</label>
            <span className="text-sm font-bold text-[#1565c0]">₹{rate.toFixed(2)}/USD</span>
          </div>
          <input type="range" min={75} max={95} step={0.1} value={rate}
            onChange={e => setRate(+e.target.value)}
            className="w-full accent-[#1565c0] h-2 rounded-full" />
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹75</span><span>₹95</span></div>
        </div>

        {/* Converter card */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] p-8">

          <div className="space-y-5">
            {/* INR Input */}
            <div>
              <label className="text-sm font-semibold text-gray-600 mb-2 block">🇮🇳 Indian Rupees (INR)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">₹</span>
                <input
                  type="number"
                  value={inr}
                  onChange={e => handleInrChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-xl font-bold focus:outline-none focus:border-[#1565c0] transition-colors"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">{formatNum(inr)} Rupees</p>
            </div>

            {/* Swap icon */}
            <div className="flex justify-center">
              <div className="w-10 h-10 rounded-full bg-[#f0f4ff] border-2 border-[#1565c0] flex items-center justify-center text-xl cursor-pointer hover:bg-[#1565c0] hover:text-white transition-colors">⇅</div>
            </div>

            {/* USD Input */}
            <div>
              <label className="text-sm font-semibold text-gray-600 mb-2 block">🇺🇸 US Dollars (USD)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">$</span>
                <input
                  type="number"
                  value={usd}
                  onChange={e => handleUsdChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-xl font-bold focus:outline-none focus:border-[#1565c0] transition-colors"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">{formatNum(usd)} Dollars</p>
            </div>
          </div>
        </motion.div>

        {/* Quick amounts */}
        <div className="mt-6">
          <p className="text-sm text-gray-500 font-medium mb-3">Quick Convert:</p>
          <div className="grid grid-cols-4 gap-2">
            {POPULAR.map((p) => (
              <button key={p.label} onClick={() => handleInrChange(String(p.inr))}
                className="bg-[#f0f4ff] hover:bg-[#1565c0] hover:text-white text-[#1565c0] font-bold text-sm py-2 rounded-xl transition-all">
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
