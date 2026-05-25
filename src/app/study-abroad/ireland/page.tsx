import type { Metadata } from 'next';
import { StudyIrelandPage } from '@/components/study-abroad/StudyIrelandPage';

export const metadata: Metadata = {
  title: "Study in Ireland | Student's Choice",
  description: 'Explore world-class Irish universities, post-study work permits, and the tech industry hub of Europe.',
};

export default function IrelandPage() {
  return (
    <StudyIrelandPage
      country="Ireland"
      tagline="Your Smart Path to Study in Ireland"
      heroImage="/assets/images/studyabroadcountry/IRELAND.png"
      introParagraphs={[
        "Ireland has become one of the top destinations for international students seeking globally recognised education, industry-focused programs, and excellent post-study opportunities. Known for its innovation-driven economy and welcoming environment, Ireland offers students the perfect balance of academic quality and career growth.",
        "As an English-speaking country and home to many global companies, Ireland attracts students from around the world who want practical learning, international exposure, and strong employability outcomes after graduation."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "30+" },
        { key: "International Student Community", value: "35,000+" },
        { key: "Main Intakes", value: "Sep / Jan*" },
        { key: "Average Tuition Fees", value: "€10,000 – €35,000+ per year" },
        { key: "Typical IELTS Requirement", value: "6.0 – 6.5*" },
        { key: "Part-Time Work Opportunity", value: "Up to 20 hrs/week during term*" },
        { key: "Post-Study Work Opportunities", value: "Up to 2 years*" },
        { key: "Popular Student Cities", value: "Dublin, Cork, Galway, Limerick" }
      ]}
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
      avgCost="€10–25K/yr"
      workPermit="2 Yrs TLGS"
      processingTime="4–8 Weeks"
    />
  );
}
