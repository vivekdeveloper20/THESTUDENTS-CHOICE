'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';

const BENEFITS = [
  { icon: '💰', title: 'Earn Commissions', desc: 'Earn competitive referral commissions for every successful student loan and admission.' },
  { icon: '🎓', title: 'Training & Support', desc: 'Get full training on our products and dedicated support from our partner team.' },
  { icon: '🌐', title: 'Marketing Materials', desc: 'Access branded brochures, digital assets, and co-branded collateral.' },
  { icon: '📊', title: 'Real-Time Dashboard', desc: 'Track your referrals, commissions, and student status in real-time.' },
  { icon: '🤝', title: 'Dedicated Manager', desc: 'Every partner gets a dedicated relationship manager for seamless support.' },
  { icon: '🏆', title: 'Recognition Program', desc: 'Top partners get featured on our website and invited to exclusive events.' },
];

const WHO = [
  { emoji: '📚', label: 'Education Consultants' },
  { emoji: '🏫', label: 'Coaching Institutes' },
  { emoji: '🏦', label: 'Financial Advisors' },
  { emoji: '💻', label: 'Ed-Tech Platforms' },
  { emoji: '✈️', label: 'Travel Agencies' },
  { emoji: '👨‍💼', label: 'HR Consultancies' },
];

export default function PartnerPage() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#8424e8]">
        <div className="pointer-events-none absolute -top-24 -left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-5">🤝</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">Become a Partner</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join Student&apos;s Choice Partner Network and earn commissions while helping students achieve their dreams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-white text-sm font-semibold border border-white/20">500+ Active Partners</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-white text-sm font-semibold border border-white/20">Up to 2% Commission</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-white text-sm font-semibold border border-white/20">Free to Join</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white"><path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      {/* Who can partner */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#f4eeff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Who Can Partner</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Perfect for These Businesses</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {WHO.map((w) => (
            <div key={w.label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-[0_8px_30px_rgba(132,36,232,0.10)] hover:-translate-y-1 transition-all">
              <span className="text-4xl block mb-2">{w.emoji}</span>
              <p className="text-sm font-semibold text-gray-700">{w.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#f4eeff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Partner Benefits</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Partner with Student&apos;s Choice?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {BENEFITS.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(132,36,232,0.12)] hover:-translate-y-1.5 transition-all">
              <span className="text-3xl mb-3 block">{b.icon}</span>
              <h3 className="font-extrabold text-gray-900 mb-1">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Sign-up form */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Apply to Become a Partner</h2>
            {submitted ? (
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-3">🎊</div>
                <h3 className="font-extrabold text-[#8424e8] text-lg">Application Received!</h3>
                <p className="text-gray-600 mt-2">Our partner team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Your Name *</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Organization *</label>
                    <input required value={form.org} onChange={e => setForm({...form, org: e.target.value})}
                      placeholder="Company/Institute"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="work@company.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Phone *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Business Type *</label>
                  <select required value={form.type} onChange={e => setForm({...form, type: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors bg-white">
                    <option value="">Select your business type...</option>
                    {['Education Consultant', 'Coaching Institute', 'Financial Advisor', 'Ed-Tech Platform', 'Travel Agency', 'HR Consultancy', 'Other'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Tell us more</label>
                  <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="How many students do you work with? Any specific services you offer?"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-gradient-to-r from-[#8424e8] to-[#6f1ed0] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-purple-200">
                  Submit Partnership Application →
                </button>
              </form>
            )}
          </motion.div>

          {/* Side info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-5">
            <div className="bg-gradient-to-br from-[#1a237e] to-[#8424e8] rounded-2xl p-6 text-white">
              <h3 className="font-extrabold text-lg mb-1">How It Works</h3>
              <div className="space-y-4 mt-4">
                {[
                  { step: '1', text: 'Apply using the form and get approved in 24h' },
                  { step: '2', text: 'Attend our partner onboarding session' },
                  { step: '3', text: 'Refer students and share our loan/abroad services' },
                  { step: '4', text: 'Track referrals and earn commissions monthly' },
                ].map(s => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</span>
                    <p className="text-white/80 text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#faf7ff] border border-[#ede8f7] rounded-2xl p-6">
              <h3 className="font-extrabold text-gray-900 mb-3">Partner Contact</h3>
              <p className="text-sm text-gray-600 mb-2">📞 +91 99999 99999 (Partner Helpline)</p>
              <p className="text-sm text-gray-600">✉️ partners@studentschoice.in</p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
