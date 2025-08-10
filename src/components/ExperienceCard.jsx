import React from "react";

import {
  FaBuilding,
  FaMapPin,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";

const ExperienceCard = ({ experience }) => {
  return (

      <div className="group relative border border-white/10 backdrop-blur-xl hover:border-emerald-500 rounded-2xl p-6 h-full flex flex-col ">
        {/* Glow blob */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 opacity-20 blur-3xl pointer-events-none"
          data-atropos-offset="-10"
        />

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="bg-gray-700/50 p-3 rounded-lg border border-gray-600"
            data-atropos-offset="-4"
          >
            <FaBriefcase className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2
              className="text-xl font-bold text-white"
              data-atropos-offset="6"
            >
              {experience.role}
            </h2>
            <p
              className="text-gray-300 text-sm flex items-center gap-2 mt-1"
              data-atropos-offset="4"
            >
              <FaBuilding className="w-4 h-4" />
              {experience.company}
            </p>
          </div>
        </div>

        {/* Duration and Location */}
        <div
          className="flex flex-wrap text-sm text-gray-400 gap-x-6 gap-y-2 mb-4"
          data-atropos-offset="3"
        >
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="w-4 h-4 text-emerald-500" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapPin className="w-4 h-4 text-emerald-500" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-4" data-atropos-offset="2" />

        {/* Highlights */}
        <ul className="space-y-3 text-gray-300 text-sm list-none flex-grow">
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-3 group"
              data-atropos-offset={8 + i * 2}
            >
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-3 h-3 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-200" />
                <div className="absolute -inset-1 rounded-full bg-emerald-500 opacity-10 blur-sm pointer-events-none" />
              </div>
              <span className="text-slate-200 text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-200">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>
  
  );
};

export default ExperienceCard;
