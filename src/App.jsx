import NavBar from "./components/NavBar";
import Intro from "./sections/Intro";
import ShowcaseSection from "./sections/ShowcaseSection";
import SkillsCards from "./sections/SkillsCards";

const App = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <ShowcaseSection />
      <SkillsCards />
    </>
  );
};

export default App;
