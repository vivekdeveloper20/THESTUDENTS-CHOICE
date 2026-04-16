import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Beyond Rejection | Student\'s Choice',
  description: 'Support for students facing study abroad or education loan rejection with a clear recovery plan.',
};

const RECOVERY_STEPS = [
  'Understand why the application was rejected',
  'Fix documentation, profile, or financial gaps',
  'Rebuild the application with the right strategy',
  'Reapply with stronger odds of approval',
];

const SUPPORT_AREAS = [
  { icon: '📄', title: 'Document Review', desc: 'We check what went wrong and what needs to change before the next submission.' },
  { icon: '🏦', title: 'Loan Strategy', desc: 'Get a better bank fit, stronger co-applicant setup, and cleaner financial paperwork.' },
  { icon: '🎓', title: 'Admission Support', desc: 'If the rejection was academic or profile-based, we help rebuild the application plan.' },
  { icon: '🗺️', title: 'Destination Planning', desc: 'We suggest safer destination and university options when the original plan needs a reset.' },
];

export default function BeyondRejectionPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-20 pb-24 bg-gradient-to-br from-[#8424e8] via-[#6f1ed0] to-[#4a0fa0]">
        <div className="pointer-events-none absolute -top-24 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-5">🚀</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">Beyond Rejection</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            If your study abroad or education loan application was rejected, we help you fix the gaps and come back with a stronger plan.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block bg-[#f4eeff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Recovery Plan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              We turn rejection into a clear next step
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Rejection does not have to be the end of the journey. We review the case, identify the actual blockers, and help you rebuild the application with a better chance of success.
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
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(132,36,232,0.12)] hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-extrabold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#faf7ff] to-[#f0e8ff] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#8424e8]/10 text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Next Step
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
            Share your rejection details and we will map the comeback plan
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether it was a bank rejection, admission issue, or profile mismatch, we will help you understand the reason and fix it.
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