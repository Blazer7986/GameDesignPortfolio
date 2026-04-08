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
                  I started the project from scartch.
                </p>

                <h2 className="mb-2">Technical & Soft Skills Used:</h2>
                <ul className="list-disc list-inside gap-3 text-xl grid grid-cols-2">
                  <li>Unreal Engine - Blueprints (Video Game Creation)</li>
                  <li>Blender (3D Modeling)</li>
                  <li>Project Management - Google Workspace</li>
                  <li>Time Management - Hack N' Plan</li>
                </ul>

                <h2 className="mb-2 pt-5">Contributions To Project: </h2>
                <h3 className="mb-2">Level Design </h3>
                <ul className="list-disc list-outside ml-5 text-xl pb-5">
                  <li className="pb-5">
                    Owned the design and implementation of levels by creating a
                    digital 2D layout and using Unreal Engine to build a 3D
                    blockout.
                  </li>
                  <li>
                    Prepare the visual style, narrative, and mechanic systems
                    for the level using the 2D layout markings and directions.
                  </li>
                </ul>

                <h3 className="mb-2">Narrative Design </h3>
                <ul className="list-disc list-outside ml-5 text-xl pb-5">
                  <li className="pb-5">
                    Prepare a Game and Narrative Design Document to precisely
                    comprehend the genre, plot, characters, super-story, and
                    game theme in order to incorporate these elements into the
                    vertical slice.
                  </li>
                  <li>
                    Designed the narrative to coexist with the player's tutorial
                    without unnecessary interruptions. As well as provide
                    foreshadowing of the protagonist's purpose.
                  </li>
                </ul>

                <h3 className="mb-2">Combat System </h3>
                <ul className="list-disc list-outside ml-5 text-xl pb-5">
                  <li className="pb-5">
                    Owned the design and implementation of combat encounters
                    throughout medium-sized exploration area.
                  </li>
                  <li>
                    Designed and tuned complex combat arenas and encounters to
                    allow for the player to perform stealthy or direct combat
                    with criminals. There is an emphasis on striking a balance
                    between the diffculty of the criminal's strength and the
                    player's immersion.
                  </li>
                </ul>

                <h3 className="mb-2">Dialogue System </h3>
                <ul className="list-disc list-outside ml-5 text-xl pb-5 gap-5">
                  <li className="pb-5">
                    Created several data tables for the dialogue system so that
                    specific charcters, such as witnesses and allies, may speak.
                  </li>
                  <li>
                    Identified when and where to implement speaking characters
                    in the level and how they may react to specific dialogue
                    choices.
                  </li>
                </ul>

                <h3 className="mb-2">Inventory System </h3>
                <ul className="list-disc list-outside ml-5 text-xl pb-10">
                  <li className="pb-5">
                    Created an inventory that can display the image and quantity
                    of items the player has picked up.
                  </li>
                  <li>
                    Designed the inventory to drop items or stack up items to a
                    maximum of ten.
                  </li>
                </ul>
              </div>
            </div>

            <hr class="border-t-3 border-gray-300 pb-5" />

            <div id="Level1">
              <div className="text-content">
                <h2 className="mb-2 text-5xl font-bold">
                  Urban City - Terra Street (~8 mins)
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

                <div className="image-wrapper grid grid-cols-2 gap-3 mb-0">
                  <img
                    className="object-contain"
                    src="../../images/projects/RogueDetective/Dialogue/UI.png"
                    alt="UI"
                  />
                  <img
                    className="object-contain"
                    src="../../images/projects/RogueDetective/Inventory/Table1.png"
                    alt="Table1"
                  />
                </div>
                <div className="image-wrapper mt-0 grid grid-cols-2 gap-3">
                  <img
                    className="object-contain"
                    src="../../images/projects/RogueDetective/Environment.png"
                    alt="Environment"
                  />
                  <img
                    className="object-contain"
                    src="../../images/projects/RogueDetective/Sneak.png"
                    alt="Sneak"
                  />
                </div>

                <h2 className="mb-2 mt-5">Design Goals</h2>
                <p className="text-xl mb-2">
                  The core goals for Terra Street were:
                </p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">G1</li>
                  <li>G2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <h2 className="mb-2 text-4xl font-bold">
                  Level Structure & Player Flow
                </h2>
                <p className="text-xl mb-2">Terra Street's main focus were:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">F1</li>
                  <li>F2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <div className="image-wrapper2">
                  <img
                    src="../../images/projects/RogueDetective/drawing.png"
                    alt="Layout"
                  />
                </div>

                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/RogueDetective/"
                    alt="CrimeScene"
                  />
                  <img
                    src="../../images/projects/RogueDetective/"
                    alt="Alley"
                  />
                </div>
                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/RogueDetective/"
                    alt="Hideout#1"
                  />
                  <img
                    src="../../images/projects/RogueDetective/"
                    alt="Hideout#2"
                  />
                </div>

                <h2 className="mb-2 mt-5 text-4xl font-bold">
                  Inventory System Integration
                </h2>
                <p className="text-xl mb-2">Examples:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">E1</li>
                  <li>E2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <div className="image-wrapper grid grid-cols-2 gap-3 mb-0">
                  <img
                    src="../../images/projects/RogueDetective/Inventory/Table2.png"
                    alt="Table2"
                  />
                  <img
                    src="../../images/projects/RogueDetective/Inventory/Table3.png"
                    alt="Table3"
                  />
                </div>

                <h2 className="mb-2 mt-5">Diffculty & Progression</h2>
                <p className="text-xl mb-2">Diffculties:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">D1</li>
                  <li>D2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <h2 className="mb-2 mt-5">Outcomes & Learnings</h2>
                <p className="text-xl mb-2">Outcomes:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">O1</li>
                  <li>O2</li>
                </ul>
                <p className="text-xl mb-2">Learnings:</p>
                <ul className="list-disc list-outside ml-5 text-xl pb-10">
                  <li className="pb-5">L1</li>
                  <li>L2</li>
                </ul>

                <h2 className="mb-2 mt-5 text-4xl font-bold">
                  Dialogue System Integration
                </h2>
                <p className="text-xl mb-2">Examples:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">E1</li>
                  <li>E2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <div className="image-wrapper2">
                  <img
                    src="../../images/projects/RogueDetective/Dialogue/DialogueSystem.png"
                    alt="DialogueSystem"
                  />
                </div>
                <div className="image-wrapper grid grid-cols-2 gap-3 mb-0">
                  <img
                    src="../../images/projects/RogueDetective/Dialogue/Talk1.png"
                    alt="Talk2"
                  />
                  <img
                    src="../../images/projects/RogueDetective/Dialogue/Talk2.png"
                    alt="Talk2"
                  />
                </div>

                <h2 className="mb-2 mt-5">Diffculty & Progression</h2>
                <p className="text-xl mb-2">Diffculties:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">D1</li>
                  <li>D2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <h2 className="mb-2 mt-5">Outcomes & Learnings</h2>
                <p className="text-xl mb-2">Outcomes:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">O1</li>
                  <li>O2</li>
                </ul>
                <p className="text-xl mb-2">Learnings:</p>
                <ul className="list-disc list-outside ml-5 text-xl pb-10">
                  <li className="pb-5">L1</li>
                  <li>L2</li>
                </ul>

                <h2 className="mb-2 mt-5 text-4xl font-bold">
                  Combat System Integration
                </h2>
                <p className="text-xl mb-2">Examples:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">E1</li>
                  <li>E2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/RogueDetective/Combat/Attack1.png"
                    alt="Attack1"
                  />
                  <img
                    src="../../images/projects/RogueDetective/Combat/Attack2.png"
                    alt="Attack2"
                  />
                </div>
                <div className="image-wrapper grid grid-cols-2 gap-3">
                  <img
                    src="../../images/projects/RogueDetective/Combat/Following1.png"
                    alt="Rogue Detective"
                  />
                  <img
                    src="../../images/projects/RogueDetective/Combat/Following2.png"
                    alt="Rogue Detective"
                  />
                </div>

                <h2 className="mb-2 mt-5">Diffculty & Progression</h2>
                <p className="text-xl mb-2">Diffculties:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">D1</li>
                  <li>D2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <h2 className="mb-2 mt-5">Outcomes & Learnings</h2>
                <p className="text-xl mb-2">Outcomes:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">O1</li>
                  <li>O2</li>
                </ul>
                <p className="text-xl mb-2">Learnings:</p>
                <ul className="list-disc list-outside ml-5 text-xl pb-10">
                  <li className="pb-5">L1</li>
                  <li>L2</li>
                </ul>
              </div>
            </div>

            <hr class="border-t-3 border-gray-300 pb-5" />

            <div id="Level2">
              <div className="text-content">
                <h2 className="mb-2 text-5xl font-bold">
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
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">K1</li>
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
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">D1</li>
                  <li>D2</li>
                </ul>
                <p className="text-xl pb-5">Something</p>

                <h2 className="mb-2 mt-5">Outcomes & Learnings</h2>
                <p className="text-xl mb-2">Outcomes:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">O1</li>
                  <li>O2</li>
                </ul>
                <p className="text-xl mb-2">Learnings:</p>
                <ul className="list-disc list-outside ml-5 text-xl">
                  <li className="pb-5">L1</li>
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
