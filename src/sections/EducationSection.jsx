import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { eduCards } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card2").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline2", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline2",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline2", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each eduText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".eduText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <div
      id="education"
      className="bg-purple-900 mt-0 pb-10 pt-20 flex-center section-padding"
    >
      <section className="pt-10">
        <div className="w-full h-full md:px-20 px-5 text-white-50">
          <TitleHeader title="Education" sub="🎓 My Academic Journey" />
          <div className="mt-32 relative">
            <div className="relative z-50 xl:space-y-32 space-y-10">
              {eduCards.map((card2) => (
                <div key={card2.title} className="exp-card-wrapper">
                  <div>
                    <div className="flex items-start">
                      <div className="timeline2-wrapper">
                        <div className="timeline2" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className="eduText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div className="timeline-logo">
                          <img src={card2.logoPath} alt="logo" />
                        </div>
                        <div>
                          <h1 className="font-semibold text-3xl">
                            {card2.title}
                          </h1>
                          <h2 className="font-semibold text-2xl">
                            {card2.sub}
                          </h2>
                          <p className="mt-5 text-white-50">
                            🗓️&nbsp;{card2.date}
                          </p>
                          <p className="text-white-50 italic">
                            Extracirrcular Activities
                          </p>
                          <ul className="list-disc ms-5 mt-5 flex flex-col gap-3 text-white-50">
                            {card2.details.map((detail, index) => (
                              <li key={index} className="text-lg">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationSection;
