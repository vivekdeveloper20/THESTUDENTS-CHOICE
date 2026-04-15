import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in Italy | Student's Choice",
  description: 'Discover world-class Italian universities, rich history, art, and affordable study options.',
};

export default function ItalyPage() {
  return (
    <CountryPage
      country="Italy"
      flag="🇮🇹"
      tagline="Ancient heritage meets modern excellence — Italy offers top universities, world-renowned design schools, and rich culture."
      description="Italy is one of the oldest cradles of Western civilization and is home to some of Europe's most respected universities. With affordable tuition, merit-based scholarships including the prestigious DSU scholarship, and programs in English increasing rapidly, Italy is an excellent choice for international students."
      heroGradient="bg-gradient-to-br from-[#1b5e20] via-[#1a1a1a] to-[#c62828]"
      accentColor="#1b5e20"
      stats={[
        { value: '100K+', label: 'International Students' },
        { value: '€0–3,000', label: 'Annual Tuition' },
        { value: '12 Months', label: 'Job Seeker Visa' },
        { value: 'UNESCO', label: 'Heritage Sites #1' },
      ]}
      highlights={[
        { icon: '🏛️', title: 'Ancient Universities', desc: 'Bologna University founded in 1088 — the world\'s oldest.' },
        { icon: '🎨', title: 'Art & Design', desc: 'Polimoda, Naba — global leaders in fashion and design.' },
        { icon: '🍝', title: 'Low Cost Living', desc: 'Affordable lifestyle compared to other Western European countries.' },
        { icon: '🎓', title: 'DSU Scholarships', desc: 'Income-based scholarships covering tuition & accommodation.' },
      ]}
      universities={[
        { name: 'Politecnico di Milano', rank: 'QS World Rank #139' },
        { name: 'University of Bologna', rank: 'QS World Rank #154' },
        { name: 'Sapienza University of Rome', rank: 'QS World Rank #171' },
        { name: 'University of Milan', rank: 'QS World Rank #301' },
        { name: 'Politecnico di Torino', rank: 'QS World Rank #314' },
        { name: 'University of Padua', rank: 'QS World Rank #309' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'Italian (B2) OR English (IELTS 6.0+) depending on program',
        'Declaration of Value (DoV) for Indian qualifications',
        'Italy Study Visa (Type D) from Italian Consulate',
        'Proof of funds: €448/month (€5,380/year)',
        'Health insurance coverage for duration of stay',
      ]}
      avgCost="₹8–18 L/yr"
      workPermit="12M Seeker"
      processingTime="2–3 Months"
    />
  );
}
