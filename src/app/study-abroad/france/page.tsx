import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in France | Student's Choice",
  description: 'Discover French grandes écoles, affordable tuition, and the cultural richness of studying in France.',
};

export default function FrancePage() {
  return (
    <CountryPage
      country="France"
      flag="🇫🇷"
      tagline="Art, culture, fashion, and world-class education — study in France for a truly transformative experience."
      description="France is home to some of Europe's most prestigious institutions including the grandes écoles and Sorbonne. With affordable tuition at public universities and one of the most vibrant student cultures in the world, France offers an unmatched combination of academics and lifestyle. Paris remains a global hub for humanities, arts, and business."
      heroGradient="bg-gradient-to-br from-[#0d2980] via-[#1565c0] to-[#c62828]"
      accentColor="#0d2980"
      stats={[
        { value: '400K+', label: 'International Students' },
        { value: '€170–380', label: 'Annual Fees' },
        { value: '2 Years', label: 'Post-Study Work' },
        { value: '#7', label: 'Education Power' },
      ]}
      highlights={[
        { icon: '🗼', title: 'Cultural Capital', desc: 'Paris: the global hub for fashion, art, and business.' },
        { icon: '🍷', title: 'Affordable Tuition', desc: 'Public universities charge as little as €170/year.' },
        { icon: '🎨', title: 'Arts & Humanities', desc: 'World-leading programs in arts, literature, and social sciences.' },
        { icon: '🤝', title: 'EU Work Rights', desc: 'Post-study work authorization for up to 2 years.' },
      ]}
      universities={[
        { name: 'PSL University (Paris)', rank: 'QS World Rank #26' },
        { name: 'École Polytechnique', rank: 'QS World Rank #42' },
        { name: 'Sorbonne University', rank: 'QS World Rank #59' },
        { name: 'Sciences Po Paris', rank: 'QS World Rank #217' },
        { name: 'INSEAD Business School', rank: 'FT Global MBA #1' },
        { name: 'CentraleSupélec', rank: 'QS World Rank #214' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'French language (B1/B2) OR English (IELTS 6.0+) for English programs',
        'Campus France registration for Indian students (mandatory)',
        'Long Stay Student Visa from French Consulate',
        'Proof of funds: €615/month',
        'Health insurance (CPAM for students)',
      ]}
      avgCost="₹8–20 L/yr"
      workPermit="2 Yrs APS"
      processingTime="2–4 Months"
    />
  );
}
