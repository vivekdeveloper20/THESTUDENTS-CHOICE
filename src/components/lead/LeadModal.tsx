'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LEAD_EMAIL = 'pankaj@studentschoice.in';

type LeadContextValue = {
  open: (source?: string) => void;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function useLeadForm() {
  const ctx = useContext(LeadContext);
  if (!ctx) return { open: () => {} };
  return ctx;
}

const DESTINATIONS = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'Ireland', 'Italy', 'Spain', 'Switzerland', 'Singapore', 'UAE', 'New Zealand', 'Other'];
const ADMISSION = ['Yet to Apply', 'Applied', 'Got Admission', 'Just Exploring'];

/* ─── Field icons ─── */
const IUser = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);
const IPhone = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
const IMail = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>);
const IDollar = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>);
const IGlobe = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>);
const IDoc = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>);
const IPin = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>);
const IChevron = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>);
const IBolt = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>);
const IShield = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const ILock = () => (<svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);

const empty = { name: '', phone: '', email: '', loanAmount: '', destination: '', admissionStatus: '', city: '' };

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const open = useCallback((src?: string) => {
    setSource(src);
    setStatus('idle');
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/' + LEAD_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'New Lead — Book Free Consultation',
          _template: 'table',
          _captcha: 'false',
          Source: source || 'Website',
          'Full Name': form.name,
          Phone: form.phone,
          Email: form.email,
          'Loan Amount': form.loanAmount,
          'Preferred Destination': form.destination,
          'Admission Status': form.admissionStatus,
          City: form.city,
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  }

  const fieldWrap = 'relative';
  const inputCls = 'w-full pl-10 pr-3 py-2.5 rounded-lg bg-white border border-white/60 text-gray-800 text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/70';
  const iconCls = 'absolute left-3 top-1/2 -translate-y-1/2 text-[#8a2be2]';
  const labelCls = 'block text-white text-[13px] font-semibold mb-1.5';

  return (
    <LeadContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={close} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-[920px] max-h-[92vh] overflow-y-auto rounded-[28px] shadow-2xl grid grid-cols-1 lg:grid-cols-2"
              style={{ background: 'linear-gradient(135deg, #9b30f0 0%, #8a2be2 45%, #6a16c9 100%)' }}
            >
              {/* Close */}
              <button onClick={close} aria-label="Close" className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>

              {/* Left image */}
              <div className="hidden lg:flex relative items-end justify-center overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.18), transparent 60%)' }} />
                <span className="absolute top-8 left-8 text-white/15 text-5xl rotate-[-15deg] select-none">🎓</span>
                <span className="absolute top-24 right-10 text-white/15 text-4xl rotate-[12deg] select-none">🎓</span>
                <span className="absolute bottom-28 left-12 text-white/10 text-3xl rotate-[8deg] select-none">🎓</span>
                <img
                  src="/assets/images/End-to-End%20Overseas%20Education%20Loan%20Support.svg"
                  alt="Book a free consultation"
                  className="relative z-10 w-full h-auto object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Right form */}
              <div className="p-6 sm:p-8">
                <h3 className="text-white text-[26px] sm:text-[30px] font-extrabold text-center leading-tight">Book Free Consultation</h3>
                <p className="text-white/85 text-[13px] text-center mt-1 mb-6 relative inline-block w-full">
                  Schedule a 1-on-1 session with our expert counselors
                </p>

                {status === 'done' ? (
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
                    <div className="text-5xl mb-3">🎉</div>
                    <h4 className="text-white font-extrabold text-lg">Request Received!</h4>
                    <p className="text-white/80 mt-2 text-sm">Our counselor will reach out to you shortly.</p>
                    <button onClick={close} className="mt-5 bg-white text-[#7a1fd6] font-bold px-6 py-2.5 rounded-lg">Close</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Full Name<span className="text-yellow-300">*</span></label>
                        <div className={fieldWrap}>
                          <span className={iconCls}><IUser /></span>
                          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Phone <span className="text-yellow-300">*</span></label>
                        <div className={fieldWrap}>
                          <span className={iconCls}><IPhone /></span>
                          <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>Email Address <span className="text-yellow-300">*</span></label>
                      <div className={fieldWrap}>
                        <span className={iconCls}><IMail /></span>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Loan Amount<span className="text-yellow-300">*</span></label>
                        <div className={fieldWrap}>
                          <span className={iconCls}><IDollar /></span>
                          <input required value={form.loanAmount} onChange={(e) => setForm({ ...form, loanAmount: e.target.value })} className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Preferred Destination<span className="text-yellow-300">*</span></label>
                        <div className={fieldWrap}>
                          <span className={iconCls}><IGlobe /></span>
                          <select required value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className={`${inputCls} appearance-none pr-9 ${form.destination ? 'text-gray-800' : 'text-gray-400'}`}>
                            <option value="" disabled hidden>Select</option>
                            {DESTINATIONS.map((d) => <option key={d} value={d} className="text-gray-800">{d}</option>)}
                          </select>
                          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><IChevron /></span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Admission Status<span className="text-yellow-300">*</span></label>
                        <div className={fieldWrap}>
                          <span className={iconCls}><IDoc /></span>
                          <select required value={form.admissionStatus} onChange={(e) => setForm({ ...form, admissionStatus: e.target.value })} className={`${inputCls} appearance-none pr-9 ${form.admissionStatus ? 'text-gray-800' : 'text-gray-400'}`}>
                            <option value="" disabled hidden>Select</option>
                            {ADMISSION.map((a) => <option key={a} value={a} className="text-gray-800">{a}</option>)}
                          </select>
                          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><IChevron /></span>
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Your City<span className="text-yellow-300">*</span></label>
                        <div className={fieldWrap}>
                          <span className={iconCls}><IPin /></span>
                          <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} />
                        </div>
                      </div>
                    </div>

                    {status === 'error' && (
                      <p className="text-yellow-200 text-[12px] text-center">Something went wrong. Please try again.</p>
                    )}

                    <button type="submit" disabled={status === 'sending'} className="w-full mt-2 bg-gradient-to-r from-[#8c3bff] to-[#7016d6] text-white font-bold py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70">
                      {status === 'sending' ? 'Sending…' : 'Continue'}
                    </button>

                    <div className="grid grid-cols-3 gap-2 pt-3 text-center">
                      {[
                        { icon: <IBolt />, t: 'Quick Response', s: 'Under 5 Minutes' },
                        { icon: <IShield />, t: 'Expert Counselors', s: '5 Year Experience' },
                        { icon: <ILock />, t: '100% Secure', s: 'Your Data is Safe' },
                      ].map((b) => (
                        <div key={b.t} className="flex flex-col items-center gap-1">
                          <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white">{b.icon}</span>
                          <span className="text-white text-[10px] font-bold leading-tight">{b.t}</span>
                          <span className="text-white/70 text-[9px] leading-tight">{b.s}</span>
                        </div>
                      ))}
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LeadContext.Provider>
  );
}
