import Hero from "../components/Home/Hero";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ProductHighlights from "../components/Home/ProductHighlights";
import AboutSnapshot from "../components/Home/AboutSnapshot";
import FranchiseCTA from "../components/Home/FranchiseCTA";
import CTASection from "../components/Home/CTASection";
import FaqAccordion from "../components/Home/FaqAccordion";
import StatsCounter from "../components/Home/StatsCounter";
// import CertificationsStrip from "../components/Home/CertificationsStrip";
import HowWeWork from "../components/Home/HowWeWork";
import QuickFactsStrip from "../components/Home/QuickFactsStrip";
import WhatWeDo from "../components/Home/WhatWeDo";

const Home = () => {
  return (
    <>
    <Hero />
    <QuickFactsStrip />
    <WhatWeDo />
{/* <CertificationsStrip /> */}
<AboutSnapshot />
<StatsCounter />
<HowWeWork />
<WhyChooseUs />
<ProductHighlights />
<FranchiseCTA />
<FaqAccordion />
<CTASection />
    </>
  );
};

export default Home;
