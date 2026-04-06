import NavBar2 from "../../components/NavBar2";
import Footer from "../../sections/Footer";
import TitleHeader from "../../components/TitleHeader";

const Project2 = () => {
  return (
    <>
      <NavBar2 />
      <section className="pt-30 pb-10">
        <TitleHeader
          title="Fantasy League Database Website"
          sub="University Project &middot; Web Development &middot; Python &middot; SQL &middot; mySQL"
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
                  <source
                    src="../../images/projects/DatabaseProject/Web.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text-content">
                <h2 className="mb-2">Summary:</h2>
                <p className="text-xl">
                  This website will be used by users who would like to manage
                  leagues, teams, players and the interactions between these
                  entities in an Fantasy Sports League environment.
                </p>
                <p className="text-xl pb-5">
                  I started the projet from scartch.{" "}
                </p>

                <h2 className="mb-2">Technical & Soft Skills Used:</h2>
                <ul className="list-disc list-inside gap-3 text-xl grid grid-cols-2">
                  <li>Front-end Development (HTML, CSS, Javascript, PHP)</li>
                  <li>Back-end Development: Basic SQL & mySQL</li>
                  <li>Teamwork & Collaboration</li>
                  <li>Time Management</li>
                </ul>

                <div className="mb-0 image-wrapper grid grid-cols-2 gap-3">
                  <img
                    className="object-contain"
                    src="../../images/projects/DatabaseProject/ERD.jpeg"
                    alt="ERD"
                  />
                  <img
                    className="object-contain"
                    src="../../images/projects/DatabaseProject/Create.jpeg"
                    alt="Create"
                  />
                </div>
                <div className="mt-0 image-wrapper grid grid-cols-2 gap-3">
                  <img
                    className="object-contain"
                    src="../../images/projects/DatabaseProject/Login.jpeg"
                    alt="Login"
                  />
                  <img
                    className="object-contain"
                    src="../../images/projects/DatabaseProject/User.jpeg"
                    alt="User"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project2;
