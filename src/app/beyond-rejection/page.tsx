import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: "Beyond Rejection | Student's Choice",
  description:
    'Support for students facing study abroad or education loan rejection with a clear recovery plan.',
};

const RECOVERY_STEPS = [
  'Case decode call: exact rejection reason breakdown',
  'Gap repair sprint: documents, profile, finances, and narrative',
  'Rebuild strategy: better university-bank-country combination',
  'Confident re-application with a personalized checklist',
];

const SUPPORT_AREAS = [
  {
    icon: '📄',
    title: 'Document Forensics',
    desc: 'We audit every submitted file and rebuild your packet with lender-admission-ready formatting.',
  },
  {
    icon: '🏦',
    title: 'Loan Architecture',
    desc: 'From co-applicant corrections to bank matching, we redesign your finance story for approval confidence.',
  },
  {
    icon: '🎓',
    title: 'Admission Reset',
    desc: 'Rejected by a university or visa pathway? We rebuild your profile strategy with stronger options.',
  },
  {
    icon: '🗺️',
    title: 'Smart Destination Switch',
    desc: 'We map low-risk alternatives in country, course, and intake so your plan stays on track.',
  },
];

const IMPACT_METRICS = [
  { value: '93%', label: 'Cases mapped with clear rejection reason within first call' },
  { value: '2x', label: 'Higher confidence after profile and paperwork restructuring' },
  { value: '48h', label: 'Typical time to receive your custom comeback blueprint' },
];

const HERO_STATUS_CARDS = [
  {
    title: 'Application Status',
    subtitle: 'Under Review',
    note: 'Analyzing your case',
    progress: '58%',
    icon: '🕒',
  },
  {
    title: 'Fresh Approval Chance',
    subtitle: '82% Match Found',
    note: 'Better lender available',
    progress: '66%',
    icon: '✅',
  },
  {
    title: 'Profile Review',
    subtitle: 'In Progress',
    note: 'Expert analyzing docs',
    progress: '74%',
    icon: '📄',
  },
];

const REJECTION_REASONS = [
  {
    icon: '◎',
    title: 'Wrong Lender Selection',
    desc: 'Not all lenders match your profile. We find the right fit for your course and financial background.',
  },
  {
    icon: '✉',
    title: 'Weak Documentation',
    desc: 'Incomplete or poorly presented documents lead to instant rejection. We strengthen your application.',
  },
  {
    icon: '⌁',
    title: 'Income Mismatch',
    desc: "Your family income may not match the lender's criteria. We find flexible options.",
  },
  {
    icon: '◌',
    title: 'Profile Presentation',
    desc: 'How you present matters. We optimize your profile to highlight strengths.',
  },
  {
    icon: '◔',
    title: 'Course / University Fit',
    desc: 'Some lenders prefer specific universities or courses. We match you accordingly.',
  },
  {
    icon: '◍',
    title: 'Avoidable Errors',
    desc: 'Simple mistakes cost approvals. We ensure error-free applications.',
  },
];

const RECOVERY_PROCESS = [
  {
    title: 'Full Case Review',
    desc: 'We analyze why you were rejected and identify profile, lender, and documentation gaps.',
    icon: '⌕',
  },
  {
    title: 'Profile Strategy',
    desc: 'A stronger re-application game plan is created with expert-backed improvements.',
    icon: '⌖',
  },
  {
    title: 'Better Lender Mapping',
    desc: 'We match your profile with lenders who approve similar cases and timelines.',
    icon: '⌘',
  },
  {
    title: 'Documentation Support',
    desc: 'Our team prepares and refines documents so your file is complete and clean.',
    icon: '☑',
  },
  {
    title: 'Smart Reapplication',
    desc: 'You reapply with confidence using the optimized strategy and reduced rejection risk.',
    icon: '↻',
  },
];

export default function BeyondRejectionPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-20 pb-24 bg-gradient-to-r from-[#091433] via-[#2d1f7a] to-[#5f2fb3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(114,164,255,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(193,118,255,0.2),transparent_36%)]" />
        <div className="pointer-events-none absolute -top-12 left-24 w-64 h-64 rounded-full bg-[#7d9dff]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-24 w-72 h-72 rounded-full bg-[#b08dff]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#5de2db]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center bg-white/10 border border-white/15 text-[#d7deff] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                Rejected Before? You Still Have Options.
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
                Loan Rejected? Let&apos;s Build a Stronger Comeback.
              </h1>
              <p className="text-[#cfd5ef] text-lg leading-relaxed mb-8">
                A rejection may mean the wrong lender, incomplete documents, or profile mismatch. We help you reassess and reapply smarter.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact-us?type=consultation"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#7d49ff] to-[#6f1ed0] text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_10px_28px_rgba(113,62,226,0.45)] hover:brightness-110 transition-all"
                >
                  Get Rejection Support
                </Link>
                <Link
                  href="/contact-us?type=expert"
                  className="inline-flex items-center justify-center bg-white text-[#6044c6] font-bold px-7 py-3.5 rounded-xl shadow-[0_10px_24px_rgba(10,15,40,0.24)] hover:bg-[#f3edff] transition-colors"
                >
                  Free Profile Review
                </Link>
                <Link
                  href="https://wa.me/918888888888"
                  className="inline-flex items-center justify-center bg-[#1fc65f] text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_10px_26px_rgba(27,154,74,0.45)] hover:bg-[#16b454] transition-colors"
                >
                  WhatsApp
                </Link>
              </div>
            </div>

            <div className="space-y-4 lg:pl-8">
              {HERO_STATUS_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/15 bg-white/12 backdrop-blur-md px-6 py-5 shadow-[0_12px_34px_rgba(14,20,50,0.24)]"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center text-lg">{card.icon}</div>
                    <div>
                      <p className="text-white font-semibold">{card.title}</p>
                      <p className="text-[#d8d9ff] text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#66d6ff] to-[#3ee57f]"
                      style={{ width: card.progress }}
                    />
                  </div>
                  <p className="text-[#c5c9ec] text-xs mt-2">{card.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#f8f5ff] via-white to-[#f7f3ff] py-20">
        <div className="pointer-events-none absolute left-10 top-6 w-56 h-56 rounded-full bg-[#c6a6ff]/25 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-0 w-64 h-64 rounded-full bg-[#9c7dff]/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] tracking-tight">
              Why Education Loans Get Rejected
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-4 max-w-2xl mx-auto">
              Most rejections are solvable when the gaps are identified early and fixed with the right strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {REJECTION_REASONS.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-[#ebe4fb] bg-white/90 backdrop-blur-sm p-7 shadow-[0_12px_28px_rgba(132,36,232,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_38px_rgba(132,36,232,0.16)] hover:border-[#c7b1f3]"
              >
                <div className="absolute inset-x-4 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] text-white text-lg shadow-[0_10px_24px_rgba(124,58,237,0.35)] transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-[#1f2937] mb-3 leading-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f9ff] py-22">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#efe9ff] to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-14 h-40 w-40 -translate-x-1/2 rounded-full bg-[#8f68ff]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] tracking-tight">
              How Students Choice Helps You Recover
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-4 max-w-2xl mx-auto">
              A guided 5-step recovery flow designed to convert rejection into approval-ready reapplication.
            </p>
          </div>

          <div className="relative grid gap-6 md:grid-cols-5 md:gap-4">
            <div className="pointer-events-none hidden md:block absolute left-[7%] right-[7%] top-7 h-[3px] rounded-full bg-gradient-to-r from-[#6f1ed0] via-[#5a7fff] to-[#30c7a7]" />
            {RECOVERY_PROCESS.map((step, idx) => (
              <article key={step.title} className="group relative text-center pt-1">
                <div className="relative z-10 mx-auto mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-[#6f1ed0] via-[#6f54ff] to-[#27bfa4] text-white text-xl font-black shadow-[0_10px_24px_rgba(111,30,208,0.35)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {idx + 1}
                </div>
                <div className="mb-3 text-[#6f1ed0] text-2xl font-bold transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="text-xl font-extrabold text-[#1f2937] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

                <div className="pointer-events-none absolute inset-x-6 -bottom-2 h-6 bg-[#6f1ed0]/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {IMPACT_METRICS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#ece4fb] bg-gradient-to-br from-white to-[#faf6ff] p-6 shadow-[0_10px_30px_rgba(132,36,232,0.08)]"
            >
              <div className="text-4xl font-black text-[#8424e8] mb-2">{item.value}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden pb-8">
        <div className="pointer-events-none absolute -top-6 left-10 h-36 w-36 rounded-full bg-[#b08dff]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-12 h-40 w-40 rounded-full bg-[#8424e8]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-[#e9defc] bg-gradient-to-br from-[#ffffff] via-[#faf6ff] to-[#f3ebff] p-8 md:p-10 shadow-[0_16px_40px_rgba(132,36,232,0.1)]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div>
                <span className="inline-flex items-center rounded-full border border-[#d9c6fb] bg-white text-[#6f1ed0] text-xs font-bold uppercase tracking-wider px-4 py-1.5 mb-4">
                  Comeback Mindset
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#1f1147] leading-tight mb-3">
                  Rejection Is a Delay, Not the End
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                  Many students receive approvals after improving strategy and choosing the right lender.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e9defc] bg-white/90 p-6">
                <h3 className="text-xl font-extrabold text-[#1f2937] mb-4">This Page Is for You If:</h3>
                <div className="space-y-3">
                  {[
                    'Rejected by a Bank',
                    'NBFC Declined',
                    'Low Income Issue',
                    'Need Urgent Tuition Funding',
                    'Need Expert Guidance',
                    'Confused About Next Step',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] text-white text-xs font-bold">
                        ✓
                      </span>
                      <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block bg-[#f4eeff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              What We Fix
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              Every rejection has a pattern. We solve the right one.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Most students are not rejected because they are not capable. They are rejected because their profile presentation, documentation logic, or financing mix is not aligned with decision criteria.
            </p>
            <div className="space-y-3">
              {RECOVERY_STEPS.map((step) => (
                <div key={step} className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm">
                  <span className="text-[#8424e8] font-bold mt-0.5">✓</span>
                  <span className="text-gray-700 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {SUPPORT_AREAS.map((item) => (
              <div
                key={item.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-[0_14px_40px_rgba(132,36,232,0.15)] hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                <h3 className="font-extrabold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#faf7ff] to-[#f0e8ff] py-20">
        <div className="pointer-events-none absolute -top-14 left-0 w-52 h-52 rounded-full bg-[#c99eff]/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#8424e8]/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-[#8424e8]/10 text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Next Step
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
            Share your rejection details and receive your comeback blueprint
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Bring your previous application, rejection message, and current profile. We will identify exact blockers and map your best path forward.
          </p>
          <Link
            href="/contact-us?type=consultation"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#8424e8] to-[#6f1ed0] text-white font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
