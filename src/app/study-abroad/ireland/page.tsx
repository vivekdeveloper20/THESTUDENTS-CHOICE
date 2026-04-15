import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in Ireland | Student's Choice",
  description: 'Explore world-class Irish universities, post-study work permits, and the tech industry hub of Europe.',
};

export default function IrelandPage() {
  return (
    <CountryPage
      country="Ireland"
      flag="🇮🇪"
      tagline="Europe's Silicon Valley — Ireland is home to Google, Meta, and Apple European HQs, offering tech careers of the future."
      description="Ireland is rapidly becoming one of the top study destinations in Europe, housing the European headquarters of Google, Meta, Apple, and LinkedIn. With a 2-year post-study work permit and English as the primary language, Ireland offers Indian students a seamless transition to European professional life."
      heroGradient="bg-gradient-to-br from-[#1b5e20] via-[#388e3c] to-[#ff8f00]"
      accentColor="#1b5e20"
      stats={[
        { value: '35K+', label: 'International Students' },
        { value: '2 Years', label: 'Stay Back Permit' },
        { value: '#1', label: 'Tech Hub Europe' },
        { value: 'English', label: 'Medium of Study' },
      ]}
      highlights={[
        { icon: '💻', title: 'Tech Capital of EU', desc: 'Google, Meta, Apple & LinkedIn all have European HQs here.' },
        { icon: '🗣️', title: 'English-Speaking', desc: 'No language barrier — all programs taught in English.' },
        { icon: '📋', title: '2-Year Stay Back', desc: 'Third Level Graduate Scheme allows 2 years of post-study work.' },
        { icon: '🍀', title: 'Safe & Welcoming', desc: 'Consistently ranked among the world\'s safest countries.' },
      ]}
      universities={[
        { name: 'Trinity College Dublin', rank: 'QS World Rank #81' },
        { name: 'University College Dublin', rank: 'QS World Rank #181' },
        { name: 'University College Cork', rank: 'QS World Rank #303' },
        { name: 'NUI Galway', rank: 'QS World Rank #272' },
        { name: 'Dublin City University (DCU)', rank: 'Times Rank #401' },
        { name: 'Maynooth University', rank: 'Times Rank #601' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'IELTS 6.0–6.5 or equivalent English proficiency',
        'Irish Study Visa (if non-EU)',
        'Acceptance letter from a recognized Irish institution',
        'Proof of funds: €7,000–€10,000 for the first year',
        'Private medical insurance during stay',
      ]}
      avgCost="₹15–25 L/yr"
      workPermit="2 Yrs TLGS"
      processingTime="4–8 Weeks"
    />
  );
}
