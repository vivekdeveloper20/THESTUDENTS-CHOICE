'use client';

import { motion } from 'framer-motion';
import { IconWorld } from '@tabler/icons-react';

const loansByCountry = [
  "Education Loans for US",
  "Education Loans for UK",
  "Education Loans for Canada",
  "Education Loans for Australia",
  "Education Loans for Germany",
  "Education Loans for Ireland",
  "Education Loans for France",
  "Education Loans for New Zealand",
  "Education Loans for Singapore",
  "Education Loans for Spain",
  "Education Loans for Netherlands",
  "Education Loans for Sweden"
];

const loanPartners = [
  "SBI Education Loan",
  "UBI Education Loan",
  "ICICI Education Loan",
  "Axis Education Loan",
  "IDFC First Education Loan",
  "Prodigy Education Loan",
  "Mpower Education Loan",
  "Credila Education Loan",
  "Avanse Education Loan",
  "Incred Education Loan",
  "Auxilo Education Loan",
  "Bob Education Loan",
  "TATA Capital Education Loan",
  "Yes Bank Education Loan"
];

const countries = [
  "Study in USA",
  "Study in UK",
  "Study in Canada",
  "Study in Australia",
  "Study in Germany",
  "Study in Ireland",
  "Study in New Zealand",
  "Study in France"
];

export function PreFooter() {
  return (
    <section className="w-full bg-[#520cbd] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Loans by Country */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Loans by Country</h3>
          <ul className="space-y-3">
            {loansByCountry.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Loan Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Loan Partners</h3>
          <ul className="space-y-3">
            {loanPartners.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Countries */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Countries</h3>
          <ul className="space-y-3">
            {countries.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Branding & Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <div className="mb-4">
            <img 
              src="/assets/images/white-logo.png" 
              alt="Student's Choice" 
              className="h-30 w-auto object-cover -ml-2"
            />
          </div>
          
          <p className="text-white/80 text-[14px] leading-relaxed max-w-[320px] -mt-4">
            Student&apos;s Choice is a marketplace that offers abroad education loans to Indian students. With Student&apos;s Choice, get up to 100% financing to study abroad at the lowest interest rates possible!
          </p>
        </motion.div>

      </div>
    </section>
  );
}
