'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandWhatsapp, IconPhone } from '@tabler/icons-react';

export function EduLoanCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#8424e8] via-[#6f1ed0] to-[#4c1387] py-20 px-4 sm:px-6 lg:px-8">
      {/* BG Orbs */}
      <div className="pointer-events-none absolute -top-20 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-fuchsia-300/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center bg-white/15 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            🎓 Your Dream Abroad Starts Here
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
            Ready to Fund Your
            <br />
            Global Education?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Talk to an expert today. Free consultation, zero obligation. We&#39;ll help you find the right
            education loan and get you approved faster.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/contact-us?type=consultation"
              id="edu-loan-final-cta"
              className="inline-flex items-center justify-center bg-white text-[#8424e8] font-black px-10 py-4 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.25)] hover:bg-[#f3ebff] hover:scale-105 transition-all text-lg"
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/918888888888"
              id="edu-loan-whatsapp-cta"
              className="inline-flex items-center gap-2 bg-[#1fc65f] text-white font-bold px-8 py-4 rounded-full shadow-[0_12px_30px_rgba(27,154,74,0.4)] hover:bg-[#16b454] hover:scale-105 transition-all text-lg"
            >
              <IconBrandWhatsapp size={22} />
              WhatsApp Us
            </a>
            <a
              href="tel:+918888888888"
              id="edu-loan-call-cta"
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all text-lg"
            >
              <IconPhone size={20} />
              Call Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm font-medium">
            {[
              '✓ 100% Free Guidance',
              '✓ No Hidden Charges',
              '✓ Response in 24 Hours',
              '✓ 50,000+ Students Helped',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
