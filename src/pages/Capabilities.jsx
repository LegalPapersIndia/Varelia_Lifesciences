import CapabilitiesHero from "../components/Capabilities/CapabilitiesHero";
import CapabilitiesCards from "../components/Capabilities/CapabilitiesCards";
import CapabilitiesProcess from "../components/Capabilities/CapabilitiesProcess";
import WhoWeServe from "../components/Capabilities/WhoWeServe";
import CTASection from "../components/Home/CTASection";

const Capabilities = () => {
  return (
    <>
      <CapabilitiesHero />
      <CapabilitiesCards />
      <CapabilitiesProcess />
      <WhoWeServe />
      <CTASection />
    </>
  );
};

export default Capabilities;