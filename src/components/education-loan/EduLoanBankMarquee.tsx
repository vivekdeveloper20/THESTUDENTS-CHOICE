'use client';

const BANKS = [
  { name: 'Bank 2',  logo: '/assets/images/banks/2.svg'  },
  { name: 'Bank 3',  logo: '/assets/images/banks/3.svg'  },
  { name: 'Bank 4',  logo: '/assets/images/banks/4.svg'  },
  { name: 'Bank 5',  logo: '/assets/images/banks/5.svg'  },
  { name: 'Bank 6',  logo: '/assets/images/banks/6.svg'  },
  { name: 'Bank 7',  logo: '/assets/images/banks/7.svg'  },
  { name: 'Bank 8',  logo: '/assets/images/banks/8.svg'  },
  { name: 'Bank 9',  logo: '/assets/images/banks/9.svg'  },
  { name: 'Bank 10', logo: '/assets/images/banks/10.svg' },
  { name: 'Bank 11', logo: '/assets/images/banks/11.svg' },
  { name: 'Bank 12', logo: '/assets/images/banks/12.svg' },
  { name: 'Bank 13', logo: '/assets/images/banks/13.svg' },
  { name: 'Bank 14', logo: '/assets/images/banks/14.svg' },
];

const repeated = [...BANKS, ...BANKS];

export function EduLoanBankMarquee() {
  return (
    <section className="w-full bg-white border-y border-gray-100 py-6 overflow-hidden">
      <div className="relative flex">
        <div className="flex gap-6 items-center animate-marquee-left will-change-transform">
          {repeated.map((bank, i) => (
            <div
              key={`${bank.name}-${i}`}
              className="flex-shrink-0 h-24 w-52 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#e0d4ff] hover:scale-105 transition-all duration-300 flex items-center justify-center p-2 group"
              style={{ boxShadow: '0 2px 12px rgba(132,36,232,0.06)' }}
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
