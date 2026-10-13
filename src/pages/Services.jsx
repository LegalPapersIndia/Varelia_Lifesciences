// import CapabilitiesHero from "../components/Capabilities/CapabilitiesHero";
// import CapabilitiesCards from "../components/Capabilities/CapabilitiesCards";
// import CapabilitiesProcess from "../components/Capabilities/CapabilitiesProcess";
// import WhoWeServe from "../components/Capabilities/WhoWeServe";
// import CTASection from "../components/Home/CTASection";

// const Capabilities = () => {
//   return (
//     <>
//       <CapabilitiesHero />
//       <CapabilitiesCards />
//       <CapabilitiesProcess />
//       <WhoWeServe />
//       <CTASection />
//     </>
//   );
// };

// export default Capabilities;


import CapabilitiesHero from "../components/Services/ServicesHero";
import CapabilitiesCards from "../components/Services/ServicesCards";
import DomesticExport from "../components/Services/ServicesExport";
import CapabilitiesProcess from "../components/Services/ServicesProcess";
import WhoWeServe from "../components/Services/WhoWeServe";
import CTASection from "../components/Home/CTASection";

const Capabilities = () => {
  return (
    <>
      <CapabilitiesHero />
      <CapabilitiesCards />
      <DomesticExport />
      <CapabilitiesProcess />
      <WhoWeServe />
      <CTASection />
    </>
  );
};

export default Capabilities;