import HeroSection from "./components/HeroSection";
import SampleReportSection from "./components/SampleReportSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ForCreatorsSection from "./components/ForCreatorsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SampleReportSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ForCreatorsSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
