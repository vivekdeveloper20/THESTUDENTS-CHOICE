import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us | Student's Choice",
  description: "Learn about Student's Choice — India's trusted education loan and study abroad consultancy.",
};

const TEAM = [
  { name: 'Arjun Sharma', role: 'Founder & CEO', emoji: '👨‍💼', exp: '12+ years in education finance' },
  { name: 'Priya Nair', role: 'Head of Student Success', emoji: '👩‍🎓', exp: 'Helped 5,000+ students abroad' },
  { name: 'Rohan Mehta', role: 'Loan Advisory Lead', emoji: '🧑‍💼', exp: 'Ex-SBI Education Loan specialist' },
  { name: 'Sneha Iyer', role: 'Visa & Immigration Expert', emoji: '👩‍⚖️', exp: '98% visa approval rate' },
];

const MILESTONES = [
  { year: '2014', title: 'Founded in Mumbai', desc: 'Started as a 3-person team with a mission to simplify study abroad.' },
  { year: '2017', title: '10,000 Students', desc: 'Crossed 10,000 successful student applications across 15 countries.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Launched online counseling and digital loan processing for COVID era.' },
  { year: '2024', title: '50,000+ Students', desc: 'Became India\'s leading study abroad and education loan consultancy.' },
];

const VALUES = [
  { icon: '🔍', title: 'Transparency', desc: 'No hidden fees. We are open about every step of the process.' },
  { icon: '❤️', title: 'Student-First', desc: 'Every decision is made with the student\'s best interest in mind.' },
  { icon: '🎯', title: 'Excellence', desc: '98% visa success rate and ₹15,000 Cr+ in loans sanctioned.' },
  { icon: '🤝', title: 'Integrity', desc: 'We partner only with reputed banks and universities.' },
];

export default function AboutUsPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-[#8424e8] via-[#6f1ed0] to-[#4a0fa0]">
        <div className="pointer-events-none absolute -top-24 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-5">🏫</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">About Student&apos;s Choice</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            India&apos;s most trusted education consultancy — helping students achieve their global dreams since 2014.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full fill-white"><path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {[
            { value: '50,000+', label: 'Students Helped' },
            { value: '₹15,000 Cr+', label: 'Loans Sanctioned' },
            { value: '98%', label: 'Visa Success Rate' },
            { value: '15+', label: 'Bank Partners' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center py-6 px-4 text-center hover:bg-purple-50/50 transition-colors">
              <span className="text-2xl md:text-3xl font-extrabold text-[#8424e8]">{s.value}</span>
              <span className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#f4eeff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Making Global Education Accessible for Every Indian Student</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Student&apos;s Choice was founded with one belief — every deserving student should have access to world-class education, regardless of their financial background. We bridge the gap between aspiration and reality through expert counseling, education loan facilitation, and end-to-end support.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From your first counseling session to your first day on campus abroad, we are with you every step of the way — and beyond.
            </p>
          </div>
          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-[0_8px_30px_rgba(132,36,232,0.1)] hover:-translate-y-1 transition-all">
                <span className="text-3xl mb-3 block">{v.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-br from-[#faf7ff] to-[#f0e8ff] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#8424e8]/10 text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">10 Years of Excellence</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#ede8f7]" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className="relative flex gap-6 items-start pl-16">
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#8424e8] to-[#b36af5] flex items-center justify-center text-white font-black text-sm shadow-lg">
                    {m.year}
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-extrabold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-gray-600 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#f4eeff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Meet the Team</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">The Experts Behind Your Success</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m) => (
            <div key={m.name} className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-[0_12px_40px_rgba(132,36,232,0.12)] hover:-translate-y-1.5 transition-all">
              <div className="text-5xl mb-4">{m.emoji}</div>
              <h3 className="font-extrabold text-gray-900">{m.name}</h3>
              <p className="text-[#8424e8] text-sm font-semibold mt-1">{m.role}</p>
              <p className="text-gray-500 text-xs mt-2">{m.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Ready to Start Your Journey?</h2>
          <p className="text-white/80 text-lg mb-8">Join 50,000+ students who trusted us with their global education dreams.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact-us?type=consultation"
              className="bg-white text-[#8424e8] font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/partner"
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
