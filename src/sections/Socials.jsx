import Button from "../components/Button";
import { socialImgs } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Socials = () => {
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
    <section className="relative overflow-hidden mb-0">
      {/* <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div> */}
      <div className="mt-30">
        <header className="intro-header flex flex-col justify-center md:w-full w-screen md:pl-20 pr-10 px-5">
          <div className="flex flex-col ">
            <div className="hero-text">
              <h1 className="text-center"> Socials</h1>
              <ul className="list-disc text-center gap-3 text-lg grid grid-cols-2">
                <li>
                  <a href="mailto:vianeyr8624@gmail.com" target="_blank">
                    Gmail: vianeyr8624@gmail.com
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/vianeyrivera"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/vianeyrivera
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/Blazer798"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Blazer798
                  </a>
                </li>
                {/* <li>
                  Twitter:{" "}
                  <a href="https://twitter.com/example" target="_blank">
                    twitter.com/example
                  </a>
                </li>
                <li>
                  Instagram:{" "}
                  <a href="https://instagram.com/example" target="_blank">
                    instagram.com/example
                  </a>
                </li> */}
                {/* <li>
                  Inchio Page:{" "}
                  <a href="https://inchio.com/example" target="_blank">
                    inchio.com/example
                  </a>
                </li>
                <li>
                  Steam Page:{" "}
                  <a
                    href="https://store.steampowered.com/app/123456"
                    target="_blank"
                  >
                    steam.com/example
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Socials;
