import { useRef } from "react";
import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
    <section id="work" ref={sectionRef} className=" bg-purple-800 py-10">
      <h1 className="text-white-50 text-5xl font-bold text-center pt-10">
        Highlighted Projects
      </h1>
      <div className="app-showcase">
        {/* Left Project*/}
        <div className="project-wrapper" ref={project1Ref}>
          <div className="image-wrapper">
            <img src="/images/project3.png" alt="Rogue Detective" />
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
          <Button
            id="basic-button"
            text="More Info"
            className=" px-15 h-12 w-100 justify-center"
          />
        </div>
        {/* Middle Project*/}
        <div className="project-wrapper" ref={project2Ref}>
          <div className="image-wrapper">
            <img src="/images/project1.jpeg" alt="Website" />
          </div>
          <div className="text-content">
            <h2>Fantasy League Database Website</h2>
            <p className="md:text-xl pb-5">
              An app built with Python, Django, & React for a fast,
              user-friendly experience to create their own Baseball League
              tourament with your customized teams.
            </p>
          </div>
          <Button
            id="basic-button"
            text="More Info"
            className=" px-15 h-12 w-100 justify-center"
          />
        </div>
        {/* Right Project*/}
        <div className="project-wrapper" ref={project3Ref}>
          <div className="image-wrapper">
            <img src="/images/project2.png" alt="Rogue Detective" />
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
          <Button
            id="basic-button"
            text="More Info"
            className=" px-15 h-12 w-100 justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
