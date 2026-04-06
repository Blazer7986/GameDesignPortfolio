import NavBar2 from "../../components/NavBar2";
import Footer from "../../sections/Footer";
import TitleHeader from "../../components/TitleHeader";

const Project1 = () => {
  return (
    <>
      <NavBar2 />
      <section className="pt-30 pb-10">
        <TitleHeader
          title="Rogue Detective"
          sub="Personal Project &middot; Unreal Engine &middot; Blueprints &middot; Game Designer"
        />
        <div className="single-project">
          <div className="project-wrapper">
            <div id="overview">
              {/* <div className="image-wrapper grid grid-cols-2 gap-3">
                <img
                  src="../../images/projects/project3.png"
                  alt="Rogue Detective"
                />
                <img
                  src="../../images/projects/project3.png"
                  alt="Rogue Detective"
                />
              </div> */}

              <div className="mt-5 h-128 w-4xl overflow-hidden mx-auto">
                <video
                  className="h-full w-full object-cover"
                  controls
                  autoplay
                  muted
                >
                  <source src="/" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text-content">
                <h2 className="mb-2">Summary:</h2>
                <p className="text-xl">
                  Rogue Detective is a first-person action-adventure game in
                  which players roleplay as an independent detective who gathers
                  witnesses’ testimony and reports their findings to trusted
                  authorities. The player must traverse rough terrain by
                  crouching under or jumping over physical obstacles.
                  Occasionally, they may hide from or fight criminals. They have
                  to successfully interact or haggle witnesses to properly
                  investigate the crime scene.
                </p>
                <p className="text-xl pb-5">
                  I started the projet from scartch.{" "}
                </p>

                <h2 className="mb-2">Technical & Soft Skills Used:</h2>
                <ul className="list-disc list-inside gap-3 text-xl grid grid-cols-2">
                  <li>Unreal Engine Blueprints (Video Game Creation)</li>
                  <li>Blender (3D Modeling)</li>
                  <li>Project Management - Google Workspace</li>
                  <li>Time Management - Hack N' Plan</li>
                </ul>

                <h2 className="mb-2">Contributions To Project: </h2>
                <h3 className="mb-2">Level Design </h3>
                <p className="text-xl pb-5">P</p>
                <h3 className="mb-2">Narrative Design </h3>
                <p className="text-xl pb-5">P</p>
                <h3 className="mb-2">Combat System </h3>
                <p className="text-xl pb-5">P</p>
                <h3 className="mb-2">Dialogue System </h3>
                <p className="text-xl pb-5">P</p>
                <h3 className="mb-2">Inventory System </h3>
                <p className="text-xl pb-5">P</p>

                {/* <h2>Demo Overview</h2>
            <video autoplay muted loop>
              <source src="/" type="video/mp4" />
            </video> */}
              </div>
            </div>

            <div>--</div>

            <div id="Level1">
              <div className="text-content">
                <h2 className="mb-2 text-4xl">
                  Urban City - Terra Street (10 mins)
                </h2>
                <p className="text-lg mb-2">
                  <b>Focus:</b> Exploration, Puzzle Design, Combat Encounters
                </p>
                <p className="text-xl">
                  Terra Street is a small area that the player can traverse.
                </p>
                <p className="text-xl">
                  Terra Street connect multiple character interactions, combat
                  encounters, and traversal challenges.
                </p>
                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                </div>
                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                </div>

                <h2 className="mb-2 mt-5">Design Goals</h2>
                <p className="text-xl mb-2">
                  The core goals for Terra Street were:
                </p>
                <ul className="list-disc list-inside text-xl">
                  <li>G1</li>
                  <li>G2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <h2 className="mb-2">Level Structure & Player Flow</h2>
                <p className="text-xl mb-2">Terra Street's main focus were:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>F1</li>
                  <li>F2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <div className="image-wrapper2">
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                </div>

                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                </div>

                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                </div>

                <h2 className="mb-2 mt-5">Puzzle & Combat Integration</h2>
                <p className="text-xl mb-2">Examples:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>E1</li>
                  <li>E2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                </div>
                <img
                  src="../../images/projects/project3.png"
                  alt="BlueprintSnippet"
                  className="w-[70%] mx-auto"
                />

                <h2 className="mb-2 mt-5">Diffculty & Progression</h2>
                <p className="text-xl mb-2">Diffculties:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>D1</li>
                  <li>D2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <h2 className="mb-2 mt-5">Outcomes & Learnings</h2>
                <p className="text-xl mb-2">Outcomes:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>O1</li>
                  <li>O2</li>
                </ul>
                <p className="text-xl mb-2">Learnings:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>L1</li>
                  <li>L2</li>
                </ul>

                {/* <h2>Demo Overview</h2>
                <video autoplay muted loop>
                <source src="/" type="video/mp4" />
                </video> */}
              </div>
            </div>

            <div>--</div>

            <div id="Level2">
              <div className="text-content">
                <h2 className="mb-2 text-4xl">
                  Introduction - Storytelling (3 mins)
                </h2>
                <p className="text-lg mb-2">
                  <b>Focus:</b> Narrative Pacing
                </p>
                <p className="text-xl pb-5">
                  Game opens up to a UI screen to introduce the player to the
                  world and certain characters including the protagonist.
                </p>

                <h2 className="mb-2 mt-5">Narrative & Design Intent</h2>
                <p className="text-xl mb-2">
                  The core goals for Terra Street were:
                </p>
                <p className="text-xl mb-2">Key Goals included:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>K1</li>
                  <li>K2</li>
                </ul>

                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                  <img
                    src="../../images/projects/project3.png"
                    alt="Rogue Detective"
                  />
                </div>

                <h2 className="mb-2 mt-5">Diffculty & Progression</h2>
                <p className="text-xl mb-2">Diffculties:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>D1</li>
                  <li>D2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <h2 className="mb-2 mt-5">Outcomes & Learnings</h2>
                <p className="text-xl mb-2">Outcomes:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>O1</li>
                  <li>O2</li>
                </ul>
                <p className="text-xl mb-2">Learnings:</p>
                <ul className="list-disc list-inside text-xl">
                  <li>L1</li>
                  <li>L2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project1;
