/* src/components/SkillCard.js */

import { OrbitingCircles } from "./OrbitingCircles";
import React, { useRef } from "react";
import { motion } from "framer-motion";

// Reusable Icon component - no changes needed here
const Icon = ({ src, name,  size = 38 }) => (
  <div className="flex flex-col items-center space-y-1" style={{ width: size }}>
    <img
      src={src}
      alt={name}
      className="rounded-sm object-contain"
      style={{ width: size, height: size }}
    />
    <span className="text-xs text-white text-center">{name}</span>
  </div>
  
);
const getRandomPosition = () => {
  const top = Math.floor(Math.random() * 70 + 10);   // 10%–80%
  const left = Math.floor(Math.random() * 70 + 10);  // 10%–80%
  return {
    top: `${top}%`,
    left: `${left}%`,
  };
}
export const SkillCard = ({ category, skills, orbitMode }) => {
  // --- LOGIC CHANGE ---
  // Split the skills array into two halves for the two orbits
  // const half = Math.ceil(skills.length / 2);
  // const firstHalf = skills.slice(0, half);
  // const secondHalf = skills.slice(half);
const containerRef = useRef();

return (
  <div className="group relative rounded-xl border border-white/10 backdrop-blur-xl p-[1px] transition-all duration-300 hover:border-emerald-500">
    <div
      ref={containerRef}
      className="relative flex h-80 w-full flex-col items-center justify-center overflow-hidden rounded-lg  p-4"
    >
      {/* Conditional rendering */}
      {orbitMode ? (
        <div className="absolute inset-0 flex items-center justify-end">
          <OrbitingCircles
            className="border-none bg-transparent"
            radius={150}
            duration={25}
            iconSize={38}
          >
            {skills.map((skill) => (
              <Icon
                key={skill.name}
                src={skill.icon}
                name={skill.name}
                size={38}
              />
            ))}
          </OrbitingCircles>
        </div>
      ) : (
        skills.map((skill) => (
 <motion.div
  key={skill.name}
  drag
  dragConstraints={containerRef}
  whileHover={{ scale: 1.05 }}
  className="absolute flex flex-col items-center text-white text-xs cursor-grab"
  style={getRandomPosition()}
>
  <img
    src={skill.icon}
    alt={skill.name}
    className="w-10 h-10 object-contain cursor-grab"
    draggable="false"
  />
  <span className="mt-1">{skill.name}</span>
</motion.div>

        ))
      )}

      {/* Title */}
    <div className="flex flex-col self-start group">
  <p className="text-xl font-bold text-white group-hover:text-emerald-500 lg:text-2xl">{category}</p>
</div>
    </div>
  </div>
);
}

 