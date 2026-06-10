'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import Link from 'next/link';

function formatINR(n: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
    isFinite(n) ? n : 0
  );
}

function formatShort(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)} K`;
  return `₹${Math.round(n)}`;
}

function emiOf(principal: number, monthlyRate: number, months: number) {
  if (months <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  const f = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * f) / (f - 1);
}

type MethodKey = 'full' | 'simple' | 'psi' | 'compound';

interface MethodResult {
  key: MethodKey;
  name: string;
  bankHint: string;
  moratoriumPayment: number; // per month during moratorium (avg)
  paidDuringMoratorium: number; // total paid during moratorium
  principalAtEmiStart: number;
  capitalised: number;
  emi: number;
  totalPaid: number;
  totalInterest: number;
}

interface YearRow {
  year: number;
  phase: string;
  paid: number;
  interest: number;
  principal: number;
  balance: number;
}

export default function StudentLoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(4000000);
  const [interestRate, setInterestRate] = useState(11);
  const [courseDuration, setCourseDuration] = useState(18); // months
  const [moratoriumPeriod, setMoratoriumPeriod] = useState(12); // grace months after course
  const [tenure, setTenure] = useState(12); // EMI years
  const [psiAmount, setPsiAmount] = useState(5000); // ₹/month paid during moratorium in PSI mode

  const [scheduleMethod, setScheduleMethod] = useState<MethodKey>('psi');

  const r = interestRate / 12 / 100;
  const moratoriumMonths = courseDuration + moratoriumPeriod;
  const n = tenure * 12;
  const monthlySI = loanAmount * r;

  const results: Record<MethodKey, MethodResult> = useMemo(() => {
    // Full EMI — pay full EMI from day one, no moratorium benefit
    const fullEmi = emiOf(loanAmount, r, n);
    const full: MethodResult = {
      key: 'full',
      name: 'Full EMI',
      bankHint: 'Pay full EMI from day 1',
      moratoriumPayment: fullEmi,
      paidDuringMoratorium: fullEmi * moratoriumMonths,
      principalAtEmiStart: loanAmount,
      capitalised: 0,
      emi: fullEmi,
      totalPaid: fullEmi * n,
      totalInterest: fullEmi * n - loanAmount,
    };

    // Simple Interest — pay full simple interest each month during moratorium
    const siEmi = emiOf(loanAmount, r, n);
    const siPaidMor = monthlySI * moratoriumMonths;
    const simple: MethodResult = {
      key: 'simple',
      name: 'Simple Interest',
      bankHint: 'e.g. Tata, SBI, most PSBs',
      moratoriumPayment: monthlySI,
      paidDuringMoratorium: siPaidMor,
      principalAtEmiStart: loanAmount,
      capitalised: 0,
      emi: siEmi,
      totalPaid: siPaidMor + siEmi * n,
      totalInterest: siPaidMor + siEmi * n - loanAmount,
    };

    // Partial Simple Interest — pay a fixed part of SI; the shortfall is added to principal
    const effPaid = Math.min(psiAmount, monthlySI);
    const shortfall = Math.max(0, monthlySI - effPaid);
    const capitalised = shortfall * moratoriumMonths;
    const psiPrincipal = loanAmount + capitalised;
    const psiEmi = emiOf(psiPrincipal, r, n);
    const psiPaidMor = effPaid * moratoriumMonths;
    const psi: MethodResult = {
      key: 'psi',
      name: 'Partial Simple Interest (PSI)',
      bankHint: 'Pay a small fixed amount monthly',
      moratoriumPayment: effPaid,
      paidDuringMoratorium: psiPaidMor,
      principalAtEmiStart: psiPrincipal,
      capitalised,
      emi: psiEmi,
      totalPaid: psiPaidMor + psiEmi * n,
      totalInterest: psiPaidMor + psiEmi * n - loanAmount,
    };

    // Compound Interest — pay nothing during moratorium, interest compounds and capitalises
    const ciPrincipal = loanAmount * Math.pow(1 + r, moratoriumMonths);
    const ciEmi = emiOf(ciPrincipal, r, n);
    const compound: MethodResult = {
      key: 'compound',
      name: 'Compound Interest',
      bankHint: 'e.g. Avanse, Credila, NBFCs',
      moratoriumPayment: 0,
      paidDuringMoratorium: 0,
      principalAtEmiStart: ciPrincipal,
      capitalised: ciPrincipal - loanAmount,
      emi: ciEmi,
      totalPaid: ciEmi * n,
      totalInterest: ciEmi * n - loanAmount,
    };

    return { full, simple, psi, compound };
  }, [loanAmount, r, n, moratoriumMonths, monthlySI, psiAmount]);

  const ordered: MethodResult[] = [results.simple, results.psi, results.compound, results.full];
  const cheapest = ordered.reduce((a, b) => (a.totalPaid <= b.totalPaid ? a : b));

  // Build year-wise repayment schedule for the selected method
  const schedule: YearRow[] = useMemo(() => {
    const m = results[scheduleMethod];
    const rows: YearRow[] = [];

    // Moratorium phase grouped by year
    let monthCounter = 0;
    let yearIndex = 1;
    while (monthCounter < moratoriumMonths) {
      const monthsThisYear = Math.min(12, moratoriumMonths - monthCounter);
      const paid = m.moratoriumPayment * monthsThisYear;
      const interestThisYear = monthlySI * monthsThisYear; // interest accrued
      rows.push({
        year: yearIndex,
        phase: 'Moratorium',
        paid,
        interest: interestThisYear,
        principal: 0,
        balance: m.principalAtEmiStart,
      });
      monthCounter += monthsThisYear;
      yearIndex += 1;
    }

    // EMI phase amortisation grouped by year
    let balance = m.principalAtEmiStart;
    let monthsLeft = n;
    let emiYear = yearIndex;
    while (monthsLeft > 0 && balance > 0.5) {
      const monthsThisYear = Math.min(12, monthsLeft);
      let yearInterest = 0;
      let yearPrincipal = 0;
      let yearPaid = 0;
      for (let i = 0; i < monthsThisYear; i++) {
        const interest = balance * r;
        let principalPart = m.emi - interest;
        if (principalPart > balance) principalPart = balance;
        balance -= principalPart;
        yearInterest += interest;
        yearPrincipal += principalPart;
        yearPaid += interest + principalPart;
      }
      rows.push({
        year: emiYear,
        phase: 'EMI',
        paid: yearPaid,
        interest: yearInterest,
        principal: yearPrincipal,
        balance: Math.max(0, balance),
      });
      monthsLeft -= monthsThisYear;
      emiYear += 1;
    }
    return rows;
  }, [results, scheduleMethod, moratoriumMonths, monthlySI, n, r]);

  const selected = results[scheduleMethod];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-[#8424e8] via-[#6f1ed0] to-[#4a0fa0]">
        <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-6xl mb-5">🎓</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Student Education Loan Calculator
          </motion.h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Compare Simple Interest, Partial Simple Interest (PSI) and Compound Interest repayment, see your moratorium
            payments, EMI and full repayment structure — all in one place.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-[380px_1fr] gap-8">
          {/* Inputs */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(132,36,232,0.08)] p-7 h-fit lg:sticky lg:top-6">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Loan Details</h2>

            <NumberSlider label="Loan Amount" value={loanAmount} onChange={setLoanAmount}
              min={100000} max={20000000} step={50000} display={formatShort(loanAmount)}
              minLabel="₹1 L" maxLabel="₹2 Cr" />

            <NumberSlider label="Interest Rate (p.a.)" value={interestRate} onChange={setInterestRate}
              min={6} max={18} step={0.1} display={`${interestRate}%`} minLabel="6%" maxLabel="18%" />

            <NumberSlider label="Course Duration" value={courseDuration} onChange={setCourseDuration}
              min={6} max={60} step={1} display={`${courseDuration} mo`} minLabel="6 mo" maxLabel="60 mo" />

            <NumberSlider label="Moratorium / Grace Period" value={moratoriumPeriod} onChange={setMoratoriumPeriod}
              min={0} max={24} step={1} display={`${moratoriumPeriod} mo`} minLabel="0 mo" maxLabel="24 mo" />

            <NumberSlider label="Loan Tenure (EMI)" value={tenure} onChange={setTenure}
              min={1} max={20} step={1} display={`${tenure} Yr`} minLabel="1 Yr" maxLabel="20 Yr" />

            <NumberSlider label="PSI Amount (paid / month)" value={psiAmount} onChange={setPsiAmount}
              min={0} max={Math.max(5000, Math.round(monthlySI))} step={500} display={formatINR(psiAmount)}
              minLabel="₹0" maxLabel={formatShort(monthlySI)} />

            <div className="mt-2 rounded-2xl bg-[#faf7ff] border border-[#ede8f7] p-4 text-sm text-[#5b4a7e]">
              <div className="flex justify-between mb-1">
                <span>Total moratorium</span>
                <span className="font-bold text-[#8424e8]">{moratoriumMonths} months</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Monthly simple interest</span>
                <span className="font-bold text-[#8424e8]">{formatINR(monthlySI)}</span>
              </div>
              <div className="flex justify-between">
                <span>EMI starts after</span>
                <span className="font-bold text-[#8424e8]">{moratoriumMonths} months</span>
              </div>
            </div>

            <Link href="/contact-us?type=consultation"
              className="mt-6 block w-full text-center bg-gradient-to-r from-[#8424e8] to-[#6f1ed0] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-purple-200">
              Apply for Education Loan →
            </Link>
          </motion.div>

          {/* Results */}
          <div className="flex flex-col gap-7">
            {/* Comparison cards */}
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-1">Repayment Comparison</h2>
              <p className="text-sm text-gray-500 mb-5">
                Same loan, four repayment methods. The cheapest option is highlighted.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {ordered.map((m) => {
                  const isCheapest = m.key === cheapest.key;
                  return (
                    <motion.div key={m.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`rounded-3xl p-6 border transition-all ${
                        isCheapest
                          ? 'border-[#8424e8] bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] text-white shadow-[0_20px_50px_rgba(132,36,232,0.3)]'
                          : 'border-gray-100 bg-white shadow-sm hover:shadow-md'
                      }`}>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className={`font-extrabold leading-tight ${isCheapest ? 'text-white' : 'text-gray-900'}`}>
                            {m.name}
                          </p>
                          <p className={`text-xs mt-0.5 ${isCheapest ? 'text-white/70' : 'text-gray-400'}`}>
                            {m.bankHint}
                          </p>
                        </div>
                        {isCheapest && (
                          <span className="text-[10px] font-bold uppercase tracking-wide bg-white/20 text-white px-2 py-1 rounded-full whitespace-nowrap">
                            Lowest cost
                          </span>
                        )}
                      </div>

                      <div className="mt-4">
                        <p className={`text-[11px] uppercase tracking-widest ${isCheapest ? 'text-white/60' : 'text-gray-400'}`}>
                          Monthly EMI
                        </p>
                        <p className={`text-3xl font-extrabold ${isCheapest ? 'text-white' : 'text-gray-900'}`}>
                          {formatINR(Math.round(m.emi))}
                        </p>
                      </div>

                      <div className={`mt-4 space-y-2 text-sm ${isCheapest ? 'text-white/90' : 'text-gray-600'}`}>
                        <Row label="Pay during moratorium" value={m.moratoriumPayment === 0 ? 'Nothing' : `${formatINR(Math.round(m.moratoriumPayment))}/mo`} light={isCheapest} />
                        <Row label="Added to principal" value={m.capitalised > 0 ? formatINR(Math.round(m.capitalised)) : '—'} light={isCheapest} />
                        <Row label="Principal at EMI start" value={formatINR(Math.round(m.principalAtEmiStart))} light={isCheapest} />
                        <Row label="Total interest" value={formatINR(Math.round(m.totalInterest))} light={isCheapest} />
                        <Row label="Total payable" value={formatINR(Math.round(m.totalPaid))} bold light={isCheapest} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Detailed schedule */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(132,36,232,0.06)] p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <h2 className="text-xl font-extrabold text-gray-900">Full Repayment Structure</h2>
                <div className="flex flex-wrap gap-2">
                  {ordered.map((m) => (
                    <button key={m.key} onClick={() => setScheduleMethod(m.key)}
                      className={`text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
                        scheduleMethod === m.key
                          ? 'bg-[#8424e8] border-[#8424e8] text-white'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-[#8424e8]'
                      }`}>
                      {m.key === 'psi' ? 'PSI' : m.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phase summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <Stat label="Moratorium" value={`${moratoriumMonths} mo`} sub={selected.moratoriumPayment === 0 ? 'Pay nothing' : `${formatINR(Math.round(selected.moratoriumPayment))}/mo`} />
                <Stat label="Paid in moratorium" value={formatShort(selected.paidDuringMoratorium)} sub="before EMI" />
                <Stat label={`EMI (×${n})`} value={formatShort(selected.emi)} sub={`for ${tenure} years`} />
                <Stat label="Total payable" value={formatShort(selected.totalPaid)} sub={`incl. ${formatShort(selected.totalInterest)} interest`} highlight />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-100">
                      <th className="py-2 pr-3 font-semibold">Year</th>
                      <th className="py-2 px-3 font-semibold">Phase</th>
                      <th className="py-2 px-3 font-semibold text-right">Paid</th>
                      <th className="py-2 px-3 font-semibold text-right">Interest</th>
                      <th className="py-2 px-3 font-semibold text-right">Principal</th>
                      <th className="py-2 pl-3 font-semibold text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, idx) => (
                      <tr key={idx} className={`border-b border-gray-50 ${row.phase === 'Moratorium' ? 'bg-[#faf7ff]' : ''}`}>
                        <td className="py-2 pr-3 font-medium text-gray-700">{row.year}</td>
                        <td className="py-2 px-3">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            row.phase === 'Moratorium' ? 'bg-[#ede8f7] text-[#8424e8]' : 'bg-green-50 text-green-700'
                          }`}>
                            {row.phase}
                          </span>
                        </td>
                        <td className="py-2 px-3 text-right text-gray-700">{formatINR(Math.round(row.paid))}</td>
                        <td className="py-2 px-3 text-right text-gray-500">{formatINR(Math.round(row.interest))}</td>
                        <td className="py-2 px-3 text-right text-gray-500">{row.principal > 0 ? formatINR(Math.round(row.principal)) : '—'}</td>
                        <td className="py-2 pl-3 text-right font-semibold text-gray-800">{formatINR(Math.round(row.balance))}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                Note: figures assume full disbursement upfront and a fixed interest rate. PSI capitalises only the unpaid
                part of the simple interest (no further interest on it during the moratorium), while Compound Interest
                capitalises and compounds monthly. Actual bank terms, tranche-based disbursement and floating rates may
                vary. This is an indicative estimate, not a sanctioned offer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Row({ label, value, bold, light }: { label: string; value: string; bold?: boolean; light?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className={light ? 'text-white/70' : 'text-gray-500'}>{label}</span>
      <span className={`${bold ? 'font-extrabold' : 'font-semibold'} ${light ? 'text-white' : 'text-gray-900'}`}>{value}</span>
    </div>
  );
}

function Stat({ label, value, sub, highlight }: { label: string; value: string; sub: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 border ${highlight ? 'bg-[#8424e8] border-[#8424e8] text-white' : 'bg-[#faf7ff] border-[#ede8f7]'}`}>
      <p className={`text-[11px] uppercase tracking-wide ${highlight ? 'text-white/70' : 'text-gray-400'}`}>{label}</p>
      <p className={`text-lg font-extrabold ${highlight ? 'text-white' : 'text-gray-900'}`}>{value}</p>
      <p className={`text-[11px] ${highlight ? 'text-white/70' : 'text-gray-400'}`}>{sub}</p>
    </div>
  );
}

function NumberSlider({
  label, value, onChange, min, max, step, display, minLabel, maxLabel,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
  minLabel: string;
  maxLabel: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-semibold text-gray-700">{label}</label>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = e.target.value === '' ? min : +e.target.value;
            onChange(Math.min(max, Math.max(min, v)));
          }}
          className="w-28 text-right text-sm font-bold text-[#8424e8] bg-[#faf7ff] border border-[#ede8f7] rounded-lg px-2 py-1 focus:outline-none focus:border-[#8424e8]"
        />
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full accent-[#8424e8] h-2 rounded-full" />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{minLabel}</span>
        <span className="text-[#8424e8] font-semibold">{display}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
