'use client';

const BANKS = [
  { name: 'ICICI Bank',           logo: '/assets/images/Icici.svg' },
  { name: 'Union Bank of India',  logo: '/assets/images/Union.svg' },
  { name: 'Punjab National Bank', logo: '/assets/images/Pnb.svg' },
  { name: 'IDFC First Bank',      logo: '/assets/images/Idfc.svg' },
  { name: 'Bank of Baroda',       logo: '/assets/images/Bob.svg' },
  { name: 'Yes Bank',             logo: '/assets/images/Yes.svg' },
  { name: 'Axis Bank',            logo: '/assets/images/Axis.svg' },
  { name: 'Credila',              logo: '/assets/images/Credila.svg' },
  { name: 'Avanse',               logo: '/assets/images/Avanse.svg' },
  { name: 'Avanse Global',        logo: '/assets/images/Avanse%20Global.svg' },
  { name: 'Tata Capital',         logo: '/assets/images/Tata.svg' },
  { name: 'Poonawalla Fincorp',   logo: '/assets/images/Poonawalla.svg' },
  { name: 'Auxilo',               logo: '/assets/images/Auxilo.svg' },
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
              className="flex-shrink-0 h-24 w-56 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#e0d4ff] hover:scale-105 transition-all duration-300 flex items-center justify-center px-5 py-4 group"
              style={{ boxShadow: '0 2px 12px rgba(110,0,224,0.06)' }}
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="max-h-full max-w-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
