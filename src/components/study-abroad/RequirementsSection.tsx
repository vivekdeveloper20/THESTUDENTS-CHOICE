'use client';

import { motion } from 'framer-motion';

interface RequirementData {
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

export function RequirementsSection({ requirements, avgCost, workPermit, processingTime }: RequirementData) {
  const quickFacts = [
    { icon: '💷', label: 'Average Cost', value: avgCost, color: 'from-blue-500 to-blue-600' },
    { icon: '💼', label: 'Work Permit', value: workPermit, color: 'from-purple-500 to-purple-600' },
    { icon: '⏱️', label: 'Processing Time', value: processingTime, color: 'from-pink-500 to-pink-600' },
  ];

  const documents = [
    '✓ Valid Passport',
    '✓ Academic Transcripts',
    '✓ English Language Test',
    '✓ Statement of Purpose',
    '✓ Academic References',
    '✓ Financial Proof',
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-[#f8f6ff]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#f4eeff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Eligibility
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Requirements to Study in the UK
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Essential Requirements</h3>
            <div className="space-y-4">
              {requirements.map((req, i) => (
                <motion.div
                  key={req}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-[#8424e8]/30 hover:shadow-lg transition-all"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#8424e8] to-[#b36af5] text-white text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 font-medium pt-1.5">{req}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Quick Facts + Documents */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick Facts Cards */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference</h3>
              <div className="space-y-4">
                {quickFacts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    variants={fadeUp}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={`bg-gradient-to-br ${fact.color} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{fact.icon}</span>
                      <div>
                        <p className="text-white/80 text-sm font-medium">{fact.label}</p>
                        <p className="text-2xl font-bold">{fact.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Documents Checklist */}
            <div className="bg-white border-2 border-[#8424e8]/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Documents Checklist</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {documents.map((doc, i) => (
                  <motion.div
                    key={doc}
                    variants={fadeUp}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <span className="text-[#8424e8] text-lg">✓</span>
                    <span>{doc}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6 pt-6 border-t border-gray-200">
                Requirements may vary by university. Contact us for personalized guidance!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
