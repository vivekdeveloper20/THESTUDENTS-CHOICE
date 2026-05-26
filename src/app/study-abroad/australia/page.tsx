import type { Metadata } from 'next';
import { StudyAustraliaPage } from '@/components/study-abroad/StudyAustraliaPage';

export const metadata: Metadata = {
  title: "Study in Australia | Student's Choice",
  description: 'Discover Australian universities, student visa requirements, and post-study work rights with Student\'s Choice.',
};

export default function AustraliaPage() {
  return (
    <StudyAustraliaPage
      country="Australia"
      tagline="Your Smart Path to Study in Australia"
      heroImage="/assets/images/studyabroadcountry/AURTILA.png"
      introParagraphs={[
        "Australia has become one of the most preferred destinations for international students seeking globally recognised education, strong employability outcomes, and an outstanding quality of life. Known for innovation-driven universities, multicultural cities, and career-focused programs, Australia offers students the perfect balance of academic excellence and global exposure.",
        "With world-class institutions, practical learning approaches, and strong post-study opportunities, Australia continues to attract students who want international education with long-term career value."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "40+" },
        { key: "International Student Community", value: "700,000+" },
        { key: "Main Intakes", value: "Feb / July / Nov*" },
        { key: "Average Tuition Fees", value: "AUD 20,000 – AUD 45,000+ per year" },
        { key: "Typical IELTS Requirement", value: "6.0 – 7.0*" },
        { key: "Part-Time Work Opportunity", value: "Up to 48 hours per fortnight*" },
        { key: "Post-Study Work Opportunities", value: "Up to 2–6 years*" },
        { key: "Popular Student Cities", value: "Sydney, Melbourne, Brisbane, Perth" }
      ]}
      stats={[
        { value: '700K+', label: 'International Students' },
        { value: '2-6 Years', label: 'Post-Study Work' },
        { value: 'Group of 8', label: 'Elite Universities' },
        { value: '#1', label: 'Quality of Life' },
      ]}
      highlights={[
        { icon: '🌊', title: '2-6 Year Work Visa', desc: 'Temporary Graduate Visa allows extended post-study work.' },
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
        'IELTS 6.0–7.0 or PTE 50+ for English proficiency',
        'Australian Student Visa (subclass 500)',
        'Overseas Student Health Cover (OSHC) mandatory',
        'Genuine Temporary Entrant (GTE) statement',
        'Proof of funds: AUD 21,041+ per year',
      ]}
      avgCost="AUD 20–45K/yr"
      workPermit="2-6 Yrs TGV"
      processingTime="4–6 Weeks"
    />
  );
}
