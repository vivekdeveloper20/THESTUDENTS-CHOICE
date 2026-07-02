import type { Metadata } from 'next';
import { StudySwitzerlandPage } from '@/components/study-abroad/StudySwitzerlandPage';

export const metadata: Metadata = {
  title: "Study in Switzerland | Student's Choice",
  description: "Explore ETH Zurich, world-class hospitality schools, research excellence, and global career opportunities in Switzerland.",
};

export default function SwitzerlandPage() {
  return (
    <StudySwitzerlandPage
      country="Switzerland"
      tagline="Your Smart Path to Study in Switzerland"
      heroImage="/assets/images/Switzerland%20Banner.svg"
      introParagraphs={[
        "Switzerland has become one of Europe's most prestigious destinations for international students seeking high-quality education, research excellence, and global career opportunities. Known for innovation, hospitality, finance, business, and engineering, Switzerland offers students a premium academic environment combined with outstanding quality of life.",
        "With globally respected universities, multicultural campuses, and strong industry connections, Switzerland attracts ambitious students from around the world who want international exposure and career-focused education."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "30+" },
        { key: "International Student Community", value: "75,000+" },
        { key: "Main Intakes", value: "Sep / Feb*" },
        { key: "Average Tuition Fees", value: "CHF 1,000 – CHF 40,000+ per year" },
        { key: "Typical IELTS Requirement", value: "6.0 – 7.0*" },
        { key: "Part-Time Work Opportunity", value: "Up to 15 hours/week during semester*" },
        { key: "Post-Study Opportunities", value: "Available for eligible graduates*" },
        { key: "Popular Student Cities", value: "Zurich, Geneva, Lausanne, Bern, Basel" }
      ]}
      stats={[
        { value: '75K+', label: 'International Students' },
        { value: '30+', label: 'Universities' },
        { value: '#7', label: 'ETH Zurich World Rank' },
        { value: 'Sep/Feb', label: 'Main Intakes' },
      ]}
      highlights={[
        { icon: '🏔️', title: 'Alpine Excellence', desc: 'Study amidst stunning landscapes and world-class academic facilities.' },
        { icon: '🔭', title: 'ETH Zurich', desc: 'Ranked #7 globally — Europe\'s leading science & technology university.' },
        { icon: '🛎️', title: 'Hospitality Schools', desc: 'EHL Lausanne — world\'s best hospitality management school.' },
        { icon: '🌐', title: 'UN HQ & WHO', desc: 'Geneva hosts major international organisations and NGOs.' },
      ]}
      universities={[
        { name: 'ETH Zurich', rank: 'QS World Rank #7' },
        { name: 'EPFL Lausanne', rank: 'QS World Rank #16' },
        { name: 'University of Zurich', rank: 'QS World Rank #83' },
        { name: 'University of Geneva', rank: 'QS World Rank #131' },
        { name: 'EHL Hospitality Business School', rank: "World's Best Hospitality School" },
        { name: 'University of Bern', rank: 'QS World Rank #130' },
      ]}
      requirements={[
        '12th pass with high scores (UG) or Bachelor\'s degree with 65%+ (PG)',
        'English (IELTS 6.5+) or German/French depending on program',
        'Switzerland Student Visa (Type D) for non-EU students',
        'Proof of funds: CHF 21,000/year',
        'Acceptance from a recognised Swiss institution',
        'Valid travel insurance for the entire duration of study',
      ]}
      avgCost="CHF 1–40K/yr"
      workPermit="15 Hrs/Week"
      processingTime="4–8 Weeks"
    />
  );
}
