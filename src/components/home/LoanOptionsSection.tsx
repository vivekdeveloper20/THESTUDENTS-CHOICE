'use client';

import { motion } from 'framer-motion';

const leftBanks = [
  { name: "ICICI Bank", logo: "/assets/images/banks/ICICI.png" },
  { name: "Union Bank", logo: "/assets/images/banks/Union.png" },
  { name: "PNB", logo: "/assets/images/banks/PNB.png" },
  { name: "IDFC First Bank", logo: "/assets/images/banks/IDFC.png" }
];

const rightBanks = [
  { name: "Credila", logo: "/assets/images/banks/Credila.png" },
  { name: "Tata Capital", logo: "/assets/images/banks/Tata.png" },
  { name: "Poonawalla Fincorp", logo: "/assets/images/banks/Poonawalla.png" },
  { name: "Avanse", logo: "/assets/images/banks/Avanse.png" }
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function renderBankCard(bank: { name: string; logo: string }, key: string) {
  return (
    <motion.div
      key={key}
      variants={logoVariants}
      className="bg-white rounded-2xl p-4 h-28 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
    >
      <img
        src={bank.logo}
        alt={bank.name}
        className="max-h-[70%] w-full object-cover"
      />
    </motion.div>
  );
}

export function LoanOptionsSection() {
  const repeatedLeftBanks = [...leftBanks, ...leftBanks];
  const repeatedRightBanks = [...rightBanks, ...rightBanks];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[40px] bg-[#8424e8] p-8 md:p-14 overflow-hidden shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Column Logos */}
          <div className="w-full lg:w-[240px]">
            <div className="grid grid-cols-2 gap-5 lg:hidden">
              {leftBanks.map((bank, idx) => renderBankCard(bank, `left-mobile-${idx}`))}
            </div>
            <div className="hidden lg:block h-[31.75rem] overflow-hidden">
              <div className="flex flex-col gap-5 animate-logo-scroll-up will-change-transform">
                {repeatedLeftBanks.map((bank, idx) => renderBankCard(bank, `left-desktop-${idx}`))}
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center flex flex-col items-center justify-center px-4">
            <h2 className="text-[28px] md:text-[40px] font-bold text-white leading-tight mb-6 max-w-[600px]">
              Explore Loan Options from Public Banks, Private Banks & NBFCs
            </h2>
            <div className="w-16 h-1 bg-white/30 rounded-full mb-8"></div>
            <p className="text-white/80 text-[16px] md:text-[22px] font-medium max-w-[450px] leading-relaxed">
              Your Trusted Partner for Overseas Education Loans
            </p>
          </div>

          {/* Right Column Logos */}
          <div className="w-full lg:w-[240px]">
            <div className="grid grid-cols-2 gap-5 lg:hidden">
              {rightBanks.map((bank, idx) => renderBankCard(bank, `right-mobile-${idx}`))}
            </div>
            <div className="hidden lg:block h-[31.75rem] overflow-hidden">
              <div className="flex flex-col gap-5 animate-logo-scroll-down will-change-transform">
                {repeatedRightBanks.map((bank, idx) => renderBankCard(bank, `right-desktop-${idx}`))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
