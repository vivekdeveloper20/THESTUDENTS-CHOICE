'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'What is the maximum education loan amount I can get?',
    a: 'Public banks offer up to ₹1.5 Cr for studies abroad, while NBFCs like Credila and Avanse offer up to ₹75 Lakhs without collateral. The exact amount depends on the university, course, and your profile.',
  },
  {
    q: 'Do I need collateral for an education loan?',
    a: 'No! Many lenders offer collateral-free loans up to ₹75 Lakhs for students admitted to top-ranked universities. Our team matches you with the right lender based on your profile.',
  },
  {
    q: 'When do I start repaying the loan?',
    a: 'Most lenders offer a moratorium period — meaning you start repaying 6–12 months after completing your course or getting a job (whichever is earlier). During the study period, you only pay simple interest or nothing at all.',
  },
  {
    q: 'Can I get a tax benefit on education loan interest?',
    a: 'Yes! Under Section 80E of the Income Tax Act, you can claim a deduction on the interest paid on education loans for up to 8 years from the year repayment starts.',
  },
  {
    q: 'What if my loan gets rejected by a bank?',
    a: 'Don\'t worry — a rejection from one bank doesn\'t mean you won\'t get a loan. We work with 15+ lenders and can re-strategize your application. Check our Beyond Rejection page for dedicated support.',
  },
  {
    q: 'How long does the loan approval process take?',
    a: 'Typically 7–21 working days from document submission, depending on the lender. Our team actively follows up to reduce delays and keep the process moving quickly.',
  },
  {
    q: 'Does the loan cover living expenses too?',
    a: 'Yes! Education loans can cover tuition fees, hostel/accommodation, travel, books, laptops, and other course-related expenses — depending on the lender\'s policies.',
  },
];

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div className="rounded-2xl border border-[#e6dcfb] bg-white overflow-hidden transition-all duration-300 hover:border-[#c9aef8]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
        aria-expanded={open}
        id={`faq-btn-${idx}`}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8424e8] to-[#6f1ed0] text-white text-xs font-bold">
            {idx + 1}
          </span>
          <span className="font-extrabold text-[#1f2937] text-[15px] leading-snug">{q}</span>
        </div>
        <span className={`text-[#8424e8] text-xl font-bold transition-transform duration-300 shrink-0 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm leading-relaxed px-6 pb-5 pl-16">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function EduLoanFAQ() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#f3ebff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1f1147]">
            Everything You Want to Know
            <br />
            <span className="text-[#8424e8]">About Education Loans</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Honest answers to the most common questions. No jargon, just clarity.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <FAQItem q={faq.q} a={faq.a} idx={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
