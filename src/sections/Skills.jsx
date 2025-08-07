import React, { useState } from "react";
import skillsData from "../components/SkillData";
import { SkillCard } from "../components/SkillCard";

const Skills = () => {
  const [isOrbitMode, setIsOrbitMode] = useState(true);

  return (
   <div className="min-h-screen text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto ">
      <h1 className="mb-10 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Skills
      </h1>

      {/* Toggle */}
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
      </div>

      {/* Skill cards */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        {skillsData.map((data) => (
          <SkillCard
            key={data.category}
            category={data.category}
            skills={data.skills}
            orbitMode={isOrbitMode} // 🔥 Pass the toggle value here
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;
