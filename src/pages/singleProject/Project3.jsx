import NavBar2 from "../../components/NavBar2";
import Footer from "../../sections/Footer";
import TitleHeader from "../../components/TitleHeader";

const Project3 = () => {
  return (
    <>
      <NavBar2 />
      <section className="pt-30 pb-10">
        <TitleHeader
          title="Clean Cycle's Smart Trash Bin Product"
          sub="University Project &middot; Engineering &middot; C++ &middot; Audrino"
        />
        <div className="single-project">
          <div className="project-wrapper">
            <div id="overview">
              <div className="mt-5 h-128 w-4xl overflow-hidden mx-auto">
                <iframe
                  className="h-full w-full object-cover"
                  controls
                  autoplay
                  muted
                  src="https://docs.google.com/presentation/d/e/2PACX-1vTPP4amyTeu98lsZSauBtQSusfRtDmX-rVN1I8kuGYFq1Gun4o9gKGzv3_yotV3mJFImR_ukB4Gu_fQ/pubembed?start=false&loop=true&delayms=3000"
                >
                  Your browser does not support the video tag.
                </iframe>
              </div>

              <div className="text-content">
                <h2 className="mb-2">Description:</h2>
                <p className="text-xl">
                  Clean Cycle&#8217;s mission is to help inform people and
                  organizations about the problem of excessive MSW being
                  carelessly or improperly discarded and building up in public
                  spaces and landfills daily. Some waste that could have been
                  recyclable, reusable, or made into compost is left to be
                  disgraded and accumulated in these landfills. Any food waste
                  disposal left unattended in landfills will increase greenhouse
                  gases, global warming, and air pollution. These environmental
                  issues can be reduced or eliminated by unifying every
                  individual in households, industries, and companies whether
                  urban, suburban, or rural places. CleanCycle is here to
                  exercise caution and awareness of how waste should be
                  organized and thrown out properly with our product.
                </p>
                <p className="text-xl pb-5">
                  CleanCycle will provide a “Simple and Sustainable Sanitation''
                  and we are “Streamlining Sustainability, One Cycle at a Time.”
                  In our company&#8217;s logan and tagline, we are greatly
                  concerned with improving sustainability from an individual or
                  corporate standpoint.
                </p>

                <h2 className="mb-2">Technical & Soft Skills Used:</h2>
                <ul className="list-disc list-inside gap-3 text-xl grid grid-cols-2">
                  <li>Audrino & C++</li>
                  <li>Wiring</li>
                  <li>Timemangement</li>
                  <li>Collaboration</li>
                  <li>Teamwork</li>
                </ul>

                <div className="mb-5 image-wrapper grid grid-cols-2 gap-3">
                  <img
                    className="object-contain"
                    src="../../images/projects/TrashBinProject/sketch.png"
                    alt="sketch"
                  />
                  <img
                    className="object-contain"
                    src="../../images/projects/TrashBinProject/3D-Model.png"
                    alt="Model"
                  />
                </div>

                <h2 className="mb-2 sm:mt-10 md:mt-50 lg:mt-90 xl:mt-90 2xl:mt-120 transition-all ease-in-out"></h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project3;
