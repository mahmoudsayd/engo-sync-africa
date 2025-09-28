import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import VisionMission from "@/components/vision-mission";
import ProductsSection from "@/components/products-section";
import InnovationSection from "@/components/innovation-section";
import ImpactSDGs from "@/components/impact-sdgs";
import PartnersSection from "@/components/partners-section";
import BusinessModel from "@/components/business-model";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <VisionMission />
      <ProductsSection />
      <InnovationSection />
      <ImpactSDGs />
      <PartnersSection />
      <BusinessModel />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;