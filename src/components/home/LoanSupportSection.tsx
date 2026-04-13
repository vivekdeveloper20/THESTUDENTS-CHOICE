'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "Find the right loan options",
    description: "Understand your loan eligibility based on your academic profile, chosen university, and financial background. We help you identify the best possible loan options from the start."
  },
  {
    number: "2",
    title: "Connect with Our Experts",
    description: "Speak with our experienced advisors to get personalized guidance and clarity on the best loan solutions for your profile."
  },
  {
    number: "3",
    title: "Documentation & Application",
    description: "Prepare and submit all required documents with our support to ensure a smooth and error-free application process."
  },
  {
    number: "4",
    title: "Compare and choose Best Loan Offer",
    description: "We help you compare multiple lenders and secure the most suitable loan with competitive interest rates and flexible terms."
  },
  {
    number: "5",
    title: "Approval & Disbursement",
    description: "Receive your loan sanction and ensure timely disbursement of funds directly to your university."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: idx * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
};

export function LoanSupportSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[32px] md:text-[38px] font-bold text-[#8424e8] mb-16"
        >
          End-to-End Overseas Education Loan Support
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column: Steps List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-[60%] flex flex-col gap-6 lg:gap-0 lg:pr-3 relative"
          >
            <div className="hidden lg:block absolute left-[1.05rem] top-14 bottom-10 w-[2px] bg-gradient-to-b from-[#8424e8]/20 via-[#8424e8]/55 to-[#8424e8]/20"></div>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.55 }}
                className="flex items-start gap-6 group relative lg:sticky"
                style={{
                  top: '6.25rem',
                  zIndex: idx + 1
                }}
              >
                {/* Step Number */}
                <div className="w-8 shrink-0 pt-1.5 relative z-10">
                  <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-[#ded0ff] text-[22px] md:text-[26px] font-bold text-[#8424e8] leading-none shadow-[0_6px_16px_rgba(132,36,232,0.18)]">
                    {step.number}
                  </span>
                </div>

                {/* Step Content Box */}
                <div className="flex-1 bg-[#F5F5F5] rounded-[24px] p-6 md:p-8 shadow-[0_8px_20px_rgba(132,36,232,0.08)] border border-[#ebe1ff] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8424e8] via-[#a855f7] to-[#8424e8]"></div>
                  <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-[#8424e8]/8 blur-2xl pointer-events-none"></div>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#8424e8] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-[#8424e8] px-5 py-2.5 text-[13px] md:text-sm font-semibold text-white shadow-[0_8px_18px_rgba(132,36,232,0.35)] transition-all duration-300 hover:bg-[#6f1ed0] hover:-translate-y-0.5"
                    >
                      Free Expert Consultation
                      <span aria-hidden="true" className="text-base leading-none">↗</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Decorative Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] relative flex justify-center items-end min-h-[500px]"
          >
            {/* Background Decorative Element (Purple Shape/Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[550px] aspect-square bg-[#8424e8] rounded-full filter blur-[120px] opacity-10 -z-10"></div>
            
            {/* Decorative Purple Shape (Abstract) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square bg-[#8424e8] rounded-full opacity-90 -z-10 animate-pulse" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }}></div>

            {/* Dotted Airplane Path (Simplified SVG) */}
            <div className="absolute top-[5%] left-[-10%] z-0 max-w-[350px] opacity-40 hidden md:block">
                <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                    <path d="M10 150Q70 20 190 100" stroke="#8424e8" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                    <path d="M190 100L185 90M190 100L180 105" stroke="#8424e8" strokeWidth="2" />
                </svg>
            </div>

            {/* Main Image */}
            <div className="relative z-10 w-full max-w-[550px] lg:translate-x-10">
              <img 
                src="/assets/images/girl-photo.png" 
                alt="Student Overseas Support" 
                className="w-full h-auto drop-shadow-2xl object-contain"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
