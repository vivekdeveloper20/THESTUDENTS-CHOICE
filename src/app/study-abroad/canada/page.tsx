import type { Metadata } from 'next';
import { StudyCanadaPage } from '@/components/study-abroad/StudyCanadaPage';

export const metadata: Metadata = {
  title: "Study in Canada | Student's Choice",
  description: 'Explore Canadian universities, PR pathways, and post-graduation work permits with Student\'s Choice.',
};

export default function CanadaPage() {
  return (
    <StudyCanadaPage
      country="Canada"
      tagline="Your Smart Path to Study in Canada"
      heroImage="/assets/images/studyabroadcountry/CANADA.png"
      introParagraphs={[
        "Canada has become one of the most preferred destinations for international students seeking globally recognised education, excellent quality of life, and strong long-term career opportunities. Known for its welcoming environment, multicultural society, and industry-focused education system, Canada offers students the perfect balance of academic excellence and future growth.",
        "With globally ranked universities, practical learning, and post-study work opportunities, Canada continues to attract students who want internationally valued qualifications and real-world career outcomes."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "200+" },
        { key: "International Student Community", value: "800,000+" },
        { key: "Main Intakes", value: "Sep / Jan / May*" },
        { key: "Average Tuition Fees", value: "CAD 15,000 – CAD 40,000+ per year" },
        { key: "Typical IELTS Requirement", value: "6.0 – 7.0*" },
        { key: "Part-Time Work Opportunity", value: "Up to 24 hrs/week for eligible students*" },
        { key: "Post-Study Work Opportunities", value: "Up to 3 years*" },
        { key: "Popular Student Cities", value: "Toronto, Vancouver, Montreal, Calgary" }
      ]}
      stats={[
        { value: '800K+', label: 'International Students' },
        { value: '3 Years', label: 'PGWP Work Permit' },
        { value: 'PR Path', label: 'Express Entry' },
        { value: '#1', label: 'Quality of Life' },
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
        { name: 'McMaster University', rank: 'QS World Rank #189' },
      ]}
      requirements={[
        '12th pass (UG) or Bachelor\'s degree with 60%+ (PG)',
        'IELTS 6.0–7.0 or TOEFL 80+ for English proficiency',
        'Canada Student Visa (Study Permit)',
        'Letter of Acceptance from Designated Learning Institution (DLI)',
        'Proof of financial support: CAD 10,000+ per year',
        'Medical exam and biometrics may be required',
      ]}
      avgCost="CAD 15–40K/yr"
      workPermit="3 Yrs PGWP"
      processingTime="8–12 Weeks"
    />
  );
}
