// import FranchiseHero from "../components/Franchise/FranchiseHero";
// import WhyPartner from "../components/Franchise/WhyPartner";
// import HowItWorks from "../components/Franchise/HowItWorks";
// import FranchiseForm from "../components/Franchise/FranchiseForm";

// const Franchise = () => {
//   return (
//     <>
//       <FranchiseHero />
//       <WhyPartner />
//       <HowItWorks />
//       <FranchiseForm />
//     </>
//   );
// };

// export default Franchise;



import { useState } from "react";
import FranchiseHero from "../components/Franchise/FranchiseHero";
import WhyPartner from "../components/Franchise/WhyPartner";
import PartnerTypes from "../components/Franchise/PartnerTypes";
import HowItWorks from "../components/Franchise/HowItWorks";
import FranchiseForm from "../components/Franchise/FranchiseForm";

const Franchise = () => {
  // Kaunse partner card se aaye, woh form ko pass hoga
  const [partnerType, setPartnerType] = useState("");

  return (
    <>
      <FranchiseHero />
      <WhyPartner />
      <PartnerTypes onSelect={setPartnerType} />
      <HowItWorks />
      <FranchiseForm partnerType={partnerType} />
    </>
  );
};

export default Franchise;