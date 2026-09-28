
import { useState } from "react";
import FranchiseHero from "../components/Partners/PartnersHero";
import WhyPartner from "../components/Partners/WhyPartner";
import PartnerTypes from "../components/Partners/PartnerTypes";
import HowItWorks from "../components/Global/HowItWorks";
import FranchiseForm from "../components/Partners/PartnersForm";
import TargetMarkets from "../components/Global/TargetMarkets";

const Partners = () => {
  // Kaunse partner card se aaye, woh form ko pass hoga
  const [partnerType, setPartnerType] = useState("");

  return (
    <>
      <FranchiseHero />
      <WhyPartner />
      <PartnerTypes onSelect={setPartnerType} />
      {/* <TargetMarkets /> */}
      {/* <HowItWorks /> */}
      <FranchiseForm partnerType={partnerType} />
    </>
  );
};

export default Partners;