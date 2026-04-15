import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in Spain | Student's Choice",
  description: 'Explore top Spanish universities, affordable tuition, vibrant culture, and career opportunities in Spain.',
};

export default function SpainPage() {
  return (
    <CountryPage
      country="Spain"
      flag="🇪🇸"
      tagline="Vibrant culture, sun-soaked cities, and world-class business schools make Spain an unforgettable study destination."
      description="Spain is an increasingly popular destination for international students, offering a mix of high-quality education, rich culture, and affordable living. Home to some of Europe's top business schools like IE and IESE, Spain is especially popular for MBA programs. With friendly immigration policies and a dynamic job market, it is a great long-term option."
      heroGradient="bg-gradient-to-br from-[#b71c1c] via-[#c62828] to-[#f9a825]"
      accentColor="#b71c1c"
      stats={[
        { value: '150K+', label: 'International Students' },
        { value: '€680–1,800', label: 'Annual Public Fees' },
        { value: '1 Year', label: 'Job Seeker Permit' },
        { value: '#2', label: 'Best in Europe Life' },
      ]}
      highlights={[
        { icon: '☀️', title: 'Sunny Lifestyle', desc: 'Barcelona, Madrid — among Europe\'s most vibrant cities.' },
        { icon: '💼', title: 'Top Business Schools', desc: 'IE Business School and IESE rank among global top 10 MBAs.' },
        { icon: '🗣️', title: 'Learn Spanish', desc: 'Spanish is the 2nd most spoken language in the world.' },
        { icon: '💰', title: 'Affordable Living', desc: 'Cost of living 30–40% lower than UK, Germany, or France.' },
      ]}
      universities={[
        { name: 'IE Business School', rank: 'FT MBA Rank #1 Spain' },
        { name: 'IESE Business School', rank: 'FT MBA Rank #2 Spain' },
        { name: 'Universitat Autònoma de Barcelona', rank: 'QS World Rank #165' },
        { name: 'University Complutense of Madrid', rank: 'QS World Rank #209' },
        { name: 'University of Barcelona', rank: 'QS World Rank #181' },
        { name: 'University of Valencia', rank: 'QS World Rank #401' },
      ]}
      requirements={[
        '12th pass (UG) or Bachelor\'s degree (PG)',
        'Spanish (B2) OR English proficiency IELTS 6.0+ for English programs',
        'Spain Long-Term Student Visa from Spanish Consulate',
        'Apostilled educational documents',
        'Proof of funds: €600/month',
        'Medical certificate and criminal record (apostilled)',
      ]}
      avgCost="₹8–20 L/yr"
      workPermit="1 Yr Seeker"
      processingTime="2–3 Months"
    />
  );
}
