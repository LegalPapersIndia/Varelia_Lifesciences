import AboutHero from "../components/About/AboutHero";
import CompanyStory from "../components/About/CompanyStory";
import MissionVision from "../components/About/MissionVision";
// import QualityCommitment from "../components/Quality/QualityCommitment";
import CTASection from "../components/Home/CTASection";

const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      {/* <QualityCommitment /> */}
        <CTASection />
    </>
  );
};

export default About;