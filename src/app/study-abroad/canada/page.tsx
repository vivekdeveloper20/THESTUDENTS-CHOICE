import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in Canada | Student's Choice",
  description: 'Explore Canadian universities, PR pathways, and post-graduation work permits with Student\'s Choice.',
};

export default function CanadaPage() {
  return (
    <CountryPage
      country="Canada"
      flag="🇨🇦"
      tagline="World-class education, a clear path to permanent residency, and one of the most welcoming countries for immigrants."
      description="Canada combines affordable tuition with exceptional quality of life and a direct pathway to permanent residency. With the Post-Graduation Work Permit (PGWP) of up to 3 years and Express Entry immigration, Canada is the top destination for students who want to build a future abroad."
      heroGradient="bg-gradient-to-br from-[#b71c1c] via-[#c62828] to-[#d32f2f]"
      accentColor="#b71c1c"
      stats={[
        { value: '800K+', label: 'International Students' },
        { value: '100+', label: 'Universities' },
        { value: '3 Years', label: 'PGWP Work Permit' },
        { value: 'PR Pathway', label: 'Express Entry' },
      ]}
      highlights={[
        { icon: '🍁', title: 'PR Pathway', desc: 'Express Entry and PNP give a clear route to permanent residency.' },
        { icon: '💰', title: 'Affordable Tuition', desc: 'Lower tuition than USA/UK with comparable quality.' },
        { icon: '🔐', title: '3-Year PGWP', desc: 'Work in Canada for up to 3 years after graduation.' },
        { icon: '🏔️', title: 'Quality of Life', desc: 'Ranked among the world\'s safest and happiest countries.' },
      ]}
      universities={[
        { name: 'University of Toronto', rank: 'QS World Rank #25' },
        { name: 'McGill University', rank: 'QS World Rank #32' },
        { name: 'University of British Columbia', rank: 'QS World Rank #38' },
        { name: 'University of Alberta', rank: 'QS World Rank #111' },
        { name: 'University of Waterloo', rank: 'QS World Rank #149' },
        { name: 'Western University', rank: 'QS World Rank #203' },
      ]}
      requirements={[
        '12th pass (UG) or Bachelor\'s degree with 60%+ (PG)',
        'IELTS 6.0–6.5 or TOEFL 80+ for English proficiency',
        'Canada Student Visa (Study Permit)',
        'Letter of Acceptance from Designated Learning Institution (DLI)',
        'Proof of financial support: CAD 10,000+ per year',
        'Medical exam and biometrics may be required',
      ]}
      avgCost="₹15–30 L/yr"
      workPermit="3 Yrs PGWP"
      processingTime="8–12 Weeks"
    />
  );
}
