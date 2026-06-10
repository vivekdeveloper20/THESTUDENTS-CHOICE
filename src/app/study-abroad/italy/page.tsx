import type { Metadata } from 'next';
import { StudyItalyPage } from '@/components/study-abroad/StudyItalyPage';

export const metadata: Metadata = {
  title: "Study in Italy | Student's Choice",
  description: 'Discover world-class Italian universities, rich history, art, and affordable study options.',
};

export default function ItalyPage() {
  return (
    <StudyItalyPage
      country="Italy"
      tagline="Your Smart Path to Study in Italy"
      heroImage="/assets/images/studyabroadcountry/ITALY.png"
      introParagraphs={[
        "Italy has become an increasingly popular destination for international students seeking high-quality education, affordable tuition fees, and globally recognised degrees. Known for its excellence in design, fashion, architecture, business, engineering, and research, Italy offers students the perfect blend of academic learning and cultural exposure.",
        "With historic universities, modern research facilities, and access to Europe's growing job market, Italy provides international students with strong academic and career opportunities. As a Schengen country and a major European economy, Italy attracts students who want practical learning, international exposure, and affordable education within Europe."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "90+" },
        { key: "International Student Community", value: "100,000+" },
        { key: "Main Intakes", value: "Sep / Feb*" },
        { key: "Average Tuition Fees", value: "€1,500 – €15,000+ per year" },
        { key: "Typical IELTS Requirement", value: "5.5 – 6.5*" },
        { key: "Part-Time Work Opportunity", value: "Up to 20 hrs/week*" },
        { key: "Post-Study Work Opportunities", value: "Available for eligible graduates*" },
        { key: "Popular Student Cities", value: "Milan, Rome, Bologna, Turin, Florence" }
      ]}
      stats={[
        { value: '100K+', label: 'International Students' },
        { value: '12 Months', label: 'Job Seeker Visa' },
        { value: '90+', label: 'Universities' },
        { value: 'Affordable', label: 'Tuition Fees' },
      ]}
      highlights={[
        { icon: '🏛️', title: 'Ancient Universities', desc: 'Bologna University founded in 1088 — the world\'s oldest.' },
        { icon: '🎨', title: 'Art & Design', desc: 'Global leaders in fashion, design, and architecture.' },
        { icon: '🍝', title: 'Low Cost Living', desc: 'Affordable lifestyle compared to other Western European countries.' },
        { icon: '🎓', title: 'DSU Scholarships', desc: 'Income-based scholarships covering tuition & accommodation.' },
      ]}
      universities={[
        { name: 'Politecnico di Milano', rank: 'QS World Rank #139' },
        { name: 'University of Bologna', rank: 'QS World Rank #154' },
        { name: 'Sapienza University of Rome', rank: 'QS World Rank #171' },
        { name: 'University of Milan', rank: 'QS World Rank #301' },
        { name: 'Politecnico di Torino', rank: 'QS World Rank #314' },
        { name: 'Bocconi University', rank: 'FT Business School Rank #7' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'Italian (B2) OR English (IELTS 5.5–6.5) depending on program',
        'Declaration of Value (DoV) for Indian qualifications',
        'Italy Study Visa (Type D) from Italian Consulate',
        'Proof of funds: €448/month (€5,380/year)',
        'Health insurance coverage for duration of stay',
      ]}
      avgCost="€1.5–15K/yr"
      workPermit="12M Seeker"
      processingTime="2–3 Months"
    />
  );
}
