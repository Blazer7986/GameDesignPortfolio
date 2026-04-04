import Button from "../components/Button";
import { words } from "../constants";

const Intro = () => {
  return (
    <section id="intro" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout ">
        {/* LEFT: Hero content*/}
        <header className="intro-header flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1> Hello, I'm</h1>
              <h1>Vianey Rivera.</h1>
              <h1>
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-blue-50"
                        />
                        <span>{word.text} Designer</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>
            <p className="pt-15  md:text-xl relative pointer-events-none text-wrap w-xl">
              Welcome! I'm a game designer that specalizes in level and
              narrative design. I strive to create engaging and immersive
              experiences that captivate players and bring stories to life. With
              a passion for crafting compelling narratives and designing
              intricate levels, I aim to create games that leave a lasting
              impact on players.
            </p>
            <Button
              id="button"
              text="See My Projects"
              className="md:w-80 md:h-16 w-60 h-12"
            />
          </div>
        </header>
        {/* Right: Image*/}
      </div>
    </section>
  );
};

export default Intro;
