import type { Metadata } from 'next';
import { StudyGermanyPage } from '@/components/study-abroad/StudyGermanyPage';

export const metadata: Metadata = {
  title: "Study in Germany | Student's Choice",
  description: 'Explore world-class German universities, affordable education, engineering excellence, and strong career opportunities in Europe.',
};

export default function GermanyPage() {
  return (
    <StudyGermanyPage
      country="Germany"
      tagline="Your Smart Path to Study in Germany"
      heroImage="/assets/images/Germany%20Banner.svg"
      introParagraphs={[
        "Germany has become one of the most preferred destinations for international students who want globally respected education, affordable tuition, and strong career opportunities in Europe. Known for engineering, technology, innovation, and research excellence, Germany offers students a high-quality education system with practical industry exposure.",
        "For many students, Germany is not just a study destination — it is a smart long-term investment for global career growth."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "400+" },
        { key: "International Student Community", value: "450,000+" },
        { key: "Main Intakes", value: "Winter / Summer*" },
        { key: "Average Tuition Fees", value: "Low or no tuition fees*" },
        { key: "Typical IELTS Requirement", value: "6.0 – 6.5+" },
        { key: "Living Expenses", value: "€11,000 – €15,000/year" },
        { key: "Part-Time Work Opportunity", value: "Allowed for eligible students*" },
        { key: "Post-Study Work Opportunities", value: "Up to 18 months*" },
        { key: "Popular Student Cities", value: "Berlin, Munich, Hamburg, Aachen" }
      ]}
      stats={[
        { value: '450K+', label: 'International Students' },
        { value: '18 Months', label: 'Post-Study Work' },
        { value: '#1', label: 'Engineering Hub' },
        { value: 'Low Cost', label: 'Tuition Fees' },
      ]}
      highlights={[
        { icon: '🔧', title: 'Engineering Excellence', desc: 'World-renowned for automotive, mechanical, and industrial engineering.' },
        { icon: '💰', title: 'Affordable Education', desc: 'Many public universities offer low or no tuition fees.' },
        { icon: '🚀', title: '18-Month Stay Back', desc: 'Eligible graduates can stay to explore work opportunities.' },
        { icon: '🏛️', title: 'Research & Innovation', desc: 'Home to cutting-edge research facilities and technology hubs.' },
      ]}
      universities={[
        { name: 'Technical University of Munich', rank: 'QS World Rank #37' },
        { name: 'RWTH Aachen University', rank: 'QS World Rank #106' },
        { name: 'LMU Munich', rank: 'QS World Rank #54' },
        { name: 'Heidelberg University', rank: 'QS World Rank #87' },
        { name: 'Karlsruhe Institute of Technology', rank: 'QS World Rank #119' },
        { name: 'Humboldt University Berlin', rank: 'QS World Rank #120' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'IELTS 6.0–6.5 or equivalent English/German proficiency',
        'German Student Visa',
        'Acceptance letter from a recognized German institution',
        'Blocked account: €11,208+ for the first year',
        'Health insurance coverage during stay',
      ]}
      avgCost="€0–20K/yr"
      workPermit="18 Months"
      processingTime="6–12 Weeks"
    />
  );
}
