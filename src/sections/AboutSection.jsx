import Button from "../components/Button";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const AboutSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.inOut",
      },
    );
  });

  return (
    <section className="relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div> */}
      <div className="hero-layout ">
        {/* LEFT: Hero content*/}
        <header className="intro-header flex flex-col justify-center md:w-full w-screen md:pl-20 pr-10 px-5">
          <div className="flex flex-col">
            <div className="hero-text">
              <h1> My name is </h1>
              <h1>Vianey Rivera.</h1>
              <h1 className="text-3xl"> Game Designer</h1>
            </div>
            <p className="pt-2 md:text-xl relative pointer-events-none text-wrap w-xl">
              Specalized in <b>level</b> and <b>narrative design.</b> I strive
              to create engaging and immersive experiences that captivate
              players and bring stories to life using different tools and
              techniques such as <b>Unreal Engine</b> and <b>Blender.</b> With a
              passion for crafting compelling narratives and designing intricate
              levels, I aim to create games that leave a lasting impact on
              players.
            </p>
            <div className="pt-5">
              <h1 className="text-3xl font-bold pb-2">Hobbies</h1>
              <ul className="pl-5 list-disc text-left text-lg grid grid-cols-3 gap-2">
                <li>Writer</li>
                <li>Drawing</li>
                <li>Reading Books</li>
                <li>Pixel Artist</li>
                <li>Video Gaming</li>
              </ul>
            </div>
          </div>
        </header>
        {/* Right: Image*/}
        <div className="hero-3d-layout border-2 border-black-100">
          <img
            src="/images/personal/myPhoto.jpg"
            alt="myPhoto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
