import { useRef } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedCounter from "../components/AnimatedCounter";

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
            <img src="/images/projects/project3.png" alt="Rogue Detective" />
          </div>
          <div className="text-content">
            <h2>Rogue Detective</h2>
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
          <a
            href="#moreprojects"
            className="bg-violet-300 my-0 basicbutton cta-button hover:bg-black-200 ease-in-out duration-300"
          >
            More Info
          </a>
        </div>
        {/* Middle Project*/}
        <div className="project-wrapper" ref={project2Ref}>
          <div className="image-wrapper">
            <img src="/images/projects/project1.jpeg" alt="Website" />
          </div>
          <div className="text-content">
            <h2>Fantasy League Database Website</h2>
            <p className="md:text-xl pb-5">
              An app built with Python, Django, & React for a fast,
              user-friendly experience to create their own Baseball League
              tourament with your customized teams.
            </p>
          </div>
          <a
            href="#moreprojects"
            className="bg-violet-300 my-0 basicbutton cta-button hover:bg-black-200 ease-in-out duration-300"
          >
            More Info
          </a>
        </div>
        {/* Right Project*/}
        <div className="project-wrapper" ref={project3Ref}>
          <div className="image-wrapper">
            <img src="/images/projects/project2.png" alt="Rogue Detective" />
          </div>
          <div className="text-content">
            <h2>CleanCycle's Smart Trash Bin Product</h2>
            <p className="md:text-xl pb-5">
              CleanCycle's Smart Trash Bin is an innovative solution for waste
              management, utilizing AI and IoT technology to optimize waste
              collection and promote recycling. The product features a sleek
              design, user-friendly interface, and real-time monitoring
              capabilities, making it an essential tool for modern urban living.
            </p>
          </div>
          <a
            href="#moreprojects"
            className="bg-violet-300 my-0 basicbutton cta-button hover:bg-black-200 ease-in-out duration-300"
          >
            More Info
          </a>
        </div>
      </div>
      <a
        href="#moreprojects"
        className="bg-violet-400  text-3xl basicbutton cta-button hover:bg-black-200 ease-in-out duration-300"
      >
        See More Projects
      </a>
    </section>
  );
};

export default ShowcaseSection;
