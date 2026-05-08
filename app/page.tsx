import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import SampleReportSection from "./components/SampleReportSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ForCreatorsSection from "./components/ForCreatorsSection";
import GiaStorySection from "./components/GiaStorySection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="min-w-0 flex-1">
      <HeroSection />
      <Reveal>
        <MarqueeSection />
      </Reveal>
      <Reveal>
        <FeaturesSection />
      </Reveal>
      <Reveal>
        <SampleReportSection />
      </Reveal>
      <Reveal>
        <HowItWorksSection />
      </Reveal>
      <Reveal>
        <ForCreatorsSection />
      </Reveal>
      <Reveal>
        <GiaStorySection />
      </Reveal>
      <Reveal>
        <PricingSection />
      </Reveal>
      <Reveal>
        <FAQSection />
      </Reveal>
      <Reveal>
        <CTASection />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}
