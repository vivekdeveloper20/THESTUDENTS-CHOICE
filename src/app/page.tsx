import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { PlatformTabsSection } from "@/components/home/PlatformTabsSection";
import { WhyTrustSection } from "@/components/home/WhyTrustSection";
import { LoanSupportSection } from "@/components/home/LoanSupportSection";
import { LoanOptionsSection } from "@/components/home/LoanOptionsSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { JourneySection } from "@/components/home/JourneySection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { PreFooter } from "@/components/layout/PreFooter";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      {/* Page Content goes here dynamically */}
      <PlatformTabsSection />
      <WhyTrustSection />
      <LoanSupportSection />
      <LoanOptionsSection />
      <DestinationsSection />
      <TestimonialSection />
      <JourneySection />
      <FaqSection />
      <CtaBanner />
      <PreFooter />
      <Footer />
    </main>
  );
}
