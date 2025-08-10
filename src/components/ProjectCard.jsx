import { GoCheckCircleFill } from "react-icons/go";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React, {useEffect} from "react";
// The `project` prop contains all the data for one project.
export default function ProjectCard({ project }) {
  const { title, date, source, description, bullets, techStack, github, live } = project;
//  useEffect(() => {
//     const adjustHeights = () => {
//       const cards = document.querySelectorAll(".project-card");
//       let maxHeight = 0;
//       cards.forEach(c => {
//         c.style.height = "auto"; // reset so re-measure works
//         maxHeight = Math.max(maxHeight, c.offsetHeight);
//       });
//       cards.forEach(c => (c.style.height = `${maxHeight}px`));
//     };

//     adjustHeights();
//     window.addEventListener("resize", adjustHeights);

//     return () => window.removeEventListener("resize", adjustHeights);
//   }, [project]); 
  return (
    <article className="project-card p-6 sm:p-8 rounded-2xl border  border-white/20 flex flex-col transition-all duration-300 hover:border-emerald-500 ">
      
      {/* Header */}
      <header className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full whitespace-nowrap">{date}</span>
      </header>

      <p className="text-sm font-semibold text-emerald-400 mb-4">{source}</p>
      <p className="text-gray-300 mb-6">{description}</p>

      {/* Bullets */}
<ul className="space-y-3 text-gray-300 mb-6">
  {bullets.map((bullet, idx) => (
    <li key={idx} className="flex items-start gap-3">
      <GoCheckCircleFill
        id="bullet"
        className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0"
      />
      <div className="pl-0.5">
        <span className="inline-block origin-left ">
          {bullet}
        </span>
      </div>
    </li>
  ))}
</ul>


      {/* Footer */}
      <footer className="mt-auto pt-4 border-t border-gray-700/50 flex flex-wrap gap-4 justify-between items-center">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span key={idx} className="bg-emerald-500/10 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full border border-emerald-500/20">
              {tech}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex items-center gap-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
              <FaGithub /> GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}