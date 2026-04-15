import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in Germany | Student's Choice",
  description: 'Explore tuition-free universities in Germany, visa requirements, and career opportunities.',
};

export default function GermanyPage() {
  return (
    <CountryPage
      country="Germany"
      flag="🇩🇪"
      tagline="Europe's engineering powerhouse — tuition-free public universities, world-class research, and thriving job opportunities."
      description="Germany is famous for offering tuition-free education at public universities, even for international students. As Europe's largest economy, Germany provides exceptional career prospects especially in engineering, technology, and sciences. The 18-month job seeker visa post-graduation makes it ideal for career-focused students."
      heroGradient="bg-gradient-to-br from-[#1a1a1a] via-[#c62828] to-[#f9a825]"
      accentColor="#1a1a1a"
      stats={[
        { value: '400K+', label: 'International Students' },
        { value: '€0', label: 'Tuition at Public Uni' },
        { value: '18 Months', label: 'Job Seeker Visa' },
        { value: '#3', label: 'Innovation Economy' },
      ]}
      highlights={[
        { icon: '🆓', title: 'Tuition-Free Education', desc: 'Public universities charge no tuition fees for international students.' },
        { icon: '⚙️', title: 'Engineering Hub', desc: 'TU Munich, RWTH Aachen — among the world\'s best STEM schools.' },
        { icon: '🏭', title: 'Industry Links', desc: 'Direct connections to BMW, Bosch, Siemens and more.' },
        { icon: '🛂', title: '18-Month Job Seeker', desc: 'Stay after graduation to find a job in the EU\'s largest economy.' },
      ]}
      universities={[
        { name: 'Technical University of Munich', rank: 'QS World Rank #37' },
        { name: 'Ludwig Maximilian University Munich', rank: 'QS World Rank #54' },
        { name: 'Heidelberg University', rank: 'QS World Rank #87' },
        { name: 'RWTH Aachen University', rank: 'QS World Rank #106' },
        { name: 'Freie Universität Berlin', rank: 'QS World Rank #120' },
        { name: 'University of Stuttgart', rank: 'QS World Rank #201' },
      ]}
      requirements={[
        '12th pass with 60%+ or Bachelor\'s equivalent for PG',
        'German language (B2/C1) OR English proficiency (IELTS 6.5+) for English programs',
        'APS Certificate for Indian students (mandatory)',
        'German Student Visa (blocked account of €11,208/year)',
        'University admission letter from a recognized German university',
        'Health insurance coverage during studies',
      ]}
      avgCost="₹5–12 L/yr"
      workPermit="18M Seeker"
      processingTime="3–5 Months"
    />
  );
}
