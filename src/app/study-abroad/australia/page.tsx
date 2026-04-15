import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in Australia | Student's Choice",
  description: 'Discover Australian universities, student visa requirements, and post-study work rights with Student\'s Choice.',
};

export default function AustraliaPage() {
  return (
    <CountryPage
      country="Australia"
      flag="🇦🇺"
      tagline="Sun, quality education, and 4 years of post-study work rights — Australia is the complete package for global students."
      description="Australia is one of the most popular study destinations, offering world-class education, a relaxed lifestyle, and excellent career prospects. With the Temporary Graduate Visa (subclass 485), students can work for up to 4 years after graduation depending on their qualification level."
      heroGradient="bg-gradient-to-br from-[#1a237e] via-[#0d47a1] to-[#ff6f00]"
      accentColor="#0d47a1"
      stats={[
        { value: '700K+', label: 'International Students' },
        { value: '40+', label: 'Top Universities' },
        { value: '4 Years', label: 'Post-Study Visa' },
        { value: 'Group of 8', label: 'Elite Universities' },
      ]}
      highlights={[
        { icon: '🌊', title: '4-Year Work Visa', desc: 'Temporary Graduate Visa allows extended post-study work.' },
        { icon: '🦘', title: 'Group of 8', desc: 'Australia\'s 8 leading research universities rival global best.' },
        { icon: '☀️', title: 'Lifestyle & Safety', desc: 'Ranked among the world\'s most liveable cities consistently.' },
        { icon: '💵', title: 'Part-Time Work', desc: 'Students can work 48 hours per fortnight while studying.' },
      ]}
      universities={[
        { name: 'Australian National University', rank: 'QS World Rank #30' },
        { name: 'University of Melbourne', rank: 'QS World Rank #33' },
        { name: 'University of Sydney', rank: 'QS World Rank #40' },
        { name: 'University of Queensland', rank: 'QS World Rank #43' },
        { name: 'Monash University', rank: 'QS World Rank #42' },
        { name: 'University of New South Wales', rank: 'QS World Rank #19' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree with 60%+ (PG)',
        'IELTS 6.0–6.5 or PTE 50+ for English proficiency',
        'Australian Student Visa (subclass 500)',
        'Overseas Student Health Cover (OSHC) mandatory',
        'Genuine Temporary Entrant (GTE) statement',
        'Proof of funds: AUD 21,041+ per year',
      ]}
      avgCost="₹20–40 L/yr"
      workPermit="4 Yrs TGV"
      processingTime="4–6 Weeks"
    />
  );
}
