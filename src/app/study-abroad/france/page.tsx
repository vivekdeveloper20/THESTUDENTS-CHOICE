import type { Metadata } from 'next';
import { StudyFrancePage } from '@/components/study-abroad/StudyFrancePage';

export const metadata: Metadata = {
  title: "Study in France | Student's Choice",
  description: 'Discover French grandes écoles, affordable tuition, and the cultural richness of studying in France.',
};

export default function FrancePage() {
  return (
    <StudyFrancePage
      country="France"
      tagline="Your Smart Path to Study in France"
      heroImage="/assets/images/France%20Banner.svg"
      introParagraphs={[
        "France has become one of the most attractive study destinations for international students seeking globally recognised education, affordable tuition options, innovation-driven learning, and access to Europe's international job market. Known for its excellence in business, fashion, luxury management, engineering, culinary arts, and research, France offers students a strong balance of academic quality and lifestyle.",
        "As one of Europe's leading economies and cultural hubs, France gives students the opportunity to gain international exposure while studying in a globally connected environment."
      ]}
      quickInsights={[
        { key: "Universities & Institutions", value: "3,500+" },
        { key: "International Student Community", value: "400,000+" },
        { key: "Main Intakes", value: "Sep / Jan*" },
        { key: "Average Tuition Fees", value: "€3,000 – €20,000+ per year" },
        { key: "Typical IELTS Requirement", value: "6.0 – 6.5+" },
        { key: "Part-Time Work Opportunity", value: "Up to 964 hours/year*" },
        { key: "Post-Study Work Opportunities", value: "Up to 2 years*" },
        { key: "Popular Student Cities", value: "Paris, Lyon, Toulouse, Lille, Nice" }
      ]}
      stats={[
        { value: '400K+', label: 'International Students' },
        { value: '2 Years', label: 'Post-Study Work' },
        { value: '3,500+', label: 'Universities' },
        { value: 'Affordable', label: 'Public Education' },
      ]}
      highlights={[
        { icon: '🗼', title: 'Affordable Education', desc: 'Public universities offer comparatively low tuition fees.' },
        { icon: '💼', title: 'Business Excellence', desc: 'Home to top European business schools like HEC Paris.' },
        { icon: '🇪🇺', title: 'Gateway to Europe', desc: 'Access to Schengen region and European opportunities.' },
        { icon: '🎨', title: 'Culture & Innovation', desc: 'Rich heritage combined with cutting-edge research.' },
      ]}
      universities={[
        { name: 'HEC Paris', rank: 'FT Global MBA Rank #4' },
        { name: 'Sorbonne University', rank: 'QS World Rank #59' },
        { name: 'PSL University', rank: 'QS World Rank #24' },
        { name: 'Sciences Po', rank: 'QS Social Sciences #3' },
        { name: 'Université Paris-Saclay', rank: 'QS World Rank #71' },
        { name: 'École Polytechnique', rank: 'QS World Rank #48' },
      ]}
      requirements={[
        '12th pass with 60%+ (UG) or Bachelor\'s degree (PG)',
        'IELTS 6.0–6.5 or French proficiency (B2 level for French programs)',
        'France Student Visa (Long-stay visa)',
        'Acceptance letter from Campus France approved institution',
        'Proof of financial support: €615/month minimum',
        'Health insurance coverage during stay',
      ]}
      avgCost="€3–20K/yr"
      workPermit="2 Years"
      processingTime="8–12 Weeks"
    />
  );
}
