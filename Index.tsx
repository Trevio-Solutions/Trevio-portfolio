import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import BusinessSection from "@/components/BusinessSection";
import ComplianceSection from "@/components/ComplianceSection";
import ProofSection from "@/components/ProofSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EnterpriseSection />
      <BusinessSection />
      <ComplianceSection />
      <ProofSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
