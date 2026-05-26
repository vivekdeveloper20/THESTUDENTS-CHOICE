import type { Metadata } from 'next';
import { StudyNewZealandPage } from '@/components/study-abroad/StudyNewZealandPage';

export const metadata: Metadata = {
  title: "Study in New Zealand | Student's Choice",
  description: "Explore globally respected universities, practical learning, safe student-friendly cities, and strong post-study career opportunities in New Zealand.",
};

export default function NewZealandPage() {
  return (
    <StudyNewZealandPage
      country="New Zealand"
      tagline="Your Smart Path to Study in New Zealand"
      heroImage="/assets/images/studyabroadcountry/NEW ZELAND.png"
      introParagraphs={[
        "New Zealand has become one of the most attractive destinations for international students seeking globally recognised education, practical learning, and a balanced lifestyle. Known for its safe cities, welcoming culture, research-focused universities, and strong post-study opportunities, New Zealand offers students a modern education experience with excellent quality of life.",
        "With internationally respected qualifications and industry-focused programs, New Zealand helps students build strong academic and professional foundations for the future."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "8 Universities + Institutes" },
        { key: "International Student Community", value: "100,000+" },
        { key: "Main Intakes", value: "Feb / Jul / Nov*" },
        { key: "Average Tuition Fees", value: "NZD 22,000 – NZD 45,000+ per year" },
        { key: "Typical IELTS Requirement", value: "6.0 – 6.5*" },
        { key: "Part-Time Work Opportunity", value: "Up to 20 hrs/week during term*" },
        { key: "Post-Study Work Opportunities", value: "Up to 3 years*" },
        { key: "Popular Student Cities", value: "Auckland, Wellington, Christchurch, Hamilton" }
      ]}
      stats={[
        { value: '100K+', label: 'International Students' },
        { value: '3 Years', label: 'Post-Study Visa' },
        { value: '#2', label: 'Global Peace Index' },
        { value: 'English', label: 'Medium of Study' },
      ]}
      highlights={[
        { icon: '🌿', title: 'Pristine Environment', desc: 'World-famous natural landscapes and clean, safe student-friendly cities.' },
        { icon: '📜', title: '3-Year Work Visa', desc: 'Post Study Work Visa allows up to 3 years of work rights after graduation.' },
        { icon: '🔬', title: 'Research-Driven', desc: 'Universities focused on innovation, technology, and applied research.' },
        { icon: '🤗', title: 'Welcoming Culture', desc: 'Multicultural society with a warm, inclusive environment for international students.' },
      ]}
      universities={[
        { name: 'University of Auckland', rank: 'QS World Rank #65' },
        { name: 'University of Otago', rank: 'QS World Rank #206' },
        { name: 'Victoria University of Wellington', rank: 'QS World Rank #236' },
        { name: 'University of Canterbury', rank: 'QS World Rank #255' },
        { name: 'Massey University', rank: 'QS World Rank #288' },
        { name: 'Auckland University of Technology', rank: 'QS World Rank #451' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'IELTS 6.0–6.5 or PTE 50+ for English proficiency',
        'New Zealand Student Visa (Fee Paying Student)',
        'Confirmation of Enrolment (CoE) from a New Zealand institution',
        'Proof of funds: NZD 15,000/year + return ticket',
        'Medical and X-ray certificates if required by visa office',
      ]}
      avgCost="NZD 22–45K/yr"
      workPermit="3 Yrs PSWV"
      processingTime="4–6 Weeks"
    />
  );
}
