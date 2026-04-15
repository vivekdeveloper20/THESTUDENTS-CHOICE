import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in UK | Student's Choice",
  description: 'Discover top UK universities, scholarship opportunities, and post-study work visas with Student\'s Choice.',
};

export default function UKPage() {
  return (
    <CountryPage
      country="UK"
      flag="🇬🇧"
      tagline="The birthplace of modern education — world-renowned degrees, rich history, and a 2-year post-study work visa."
      description="The United Kingdom is home to some of the world's oldest and most prestigious universities. With shorter course durations (3 years for undergrad, 1 year for PG), the UK offers excellent value. The Graduate Route visa allows 2 years of work post-graduation, making it a top choice for career-focused students."
      heroGradient="bg-gradient-to-br from-[#0d0d2b] via-[#1a1a6e] to-[#c62828]"
      accentColor="#0d0d2b"
      stats={[
        { value: '600K+', label: 'International Students' },
        { value: '160+', label: 'Universities' },
        { value: '2 Years', label: 'Post-Study Work' },
        { value: '#2', label: 'Education Destination' },
      ]}
      highlights={[
        { icon: '🎓', title: 'Shorter Degrees', desc: '3-yr UG and 1-yr PG programs save time and money.' },
        { icon: '👑', title: 'Prestigious Legacy', desc: 'Oxford, Cambridge, Imperial — centuries of excellence.' },
        { icon: '🌐', title: 'Graduate Route Visa', desc: '2-year work visa after graduation for all students.' },
        { icon: '🎭', title: 'Rich Culture', desc: 'Vibrant student life, history, arts, and multiculturalism.' },
      ]}
      universities={[
        { name: 'University of Oxford', rank: 'QS World Rank #3' },
        { name: 'University of Cambridge', rank: 'QS World Rank #5' },
        { name: 'Imperial College London', rank: 'QS World Rank #6' },
        { name: 'UCL (University College London)', rank: 'QS World Rank #9' },
        { name: 'University of Edinburgh', rank: 'QS World Rank #27' },
        { name: 'University of Manchester', rank: 'QS World Rank #34' },
      ]}
      requirements={[
        '12th pass (UG) or Bachelor\'s degree with 60%+ (PG)',
        'IELTS 6.0–7.0 depending on university and course',
        'Student Visa (Tier 4) with CAS from university',
        'Financial proof: approx. £1,023/month in UK outside London',
        'Statement of Purpose and academic references',
        'No GRE/GMAT required by most universities',
      ]}
      avgCost="₹20–40 L/yr"
      workPermit="2 Yrs GR"
      processingTime="3–6 Weeks"
    />
  );
}
