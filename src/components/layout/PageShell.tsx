import { Header } from '@/components/layout/Header';
// import { PreFooter } from '@/components/layout/PreFooter';
import { Footer } from '@/components/layout/Footer';
import { LoanApprovalBanner } from '@/components/layout/LoanApprovalBanner';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {children}
      <LoanApprovalBanner />
      {/* <PreFooter /> */}
      <Footer />
    </main>
  );
}
