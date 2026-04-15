import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in USA | Student's Choice",
  description: 'Explore top universities in the USA, requirements, costs, and how Student\'s Choice can help you study in America.',
};

export default function USAPage() {
  return (
    <CountryPage
      country="USA"
      flag="🇺🇸"
      tagline="Home to the world's best universities, cutting-edge research, and endless opportunities for international students."
      description="The United States offers an unparalleled education experience with over 4,000 accredited colleges and universities. From Ivy League institutions to research powerhouses, the USA is the top choice for ambitious students globally. With optional practical training (OPT) and diverse campus cultures, it is the land of opportunity."
      heroGradient="bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#b71c1c]"
      accentColor="#1a237e"
      stats={[
        { value: '1M+', label: 'International Students' },
        { value: '4,000+', label: 'Universities' },
        { value: '3 Years', label: 'OPT Work Permit' },
        { value: '#1', label: 'Global Rank' },
      ]}
      highlights={[
        { icon: '🏛️', title: 'World\'s Best Universities', desc: 'MIT, Harvard, Stanford and 50+ globally ranked institutions.' },
        { icon: '🔬', title: 'Research & Innovation', desc: 'Cutting-edge labs and research grants across all disciplines.' },
        { icon: '💼', title: 'OPT Work Permit', desc: 'Up to 3 years of post-study work for STEM graduates.' },
        { icon: '🌍', title: 'Diverse Campus Life', desc: 'Vibrant multicultural environment with students from 190+ countries.' },
      ]}
      universities={[
        { name: 'Massachusetts Institute of Technology', rank: 'QS World Rank #1' },
        { name: 'Harvard University', rank: 'QS World Rank #4' },
        { name: 'Stanford University', rank: 'QS World Rank #5' },
        { name: 'University of California, Berkeley', rank: 'QS World Rank #10' },
        { name: 'Columbia University', rank: 'QS World Rank #22' },
        { name: 'New York University', rank: 'QS World Rank #38' },
      ]}
      requirements={[
        'Bachelor\'s degree or 12th grade pass with minimum 60% marks',
        'IELTS 6.5+ or TOEFL 80+ for English proficiency',
        'GRE / GMAT scores (program dependent)',
        'F-1 Student Visa with financial proof',
        'Statement of Purpose (SOP) and Letters of Recommendation',
        'Sufficient funds: approx. ₹25–50 Lakh per year',
      ]}
      avgCost="₹30–50 L/yr"
      workPermit="3 Yrs OPT"
      processingTime="2–4 Months"
    />
  );
}
