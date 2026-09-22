import Hero from "../components/Home/Hero";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ProductHighlights from "../components/Home/ProductHighlights";
import AboutSnapshot from "../components/Home/AboutSnapshot";
import FranchiseCTA from "../components/Home/FranchiseCTA";
import CTASection from "../components/Home/CTASection";
import FaqAccordion from "../components/Home/FaqAccordion";
import StatsCounter from "../components/Home/StatsCounter";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSnapshot />
          <StatsCounter />
      <WhyChooseUs />
      <ProductHighlights />
      <FranchiseCTA />
      <FaqAccordion />
      <CTASection />
    </>
  );
};

export default Home;