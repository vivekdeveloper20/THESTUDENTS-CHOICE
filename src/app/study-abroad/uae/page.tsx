import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in UAE | Student's Choice",
  description: 'Explore universities in Dubai and Abu Dhabi — the UAE\'s tax-free economy and global career opportunities.',
};

export default function UAEPage() {
  return (
    <CountryPage
      country="UAE"
      flag="🇦🇪"
      tagline="A tax-free global crossroads with world-class campuses, zero income tax, and booming career opportunities in Dubai & Abu Dhabi."
      description="The UAE has transformed into a world-class education destination with international branch campuses of NYU, Sorbonne, and Manipal. Dubai and Abu Dhabi offer students a unique mix of Eastern and Western cultures, tax-free salaries, and access to one of the fastest-growing economies in the world. Large Indian community makes the transition seamless."
      heroGradient="bg-gradient-to-br from-[#1b5e20] via-[#1a1a1a] to-[#b71c1c]"
      accentColor="#1b5e20"
      stats={[
        { value: '50K+', label: 'Indian Students' },
        { value: '0%', label: 'Income Tax' },
        { value: '70+', label: 'Universities in UAE' },
        { value: 'Growing', label: 'Economy Rank Top 20' },
      ]}
      highlights={[
        { icon: '🏙️', title: 'Dubai & Abu Dhabi', desc: 'Futuristic smart cities with world-class infrastructure.' },
        { icon: '💰', title: 'Tax-Free Economy', desc: 'Earn and live with zero income tax after graduation.' },
        { icon: '🇮🇳', title: 'Large Indian Diaspora', desc: '3M+ Indians live in UAE — smooth cultural transition.' },
        { icon: '✈️', title: 'Global Connectivity', desc: 'Dubai is within 8 hours of 80% of the world\'s population.' },
      ]}
      universities={[
        { name: 'NYU Abu Dhabi', rank: 'QS World Rank #185' },
        { name: 'Sorbonne University Abu Dhabi', rank: 'Top French University Branch' },
        { name: 'Khalifa University', rank: 'QS World Rank #214' },
        { name: 'University of Sharjah', rank: 'QS World Rank #481' },
        { name: 'American University of Sharjah', rank: 'Top 5 in UAE' },
        { name: 'Manipal Academy UAE Campus', rank: 'Top India Brand Abroad' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'IELTS 6.0+ or TOEFL 80+ for English programs',
        'UAE Student/Mission Visa',
        'University enrollment letter from KHDA-approved institution',
        'Proof of financial support: AED 4,000–8,000/month',
        'Medical fitness certificate and attested documents',
      ]}
      avgCost="₹15–35 L/yr"
      workPermit="Employment Visa"
      processingTime="2–6 Weeks"
    />
  );
}
