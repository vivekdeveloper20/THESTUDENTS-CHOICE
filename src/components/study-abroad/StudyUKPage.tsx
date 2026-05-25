'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import { WhyUKTopChoiceSection } from './WhyUKTopChoiceSection';
import { UKPopularUniversitiesSection } from './UKPopularUniversitiesSection';
import { RequirementsSection } from './RequirementsSection';
import { DestinationsSection } from '@/components/home/DestinationsSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { JourneySection } from '@/components/home/JourneySection';
import { FaqSection } from '@/components/home/FaqSection';
import { CtaBanner } from '@/components/home/CtaBanner';

export interface StudyUKPageProps {
  country: string;
  tagline: string;
  heroImage: string;
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

export function StudyUKPage(p: StudyUKPageProps) {
  return (
    <PageShell>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative pt-10 pb-20 px-3 md:px-5">
        <div 
          className="max-w-[1400px] mx-auto rounded-[28px] overflow-hidden relative min-h-[340px] md:min-h-[420px] flex items-center shadow-2xl transition-all hover:shadow-purple-500/30"
          style={{
            backgroundImage: `url('${p.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 px-8 md:px-16 lg:px-28 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-lg leading-tight tracking-tight">
                {p.tagline}
              </h1>
              <p className="text-white/95 text-lg md:text-2xl font-semibold mb-12 max-w-2xl leading-relaxed drop-shadow-md">
                Discover top universities, compare tuition costs, explore scholarships, and plan your {p.country} journey — all in one place
              </p>
              
              <Link
                href="/uk-universities"
                className="inline-flex items-center bg-white text-[#8424e8] font-extrabold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all text-base md:text-lg group"
              >
                Explore {p.country} University 
                <span className="ml-3 group-hover:translate-x-1 transition-transform text-xl">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-medium"
        >
          {p.introParagraphs.map((para, i) => (
            <p key={i}>
              {para}
            </p>
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
              <span className="text-2xl md:text-3xl font-extrabold text-[#8424e8]">{s.value}</span>
              <span className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Highlights Grid ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#f4eeff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
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

      {/* ── Why UK Top Choice ──────────────────────────── */}
      <WhyUKTopChoiceSection />

      {/* ── Top Universities ───────────────────────────── */}
      <section className="bg-gradient-to-br from-[#faf7ff] to-[#f0e8ff] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#8424e8]/10 text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8424e8] to-[#b36af5] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  #{i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#8424e8] transition-colors">{u.name}</h3>
                  <p className="text-xs text-[#8424e8] font-semibold mt-1 uppercase tracking-wider">{u.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UK Popular Universities ────────────────────────────── */}
      <UKPopularUniversitiesSection />

      {/* ── Requirements ───────────────────────────────── */}
      <RequirementsSection
        requirements={p.requirements}
        avgCost={p.avgCost}
        workPermit={p.workPermit}
        processingTime={p.processingTime}
      />

      {/* ── Destinations & Global Sections ────────────────────────────── */}
      <DestinationsSection />
      <TestimonialSection />
      <JourneySection />
      <FaqSection />
      <CtaBanner />

    </PageShell>
  );
}
