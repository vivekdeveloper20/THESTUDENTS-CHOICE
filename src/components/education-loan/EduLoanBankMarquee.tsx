'use client';

const BANKS = [
  { name: 'Axis Bank', logo: '/assets/images/banks/Axis.png' },
  { name: 'PNB', logo: '/assets/images/banks/PNB.png' },
  { name: 'InCred', logo: '/assets/images/banks/Incred.png' },
  { name: 'Prodigy Finance', logo: '/assets/images/banks/Prodigy.png' },
  { name: 'Credila', logo: '/assets/images/banks/Credila.png' },
  { name: 'Avanse', logo: '/assets/images/banks/Avanse.png' },
  { name: 'ICICI Bank', logo: '/assets/images/banks/ICICI.png' },
  { name: 'Union Bank', logo: '/assets/images/banks/Union.png' },
  { name: 'BOB', logo: '/assets/images/banks/BOB.png' },
  { name: 'IDFC', logo: '/assets/images/banks/IDFC.png' },
  { name: 'Tata Capital', logo: '/assets/images/banks/Tata.png' },
  { name: 'Auxilo', logo: '/assets/images/banks/Auxilo.png' },
];

const repeated = [...BANKS, ...BANKS];

export function EduLoanBankMarquee() {
  return (
    <section className="w-full bg-white border-y border-gray-100 py-6 overflow-hidden">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
        Our Trusted Lending Partners
      </p>
      <div className="relative flex">
        <div className="flex gap-10 items-center animate-marquee-left will-change-transform">
          {repeated.map((bank, i) => (
            <div
              key={`${bank.name}-${i}`}
              className="flex-shrink-0 h-14 w-40 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center px-3 py-2 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img src={bank.logo} alt={bank.name} className="max-h-8 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
