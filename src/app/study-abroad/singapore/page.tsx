import type { Metadata } from 'next';
import { CountryPage } from '@/components/layout/CountryPage';

export const metadata: Metadata = {
  title: "Study in Singapore | Student's Choice",
  description: 'Explore NUS, NTU and world-class education in Singapore\'s global financial and tech hub.',
};

export default function SingaporePage() {
  return (
    <CountryPage
      country="Singapore"
      flag="🇸🇬"
      tagline="Asia's global city — NUS and NTU rank among the world's top 15, and Singapore is a gateway to Asian markets."
      description="Singapore is the education powerhouse of Southeast Asia, home to NUS (Rank #8 globally) and NTU (Rank #15). As a global financial and technology hub with English as its primary language of instruction, Singapore offers unparalleled career prospects in Asia. With strong Indian diaspora presence and excellent safety, it is a top choice for Indian students."
      heroGradient="bg-gradient-to-br from-[#b71c1c] via-[#c62828] to-[#fafafa]"
      accentColor="#b71c1c"
      stats={[
        { value: '90K+', label: 'International Students' },
        { value: '#8', label: 'NUS World Rank' },
        { value: '1 Year', label: 'Employment Pass' },
        { value: 'English', label: 'Instruction Language' },
      ]}
      highlights={[
        { icon: '🏙️', title: 'Global Financial Hub', desc: 'Singapore is Asia\'s #1 financial and business center.' },
        { icon: '🔬', title: 'World-Class Research', desc: 'NUS & NTU lead research in AI, biotech, and engineering.' },
        { icon: '🌏', title: 'Gateway to Asia', desc: 'Prime location for careers across Southeast and East Asia.' },
        { icon: '🛡️', title: 'Ultra Safe & Clean', desc: 'One of the world\'s safest cities with top-tier public services.' },
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
        '12th pass with 75%+ (UG) or Bachelor\'s with 70%+ (PG)',
        'IELTS 6.5+ or TOEFL 90+ (most programs in English)',
        'Singapore Student Pass from ICA',
        'Confirmed university admission letter',
        'Proof of funds: SGD 10,000–30,000/year depending on institution',
        'Medical insurance for duration of study',
      ]}
      avgCost="₹20–45 L/yr"
      workPermit="1 Yr EP"
      processingTime="4–8 Weeks"
    />
  );
}
