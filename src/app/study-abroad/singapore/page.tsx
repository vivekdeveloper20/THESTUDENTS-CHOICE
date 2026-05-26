import type { Metadata } from 'next';
import { StudySingaporePage } from '@/components/study-abroad/StudySingaporePage';

export const metadata: Metadata = {
  title: "Study in Singapore | Student's Choice",
  description: "Explore globally recognised universities, industry-focused education, and strong global career opportunities in Singapore — Asia's leading innovation hub.",
};

export default function SingaporePage() {
  return (
    <StudySingaporePage
      country="Singapore"
      tagline="Your Smart Path to Study in Singapore"
      heroImage="/assets/images/studyabroadcountry/SINGAPURE.png"
      introParagraphs={[
        "Singapore has become one of Asia's most preferred destinations for international students seeking globally recognised education, industry-focused learning, and strong career opportunities. Known for its world-class universities, safety, modern infrastructure, and innovation-driven economy, Singapore offers students a premium international education experience close to home.",
        "As one of the world's leading business and technology hubs, Singapore attracts students who want practical learning, global exposure, and excellent employability outcomes after graduation."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "30+" },
        { key: "International Student Community", value: "65,000+" },
        { key: "Main Intakes", value: "Aug / Jan*" },
        { key: "Average Tuition Fees", value: "SGD 15,000 – SGD 45,000+ per year" },
        { key: "Typical IELTS Requirement", value: "6.0 – 6.5+" },
        { key: "Part-Time Work Opportunity", value: "Up to 16 hours/week during term*" },
        { key: "Post-Study Career Opportunities", value: "Available for eligible graduates*" },
        { key: "Popular Student Cities", value: "Singapore City, Jurong, Queenstown" }
      ]}
      stats={[
        { value: '65K+', label: 'International Students' },
        { value: '#8', label: 'NUS World Rank' },
        { value: '30+', label: 'Universities' },
        { value: 'English', label: 'Medium of Study' },
      ]}
      highlights={[
        { icon: '🏙️', title: 'Global Financial Hub', desc: "Singapore is Asia's #1 financial and business centre." },
        { icon: '🔬', title: 'World-Class Research', desc: 'NUS & NTU lead research in AI, biotech, and engineering.' },
        { icon: '🌏', title: 'Gateway to Asia', desc: 'Prime location for careers across Southeast and East Asia.' },
        { icon: '🛡️', title: 'Ultra Safe & Clean', desc: "One of the world's safest cities with top-tier public services." },
      ]}
      universities={[
        { name: 'National University of Singapore (NUS)', rank: 'QS World Rank #8' },
        { name: 'Nanyang Technological University (NTU)', rank: 'QS World Rank #15' },
        { name: 'Singapore Management University (SMU)', rank: 'QS World Rank #511' },
        { name: 'Singapore University of Technology & Design', rank: 'QS World Rank #401' },
        { name: 'INSEAD Asia Campus', rank: 'FT MBA Rank Top 5' },
        { name: 'James Cook University Singapore', rank: 'Ranked Australia Top 10' },
      ]}
      requirements={[
        "12th pass with 75%+ (UG) or Bachelor's with 70%+ (PG)",
        'IELTS 6.5+ or TOEFL 90+ (most programs in English)',
        'Singapore Student Pass from ICA',
        'Confirmed university admission letter',
        'Proof of funds: SGD 10,000–30,000/year depending on institution',
        'Medical insurance for duration of study',
      ]}
      avgCost="SGD 15–45K/yr"
      workPermit="16 Hrs/Week"
      processingTime="4–8 Weeks"
    />
  );
}
