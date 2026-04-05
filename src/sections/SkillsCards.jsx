import { skills } from "../constants/index.js";

const SkillsCards = () => {
  return (
    <div id="skills" className="w-full padding-x-lg pt-20">
      <h1 className="text-5xl font-bold text-center pt-10 pb-10">Skills</h1>
      <div className="mx-auto grid-3-cols">
        {skills.map(({ imgPath, title, sub, desc }) => (
          <div key={title} className="card-border rounded-xl p-8 flex flex-col">
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white-50 text-2xl font-semibold mt-3">
              {title}
            </h3>
            <h3 className="text-white-50 text-xl font-semibold mb-3">{sub}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCards;
