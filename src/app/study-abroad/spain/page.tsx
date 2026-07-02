import type { Metadata } from 'next';
import { StudySpainPage } from '@/components/study-abroad/StudySpainPage';

export const metadata: Metadata = {
  title: "Study in Spain | Student's Choice",
  description: 'Explore top Spanish universities, affordable education, vibrant student life, and exciting career opportunities in one of Europe\'s most culturally rich study destinations.',
};

export default function SpainPage() {
  return (
    <StudySpainPage
      country="Spain"
      tagline="Your Smart Path to Study in Spain"
      heroImage="/assets/images/Spain%20Banner.svg"
      introParagraphs={[
        "Spain has become an increasingly popular destination for international students seeking quality education, affordable living, and a globally connected lifestyle. Known for its modern universities, welcoming culture, strong tourism and business industries, and relaxed Mediterranean lifestyle, Spain offers students a unique balance of academics and life experience.",
        "As one of Europe's leading education destinations, Spain attracts students from around the world who want internationally recognised degrees, multicultural exposure, and access to opportunities across Europe."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "80+" },
        { key: "International Student Community", value: "200,000+" },
        { key: "Main Intakes", value: "Sep / Feb*" },
        { key: "Average Tuition Fees", value: "€3,000 – €20,000+ per year" },
        { key: "Typical IELTS Requirement", value: "6.0 – 6.5*" },
        { key: "Part-Time Work Opportunity", value: "Up to 30 hrs/week*" },
        { key: "Post-Study Work Opportunities", value: "Available for eligible graduates*" },
        { key: "Popular Student Cities", value: "Barcelona, Madrid, Valencia, Seville" }
      ]}
      stats={[
        { value: '200K+', label: 'International Students' },
        { value: '80+', label: 'Universities' },
        { value: 'Sep/Feb', label: 'Main Intakes' },
        { value: 'Europe', label: 'Gateway Destination' },
      ]}
      highlights={[
        { icon: '🏛️', title: 'World-Class Business Schools', desc: 'IE Business School & ESADE rank among the world\'s top business schools.' },
        { icon: '💶', title: 'Affordable Education', desc: 'Tuition fees significantly lower than UK, Germany, or France.' },
        { icon: '☀️', title: 'Vibrant Student Life', desc: 'Barcelona, Madrid, Valencia — among Europe\'s most exciting cities.' },
        { icon: '🌍', title: 'Gateway to Europe', desc: 'Access to European opportunities, travel, and multicultural exposure.' },
      ]}
      universities={[
        { name: 'IE Business School', rank: 'FT MBA Rank #1 Spain' },
        { name: 'University of Barcelona', rank: 'QS World Rank #181' },
        { name: 'Autonomous University of Madrid', rank: 'QS World Rank #206' },
        { name: 'Complutense University of Madrid', rank: 'QS World Rank #209' },
        { name: 'ESADE Business School', rank: 'FT MBA Rank #2 Spain' },
        { name: 'Universitat Pompeu Fabra', rank: 'QS World Rank #301' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'IELTS 6.0–6.5 or equivalent English proficiency (for English programs)',
        'Spain Long-Term Student Visa from Spanish Consulate',
        'Apostilled educational documents',
        'Proof of funds: €600/month',
        'Medical certificate and criminal record (apostilled)',
      ]}
      avgCost="€3–20K/yr"
      workPermit="30 Hrs/Week"
      processingTime="2–3 Months"
    />
  );
}
