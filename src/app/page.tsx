import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { PlatformTabsSection } from "@/components/home/PlatformTabsSection";
import { WhyTrustSection } from "@/components/home/WhyTrustSection";
import { LoanSupportSection } from "@/components/home/LoanSupportSection";
import { LoanOptionsSection } from "@/components/home/LoanOptionsSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { ReferFriendSection } from "@/components/home/ReferFriendSection";
import { JourneySection } from "@/components/home/JourneySection";
import { FaqSection } from "@/components/home/FaqSection";
import { LoanApprovalBanner } from "@/components/layout/LoanApprovalBanner";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PlatformTabsSection />
      <WhyTrustSection />
      <LoanSupportSection />
      <LoanOptionsSection />
      <DestinationsSection />
      <TestimonialSection />
      <ReferFriendSection />
      <JourneySection />
      <FaqSection />
      <LoanApprovalBanner />
      <Footer />
    </main>
  );
}
