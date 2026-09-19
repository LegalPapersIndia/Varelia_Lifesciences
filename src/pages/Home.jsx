import Hero from "../components/Home/Hero";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ProductHighlights from "../components/Home/ProductHighlights";
import AboutSnapshot from "../components/Home/AboutSnapshot";
import FranchiseCTA from "../components/Home/FranchiseCTA";
import CTASection from "../components/Home/CTASection";
const Home = () => {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <WhyChooseUs />
      <ProductHighlights />
      <FranchiseCTA />
      <CTASection />
    </>
  );
};

export default Home;