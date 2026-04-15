import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in New Zealand | Student's Choice",
  description: 'Explore top NZ universities, post-study work visas, and New Zealand\'s stunning natural landscape.',
};

export default function NewZealandPage() {
  return (
    <CountryPage
      country="New Zealand"
      flag="🇳🇿"
      tagline="Fresh air, world-class education, and one of the most student-friendly visa policies in the Southern Hemisphere."
      description="New Zealand is a peaceful, stunning destination that offers high-quality education from globally ranked universities. With the Post Study Work Visa of up to 3 years and a welcoming immigration system, New Zealand is becoming increasingly popular. Its safe environment, multicultural society, and outdoor lifestyle make it ideal for Indian students."
      heroGradient="bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#1b5e20]"
      accentColor="#1a237e"
      stats={[
        { value: '50K+', label: 'International Students' },
        { value: '8', label: 'Ranked Universities' },
        { value: '3 Years', label: 'Post-Study Visa' },
        { value: '#2', label: 'Global Peace Index' },
      ]}
      highlights={[
        { icon: '🌿', title: 'Pristine Environment', desc: 'World-famous natural landscapes and clean, safe cities.' },
        { icon: '📜', title: '3-Year Work Visa', desc: 'Post Study Work Visa allows 3 years of work rights.' },
        { icon: '🏉', title: 'Sports & Outdoors', desc: 'Adventure sports, hiking, and outdoor culture thrives here.' },
        { icon: '🤗', title: 'Welcoming Culture', desc: 'Māori culture and kiwi friendliness make Indians feel at home.' },
      ]}
      universities={[
        { name: 'University of Auckland', rank: 'QS World Rank #65' },
        { name: 'University of Otago', rank: 'QS World Rank #206' },
        { name: 'Victoria University of Wellington', rank: 'QS World Rank #236' },
        { name: 'University of Canterbury', rank: 'QS World Rank #255' },
        { name: 'Massey University', rank: 'QS World Rank #288' },
        { name: 'AUT (Auckland University of Technology)', rank: 'QS World Rank #451' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'IELTS 6.0–6.5 or PTE 50+ for English proficiency',
        'New Zealand Student Visa (Fee Paying Student)',
        'Confirmation of Enrolment (CoE) from a New Zealand institution',
        'Proof of funds: NZD 15,000/year + return ticket',
        'Medical and X-ray certificates if required by visa office',
      ]}
      avgCost="₹18–30 L/yr"
      workPermit="3 Yrs PSWV"
      processingTime="4–6 Weeks"
    />
  );
}
