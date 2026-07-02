'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';

export interface StudyCountryPageProps {
  country: string;
  tagline: string;
  heroImage: string;
  flagBannerImage?: string; // Optional if not baked into heroImage
  ctaTarget?: string;
  introParagraphs: string[];
  stats: { value: string; label: string }[];
  quickInsights: { key: string; value: string }[];
  highlights: { icon: string; title: string; desc: string }[];
  universities: { name: string; rank: string }[];
  requirements: string[];
  avgCost: string;
  workPermit: string;
  processingTime: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export function StudyCountryPage(p: StudyCountryPageProps) {
  return (
    <PageShell>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 px-4 md:px-8">
        <div 
          className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative min-h-[400px] md:min-h-[500px] flex items-center shadow-2xl transition-all hover:shadow-purple-500/20"
          style={{
            backgroundImage: `url('${p.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Subtle overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

          <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full flex flex-col md:flex-row justify-between items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
                {p.tagline}
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-lg leading-relaxed drop-shadow-md mx-auto md:mx-0">
                Discover top universities, compare tuition costs, explore scholarships, and plan your {p.country} journey — all in one place
              </p>
              
              <Link
                href={p.ctaTarget || "/contact-us"}
                className="inline-flex items-center bg-white text-[#6E00E0] font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all text-sm md:text-base group"
              >
                Explore {p.country} University 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            {/* Optional Floating Flag Banner if not baked into the background image */}
            {p.flagBannerImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block relative w-48 h-64 select-none"
              >
                <img 
                  src={p.flagBannerImage} 
                  alt={`${p.country} Flag Banner`} 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8 text-[#555] text-lg leading-relaxed font-normal"
        >
          {p.introParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>
      </section>

      {/* ── Quick Insights ─────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl">✨</span>
          <h2 className="text-2xl font-bold text-gray-900">
            Quick Insights About Studying in the {p.country}
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100">
                <th className="py-4 px-6 text-sm font-bold text-gray-900 border-r border-gray-100 text-center w-1/2">Key Insight</th>
                <th className="py-4 px-6 text-sm font-bold text-gray-900 text-center w-1/2">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {p.quickInsights.map((item, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-gray-600 border-r border-gray-50 text-center">{item.key}</td>
                  <td className="py-4 px-6 text-sm font-bold text-gray-900 text-center">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-[#fcfaff] rounded-2xl border border-purple-50 grid grid-cols-2 md:grid-cols-4 divide-x divide-purple-50">
          {p.stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center py-8 px-4 text-center"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-[#6E00E0]">{s.value}</span>
              <span className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Highlights Grid ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#f4eeff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Why {p.country}?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Unparalleled Academic Excellence
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{h.icon}</span>
              <h3 className="font-bold text-gray-900 text-base mb-2">{h.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Top Universities ───────────────────────────── */}
      <section className="bg-gradient-to-br from-[#faf7ff] to-[#f0e8ff] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#6E00E0]/10 text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Top Universities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              World-Class Institutions in the {p.country}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.universities.map((u, i) => (
              <motion.div
                key={u.name}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-[#ede8f7] hover:shadow-xl hover:-translate-y-1.5 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6E00E0] to-[#b36af5] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  #{i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#6E00E0] transition-colors">{u.name}</h3>
                  <p className="text-xs text-[#6E00E0] font-semibold mt-1 uppercase tracking-wider">{u.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ───────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#f4eeff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Eligibility
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Requirements to Study in the {p.country}
          </h2>
        </div>
        <div className="space-y-4">
          {p.requirements.map((req, i) => (
            <motion.div
              key={req}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#6E00E0]/30 hover:shadow-md transition-all"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#6E00E0] text-white text-sm font-bold flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-gray-700 font-medium pt-1.5">{req}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1a1a6e] via-[#4a148c] to-[#0d0d2b] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 blur-3xl">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-blue-500 rounded-full" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-purple-500 rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Take Your First Step Towards <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Success in the {p.country}</span>
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Our expert counselors are ready to guide you through university selection, applications, and visa processes.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/contact-us?type=consultation"
              className="bg-white text-[#6E00E0] font-bold px-12 py-5 rounded-full shadow-2xl hover:scale-110 hover:shadow-purple-500/30 transition-all text-lg"
            >
              Get Free Counseling
            </Link>
            <Link
              href="tel:+918888888888"
              className="border-2 border-white text-white font-bold px-12 py-5 rounded-full hover:bg-white/10 transition-all text-lg"
            >
              📞 Call an Expert
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
