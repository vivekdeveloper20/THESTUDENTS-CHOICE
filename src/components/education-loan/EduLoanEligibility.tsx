'use client';

import { motion } from 'framer-motion';

const ELIGIBILITY = [
  { icon: '🎓', title: 'Admission Letter', desc: 'Confirmed offer letter from a recognised university abroad or in India.' },
  { icon: '📊', title: 'Academic Record', desc: '60%+ marks in 10th, 12th, and graduation (if applicable).' },
  { icon: '🪪', title: 'Age Criteria', desc: 'Indian citizen, 18–35 years of age at time of application.' },
  { icon: '👨‍👩‍👧', title: 'Co-applicant', desc: 'Parent/guardian as co-applicant with stable income or co-borrower.' },
  { icon: '🏠', title: 'Collateral (Optional)', desc: 'Required for higher loan amounts. Not needed for collateral-free options.' },
  { icon: '💳', title: 'Credit Score', desc: 'Good credit history of co-applicant helps secure better rates.' },
];

const DOCS = [
  'Admission offer letter from university',
  'Student\'s KYC (Aadhaar, PAN, Passport)',
  'Academic records (10th, 12th, Degree)',
  'Co-applicant KYC & income proof',
  'Bank statements (last 6 months)',
  'Fee structure / cost of attendance',
  'Collateral documents (if applicable)',
  'Scholarship letter (if any)',
];

export function EduLoanEligibility() {
  return (
    <section className="w-full bg-gradient-to-b from-[#faf7ff] to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#f3ebff] text-[#6E00E0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Eligibility & Documents
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1f1147]">
            Who Can Apply &
            <br />
            <span className="text-[#6E00E0]">What Do You Need?</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Most students are eligible. Check the basic criteria and start gathering your documents today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Eligibility criteria */}
          <div>
            <h3 className="text-xl font-extrabold text-[#1f2937] mb-6">Basic Eligibility Criteria</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {ELIGIBILITY.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group rounded-2xl border border-[#ebe4fb] bg-white p-5 hover:shadow-[0_8px_24px_rgba(110,0,224,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-extrabold text-[#1f2937] text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Documents checklist + form */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#ebe4fb] bg-white p-7 shadow-[0_8px_24px_rgba(110,0,224,0.07)]">
              <h3 className="text-xl font-extrabold text-[#1f2937] mb-5">Documents Required</h3>
              <ul className="flex flex-col gap-3">
                {DOCS.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6E00E0] to-[#6f1ed0] text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick apply form */}
            <div className="rounded-3xl border border-[#ebe4fb] bg-gradient-to-br from-[#6E00E0] to-[#6f1ed0] p-7 shadow-[0_12px_30px_rgba(110,0,224,0.25)]">
              <h3 className="text-xl font-extrabold text-white mb-1">Not Sure About Eligibility?</h3>
              <p className="text-white/80 text-sm mb-5">Fill in basic details and our expert will call you within 24 hours.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="edu-loan-name"
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/60 text-sm focus:outline-none focus:bg-white/20 transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  id="edu-loan-phone"
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/60 text-sm focus:outline-none focus:bg-white/20 transition"
                />
                <select
                  id="edu-loan-country"
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 text-white/80 text-sm focus:outline-none focus:bg-white/20 transition"
                >
                  <option value="" className="text-gray-800">Select Study Destination</option>
                  <option value="usa" className="text-gray-800">USA</option>
                  <option value="uk" className="text-gray-800">UK</option>
                  <option value="canada" className="text-gray-800">Canada</option>
                  <option value="australia" className="text-gray-800">Australia</option>
                  <option value="germany" className="text-gray-800">Germany</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
                <button
                  type="submit"
                  id="edu-loan-eligibility-submit"
                  className="w-full bg-white text-[#6E00E0] font-bold py-3 rounded-xl hover:bg-[#f3ebff] transition shadow-md"
                >
                  Check My Eligibility Free →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
