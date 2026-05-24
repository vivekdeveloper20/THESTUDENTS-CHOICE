import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { EduLoanHero } from '@/components/education-loan/EduLoanHero';
import { EduLoanBankMarquee } from '@/components/education-loan/EduLoanBankMarquee';
import { EduLoanExplainer } from '@/components/education-loan/EduLoanExplainer';
import { EduLoanServicesAndApply } from '@/components/education-loan/EduLoanServicesAndApply';
import { EduLoanWhyUs } from '@/components/education-loan/EduLoanWhyUs';
import { EduLoanProcess } from '@/components/education-loan/EduLoanProcess';
import { EduLoanTypes } from '@/components/education-loan/EduLoanTypes';
import { EduLoanEligibility } from '@/components/education-loan/EduLoanEligibility';
import { EduLoanCTA } from '@/components/education-loan/EduLoanCTA';
import { EduLoanFAQ } from '@/components/education-loan/EduLoanFAQ';

export const metadata: Metadata = {
  title: "Education Loan | Student's Choice - Fund Your Global Education",
  description:
    'Get expert guidance on education loans from public banks, private banks & NBFCs. Apply for education loan with competitive interest rates and fast approvals.',
};

export default function EducationLoanPage() {
  return (
    <PageShell>
      <EduLoanHero />
      <EduLoanBankMarquee />
      <EduLoanExplainer />
      <EduLoanServicesAndApply />
      <EduLoanWhyUs />
      <EduLoanProcess />
      <EduLoanTypes />
      <EduLoanEligibility />
      <EduLoanFAQ />
      <EduLoanCTA />
    </PageShell>
  );
}
