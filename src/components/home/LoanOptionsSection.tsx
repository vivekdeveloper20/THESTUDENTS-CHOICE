'use client';

import { motion } from 'framer-motion';

const leftBanks = [
  { name: "Bank 2",  logo: "/assets/images/banks/2.svg"  },
  { name: "Bank 3",  logo: "/assets/images/banks/3.svg"  },
  { name: "Bank 4",  logo: "/assets/images/banks/4.svg"  },
  { name: "Bank 5",  logo: "/assets/images/banks/5.svg"  },
  { name: "Bank 6",  logo: "/assets/images/banks/6.svg"  },
  { name: "Bank 7",  logo: "/assets/images/banks/7.svg"  },
];

const rightBanks = [
  { name: "Bank 8",  logo: "/assets/images/banks/8.svg"  },
  { name: "Bank 9",  logo: "/assets/images/banks/9.svg"  },
  { name: "Bank 10", logo: "/assets/images/banks/10.svg" },
  { name: "Bank 11", logo: "/assets/images/banks/11.svg" },
  { name: "Bank 12", logo: "/assets/images/banks/12.svg" },
  { name: "Bank 13", logo: "/assets/images/banks/13.svg" },
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
        className="max-h-full w-full object-contain"
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
