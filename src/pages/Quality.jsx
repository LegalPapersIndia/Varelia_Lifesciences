import QualityHero from "../components/Quality/QualityHero";
import QualityCommitment from "../components/Quality/QualityCommitment";
import CTASection from "../components/Home/CTASection";
import DocumentsAvailable from "../components/Quality/DocumentsAvailable";

const Quality = () => {
  return (
    <>
      <QualityHero />
       <QualityCommitment />
        <DocumentsAvailable />
          <CTASection />
    </>
  );
};

export default Quality;