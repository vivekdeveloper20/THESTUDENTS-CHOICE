import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in Switzerland | Student's Choice",
  description: 'Explore ETH Zurich, hospitality schools, and world-class research in the heart of Europe.',
};

export default function SwitzerlandPage() {
  return (
    <CountryPage
      country="Switzerland"
      flag="🇨🇭"
      tagline="Nestled in the Alps, Switzerland offers ETH Zurich, world-leading hospitality schools, and unmatched research opportunities."
      description="Switzerland is home to ETH Zurich, consistently ranked among the top 10 universities in the world, and the globally renowned École hôtelière de Lausanne (EHL). With four national languages, a multicultural society, and access to international organizations like UN and WHO, Switzerland offers a unique global education experience."
      heroGradient="bg-gradient-to-br from-[#b71c1c] via-[#e53935] to-[#ffffff]"
      accentColor="#b71c1c"
      stats={[
        { value: '50K+', label: 'International Students' },
        { value: '#7', label: 'ETH Zurich World Rank' },
        { value: '6 Months', label: 'Job Seeker Permit' },
        { value: '4', label: 'National Languages' },
      ]}
      highlights={[
        { icon: '🏔️', title: 'Alpine Excellence', desc: 'Study amidst stunning landscapes and world-class facilities.' },
        { icon: '🔭', title: 'ETH Zurich', desc: 'Ranked #7 globally — Europe\'s leading science & tech university.' },
        { icon: '🛎️', title: 'Hospitality Schools', desc: 'EHL Lausanne — world\'s best hospitality management school.' },
        { icon: '🌐', title: 'UN HQ & WHO', desc: 'Geneva hosts major international organizations and NGOs.' },
      ]}
      universities={[
        { name: 'ETH Zurich', rank: 'QS World Rank #7' },
        { name: 'EPFL (École Polytechnique)', rank: 'QS World Rank #16' },
        { name: 'University of Zurich', rank: 'QS World Rank #83' },
        { name: 'University of Geneva', rank: 'QS World Rank #131' },
        { name: 'EHL Hospitality Business School', rank: 'World\'s Best Hospitality' },
        { name: 'University of Bern', rank: 'QS World Rank #130' },
      ]}
      requirements={[
        '12th pass with high scores (UG) or Bachelor\'s degree with 65%+ (PG)',
        'English (IELTS 6.5+) or German/French depending on program',
        'Switzerland Student Visa (Type D) for non-EU students',
        'Proof of funds: CHF 21,000/year',
        'Acceptance from a SEVIS-certified Swiss institution',
        'Valid travel insurance for the entire duration of study',
      ]}
      avgCost="₹30–60 L/yr"
      workPermit="6M Seeker"
      processingTime="4–8 Weeks"
    />
  );
}
