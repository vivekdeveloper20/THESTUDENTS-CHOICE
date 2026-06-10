import type { Metadata } from 'next';
import { StudyUAEPage } from '@/components/study-abroad/StudyUAEPage';

export const metadata: Metadata = {
  title: "Study in UAE | Student's Choice",
  description: "Explore globally respected universities, future-focused education, and international career opportunities in the UAE's world-class cities.",
};

export default function UAEPage() {
  return (
    <StudyUAEPage
      country="UAE"
      tagline="Your Smart Path to Study in the UAE"
      heroImage="/assets/images/studyabroadcountry/UAE.png"
      introParagraphs={[
        "The UAE has rapidly become one of the most attractive destinations for international students seeking globally recognised education, modern infrastructure, and strong career opportunities. Known for its innovation-driven economy, multicultural lifestyle, and international university campuses, the UAE offers students a future-focused learning environment in the heart of the Middle East.",
        "With world-class cities like Dubai and Abu Dhabi, students gain access to international exposure, industry connections, and a high standard of living while studying."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "70+" },
        { key: "International Student Community", value: "200,000+" },
        { key: "Main Intakes", value: "Sep / Jan / May*" },
        { key: "Average Tuition Fees", value: "AED 35,000 – AED 90,000+ per year" },
        { key: "Typical IELTS Requirement", value: "5.5 – 6.5*" },
        { key: "Part-Time Work Opportunity", value: "Available for eligible students*" },
        { key: "Post-Study Career Opportunities", value: "Growing opportunities across sectors" },
        { key: "Popular Student Cities", value: "Dubai, Abu Dhabi, Sharjah" }
      ]}
      stats={[
        { value: '200K+', label: 'International Students' },
        { value: '70+', label: 'Universities' },
        { value: '0%', label: 'Income Tax' },
        { value: 'Sep/Jan/May', label: 'Main Intakes' },
      ]}
      highlights={[
        { icon: '🏙️', title: 'Dubai & Abu Dhabi', desc: 'Futuristic smart cities with world-class infrastructure and campuses.' },
        { icon: '💰', title: 'Tax-Free Economy', desc: 'Earn and live with zero income tax after graduation.' },
        { icon: '🌐', title: 'Strategic Global Location', desc: 'Gateway between Asia, Europe, and Africa with unmatched connectivity.' },
        { icon: '✈️', title: 'Global Connectivity', desc: 'Dubai is within 8 hours of 80% of the world\'s population.' },
      ]}
      universities={[
        { name: 'NYU Abu Dhabi', rank: 'QS World Rank #185' },
        { name: 'Khalifa University', rank: 'QS World Rank #214' },
        { name: 'University of Sharjah', rank: 'QS World Rank #481' },
        { name: 'American University of Sharjah', rank: 'Top 5 in UAE' },
        { name: 'Heriot-Watt University Dubai', rank: 'Top UK Branch Campus' },
        { name: 'Manipal Academy of Higher Education Dubai', rank: 'Top India Brand Abroad' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'IELTS 5.5–6.5 or TOEFL 80+ for English programs',
        'UAE Student/Mission Visa',
        'University enrollment letter from KHDA-approved institution',
        'Proof of financial support: AED 4,000–8,000/month',
        'Medical fitness certificate and attested documents',
      ]}
      avgCost="AED 35–90K/yr"
      workPermit="Employment Visa"
      processingTime="2–6 Weeks"
    />
  );
}
