import { AboutSection } from "@/components/AboutSection";
import { AiEstimateSection } from "@/components/AiEstimateSection";
import { CrmSection } from "@/components/CrmSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MaterialsSection } from "@/components/MaterialsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PortfolioDirectionsSection } from "@/components/PortfolioDirectionsSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustStatsSection } from "@/components/TrustStatsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AiEstimateSection />
        <CrmSection />
        <TrustStatsSection />
        <ServicesSection />
        <MaterialsSection />
        <PortfolioDirectionsSection />
        <PortfolioSection />
        <ProcessSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
