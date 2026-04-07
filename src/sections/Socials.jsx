import Button from "../components/Button";
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
      <div className="mt-30">
        <header className="intro-header flex flex-col justify-center md:w-full w-screen md:pl-20 pr-10 px-5">
          <div className="flex flex-col py-10">
            <div className="hero-text pointer-events-auto">
              <h1 className="text-6xl font-bold text-center pb-10">
                Contact Me
              </h1>

              <ul className="text-center gap-3 text-xl grid grid-cols-2">
                <li>
                  <b>Gmail: </b>
                  <a
                    className="hover:text-purple-200"
                    href="mailto:vianeyr8624@gmail.com"
                    target="_blank"
                  >
                    vianeyr8624@gmail.com
                  </a>
                </li>
                <li>
                  <b>LinkedIn: </b>
                  <a
                    className="hover:text-purple-200"
                    href="https://linkedin.com/in/vianeyrivera"
                    target="_blank"
                  >
                    linkedin.com/in/vianeyrivera
                  </a>
                </li>
                <li>
                  <b>GitHub: </b>
                  <a
                    className="hover:text-purple-200"
                    href="https://github.com/Blazer7986"
                    target="_blank"
                  >
                    github.com/Blazer7986
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
