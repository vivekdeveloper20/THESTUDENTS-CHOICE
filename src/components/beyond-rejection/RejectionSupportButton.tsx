'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const LEAD_EMAIL = 'pankaj@studentschoice.in';

const IUser = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);
const IPhone = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
const IGlobe = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>);
const ICap = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2 2 6 2s6-1 6-2v-5" /></svg>);
const IBank = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg>);
const IRupee = () => (<svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12M6 8h12M6 13h3a5 5 0 0 0 5-5M6 13l7 8" /></svg>);
const IShield = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const IClock = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>);
const ICheck = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>);
const IUsers = () => (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const ISend = () => (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>);

const empty = { name: '', phone: '', country: '', university: '', rejectedBy: '', loanAmount: '', message: '' };

export function RejectionSupportButton() {
  const [openModal, setOpenModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (openModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [openModal]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/' + LEAD_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Beyond Rejection — Case Review Request',
          _template: 'table',
          _captcha: 'false',
          'Student Name': form.name,
          Phone: form.phone,
          Country: form.country,
          University: form.university,
          'Rejected By': form.rejectedBy,
          'Loan Amount': form.loanAmount,
          Message: form.message,
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  }

  const inputCls = 'w-full px-3.5 py-2 border-2 border-gray-200 rounded-lg text-[13.5px] focus:outline-none focus:border-[#6E00E0] transition-colors';
  const inputIcon = 'w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg text-[13.5px] focus:outline-none focus:border-[#6E00E0] transition-colors';
  const lbl = 'text-[13px] font-semibold text-gray-700 block mb-1';

  const modal = (
    <AnimatePresence>
      {openModal && (
        <motion.div className="fixed inset-0 z-[9999] overflow-y-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="fixed inset-0 bg-black/55 backdrop-blur-sm" onClick={() => setOpenModal(false)} />

          <div className="relative flex min-h-full items-center justify-center px-3 sm:px-4 py-10 sm:py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-[880px] bg-white rounded-[24px] shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            >
              <button onClick={() => setOpenModal(false)} aria-label="Close" className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white shadow-md hover:bg-gray-50 flex items-center justify-center text-[#6E00E0] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>

              {/* Left panel */}
              <div className="relative px-7 md:px-9 pt-5 pb-6 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f3ecff 0%, #faf7ff 60%, #f6f0ff 100%)' }}>
                <span className="inline-flex items-center gap-1.5 bg-[#6E00E0] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider"><IShield /> Beyond Rejection</span>
                <h3 className="mt-3 text-[22px] md:text-[26px] font-black leading-[1.1] text-gray-900">
                  Get Your Case Reviewed by <span className="text-[#6E00E0]">Experts</span>
                </h3>
                <p className="mt-2 text-gray-600 text-[13px] leading-relaxed">
                  Share your details and we&apos;ll provide a free assessment of your rejection case and guide you on the next best steps.
                </p>

                <ul className="mt-4 space-y-2">
                  {[
                    { i: <IShield />, t: '100% Confidential Review' },
                    { i: <IClock />, t: 'Response within 24 hours' },
                    { i: <ICheck />, t: 'No obligation consultation' },
                  ].map((x) => (
                    <li key={x.t} className="flex items-center gap-2.5 text-gray-800 font-semibold text-[13.5px]">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#9b30f0] to-[#6E00E0] text-white flex items-center justify-center shrink-0">{x.i}</span>
                      {x.t}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-3 rounded-xl bg-white/70 border border-[#ece2fb] p-3">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-[#efe6fc] text-[#6E00E0] flex items-center justify-center"><IUsers /></span>
                  <p className="text-[12px] text-gray-600 leading-relaxed">
                    From first rejection to final approval, our experts walk with you at every step with a clear, personalized action plan.
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-[#f3ecff] border border-[#e7d9fb] p-2 text-center"><div className="text-xl mb-0.5">🧠</div><p className="text-[10px] font-semibold text-[#6E00E0]">Expert Diagnosis</p></div>
                  <div className="rounded-lg bg-[#eef9ff] border border-[#d6efff] p-2 text-center"><div className="text-xl mb-0.5">📋</div><p className="text-[10px] font-semibold text-[#1b5f8a]">Action Checklist</p></div>
                  <div className="rounded-lg bg-[#edfff4] border border-[#d5f5e3] p-2 text-center"><div className="text-xl mb-0.5">🗺️</div><p className="text-[10px] font-semibold text-[#1f7a47]">Comeback Roadmap</p></div>
                </div>
              </div>

              {/* Right form */}
              <div className="px-7 md:px-9 pt-5 pb-6">
                {status === 'done' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="text-5xl mb-3">🎉</div>
                    <h4 className="font-extrabold text-gray-900 text-xl">Request Received!</h4>
                    <p className="text-gray-500 mt-2">Our experts will review your case and reach out within 24 hours.</p>
                    <button onClick={() => setOpenModal(false)} className="mt-6 bg-[#6E00E0] text-white font-bold px-7 py-3 rounded-xl">Close</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-3">
                    <div className="sm:col-span-2">
                      <label className={lbl}>Student Name <span className="text-[#6E00E0]">*</span></label>
                      <div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E00E0]"><IUser /></span>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" className={inputIcon} /></div>
                    </div>
                    <div>
                      <label className={lbl}>Phone Number <span className="text-[#6E00E0]">*</span></label>
                      <div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E00E0]"><IPhone /></span>
                        <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className={inputIcon} /></div>
                    </div>
                    <div>
                      <label className={lbl}>Country <span className="text-[#6E00E0]">*</span></label>
                      <div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E00E0]"><IGlobe /></span>
                        <input required value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="Study destination" className={inputIcon} /></div>
                    </div>
                    <div>
                      <label className={lbl}>University <span className="text-[#6E00E0]">*</span></label>
                      <div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E00E0]"><ICap /></span>
                        <input required value={form.university} onChange={(e) => setForm({ ...form, university: e.target.value })} placeholder="University name" className={inputIcon} /></div>
                    </div>
                    <div>
                      <label className={lbl}>Rejected By <span className="text-[#6E00E0]">*</span></label>
                      <div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E00E0]"><IBank /></span>
                        <input required value={form.rejectedBy} onChange={(e) => setForm({ ...form, rejectedBy: e.target.value })} placeholder="Bank/NBFC name" className={inputIcon} /></div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={lbl}>Loan Amount <span className="text-[#6E00E0]">*</span></label>
                      <div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6E00E0]"><IRupee /></span>
                        <input required value={form.loanAmount} onChange={(e) => setForm({ ...form, loanAmount: e.target.value })} placeholder="Amount needed (in ₹)" className={inputIcon} /></div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={lbl}>Message</label>
                      <textarea rows={2} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Brief description of your situation" className={`${inputCls} resize-none`} />
                    </div>
                    {status === 'error' && <p className="sm:col-span-2 text-red-500 text-[13px] text-center">Something went wrong. Please try again.</p>}
                    <div className="sm:col-span-2">
                      <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7c1fe0] to-[#5a13b8] text-white font-bold px-8 py-3 rounded-xl shadow-[0_12px_30px_rgba(110,0,224,0.28)] hover:brightness-110 transition-all disabled:opacity-70">
                        <ISend /> {status === 'sending' ? 'Sending…' : 'Review My Case'}
                      </button>
                    </div>
                    <p className="sm:col-span-2 flex items-center justify-center gap-1.5 text-[11.5px] text-gray-400"><IShield /> Your information is secure and will never be shared.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => { setStatus('idle'); setOpenModal(true); }}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b2fe8] to-[#6d17c9] text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_12px_30px_rgba(110,0,224,0.35)] hover:-translate-y-0.5 transition-all"
      >
        Get Rejection Support
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </button>

      {mounted && createPortal(modal, document.body)}
    </>
  );
}
