import type { Metadata } from 'next';
import { StudyUKPage } from '@/components/study-abroad/StudyUKPage';

export const metadata: Metadata = {
  title: "Study in UK | Student's Choice",
  description: 'Discover top UK universities, scholarship opportunities, and post-study work visas with Student\'s Choice.',
};

export default function UKPage() {
  return (
    <StudyUKPage
      country="UK"
      tagline="Your Smart Path to Study in the UK"
      heroImage="/assets/images/studyabroadcountry/UK Banner.png"
      introParagraphs={[
        "The UK continues to be one of the world's most preferred destinations for students who want globally respected education, faster degree completion, and strong career opportunities. It offers a powerful combination of academic excellence, innovation, multicultural exposure, and real-world learning.",
        "Studying in the UK is more than earning a degree — it is an investment in your future. With internationally recognised universities, industry-focused programs, and post-study opportunities, students gain the skills, confidence, and global exposure needed to succeed in a competitive world."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "200+" },
        { key: "Globally Ranked Universities", value: "90+" },
        { key: "International Student Community", value: "600,000+" },
        { key: "Main Intakes", value: "Jan / Sep / May*" },
        { key: "Average Tuition Fees", value: "£9,000 – £38,000+ per year" },
        { key: "Typical IELTS Range", value: "6.0 – 7.0*" },
        { key: "Part-Time Work Opportunity", value: "Up to 20 hours/week*" },
        { key: "Post-Study Work Route", value: "Up to 2 years*" }
      ]}
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
