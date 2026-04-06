import NavBar from "../components/NavBar";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection";
import Intro from "../sections/Intro";
import ShowcaseSection from "../sections/ShowcaseSection";
import SkillsCards from "../sections/SkillsCards";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <ShowcaseSection />
      <SkillsCards />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </>
  );
};

export default Home;
