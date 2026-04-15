'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';

const METHODS = [
  { icon: '📅', label: 'Book Free Consultation', desc: 'Schedule a 1-on-1 session with our expert counselors.', color: 'from-[#8424e8] to-[#6f1ed0]' },
  { icon: '📞', label: 'Call Us', desc: '+91 88888 88888 — Mon-Sat 9am to 8pm.', color: 'from-[#1565c0] to-[#0d47a1]' },
  { icon: '💬', label: 'WhatsApp Support', desc: 'Chat with us 24/7 on WhatsApp for instant replies.', color: 'from-[#1b5e20] to-[#2e7d32]' },
  { icon: '✉️', label: 'Email Support', desc: 'hello@studentschoice.in — We reply within 4 hours.', color: 'from-[#e65100] to-[#ff6f00]' },
];

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', message: '', type: 'consultation' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-[#8424e8] via-[#7c3aed] to-[#4a0fa0]">
        <div className="pointer-events-none absolute -top-20 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-5">📬</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">Get in Touch</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Whether you are just exploring options or ready to apply — we are here to help you every step of the way.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white"><path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      {/* Contact methods */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {METHODS.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-gradient-to-br ${m.color} rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform cursor-pointer shadow-lg`}>
              <span className="text-3xl mb-3 block">{m.icon}</span>
              <h3 className="font-extrabold mb-1">{m.label}</h3>
              <p className="text-white/75 text-sm">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-3">🎉</div>
                <h3 className="font-extrabold text-green-800 text-lg">Message Sent!</h3>
                <p className="text-green-700 mt-2">We will get back to you within 4 hours. Check your email!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Phone *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Email Address *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Preferred Destination</label>
                  <select value={form.destination} onChange={e => setForm({...form, destination: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors bg-white">
                    <option value="">Select a country...</option>
                    {['USA 🇺🇸', 'UK 🇬🇧', 'Canada 🇨🇦', 'Australia 🇦🇺', 'Germany 🇩🇪', 'France 🇫🇷', 'Ireland 🇮🇪', 'Singapore 🇸🇬', 'UAE 🇦🇪', 'Others'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Your Message</label>
                  <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Tell us about your study plans, questions, or loan requirements..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#8424e8] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-gradient-to-r from-[#8424e8] to-[#6f1ed0] text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-purple-200">
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-5">
            <div className="bg-gradient-to-br from-[#faf7ff] to-[#f4eeff] rounded-2xl border border-[#ede8f7] p-6">
              <h3 className="font-extrabold text-gray-900 mb-4">Office Details</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex gap-3"><span>📍</span> 101, Plaza Tower, Bandra West, Mumbai – 400050</p>
                <p className="flex gap-3"><span>📞</span> +91 88888 88888</p>
                <p className="flex gap-3"><span>✉️</span> hello@studentschoice.in</p>
                <p className="flex gap-3"><span>🕐</span> Mon – Sat: 9:00 AM – 8:00 PM IST</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] rounded-2xl p-6 text-white">
              <h3 className="font-extrabold mb-2">Free Consultation</h3>
              <p className="text-white/80 text-sm mb-4">Book a 30-minute free counseling call with our study abroad expert today.</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90">Experts available now</span>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-extrabold text-gray-900 mb-3">Why Choose Us?</h3>
              {['Free counseling with no obligations', '98% visa success rate', 'Loan approvals from 15+ banks', 'End-to-end support till you land'].map(p => (
                <div key={p} className="flex items-start gap-2 mb-2.5 text-sm text-gray-700">
                  <span className="text-[#8424e8] font-bold mt-0.5">✓</span>{p}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
