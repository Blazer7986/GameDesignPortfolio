import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedCounter from "../components/AnimatedCounter";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="highlighted" ref={sectionRef} className="bg-purple-950 py-10">
      <AnimatedCounter />
      <h1 className="text-white-50 text-5xl font-bold text-center pt-10">
        Highlighted Projects
      </h1>
      <div className="app-showcase">
        {/* Left Project*/}
        <div className="project-wrapper" ref={project1Ref}>
          <div className="image-wrapper">
            <Link to="/projects/project1">
              <img
                src="/images/projects/RogueDetective/Environment.png"
                alt="Rogue Detective"
              />
            </Link>
          </div>
          <div className="text-content">
            <h2 className="mb-2">Rogue Detective</h2>
            <div className="flex gap-2 mt-0 mb-3 text-lg font-semibold">
              <p className="bg-blue-500 px-2 rounded-lg">Unreal Engine</p>
              <p className="bg-red-400 px-2 rounded-lg">Blender</p>
              <p className="bg-green-600 px-2 rounded-lg">Hack N' Plan</p>
            </div>
            <p className="md:text-xl pb-5">
              Rogue Detective is an action-adventure game that follows a
              detective on a quest to solve crimes, save civilians from
              criminals, and uncover and expose the corruption behind his former
              friend, Max, who is a newly appointed police chief. In this game,
              players will navigate through a richly detailed world, interact
              with various characters, and make choices that impact the story's
              outcome.
            </p>
          </div>
          <Link
            to="/projects/project1"
            className="bg-violet-300 my-0 basicbutton cta-button hover:bg-black-200 ease-in-out duration-300"
          >
            More Info
          </Link>
        </div>
        {/* Middle Project*/}
        <div className="project-wrapper" ref={project2Ref}>
          <div className="image-wrapper">
            <Link to="/projects/project2">
              <img
                src="/images/projects/project1.jpeg"
                className="object-cover"
                alt="Website"
              />
            </Link>
          </div>
          <div className="text-content">
            <h2 className="mb-2">Fantasy League Database Website</h2>
            <div className="flex gap-2 mt-0 mb-3 text-lg font-semibold">
              <p className="bg-cyan-600 px-2 rounded-lg">Web Dev</p>
              <p className="bg-cyan-700 px-2 rounded-lg">React</p>
              <p className="bg-cyan-800 px-2 rounded-lg">Django</p>
              <p className="bg-blue-600 px-2 rounded-lg">Python</p>
            </div>
            <p className="md:text-xl pb-5">
              An app built with Python, Django, & React for a fast,
              user-friendly experience to create their own Baseball League
              tourament with your customized teams.
            </p>
          </div>
          <Link
            to="/projects/project2"
            className="bg-violet-300 my-0 basicbutton cta-button hover:bg-black-200 ease-in-out duration-300"
          >
            More Info
          </Link>
        </div>
        {/* Right Project*/}
        <div className="project-wrapper" ref={project3Ref}>
          <div className="image-wrapper">
            <Link to="/projects/project3">
              <img src="/images/projects/project2.png" alt="TrashBin" />
            </Link>
          </div>
          <div className="text-content">
            <h2 className="mb-2">CleanCycle's Smart Trash Bin Product</h2>
            <div className="flex gap-2 mt-0 mb-3 text-lg font-semibold">
              <p className="bg-blue-700 px-2 rounded-lg">C++</p>
              <p className="bg-purple-700 px-2 rounded-lg">Arduino</p>
              <p className="bg-green-800 px-2 rounded-lg">Trello</p>
            </div>
            <p className="md:text-xl pb-5">
              CleanCycle's Smart Trash Bin is an innovative solution for waste
              management, utilizing AI and IoT technology to optimize waste
              collection and promote recycling. The product features a sleek
              design, user-friendly interface, and real-time monitoring
              capabilities, making it an essential tool for modern urban living.
            </p>
          </div>
          <Link
            to="/projects/project3"
            className="bg-violet-300 my-0 basicbutton cta-button hover:bg-black-200 ease-in-out duration-300"
          >
            More Info
          </Link>
        </div>
      </div>
      <Link
        to="/projects"
        className="bg-violet-400  text-3xl basicbutton cta-button hover:bg-black-200 ease-in-out duration-300"
      >
        See More Projects
      </Link>
    </section>
  );
};

export default ShowcaseSection;
