import React from "react";
import skillsData from "../data/SkillData";
import { SkillCard } from "../components/SkillCard";


const Skills = ({interactiveMode}) => {
  //const [isOrbitMode, setIsOrbitMode] = useState(true);

  return (
   <div id="skills" className="text-white p-4 sm:p-6 lg:p-8 pt-15 scroll-mt-15">
      <div className="max-w-7xl mx-auto ">
      <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">Skills</h1>
       <div className="h-1 w-24 bg-emerald-500 mx-auto my-8 rounded-full" />

      {/* Toggle
      <div className="mb-6 flex justify-center items-center gap-2 text-white">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            
            onChange={() => setIsOrbitMode(!isOrbitMode)}
          />
          <div className="peer h-5 w-10 rounded-full bg-gray-600 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-sky-500 peer-checked:after:translate-x-5"></div>
        </label>
        <span className="text-sm">
          {isOrbitMode ? "Orbit Mode" : "Scatter Mode"}
        </span>
      </div> */}

      {/* Skill cards */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        {skillsData.map((data) => (
          <SkillCard
            key={data.category}
            category={data.category}
            skills={data.skills}
            orbitMode={interactiveMode} // 🔥 Pass the toggle value here
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;
