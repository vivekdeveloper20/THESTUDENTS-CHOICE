import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in India | Student's Choice",
  description: 'Discover premier Indian institutions — IITs, IIMs, AIIMS and more with Student\'s Choice guidance.',
};

export default function IndiaPage() {
  return (
    <CountryPage
      country="India"
      flag="🇮🇳"
      tagline="India's world-class IITs, IIMs, and AIIMS — premium education at home with global recognition and affordable costs."
      description="India is home to world-renowned institutions like the IITs, IIMs, and AIIMS that are globally respected. With the rise of private universities and online education, Indian higher education is transforming rapidly. For international students (NRIs, PIOs) or Indian students reconsidering abroad, India offers excellent quality at a fraction of overseas costs."
      heroGradient="bg-gradient-to-br from-[#ff6f00] via-[#ffffff] to-[#1b5e20]"
      accentColor="#ff6f00"
      stats={[
        { value: '1,000+', label: 'Universities' },
        { value: '₹2–15 L', label: 'Avg Annual Fees' },
        { value: 'Top 200', label: 'IIT World Rank' },
        { value: '25+', label: 'IITs & IIMs' },
      ]}
      highlights={[
        { icon: '🏛️', title: 'IITs & IIMs', desc: 'World-respected institutions for tech, management, and research.' },
        { icon: '💸', title: 'Affordable Costs', desc: 'Quality education at 5–10% of overseas study costs.' },
        { icon: '🌐', title: 'Global Alumni Network', desc: 'IIT/IIM graduates lead Fortune 500 companies worldwide.' },
        { icon: '🏥', title: 'AIIMS & Top Medical', desc: 'India\'s medical colleges rank among Asia\'s best.' },
      ]}
      universities={[
        { name: 'IIT Bombay', rank: 'QS World Rank #118' },
        { name: 'IIT Delhi', rank: 'QS World Rank #150' },
        { name: 'IIT Madras', rank: 'QS World Rank #227' },
        { name: 'IIM Ahmedabad', rank: 'FT MBA Rank Top 50' },
        { name: 'AIIMS New Delhi', rank: 'Top Medical in Asia' },
        { name: 'Ashoka University', rank: 'India\'s Liberal Arts #1' },
      ]}
      requirements={[
        'JEE Main/Advanced for IITs (UG Engineering)',
        'CAT/GMAT for IIM MBA programs',
        'NEET for medical (AIIMS/MBBS)',
        'CUET for central university admissions',
        'Class 12 with minimum 60% for most private universities',
        'English proficiency not required for most Indian institutions',
      ]}
      avgCost="₹2–15 L/yr"
      workPermit="N/A (Home)"
      processingTime="1–3 Months"
    />
  );
}
